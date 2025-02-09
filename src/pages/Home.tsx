import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import S1 from '../assets/S1.jpg';
import S2 from '../assets/S2.jpg';
import S3 from '../assets/S3.jpg';
import S4 from '../assets/S4.jpg';
import fs1 from '../assets/fs1.png';
import fs2 from '../assets/fs2.png';
import fs3 from '../assets/fs3.png';

const screenshots = [
  S1,
  S2,
  S3,
  S4
];

const features = [
  {
    title: "Attendance Tracking",
    description: "Track your attendance day-wise and hour-wise with 75% completion indicators",
    image: fs1
  },
  {
    title: "Grade Details",
    description: "Access exam results, provisional results, and internal marks",
    image: fs2
  },
  {
    title: "Time Table",
    description: "View your class schedule and manage your time effectively",
    image: fs3
  }
];

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#BD85FC] to-[#67A2FA] bg-clip-text text-transparent"
        >
          All your SRM Needs In One App
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl px-4"
        >
          Streamline your Learning process with our powerful SRM tools and features
        </motion.p>
        
        <motion.a
          href="https://www.dropbox.com/scl/fi/cwdx42fxhrr95dhi5a66t/signed-app.apk?rlkey=91jvirtgxa1p5ngt4sxptapfn&st=h1din66t&dl=1"
          className="flex items-center space-x-2 bg-gradient-to-r from-[#BD85FC] to-[#67A2FA] px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:opacity-90 transition-opacity mx-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={24} />
          <span>Download</span>
        </motion.a>

        {/* Screenshots Carousel */}
        <div className="mt-20 w-full max-w-6xl overflow-hidden px-4">
          <div className="flex animate-scroll">
            {[...screenshots, ...screenshots].map((src, index) => (
              <img 
                key={index}
                src={src}
                alt={`App Screenshot ${index + 1}`}
                className="w-60 md:w-72 h-auto mx-2 md:mx-4 rounded-xl shadow-lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16">
            Powerful Features
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-300 mb-12 md:mb-16 px-4">
            Everything you need to enhance your college experience in one place
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-2xl p-4 md:p-6 backdrop-blur-sm"
              >
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-40 md:h-48 object-cover rounded-xl mb-4 md:mb-6"
                />
                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-sm md:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

