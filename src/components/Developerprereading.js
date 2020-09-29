import React from 'react';
import Header from './Header'
import './Welcome.css'
import GettingStarted from './GettingStarted';
   function Developerprereading() {
      return (
        <div>
            <Header/>
             
            <div class="wel_side"><GettingStarted/></div>
            <div class="wel-mid">
                <div class="wel_banner" >Recommended pre-reading and activities</div>
                <div class="wel-main">
                    <p>This section includes a number of recommended resources to help you get started with React, Carbon and GraphQL</p><br/>
                    <strong>Introduction</strong><br/>

                    <p>They are arranged roughly in a left -> right order of which one should be completed first, but it is also entirely possible to accquire this knowledge from other means, so please don’t feel like you have to complete all of them.

                    Thanks to the large amount of content, there is a step learning curve from the first to the last piece of pre-reading, so please don’t be too hard on yourself 😄

                    If you are having problems with any of the Udemy courses, please ensure you have a business license, and contact Jonathan Bales if not, or for further support: jonathan.p.bales@us.ibm.com</p>
                    <strong>Common</strong>
                    <div class="bxcntr">
                    <div class="inbox">
                        <strong>Javascript</strong><br/>
                        <a href="https://www.udemy.com/course/javascript-for-beginners-with-examples/" target="_blank" style={{color: "white"}}>Beginners introduction to Javascript</a>
                    </div>
                    <div class="inbox">
                        <strong>NPM</strong><br/>
                        <a href="https://github.com/foundersandcoders/npm-introduction" target="_blank" style={{color: "white"}}>Node Package Manager</a>
                    </div>
                    <div class="inbox">
                        <strong>GIT</strong><br/>
                        <a href="https://www.atlassian.com/git/tutorials/comparing-workflows" target="_blank" style={{color: "white"}}>GIT Workflows and Terminology</a>
                    </div>
                    </div>
                    <div class="bxcntr">
                    <div class="inbox">
                        <strong>Git</strong><br/>
                        <a href="https://learngitbranching.js.org/" target="_blank" style={{color: "white"}}>Practising Git Commands</a>
                    </div>
                    <div class="inbox">
                        <strong>React</strong><br/>
                        <a href="https://www.udemy.com/course/react-js-and-redux-mastering-web-apps/" target="_blank" style={{color: "white"}}>React Introduction</a>
                    </div>
                    <div class="inbox">
                        <strong>React,GraphQL and Carbon</strong><br/>
                        <a href="https://www.carbondesignsystem.com/developing/react-tutorial/overview/" target="_blank" style={{color: "white"}}>IBM Carbon and React(Badge available!)</a>
                    </div>
                    </div>
                    <div class="bxcntr">
                    <div class="inbox">
                        <strong>Full Stack</strong><br/>
                        <a href="https://www.apollographql.com/docs/tutorial/introduction/" target="_blank" style={{color: "white"}}>Graph QL and React Tutorial</a>
                    </div>
                    </div>
                    <strong>Front-end</strong>
                    <div class="bxcntr">
                    <div class="inbox">
                        <strong>Styled Components</strong><br/>
                        <a href="https://www.robinwieruch.de/react-styled-components" target="_blank" style={{color: "white"}}>Styled Component Overview(Just Reading)</a>
                    </div>
                    <div class="inbox">
                        <strong>Testing</strong><br/>
                        <a href="https://testingjavascript.com/" target="_blank" style={{color: "white"}}>Kent Dodd:Testing Javascript overview(just reading)</a>
                    </div>
                    </div>
                    <strong>Adapter</strong>
                    <div class="bxcntr">
                    <div class="inbox">
                        <strong>Graph QL</strong><br/>
                        <a href="https://www.apollographql.com/docs/apollo-server/getting-started/" target="_blank" style={{color: "white"}}>Apollo Server Tutorial</a>
                    </div>
                    <div class="inbox">
                        <strong>React,GraphQL</strong><br/>
                        <a href="https://hasura.io/learn/graphql/react/introduction/" target="_blank" style={{color: "white"}}>Graph QL and React Tutorial-a bit more theory!</a>
                    </div>
                    </div>
                    <strong>IBM Cloud, Red Hat, Docker…Kubernetes!</strong>
                    <div class="bxcntr">
                    <div class="inbox">
                        <strong>Cloud</strong><br/>
                        <a href="https://developer.ibm.com/depmodels/cloud/articles/cl-cloudintro/" target="_blank" style={{color: "white"}}>IBM cloud Fundamentals and Theory</a>
                    </div>
                    <div class="inbox">
                        <strong>Cloud</strong><br/>
                        <a href="https://w3.ibm.com/w3publisher/dsa-digital-skills-academy/modules/cloud" target="_blank" style={{color: "white"}}>DSA Introduction to cloud slides and exercise</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      );
   }
    export default Developerprereading;