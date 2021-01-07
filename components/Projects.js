import React from 'react';
import './CardLeft.css';
import CardLeft from './CardLeft';

function Projects() {
  return (
    <div className='cards'>
      <h1>Some of the projects I have worked on</h1>
      <br/>
      <br/>
      <br/>
      <div >
        <div >
          <ul >
            <CardLeft
              src='images/empire.jpg'
              text='EMPIRE.de web development'
              description='WordPress, HTML and CSS. Used Python for benchmarking of desktop software.
              writing copy and software documentation. Hardware installation and upgrades. VR software functional testing.'
              label='WordPress'
              path='/now'
            />
            <CardLeft
              src='images/car.png'
              text='Nightlife venues directory'
              description='Directory site'
              label='WordPress'
              path='/now'
            />
            <CardLeft
              src='images/img-5.png'
              text='Centraldeingles.com'
              description='Language learning apps review site, developed in WordPress, HTML and Css'
              label='WordPress'
              path='/now'
            />
            <CardLeft
              src='images/filters.jpg'
              text='Instagram filters Spark AR Studio'
              description='Developed 2 basic instagram filters for american wrestlers using JavaScript, 2K impressions so far'
              label='Adventure'
              path='/now'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
