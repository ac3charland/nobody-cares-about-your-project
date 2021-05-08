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
        component: <div style={{backgroundColor: 'red', height: '100%'}}>Red</div>,
    },
    {
        chapterIndex: 1,
        component: <div style={{backgroundColor: 'blue', height: '100%'}}>Blue</div>,
    },
    {
        chapterIndex: 2,
        component: <div style={{backgroundColor: 'green', height: '100%'}}>green</div>,
    },
]

export const CHAPTERS = [
    'Introduction', 
    'Nobody Cares About Your Project',
    'Make Good Stuff',
    'Making Things People Didn\'t Know They Wanted',
    'Conclusion',
]
