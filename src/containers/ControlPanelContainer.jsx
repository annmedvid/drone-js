import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { UP, DOWN, RIGHT, LEFT } from '../constants/keys'
import { moveUp, moveDown, moveRigth, moveLeft } from '../reducers-and-actions/droneActions'
import injectProps from '../utils/decorators/injectProps'

import ControlPanel from '../components/ControlPanel'

const mapStateToProps = (store) => ({
	fuel: store.droneReducer.fuel,
	positionX: store.droneReducer.positionX,
	positionY: store.droneReducer.positionY,
})

@connect(mapStateToProps, {moveUp, moveDown, moveRigth, moveLeft})
export default class ControlPanelContainer extends Component {
	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyPress)
	}

	componentWillReceiveProps(newProps) {
		if (newProps.fuel <= 0) {
			window.removeEventListener('keydown', this.handleKeyPress)
		}
		if (newProps.fuel === 100) {
			window.addEventListener('keydown', this.handleKeyPress)
		}
	}

	handleKeyPress = (e) => {
		const {moveUp, moveDown, moveRigth, moveLeft} = this.props

		switch(e.keyCode) {
	        case UP:
	            moveUp()
	            break
	        case DOWN:
	            moveDown()
	            break
	        case RIGHT:
	            moveRigth()
	            break
	        case LEFT:
	            moveLeft()
	            break
	        default: 
	            break
    	}
	}

    @injectProps
    render({fuel, positionX, positionY}) {
        return (
            <ControlPanel
            	fuel={fuel}
            	positionX={positionX}
            	positionY={positionY}
            />
        )
    }
}

ControlPanelContainer.propTypes = {
    fuel: PropTypes.number,
    positionX: PropTypes.number,
    positionY: PropTypes.number,
    moveUp: PropTypes.func,
	moveDown: PropTypes.func,
	moveRigth: PropTypes.func,
	moveLeft: PropTypes.func,
}
