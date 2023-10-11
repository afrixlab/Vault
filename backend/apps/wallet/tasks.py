from celery import shared_task
from apps.utils.wallet import SolanaClient
from .models import Wallet
from django.utils import timezone

@shared_task
def update_users_balance():
    wallets = Wallet.objects.all()
    for wallet in wallets:
        solana_address = wallet.address
        solana_client = SolanaClient()

        try:
            balance = solana_client.getBalance(solana_address)
            wallet.wallet_balance = float(balance)
            wallet.save()
        except Exception as e:
            pass

@shared_task
def unlock_wallet():
    wallet = Wallet
    wallet.objects.filter(
        is_locked=True, locked_expiry_date__gte=timezone.now()
    ).update(is_locked=False, locked_expiry_date=None)
