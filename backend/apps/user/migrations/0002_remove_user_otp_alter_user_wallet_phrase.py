# Generated by Django 4.2.5 on 2023-10-01 08:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='otp',
        ),
        migrations.AlterField(
            model_name='user',
            name='wallet_phrase',
            field=models.CharField(blank=True, max_length=255, null=True, unique=True, verbose_name='User Wallet Phrase'),
        ),
    ]
