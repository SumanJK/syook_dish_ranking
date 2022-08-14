import React, { useEffect, useState } from "react";
import "./polllingSection.css";
import doodle1 from "../../assets/asset10.png";
import doodle2 from "../../assets/asset9.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PollingSection = ({ dishes,pollRank }) => {
console.log(pollRank)

  // const pollRank= JSON.parse(sessionStorage.getItem('pollResult'));

  // managing dish states
  let initialState;

  if(pollRank){

     initialState = { rank1: pollRank.rank1, rank2: pollRank.rank2, rank3: pollRank.rank3};
  }else{

     initialState = { rank1: '', rank2: '', rank3: ''}
  }

  const [dishRank, setDishRank] = useState(initialState);

  const handleChange = (e) => {

   const {name, value} = e.target;

    for (let key in dishRank) {

      if (dishRank[key] === value)
        setDishRank((dishRank[key] = ''));
      
    }
    setDishRank({ ...dishRank, [name]: value });
  };

//managing handleSubmit

  const [pollError, setPollError]= useState({});
  const [submit, setSubmit]= useState(false);

  const handleSubmit=()=>{
    setPollError(validate(dishRank));
    setSubmit(true);
  }

//validating ranking object
  const validate=(dishRank)=>{
    let error={};
    if(dishRank.rank1 === ''){
      error.rank1= 'Please select rank 1'
    }
    if(dishRank.rank2 === ''){
      error.rank2= 'Please select rank 2'
    }
    if(dishRank.rank3 === ''){
      error.rank3= 'Please select rank 3'
    }
    return error
  }

  // useEffect(() =>{
  //   setPollError(validate(dishRank));
  // },[dishRank])

   useEffect(()=>{

    if(Object.keys(pollError).length === 0 && submit){
      sessionStorage.setItem('pollResult',JSON.stringify(dishRank))
      toast("poll result submitted 💭",{
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type:"success",
        theme:"dark"
        });
    }
    setSubmit(false)
  },[submit,pollError, dishRank])



  return (
    <div className="dishPollContainer">
      {/* Floating doodles */}
      <img src={doodle1} alt="" className="doodleMelon" />
      <img src={doodle2} alt="" className="doodleBlueBerry" />
      {/*  */}
      <div className="pollHeading">
        <h3>
          Rank top <span>3</span> foods
        </h3>
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
          <h4>
            Rank <span>1</span>
          </h4>
          <select
            name="rank1"
            id=""
            value={dishRank?.rank1=== '' ? '' : dishRank?.rank1}
            onChange={handleChange}
          >
            <option value='' >select rank 1</option>
            {dishes?.map((el) => {
              return (
                <option key={el.id} value={el.id}>
                  {el?.id}.&nbsp; {el?.dishName}
                </option>
              );
            })}
          </select>
          <p className="pollError">{pollError.rank1}</p>
        </div>
        <div className="rank">
          <h4>
            Rank <span>2</span>
          </h4>
          <select
            name="rank2"
            id=""
            value={dishRank?.rank2=== '' ? '' : dishRank?.rank2}
            onChange={handleChange}
          >
            <option value="">select rank 2</option>
            {dishes?.map((el) => {
              return (
                <option key={el.id} value={el.id}>
                  {el?.id}.&nbsp; {el?.dishName}
                </option>
              );
            })}
          </select>
          <p className="pollError">{pollError.rank2}</p>
        </div>
        <div className="rank">
          <h4>
            Rank <span>3</span>
          </h4>
          <select
            name="rank3"
            id=""
            value={dishRank?.rank3=== '' ? '' : dishRank?.rank3}
            onChange={handleChange}
          >
            <option value="">select rank 3</option>
            {dishes?.map((el) => {
              return (
                <option key={el.id} value={el.id}>
                  {el?.id}.&nbsp; {el?.dishName}
                </option>
              );
            })}
          </select>
          <p className="pollError">{pollError.rank3}</p>
        </div>
        <div className="submitRatingButton">
          <button onClick={handleSubmit}>submit</button>
        </div>
        {/* <ToastContainer /> */}
      </div>
    </div>
  );
};

export default PollingSection;
