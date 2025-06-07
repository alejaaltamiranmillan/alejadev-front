import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/', icon: '🐱' },
    { name: 'LinkedIn', url: 'https://linkedin.com/', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com/', icon: '🐦' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Alejandra</h3>
            <p className="text-gray-400">
              Desarrolladora Frontend especializada en crear experiencias web únicas
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <p className="text-gray-400">📧 alejandra@ejemplo.com</p>
            <p className="text-gray-400">📱 +34 600 000 000</p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Sígueme</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Alejandra. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
