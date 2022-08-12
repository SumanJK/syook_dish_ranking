import React, { useState } from "react";
import "./styles/login.css";
import arrow from "../assets/Arrow6.svg";

const Login = () => {

  const initialState = {username: "", password:"", confirmPassword: ""};

  const [formData, setFormData] = useState(initialState);
  const [formError, setFormError] = useState({});

  const handleChange=(e)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
  }

const handleSubmit=(e)=>{

  e.preventDefault();
  setFormError(validateForm(formData));

}

const validateForm = (formValue)=>{

  const error={};

  if(!formValue.username){
    error.username="username is required!"
  }
  if(!formValue.password){
    error.password="password is required!"
  }
  if( formValue.password && !formValue.confirmPassword){
    error.confirmPassword="confirm the password"
  }
  if(formValue.confirmPassword && formValue.password !== formValue.confirmPassword){
    error.confirmPassword="passwords didn't match!"
  }
  return error;
}


  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginFormContainer">
          <div className="loginHeader">
            <h2>Login to Continue</h2>
            <img className="arrow" src={arrow} alt="" />
          </div>
          <form action="login" className="loginForm" onSubmit={handleSubmit}>
            <div className="inputElem">
              <label htmlFor="username">username</label>
              <input type="text" placeholder="Username"  onChange={handleChange} value={formData.username} name="username"/>
              <span className="inputError">{formError.username}</span>
            </div>
            <div className="inputElem">
              <label htmlFor="password">password</label>
              <input type="text" placeholder="password" onChange={handleChange} value={formData.password} name="password"/>
              <span className="inputError">{formError.password}</span>
            </div>
            <div className="inputElem">
              <label htmlFor="confirm password">confirm password</label>
              <input type="text" placeholder="confirmPassword" onChange={handleChange} value={formData.confirmPassword} name="confirmPassword"/>
              <span className="inputError">{formError.confirmPassword}</span>
            </div>
            <div className="loginButtonDiv">
              <input className="loginButton" type="submit" value="Login" />
            </div>
          </form>
        </div>
        <div className="loginImage">
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_q5evpnci.json"
            background="transparent"
            speed="1"
            style={{ width: "100%", height: "110%", transform: "scale(1.3)" }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default Login;
