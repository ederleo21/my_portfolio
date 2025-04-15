import React from 'react';
import { Navbar } from '../components/Navbar';
import { AboutMe } from '../components/AboutMe';
import { MySkills } from '../components/MySkills';
import { LineDesignBottom } from '../components/utils/LineDesign';
import { LineDesignTop } from '../components/utils/LineDesign';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export const MainPage = () => {

  return (
    <div className='bg-light'>
        <Navbar/>
        <AboutMe/>
        <LineDesignBottom/>
        <MySkills/>
        <Projects/>
        <LineDesignTop/>
        <Contact/>
        <Footer/>
    </div>
  )
}
