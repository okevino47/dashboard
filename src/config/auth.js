// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1971848399782278', // your App ID
        'clientSecret'  : 'd437f4008c8e3a427c8f8130ab44b0fb', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },

    'twitterAuth' : {
        'consumerKey'       : 'T6Yftn239xWN6wCe5P6RIbmpM',
        'consumerSecret'    : 'aFH76JuLblYni9WvovikByx9Y4FFstmN5Q4pIbiEQJqO1lYW0K',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

};
