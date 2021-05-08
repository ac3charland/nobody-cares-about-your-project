import React from 'react'

export const SECONDARY_PAGE_URL = '/secondary'

// Redux Actions
export const INCREMENT_SLIDE_INDEX = 'INCREMENT_SLIDE_INDEX'
export const DECREMENT_SLIDE_INDEX = 'DECREMENT_SLIDE_INDEX'

// Programmatic CSS
export const NAVBAR_HEIGHT = 5

// Essay Structure
/* eslint-disable react/jsx-key */
export const SLIDES = [
    {
        chapterIndex: 0,
        component: <div>Red</div>,
    },
    {
        chapterIndex: 1,
        component: <div>Blue</div>,
    },
    {
        chapterIndex: 1,
        component: <div>Purple</div>,
    },
    {
        chapterIndex: 2,
        component: <div>green</div>,
    },
]

export const CHAPTERS = [
    {
        title: 'Introduction',
        color: 'red',
    },
    {
        title: 'Nobody Cares About Your Project',
        color: 'blue',
    },
    {
        title: 'Make Good Stuff',
        color: 'green',
    },
    {
        title: 'Make Things People Didn\'t Know They Wanted',
        color: 'purple',
    },
    {
        title: 'Conclusion',
        color: 'brown',
    },
]
