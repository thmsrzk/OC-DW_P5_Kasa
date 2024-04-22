import React from 'react';
import Banner from './Home/Banner.jsx'
import HousingGallery from './Home/HousingGallery.jsx';
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