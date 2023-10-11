import urllib.parse

from django.conf import settings
from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build

scopes = [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
    "openid",
]

flow = Flow.from_client_config(settings.GOOGLE_OAUTH_CLIENT_CONFIG, scopes)


class GoogleOauthHelper:
    def __init__(self, redirect_uri):
        self.flow = flow
        self.flow.redirect_uri = redirect_uri

    def encode_uri(self, uri):
        return urllib.parse.quote(uri, safe="")

    def get_oauth_url(self):
        auth_url, _ = self.flow.authorization_url(prompt="consent", state="google")
        return auth_url

    def get_flow_credentials(self, redirect_uri_content: str):
        redirect_uri_content = redirect_uri_content.replace("http:", "https:")
        self.flow.fetch_token(authorization_response=redirect_uri_content)
        return self.flow.credentials

    @staticmethod
    def get_user_info(credentials):
        with build("oauth2", "v2", credentials=credentials) as service:
            return service.userinfo().get().execute()

    @staticmethod
    def format_credentials(credentials: dict):
        return {
            "token": credentials.get("token"),
            "refresh_token": credentials.get("_refresh_token"),
            "client_id": credentials.get("_client_id"),
            "client_secret": credentials.get("_client_secret"),
            "scopes": credentials.get("_scopes"),
            "id_token": credentials.get("_id_token"),
            "token_uri": credentials.get("_token_uri"),
        }

    @staticmethod
    def store_credentials_in_session(request, email: str, credentials: dict):
        request.session[email] = credentials

    def authenticate_process(self, request, redirect_uri_content: str):
        flow_credentials = self.get_flow_credentials(redirect_uri_content)
        user_info = self.get_user_info(flow_credentials)
        return user_info, self.format_credentials(flow_credentials.__dict__)
