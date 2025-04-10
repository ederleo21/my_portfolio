import React from 'react'
import img from '../assets/myface.jpg'

export const AboutMe = () => {


  return (
    <section className="bg-grey dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

        <div className="mr-auto place-self-center lg:col-span-7 lg:px-8 px-4">
          <h1 className="max-w-2xl font-lora text-darktext mb-4 text-4xl font-extrabold md:text-5xl xl:text-7xl">DESARROLLADOR <span className='text-indigolight'>FULLSTACK</span></h1>
          <p className="max-w-2xl mb-6 text-lighttext font-poppins lg:mb-8 md:text-lg lg:text-2xl">Me apasiona el desarrollo web y la creación de soluciones digitales. Me enfoco en construir aplicaciones funcionales y eficientes, siempre aprendiendo y mejorando con cada proyecto.</p>

          <a className="inline-flex cursor-pointer items-center justify-center px-6 py-4 mr-3 text-lg sm:text-xl font-medium text-center text-light rounded-lg bg-indigodark focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            CONTÁCTAME
          </a>

          <a className="inline-flex cursor-pointer items-center mt-2 sm:mt-0 font-poppins justify-center px-6 py-4 text-lg sm:text-xl font-medium text-center text-indigodark border border-indigodark rounded-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            MÁS SOBRE MÍ
          </a>  
        </div>

        <div className="lg:col-span-5 lg:flex lg:mt-0 mt-8 flex justify-center items-center mx-4 lg:mx-0">
          <img 
            src={img} 
            alt="mockup"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-2xl shadow-lg border-4 border-gray-300" 
          />
        </div>  

      </div>
    </section>
  )
}
