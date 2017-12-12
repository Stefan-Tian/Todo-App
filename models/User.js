const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userID: {
    type: String
  }
});

mongoose.model("User", userSchema);
