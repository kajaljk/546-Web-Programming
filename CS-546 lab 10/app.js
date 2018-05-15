const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

//  const bcrypt = require('bcrypt');
const static = express.static(__dirname + '/public');

const configRoutes = require("./routes");

app.use("/public", static);

app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json

// Middlewares:

// app.use(function(request,response,next){
//     console.log(request.cookies);

// });


// We can now navigate to localhost:3000
app.listen(3000, function() {
    console.log("Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it");

    if (process && process.send) process.send({done: true}); // ADD THIS LINE
});