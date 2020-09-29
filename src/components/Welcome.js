import React from 'react';
import Header from './Header'
import './Welcome.css'

import GettingStarted from './GettingStarted';
   function Welcome() {
      return (
        <div>
            <Header/> 
            <div class="wel_side"><GettingStarted/></div>
            <div class="wel-mid">
                <div class="wel_banner" >iX Experience Orchestrator</div>
                <div class="wel-main">
                    <strong>Welcome to the iX Experience Orchestrator ‘getting started’ page.</strong><br/>
                    <p>Here you will find resources for developers, designers, architects and sellers - or anybody else looking for information on iX Experience Orchestrator.<br/>
                    What is the iX Experience Orchestrator?</p><br/>
                    <p>It’s our IBM iX architecture framework and a toolkit of smart components built with ‘mini brains’.</p><br/><br/>
                    <p>Together, they enable you to rapidly combine the capabilities of all platforms and technologies, create every digital experience and business process, and scale up to any size of digital ecosystem.</p><br/><br/>
                    <p>-Enables simplified backend integrations, even for complex large legacy systems</p>
                    <p> -Provides smart components which are completely flexible, and they render server-side for lightning-fast speeds</p>
                    <p> -Uses prebuilt connectors and resolvers for digital platforms and technology providers: Salesforce, SAP CX, Adobe, HCL, etc!</p>
                    <p>-Runs on every cloud and allows authoring in all platforms</p>
                    <p> -Launch applications in 6 weeks with IBM Garage</p>
                    <p>  -Enables platform-level authoring using the smart components through a range of CMS platforms, including: Adobe, Bloomreach, Acquia</p>
                </div>
            </div>
        </div>
      );
   }
    export default Welcome;