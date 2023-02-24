const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: [String],
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  completed: {
    type: Boolean,
    required: false,
  },
});


//MongoDB Collection named here - will give lowercase plural of name 
module.exports = mongoose.model("Post", PostSchema);
