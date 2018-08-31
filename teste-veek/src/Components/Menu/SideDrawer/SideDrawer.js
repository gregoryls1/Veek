import React from 'react'

import ButtonMenu from '../ButtonMenu/ButtonMenu'
import './SideDrawer.css'

const sideDrawer = props => {

    let drawerClasses = 'side-drawer';

    if(props.show){
        drawerClasses = 'side-drawer open';
    }

   return(
    <nav className={drawerClasses}>
        <ul>
            <li>
                 <div className="dropright">

                     <a href="#" data-toggle="dropdown" 
                         aria-haspopup="true" aria-expanded="false">
                            Solutions &#9658;
                    </a>
                <div class="dropdown-menu drop-menu text-center">
                    <a href="#" className="dropdown-item ">Veek</a>
                </div>
                </div>
            </li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Clients</a></li>
            <li><a href="#">News & Events</a></li>
            <li><a href="#">Contact us</a></li>
            <li>
                <ButtonMenu/>
            </li>
            <li>
                <div className="dropright">
                    <a href="#" data-toggle="dropdown" 
                         aria-haspopup="true" aria-expanded="false">EN &#9658;</a>
                        <div class="dropdown-menu drop-menu text-center">
                            <a href="#" className="dropdown-item ">PT</a>
                        </div>
                </div>
            </li>
        </ul>
    </nav>
)};

export default sideDrawer