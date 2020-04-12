import React from 'react';
import {Link} from "react-router-dom";


import './menu.css';

export default class Menu extends React.Component{
    render(){
        return (
           <nav>
               <div className='menu'>
                   <div className="menu-bar">
                       <div className="menu-item">
                           <Link className="menu-item-link" to='/about'>About</Link>
                       </div>
                       <div className="menu-item">
                           <Link className="menu-item-link" to='/notes'>Notes</Link>
                       </div>
                       <div className="menu-item">
                           <Link className="menu-item-link" to='/todo'>To do</Link>
                       </div>
                   </div>
               </div>
           </nav>
        )
    }
}
