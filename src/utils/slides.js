import {SLIDES, CHAPTERS} from './constants'

export const getCurrentSlide = index => SLIDES[index].component

export const getCurrentChapter = slideIndex => SLIDES[slideIndex].chapterIndex

export const getChapterColor = chapterIndex => CHAPTERS[chapterIndex].color

export const getChapterTitle = chapterIndex => CHAPTERS[chapterIndex].title

export const getMaxIndex = () => SLIDES.length - 1

export const calculateChapterPercentWidths = () => {
    let chapterPercentWidths = new Array(CHAPTERS.length).fill(0)
    SLIDES.forEach(slide => chapterPercentWidths[slide.chapterIndex]++)
    return chapterPercentWidths.map(chapterSlideCount => chapterSlideCount / SLIDES.length * 100)
}
