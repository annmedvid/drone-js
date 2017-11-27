import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ENTER } from '../constants/keys'
import injectState from '../utils/decorators/injectState'

import Cover from '../components/Cover'

const mapStateToProps = (store) => ({
    fuel: store.droneReducer.fuel,
})

@connect(mapStateToProps)
export default class CoverContainer extends Component {
    state = {
        showStartCover: true,
        fullCharge: true,
    }

    componentWillMount() {
        window.addEventListener('keydown', this.handleKeyPress)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.fuel <= 0) {
            window.addEventListener('keydown', this.handleKeyPress)
            this.setState({
                showStartCover: true,
                fullCharge: false,
            })
        }
    }

    handleClick = () => {
        window.removeEventListener('keydown', this.handleKeyPress)
        this.props.defineInitialPosition()
        this.setState({
            showStartCover: false,
            fullCharge: true
        })
    }

    handleKeyPress = (e) => {
        if (e.keyCode === ENTER) {
            this.handleClick()
        }
    }

    @injectState
    render({showStartCover, fullCharge}) {
        return (
            <Cover 
                showStartCover={showStartCover}
                fullCharge={fullCharge}
                onClick={this.handleClick}
            />
        )
    }
}

CoverContainer.propTypes = {
    fuel: PropTypes.number,
    defineInitialPosition: PropTypes.func,
}
