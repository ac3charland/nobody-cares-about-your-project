import React from 'react'
import './footer.scss'
import moment from 'moment'

const cb = 'footer'

// TODO
// 1. Have a progress bar that animates position as the slides advance
// 2. Have a hover animation that shows the current chapter of the essay and chapter dividers
// 3. Be able to click on the progress bar inside any chapter and navigate to the start of that chapter

export default function Footer(props) {
    return (
        <div className={cb}>
            <div className={`${cb}__text`}>Copyright &copy; {moment().format('YYYY')} [CHANGE_ME_SITE_COMPANY_HERE]</div>
            <div className={`${cb}__disclaimer`}>[CHANGE_ME_OPTIONAL_DISCLAIMER]</div>
        </div>
    )
}
