import Link from 'next/link';

export function ProjectCard({
  title,
  description,
  tags,
}: {
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="flex flex-col bg-gradient-to-l from-blue-600 to-purple-500 p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full overflow-hidden">
      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 break-words">{title}</h3>
      
      <p className="text-sm sm:text-base text-white/80 mb-4 break-words">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4 max-w-full">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-white text-gray-800 rounded-full text-xs sm:text-sm max-w-full break-words truncate"
            title={tag}
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href="#"
        className="mt-auto text-sm text-white underline underline-offset-4 hover:text-gray-100 transition"
      >
        View details →
      </Link>
    </div>
  );
}
