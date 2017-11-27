import React from 'react'

const Cover = ({showStartCover, fullCharge, onClick}) => {
	const buttonText = fullCharge ? 'start' : 'fill it up'

	return (
		<div className={`start-cover ${showStartCover ? 'active' : ''}`}>
        	{!fullCharge && <p className="start-cover_warning">Your drone is out of fuel.</p>}
        	<button className="start-cover_button" onClick={onClick}>{buttonText}</button>
  		</div>
  	)
}

export default Cover
