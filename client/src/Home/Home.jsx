import React, { useState, useEffect } from 'react';
import Footter from '../Components/Footter';
import Greeting from './Greeting';
import AuthLoginTailor from './AuthLoginTailor';
const Home = () => {

  return (
    <>
      <div className="bg-gray-100">
        <AuthLoginTailor/>
        <Greeting/>
        <Footter />
      </div>
    </>
  );
};

export default Home;