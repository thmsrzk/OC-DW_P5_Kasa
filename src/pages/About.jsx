import React from 'react';
import Banner from '../components/Banner/Banner.jsx';
import Collapse from '../components/Collapse/Collapse.jsx';
import aboutBanner from '../assets/images/Kasa_About_Banner.webp';
import aboutInfos from '../assets/data/about.json';
import './About.scss';

function About() {
  return (
    <section id='about'>
      <Banner imgSrc={aboutBanner} imgAlt=""/>
      <div className='about-collapse-container'>
        {aboutInfos.map((info) => (
            <Collapse title={info.title} description={info.description}/>
        ))}
      </div>
 
    </section>
  )
}

export default About;