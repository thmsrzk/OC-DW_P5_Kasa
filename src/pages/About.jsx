import React from 'react';
import Banner from '../components/Banner/Banner.jsx';
import Collapse from '../components/Collapse/Collapse.jsx';
import './About.scss';
import aboutBanner from '../assets/images/Kasa_About_Banner.webp';

function About() {
  return (
    <section id='about'>
      <Banner imgSrc={aboutBanner} imgAlt=""/>
      <div className='about-collapse-container'>
        <Collapse title="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. 
        Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
        <Collapse title="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. 
        Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <Collapse title="Service" description="La bienveillance fait partie des valeurs fondatrices de Kasa. 
        Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <Collapse title="Sécurité" description="La sécurité est la priorité de Kasa. 
        Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
        En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
      </div>
 
    </section>
  )
}

export default About;