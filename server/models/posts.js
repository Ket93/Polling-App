const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let postSchema = new Schema(
  {
    index: Number,
    question: String,
    answers: [String],
    tally: [Number],
    correct: String,
  },
  { timestamps: true }
);

let Post = mongoose.model("post", postSchema);

module.exports = Post;
