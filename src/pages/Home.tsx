// import React, { useRef, useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Download } from 'lucide-react';
// import s0 from '../assets/s0.png';
// import s1_1 from '../assets/s1_1.png';
// import s1_2 from '../assets/s1_2.png';
// import s2 from '../assets/s3.png';
// import s3 from '../assets/s4.png';
// import s4_1 from '../assets/s5_1.png';
// import s4_2 from '../assets/s5_2.png';
// import s5 from '../assets/s6.png';
// import fs1 from '../assets/fs1.png';
// import fs2 from '../assets/fs2.png';
// import fs3 from '../assets/fs3.png';

// const screenshots = [
// s0,s1_1,s1_2,s2,s3,s4_1,s4_2,s5
// ];

// const features = [
//   {
//     title: "Attendance Tracking",
//     description: "Track your attendance day-wise and hour-wise with 75% completion indicators",
//     image: fs1
//   },
//   {
//     title: "Grade Details",
//     description: "Access exam results, provisional results, and internal marks",
//     image: fs2
//   },
//   {
//     title: "Time Table",
//     description: "View your class schedule and manage your time effectively",
//     image: fs3
//   }
// ];

// function InteractiveScroller() {
//   const containerRef = useRef(null);
//   const [offset, setOffset] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const startXRef = useRef(0);
//   const lastOffsetRef = useRef(0);
//   const previousTimestampRef = useRef(null);
//   const scrollWidthRef = useRef(0);
//   const autoScrollSpeed = 100; // pixels per second

//   // Measure the width of one set of images (half the total width)
//   useEffect(() => {
//     if (containerRef.current) {
//       // Since we duplicate the images, half of the total width represents one full cycle
//       scrollWidthRef.current = containerRef.current.scrollWidth / 2;
//     }
//   }, []);

//   // Auto-scroll using requestAnimationFrame
//   useEffect(() => {
//     let animationFrame;
//     const step = (timestamp) => {
//       if (!previousTimestampRef.current) previousTimestampRef.current = timestamp;
//       const delta = timestamp - previousTimestampRef.current;
//       previousTimestampRef.current = timestamp;
//       if (!isDragging && scrollWidthRef.current) {
//         setOffset((prev) => {
//           let newOffset = prev - autoScrollSpeed * (delta / 1000);
//           // Wrap offset using modulo arithmetic for a seamless loop
//           newOffset = newOffset % scrollWidthRef.current;
//           return newOffset;
//         });
//       }
//       animationFrame = requestAnimationFrame(step);
//     };

//     animationFrame = requestAnimationFrame(step);
//     return () => cancelAnimationFrame(animationFrame);
//   }, [isDragging]);

//   // Pointer events (works for both mouse and touch)
//   const handlePointerDown = (e) => {
//     setIsDragging(true);
//     startXRef.current = e.clientX;
//     lastOffsetRef.current = offset;
//     e.currentTarget.setPointerCapture(e.pointerId);
//   };

//   const handlePointerMove = (e) => {
//     if (!isDragging) return;
//     const dx = e.clientX - startXRef.current;
//     setOffset(lastOffsetRef.current + dx);
//   };

//   const handlePointerUp = (e) => {
//     setIsDragging(false);
//     e.currentTarget.releasePointerCapture(e.pointerId);
//   };

//   // Calculate effective offset to ensure a seamless loop:
//   // We always want a value between -scrollWidth and 0.
//   let effectiveOffset = offset;
//   if (scrollWidthRef.current) {
//     effectiveOffset = offset % scrollWidthRef.current;
//     if (effectiveOffset > 0) {
//       effectiveOffset -= scrollWidthRef.current;
//     }
//   }


// const Home = () => {
//   return (
//     <div className="pt-20">
//       {/* Hero Section */}
//        <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
//         <motion.h1 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#BD85FC] to-[#67A2FA] bg-clip-text text-transparent"
//         >
//           All your SRM Needs In One App
//         </motion.h1>
//         <motion.p 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl px-4"
//         >
//           Streamline your Learning process with our powerful SRM tools and features
//         </motion.p>
        
//         <motion.a
//           href="https://www.dropbox.com/scl/fi/cwdx42fxhrr95dhi5a66t/signed-app.apk?rlkey=91jvirtgxa1p5ngt4sxptapfn&st=h1din66t&dl=1"
//           className="flex items-center space-x-2 bg-gradient-to-r from-[#BD85FC] to-[#67A2FA] px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:opacity-90 transition-opacity mx-4"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <Download size={24} />
//           <span>Download</span>
//         </motion.a> 

//         {/* Screenshots Carousel */}
//         {/* <div className="mt-20 w-full max-w-6xl overflow-hidden px-4">
//           <div className="flex animate-scroll">
//             {[...screenshots, ...screenshots].map((src, index) => (
//               <img 
//                 key={index}
//                 src={src}
//                 alt={`App Screenshot ${index + 1}`}
//                 className="w-60 md:w-72 h-auto mx-2 md:mx-4 rounded-xl shadow-lg"
//               />
//             ))}
//           </div>
//         </div> */}
//         <div className="mt-20 w-full max-w-6xl overflow-hidden px-4">
//       <div
//         ref={containerRef}
//         className={`flex select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
//         onPointerDown={handlePointerDown}
//         onPointerMove={handlePointerMove}
//         onPointerUp={handlePointerUp}
//         onPointerLeave={handlePointerUp} // ensures dragging stops if pointer leaves
//         style={{
//           transform: `translateX(${effectiveOffset}px)`,
//           transition: isDragging ? 'none' : 'transform 0.1s linear',
//         }}
//       >
//         {[...screenshots, ...screenshots].map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`App Screenshot ${index + 1}`}
//             className="w-60 md:w-72 h-auto mx-2 md:mx-4 rounded-xl shadow-lg"
//             draggable="false"
//           />
//         ))}
//       </div>
//     </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16">
//             Powerful Features
//           </h2>
//           <p className="text-lg md:text-xl text-center text-gray-300 mb-12 md:mb-16 px-4">
//             Everything you need to enhance your college experience in one place
//           </p>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="bg-white/5 rounded-2xl p-4 md:p-6 backdrop-blur-sm"
//               >
//                 <img 
//                   src={feature.image}
//                   alt={feature.title}
//                   className="w-full h-40 md:h-48 object-cover rounded-xl mb-4 md:mb-6"
//                 />
//                 <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">{feature.title}</h3>
//                 <p className="text-gray-300 text-sm md:text-base">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import s0 from '../assets/s0.png';
import s1_1 from '../assets/s1_1.png';
import s1_2 from '../assets/s1_2.png';
import s2 from '../assets/s3.png';
import s3 from '../assets/s4.png';
import s4_1 from '../assets/s5_1.png';
import s4_2 from '../assets/s5_2.png';
import s5 from '../assets/s6.png';
import fs1 from '../assets/fs1.png';
import fs2 from '../assets/fs2.png';
import fs3 from '../assets/fs3.png';

const screenshots = [s0, s1_1, s1_2, s2, s3, s4_1, s4_2, s5];

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

function InteractiveScroller() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const startXRef = useRef<number>(0);
  const lastOffsetRef = useRef<number>(0);
  const previousTimestampRef = useRef<number | null>(null);
  const scrollWidthRef = useRef<number>(0);
  const autoScrollSpeed = 100; // pixels per second

  // Measure the width of one set of images (half the total width)
  useEffect(() => {
    if (containerRef.current) {
      // Since we duplicate the images, half of the total width represents one full cycle
      scrollWidthRef.current = containerRef.current.scrollWidth / 2;
    }
  }, []);

  // Auto-scroll using requestAnimationFrame
  useEffect(() => {
    let animationFrame: number;
    const step = (timestamp: number) => {
      if (previousTimestampRef.current === null) {
        previousTimestampRef.current = timestamp;
      }
      const delta = timestamp - previousTimestampRef.current;
      previousTimestampRef.current = timestamp;
      if (!isDragging && scrollWidthRef.current) {
        setOffset((prev) => {
          let newOffset = prev - autoScrollSpeed * (delta / 1000);
          // Wrap offset using modulo arithmetic for a seamless loop
          newOffset = newOffset % scrollWidthRef.current;
          return newOffset;
        });
      }
      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isDragging]);

  // Pointer events (works for both mouse and touch)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
    lastOffsetRef.current = offset;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const dx = e.clientX - startXRef.current;
    setOffset(lastOffsetRef.current + dx);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  // Calculate effective offset to ensure a seamless loop
  let effectiveOffset = offset;
  if (scrollWidthRef.current) {
    effectiveOffset = offset % scrollWidthRef.current;
    if (effectiveOffset > 0) {
      effectiveOffset -= scrollWidthRef.current;
    }
  }

  return (
    <div className="mt-20 w-full max-w-6xl overflow-hidden px-4">
      <div
        ref={containerRef}
        className={`flex select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp} // ensures dragging stops if pointer leaves
        style={{
          transform: `translateX(${effectiveOffset}px)`,
          transition: isDragging ? 'none' : 'transform 0.1s linear',
        }}
      >
        {[...screenshots, ...screenshots].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`App Screenshot ${index + 1}`}
            className="w-60 md:w-72 h-auto mx-2 md:mx-4 rounded-xl shadow-lg"
            draggable="false"
          />
        ))}
      </div>
    </div>
  );
}

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
          href="https://www.dropbox.com/scl/fi/cwdx42fxhrr95dhi5a66t/signed-app.apk?rlkey=91jvirtgxa1p5ngt4sxptapfn&st=h1din66t&dl=1"
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
