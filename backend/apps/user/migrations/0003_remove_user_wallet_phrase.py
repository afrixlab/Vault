# Generated by Django 4.2.5 on 2023-10-01 19:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_remove_user_otp_alter_user_wallet_phrase'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='wallet_phrase',
        ),
    ]
