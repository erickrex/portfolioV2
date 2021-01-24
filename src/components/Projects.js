import React from 'react';
import './CardLeft.css';
import CardLeft from './CardLeft';
import AOS from 'aos';

function Projects() {
 

  useEffect(() => {
    AOS.init({duration : 2000});

  }, []);
  
  
  return (
    <div className='cards'>
      <h1 style={{padding:30}}>Some of the projects I built last year</h1>
      <br/>
      <br/>
      <br/>
      <div >
        <div >
          <ul >
            <CardLeft data-aos="fade-up"
              src='images/empire.png'
              text='EMPIRE.de web development'
              description='Developed the website for the flagship product of the company. Empire XPU is CAD and simulation software for antenna design. I also worked on benchmarks using Python and VR software functional testing during my time at IMST.'
              label='WordPress'
              url='https://empire.de/'
              target='_blank'
            />
            <CardLeft data-aos="fade-up"
              src='images/GA.png'
              text='ATTENTION NSFW - adult nightlife venues directory'
              description='Well, I am not not proud of this :). If you open it, I apologize for its current state, I have not maintained it properly as it is not generating any revenue anymore. It runs on WordPress, the Open Street Maps API and JavaScript. It had 15k visitors a month at one point and is still the biggest site of its kind in the country. I could explain personally better.'
              label='WordPress'
              url='https://meganoche.com/'
            />
            <CardLeft data-aos="fade-up"
              src='images/img-5.png'
              text='Centraldeingles.com'
              description='Affiliate review site for language learning apps that I am using myself to learn German. Developed in WordPress, HTML and CSS'
              label='WordPress'
              url='https://centraldeingles.com/'
            />
            <CardLeft data-aos="fade-up"
              src='images/filters.png'
              text='Instagram filters SPARK AR Studio'
              description='Created 2 instagram filters for American wrestlers using JavaScript, the face tracker and eye tracker features from Spark AR.The filters have 2K impressions so far (01.2021).'
              label='2D Design'
              url='https://www.facebook.com/sparkarhub/portfolios/453897605624260'
            />
            <CardLeft data-aos="fade-up"
              src='images/jupyter.png'
              text='LinkedIn scraper and visualization project.'
              description='University project where 2 colleagues and me used Python and the WSL2 environment to run an automate a web scraper, the data was processed in Jupyter notebooks to visualize the results.'
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
