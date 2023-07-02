const mongoose = require("mongoose");
const express = require("express");
const app = express();
const User = require("./models/userSchema");
const userRouter = require("./routes/user");
const PORT = process.env.PORT || 3000;
mongoose.connect("mongodb://localhost:27017");
app.use(express.json());
app.use(userRouter);
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
//WHAT IS mongoose.model()????? docs are so unhelpful
//let alone routers... might as well just be a uiux designer atp
//im going home
//anyway thats the next step, gl for tomorrow, future me
//NOPE IM DOING IT NOW!!!!
