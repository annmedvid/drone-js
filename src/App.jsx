import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setInitialPosition } from './reducers-and-actions/droneActions'

import ControlPanelContainer from './containers/ControlPanelContainer'
import DroneContainer from './containers/DroneContainer'
import CoverContainer from './containers/CoverContainer'

@connect(null, {setInitialPosition})
class App extends Component {
	defineInitialPosition = () => {
		const { x, y } = this.drone.getBoundingClientRect()
		this.props.setInitialPosition(x, y)
	}

    render() {
        return <div>
            <ControlPanelContainer />
            <DroneContainer droneRef={el => this.drone = el} />
            <CoverContainer defineInitialPosition={this.defineInitialPosition} />
        </div>
    }
}

export default App
