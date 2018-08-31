import React, { Component } from 'react'
import './Cards.css'
import card1 from './card1.png'
import card2 from './card2.png'
import card3 from './card3.png'



class Title extends Component {
    render(){
        return <h5 className="card-title">{this.props.text}</h5>
    }
}
class Description extends Component{
    render(){
        return <p className="description">{this.props.text}</p>
    }
}



class Cards extends Component {
    render(){
        return(
            <div className="content-cards">
                <div className="cards">
                    <img src={card1}/>
                    <Title text="Overview"/>
                    <Description text="Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Duis 
                        sit amet.."/>
                    <button>Learn More</button>
                </div>
                 <div className="cards">
                 <img src={card2}/>
                 <Title text="Audience"/>
                    <Description text="Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Duis 
                        sit amet.."/>
                    <button>Learn More</button>
                </div>
                <div className="cards">
                <img src={card3}/>
                <Title text="Competitors"/>
                    <Description text="Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Duis 
                        sit amet.."/>
                    <button>Learn More</button>
                </div>
            </div>
        )
    }
}

export default Cards;