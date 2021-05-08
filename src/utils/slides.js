import {SLIDES} from './constants'

export const getCurrentSlide = index => SLIDES[index].component

export const getCurrentChapter = slideIndex => SLIDES[slideIndex].chapterIndex

export const getMaxIndex = () => SLIDES.length - 1
