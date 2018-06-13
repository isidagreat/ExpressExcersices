// load the express module and store it in the variable express
var express = require("express");
console.log("lets find out what express is", express);
// invoke express and store the result in the variable app
var session = require("express-session");
var app = express();
app.use(session({
	secret: "magiMouse",
	resave: false,
	saveUninitialized: true,
	cookie:{maxAge: 8*80*6000}
}));
// athis is the line that tells our server to use the "/static" folder for static cont

app.use(express.static(__dirname + "/static"));
// This sets the the view engine so that express knows that we are using ejs
app.set("view engine", "ejs");
console.log("lets find out what app is", app);
// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response){
	if (typeof request.session.visits === 'undefined'){
		request.session.visits = 1;
		console.log(request.session.visits);
		request.session.save()
	}
	else{
		request.session.visits++;
		console.log(request.session.visits);
		request.session.save()
	}
	response.render("index",{visit: request.session.visits });
});
app.get('/addtwo', function(request, response){
		request.session.visits += 1;
		console.log(request.session.visits);
	response.redirect('/');
});
app.get('/clear', function(request, response){
		request.session.visits = 0
		console.log(request.session.visits);
	response.redirect("/");
});
app.listen(8000,function(){
	console.log("listening on port 8000");
});