import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

export const Contact = () => {
  return (
<div className="bg-grey p-8 py-15" id='contact'>
  <h1 className="font-lora font-bold text-darktext text-4xl sm:text-5xl lg:text-6xl text-center mb-2 lg:mb-10">
    Contacto
  </h1>

  <div className="max-w-6xl mx-auto bg-grey p-8 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8">
    
    <div className="space-y-6">
      <h3 className="text-3xl sm:text-4xl font-bold text-indigodark font-lora">Eder Ordoñez Gonzalez</h3>
      <p className="text-lg sm:text-xl text-gray-600 font-poppins">
        Como desarrollador Fullstack, estoy buscando oportunidades para aportar mis habilidades en Python, Django y React a proyectos innovadores. Si necesitas fortalecer tu equipo con un perfil comprometido, creativo y orientado a resultados, ¡hablemos!
      </p>
    </div>

    <div className="space-y-6 font-poppins">
      <div className="flex items-center space-x-2">
        <span className="text-darktext font-semibold text-lg sm:text-xl">Milagro - Ecuador</span>
      </div>

      <div className="flex items-center space-x-2">
        <FaEnvelope className="text-blue-600 text-xl" />
        <span className="font-bold text-darktext text-lg sm:text-xl">Email:</span>
        <a href="mailto:ederordonez10@gmail.com" className="text-blue-600 hover:underline text-lg sm:text-xl">ederordonez10@gmail.com</a>
      </div>

      <div className="flex items-center space-x-2">
        <FaLinkedin className="text-blue-600 text-xl" />
        <span className="font-bold text-darktext text-lg sm:text-xl">LinkedIn:</span>
        <a href="https://linkedin.com/in/victoria-dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg sm:text-xl">linkedin.com/in/victoria-dev</a>
      </div>

      <div className="flex items-center space-x-2">
        <FaGithub className="text-blue-600 text-xl" />
        <span className="font-bold text-darktext text-lg sm:text-xl">GitHub:</span>
        <a href="https://github.com/ederleo21" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg sm:text-xl">https://github.com/ederleo21</a>
      </div>

    </div>
  </div>
</div>
  );
};
