import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";



const PostDetail = () => {
  const post = useLoaderData();
  console.log(post);
  const { id, title, body } = post;

const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(-1)
    }
        
  return (
    <div>
      <h2>Details about your post: {id}</h2>
      <h4>Title: {title}</h4>
      <h5>Body: {body}</h5>
      <button onClick={handleNavigate}>Go Back</button>
    </div>
  );
};

export default PostDetail;
