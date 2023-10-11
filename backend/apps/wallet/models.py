from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from apps.utils import enums
from apps.utils.helpers.commons import DateTime

UserModel=get_user_model()

class Wallet(enums.BaseModelMixin):
    owner = models.ForeignKey(
        UserModel,
        on_delete=models.CASCADE,
        verbose_name= _("Wallet Owner")
    )

    wallet_balance = models.DecimalField(
        _("Wallet Balance"),
        default=0,
        max_digits=15,
        decimal_places=3,
        null=False,
        blank=True,
    )

    address = models.CharField(
        _("Wallet address"),
        unique=True,
        editable=False,
        max_length=255,
        null=True,
        blank=True
    )

    s_pk = models.CharField(
        _("Solana KeyPair"),
        blank=True,
        null=True,
        max_length=255,
        editable=False
    )

    hint = models.CharField(
        _("User key hint"),
        max_length=255,
        null=True,
        blank=True,
    )

    wallet_name = models.CharField(
        _("Wallet name"),
        null=False,
        blank=False,
        max_length=255
    )

    is_locked = models.BooleanField(
        _("Wallet locked"),
        default=False,
    )

    locked_expiry_date = models.DateTimeField(
        _("wallet lock expiry date"), null=True, blank=True
    )

    @property
    def get_lock_time(self):
        current_datetime = timezone.now()
        time_remaining_seconds = DateTime.get_difference_between_two_dates_in_secs(
            self.locked_expiry_date, current_datetime
        )
        time_remaining_readable = DateTime.convert_seconds_to_hr_min(time_remaining_seconds)
        return time_remaining_readable



    class Meta:
        verbose_name = 'Wallet'
        verbose_name_plural = 'Wallets'

    def __str__(self):
        return f"<{self.owner.email} - {self.wallet_name} - {self.wallet_balance}>"


