import React from 'react';
import './TechProfile.css';
 

function TechProfile( {props} ) {
    
    function addDefaultSrc(ev){
        ev.target.src = './images/default-tech.png'
      }
    
    
    const placeholder= "...LOADING";
    return (
        
        <div className="single_tech">
            
             
            <div className="tech_main">
                <p className='tech_name'>{props.node.name }</p>
                
                <span>{props.node.description ? props.node.description : "Please check the specs/documentation"}</span>
                
            </div>
            <div className="tech_image">
                <img src={props.node.imageUrl} alt={props.node.name} onError={addDefaultSrc}/> 
            </div>
            <div className="tech_github">
                <span><h3>Repository:</h3> {props.node.ossRepo ? props.node.ossRepo: "Repo not available"}</span> 
                <span><h3>Official website:</h3> {props.node.websiteUrl ? props.node.websiteUrl : "Website not available"}
                </span>
            </div>
                                   
        </div>
    );
}

export default TechProfile;