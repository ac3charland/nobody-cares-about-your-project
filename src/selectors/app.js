import {createSelector} from 'reselect'
import {getChapterColor} from '../utils/slides'

export const getCurrentSlideIndex = state => state.app.slideIndex
export const getCurrentChapterIndex = state => state.app.chapterIndex
export const getMaxSlideIndex = state => state.app.maxIndex
export const getChapterWidths = state => state.app.chapterPercentWidths

export const getPercentageComplete = createSelector(
    [getCurrentSlideIndex, getMaxSlideIndex],
    (currentSlideIndex, maxSlideIndex) => ((currentSlideIndex + 1) / (maxSlideIndex + 1)) * 100
)

export const getCurrentColor = createSelector(getCurrentChapterIndex, currentChapterIndex => getChapterColor(currentChapterIndex))
