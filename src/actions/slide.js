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

// TODO Some kind of startTransition() function that sets a transitioning flag to true, 
// starts a timeout for the duration of the transition animation, 
// then dispatches INCREMENT_SLIDE_INDEX when that's done
