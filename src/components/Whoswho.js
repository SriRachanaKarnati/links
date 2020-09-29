import React from 'react';
import Header from './Header'
import './Welcome.css'
import GettingStarted from './GettingStarted';
   function Whoswho() {
      return (
          
        <div>
            
            <Header/>
             
            <div class="wel_side"><GettingStarted/></div>
            <div class="wel-mid">
                <div class="wel_banner" >EXO Who's who</div>
                <div class="wel-main">
                    <strong>Welcome to the iX Experience Orchestrator ‘Who's who’ page.</strong><br/>
                    
                </div>
            </div>
        </div>
      );
      
   }
    export default Whoswho;