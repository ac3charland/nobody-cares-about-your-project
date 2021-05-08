import {app} from './app'
import {DECREMENT_SLIDE_INDEX, INCREMENT_SLIDE_INDEX} from '../utils/constants'

jest.mock('../utils/constants', () => ({
    ...jest.requireActual('../utils/constants'),
    SLIDES: [
        {
            a: 'b',
            chapterIndex: 0,
        },
        {
            c: 'd',
            chapterIndex: 1,
        },
        {
            e: 'f',
            chapterIndex: 1,
        },
        {
            g: 'h',
            chapterIndex: 2,
        },
    ],
}))

describe('App Reducer', () => {
    let state

    beforeEach(() => {
        state = {a: 'b', slideIndex: 1, maxIndex: 3, chapterIndex: 1}
    })

    it('increments slideIndex when INCREMENT_SLIDE_INDEX is received', () => {
        const newState = app(state, {type: INCREMENT_SLIDE_INDEX})
        expect(newState).toEqual({a: 'b', slideIndex: 2, maxIndex: 3, chapterIndex: 1})
    })

    it('increments slideIndex when DECREMENT_SLIDE_INDEX is received', () => {
        const newState = app(state, {type: DECREMENT_SLIDE_INDEX})
        expect(newState).toEqual({a: 'b', slideIndex: 0, maxIndex: 3, chapterIndex: 0})
    })

    it('handles unknown action', () => {
        const newState = app(state, {type: 'whatever'})
        expect(newState).toEqual({a: 'b', slideIndex: 1, maxIndex: 3, chapterIndex: 1})
    })

    it('handles empty action', () => {
        const newState = app(state)
        expect(newState).toEqual({a: 'b', slideIndex: 1, maxIndex: 3, chapterIndex: 1})
    })
})
