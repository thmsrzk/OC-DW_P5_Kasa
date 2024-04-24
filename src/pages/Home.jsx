import React from 'react';
import Banner from '../components/Banner.jsx'
import HousingsGallery from '../components/Home/HousingsGallery.jsx';
import '../styles/Home.scss';
import homeBanner from '../assets/images/Kasa_Home_Banner.png';

function Home() {
  return (
    <>
      <Banner imgSrc={homeBanner} imgAlt="Falaises en bord de mer."  text="Chez vous, partout et ailleurs"/>
      <HousingsGallery />
    </>
  )
}

export default Home;