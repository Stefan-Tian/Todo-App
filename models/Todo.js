const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

mongoose.model("Todo", todoSchema);
