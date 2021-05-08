import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {decrementSlideIndex, incrementSlideIndex} from './actions/slide'
import {getCurrentSlide} from './utils/slides'
import './app.scss'
import Footer from './components/footer/footer'
import {getCurrentSlideIndex, getCurrentColor} from './selectors/app'

const cb = 'app'

const App = () => {
    const dispatch = useDispatch()
    const slideIndex = useSelector(getCurrentSlideIndex)
    const currentColor = useSelector(getCurrentColor)

    return (
        <React.StrictMode>
            <div className={cb}>
                <div className={`${cb}__bottom-bar`}>
                    <button onClick={() => dispatch(incrementSlideIndex())}>Increment</button>
                    <button onClick={() => dispatch(decrementSlideIndex())}>Decrement</button>
                </div>
                <div className={`${cb}__content-wrapper`} style={{backgroundColor: currentColor}}>
                    {getCurrentSlide(slideIndex)}
                </div>
                <Footer />
            </div>
        </React.StrictMode>
    )
}

export default App
