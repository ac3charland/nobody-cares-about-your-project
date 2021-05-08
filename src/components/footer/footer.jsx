import React from 'react'
import {useSelector} from 'react-redux'
import {getPercentageComplete} from '../../selectors/app'
import './footer.scss'

const cb = 'footer'

// TODO
// 1. Have a hover animation that shows the current chapter of the essay and chapter dividers
// 2. Be able to click on the progress bar inside any chapter and navigate to the start of that chapter

export default function Footer(props) {
    const percentComplete = useSelector(getPercentageComplete)
    return (
        <div className={cb}>
            <div className={`${cb}__progress-bar`} style={{width: `${percentComplete * 100}%`}} />
        </div>
    )
}
