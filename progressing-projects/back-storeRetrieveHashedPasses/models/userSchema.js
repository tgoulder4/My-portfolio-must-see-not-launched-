const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  ID: { required: true, type: mongoose.Types.ObjectId },
  username: {
    required: true,
    type: string,
  },
  password: {
    required: true,
    type: string,
  },
});
export default mongoose.model("users", userSchema);
