// load the express module and store it in the variable express
var express = require("express");
console.log("lets find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
// athis is the line that tells our server to use the "/static" folder for static cont
app.use(express.static(__dirname + "/static"));
// This sets the the view engine so that express knows that we are using ejs
app.set("view engine", "ejs");
console.log("lets find out what app is", app);
// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response){
	console.log("the request object", request);
	console.log("the response object", response);
	// use the response object's .send() method to respond with an H1
	response.sendfile("<h1>Hello Express</h1>");
});
app.get('/cars', function(request, response){
	response.render("cars")
});
app.get('/cats', function(request, response){
	response.render("cats")
});
app.get('/cars/new', function(request, response){
	response.render("new")
});
app.listen(8000,function(){
	console.log("listening on port 8000");
});