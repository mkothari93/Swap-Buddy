import React from "react";
import PostList from "../components/PostList";
import MessageList from "../components/MessageList";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const UserPage = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: userParam },
  });

  const user = data?.getUser || {};

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
    </div>
  );
};

export default UserPage;
