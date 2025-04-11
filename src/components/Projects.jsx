import React, { useState } from 'react';
import { projects } from './js/lastProjects';
import { Pagination } from './utils/Pagination';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 1;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
<div className="bg-light pb-20 sm:py-20 px-6 sm:px-10">
  <h1 className="font-lora font-bold text-darktext text-4xl sm:text-5xl lg:text-6xl text-center">
    Últimos proyectos
  </h1>

  <div className="max-w-screen-xl mx-auto">
    {currentProjects.map((project, index) => (
      <div
        key={index}
        className="bg-white pb-1 rounded-2xl p-6 sm:p-10 sm:pb-2 lg:p-14 lg:pb-2 mb-12 flex flex-col lg:flex-row items-center gap-8 xl:gap-16"
      >
        <div className="w-full lg:w-1/2 xl:w-2/3 2xl:w-4/4">
          <img
            src={project.captures}
            alt={project.title}
            className="w-full rounded-xl object-cover h-auto"
          />
        </div>

        <div className="w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4 text-center lg:text-left">
          <h2 className="font-lora text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-semibold text-darktext mb-2">
            {project.title}
          </h2>
          <h3 className="font-poppins text-base sm:text-lg lg:text-xl xl:text-2xl text-indigodark font-medium mb-4">
            {project.subtitle}
          </h3>
          <p className="text-sm sm:text-base lg:text-lg xl:text-lg text-lighttext font-poppins mb-4">
            {project.description}
          </p>

          <div className="flex sm:flex-row justify-center lg:justify-start gap-4">
            {project.isLive && (
              <a
                href={project.url_live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center  bg-indigodark hover:bg-indigo-800 font-poppins text-white text-sm sm:text-base font-semibold py-2 px-4 rounded transition duration-200"
                >
                <FaExternalLinkAlt className="inline mr-2" />
                Ver Live
              </a>
            ) }
            <a
              href={project.url_github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-darktext hover:bg-gray-900 text-white text-sm sm:text-base font-medium py-2 px-4 rounded transition duration-200"
            >
               <FaGithub className="inline mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>

  <Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    maxPageNumbersToShow={3}
    paginate={paginate}
    prevPage={prevPage}
    nextPage={nextPage}
  />
</div>
  );
};
