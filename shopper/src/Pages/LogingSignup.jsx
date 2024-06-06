import React, { useState } from "react";
import './CSS/LoginSignUp.css';


const LogingSignup= () => {

  const [state,setState]=useState("Login");
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email: ""
  })

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login= async()=>{
    console.log("Login Function Executed", formData);

    let responsDate;
    await fetch('http://localhost:4000/login',{
      method:"POST",
      headers:{
        Accept: 'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((respons)=> respons.json()).then((data)=>responsDate=data)

    if(responsDate.success){
      localStorage.setItem('auth-token',responsDate.token);
      window.location.replace("/");
    }
    else{
      alert(responsDate.errors)
    }
  }

  const signup= async()=>{
    console.log("Signup Function Executed", formData);

    let responsDate;
    await fetch('http://localhost:4000/signup',{
      method:"POST",
      headers:{
        Accept: 'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((respons)=> respons.json()).then((data)=>responsDate=data)

    if(responsDate.success){
      localStorage.setItem('auth-token',responsDate.token);
      window.location.replace("/");
    }
    else{
      alert(responsDate.errors)
    }

  }
  
  return (
  <div className="loginsignup">
    <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fileds">
           {state==="Sign Up"?<input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name"  />:<></>}
           <input type="email" placeholder="Email Address" name="email" value={formData.email} onChange={changeHandler} />
           <input type="password" placeholder="Password" name="password" value={formData.password} onChange={changeHandler}/>
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state==="Sign Up"?
        <p className="loginsignup-login"> Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span> </p>
        :<p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}> Click here</span></p>}
        <div className="login-agree">
          <input type="checkbox" name="" id="" />
          <p> By continuing, i agree to the terms of use & privacy policy.  </p>
        </div>
    </div>

  </div>
  );
}

export default LogingSignup;
