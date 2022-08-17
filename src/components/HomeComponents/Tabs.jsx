import axios from "axios";
import React, { useEffect, useState } from "react";
import DishCard from "./DishCard";
import PollingSection from "./PollingSection";
import RankedDishCards from "./RankedDishCards";
import "./tabs.css";

const Tabs = () => {
  const [isActive, setActive] = useState(1);

  // fetching dishes
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json",
    }).then((res) => {
      setDishes(res?.data);
    });
  }, []);

  //getting poll Result from sessionStorage
  
  const [name, setName] = useState('');
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [userRankedDishes, setUserRankedDishes] = useState({});


  const username = localStorage.getItem("currentUser");
  const userPollResult = JSON.parse(localStorage.getItem("dishRankArray")) || [];
  // console.log(userRankedDishes,"real")



  useEffect(() => {

// getting the ids of all the dishes selected by users
  let selectedDishes = {};

  for (let i = 0; i < userPollResult.length; i++) {
    if (selectedDishes[userPollResult[i].rank1] === undefined) {
      selectedDishes[userPollResult[i].rank1] = true;
    }
    if (selectedDishes[userPollResult[i].rank2] === undefined) {
      selectedDishes[userPollResult[i].rank2] = true;
    }
    if (selectedDishes[userPollResult[i].rank3] === undefined) {
      selectedDishes[userPollResult[i].rank3] = true;
    }
  }
  
 
  //storing ids inside an array
  let keys = Object.keys(selectedDishes);

  // filtering all the dishes from the whole dish data

    let dishVal = keys.map((element) => {
      return dishes.find((el) => {
        return el.id === +element;
      });
    });

    setFilteredDishes(dishVal);
    setName(username)

  }, [isActive]);


  useEffect(() => {

    const userRankingObj= userPollResult.find((el)=>{
      return (el.name === username)
    })

    if(userRankingObj){

      setUserRankedDishes(userRankingObj)
    }
    
  },[isActive])


  return (
    <div className="container">
      <div className="tabContainer">
        {/* TAB 1 */}
        <div
          className={isActive === 1 ? "tab isActiveTab" : "tab notActiveTab"}
          onClick={() => setActive(1)}
        >
          <h3>Dishes</h3>
        </div>
        <div
          className={isActive === 2 ? "tab isActiveTab" : "tab notActiveTab"}
          onClick={() => setActive(2)}
        >
          <h3>Ranking</h3>
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
          <div className="dishesContainer">
            {dishes?.map((dish, index) => {
              return <DishCard key={dish?.id} dish={dish} index={index} />;
            })}
          </div>
          <PollingSection dishes={dishes} />
        </div>
        {/* TAB 2 */}
        <div
          className={
            isActive === 2
              ? "content isActiveContent"
              : "content notActiveContent"
          }
        >
          {Object.keys(userRankedDishes).length===0 && (
            <div className="noRankAvail">
              <h2>Please submit the poll first!</h2>
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_p6gzvnut.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </div>
          )}
          {Object.keys(userRankedDishes).length!==0 && (
            <div className="rankAvail">
              <h2> <p className="userName"> {name}</p>Thank you for participating!</h2>
              <div className="selectedDishes">
                {filteredDishes.map((el) => {

                  return (
                    <RankedDishCards el={el} userRankedDishes={userRankedDishes} key={el?.id}/>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
