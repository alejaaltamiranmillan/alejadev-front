import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-commerce App',
    description: 'Tienda en línea moderna con React y Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'Tailwind'],
    link: '#'
  },
  {
    title: 'Dashboard Analytics',
    description: 'Panel de control con gráficas interactivas',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'D3.js', 'Material-UI'],
    link: '#'
  },
  {
    title: 'Portfolio Personal',
    description: 'Sitio web responsivo con animaciones suaves',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    link: '#'
  }
];

const Portfolio = () => {
  return (
    <section id="portafolio" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="heading-primary">Proyectos Destacados</h2>
          <p className="text-xl text-gray-600">Soluciones creativas para problemas reales</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{project.title}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="text-purple-600 font-medium hover:text-purple-700"
                >
                  Ver proyecto →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
