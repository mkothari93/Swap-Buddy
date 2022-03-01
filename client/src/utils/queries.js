import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query getAllPosts($username: String) {
    getAllPosts(username: $username) {
      _id
      postTitle
      postText
      postLocation
      createdAt
      username
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      posts {
        _id
        postTitle
        postText
        postLocation
        createdAt
      }
      messages {
        messageTitle
        messageBody
        createdAt
      }
    }
  }
`;

export const QUERY_POST = gql`
  query getPost($id: ID!) {
    getPost(_id: $id) {
      _id
      postTitle
      postText
      postLocation
      createdAt
      username
    }
  }
`;