import React from 'react';
import './Center.css';
import { Button } from './Button';

function Projects() {
  return (
    <>
        <div className="services" >
            
                <div className="service">
                    <h3>Profile</h3>
                    <div className="descripcion">
                    <p>Front end web developer, tester, and start-up founder. I’ve held many roles in my 5 years in IT, always adapting to the
organizations’ needs. I’ve built many websites and ranked them on the first pages of Google. One site reached 15k visitors
making $700 monthly. My latest project is centraldeingles.com which is an affiliate review site of language learning apps.
I am specializing in ReactJS and headless CMSs. I am sociable, have a structured work approach and strong analytical skills.</p>
                </div>
                </div> 
                
                <div className="service">
                    <h3>Education</h3>
                    <div className="descripcion">
                    <ul >
                        <li>Hochschule Rhein-Waal - Information Engineering MSc.</li>
                        <li>Universidad de las Americas - IT Engineering BSc.</li>
                        <li>Seneca Valley High School</li>
                        <li>English C2</li>
                        <li>Spanish Native</li>
                        <li>German A1</li>
                    </ul>
                    </div>
                </div> 
                
             
            
            
        </div>
        </>
        );
}

export default Projects;
