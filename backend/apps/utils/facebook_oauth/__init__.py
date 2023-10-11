import re
import urllib.parse

import requests
from django.conf import settings

app_id = settings.FACEBOOK_APP_ID
app_secret = settings.FACEBOOK_APP_SECRET

class FaceBookOauthHelper:
    _redirect_uri: str

    def __init__(self, redirect_uri):
        self._redirect_uri = redirect_uri

    def encode_uri(self, uri):
        return urllib.parse.quote(uri, safe="")

    def get_oauth_url(
        self,
    ):
        list_permissions = ["public_profile", "email"]
        auth_url = f"https://www.facebook.com/dialog/oauth?client_id={app_id}&redirect_uri={self.encode_uri(self._redirect_uri)}&state=facebook&scope={'+'.join(list_permissions)}"
        return auth_url

    def get_auth_code_from_redirect_uri_content(self, redirect_uri_content):
        pattern = re.compile(".+?code=(.+?)(#_=_|&|$)")
        match = pattern.match(redirect_uri_content)
        if match:
            return match.group(1)

    def obtain_access_token_from_code(self, code):
        endpoint = f"https://graph.facebook.com/oauth/access_token?client_id={app_id}&redirect_uri={self.encode_uri(self._redirect_uri)}&client_secret={app_secret}&code={code}"
        response = requests.get(endpoint)
        if response.status_code == 200:
            return self.get_long_lived_access_token(response.json()["access_token"])
        raise Exception("Facebook: Could not fetch access token from code")

    def fetch_user_profile(self, token):
        fields = ["id", "first_name", "last_name", "short_name", "email"]
        endpoint = f"https://graph.facebook.com/me?fields={','.join(fields)}&access_token={token}"
        response = requests.get(endpoint)
        if response.status_code == 200:
            return response.json()
        raise Exception("Facebook: Could not fetch user profile")

    def get_long_lived_access_token(self, token):
        api_endpoint = f"https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id={app_id}&client_secret={app_secret}&fb_exchange_token={token}"
        response = requests.get(api_endpoint)
        if response.status_code == 200:
            return response.json()["access_token"]
        raise Exception("Facebook: Could not fetch long-lived access token")

    def authenticate_process(self, redirect_uri_content: str):
        auth_code = self.get_auth_code_from_redirect_uri_content(redirect_uri_content)
        access_token = self.obtain_access_token_from_code(auth_code)
        return self.fetch_user_profile(access_token)
