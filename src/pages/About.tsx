// import React from 'react';
// import { motion } from 'framer-motion';
// import p from '../assets/prakhar.jpeg';
// import n from '../assets/nishant.jpeg';

// const founders = [
//   {
//     name: "Prakhar Singh",
//     role: "Founder",
//     image: p
//   },
//   {
//     name: "Nishant Awasthi",
//     role: "Co-founder",
//     image: n
//   }
// ];

// const About = () => {
//   return (
//     <div className="pt-32 px-4 md:px-8 max-w-6xl mx-auto mb-16">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center mb-16"
//       >
//         <h1 className="text-4xl md:text-5xl font-bold mb-6">ABOUT SRM ONE</h1>
//         <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//           Streamlining your learning process with powerful SRM tools. Founded with a vision 
//           to revolutionize academic resource management, SRM One delivers cutting-edge 
//           solutions for students, faculty, and alumni. Our platform seamlessly integrates 
//           learning tools with an intuitive interface.
//         </p>
//       </motion.div>

//       <div className="grid md:grid-cols-2 gap-8 mt-16">
//         {founders.map((founder, index) => (
//           <motion.div
//             key={founder.name}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2 }}
//             className="group perspective"
//           >
//             <div className="relative transform-style-3d transition-transform duration-500 group-hover:rotate-y-180">
//               <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
//                 <img
//                   src={founder.image}
//                   alt={founder.name}
//                   className="w-full h-64 object-cover rounded-xl mb-6"
//                 />
//                 <h3 className="text-2xl font-semibold mb-2">{founder.name}</h3>
//                 <p className="text-gray-300">{founder.role}</p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default About;






import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  Clock, 
  RefreshCw, 
  TrendingDown, 
  LogIn, 
  Smartphone, 
  CheckCircle, 
  Clock as ClockIcon 
} from 'lucide-react';
import p from '../assets/prakhar.jpeg';
import n from '../assets/nishant.jpeg';

const metrics = [
  {
    title: "Active Users",
    value: "50+",
    description: "Users currently active on the platform",
    icon: <Users className="w-8 h-8 text-indigo-300" />,
    gradient: "bg-gradient-to-r from-indigo-600 to-indigo-400"
  },
  {
    title: "Daily Active Users",
    value: "30+",
    description: "Unique users engaging daily",
    icon: <Calendar className="w-8 h-8 text-green-300" />,
    gradient: "bg-gradient-to-r from-green-600 to-green-400"
  },
  {
    title: "Session Length",
    value: "5m 30s",
    description: "Average duration per session",
    icon: <Clock className="w-8 h-8 text-yellow-300" />,
    gradient: "bg-gradient-to-r from-yellow-600 to-yellow-400"
  },
  {
    title: "Retention Rate",
    value: "100%",
    description: "Percentage of returning users",
    icon: <RefreshCw className="w-8 h-8 text-purple-300" />,
    gradient: "bg-gradient-to-r from-purple-600 to-purple-400"
  },
  {
    title: "Churn Rate",
    value: "0%",
    description: "Users who stopped using the app",
    icon: <TrendingDown className="w-8 h-8 text-red-300" />,
    gradient: "bg-gradient-to-r from-red-600 to-red-400"
  },
];

const reasons = [
  {
    title: "Multiple Times Login",
    description: "Secure and flexible login options for various sessions.",
    icon: <LogIn className="w-6 h-6 text-green-400" />,
  },
  {
    title: "Optimized Mobile View",
    description: "A sleek, mobile-first interface built for on‑the‑go access.",
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Quick Check Attendance",
    description: "Instant access to attendance records with a tap.",
    icon: <CheckCircle className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "Hour-wise Attendance",
    description: "Detailed tracking per hour for accurate records.",
    icon: <ClockIcon className="w-6 h-6 text-yellow-400" />,
  },
];

const founders = [
  {
    name: "Prakhar Singh",
    role: "Founder",
    image: p,
    flipText: "missing your dady?"
  },
  {
    name: "Nishant Awasthi",
    role: "Co-founder",
    image: n,
    flipText: "kyaa babua, kaisan baa?"
  },
];

const About = () => {
  return (
    <div className="pt-32 px-4 md:px-8 max-w-6xl mx-auto mb-16 text-gray-100 ">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">ABOUT SRM ONE</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Streamlining your learning process with powerful SRM tools. Founded with a vision
          to revolutionize academic resource management, SRM One delivers cutting-edge solutions
          for students, faculty, and alumni through an intuitive, mobile-first platform.
        </p>
      </motion.div>

      {/* Main Content Container */}
      <div className="flex flex-col md:flex-row gap-8 ">
        {/* Left Column: App Metrics and Why We Built This App */}
        <div className="flex-1 flex flex-col space-y-8 ">
          {/* App Metrics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl p-6 shadow-lg border border-gray-700 bg-[#130D37]/90"
          >
            <h2 className="text-2xl font-bold mb-4">App Metrics</h2>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-4 shadow-lg border border-gray-700 text-center ${metric.gradient}`}
                >
                  <div className="flex items-center justify-center mb-2">
                    {metric.icon}
                  </div>
                  <h3 className="text-xl font-bold">{metric.value}</h3>
                  <p className="text-sm">{metric.title}</p>
                  <p className="text-xs text-gray-200 mt-1">{metric.description}</p>
                </div>
              ))}
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
  {metrics.map((metric, index) => (
    <div
      key={index}
      className={`rounded-xl p-4 shadow-lg border border-gray-700 text-center ${metric.gradient} ${
        index === metrics.length - 1 ? 'md:col-span-2' : ''
      }`}
    >
      <div className="flex items-center justify-center mb-2">
        {metric.icon}
      </div>
      <h3 className="text-xl font-bold">{metric.value}</h3>
      <p className="text-sm">{metric.title}</p>
      <p className="text-xs text-gray-200 mt-1">{metric.description}</p>
    </div>
  ))}
</div>

          </motion.div>

          {/* Why We Built This App Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#130D37]/90 rounded-xl p-6 shadow-lg border border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-4">Why We Built This App</h2>
            <div className="space-y-4">
              {reasons.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-start space-x-3"
                >
                  <div>{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Our Founders */}
        <div className="md:w-1/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#130D37]/90 rounded-xl p-6 shadow-lg border border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-4">Our Founders</h2>
            <div className="space-y-4">
              {founders.map((founder) => (
                <motion.div
                  key={founder.name}
                  className="relative group flip-card-container"
                  style={{ perspective: '1000px' }}
                >
                  <div
                    className="flip-card-inner relative transition-transform duration-500"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front Side */}
                    <div
                      className="flip-card-front flex items-center space-x-4 p-3 bg-[#130D30] rounded-xl border border-gray-600 hover:shadow-md transition-shadow"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-16 h-16 object-cover rounded-full"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{founder.name}</h3>
                        <p className="text-gray-400 text-sm">{founder.role}</p>
                      </div>
                    </div>
                    {/* Back Side */}
                    <div
                      className="flip-card-back absolute inset-0 flex items-center justify-center p-3 bg-[#130D30] rounded-xl border border-gray-600"
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <p className="text-lg font-bold text-gray-100">
                        {founder.flipText}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom CSS for flip effect */}
      <style jsx>{`
        .flip-card-inner {
          transform-style: preserve-3d;
          transition: transform 0.5s;
        }
        .group:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default About;
