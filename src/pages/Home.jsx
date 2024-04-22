import React from 'react';
import Banner from '../components/Home/Banner.jsx'
import HousingGallery from '../components/Home/HousingGallery.jsx';
import '../styles/Home.scss';

function Home() {
  return (
    <>
      <Banner />
      <HousingGallery />
    </>
  )
}

export default Home;