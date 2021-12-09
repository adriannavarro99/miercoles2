const express = require('express');
const flash = require('express-flash');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const path= require('path');


const {Routes}= require( './server/routes/routes');
require('./server/config/database');
require('dotenv').config();

app.use(flash());
app.use(express.static(path.join(__dirname + '/Client/static')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: process.env.SESSION_TOKEN,
    resave:false,
    saveUninitialized:true,
    cookie: {maxAge:60000 * 20}
    }))

app.set('views', __dirname + '/Client/views');
app.set('view engine', 'ejs');
app.use('/quotes', Routes);


app.listen( 8181, function(){
    console.log( "The users server is running in port 8181." );
});

