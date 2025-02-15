// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Send, MessageCircle } from 'lucide-react';
// import sendEmail from './mail.js';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   return (
//     <div className="pt-32 px-4 md:px-8 max-w-6xl mx-auto mb-16">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center mb-16"
//       >
//         <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
//         <p className="text-xl text-gray-300">
//           Get in touch with us for any queries or suggestions
//         </p>
//       </motion.div>

//       <div className="grid md:grid-cols-2 gap-12">
//         <motion.form
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="space-y-6"
//           onSubmit={handleSubmit}
//         >
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium mb-2">
//               Your Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#BD85FC] focus:ring-1 focus:ring-[#BD85FC] transition-colors"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm font-medium mb-2">
//               Your Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#BD85FC] focus:ring-1 focus:ring-[#BD85FC] transition-colors"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-sm font-medium mb-2">
//               Your Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows={4}
//               className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#BD85FC] focus:ring-1 focus:ring-[#BD85FC] transition-colors"
//               required
//             />
//           </div>

//           <motion.button
//             type="submit"
//             className="w-full bg-gradient-to-r from-[#BD85FC] to-[#67A2FA] py-3 rounded-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <Send size={20} />
//             <span>Send Message</span>
//           </motion.button>
//         </motion.form>

//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm"
//         >
//           <h2 className="text-2xl font-semibold mb-6">Join Our Community</h2>
//           <motion.a
//             href="https://chat.whatsapp.com/GERScW8Xeat4Apl3ejdxbT"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center space-x-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] p-4 rounded-lg hover:opacity-90 transition-opacity"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <MessageCircle size={24} />
//             <span>Join WhatsApp Group</span>
//           </motion.a>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    // Map your form data to the keys expected by your EmailJS template.
    const templateParams = {
      from_name: formData.name,    // Ensure your template uses "from_name"
      reply_to: formData.email,    // Ensure your template uses "reply_to"
      message: formData.message
    };

    try {
      const result = await emailjs.send(
        'service_w7np26e',      // Your EmailJS service ID
        'template_ed5piqf',     // Your EmailJS template ID
        templateParams,
        'T0GFrDTzVFY8WWi8d'      // Your public key
      );
      console.log('EmailJS result:', result.text);
      setStatus('Email sent successfully!');
      // Clear the form inputs
      setFormData({ name: '', email: '', message: '' });
      // Clear status message after 3 seconds
      setTimeout(() => {
        setStatus('');
      }, 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('Failed to send email. Please try again.');
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="pt-32 px-4 md:px-8 max-w-6xl mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-gray-300">
          Get in touch with us for any queries or suggestions
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#BD85FC] focus:ring-1 focus:ring-[#BD85FC] transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#BD85FC] focus:ring-1 focus:ring-[#BD85FC] transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#BD85FC] focus:ring-1 focus:ring-[#BD85FC] transition-colors"
              required
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-[#BD85FC] to-[#67A2FA] py-3 rounded-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send size={20} />
            <span>Send Message</span>
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-semibold mb-6">Join Our Community</h2>
          <motion.a
            href="https://chat.whatsapp.com/GERScW8Xeat4Apl3ejdxbT"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] p-4 rounded-lg hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle size={24} />
            <span>Join WhatsApp Group</span>
          </motion.a>
        </motion.div>
      </div>

      <AnimatePresence>
        {status && (
          <motion.div
            key="status"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="fixed top-4 right-4 p-4 bg-white/80 backdrop-blur-md shadow-xl rounded-lg border border-gray-200 text-gray-800 z-50"
          >
            {status}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
