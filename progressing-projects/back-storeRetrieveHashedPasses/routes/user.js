const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/userSchema");
const saltRounds = 10;
const userMaxLength = 15; //maximum length of username.
router.post("/register", async (req, res) => {
  if (req.body.username && req.body.password) {
    try {
      if (String(req.username).length <= userMaxLength) {
        console.log(String(req.username).length);
        const { username, password } = req.body;
        //if the username doesn't already exist then we can do it.

        //what if the user entered no password? or no username?
        if (await User.findOne({ username })) {
          res.send(`User ${req.body.username} already exists.`);
        } else {
          bcrypt.hash(password, saltRounds, async (err, hash) => {
            if (!err) {
              const _user = new User({
                username,
                password: hash,
              });
              await _user.save();
              res.send(
                `Successfully saved the following user object: ${_user}`
              );
            } else {
              res.send("Error hashing password - user was not saved.");
            }
          });
        }
      } else {
        res.send(`Username must be less than ${userMaxLength} characters.`);
      }
    } catch (err) {
      res.send(err);
    }
  } else {
    res.send(`You must enter both a username and password.`);
  }
});
module.exports = router;
