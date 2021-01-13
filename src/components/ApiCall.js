import React, { useState, useEffect } from "react";
import axios from "axios";
import TechProfile from "./TechProfile"
import {GRAPHQL_API, getQuery} from "./Constants"
import './SearchBox.css';

function ApiCall() {
  
    const [query, setQuery] = useState('');
    const [tech, setTech] = useState([]);
   
    const searchTechStack = async (e) => {
        e.preventDefault();
          
        try {
          
            async function fetchData(query){
              
              const queryResult = await axios({
              url: GRAPHQL_API,
              method: 'post',
              headers: { 'x-api-key' : process.env.REACT_APP_API_KEY },
              data: {
                query: getQuery(query)
              }
            });
            
            const result = queryResult.data.data;
            setTech(result.tools.edges);
            console.log(tech)
            };
            fetchData(query);
            console.log(tech);
        }catch(err){
            console.log(err);
        }
    }

  console.log(tech);
  return (
    <>
     <form className="form" onSubmit={searchTechStack}>
                <label className="label" htmlFor="query">Please insert a technology you want to explore.</label>
                <input className="input" type="text" name="query"
                    placeholder="Python, React, etc"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="button" type="submit">Search</button>
            </form> 
    <div className="tech_container">
        {tech ? (tech.map(item => <TechProfile 
            key={item.node.id} props={item}/>)) : <h1>...Loading</h1>}
        
        </div>     
    </>
  );
};

export default ApiCall;