const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys.js");
const passport = require('passport');

// login validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

const User = require("../../models/User");
let testSalt = '';

// @route GET api/users/test
// @desc  tests users routes
// access public
router.get("/test", (req, res) => res.json({ msg: "users works" }));

// @route GET api/users/current
// @desc test authentication
// access private
router.get("/current",
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name
    });
  }
);

// @route POST api/users/register
// @desc  registers users
// access public
router.post("/register", (req, res) => {

  // input validation - before applying anything
  const { errors, isValid } = validateRegisterInput(req.body);

  if(!isValid){
    console.log({errors});
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "email already exists";
      return res.status(400).json({ errors });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", // size
        r: "pg", // rating
        d: "mm" // defaultS<
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {testSalt = salt});

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc  login with username or email and password
// access public
router.post("/login", (req, res) => {

  const { errors, isValid } = validateLoginInput(req.body);
  if(!isValid){
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "user not found";
      return res.status(404).json(errors);
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      // https://goo.gl/Sd8HmE --> compare variante
      if (isMatch) {
        // user matched
        const payload = { id: user.id, name: user.name, avatar: user.avatar }; // payload for token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );

        // return res.json({ msg: "success" });
        // sign the token
      } else {
        return res.status(400).json({ password: "password unknown" });
      }
    });
  });
});
;

module.exports = router;
