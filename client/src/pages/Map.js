import React, { useEffect, useState } from 'react'
import ReactMapGl from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css"
import { useLocation } from 'react-router-dom';

const Token="pk.eyJ1Ijoic2FtZWVyNSIsImEiOiJjbGV2YnYxbWQwbXQ2M3Zta2tvM3ByMjdoIn0.dPW1SvG9F65_qCsdkgAt9w";
const Map = () => {
  const location=useLocation();
  
  const [userdata,setUserData]=useState(null);
  useEffect(() => {
      // Ensure location.state.loc is not null before calling setUserData
      if (location.state && location.state.loc) {
        setUserData(location.state.loc);
        
      }
    }, [location.state]); 

   console.log(userdata);
 
  

  const [viewport,setViewPort]=useState({latitude:18.4690,longitude:73.8641})
  return (
    <div style={{width:"100vw",height:"100vh"}}>
         <ReactMapGl
         {...viewport}
         mapboxAccessToken={Token}
         width="100%"
         height="100%"
         zoom={11}
         mapStyle='mapbox://styles/mapbox/streets-v12'>
    </ReactMapGl>
    </div>
  )
}

export default Map;