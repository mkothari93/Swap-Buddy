const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    posts: [Post]
    messages: [Message]
  }

  type Post {
    _id: ID
    postTitle: String
    postText: String
    postImage: String
    createdAt: String
    username: String
  }

  type Message {
    _id: ID
    messageTitle: String
    messageBody: String
    createdAt: String
    username: String
  }

  type Category {
    _id: ID
    categoryName: String
    posts: [Post]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    getUsers: [User]
    getAllPosts: [Post]
    getUser(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    createPost(postTitle: String!, postText: String!): Post
  }
`;

module.exports = typeDefs;