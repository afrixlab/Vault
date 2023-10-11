from tabnanny import verbose
from .models import Wallet
from rest_framework import serializers


class WalletSerializers(
    serializers.ModelSerializer
):

    class Meta:
        model= Wallet
        fields = ["wallet_name", "hint"]
        ref_name = "Wallet"


    class Create(serializers.ModelSerializer):
        class Meta:
            model= Wallet
            fields = ["wallet_name", "hint"]
            ref_name = "Wallet - Create"

    class Retrieve(serializers.ModelSerializer):
        class Meta:
            model = Wallet
            exclude = [
                "owner",
                "s_pk"
            ]

            ref_name = "Wallet - Retrieve"
