# Using Cloud Build Triggers

This is a script that would be run within `gcloud` using the local CLI or through the browser using Google Cloud Console.

This script will create the **Cloudbuild** triggers on the GCP side to look at this repo and check for any changes and rebuild the cloud containers within the **Artifact Registry** to be consumed by **Cloud Run**.

There is a limitation of 100 steps in a cloudbuild.yaml file.

So we will loop through all the desired services to make separate triggers and utilize their respective cloubuild.yaml files (found in their directory) for each service.

```bash
export PROJECT_ID="phx-benbutmir"
export REGION="northamerica-northeast1"
export SVC_GROUP="simple-gke-infra"

gcloud builds triggers list --region ${REGION}

# Now, in a loop
for svc in django-time go-time deno-time nginx-site caddy-site; do
  gcloud builds triggers create github \
    --name=${SVC_GROUP}-${svc} \
    --region ${REGION} \
    --repo-name=simple-gke-infra \
    --repo-owner=daneroo \
    --branch-pattern="^main$" \
    --build-config=${svc}/cloudbuild.yaml
done

# and now delete them all
for svc in django-time go-time deno-time nginx-site caddy-site; do
  gcloud builds triggers delete --region ${REGION} ${SVC_GROUP}-${svc}
done
```
