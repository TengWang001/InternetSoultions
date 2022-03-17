var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/login', function (req, res) {
   //calls the funucation from another class
   const myMod = require("./LoginService.js");
   var result = myMod.login("a", "57e4c141f6b5c1c1ebaf58d1ac4a15b9dd0da5a3a80524ff0203339ea2c39445");

   //if email not found return 404 not found.
   //no email found.
   if (result.length === 0)
      res.status(404).send("Not found.");

   res.send(result);
})

app.get('/register', function (req, res) {
   //calls the funucation from another class
   const myMod = require("./LoginService.js");
   var result = myMod.register("test", "test");
   //if email not found return 404 not found.
   //no email found.
   if (result !== "register user")
      res.status(404).send("Not found.");

   res.send(result);
})

//Opens server connection:
var server = app.listen(8000, function () {})  