import React, { Component } from 'react';
import './App.css';

import Toolbar from './Components/Menu/Toolbar/Toolbar'
import SideDrawer from './Components/Menu/SideDrawer/SideDrawer'
import Backdrop from './Components/Menu/BackDrop/BackDrop'
import HomePage from './Components/Sections/Homepage/HomePage'
import Cards from './Components/Sections/Cards/Cards'
import Footer from './Components/Sections/Footer/Footer'

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState)=> {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
};
  
  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };


  render() {
    let backdrop;
    
    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;

    }
    return (
      <div>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />     
          {backdrop}
          <main>
            <HomePage/>
            <Cards/>
          </main>
          <Footer/>
      </div>

    );
  }
}

export default App;
