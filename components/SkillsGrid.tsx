'use client';

import { motion } from 'framer-motion';
import { JSX, useState } from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaFigma,
  FaPython,
} from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiGraphql, SiAdobexd } from 'react-icons/si';

type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'AI';
  icon: JSX.Element;
};

export function SkillsGrid() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'design' | 'AI'>('all');

  const skills: Skill[] = [
    { name: 'React', level: 95, category: 'frontend', icon: <FaReact className="text-[#61DAFB]" /> },
    { name: 'Next.js', level: 85, category: 'frontend', icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: 'TypeScript', level: 80, category: 'frontend', icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: 'Tailwind CSS', level: 97, category: 'frontend', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: 'Node.js', level: 75, category: 'backend', icon: <FaNodeJs className="text-[#339933]" /> },
    { name: 'Python', level: 96, category: 'backend', icon: <FaPython className="text-[#339978]" /> },
    { name: 'GraphQL', level: 70, category: 'backend', icon: <SiGraphql className="text-[#E535AB]" /> },
    { name: 'Figma', level: 85, category: 'design', icon: <FaFigma className="text-[#F24E1E]" /> },
    { name: 'Tensorflow', level: 50, category: 'AI', icon: <SiGraphql className="text-[#FF6F00]" /> },
    { name: 'Adobe XD', level: 75, category: 'design', icon: <SiAdobexd className="text-[#FF61F6]" /> },
    { name: 'YOLO', level: 60, category: 'AI', icon: <FaPython className="text-[#FFD43B]" /> },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {['all', 'frontend', 'backend', 'design', 'AI'].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category as any)}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-400
              ${
                activeCategory === category
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-blue-700 border-blue-500 hover:bg-blue-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700'
              }`}
            
          >
            {category === 'all' ? 'All Skills' : category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredSkills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-5 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors flex flex-col overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-3 min-w-0">
              <div className="text-xl flex-shrink-0">{skill.icon}</div>
              <span className="font-medium text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                {skill.name}
              </span>
            </div>

            {/* Proficiency Visualization */}
            <div className="mt-auto space-y-2">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.8, type: 'spring' }}
                  className={`h-2 rounded-full ${
                    skill.level > 80 ? 'bg-green-500' :
                    skill.level > 60 ? 'bg-blue-500' :
                    'bg-yellow-500'
                  }`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
