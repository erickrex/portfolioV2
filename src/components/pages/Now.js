import React, { useState, useEffect } from "react";
import { Button } from '../Button';
import Footer from '../Footer';
import ApiCall from '../ApiCall'
import '../SearchBox.css';

export default function Now() {
      
  return (
  <>
    <div className='header_now'>
            <h1 className='title'>NOW</h1>
            <div className='javascriptmania'>I am building a JavaScript family tree with usage metrics. It is still in early design stages. The idea is to start with a search box and find the tech tree of a programming language. This is a concept consuming a third party API from Stackshare.</div>
    </div>
    <div className='greenspace'>
    <ApiCall/>
    </div>
    
    
    
      
    
    <Footer />
  </>
  )
}
