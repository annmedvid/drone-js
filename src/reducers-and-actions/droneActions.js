import { SET_POSITION, MOVE_UP, MOVE_DOWN, MOVE_RIGHT, MOVE_LEFT } from '../constants/actions'

export const setInitialPosition = (x, y) => ({
    type: SET_POSITION,
    payload: {x, y},
})

export const moveUp = () => ({
    type: MOVE_UP
})

export const moveDown = () => ({
    type: MOVE_DOWN
})

export const moveRigth = () => ({
    type: MOVE_RIGHT
})

export const moveLeft = () => ({
    type: MOVE_LEFT
})
