import React from 'react';
import './CardLeft.css';
import CardLeft from './CardLeft';

function Projects() {
  return (
    <div className='cards'>
      <h1 style={{padding:30}}>Some of the projects I built last year</h1>
      <br/>
      <br/>
      <br/>
      <div >
        <div >
          <ul >
            <CardLeft
              src='images/empire.jpg'
              text='EMPIRE.de web development'
              description='Developed the website for the flagship product of the company. Empire XPU is CAD and simulation software for antenna design. I also worked on benchmarks using Python and VR software functional testing during my time at IMST.'
              label='WordPress'
              url='https://empire.de/'
              target='_blank'
            />
            <CardLeft
              src='images/GA.png'
              text='ATTENTION NSFW - adult nightlife venues directory'
              description='Well, I am not not proud of this :). If you open it, I apologize, I have not maintained it properly as it is not generating any revenue anymore. It runs on WordPress, Open Street Maps API and JavasCript. It had 15k visitors a month at some point and still is the biggest site of its kind in the country. I could explain personally better.'
              label='WordPress'
              url='https://meganoche.com/'
            />
            <CardLeft
              src='images/img-5.png'
              text='Centraldeingles.com'
              description='Affiliate review site for language learning apps that I am using myself to learn German. Developed in WordPress, HTML and CSS'
              label='WordPress'
              url='https://centraldeingles.com/'
            />
            <CardLeft
              src='images/filters.jpg'
              text='Instagram filters in Spark AR Studio'
              description='Developed 2 instagram filters for american wrestlers using JavaScript, face tracker and eye tracker features.The filters have 2K impressions so far (01.2021).'
              label='2D Design'
              url='https://www.facebook.com/sparkarhub/portfolios/453897605624260'
            />
            <CardLeft
              src='images/jupyter.jpg'
              text='LinkedIn scraper and visualization project.'
              description='University project where 2 colleagues and me used Python and the WSL2 environment to run an automated scraper and Jupiter notebooks to visualize the results.'
              label='Selenium'
              url='https://github.com/erickrex/LinkedIn-scraper/blob/main/03_Alumni.ipynb'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;