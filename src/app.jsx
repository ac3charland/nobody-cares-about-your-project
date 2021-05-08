import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {decrementSlideIndex, incrementSlideIndex} from './actions/slide'
import {getCurrentSlide} from './utils/slides'
import './app.scss'

const cb = 'app'

const App = () => {
    const dispatch = useDispatch()
    const slideIndex = useSelector(state => state.app.slideIndex)

    return (
        <React.StrictMode>
            <div className={cb}>
                <div className={`${cb}__content-wrapper`}>
                    {getCurrentSlide(slideIndex)}
                </div>
                <div className={`${cb}__bottom-bar`}>
                    <button onClick={() => dispatch(incrementSlideIndex())}>Increment</button>
                    <button onClick={() => dispatch(decrementSlideIndex())}>Decrement</button>
                </div>
            </div>
        </React.StrictMode>
    )
}

export default App
