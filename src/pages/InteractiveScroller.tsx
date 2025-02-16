import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import s0 from '../assets/s0.png';
import s1_1 from '../assets/s1_1.png';
import s1_2 from '../assets/s1_2.png';
import s2 from '../assets/s3.png';
import s3 from '../assets/s4.png';
import s4_1 from '../assets/s5_1.png';
import s4_2 from '../assets/s5_2.png';
import s5 from '../assets/s6.png';

const screenshots = [s0, s1_1, s1_2, s2, s3, s4_1, s4_2, s5];

const InteractiveScroller = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const scrollTo = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const newIndex = direction === 'left' 
        ? Math.max(0, currentIndex - 1)
        : Math.min(screenshots.length - 1, currentIndex + 1);
      
      setCurrentIndex(newIndex);
      const scrollAmount = newIndex * (scrollContainerRef.current.offsetWidth / 2);
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const handleScroll = () => {
        const index = Math.round(container.scrollLeft / (container.offsetWidth / 2));
        setCurrentIndex(index);
      };
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 1 }}
      className="relative w-full max-w-6xl mx-auto mt-16 px-4"
    >
      <div className="relative group">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ 
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleDragEnd}
        >
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="min-w-[80%] md:min-w-[45%] lg:min-w-[33%] p-4 snap-center"
            >
              <motion.div 
                className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl  backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                  draggable="false"
                />
              </motion.div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollTo('left')}
          className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg transition-opacity duration-300 ${
            currentIndex === 0 ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
          }`}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={() => scrollTo('right')}
          className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg transition-opacity duration-300 ${
            currentIndex === screenshots.length - 1 ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
          }`}
          disabled={currentIndex === screenshots.length - 1}
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {screenshots.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-gradient-to-r from-[#BD85FC] to-[#67A2FA] w-4' 
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default InteractiveScroller;