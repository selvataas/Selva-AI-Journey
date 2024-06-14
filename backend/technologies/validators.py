import os

from django.core.exceptions import ValidationError


def validate_file_extension(value):
    ext = os.path.splitext(value.name)[1]  # [0] returns path and filename
    valid_extensions = [".svg"]  # populate with the allowed extensions
    if ext.lower() not in valid_extensions:
        raise ValidationError("Unsupported file extension.")
