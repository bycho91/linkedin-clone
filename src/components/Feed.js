import React from "react";
import styled from "styled-components";
import "../styles/Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import { IconButton } from "@material-ui/core";
import InputOption from "./InputOption";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventIcon from "@material-ui/icons/Event";
import DescriptionIcon from "@material-ui/icons/Description";
import Post from "./Post";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Feed = () => {
  return (
    <div className="feed__main">
      {/* Post Container */}
      <FeedInputContainer>
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" placeholder="Start a post" />
            <button type="submit" hidden>
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption
            Icon={PhotoSizeSelectActualIcon}
            title="Photo"
            color="#70b5f9"
          />
          <InputOption Icon={YouTubeIcon} title="Video" color="#7FC15E" />
          <InputOption Icon={EventIcon} title="Event" color="#E7A33E" />
          <InputOption
            Icon={DescriptionIcon}
            title="Write article"
            color="#FC9295"
          />
        </div>
      </FeedInputContainer>
      <div className="break__line">
        <hr />
        <p>
          Sort by:{" "}
          <span>
            Top
            <ArrowDropDownIcon fontSize="small" />
          </span>
        </p>
      </div>
      {/* News Feed/Posts Container */}
      <FeedInputContainer>
        <Post />
      </FeedInputContainer>
    </div>
  );
};

export default Feed;

const FeedInputContainer = styled.div`
  border-radius: 6px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
`;
