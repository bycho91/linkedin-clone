import React from "react";
import styled from "styled-components";
import "../styles/Sidebar.css";
import { Avatar } from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="item hover-item sidebar">
      <PeopleAltIcon fontSize="small" />
      <h4>{topic}</h4>
    </div>
  );

  return (
    <div className="sidebar__main">
      <SidebarContainer>
        <div className="heading-image">
          <img
            src="https://images.unsplash.com/photo-1630084069593-9b692c6a3be6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="heading image"
          />
        </div>
        <div className="sidebartop sidebartop__title">
          <UserAvatar src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
          <h1 className="name">Benjamin Cho</h1>
          <div className="title">Front End Developer | Automation</div>
        </div>

        <div className="sidebartop sidebartop__stats">
          <div className="stat hover-item">
            <h4>Who viewed your profile</h4>
            <a href="#">50</a>
          </div>
          <div className="stat hover-item">
            <h4>Views of your post</h4>
            <a href="#">205</a>
          </div>
        </div>

        <a
          href="https://www.linkedin.com/premium/survey/?destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F%3FshowPremiumWelcomeBanner%3Dtrue&upsellOrderOrigin=premium_homepage_identity_upsell"
          target="_blank"
          className="sidebartop sidebartop__premium"
        >
          <p>Access exclusive tools & insights</p>
          <div className="try-premium">
            <img
              src="https://image.flaticon.com/icons/png/128/3153/3153080.png"
              alt="premium logo"
            />
            <h4>Try Premium for free</h4>
          </div>
        </a>

        <div className="sidebartop sidebartop__items">
          <BookmarkIcon />
          <h4>My items</h4>
        </div>
      </SidebarContainer>

      <SidebarContainer>
        <div className="sidebarbottom">
          <p>Recent</p>
          {recentItem("freeCodeCamp Dallas")}
          {recentItem("UTD - Full Time MBA")}
          {recentItem("Remote Jobs for Devs")}
        </div>
        <div className="sidebarbottom">
          <p>Groups</p>
          <div className="item hover-item">
            <PeopleAltIcon fontSize="small" />
            <h4>freeCodeCamp Dallas</h4>
          </div>
          <div className="item hover-item">
            <PeopleAltIcon fontSize="small" />
            <h4>UTD - Full Time MBA</h4>
          </div>
        </div>
        <div className="discover-more">
          <h1>Discover more</h1>
        </div>
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  border-radius: 6px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  position: relative;
  margin-bottom: 1em;
`;

const UserAvatar = styled(Avatar)`
  width: 70px !important;
  height: 70px !important;
  box-sizing: border-box;
  border: 3px solid white !important;
  margin: auto !important;
  margin-bottom: 0.5em !important;
`;
