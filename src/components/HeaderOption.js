import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";

const HeaderOption = ({ avatar, Icon, title, Down }) => {
  return (
    <Container>
      {avatar && <UserAvatar src={avatar} />}
      {Icon && <Icon />}
      <div className="text">
        <p
          style={{
            fontWeight: "lighter",
            fontSize: "13px",
          }}
        >
          {title}
        </p>
        {Down && <Down style={{ marginLeft: "-6px" }} />}
      </div>
    </Container>
  );
};

export default HeaderOption;

const Container = styled.div`
  display: flex;
  min-width: 70px;
  flex-direction: column;
  align-items: center;
  padding: 0 0.7em;
  color: #797979;
  :hover {
    color: black;
    cursor: pointer;
  }
  box-sizing: border-box;
`;

const UserAvatar = styled(Avatar)`
  width: 22px !important;
  height: 22px !important;
`;
