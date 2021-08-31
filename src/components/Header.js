import React from "react";
import "../styles/Header.css";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import LineStyleIcon from "@material-ui/icons/LineStyle";
import HeaderOption from "./HeaderOption";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <SearchContainer>
          <img
            src="https://image.flaticon.com/icons/png/512/174/174857.png"
            alt="linkedin logo"
            style={{
              objectFit: "contain",
              height: "35px",
              marginRight: ".5em",
            }}
          />
          <SearchBar>
            <SearchIcon />
            <SearchInput placeholder="Search" />
          </SearchBar>
        </SearchContainer>

        <OptionsContainer>
          <div className="left-options">
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="Network" />
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <HeaderOption
              avatar="https://media-exp1.licdn.com/dms/image/D4E35AQH5aJDhqZxYDA/profile-framedphoto-shrink_100_100/0/1626394958147?e=1630101600&v=beta&t=oYUcav4m13mRiOOdII_LY504fJ_BZz6O-p8dgmk0aJk"
              title="Me"
              Down={ArrowDropDownIcon}
              className="border-r-2 border-[whitesmoke]"
            />
          </div>
          <div className="right-options">
            <HeaderOption
              Icon={LineStyleIcon}
              title="Work"
              Down={ArrowDropDownIcon}
            />
            <div className="try-premium-btn">
              <p>
                Try Premium <br />
                for free
              </p>
            </div>
          </div>
        </OptionsContainer>
      </HeaderContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: white;
  border-bottom: 1px solid whitesmoke;
`;

const HeaderContainer = styled.div`
  width: 90%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  height: 60px;
  box-sizing: border-box;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #eef3f8;
  padding-left: 8px;
  font-size: 14px;
  border-radius: 5px;
  width: 250px;
`;

const SearchInput = styled.input`
  outline: none;
  border: none;
  background: none;
  padding: 10px;
`;

const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 60px;
`;
