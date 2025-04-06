// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">Henry Edet</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          I'm a Software Engineer & Full-stack developer.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/projects" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            View Projects
          </Link>
          <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}