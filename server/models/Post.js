const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const postSchema = new Schema(
  {
    postTitle: {
      type: String,
      required: true,
      trim: true,
    },
    postText: {
      type: String,
      required: true,
      trim: true,
    },
    postImage: {
      type: String
    },
    postLocation: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Post = model("Post", postSchema);

module.exports = Post;
