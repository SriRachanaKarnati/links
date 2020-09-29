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
                <div class="wel_banner" >iX Experience Orchestrator</div>
                <div class="wel-main">
                    <strong>Welcome to the iX Experience Orchestrator ‘showcase’ page.</strong><br/>
                    
                </div>
            </div>
        </div>
      );
   }
    export default Showcase;