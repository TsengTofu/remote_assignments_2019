var express=require("express");
var bodyParser=require("body-parser");
var cookieParser=require("cookie-parser");

var app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static('public'));
app.use('/static',express.static('public'));

app.set("view engine","pug");

var mainroutes = require('./routes');
var getDataRoutes=require('./routes/getData')
app.use(mainroutes);
app.use('/getData',getDataRoutes)

app.listen(3000);