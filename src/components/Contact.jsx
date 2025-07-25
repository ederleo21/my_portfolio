import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export const Contact = () => {
  return (
    <div className="bg-grey p-8 py-15" id="contact">
      <h1 className="font-lora font-bold text-darktext text-4xl sm:text-5xl lg:text-6xl text-center mb-2 lg:mb-10">
        Contacto
      </h1>
      
      <div className="max-w-6xl mx-auto bg-grey p-8 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="space-y-6">
          <h3 className="text-3xl sm:text-4xl font-bold text-indigodark font-lora">Eder Ordoñez Gonzalez</h3>
          <p className="text-lg sm:text-xl text-gray-600 font-poppins">
            Como desarrollador web junior, estoy buscando oportunidades para aportar mis habilidades en proyectos innovadores. Si necesitas fortalecer tu equipo con un perfil comprometido, creativo y orientado a resultados, ¡Contáctame!
          </p>
        </div>
      
        <div className="space-y-6 font-poppins text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-darktext font-semibold text-lg sm:text-xl">Milagro - Ecuador</span>
          </div>
      
          <div className="flex flex-col items-center sm:flex-row sm:items-center sm:space-x-2 break-all">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-blue-600 text-xl" />
              <span className="font-bold text-darktext text-lg sm:text-xl">Email:</span>
            </div>
            <a href="mailto:ederordonez10@gmail.com" className="text-blue-600 hover:underline text-lg sm:text-xl">
              ederordonezdev@gmail.com
            </a>
          </div>
      
          <div className="flex flex-col items-center sm:flex-row sm:items-center sm:space-x-2 break-all">
            <div className="flex items-center space-x-2">
              <FaLinkedin className="text-blue-600 text-xl" />
              <span className="font-bold text-darktext text-lg sm:text-xl">LinkedIn:</span>
            </div>
            <a href="https://goo.su/3F9WlC" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg sm:text-xl">
              https://goo.su/3F9WlC
            </a>
          </div>
      
          <div className="flex flex-col items-center sm:flex-row sm:items-center sm:space-x-2 break-all">
            <div className="flex items-center space-x-2">
              <FaGithub className="text-blue-600 text-xl" />
              <span className="font-bold text-darktext text-lg sm:text-xl">GitHub:</span>
            </div>
            <a href="https://goo.su/UA6u" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg sm:text-xl">
              https://goo.su/UA6u
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
