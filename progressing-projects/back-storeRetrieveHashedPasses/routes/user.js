const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/userSchema");
const saltRounds = 10;
const userMaxLength = 15; //maximum length of username.
const responses = {
  too_long: "TOO_LONG",
  already_exists: "USER_EXISTS",
  user_added: "USER_ADDED",
  hash_error: "HASH_ERROR",
};
router.post("/register", async (req, res) => {
  if (req.body.username && req.body.password) {
    try {
      if (String(req.body.username).length <= userMaxLength) {
        const { username, password } = req.body;
        //if the username doesn't already exist then we can do it.

        //what if the user entered no password? or no username?
        if (await User.findOne({ username })) {
          res.send(responses.already_exists);
        } else {
          bcrypt.hash(password, saltRounds, async (err, hash) => {
            if (!err) {
              const _user = new User({
                username,
                password: hash,
              });
              await _user.save();
              res.send(
                `${responses.user_added}: ${_user}` //remove the ${_user} in prod
              );
            } else {
              res.send(responses.hash_error);
            }
          });
        }
      } else {
        res.send(responses.too_long);
      }
    } catch (err) {
      res.send(err);
    }
  } else {
    res.send(`You must enter both a username and password.`);
  }
});
module.exports = router;
