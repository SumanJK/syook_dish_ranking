import React from "react";
import "./polllingSection.css";
import doodle1 from "../../assets/asset10.png"
import doodle2 from "../../assets/asset9.png"

const PollingSection = ({dishes}) => {
  return (
    <div className="dishPollContainer">
{/* Floating doodles */}
      <img src={doodle1} alt="" className="doodleMelon" />
      <img src={doodle2} alt="" className="doodleBlueBerry" />
{/*  */}
      <div className="pollHeading">
        <h3>Rank top <span>3</span> foods</h3>
        <div className="arrowAnimation">
          <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_dbwrpcsu.json"
              background="transparent"
              speed="1"
              style={{ width: "100%", height: "100%" }}
              autoplay
            ></lottie-player>
        </div>
      </div>
      <div className="pollingContent">
        <div className="rank">
          <h4>Rank <span>1</span></h4>
          <select name="rank1" id="">
            {dishes?.map((el)=>{
              return <option key={el.id} value={el?.dishName}>{el?.dishName}</option>
            })}
          </select>
        </div>
        <div className="rank">
          <h4>Rank <span>2</span></h4>
          <select name="rank2" id="">
            {dishes?.map((el)=>{
              return <option key={el.id} value={el?.dishName}>{el?.dishName}</option>
            })}
          </select>
        </div>
        <div className="rank">
          <h4>Rank <span>3</span></h4>
          <select name="rank3" id="">
            {dishes?.map((el)=>{
              return <option key={el.id} value={el?.dishName}>{el?.dishName}</option>
            })}
          </select>
        </div>
        <div className="submitRatingButton">
            <button>submit</button>
        </div>
      </div>
    </div>
  )
};

export default PollingSection;
