'use client';

import { motion } from 'framer-motion';
import { JSX, useState } from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaFigma,
} from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiGraphql, SiAdobexd } from 'react-icons/si';

type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design';
  icon: JSX.Element;
};

export function SkillsGrid() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'design'>('all');

  const skills: Skill[] = [
    { name: 'React', level: 90, category: 'frontend', icon: <FaReact className="text-[#61DAFB]" /> },
    { name: 'Next.js', level: 85, category: 'frontend', icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: 'TypeScript', level: 80, category: 'frontend', icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: 'Tailwind CSS', level: 88, category: 'frontend', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: 'Node.js', level: 75, category: 'backend', icon: <FaNodeJs className="text-[#339933]" /> },
    { name: 'GraphQL', level: 70, category: 'backend', icon: <SiGraphql className="text-[#E535AB]" /> },
    { name: 'Figma', level: 85, category: 'design', icon: <FaFigma className="text-[#F24E1E]" /> },
    { name: 'Adobe XD', level: 75, category: 'design', icon: <SiAdobexd className="text-[#FF61F6]" /> },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {['all', 'frontend', 'backend', 'design'].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category as any)}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {category === 'all' ? 'All Skills' : category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredSkills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors flex flex-col"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">
                {skill.icon}
              </div>
              <span className="font-medium">{skill.name}</span>
            </div>
            
            {/* Advanced Proficiency Visualization */}
            <div className="mt-auto space-y-2">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ 
                    delay: i * 0.1 + 0.3, 
                    duration: 0.8,
                    type: 'spring'
                  }}
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