import {INCREMENT_SLIDE_INDEX, DECREMENT_SLIDE_INDEX} from '../utils/constants'
import {getMaxIndex, getCurrentChapter} from '../utils/slides'

const initialState = {
    slideIndex: 0,
    chapterIndex: getCurrentChapter(0),
    maxIndex: getMaxIndex(),
}

export function app(state = initialState, action = {}) {
    switch (action.type) {
        case INCREMENT_SLIDE_INDEX: {
            const nextIndex = state.slideIndex + 1 > state.maxIndex ? state.slideIndex : state.slideIndex + 1
            return {...state, slideIndex: nextIndex, chapterIndex: getCurrentChapter(nextIndex)}
        }

        case DECREMENT_SLIDE_INDEX: {
            const nextIndex = state.slideIndex - 1 < 0 ? state.slideIndex : state.slideIndex - 1
            return {...state, slideIndex: nextIndex, chapterIndex: getCurrentChapter(nextIndex)}
        }
        default:
            return state
    }
}
