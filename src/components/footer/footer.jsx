import React from 'react'
import {useSelector} from 'react-redux'
import {getPercentageComplete, getChapterWidths, getCurrentColor} from '../../selectors/app'
import {getChapterTitle} from '../../utils/slides'
import './footer.scss'

const cb = 'footer'

// TODO
// 1. Add chapter text to footer buttons, including current chapter at all times and selected chapter on hover
// 2. Be able to click on the progress bar inside any chapter and navigate to the start of that chapter

export default function Footer(props) {
    const percentComplete = useSelector(getPercentageComplete)
    const chapterWidths = useSelector(getChapterWidths)
    const currentColor = useSelector(getCurrentColor)
    return (
        <div className={cb}>
            <div className={`${cb}__progress-bar-wrapper`}>
                <div className={`${cb}__progress-bar`} style={{width: `${percentComplete}%`}} />
                <div className={`${cb}__information`}>
                    {chapterWidths.map((chapterWidth, i) => {
                        if (!chapterWidth) {
                            return null
                        }
                        return <button className={`${cb}__chapter-button`} key={`chapter-button-${i}`} style={{width: `${chapterWidth}%`, borderLeft: i > 0 ? `2px solid ${currentColor}` : ''}}>
                            <span className={`${cb}__button-label`}>{getChapterTitle(i)}</span>
                        </button> 

                    })}
                </div>
            </div>
        </div>
    )
}
