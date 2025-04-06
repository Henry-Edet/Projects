import { Link, Github, Linkedin } from "lucide-react";

// components/footer.tsx
export default function Footer() {
    return (
      <footer className="border-t py-8">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Engr. Henry Peniel Edet <br/>All rights reserved
            </div>
            <div className="flex gap-4">
              <Link href="https://github.com/Henry-Edet" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">
                {/* <Github className="h-5 w-5" /> */}
              </Link>
              <Link href="https://www.linkedin.com/in/henry-edet-1b0513300/" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">
                {/* <Linkedin className="h-5 w-5" /> */}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }