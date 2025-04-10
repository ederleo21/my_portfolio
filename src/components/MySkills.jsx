import React from 'react';
import py from '../assets/Python.svg.png';
import js from '../assets/js.png';
import react  from '../assets/react.png';
import dj from '../assets/django.png';
import git from '../assets/git.png';
import bd from '../assets/bd.png';

const skills = [
  {
    icon: py,
    title: 'Python',
    description: 'Experiencia en la creación de páginas web estructuradas con HTML5.',
  },
  {
    icon: js,
    title: 'JavaScript',
    description: 'Dominio de estilos avanzados para crear interfaces atractivas y responsive.',
  },
  {
    icon: dj,
    title: 'Django/rest framework',
    description: 'Desarrollo de funcionalidades interactivas con JavaScript y ES6+.',
  },
  {
    icon: react,
    title: 'React',
    description: 'Creación de aplicaciones web dinámicas con React y hooks.',
  },
  {
    icon: git,
    title: 'Git/GitHub',
    description: 'Desarrollo de backends eficientes y escalables con Node.js y Express.',
  },
  {
    icon: bd,
    title: 'Base de datos',
    description: 'Experiencia con bases de datos relacionales, optimización y consultas avanzadas.',
  },
];
export const MySkills = () => {
    return (
      <div className="bg-light py-20 mx-4">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="font-lora font-bold text-darktext text-5xl sm:text-6xl text-center mb-12">
            Mis habilidades
          </h1>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export const SkillCard = ({ icon, title, description }) => {
    return (
      <div className="bg-light rounded-xl p-6 py-4 text-center transition-all duration-300 ease-in-out hover:border-indigolight">
        <img src={icon} alt={title} className="w-12 sm:w-16 lg:w-20 mx-auto mb-4" />
        <h3 className="text-lg sm:text-2xl lg:text-2xl font-semibold text-darktext mb-2 font-lora">{title}</h3>
        <p className="text-sm sm:text-lg lg:text-lg text-lighttext opacity-70 font-poppins">{description}</p>
      </div>
    );
  };
  

