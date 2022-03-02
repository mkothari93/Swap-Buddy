import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";

const PostForm = () => {
  const [postTitle, setTitle] = useState("");
  const [postText, setText] = useState("");
  const [postLocation, setLocation] = useState("")

  const [createPost, { error }] = useMutation(CREATE_POST, {
    update(cache, { data: { createPost } }) {
      try {
        const { getAllPosts } = cache.readQuery({ query: QUERY_POSTS });
        cache.writeQuery({
          query: QUERY_POSTS,
          data: { getAllPosts: [createPost, ...getAllPosts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, createPost] } },
      });
    },
  });

  const handleTitleChange = (event) => {
      setTitle(event.target.value);
  };

  
  // update state based on form input changes
  const handleTextChange = (event) => {
      setText(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
};

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await createPost({
        variables: { postTitle, postText, postLocation },
      });

      // clear form value
      setTitle("");
      setText("");
      setLocation("")
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Trade Title"
          value={postTitle}
          onChange={handleTitleChange}
          className="form-input col-12 col-md-9"
        ></textarea>
        <textarea
          placeholder="Trade Description"
          value={postText}
          className="form-input col-12 col-md-9"
          onChange={handleTextChange}
        ></textarea>
        <textarea
          placeholder="Location"
          value={postLocation}
          className="form-input col-12 col-md-9"
          onChange={handleLocationChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;
