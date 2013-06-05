var express = require('express'),
    http = require('http'),
    passport = require('passport'),
    OAuth2Strategy = require('passport-oauth').OAuth2Strategy,

    oauth2Settings = require('./configs.json');

oauth2Settings.passReqToCallback = true;

passport.use('provider', new OAuth2Strategy(oauth2Settings, function (req, accessToken, refreshToken, profile, done) {
    req.res.end(accessToken);
}));

var app = express();

// configure Express
app.configure(function () {
    app.use(express.logger());
    app.use(passport.initialize());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.get('/authorized',
    passport.authenticate('provider', {
        successRedirect: '/',
        failureRedirect: '/login'
    })
);

app.get('/login', function (req, res) {
    res.end('done 2');
});

app.get('/',
    // Authenticate using HTTP Bearer credentials, with session support disabled.
    passport.authenticate('provider', { session: false }),
    function (req, res) {
        res.end('');
    });

app.listen(3000);

console.log('Listening at: http://localhost:3000');