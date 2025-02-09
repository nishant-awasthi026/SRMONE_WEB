import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#130D37]/80 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
            <img src="../assets/logo.png" alt="SRM ONE Logo" className="h-[40px] w-auto" />
              <span className="text-xl font-semibold">SRM ONE</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Streamlining your learning process with powerful SRM tools and features.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#BD85FC] to-[#67A2FA] bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/notes" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Notes
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#BD85FC] to-[#67A2FA] bg-clip-text text-transparent">
              Features
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Attendance Tracking</li>
              <li className="text-gray-400 text-sm">Grade Details</li>
              <li className="text-gray-400 text-sm">Time Table</li>
              <li className="text-gray-400 text-sm">GPA Calculator</li>
              <li className="text-gray-400 text-sm">Fees Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#BD85FC] to-[#67A2FA] bg-clip-text text-transparent">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart size={16} className="mx-1 text-red-500" /> by SRM ONE Team
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
