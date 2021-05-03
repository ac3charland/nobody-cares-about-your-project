import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {decrementSlideIndex, incrementSlideIndex} from './slide'

const mockStore = configureStore([thunk])

describe('Mark Home Page', () => {
    let store
    beforeEach(() => {
        store = mockStore()
    })

    it('dispatches correct action when incrementSlideIndex is called', () => {
        store.dispatch(incrementSlideIndex())
        expect(store.getActions()).toEqual([{type: 'INCREMENT_SLIDE_INDEX'}])
    })

    it('dispatches correct action when decrementSlideIndex is called', () => {
        store.dispatch(decrementSlideIndex())
        expect(store.getActions()).toEqual([{type: 'DECREMENT_SLIDE_INDEX'}])
    })
})
