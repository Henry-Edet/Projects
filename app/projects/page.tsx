"use client";
import { ProjectCard } from '@/components/ProjectCard';
import { motion } from 'framer-motion';
// import { useState } from 'react';

const projects = [
  {
    title: "Portfolio Website",
    description: "Built with Next.js and Tailwind CSS",
    tags: ["Next.js", "Tailwind", "Framer Motion"]
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack store with payment processing",
    tags: ["React", "Node.js", "Stripe"]
  },
  {
    title: "Task Management App",
    description: "Productivity app with real-time updates",
    tags: ["TypeScript", "Firebase", "React"]
  },
  // Add more projects as needed
];

// // Add to ProjectsPage component
// const [filter, setFilter] = useState('All');

// // Filter logic
// const filteredProjects = filter === 'All' 
//   ? projects 
//   : projects.filter(project => project.tags.includes(filter));

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Projects</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Here&apos;s what I&apos;ve been building recently
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
            <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <ProjectCard key={project.title} {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}