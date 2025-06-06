// components/footer.tsx
import Link from "next/link";
import { Github, Linkedin, Youtube, Gitlab } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t py-8">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center gap-6 sm:gap-4 text-center sm:text-left">
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Engr. Henry Peniel Edet
            <br className="block sm:hidden" />
            <span className="hidden sm:inline"> • </span>
            All rights reserved
          </div>
          
          <div className="flex gap-4 justify-center sm:justify-end">
            <Link
              href="https://github.com/Henry-Edet"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 p-2 rounded-full text-gray-600 hover:text-black hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 transition-all"
            >
              <Github className="h-6 w-6 sm:h-5 sm:w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/henry-edet-1b0513300/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 p-2 rounded-full text-blue-600 hover:text-black hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 transition-all"
            >
              <Linkedin className="h-6 w-6 sm:h-5 sm:w-5" />
            </Link>
            <Link
              href="https://www.youtube.com/@henryedcodes"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 p-2 rounded-full text-red-600 hover:text-black hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 transition-all"
            >
              <Youtube className="h-6 w-6 sm:h-5 sm:w-5" />
            </Link>
            <Link
              href="https://gitlab.com/henry_Edet/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 p-2 rounded-full text-orange-600 hover:text-black hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 transition-all"

            >
              <Gitlab className="h-6 w-6 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
