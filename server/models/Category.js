const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const Category = model("Category", categorySchema);

module.exports = Category;
