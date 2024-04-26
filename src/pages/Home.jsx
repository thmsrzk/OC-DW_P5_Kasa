import React from 'react';
import Banner from '../components/Banner.jsx'
import Card from '../components/Home/Card.jsx';
import '../styles/Home.scss';
import homeBanner from '../assets/images/Kasa_Home_Banner.webp';
import cardsData from '../data/logements.json'

function Home() {
  return (
    <section id='home'>
      <Banner imgSrc={homeBanner} imgAlt="Falaises en bord de mer."  text="Chez vous, partout et ailleurs"/>
      <div className='Cards-Gallery'>
        <Card cardsData={cardsData}/>
      </div>
    </section>
  )
}

export default Home;