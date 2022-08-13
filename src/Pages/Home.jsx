import React from "react";
import Tabs from "../components/HomeComponents/Tabs";
import "./styles/home.css";

const Home = () => {
  return (
    <div className="homeContainer">
        <div className="siteLogo">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_qwsyhuhb.json"
            background="transparent"
            speed="1"
            style={{ width: "20%", height: "120%" }}
            loop
            autoplay
          ></lottie-player>
      </div>
      <Tabs />
    </div>
  );
};

export default Home;
