import React from 'react'
import {Link} from 'react-router-dom'

function HomePg(){
    return(
        <div>
            <header className = "header" >
                Juugful Banking Intl'
            </header>
            <br></br>
            <br></br>
            <br></br>
            <a href="https://lh3.googleusercontent.com/_9XLLmuAkuklUfDC4Moc8z2lczX6zxfQWFC5nWUUND4VudVgwraeJX2JFIVj_tgIw5sjyWDAjIICmRSsmK3wr5XjvHp72rYvQM2PKHfl4uHr3qwmQHc0wrww35jpp6aIEPFnPTyjZw=w2400?source=screenshot.guru"> <img src="https://lh3.googleusercontent.com/_9XLLmuAkuklUfDC4Moc8z2lczX6zxfQWFC5nWUUND4VudVgwraeJX2JFIVj_tgIw5sjyWDAjIICmRSsmK3wr5XjvHp72rYvQM2PKHfl4uHr3qwmQHc0wrww35jpp6aIEPFnPTyjZw=w256-h197-p-k" /> </a>
            <br></br>
            <br></br>
            <button className='btn btn-link' style={{color: "black"}} type="button"><Link to="/login">Sign-on</Link></button>
        </div>
    )
}
export default HomePg