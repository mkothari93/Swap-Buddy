import React from "react";
import PostList from "../components/PostList";
// import ThoughtForm from '../components/ThoughtForm';
// import FriendList from '../components/FriendList';

// import Auth from '../utils/auth';
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_POSTS);

  const posts = data?.getAllPosts || [];
  console.log(posts);

  return (
    <main>
      <div className="row">
        <div>
          <div className="col-sm-12 col-md-6 col-lg-4 m-3" id="card">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <PostList posts={posts} title="Items for trade..." />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
