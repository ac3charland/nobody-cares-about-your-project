import {createSelector} from 'reselect'

export const getCurrentSlideIndex = state => state.app.slideIndex
export const getMaxSlideIndex = state => state.app.maxIndex

export const getPercentageComplete = createSelector(
    [getCurrentSlideIndex, getMaxSlideIndex],
    (currentSlideIndex, maxSlideIndex) => currentSlideIndex / maxSlideIndex
)
