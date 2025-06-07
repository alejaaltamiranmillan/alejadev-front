import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Carlos Ruiz',
    role: 'CEO, TechStart',
    text: 'Alejandra transformó nuestra visión en una realidad digital excepcional. Su atención al detalle y creatividad son incomparables.',
    image: 'https://i.pravatar.cc/150?img=11'
  },
  {
    name: 'María González',
    role: 'Fundadora, DesignPro',
    text: 'Trabajar con Alejandra fue una experiencia extraordinaria. Entregó más allá de nuestras expectativas.',
    image: 'https://i.pravatar.cc/150?img=9'
  },
  {
    name: 'David Torres',
    role: 'Director de Marketing, InnovaWeb',
    text: 'Su capacidad para crear interfaces intuitivas y atractivas mejoró significativamente la experiencia de nuestros usuarios.',
    image: 'https://i.pravatar.cc/150?img=3'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="heading-primary text-center">Testimonios</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
