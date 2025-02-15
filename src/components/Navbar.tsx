// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Smartphone, Menu, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import logo from '../assets/Logo.png'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setIsOpen(false);
//   }, [location]);

//   const scrollToFeatures = (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (location.pathname !== '/') {
//       window.location.href = '/#features';
//       return;
//     }
//     const featuresSection = document.getElementById('features');
//     if (featuresSection) {
//       featuresSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <nav className="fixed w-full bg-[#130D37]/90 backdrop-blur-sm z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           <Link to="/" className="flex items-center space-x-3">
//           <img src={logo} alt="SRM ONE Logo" className="h-[60px] w-auto" />
//             <span className="text-2xl font-semibold">SRM ONE</span>
//           </Link>
          
//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <a
//               href="/#features"
//               onClick={scrollToFeatures}
//               className="text-gray-300 hover:text-white transition-colors"
//             >
//               Features
//             </a>
//             <Link to="/notes" className="text-gray-300 hover:text-white transition-colors">
//               Notes
//             </Link>
//             <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
//               About
//             </Link>
//             <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
//               Contact Us
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-[#130D37] border-t border-white/10"
//           >
//             <div className="px-4 py-4 space-y-4">
//               <a
//                 href="/#features"
//                 onClick={scrollToFeatures}
//                 className="block py-2 text-gray-300 hover:text-white transition-colors"
//               >
//                 Features
//               </a>
//               <Link
//                 to="/notes"
//                 className="block py-2 text-gray-300 hover:text-white transition-colors"
//               >
//                 Notes
//               </Link>
//               <Link
//                 to="/about"
//                 className="block py-2 text-gray-300 hover:text-white transition-colors"
//               >
//                 About
//               </Link>
//               <Link
//                 to="/contact"
//                 className="block py-2 text-gray-300 hover:text-white transition-colors"
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = '/#features';
      return;
    }
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full bg-[#130D37]/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="SRM ONE Logo" className="h-[60px] w-auto" />
            <span className="text-2xl font-semibold">SRM ONE</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/#features"
              onClick={(e) => { scrollToFeatures(e); setIsOpen(false); }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <Link 
              to="/notes" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Notes
            </Link>
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Navigation with Gaming Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 w-screen h-screen bg-[#130D37] flex flex-col items-center justify-center"
          >
            {/* Exit X Button in Fullscreen Overlay */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X size={24} className="text-gray-300" />
            </button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8 text-center"
            >
              <a
                href="/#features"
                onClick={(e) => { scrollToFeatures(e); setIsOpen(false); }}
                className="block text-gray-300 text-2xl font-semibold hover:text-white transition-colors"
              >
                Features
              </a>
              <Link
                to="/notes"
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 text-2xl font-semibold hover:text-white transition-colors"
              >
                Notes
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 text-2xl font-semibold hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 text-2xl font-semibold hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

