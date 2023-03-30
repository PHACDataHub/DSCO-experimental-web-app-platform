from django.apps import AppConfig


# This app has the API layer (schema.py) and models for the database (models.py)
class BackendConfig(AppConfig):
    name = "backend"
