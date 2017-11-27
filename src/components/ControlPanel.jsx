import React from 'react'

const ControlPanel = ({fuel, positionX, positionY}) => {
	return <section className="control-panel">
		<h2 className="control-panel_title">Current level</h2>
		<span className="control-panel_label">fuel</span><span>{fuel}%</span>
		<h2 className="control-panel_title">Coordinates</h2>
		<span className="control-panel_label">x</span><span>{Math.round(positionX)}</span>
		<span className="control-panel_label">y</span><span>{Math.round(positionY)}</span>
	</section>
}

export default ControlPanel
