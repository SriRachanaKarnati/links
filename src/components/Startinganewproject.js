import React from 'react';
import Header from './Header'
import './Welcome.css'
import GettingStarted from './GettingStarted';
   function Startinganewproject() {
      return (
        <div>
            <Header/>
             
            <div class="wel_side"><GettingStarted/></div>
            <div class="wel-mid">
                <div class="wel_banner" >Starting a new Project</div>
                <div class="wel-main">
                    <strong>Welcome to the iX Experience Orchestrator ‘Starting a new project’ page.</strong><br/>
                    
                </div>
            </div>
        </div>
      );
   }
    export default Startinganewproject;