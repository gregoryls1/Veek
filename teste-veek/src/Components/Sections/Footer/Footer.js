import React, { Component } from 'react'

import BackgroundFooter from './background-footer.png'
import './Footer.css'


class Number extends Component {
    render(){
        return <h3>{this.props.number}</h3>
    }
}
class Paragraph extends Component{
    render(){
        return <p>{this.props.label}</p>
    }
}

class Footer extends Component {
    render(){
        return(
            <div className="content-numbers ">
                <div className="number">
                    <Number number="730+"/>
                    <Paragraph label="customers"/>        
                </div>
                 <div className="number">
                    <Number number="200+"/>
                    <Paragraph label="clients"/>        
                </div>
                <div className="number">
                    <Number number="200+"/>
                    <Paragraph label="countries"/>        
                </div>
                <div className="background-footer">
                    <img src={BackgroundFooter}/>
                </div>
            </div>
        )
    }
}

export default Footer;