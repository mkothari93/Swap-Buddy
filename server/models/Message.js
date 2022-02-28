const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const messageSchema = new Schema(
  {
    messageTitle: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    messageBody: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
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

const Message = model("Message", messageSchema);

module.exports = Message;
