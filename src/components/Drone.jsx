import React from 'react'
import drone from '../assets/images/drone.png'

const Drone = ({droneRef, style}) => {
	return <img src={drone} alt="drone" className="drone" ref={droneRef} style={style}/>
}

export default Drone
