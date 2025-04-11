import { useState } from 'react';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-grey p-6 py-8 sticky top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-indigodark text-4xl lg:text-5xl font-extrabold font-lora">
          DERTECH
        </div>
    
        <div className="hidden md:flex space-x-8 lg:space-x-14 font-poppins">
          <a href='#about' className="text-lg lg:text-xl cursor-pointer text-darktext hover:text-indigodark font-bold">Sobre mí</a>
          <a href='#skills' className="text-lg lg:text-xl cursor-pointer text-darktext hover:text-indigodark font-bold">Habilidades</a>
          <a href='#projects' className="text-lg lg:text-xl cursor-pointer text-darktext hover:text-indigodark font-bold">Proyectos</a>
          <a href='#about' className="text-lg lg:text-xl cursor-pointer text-darktext hover:text-indigodark font-bold">Contacto</a>
        </div>
    
        <div className="md:hidden">
          <button
            className={`text-darktext font-bold text-3xl transition-transform duration-300 ${menuOpen ? 'rotate-90' : ''}`}
            onClick={toggleMenu}
          >
            &#9776;
          </button>
        </div>
      </div>
    
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } md:hidden bg-grey p-8 py-6 space-y-7 font-poppins fixed top-20 left-0 right-0 z-50 transform transition-all duration-300 ease-in-out ${
          menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}
      >
        <a onClick={() => setMenuOpen(!menuOpen)} href='#about' className="block text-lg cursor-pointer text-darktext hover:text-indigodark font-bold">Sobre mí</a>
        <a onClick={() => setMenuOpen(!menuOpen)} href='#skills' className="block text-lg cursor-pointer text-darktext hover:text-indigodark font-bold">Habilidades</a>
        <a onClick={() => setMenuOpen(!menuOpen)} href='#projects' className="block text-lg cursor-pointer text-darktext hover:text-indigodark font-bold">Proyectos</a>
        <a onClick={() => setMenuOpen(!menuOpen)} href='#about' className="block text-lg cursor-pointer text-darktext hover:text-indigodark font-bold">Contacto</a>
      </div>
    </nav>
  );
}