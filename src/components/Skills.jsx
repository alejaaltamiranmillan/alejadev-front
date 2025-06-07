import { motion } from 'framer-motion';

const skills = [
  { name: 'React', icon: '⚛️', level: '90%' },
  { name: 'JavaScript', icon: '📜', level: '85%' },
  { name: 'HTML/CSS', icon: '🎨', level: '95%' },
  { name: 'Tailwind', icon: '🌊', level: '85%' },
  { name: 'TypeScript', icon: '📘', level: '75%' },
  { name: 'Node.js', icon: '🟢', level: '70%' }
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-20 bg-white/50">
      <div className="section-container">
        <h2 className="heading-primary text-center">Mis Habilidades</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-purple-600 h-2.5 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
