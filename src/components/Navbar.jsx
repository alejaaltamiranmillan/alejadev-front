import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-purple-600">Alejandra</span>
          </div>
          
          {/* Menú móvil botón */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Menú escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="hover:text-purple-600">Inicio</a>
            <a href="#habilidades" className="hover:text-purple-600">Habilidades</a>
            <a href="#portafolio" className="hover:text-purple-600">Portafolio</a>
            <a href="#contacto" className="button-primary">Contacto</a>
          </div>
        </div>

        {/* Menú móvil expandible */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <a href="#inicio" className="block px-3 py-2 hover:text-purple-600">Inicio</a>
              <a href="#habilidades" className="block px-3 py-2 hover:text-purple-600">Habilidades</a>
              <a href="#portafolio" className="block px-3 py-2 hover:text-purple-600">Portafolio</a>
              <a href="#contacto" className="block px-3 py-2 text-purple-600 font-medium">Contacto</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
