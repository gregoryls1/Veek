import React from 'react'

import ButtonHome from '../ButtonHome/ButtonHome'
import Social from '../SocialLink/Social'
import './TitleHomePage.css'

const titleHomePage = props => (
    <div className="title">
        <h2 className="main-call">- What we do</h2>
        <h1 className="main-title">Providing the <br/> best customer service</h1>
        <p className="main-description">Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been.
        </p>
        <ButtonHome/>
        <Social/>
    </div>

);

export default titleHomePage