import {INCREMENT_SLIDE_INDEX, DECREMENT_SLIDE_INDEX} from '../utils/constants'

export function app(state = {}, action = {}) {
    switch (action.type) {
        case INCREMENT_SLIDE_INDEX:
            return {...state, slideIndex: state.slideIndex + 1}
        case DECREMENT_SLIDE_INDEX:
            return {...state, slideIndex: state.slideIndex - 1}
        default:
            return state
    }
}
