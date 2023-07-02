const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  ID: { type: mongoose.Types.ObjectId },
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});
module.exports = mongoose.model("users", userSchema);
