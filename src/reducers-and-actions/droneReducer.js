import createReducer from './reducerFactory'
import { decreaseValue, increaseValue } from '../utils/changeValue'

import { SET_POSITION, MOVE_UP, MOVE_DOWN, MOVE_RIGHT, MOVE_LEFT } from '../constants/actions'
import { PERCENT_UNIT, PIXEL_UNIT } from '../constants/units'

const INITIAL_STATE = {
	fuel: 100,
    positionX: 0,
    positionY: 0,
}

const reducerMap = {
    [SET_POSITION]: (state, {x, y}) => ({
        ...INITIAL_STATE,
        positionX: x,
        positionY: y,
    }),
    [MOVE_UP]: (state) => ({
    	...state,
    	fuel: decreaseValue(state.fuel, PERCENT_UNIT),
    	positionY: decreaseValue(state.positionY, PIXEL_UNIT),
    }),
    [MOVE_DOWN]: (state) => ({
    	...state,
    	fuel: decreaseValue(state.fuel, PERCENT_UNIT),
    	positionY: increaseValue(state.positionY, PIXEL_UNIT),
    }),
    [MOVE_RIGHT]: (state) => ({
    	...state,
    	fuel: decreaseValue(state.fuel, PERCENT_UNIT),
    	positionX: increaseValue(state.positionX, PIXEL_UNIT),
    }),
    [MOVE_LEFT]: (state) => ({
    	...state,
    	fuel: decreaseValue(state.fuel, PERCENT_UNIT),
    	positionX: decreaseValue(state.positionX, PIXEL_UNIT),
    }),
}

export default createReducer(reducerMap, INITIAL_STATE)
