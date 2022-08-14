import React from "react";
import Tabs from "../components/HomeComponents/Tabs";
import "./styles/home.css";
import { AiOutlineLogout } from 'react-icons/ai';
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

  const navigate = useNavigate();
//logout user
  const handleLogout=()=>{

    sessionStorage.removeItem('pollResult');
    toast("User got logged out!",{
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type:"success",
      theme:"dark"
      });
      setTimeout(()=>{
          navigate('/login',{replace:false})
      },3000)
  }

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
      <div className="logout">
        <button onClick={handleLogout}>LOGOUT <AiOutlineLogout style={{fontSize:'14px'}} /></button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
