import React, { useState } from 'react';
import './Login.css'

const Login = () => {
  const [logindata,setlogindata] = useState({
    Username:'',
    Email:'',
    Password:'',
    Cpassword:'',
  })
  const {Username,Email,Password,Cpassword} = logindata;
  const changeHandler = e =>{
    setlogindata({...logindata,[e.target.name]:e.target.value});
  }
  const submitHandler = e =>{
    e.preventDefault();
    if(Username.length<5){
      alert(" Username at least 5 letters");
    }else if (Password === "" ){
    alert("Please enter password")
    }else if(Password !== Cpassword){
      alert("Password are not matched")
    }else{
      alert("Login success")
      console.log(logindata)
    }
  
  }
  return (
    <div className='loginContainer my-5'>
      <h2 className='display-2'>Login Here</h2>
      <form className='formLogn' onSubmit={submitHandler}>
        <label>Username :</label>
        <input className='form-control' type="text" name="Username" value={Username} placeholder="Username" onChange={changeHandler} />
        <label>Email :</label>
        <input className='form-control' type="email" name="Email" value={Email} placeholder="Email" onChange={changeHandler} />
        <label>Password :</label>
        <input className='form-control' type="password" name="Password" value={Password} placeholder="Password" onChange={changeHandler} />
        <label>Confirm Password :</label>
        <input className='form-control' type="password" name="Cpassword" value={Cpassword} placeholder="Confirm Password"  onChange={changeHandler}/>
        {Password !== Cpassword ? <span style={{color:'red'}}>Password not matched</span>: null}
        <button className='btn' type="submit" name="submit">Login</button>
      </form>
      
    </div>
  )
}

export default Login