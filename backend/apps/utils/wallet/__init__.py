
from cryptography.fernet import Fernet
from solders.keypair import Keypair
from mnemonic import Mnemonic
from django.conf import settings
from apps.utils.wallet.queries import TransactionClient, SolanaClient,setup_node_cluster_url

mnemo = Mnemonic("english")
class WalletClient:
    key = Fernet(settings.FERNET_KEY)
    @staticmethod
    def create_new_wallet() -> Keypair:
        return Keypair()

    @staticmethod
    def create_new_wallet_phrase() -> str:
        return mnemo.generate(strength=256)

    @staticmethod
    def create_key():
        return Fernet.generate_key()

    @staticmethod
    def encrypt_wallet_password(message):
        key = Fernet(settings.FERNET_KEY)
        return key.encrypt(message.encode("utf-8"))

    @staticmethod
    def decrypt_wallet_password(message):
        key = Fernet(settings.FERNET_KEY)
        return key.decrypt(message.decode("utf-8"))


