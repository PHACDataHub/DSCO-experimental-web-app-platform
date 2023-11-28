#!/bin/bash

# Getting and Setting the necessary variables
REGION=northamerica-northeast1
DB_POSTGRES_PASSWORD=$(openssl rand -base64 15)
CURRENT_PROJECT=$(gcloud config get-value project)

# Enabling the required APIs
gcloud services enable \
    sqladmin.googleapis.com \
    container.googleapis.com

# Creating the Cloud SQL instance
gcloud sql instances create hasura-postgres --database-version POSTGRES_9_6 \
    --cpu 1 --memory 3840MiB --region ${REGION} --project ${CURRENT_PROJECT}

# Set the password for the database
gcloud sql users set-password postgres --instance hasura-postgres \
       --password ${DB_POSTGRES_PASSWORD} --project ${CURRENT_PROJECT}

# Create the Kubernetes Cluster
gcloud container clusters create hasura-k8s \
    --zone ${REGION} --num-nodes 1 --project ${CURRENT_PROJECT}

# Create the Service Account
gcloud iam service-accounts create hasura-k8s-service-account \
    --description="The service account that hasura uses" \
    --display-name="hasura-k8s-service-account"

# Grant the service account the 'Cloud SQL Admin' role
gcloud projects add-iam-policy-binding ${CURRENT_PROJECT} \
    --member="serviceAccount:hasura-k8s-service-account@${CURRENT_PROJECT}.iam.gserviceaccount.com" \
    --role="roles/cloudsql.admin"

# Create a Directory to store all the files related to the project/work
mkdir ${CURRENT_PROJECT}

# Download and save the service_account.json file
gcloud iam service-accounts keys create hasura_k8s_service_account.json --iam-account=hasura-k8s-service-account@${CURRENT_PROJECT}.iam.gserviceaccount.com

# Move the service account json file to the project directory
mv hasura_k8s_service_account.json ${CURRENT_PROJECT}

# Create a Kubernetes secret with this JSON key file
kubectl create secret generic cloudsql-instance-credentials \
    --from-file=credentials.json=./${CURRENT_PROJECT}/hasura_k8s_service_account.json

# Create another secret with the database username and password (uses the ${DB_POSTGRES_PASSWORD} used earlier)
kubectl create secret generic cloudsql-db-credentials \
    --from-literal=username=postgres --from-literal=password=${DB_POSTGRES_PASSWORD}

# Get the INSTANCE_CONNECTION_NAME using the following command, save it to variable, and export it
INSTANCE_CONNECTION_NAME="$(gcloud sql instances describe hasura-postgres --format="value(connectionName)" --project ${CURRENT_PROJECT})"
export INSTANCE_CONNECTION_NAME

# Replace the variable within pre_config_deployment.yaml with the real value and create a new deployment file with it (post_config_deployment.yaml)
envsubst '${INSTANCE_CONNECTION_NAME}' < pre_config_deployment.yaml > ./${CURRENT_PROJECT}/post_config_deployment.yaml

# Store all the variables from the script into a file for future reference
FILE_NAME="./${CURRENT_PROJECT}/${CURRENT_PROJECT}_all_set_variables.txt"
set | grep -E 'REGION|CURRENT_PROJECT|DB_POSTGRES_PASSWORD|INSTANCE_CONNECTION_NAME' > "$FILE_NAME"

# Deploy the Kubernetes stack via the post_config_deployment.yaml
kubectl apply -f ./${CURRENT_PROJECT}/post_config_deployment.yaml

# Ensure the pods are up and running
kubectl get pods

# HTTP: Now that we have Hasura running, let's expose it on an IP using a LoadBalancer.
kubectl expose deploy/hasura \
     --port 80 --target-port 8080 \
     --type LoadBalancer

# Once allocated, get the external IP to view the Hasura console
kubectl get service

# In case the external IP isn't provisioned yet, let the user know how to check and get it
echo "If there has been no external IP address yet provisioned for the Hasura console,"
echo "you can try running 'kubectl get service' in a minute or two to check its status."

# Tell the user that database password
echo "The Cloud SQL Postgres database called 'hasura-postgres' has the following strong password"
echo "Please COPY + PASTE to store this password somewhere safe:"
echo ""
echo ${DB_POSTGRES_PASSWORD}
echo ""
echo "This password is also stored in the ./${CURRENT_PROJECT} directory"