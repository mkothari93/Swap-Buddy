import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query getAllPosts($username: String) {
    getAllPosts(username: $username) {
      _id
      postTitle
      postText
      postImage
      postLocation
      createdAt
      username
    }
  }
`;



export const QUERY_USER = gql`
  query getUser($username: String!) {
    getUser(username: $username) {
      _id
      username
      email
      posts{
        _id
        postTitle
        postText
        postImage
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
      postImage
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
        postImage
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

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      messages {
        messageTitle
        createdAt
      }
    }
  }
`;