import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_POST } from "../utils/queries";

const SinglePost = (props) => {
  const { id: postId } = useParams();
  console.log(postId);

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId },
  });

  const post = data?.getPost || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">{post.postTitle}</p>
        <div className="card-body">
          <p>{post.postText}</p>
          <span style={{ fontWeight: 700 }} className="text-dark">
            {post.username}
          </span>{" "}
          posted on {post.createdAt}
          <p>{post.postLocation}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
