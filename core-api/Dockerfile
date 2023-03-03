# Installing backend Django
FROM python:3

# Set environment variables
ENV PYTHONUNBUFFERED=1

# Create and set up needed directory
RUN mkdir /code
WORKDIR /code
COPY requirements.txt /code/

# Install required packages
RUN pip install -r requirements.txt

# Copy the project over
COPY . /code/

# Run initial commands
RUN chmod +x /code/docker-entrypoint.sh

ENTRYPOINT [ "/code/docker-entrypoint.sh" ]
