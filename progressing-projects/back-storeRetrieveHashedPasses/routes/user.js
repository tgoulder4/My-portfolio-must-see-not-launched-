const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/userSchema");
const saltRounds = 10;
router.post("/register", async (req, res) => {
  try {
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
          res.send(`Successfully saved the following user object: ${_user}`);
        } else {
          res.send("Error hashing password - user was not saved.");
        }
      });
    }
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;
