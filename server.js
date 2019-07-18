/*
** setup all the tools/variable needed
*/
var express         = require('express');
var app             = express();
var port            = precess.env.PORT || 8080;
var mongoose        = require('mongoose');
var passport        = require('passport');
var flash           = require('connect-flash');

var morgan          = require('morgan');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');
var session         = require('express-session');

var configDB        = require('./config/database.js');

/*
** connection to the database
*/
mongoose.connect(configDB.url);

/*
** pass passport for configuration
*/
// require ('./config/passport')(passport);

/*
** express application setting
*/
app.use(session({secret: 'ilovescotchscotchyscotchscotch'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


/*
**  routes
*/

// load the routes and fully configure it for passport
require('./app/routes.js')(app, passport);

/*
**  launch
*/

app.listen(port);
console.log('The magic happens on port ' + port);

// var express = require('express');
// var server = express();
//
// server.get('/', function (req, res) {
//     res.send('hello world !!!');
// });
//
// server.get("/test", function (req, res) {
//     res.send('kevin au carré');
// });
//
// server.listen(3000, function () {
//     console.log('Example server listening on port 8080!')
// });
//
// module.exports = server;