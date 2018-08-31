import React from 'react'

import './Social.css'
import twiter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'

const socialLink = props => (
        <div className="social">
            <ul>
                <li>
                    <a href="#">
                        <img src={facebook}/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={twiter} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={linkedin}/>
                    </a>
                </li>
            </ul>
        </div>

);

export default socialLink
