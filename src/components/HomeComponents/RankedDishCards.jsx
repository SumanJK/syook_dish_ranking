import React from "react";
import './tabs.css'

const RankedDishCards = ({ el, userRankedDishes }) => {

  return (
    <div className="ranked_container">
      <div className="rankedImg">
        <img src={el?.image} alt="" />
      </div>
      <div className="rankedDescription">
        <h5>{el?.dishName}</h5>
        <p>{el?.description}</p>
      </div>
      {el?.id === +userRankedDishes.rank1 &&
      <>
      <div className="rankingNumber">Rank 01</div>
      <div className="rankingPoint">30 points</div>
      </>
      }
      {el?.id === +userRankedDishes.rank2 &&
      <>
      <div className="rankingNumber">Rank 02</div>
      <div className="rankingPoint">20 points</div>
      </>
      }
      {el?.id === +userRankedDishes.rank3 &&
      <>
      <div className="rankingNumber">Rank 03</div>
      <div className="rankingPoint">10 points</div>
      </>
      }
      
    </div>
  );
};

export default RankedDishCards;
