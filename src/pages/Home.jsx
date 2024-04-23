import React from 'react';
import Banner from '../components/Home/Banner.jsx'
import HousingsGallery from '../components/Home/HousingsGallery.jsx';
import '../styles/Home.scss';

function Home() {
  return (
    <>
      <Banner />
      <HousingsGallery />
    </>
  )
}

export default Home;