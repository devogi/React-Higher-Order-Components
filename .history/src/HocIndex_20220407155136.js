import React, { Component } from "react";

const layout =
  (Component) =>
  ({ ...props }) =>
    (
      <div>
        <AppBar />
        <SideBar />
        <div style={{ position: "absolute", left: "340px" }}>
            
        </div>
      </div>
    );

export default HocIndex;
