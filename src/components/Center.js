import React from 'react';
import './Center.css';
import ApiCall from './ApiCall';
function Center() {

    let hundredItems = [];
    for (let i = 1; i<= 100; i++){
        hundredItems.push(i);
    }

    // let newItems = hundredItems.reduce((acum, iterator) => {
    //     if (iterator % 3 === 0 && iterator % 5 === 0) {acum.push("FIZZBUZZ");} 
    //     else if (iterator % 3 === 0) {acum.push("fizz");}
    //     else if (iterator % 5 === 0) {acum.push("buzz");}
    //     else acum.push(iterator)
    //     return acum;
    // },[]);

    // console.log(newItems);
    
    

  return (
    <>  
        <div className='note'>    
        <i>*This site is still a beta version, I apologize for the contact form not working and some rough CSS styling. Please email me <a href="mailto:erickrhein@gmail.com">mailto:erickrhein@gmail.com </a>
                if you have any questions. The up to date code for this web app is available in my <a href="https://github.com/erickrex/portfolioV2">GitHub</a> and is re deployed automatically with each commit.</i>
                </div>
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

export default Center;
