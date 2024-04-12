import React from 'react'
import Banner from '../Banner';
import MySkills from '../MySkills';
import Services from '../Services';
import Experiences from '../Experiences';
import Gettouch from '../Gettouch';
import Featured from '../Featured';
import Contact from '../Contact/Contact';

function Home() {
  return (
    <div>
      <Banner />
      <MySkills />
      <Services />
      <Featured/>
      <Experiences />
      <Gettouch />
      <Contact />
    </div>
  )
}

export default Home;