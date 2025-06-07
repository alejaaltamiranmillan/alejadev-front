import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden">
      {/* Fondo abstracto animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1744&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.1'
        }}></div>
      </div>

      <div className="section-container relative flex items-center min-h-screen">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Transformando ideas en experiencias digitales
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Desarrollo frontend creativo y de alta calidad para hacer destacar tu marca
            </p>
            <motion.div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contacto"
                className="button-primary text-lg px-8 py-3"
              >
                ¡Comenzemos! 🚀
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#portafolio"
                className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
              >
                Ver proyectos
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
              alt="Desarrollo Web"
              className="rounded-lg shadow-2xl"
            />
            {/* Elementos decorativos flotantes */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-200 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
