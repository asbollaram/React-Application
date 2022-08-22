import React, { useState } from 'react'
import './Signup.css'

const Signup = () => {
  const[singnata,singupData] = useState({
    Username:'',
    Password:'',
    Cpassword:'',
    email:'',
    fname:'',
    lname:'',
    })
  const{Username,Password,Cpassword,email,fname,lname} = singnata;
  const changeHandler = e =>{
    singupData({...singnata,[e.target.name]:e.target.value});
  }


  const singSubmithandler = e => {
    e.preventDefault();

    if(Username.length<5){
      alert("Usrname at least 5 letters");
    }else if(Password === ""){
      alert("Please enter valid password");
    } else if(Password !== Cpassword){
      alert("Password not matched");
    }
   else{
      console.log(singnata);
    }
  }
  return (
    <div className='singContainer my-5'>
      <h2 className='display-2'>Register Here !</h2>
      <form className='formSign border rounded-5' onSubmit={singSubmithandler}>
        <label>Username:</label>
        <input className='form-control' type="text" name='Username' placeholder='Username' value={Username} onChange={changeHandler}/>
        <label>Password:</label>
        <input className='form-control' type="password" name='Password' placeholder='Password' value={Password} onChange={changeHandler}/>
        <label>Enter passowrd again:</label>
        <input className='form-control' type="password" name='Cpassword' placeholder='Confirm Password' value={Cpassword} onChange={changeHandler}/>
        <label>First name:</label>
        <input className='form-control' type="text" name='fname' placeholder='First Name' value={fname} onChange={changeHandler}/>
        <label>Last Name:</label>
        <input className='form-control' type="text" name='lname' placeholder='Last Name' value={lname} onChange={changeHandler}/>
        <label>Email:</label>
        <input className='form-control' type="email" name='email' placeholder='Email' value={email} onChange={changeHandler}/>
        <button className='btn' type='submit' name="submit"> Register Now</button>
      </form>
    </div>
  )
}

export default Signup