import React from 'react'
import Banner from '../Banner';
import MySkills from '../MySkills';
import Services from '../Services';
import Experiences from '../Experiences';
import Gettouch from '../Gettouch';
import Featured from '../Featured';

function Home() {
  return (
    <div>
      <Banner />
      <MySkills />
      <Services />
      <Featured/>
      <Experiences />
      <Gettouch />
    
    </div>
  )
}

export default Home;