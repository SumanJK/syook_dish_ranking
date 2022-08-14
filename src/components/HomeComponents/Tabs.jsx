import axios from "axios";
import React, { useEffect, useState } from "react";
import DishCard from "./DishCard";
import PollingSection from "./PollingSection";
import "./tabs.css";


const Tabs = () => {
  
  const [isActive, setActive] = useState(1);

  // fetching dishes
  const [dishes, setDishes] = useState([]);

  useEffect(() =>{
    axios({
      method: "GET",
      url:"https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
    }).then((res) =>{
      setDishes(res?.data)
    })
  },[])

//getting poll Result from sessionStorage
  const pollRank= JSON.parse(sessionStorage.getItem('pollResult')) ;
  console.log(pollRank,'pollldddd')

//getting the ranked dishes

const [rank1, setRank1]= useState({})
const [rank2, setRank2]= useState({})
const [rank3, setRank3]= useState({})

useEffect(() =>{

      let rank1= dishes.find((o) => {
       return (o.id === +(pollRank?.rank1) )
      });
      let rank2= dishes.find((o) => {
       return (o.id === +(pollRank?.rank2) )
      });
      let rank3= dishes.find((o) => {
       return (o.id === +(pollRank?.rank3) )
      });
      setRank1(rank1)
      setRank2(rank2)
      setRank3(rank3)
      
},[pollRank,dishes])

  

  return (
    <div className="container">
      <div className="tabContainer">
{/* TAB 1 */}
        <div
          className={isActive === 1 ? "tab isActiveTab" : "tab notActiveTab"}
          onClick={()=>setActive(1)}
        >
          <h3>Dishes</h3>
        </div>
        <div
          className={isActive === 2 ? "tab isActiveTab" : "tab notActiveTab"}
          onClick={()=>setActive(2)}
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
            {dishes?.map((dish,index)=>{
              return <DishCard key= {dish?.id} dish={dish} index={index}/>
            })}
          </div>
          <PollingSection dishes={dishes} pollRank={pollRank} />
        </div>
{/* TAB 2 */}
        <div
          className={
            isActive === 2
              ? "content isActiveContent"
              : "content notActiveContent"
          }
        >
          {!pollRank && 
          <div className='noRankAvail'>
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
        }
        {pollRank &&
        <div className="rankAvail">
          <h2>Thank you for participating!</h2>
          <div className="rankedWrapper">
            <div className="ranked_container">
              <div className="rankedImg">
                <img src={rank1?.image} alt="" />
              </div>
              <div className="rankedDescription">
                <h5>{rank1?.dishName}</h5>
                <p>{rank1?.description}</p>
              </div>
              <div className="rankingNumber">Rank 01</div>
              <div className="rankingPoint">30 points</div>
            </div>
            <div className="ranked_container">
            <div className="rankedImg">
                <img src={rank2?.image} alt="" />
              </div>
              <div className="rankedDescription">
                <h5>{rank2?.dishName}</h5>
                <p>{rank3?.description}</p>
              </div>
              <div className="rankingNumber">Rank 02</div>
              <div className="rankingPoint">20 points</div>
            </div>
            <div className="ranked_container">
            <div className="rankedImg">
                <img src={rank3?.image} alt="" />
              </div>
              <div className="rankedDescription">
                <h5>{rank3?.dishName}</h5>
                <p>{rank3?.description}</p>
              </div>
              <div className="rankingNumber">Rank 03</div>
              <div className="rankingPoint">10 points</div>
            </div>
          </div>
        </div>
        }
        </div>
      </div>
    </div>
  );
};

export default Tabs;
