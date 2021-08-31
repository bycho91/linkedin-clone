import React from "react";
import styled from "styled-components";
import "../styles/Post.css";
import { Avatar } from "@material-ui/core";

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className="post__main">
      <div className="post__header">
        <UserAvatar />
        <div className="post__info">
          <h2>Benjamin Cho</h2>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
};

export default Post;

const UserAvatar = styled(Avatar)``;
