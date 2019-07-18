// app/routes.js

// Load request module
var request = require('request');

var configWidgets = require('../config/widgets.js');

//var dbFunctions = require('../config/dbfunctions.js');

services = configWidgets.services

function retrieveAll(video) {
        url = 'https://www.googleapis.com/youtube/v3/videos?part=statistics&id=';
        id = video;
        url = url.concat(id).concat("&key=AIzaSyBAYX7mnMHbhQ5bE7g_27hKAkQpRiyv7Ug");

        request(url, { json: true }, (err, res, body) => {
          if (err) { return console.log(err); }
          var result = {
                  view: body.items[0].statistics.viewCount,
                  like: body.items[0].statistics.likeCount,
                  dislike: body.items[0].statistics.dislikeCount,
                  comment: body.items[0].statistics.commentCount
                };
        });
return(result);
};

function retrieveTime(city) {
  var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'"
  //change city variable dynamically as required
        url = 'https://query.yahooapis.com/v1/public/yql?q=';
        id = searchtext;
        url = url.concat(id).concat("&format=json");


        request(url, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        view = body.query.results.channel.item.condition.temp;
        console.log(view);
        view = String(view);
        return(view);
        });

        return(view);
};

function retrieveViews(video) {
        url = 'https://www.googleapis.com/youtube/v3/videos?part=statistics&id=';
        id = video;
        url = url.concat(id).concat("&key=AIzaSyBAYX7mnMHbhQ5bE7g_27hKAkQpRiyv7Ug");


        request(url, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        view = body.items[0].statistics.viewCount;
        view = String(view);
        return(view);
        });

        return(view);
};
function retrieveLike(video) {
        url = 'https://www.googleapis.com/youtube/v3/videos?part=statistics&id=';
        id = video;
        url = url.concat(id).concat("&key=AIzaSyBAYX7mnMHbhQ5bE7g_27hKAkQpRiyv7Ug");

        request(url, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        like = body.items[0].statistics.likeCount;
        like = String(like);
        return(like);
        });

        return(like);
};
function retrieveDislike(video) {
        url = 'https://www.googleapis.com/youtube/v3/videos?part=statistics&id=';
        id = video;
        url = url.concat(id).concat("&key=AIzaSyBAYX7mnMHbhQ5bE7g_27hKAkQpRiyv7Ug");

        request(url, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        dislike = body.items[0].statistics.dislikeCount;
        dislike = String(dislike);
        return(dislike);
        });

        return(dislike);
};
function retrieveComments(video) {
        url = 'https://www.googleapis.com/youtube/v3/videos?part=statistics&id=';
        id = video;
        url = url.concat(id).concat("&key=AIzaSyBAYX7mnMHbhQ5bE7g_27hKAkQpRiyv7Ug");

        request(url, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        comment = body.items[0].statistics.commentCount;
        comment = String(comment);
        return(comment);
        });

        return(comment);
};


// INFOS
function getAllServices(services){
        var elem = [];
        for (var i=0; i<services.length; i++) {
                elem.push(services[i].name);
        }
        return(elem);
}


function getAllWidgets(services){
        var elem = [];
        for (var i=0; i<services.length; i++) {
                for (var j=0; j<services[i].widgets.length; j++) {
                        elem.push(services[i].widgets[j].name);
                }
        }
        return(elem);
}

function getAllParams(services){
        var elem = [];
        for (var i=0; i<services.length; i++) {
                for (var j=0; j<services[i].widgets.length; j++) {
                        for (var k=0; k<services[i].widgets[j].params.length; k++) {
                                elem.push(services[i].widgets[j].params[k].value);
                        }
                }
        }
        return(elem);
}

// SERVICES
function checkServiceExists(servName, services){
        for (var i=0; i<services.length; i++) {
                if (services[i].name == servName) {
                        return(true);
                }
        }
        return(false);
}

function recupInfoService(servName, services){

        var elem = {};
        for (var i=0; i<services.length; i++) {
                if (services[i].name == servName) {
                        elem.name = services[i].name;
                        elem.description = services[i].description;
                        elem.widgets = [];
                        return(elem);
                }
        }
        return(false);
}


function addService(servName, userwidgets, services){
        if (checkServiceExists(servName, services) == true) {
                userwidgets.push(recupInfoService(servName, services));
                return (userwidgets);
        }
        console.log("Doesn't exists");
        return(false);
};

function removeService(servName, userwidgets) {
        for (var i=0; i<userwidgets.length; i++) {
                if (userwidgets[i].name == servName) {
                        userwidgets.splice(i, 1);
                        return(userwidgets);
                }
        }
        return userwidgets
};



// WIDGET

function findServiceContainingWidget(widgName, services){
        for (var i=0; i<services.length; i++) {
                for (var j=0; j<services[i].widgets.length; j++) {
                        if (services[i].widgets[j].name == widgName){
                                return(services[i].name);
                        }
                }
        }
};

function checkWidgetExists(widgName, services){
        for (var i=0; i<services.length; i++) {
                for (var j=0; j<services[i].widgets.length; j++) {
                        if (services[i].widgets[j].name == widgName) {
                                return(true);
                        }
                }
        }
        return(false);
};

function addParams(deflt, personalised){
        for (var i=0; i<deflt.length; i++){
                deflt[i].value = personalised[i];
        }
        return(deflt);
};

function recupInfoWidget(widgName, services, newparams){

        var elem = {}
        for (var i=0; i<services.length; i++) {
                for (var j=0; j<services[i].widgets.length; j++) {
                        if (services[i].widgets[j].name == widgName) {
                                elem.name = services[i].widgets[j].name;
                                elem.description = services[i].widgets[j].description;
                                console.log("Loading params : ", newparams);
                                elem.params = addParams(services[i].widgets[j].params, newparams);
                                console.log("Params loaded : ", elem.params);
                                return(elem);
                        }
                }
        }
        return(false);
};


function addWidget(widgName, userwidgets, services, params){
        servName = findServiceContainingWidget(widgName, services);
        if (checkWidgetExists(widgName, services) == false) {
                console.log("This Widget doesn't exist !");
        }
        for (var i=0; i<userwidgets.length; i++) {
                        if (userwidgets[i].name == servName) {
                                userwidgets[i].widgets.push(recupInfoWidget(widgName, services, params));
                                return(userwidgets);
                        }
                }
        return(false);
};

function removeWidget(widgName, userwidgets) {
        servName = findServiceContainingWidget(widgName, userwidgets);
        for (var i=0; i<userwidgets.length; i++) {
                if (userwidgets[i].name == servName) {
                        for (var j=0; j<userwidgets[i].widgets.length; j++) {
                                if (userwidgets[i].widgets[j].name == widgName) {
                                        userwidgets[i].widgets.splice(j, 1);
                                        return(userwidgets);
                                }
                        }
                }
        }
        return(false);
};


function getWhatToPrint(widgetList, params){
        console.log("WIDGETLIST : ", widgetList);
        element = [];
        for (var i=0; i<widgetList.length; i++) {
                if (widgetList[i] == "youtube_all") {
                        result = retrieveLike(params[i]);
                        element.push(result);
                }
                if (widgetList[i] == "youtube_like") {
                        result = retrieveLike(params[i]);
                        element.push(result);
                }
                if (widgetList[i] == "youtube_dislike") {
                        result = retrieveDislike(params[i]);
                        element.push(result);
                }
                if (widgetList[i] == "youtube_comment") {
                        result = retrieveComments(params[i]);
                        element.push(result);
                }
                if (widgetList[i] == "youtube_view") {
                        result = retrieveViews(params[i]);
                        element.push(result);
                }
                if (widgetList[i] == "weather_temp") {
                        result = retrieveTime(params[i]);
                        element.push(result);
                }
        }
        console.log("ELEMENTS A PRINT : ", element);
        return(element);
}



// routes.js
module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', isLoggedIn, function(req, res) {
            user = req.user;
            if (user.local.email) {userStrat = user.local;}
            if (user.facebook.id) {userStrat = user.facebook;}
            if (user.twitter.id) {userStrat = user.twitter;}
            all_widgets_names = getAllWidgets(services);
            abo_services_names = getAllServices(userStrat.widget);
            abo_widgets_names = getAllWidgets(userStrat.widget);
            params = getAllParams(userStrat.widget)
            params = params.filter(i => i !== 0);
            console.log("PARAMS = ", params);
            print = getWhatToPrint(abo_widgets_names, params);
                res.render('index.ejs', {
                        user : req.user, // get the user out of session and pass to template
                        services : userStrat.widget,
                        print : print,
                        subscribedWidgets : abo_widgets_names,
                        allWidgets : all_widgets_names
                }); // load the index.ejs file

    });


    app.post('/', (req, res) => {

            user = req.user;
            params = req.body.param;
            command = req.body.content;
            instructions = command.split('_');
            if (user.local.email) {userStrat = user.local;}
            if (user.facebook.id) {userStrat = user.facebook;}
            if (user.twitter.id) {userStrat = user.twitter;}
            if (instructions.length == 3) {
                    widgetName = instructions[1].concat('_').concat(instructions[2]);
                    if (instructions[0] == "subscribe" && checkServiceExists(instructions[1], userStrat.widget) == true){
                            addWidget(widgetName, userStrat.widget, services, params);
                    }
                    if (instructions[0] == "unsubscribe" && checkServiceExists(instructions[1], userStrat.widget) == true && checkWidgetExists(widgetName, userStrat.widget) == true){
                            removeWidget(widgetName, userStrat.widget);
                    }
            }
            console.log("PRINTS DE TEST");
            abo_services_names = getAllServices(userStrat.widget);
            abo_widgets_names = getAllWidgets(userStrat.widget);
            console.log("APRES : ", abo_services_names);
            console.log("APRES : ", userStrat.widget);
            user.markModified('local');
            user.markModified('facebook');
            user.markModified('twitter');
            user.save();
            console.log("Save - FIN DES TEST");
            res.sendStatus(201);
    });


    app.get('/index', isLoggedIn, function(req, res) {
            res.redirect('/');
    });


    app.get("/about.json", function(req, res, next) {
      var dt = new Date().getTime() / 1000;
            var time = dt.toFixed(0);
            var ip = req.connection.remoteAddress;
            treat = ip.split('.');
            modif = treat[0];
            modif = modif.replace(/\D/g,'');
            ip = modif.concat('.').concat(treat[1]).concat('.').concat(treat[2]).concat('.').concat(treat[3])
            var jsonData = {
                    "client": {
                            "host": ip
                    },
                    "server": {
                            "current_time": time,
                            "services": services
                    }
            };
      res.json(jsonData);
    });


    app.get('/auth', function(req, res) {
        res.render('auth.ejs'); // load the auth.ejs file
});

    // =====================================
    // TWITTER ROUTES ======================
    // =====================================
    // route for twitter authentication and login
    app.get('/auth/twitter', passport.authenticate('twitter'));

    // handle the callback after twitter has authenticated the user
    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));


// =====================================
// FACEBOOK ROUTES =====================
// =====================================
// route for facebook authentication and login
app.get('/auth/facebook', passport.authenticate('facebook', {
  scope : ['public_profile', 'email']
}));

// handle the callback after facebook has authenticated the user
app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect : '/profile',
        failureRedirect : '/'
    }));

// route for logging out
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});


    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });

        // process the login form
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));


    // =====================================
    // SIGNUP ==============================
    // =====================================

    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    // app.post('/signup', do all our passport stuff here);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
            services_names = getAllServices(services);
            user = req.user;


            res.render('profile.ejs', {
                    user : req.user, // get the user out of session and pass to template
                    services : services
            });
    });
    // receive the ajax request
    app.post('/profile', (req, res) => {
            user = req.user;
            command = req.body.content;
            instructions = command.split('_');
            if (user.local.email) {userStrat = user.local;}
            if (user.facebook.id) {userStrat = user.facebook;}
            if (user.twitter.id) {userStrat = user.twitter;}
            if (instructions.length == 2) {
                    if (instructions[0] == "subscribe" && checkServiceExists(instructions[1], userStrat.widget) == false){
                            addService(instructions[1], userStrat.widget, services);
                    }
                    if (instructions[0] == "unsubscribe" && checkServiceExists(instructions[1], userStrat.widget) == true){
                            removeService(instructions[1], userStrat.widget, services);
                    }
            }
            if (instructions.length == 3) {
                    widgetName = instructions[1].concat('_').concat(instructions[2]);
                    if (instructions[0] == "subscribe" && checkServiceExists(instructions[1], userStrat.widget) == true){
                            addWidget(widgetName, userStrat.widget, services, params);
                    }
                    if (instructions[0] == "unsubscribe" && checkServiceExists(instructions[1], userStrat.widget) == true && checkWidgetExists(widgetName, userStrat.widget) == true){
                            removeWidget(widgetName, userStrat.widget);
                    }
            }
            user.markModified('local');
            user.markModified('facebook');
            user.markModified('twitter');
            user.save();
            res.sendStatus(201);
    });


    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/auth');
}
