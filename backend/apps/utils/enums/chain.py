from .base import BaseEnum

class BlockchainConsensusType(BaseEnum):
    PROOF_OF_WORK = "(PoW)"
    PROOF_OF_STAKE ="(PoS)"
    DELEGATED_PROOF_OF_STAKE= "(DPoS)"
    PROOF_OF_AUTHORITY = "(PoA)"
    PROOF_OF_SPACE_AND_TIME = "(PoST)"
    PROOF_OF_HISTORY = "(PoH)"
    PROOF_OF_ELASPSED_TIME = "(PoET)"
    PRATICAL_BYZANTINE_FAULT_TOLERANCE = "(PBFT)"
    DIRECTED_ACYCLIC_GRAPH = "(DAG)"

class NodeType(BaseEnum):
    MAINNET = "MAINNET"
    TESTNET = "TESTNET"
    DEVNET = "DEVNET"


class CoinType(BaseEnum):
    STABLE_COIN = "STABLE_COIN"
    POPULAR_COIN = "POPULAR_COIN"
    OTHER = "OTHER"


class SolanaClusterEndpoint(BaseEnum):
    MAINNET = "https://api.mainnet-beta.solana.com"
    TESTNET = "https://api.testnet.solana.com"
    DEVNET = "https://api.devnet.solana.com"

class TransactionType(BaseEnum):
    SENT = "SENT"
    RECEIVED = "RECEIVED"

class TransactionStatus(BaseEnum):
    FAILED = "FAILED"
    CONFIRMED = "CONFIRMED"
    PROCESSED = "PROCESSED"
    EXPIRED = "EXPIRED"
    PROCESSING = "PROCESSING"