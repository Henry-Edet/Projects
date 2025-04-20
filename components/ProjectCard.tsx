// components/ProjectCard.tsx
import Link from 'next/link';


export function ProjectCard({ title, description, tags }: { title: string; description: string; tags: string[] }) {
    return (
      <div className="bg-gradient-to-l from-blue-600 to-purple-500 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <Link 
            href ="#"
            className="flex py-4 text-blue-600 dark:text-blue-400 hover:underline mt-auto self-start"
        >
            View details →
        </Link>
      </div>
    );
  }