import json
import requests
from typing import Literal

from apps.utils.enums import SolanaClusterEndpoint
from solana.rpc.api import Client
from solana.transaction import Transaction
from solders.system_program import TransferParams, transfer
LAMPORT_PER_SOL = 1000000000


def setup_node_cluster_url(chain) -> Literal['https://api.mainnet-beta.solana.com', 'https://api.testnet.solana.com', 'https://api.devnet.solana.com'] | None:
    chain_type = chain.upper()
    if chain_type == "MAINNET":
        return SolanaClusterEndpoint.MAINNET.value
    if chain_type == "TESTNET":
        return SolanaClusterEndpoint.TESTNET.value
    if chain_type == "DEVNET":
        return SolanaClusterEndpoint.DEVNET.value



class SolanaClient:
    def __init__(self, chain="testnet"):
        self.chain = chain
        self.base_url = setup_node_cluster_url(chain)
        self.headers = {'Content-Type': 'application/json'}

    def _call(self, method, params=None):
        data = {
            'jsonrpc': '2.0',
            'id': 1,
            'method': method,
            'params': params if params else []
        }
        try:
            response = requests.post(self.base_url, data=json.dumps(data), headers=self.headers)
            if response.status_code == 200:
                return response.json().get('result')
            else:
                return None
        except requests.exceptions.RequestException as e:
            print(f"RequestException: {e}")
            return None

    def getAccountInfo(self, pubkey):
        return self._call('getAccountInfo', [pubkey])

    def getBalance(self, pubkey):
        return self._call('getBalance', [pubkey])['value']/LAMPORT_PER_SOL



class TransactionClient:
    LAMPORT_PER_SOL = 1000000000
    def __init__(self, client_url, sender_address, receiver_address, amount, sender_private_key):
        self.client: Client = Client(client_url)
        self.sender = sender_address
        self.receiver = receiver_address
        self.amount = amount
        self.pk = sender_private_key

    def process_sol_transaction(self):
        airdrop = self.client.request_airdrop(self.sender, float(self.amount) * self.LAMPORT_PER_SOL)
        airdrop_signature = airdrop.value
        self.client.confirm_transaction(airdrop_signature)

        transaction = Transaction().add(transfer(TransferParams(
            from_pubkey=self.sender,
            to_pubkey=self.receiver,
            lamports=1_000_000)
        ))
        result = self.client.send_transaction(transaction, self.pk)
        print(f"airdrop: {airdrop}\n\nsignature: {airdrop_signature}\n\n{result}")


#a = SolanaClient().getBalance("64Wdf7WUvnKscHycLd9WGW92r8ChqNpprD9SrjgpuUHA")
#print(a)