import React from 'react';
import './Center.css';
import ApiCall from './ApiCall';
function Center() {

    let hundredItems = [];
    for (let i = 1; i<= 100; i++){
        hundredItems.push(i);
    }

return (
    <>  
        <div className='note'>    
        <i>*This site is still a beta version, I apologize for the contact form not working and some rough CSS styling. Please email me <a href="mailto:erickrhein@gmail.com">mailto:erickrhein@gmail.com </a>
                if you have any questions. The up to date code for this web app is available in my <a href="https://github.com/erickrex/portfolioV2">GitHub</a> and is re deployed automatically with each commit.</i>
                </div>
        <div className="services" >
                
                
                <div className="service">
                    <h2>Web developer - tester - start-up founder</h2>
                    <div className="descripcion">
                    <p>I have 5 years in IT, always adapting to the
organizations’ needs. I have worked with Python, C# and specially with WordPress. Now I am specializing in JavaScript,ReactJS and NextJS. I am sociable, have a structured work approach and strong analytical skills.</p>
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

export default Center;
