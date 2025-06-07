import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="py-20">
      <div className="section-container max-w-3xl">
        <h2 className="heading-primary text-center">Contáctame</h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">Nombre</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">Mensaje</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 h-32"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="button-primary w-full"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
          </button>
          {status === 'success' && (
            <p className="text-green-600 text-center">¡Mensaje enviado con éxito!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-center">Hubo un error al enviar el mensaje.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
