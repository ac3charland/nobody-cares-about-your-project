import Footer from './footer'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureStore([thunk])

const cb = 'footer'

describe('Footer', () => {
    let props, render, store

    beforeEach(() => {
        store = mockStore({
            app: {
                slideIndex: 2,
                maxIndex: 5,
            },
        })
        props = {}

        render = (changedProps = {}) => mount(<Provider store={store}><Footer {...props} {...changedProps} /></Provider>)
    })

    it('renders without crashing and calculates progress', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb}__progress-bar`).prop('style').width).toEqual('40%')
    })
})
