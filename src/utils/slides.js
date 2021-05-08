import {SLIDES} from './constants'

export const getCurrentSlide = index => {
    return SLIDES[index].component
}
export const getCurrentChapter = slideIndex => {
    return SLIDES[slideIndex].chapterIndex
}

export const getMaxIndex = () => {
    return SLIDES.length - 1
}
