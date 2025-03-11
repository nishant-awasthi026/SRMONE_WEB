import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import InteractiveScroller from './InteractiveScroller';
import fs1 from '../assets/fs1.png';
import fs2 from '../assets/fs2.png';
import fs3 from '../assets/fs3.png';

const features = [
  {
    title: "Attendance Tracking",
    description:
      "Track your attendance day-wise and hour-wise with 75% completion indicators",
    image: fs1,
  },
  {
    title: "Grade Details",
    description: "Access exam results, provisional results, and internal marks",
    image: fs2,
  },
  {
    title: "Time Table",
    description: "View your class schedule and manage your time effectively",
    image: fs3,
  },
];




const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 text-center overflow-hidden">
        {/* (Optional) Background overlay or image can be added here */}
        <div className="flex flex-col">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl italic"
          >
            All your
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-6xl md:text-8xl font-bold underline bg-gradient-to-r from-[#BD85FC] to-[#67A2FA] bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-[#BD85FC] hover:to-[#67A2FA] transition-colors cursor-pointer"
          >
            SRM Needs
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-5xl md:text-7xl italic self-end w-full pr-6"
          >
            In One App
          </motion.h3>
        </div>

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 text-base md:text-lg text-gray-300 max-w-3xl px-4"
        >
          Streamline your Learning process with our powerful SRM tools and features.
        </motion.p>

        {/* Download Button */}
        <motion.a
          href="https://play.google.com/store/apps/details?id=com.one.srm.srm_one"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-gradient-to-r from-[#BD85FC] to-[#67A2FA] px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:opacity-90 transition-opacity mx-4 mt-16"
        >
          <Download size={24} />
          <span>Download</span>
        </motion.a>

        {/* Screenshots Carousel */}
        <InteractiveScroller />
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
                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
