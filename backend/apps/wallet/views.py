from tkinter import EXCEPTION
from apps.utils import (
    mixins,
    exceptions,
)
from apps.utils import wallet
from rest_framework import (
    viewsets,
    response,
    status,
    decorators
)

from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from .serializers import WalletSerializers
from .models import Wallet
class WalletViewSet(
    mixins.CustomRequestDataValidationMixin,
    viewsets.ModelViewSet
):
    queryset = Wallet.objects
    serializer_class = WalletSerializers
    http_method_names = ["get","post"]

    def get_queryset(self):
        return self.queryset.all()

    def get_required_fields(self):
        if self.action == "new_wallet":
            return ["wallet_name","hint"]

        if self.action == "lock_wallet":
            return ['wallet_id','lock_period']
        return []
    @swagger_auto_schema(auto_schema=None)
    def create(self, request, *args, **kwargs):
        pass
    def list(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            queryset = self.queryset.filter(owner=request.user)
            serializer = self.serializer_class.Retrieve(queryset, many=True)
            return response.Response(data=serializer.data)

    @decorators.action(methods=['post'],detail=False)
    def new_wallet(self, request, *args, **kwargs):
        """
        The above function creates a new wallet for a user, checks if a wallet with the same name
        already exists, and returns the serialized data of the newly created wallet.

        :param request: The `request` parameter is an object that represents the HTTP request made by
        the client. It contains information such as the request method (e.g., GET, POST), headers, user
        authentication details, and the request data. In this code snippet, the `request` object is used
        to access the
        :return: The code is returning a response with a status code of 200 (OK) and the serialized data
        of the newly created wallet instance.
        """
        existing_wallet_with_name = Wallet.objects.filter(
            owner=request.user,
            wallet_name=request.data.get('wallet_name')
        )
        if existing_wallet_with_name.exists():
            raise exceptions.CustomException(
                message='A wallet with the same name already exists for this user.',
                errors=["Wallet name exist"]
            )
        wallet_data = wallet.WalletClient.create_new_wallet()
        wallet_instance = Wallet(
            owner=request.user,
            address=wallet_data.pubkey(),
            wallet_name=request.data.get('wallet_name'),
        )
        wallet_instance.s_pk = wallet.WalletClient.encrypt_wallet_password(str(wallet_data))
        wallet_instance.save()
        serializer = self.serializer_class.Retrieve(wallet_instance)

        return response.Response(
            status=status.HTTP_200_OK,
            data=serializer.data
        )

    @decorators.action(detail=False, methods=["post"])
    def lock_wallet(self, request, *args, **kwargs):
        """
        The `lock_wallet` function locks a wallet by setting its `is_locked` attribute to `True` and
        updating the `locked_expiry_date` based on the provided lock period.

        :param request: The `request` parameter is an object that represents the HTTP request made to
        the server. It contains information such as the request method (e.g., GET, POST), headers, query
        parameters, and request body
        :return: The code is returning a response with the serialized data of the locked wallet if it
        exists. The status code of the response is 200 (OK). If the wallet doesn't exist, it raises a
        custom exception with the error message "Wallet doesn't exist".
        """
        try:
            wallet_exist = self.queryset.get(id= request.data['wallet_id'])
            if wallet_exist and wallet_exist.wallet_balance >= 1:
                wallet_exist.is_locked = True
                wallet_exist.locked_expiry_date = request.data['lock_period']
                wallet_exist.save()
                serializer = self.serializer_class.Retrieve(wallet_exist)
                return response.Response(
                    data=serializer.data,
                    status=status.HTTP_200_OK
                )
            raise exceptions.CustomException(
                message="Balance less than 1"
            )
        except Wallet.DoesNotExist:

            raise exceptions.CustomException(
                errors=["Wallet doesn't exist"]
            )

    @decorators.action(
        detail=True,
        methods=['get']
    )
    def get_remaining_lock_period(self, request, *args, **kwargs):
        instance= self.get_object()
        if instance.is_locked:
            data = instance.get_lock_time
            return response.Response(
                status=status.HTTP_200_OK,
                data={
                    "time_left":data
                }
            )
        return response.Response(
            status.HTTP_400_BAD_REQUEST
        )
