import React from 'react';
import Banner from '../../components/Banner/Banner.jsx'
import Card from '../../components/Card/Card.jsx';
import './Home.scss';
import './Home_mobile.scss';
import homeBanner from '../../assets/images/Kasa_Home_Banner.webp';
import cardsData from '../../assets/data/logements.json'

function Home() {
  return (
    <section id='home'>
      <Banner imgSrc={homeBanner} imgAlt="Falaises en bord de mer."  text="Chez vous, partout et ailleurs"/>
      <div className='Cards-Gallery'>
      {cardsData.map((card) => (
          <Card key={card.id} card={card} linkBase="/OC-DW_P5_Kasa/fiche-logement/"/>
      ))}
      </div>
    </section>
  )
}

export default Home;