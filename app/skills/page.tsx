// app/skills/page.tsx
import { SkillsGrid } from '@/components/SkillsGrid';

export default function SkillsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Skills</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Technologies I work with daily
        </p>
      </div>
      <SkillsGrid />
    </section>
  );
}