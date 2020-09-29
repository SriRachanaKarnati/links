import React from 'react';
import Header from './Header'
import './Welcome.css'
import GettingStarted from './GettingStarted';
   function Showcase() {
      return (
        <div>
            <Header/>
             
            <div class="wel_side"><GettingStarted/></div>
            <div class="wel-mid">
                <div class="wel_banner" >Slack</div>
                <div class="wel-main">
                    <strong>Welcome to the iX Experience Orchestrator ‘Slack’ page.</strong><br/>
                    
                </div>
            </div>
        </div>
      );
   }
    export default Showcase;