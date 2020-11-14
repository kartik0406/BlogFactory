var express               = require("express");           
    mongoose              = require("mongoose");           
    bodyParser            = require("body-parser");         
    multer                = require('multer');              
    methodOverride        = require("method-override");     
    passport              = require("passport");           
    LocalStrategy         = require("passport-local");
    passportLocalMongoose = require("passport-local-mongoose");
    Comment               = require("./models/user");
    User                  = require("./models/user");
 


var app = express();
 

app.use(methodOverride("_method"));



app.use(bodyParser.urlencoded({
    extended: true
}));



app.use("/public",express.static("public"));



     app.set("view engine","ejs");
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);



mongoose.connect("mongodb://localhost:27017/BlogFactory", { useNewUrlParser: true,useUnifiedTopology: true });


//Setting up passport
app.use(require("express-session")({
    secret: "Its a secret",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//requiring routes
var commentRoutes      = require("./routes/comments");
var blogRoutes         = require("./routes/blogs");
var indexRoutes        = require("./routes/index");
var profileRoutes      = require("./routes/profile");
//using routes
app.use(indexRoutes);
app.use(blogRoutes);
app.use(commentRoutes);
app.use(profileRoutes);


//Listening to server
app.listen(8000,function()  //replace process.env.PORT, process.env.IP with 5000 if running in local
{
    console.log("Server of Blog Factory started on port 8000");
})