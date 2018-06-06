const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

// routing
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

// adding body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db config
const db = require("./config/keys.js").mongoURI;

// db connect
mongoose
  .connect(db)
  .then(() => console.log("mongodb connected .. ")) // success
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hi there .."));

// passport
app.use(passport.initialize());
// passport configure
require('./config/passport')(passport);

// use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);


const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`server running on port ${port}`));
