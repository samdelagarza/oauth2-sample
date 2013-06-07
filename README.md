 simple project to facilitate oauth2.0 authorization_code grantType handshake

# Getting Started

    Create a configs.json file in the same directory
    Add in your settings:

        {
            "authorizationURL": "https://sim.api.tradestation.com/v2/authorize",
            "redirectURI": "http://localhost:3000/authorized2",
            "tokenURL": "https://sim.api.tradestation.com/v2/security/authorize",
            "clientID": "your client id",
            "clientSecret": "your client secret",
            "callbackURL": "once a code is issued, this is the callback on your server that will issue a token request"
        }
