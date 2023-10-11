# Generated by Django 4.2.5 on 2023-10-08 16:18

import apps.utils.enums.base
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Wallet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_added', models.DateTimeField(auto_now_add=True)),
                ('date_last_modified', models.DateTimeField(auto_now=True)),
                ('wallet_balance', models.DecimalField(blank=True, decimal_places=3, default=0, max_digits=15, verbose_name='Wallet Balance')),
                ('address', models.CharField(blank=True, editable=False, max_length=255, null=True, unique=True, verbose_name='Wallet address')),
                ('s_pk', models.CharField(blank=True, editable=False, max_length=255, null=True, verbose_name='Solana KeyPair')),
                ('hint', models.CharField(max_length=255, verbose_name='User key hint')),
                ('wallet_name', models.CharField(max_length=255, verbose_name='Wallet name')),
                ('skey', models.CharField(max_length=255)),
                ('locked', models.BooleanField(default=False, verbose_name='Wallet locked')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Wallet Owner')),
            ],
            options={
                'abstract': False,
            },
            bases=(apps.utils.enums.base.BaseModelBaseMixin, models.Model),
        ),
    ]
