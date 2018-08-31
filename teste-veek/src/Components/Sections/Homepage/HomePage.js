import React, { Component } from 'react'

import './HomePage.css'
import TitleHomePage from './TitleHomePage/TitleHomePage'
import computer from './assets/computer.svg'
import mouse from './assets/mouse.svg'

class HomePage extends Component {
    render(){
        return(
            <div className="text-center">
                <div className="background">
                    <div className="main">
                        <TitleHomePage/>
                        <div className="computer">
                            <img  src={computer}/>
                        </div>
                        <div className="vertical-text">
                            <p className="">play video</p>
                        </div>
                    </div>

                </div>
                <div className="mouse">
                    <img src={mouse}/>
                </div>
            </div>
        )
    }
}

export default HomePage