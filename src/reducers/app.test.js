import {app} from './app'
import {DECREMENT_SLIDE_INDEX, INCREMENT_SLIDE_INDEX} from '../utils/constants'

describe('App Reducer', () => {
    let state

    beforeEach(() => {
        state = {a: 'b', slideIndex: 2}
    })

    it('increments slideIndex when INCREMENT_SLIDE_INDEX is received', () => {
        const newState = app(state, {type: INCREMENT_SLIDE_INDEX})
        expect(newState).toEqual({a: 'b', slideIndex: 3})
    })

    it('increments slideIndex when DECREMENT_SLIDE_INDEX is received', () => {
        const newState = app(state, {type: DECREMENT_SLIDE_INDEX})
        expect(newState).toEqual({a: 'b', slideIndex: 1})
    })

    it('handles unknown action', () => {
        const newState = app(state, {type: 'whatever'})
        expect(newState).toEqual({a: 'b', slideIndex: 2})
    })

    it('handles empty action', () => {
        const newState = app(state)
        expect(newState).toEqual({a: 'b', slideIndex: 2})
    })
})
