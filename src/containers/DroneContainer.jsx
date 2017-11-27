import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import injectPropsAndState from '../utils/decorators/injectPropsAndState'

import Drone from '../components/Drone'

const mapStateToProps = (store) => ({
	positionX: store.droneReducer.positionX,
	positionY: store.droneReducer.positionY,
})

@connect(mapStateToProps)
export default class DroneContainer extends Component {
    state= {
        updatedStyles: null,
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            updatedStyles: {
                position: 'absolute',
                top: `${newProps.positionY}px`,
                left: `${newProps.positionX}px`
            }
        })
    }

    @injectPropsAndState
    render({droneRef, fuel}, {updatedStyles}) {
        return (
            <Drone droneRef={droneRef} style={updatedStyles} />
        )
    }
}

DroneContainer.propTypes = {
    positionX: PropTypes.number,
    positionY: PropTypes.number,
    droneRef: PropTypes.func,
}
