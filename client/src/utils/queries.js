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