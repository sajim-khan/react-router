import React from "react";
import './Post.css'
import {Link} from "react-router-dom"

const Post = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="post">
      <h4>Id: {id}</h4>
      <h3>Title: {title}</h3>
      <h5>Body: {body}</h5>
      <Link to= {`/post/${id}`}>Details</Link>
      <button>Show Details</button>
    </div>
  );
};

export default Post;
