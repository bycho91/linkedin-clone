import React from "react";
import styled from "styled-components";
import "../styles/Widget.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Widget = () => {
  return (
    <div className="widget__main">
      <WidgetContainer>
        <div className="widget__item widget__news">
          <div className="widget__title">
            <h1>LinkedIn News</h1>
            <img
              src="https://image.flaticon.com/icons/png/128/157/157933.png"
              alt="info"
            />
          </div>
          <ul>
            <li className="list-item">
              <h3>Supply chain woes are getting worse</h3>
              <p>18h ago | 26,140 readers</p>
            </li>
            <li className="list-item">
              <h3>Supply chain woes are getting worse</h3>
              <p>18h ago | 26,140 readers</p>
            </li>
            <li className="list-item">
              <h3>Supply chain woes are getting worse</h3>
              <p>18h ago | 26,140 readers</p>
            </li>
            <li className="list-item">
              <h3>Supply chain woes are getting worse</h3>
              <p>18h ago | 26,140 readers</p>
            </li>
            <li className="list-item">
              <h3>Supply chain woes are getting worse</h3>
              <p>18h ago | 26,140 readers</p>
            </li>
          </ul>
          <button className="show-more-btn">
            <h1>
              Show more{" "}
              <span>
                <ExpandMoreIcon />
              </span>
            </h1>
          </button>
        </div>
      </WidgetContainer>
      <WidgetContainer></WidgetContainer>
      <WidgetContainer></WidgetContainer>
    </div>
  );
};

export default Widget;

const WidgetContainer = styled.div`
  border-radius: 6px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  position: relative;
  margin-bottom: 1em;
`;
