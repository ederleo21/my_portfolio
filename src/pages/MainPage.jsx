import React from 'react';
import { Navbar } from '../components/Navbar';
import { AboutMe } from '../components/AboutMe';
import { MySkills } from '../components/MySkills';
import { LineDesignBottom } from '../components/utils/LineDesign';
import { LineDesignTop } from '../components/utils/LineDesign';
import { Projects } from '../components/Projects';

export const MainPage = () => {

  return (
    <div className='bg-light'>
        <Navbar/>
        <AboutMe/>
        <LineDesignBottom/>
        <MySkills/>
        <Projects/>
        <LineDesignTop/>
    </div>
  )
}
