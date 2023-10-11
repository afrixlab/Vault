from celery import shared_task
from django.contrib.auth import get_user_model

from apps.utils.helpers import (
    EmailClient
)
from apps.utils.wallet import TransactionClient,WalletClient,SolanaClient,setup_node_cluster_url


from django.utils import timezone
from django_celery_beat.models import PeriodicTask

LAMPORT_PER_SOL = 1000000000

@shared_task
def send_email_to_user(user_id: int, subject, message):
    UserModel = get_user_model()
    instance = UserModel.objects.get(id=user_id)
    email_messaging_helper = EmailClient(
        instance.email, subject, message, instance.short_name
    )
    email_messaging_helper.send_mail()



@shared_task
def send_send_sol(user_id: int, reciever_wallet: str, amount: float, chain_type):
    UserModel = get_user_model()
    instance = UserModel.objects.get(id=user_id)
    chain = setup_node_cluster_url(chain_type)
    pk= WalletClient.decrypt_keypair(instance.solana_pk)
    transfer_helper = TransactionClient(
        client_url=chain,
        sender_address=instance.solana_address,
        receiver_address=reciever_wallet,
        amount=float(amount),
        sender_private_key=pk
    )
    transfer_helper.process_sol_transaction()


@shared_task
def clear_out_periodic_tasks():
    PeriodicTask.objects.filter(expires__lte=timezone.now()).delete()






