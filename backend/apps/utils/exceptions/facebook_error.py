
class FacebookException(Exception):
    class Errors:
        invalid_redirect_uri = "invalid_redirect_uri"

    def __init__(self, errors: list, message: str):
        self.errors = errors
        self.message = message