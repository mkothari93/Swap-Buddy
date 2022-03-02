import React from "react";
import PostList from "../components/PostList";
import MessageList from "../components/MessageList";
import PostForm from "../components/PostForm";
import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import Auth from '../utils/auth';


const UserPage = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });

  const user = data?.getUser || data?.me || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/userpage" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h2>Viewing {user.username}'s Home Page.</h2>
      </div>

      <div>
        <div className="col-12 mb-3 col-lg-8">
          <PostList posts={user.posts} title={`${user.username}'s Posts: `} />
        </div>

        <div className="col-12 col-lg-3 mb-3">
          <MessageList
            username={user.username}
            messages={user.messages}
          />
        </div>
      </div>
      <div className="mb-3">{!userParam && <PostForm />}</div>
    </div>
  );
};

export default UserPage;
