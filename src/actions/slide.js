import {DECREMENT_SLIDE_INDEX, INCREMENT_SLIDE_INDEX} from '../utils/constants'

export function incrementSlideIndex() {
    return dispatch => {
        dispatch({type: INCREMENT_SLIDE_INDEX})
    }
}

export function decrementSlideIndex() {
    return dispatch => {
        dispatch({type: DECREMENT_SLIDE_INDEX})
    }
}
