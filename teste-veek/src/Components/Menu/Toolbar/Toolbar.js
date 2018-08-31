import React from 'react'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import ButtonMenu from '../ButtonMenu/ButtonMenu'
import './Toolbar.css'
import mundi from './mundi.svg'

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div className="toolbar_toggle_button">
                <DrawerToggleButton click= { props.drawerClickHandler }/>
            </div>
            <div className="toolbar-menu-items">
                <ul>
                    <li className="nav-item dropdown">
                        <a href="#" className="dropdown-toggle" id="navbarDropdown" data-toggle="dropdown"
                             aria-haspopup="true" aria-expanded="false">
                            Solutions
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item link-dropdown" href="#">Veek</a>
                        </div>
                    </li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Clients</a></li>
                    <li><a href="#">News & Events</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>
            <div className="space"></div>
            <div className="toolbar-menu2-items2">
                <ul>
                    <li>
                        <ButtonMenu/>
                    </li>
                    <li className="nav-item dropdown pt-2">
                        <a href="#"className="dropdown-toggle" id="navbarDropdown" 
                             data-toggle="dropdown"
                             aria-haspopup="true" aria-expanded="false">
                              <img src={mundi}/>  EN
                            </a>
                        <div class="dropdown-menu menu-drop" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item link-dropdown" href="#">PT</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar