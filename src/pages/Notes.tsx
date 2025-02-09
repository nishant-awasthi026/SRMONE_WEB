import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

type Unit = {
  id: number;
  title: string;
  content: string;
};

type Subject = {
  id: number;
  name: string;
  units: Unit[];
};

type Year = {
  id: number;
  name: string;
  subjects: Subject[];
};

const years: Year[] = [
  {
    id: 1,
    name: "First Year",
    subjects: [
      {
        id: 1,
        name: "Engineering Mathematics",
        units: Array.from({ length: 5 }, (_, i) => ({
          id: i + 1,
          title: `Unit ${i + 1}`,
          content: "Coming soon..."
        }))
      },
      // Add more subjects as needed
    ]
  },
  {
    id: 2,
    name: "Second Year",
    subjects: [
      {
        id: 1,
        name: "Data Structures",
        units: Array.from({ length: 5 }, (_, i) => ({
          id: i + 1,
          title: `Unit ${i + 1}`,
          content: "Coming soon..."
        }))
      },
    ]
  },
  {
    id: 3,
    name: "Third Year",
    subjects: [
      {
        id: 1,
        name: "Database Management",
        units: Array.from({ length: 5 }, (_, i) => ({
          id: i + 1,
          title: `Unit ${i + 1}`,
          content: "Coming soon..."
        }))
      },
    ]
  },
  {
    id: 4,
    name: "Fourth Year",
    subjects: [
      {
        id: 1,
        name: "Machine Learning",
        units: Array.from({ length: 5 }, (_, i) => ({
          id: i + 1,
          title: `Unit ${i + 1}`,
          content: "Coming soon..."
        }))
      },
    ]
  }
];

const Notes = () => {
  const [expandedYear, setExpandedYear] = useState<number | null>(null);
  const [expandedSubject, setExpandedSubject] = useState<number | null>(null);
  const [expandedUnit, setExpandedUnit] = useState<number | null>(null);

  return (
    <div className="pt-32 px-4 md:px-8 max-w-6xl mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Notes</h1>
        <p className="text-xl text-gray-300">
          Access comprehensive study materials organized by year and subject
        </p>
      </motion.div>

      <div className="space-y-4">
        {years.map((year) => (
          <div key={year.id} className="rounded-lg overflow-hidden">
            <motion.button
              className="w-full bg-white/5 p-4 flex items-center justify-between hover:bg-white/10 transition-colors"
              onClick={() => setExpandedYear(expandedYear === year.id ? null : year.id)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <span className="text-lg font-semibold">{year.name}</span>
              <ChevronDown
                className={`transform transition-transform ${
                  expandedYear === year.id ? 'rotate-180' : ''
                }`}
              />
            </motion.button>

            {expandedYear === year.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="pl-4"
              >
                {year.subjects.map((subject) => (
                  <div key={subject.id} className="mt-2">
                    <motion.button
                      className="w-full bg-white/5 p-3 flex items-center justify-between hover:bg-white/10 transition-colors"
                      onClick={() => setExpandedSubject(expandedSubject === subject.id ? null : subject.id)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <span className="text-md font-medium">{subject.name}</span>
                      <ChevronDown
                        className={`transform transition-transform ${
                          expandedSubject === subject.id ? 'rotate-180' : ''
                        }`}
                      />
                    </motion.button>

                    {expandedSubject === subject.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4"
                      >
                        {subject.units.map((unit) => (
                          <div key={unit.id} className="mt-2">
                            <motion.button
                              className="w-full bg-white/5 p-2 flex items-center justify-between hover:bg-white/10 transition-colors"
                              onClick={() => setExpandedUnit(expandedUnit === unit.id ? null : unit.id)}
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                            >
                              <span>{unit.title}</span>
                              <ChevronDown
                                className={`transform transition-transform ${
                                  expandedUnit === unit.id ? 'rotate-180' : ''
                                }`}
                              />
                            </motion.button>

                            {expandedUnit === unit.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="p-4 bg-white/5 mt-2 rounded"
                              >
                                {unit.content}
                              </motion.div>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;