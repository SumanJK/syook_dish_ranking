import axios from "axios";
import React, { useEffect, useState } from "react";
import DishCard from "./DishCard";
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
          <div className="dishesContainer">
            {dishes?.map((dish)=>{
              return <DishCard key= {dish?.id} dish={dish}/>
            })}
          </div>
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
