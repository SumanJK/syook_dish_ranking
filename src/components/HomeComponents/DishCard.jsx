import React from "react";
import "./dishCard.css";
const DishCard = ({ dish,index }) => {
  console.log(dish, "dishes");

  return (
    <div className="dishCard">
      <div className="dishImage">
        <div className="dishImageWrapper">
          <img
            src={dish?.image}
            alt="dishPic"
          />
        </div>
      </div>
      <div className="dishDescription">
        <h4>{dish?.dishName}</h4>
        <p>{dish?.description}</p>
      </div>
      <div className="dishCount">
        <h1>{('0' + ++index).slice(-2)}</h1>
      </div>
    </div>
  );
};

export default DishCard;
