const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/userSchema");
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    //if the username doesn't already exist then we can do it.
    if (await User.findOne({ username })) {
      res.send(
        `User apparently exists, req body u:p is: ${req.body.username}:${req.body.password}.`
      );
    } else {
      const _user = new User({
        username,
        password,
      });
      await _user.save();
      res.send(`Successfully saved the following user object: ${_user}`);
    }
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;
