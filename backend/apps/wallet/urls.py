from django.conf import settings
from django.urls import path
from rest_framework.routers import DefaultRouter, SimpleRouter

from apps.wallet.views import WalletViewSet

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

app_name = "wallet"
router.register("", WalletViewSet, basename="wallet")

urlpatterns = router.urls