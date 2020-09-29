import React from 'react';
import  './GettingStarted.css';
import Header from './Header';
import Welcome from './Welcome';
import Collapsible from 'react-collapsible';
import ScrollArea from 'react-scrollbar';

   function GettingStarted() {
      return (
        
            
        <div >
      
        <div class="sidenav">     
               
            <ul class="subnav">
            <Collapsible  trigger="Getting Started       ^">
                      
                <li><a href="./Welcome">Welcome</a><br/></li>
                <li><a href="./Showcase">Showcase</a> <br/></li>
                <li><a href="./Startinganewproject">Starting a new project</a> <br/></li>
                <li><a href="./Developerprereading">Developer pre reading</a> <br/></li>
                <li><a href="./Developersetup">Developer Set Up</a> <br/></li>
            </Collapsible>
           </ul>  
            
           <ul class="subnav">
           <Collapsible trigger="Contributing        ^">
                <li><a href="./Howtocontribute">How to Contribute</a><br/></li>
                <li><a href="./Adaptercodebase">Adapter Codebase</a> <br/></li>
                </Collapsible>
           </ul>
           <ul class="subnav">
           <Collapsible trigger="Contact  ^">
                <li><a href="./Whoswho">Who's Who</a><br/></li>
                <li><a href="./Slack">Slack</a> <br/></li>
            </Collapsible>
           </ul>
            <div >
                <ul class="footer">
                    <li><a href="https://github.ibm.com/ixliberty/ixl-frontend" target="_blank">GitHub ixl-frontend.git</a></li>
                    <li><a href="https://github.ibm.com/ixliberty/ixl-adapter"target="_blank">GitHub ixl-adapter.git</a></li>
                    <li><a href="https://github.ibm.com/ixliberty/ixl-tutorial-website"target="_blank">GitHub ixl-tutorial-website</a></li>
                    <li><a href="https://storybook-route-exo-dev.uki-commerce-clus-382893-ed73e322e3ea12289f5ccd3b2effe14c-0000.eu-gb.containers.appdomain.cloud/?path=/story/commerce-product--normal" target="_blank">Storybook</a></li>
                    <li><a href="https://www.carbondesignsystem.com/" target="_blank">Carbon</a></li>
                </ul>
            </div>
         </div>
      
         </div>
       
      );
   }
    export default GettingStarted;