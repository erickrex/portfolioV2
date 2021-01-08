import React, { useState, useEffect } from "react";
import axios from "axios";
import Penny from "./Penny"
import {GRAPHQL_API, GET_TECH_QUERY} from "./Constants"

const ApiCall = () => {
  

  // useEffect(() => {
  //   axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
  //     const responseTodos = res.data;
  //     setTodos(responseTodos);
  //   });
  // }, []);

  // console.log(todos);

 console.log(GRAPHQL_API);

  // axios({
  //   url: GRAPHQL_API,
  //   method: 'post',
  //   headers: { 'x-api-key' : 'XXXX' },
  //   data: {
  //     query: GET_TECH_QUERY
  //   }
  // }).then((result) => {
  //   console.log(result)
  //   const { data } = result;
  //   const { enrichment } = data;
  //   // const { domain, companyId, companyName, companyTools } = enrichment;
  //   // console.log(enrichment);
  //   // console.log(domain);
  // });
 
 





// // fetch('Penny.json')
// //   .then( res => res.json())
//   // .then( json => {
    
    
    // //const {hasNextPage, endCursor} = pageInfo;
    // const {node} = edges
    // json.forEach( person => {
          
    //       const {street, country, province, zones} = address;

    //   })
    
  // })


  return (
    <div>
      {/* <h1> Todo List </h1>
      {todos &&
        todos.map((todo) => {
          const { id, userId, title } = todo;
          return (
            <div key={id}>
              <h5> {title} </h5>
              <h6> Assigned to user: {userId} </h6>
            </div>
          );
        })} */}
    </div>
  );
};

export default ApiCall;
