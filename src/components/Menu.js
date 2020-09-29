import React from 'react';
import Header from './Header'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
   function Menu() {
      return (
         <div class="sidenav">
             <Header/>
             
          <Link to={'/Getting Started'}>Getting Started</Link> | 
         
         </div>
      );
   }
    export default Menu;