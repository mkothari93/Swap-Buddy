const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    posts: [Post]
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

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String)
}
`