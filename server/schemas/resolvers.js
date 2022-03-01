const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Category, Message } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
            .populate('posts')
            .populate('messages');
  
          return userData;
        }
  
        throw new AuthenticationError('Not logged in');
      },

      getUsers: async () => {
        return User.find()
          .select('-__v -password')
          .populate('posts')
      },

      getUser: async (parent, { username }) => {
        return User.findOne({ username })
          .select('-__v -password')
          .populate('posts')
      },

      getAllPosts: async (parent, {username}) => {
        const params = username ? { username } : {};
        return Post.find(params)
          .select('-__v')
          .populate('postTitle')
          .populate('username')
          .populate('postLocation')
          .sort({ createdAt: -1 })
      },

      getPost: async (parent, { _id }) => {
        return Post.findOne({ _id });
      }
    //   thoughts: async (parent, { username }) => {
    //     const params = username ? { username } : {};
    //     return Thought.find(params).sort({ createdAt: -1 });
    //   },
    //   thought: async (parent, { _id }) => {
    //     return Thought.findOne({ _id });
    //   }
    },

Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('User not found');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },

    createPost: async (parent, args, context) => {
      if (context.user) {
        const post = await Post.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { posts: post._id } },
          { new: true }
        );

        return post;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    createMessage: async (parent, args, context) => {
        if (context.user) {
          const message = await Message.create({ ...args, username: context.user.username });
  
          await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { messages: message._id } },
            { new: true }
          );
  
          return message;
        }
  
        throw new AuthenticationError('You need to be logged in!');
    }
  }
}

module.exports = resolvers;