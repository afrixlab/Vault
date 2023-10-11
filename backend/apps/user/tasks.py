from celery import shared_task
from django.contrib.auth import get_user_model
from .models import PasswordResetToken
from apps.utils.helpers import (
    EmailClient
)


@shared_task
def delete_expired_password_reset_tokens():
    for token_obj in PasswordResetToken.objects.all():
        if token_obj.is_expired:
            token_obj.delete()
