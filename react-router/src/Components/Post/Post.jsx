import React from "react";
import './Post.css'
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
  
  const navigate = useNavigate()
  
    const handleNavigation = () => { 
        navigate(`/post/${id}`);
    }
  
  return (
    <div className="post">
      <h4>Id: {id}</h4>
      <h3>Title: {title}</h3>
      <h5>Body: {body}</h5>
      <Link to={`/post/${id}`}>Details</Link>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link>
      <button onClick={handleNavigation}>With button handler</button>
    </div>
  );
};

export default Post;
