import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {decrementSlideIndex, incrementSlideIndex} from './actions/slide'
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

const getCurrentSlide = index => {
    /* eslint-disable react/jsx-key */
    const slides = [
        <div style={{backgroundColor: 'red', height: '100%'}}>Red</div>,
        <div style={{backgroundColor: 'blue', height: '100%'}}>Blue</div>,
        <div style={{backgroundColor: 'green', height: '100%'}}>green</div>,
    ]

    if (index >= slides.length) {
        return slides[slides.length - 1]
    }
    else if (index < 0) {
        return slides[0]
    }

    return slides[index]
}

export default App
