import React from 'react'
import { useState } from 'react';
import './form.css'
import axios from 'axios';


const Form = () => {
  const [userdata,setData]=useState({Full_name:"",city:"",gender:"",age:"",occupation:"",pref:""});


  function handleSubmit(e)
  {
    e.preventDefault();
    console.log(userdata);

     
    try{
      axios({
        method:'POST',
        url:'http://localhost:5000/',
        data:{
          Full_name:userdata.Full_name,
          city:userdata.city,
          gender:userdata.gender,
          age:userdata.city,
          occupation:userdata.occupation,
          pref:userdata.pref
        }
      })
    }
    catch(err)
    {
      console.log(err);
    }
   
   

    //  console.log(data)
  }


  function handleChange(e)
  {
    e.preventDefault();
     let {name,value}=e.target;
     setData({...userdata,[name]:value});
    
  }
  return (
    <div>
      <h1 className='heading'>Form page</h1>
      <form className='form' id='userform' name='userform' onSubmit={handleSubmit}>
        <label  className='label'>Full Name: </label>
        <input type='text' className='input' name="Full_name"  onChange={handleChange}/><br/>

        <label className='label' >City: </label>
        <input type='text' className='input' name='city' onChange={handleChange}/><br/>

        <label className='label' >Gender </label>
        <input type='text' name='gender'className='input' onChange={handleChange}/><br/>

        <label className='label'>Age</label>
        <input type='number' name='age'className='input'onChange={handleChange}/><br/>

        <label className='label'>Occupation: </label>
        <input type='text' className='input' name='occupation' onChange={handleChange}/><br/>

        <label className='label'>Describe your preferences for house?</label><br/>
         <textarea rows="7" cols="40" className='input' method="post"  name='pref' onChange={handleChange}></textarea><br/>
        <input type='submit' value='submit' className='button'></input>
      </form>
    
    </div>
  )
}

export default Form