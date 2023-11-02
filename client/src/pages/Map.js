import React, { useState } from 'react'
import ReactMapGl from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css"

const Token="pk.eyJ1Ijoic2FtZWVyNSIsImEiOiJjbGV2YnYxbWQwbXQ2M3Zta2tvM3ByMjdoIn0.dPW1SvG9F65_qCsdkgAt9w";
const Map = () => {
    const [viewport,setViewPort]=useState({latitude:18.4690,
        longitude:73.8641})
  return (
    <div style={{width:"100vw",height:"100vh"}}>
         <ReactMapGl
         {...viewport}
         mapboxAccessToken={Token}
         latitude={18.4690}
         longitude={73.8641}
         width="100%"
         height="100%"
         zoom={11}
         mapStyle='mapbox://styles/mapbox/streets-v12'>
    </ReactMapGl>
    </div>
  )
}

export default Map;