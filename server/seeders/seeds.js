const faker = require('faker');

const db = require('../config/connection');
const { Post, User } = require('../models');

db.once('open', async () => {
    await Post.deleteMany({});
    await User.deleteMany({});
  
    // create user data
    const userData = [];
  
    for (let i = 0; i < 50; i += 1) {
      const username = faker.internet.userName();
      const email = faker.internet.email(username);
      const password = faker.internet.password();
  
      userData.push({ username, email, password });
    }
  
    const createdUsers = await User.collection.insertMany(userData);

    // create posts
  let createdPosts = [];
  for (let i = 0; i < 100; i += 1) {
    const postTitle = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const postText = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const postLocation = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdPost = await Post.create({ postTitle, postText, username, postLocation });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { posts: createdPost._id } }
    );

    createdPosts.push(createdPost);
  }

console.log('all done!');
process.exit(0);
});