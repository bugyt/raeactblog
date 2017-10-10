var express = require("express");
var session = require("express-session");
var path = require("path");
var bodyParser = require("body-parser");
var user = require("./user");
var helmet = require("helmet");
// var Home = require("./html/jsx/Home.jsx");

var app = express();
var sessions;

// Security
app.use(helmet());
// app.disable('x-powered-by'); (If you use helmet.js, it takes care of this for you.)


app.use(express.static(path.join(__dirname, "/html")));
app.use(
	session({ secret: "my-secret", saveUninitialized: false, resave: false })
);
app.use(bodyParser.json());

// Pour que tous les liens fonctionne
app.get("*", function(req, res) {
	res.sendFile(path.resolve(__dirname, "html", "index.html"));
});
app.listen(7777, function() {
	console.log("Started listening on port", 7777);
});

app.post("/signin", function(req, res) {
	sessions = req.session;
	var user_name = req.body.email;
	var password = req.body.password;
	console.log("signin");
	user.validateSignIn(user_name, password, function(result) {
		if (result) {
			sessions.username = user_name;
			res.send("success");
		} else {
			res.send("Wrong username password");
		}
	});
});

app.post("/signup", function(req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var password = req.body.password;
	if (name && email && password) {
		user.signup(name, email, password);
	} else {
		res.send("Failure");
	}
});

// app.listen(7777, function() {
// 	console.log("Started listening on port", 7777);
// });
