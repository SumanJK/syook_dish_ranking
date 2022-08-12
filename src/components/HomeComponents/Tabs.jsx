import React, { useState } from "react";
import "./tabs.css";
const Tabs = () => {
  const [isActive, setActive] = useState(1);

  return (
    <div className="container">
      <div className="tabContainer">
        <div
          className={isActive === 1 ? "tab isActiveTab" : "tab notActiveTab"}
          onClick={()=>setActive(1)}
        >
          <h3>TAB1</h3>
        </div>
        <div
          className={isActive === 2 ? "tab isActiveTab" : "tab notActiveTab"}
          onClick={()=>setActive(2)}
        >
          <h3>TAB2</h3>
        </div>
      </div>
      <div className="contentContainer">
        <div
          className={
            isActive === 1
              ? "content isActiveContent"
              : "content notActiveContent"
          }
        >
          <p>
            1. How to Build a Tabs Component with React -
            DigitalOceanhttps://www.digitalocean.com › community › tutorials
            25-Aug-2020 — Tabs are a common UI component and are important to
            understand how to implement. In this article you will learn how to
            build a Tabs ... React Tabs component - Material UI -
            MUIhttps://mui.com › material-ui › react-tabs Tabs make it easy to
            explore and switch between different views. Tabs organize and allow
            navigation between groups of content that are related and at the
            same ... Tab API · TabPanel API · TabContext API · TabList API Tab
            components - React-Bootstraphttps://react-bootstrap.github.io ›
            components › tabs Tabs is a higher-level component for quickly
            creating a Nav matched with ... Notice that the Tabs is the entire
            width but each Tab item is a different size. Controlled Fill and
            justify · Custom Tab Layout · API{" "}
          </p>
        </div>
        <div
          className={
            isActive === 2
              ? "content isActiveContent"
              : "content notActiveContent"
          }
        >
          <p>
            2. https://react-bootstrap.github.io ›
            components › tabs Tabs is a higher-level component for quickly
            creating a Nav matched with ... Notice that the Tabs is the entire
            width but each Tab item is a different size. Controlled Fill and
            justify · Custom Tab Layout · API{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
