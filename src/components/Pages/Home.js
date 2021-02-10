import React from 'react';
import '../../App.scss';
// use import {component} - when using: export const HeroSection = () => {}
import { HeroSection } from '../../components/Layouts/Sections/HeroSection';

// use impornt component - when using: function HeroSection(){} export default HeroSection;
// import HeroSection from '../Layouts/Sections/HeroSection';

import { Cards } from '../../components/Layouts/UI/Cards';
// import Cards from '../Layouts/UI/Cards';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;