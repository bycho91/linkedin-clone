import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widget from "./components/Widget";
import styled from "styled-components";

function App() {
  return (
    <div className="app">
      <BackgroundColor />
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;

const BackgroundColor = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f3f2ef;
  z-index: -99;
  position: absolute;
  top: 0;
  left: 0;
`;
