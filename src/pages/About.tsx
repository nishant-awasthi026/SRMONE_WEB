import React from 'react';
import { motion } from 'framer-motion';
import p from '../assets/prakhar.jpeg';
import n from '../assets/nishant.jpeg';

const founders = [
  {
    name: "Prakhar Singh",
    role: "Founder",
    image: p
  },
  {
    name: "Nishant Awasthi",
    role: "Co-founder",
    image: n
  }
];

const About = () => {
  return (
    <div className="pt-32 px-4 md:px-8 max-w-6xl mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">ABOUT SRM ONE</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Streamlining your learning process with powerful SRM tools. Founded with a vision 
          to revolutionize academic resource management, SRM One delivers cutting-edge 
          solutions for students, faculty, and alumni. Our platform seamlessly integrates 
          learning tools with an intuitive interface.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mt-16">
        {founders.map((founder, index) => (
          <motion.div
            key={founder.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group perspective"
          >
            <div className="relative transform-style-3d transition-transform duration-500 group-hover:rotate-y-180">
              <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-semibold mb-2">{founder.name}</h3>
                <p className="text-gray-300">{founder.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;