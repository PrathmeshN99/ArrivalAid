import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { featured } from '../data';
import LocationCard from '../components/LocationCard';
import './location.css' 
export default function Showlocation() {

    const [userdata,setUserData]=useState([]);

     useEffect(() =>{
        const fetchData =async () =>{
            try{
                const response=await axios.get("http://localhost:5000/getdata");
                setUserData(response.data);
            }
            catch(error)
            {
                console.log(error);
            }
        };
        fetchData();
     },[])
   
     
    
   
  return (
   userdata.length==0?<div className='text-center font-bold text-xl m-5'>No House available ;(</div>:
    <div>
        <div className='text-center text-3xl mt-5'>House</div>
        {
         userdata.map((item) => (
            <div className='location-container'>
                <LocationCard
                  data={item}
                />
            </div>
         )) 
      
}
    </div>
  )

}
