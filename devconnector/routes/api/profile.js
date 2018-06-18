const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// load profile model
const User = require("../../models/User");
const Profile = require("../../models/Profile");

const validateProfileInput = require('../../validation/profile');


// @route GET api/profile/test
// @desc  tests profile routes
// access public
router.get('/test', (req, res) => res.json({msg: "profile works"}));

// @route GET api/profile/test
// @desc  get current users profile
// access private
router.get('/',
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    const errors = {};

    Profile.findOne({user: req.user.id})
    .populate( 'user', [ 'name', 'avatar'] ) // adds additional info from other collection (temp.)
    .then( profile => {
      if(!profile) {
        errors.noprofile = 'there is no valid profile';
        return res.status(404).json(errors);
      };
      res.json(profile) ;
    }
    )
    .catch( err => {
      res.status(404).json(err)
    });
  }
);


// @route POST api/profile/test
// @desc  create current users profile
// access private
router.post('/',
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    // input validation - before applying anything
    const { errors, isValid } = validateProfileInput(req.body);

    if(!isValid){
      console.log({errors});
      return res.status(400).json(errors);
    }

    // get fields
    const profileFields =  {};
    profileFields.user = req.user.id;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if(req.body.company) profileFields.company = req.body.company;
    if(req.body.website) profileFields.website = req.body.website;
    if(req.body.location) profileFields.location = req.body.location;
    if(req.body.status ) profileFields.status = req.body.status;
    // split comma-separated string intp single fields
    if(typeof(req.body.skills) !== 'undefined') {
      profileFields.skills = req.body.skills.split(',')};
    if(req.body.bio) profileFields.bio = req.body.bio;
    if(req.body.githubusername) profileFields.githubusername = req.body.githubusername;
    // social linking
    profileFields.social = {};
    if(req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if(req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if(req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    if(req.body.xing) profileFields.social.xing = req.body.xing;

    // create or update profiles
    Profile.findOne( {user: req.user.id} ).then ( profile => {
      if(profile) {
          // update
          Profile.findOneAndUpdate(
          {user: req.user.id},
          {$set: profileFields},
          {new: true}
        )
        .then (profile => res.json(profile));
      } else {
        // create
        Profile.findOne({handle: profileFields.handle}).then ( profile =>  {
          // seo will get difficult
          if(profile){
            errors.handle = "handle already exists";
            res.status(400).json(errors);
          }

          // save profile
          new Profile(profileFields).save().then(profile => res.json(profile));
        });
      }
    });
  }
);


module.exports = router;