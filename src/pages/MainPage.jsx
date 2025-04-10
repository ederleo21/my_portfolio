import React from 'react';
import { Navbar } from '../components/Navbar';
import { AboutMe } from '../components/AboutMe';
import { MySkills } from '../components/MySkills';

export const MainPage = () => {

  return (
    <div className='bg-light'>
        <Navbar/>
        <AboutMe/>

            {/* Línea de onda con SVG */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1350 120" // Ajusta la altura total del SVG para hacerlo más pequeño
                className="w-full"
                fill="#F0F0F8"
            >
            <path
                fillOpacity="1"
                d="M0,48C120,40,240,80,360,96C480,112,600,96,720,72C840,48,960,16,1080,32C1200,48,1320,96,1440,112V0H0V48Z"
            />
            </svg>

        <MySkills/>
    </div>
  )
}
