import React from 'react';
import Header from './Header'
import './Welcome.css'
import GettingStarted from './GettingStarted';
   function Developersetup() {
      return (
        <div>
            <Header/>
             
            <div class="wel_side"><GettingStarted/></div>
            <div class="wel-mid">
                <div class="wel_banner" >Prerequisites</div>
                <div class="wel-main">
                    <strong>Welcome to the iX Experience Orchestrator ‘Developer Set up’ page.</strong><br/>
                    
                </div>
            </div>
        </div>
      );
   }
    export default Developersetup;