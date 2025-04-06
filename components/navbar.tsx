// components/navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  return (
    <nav className="fixed top-0 w-full bg-white/30 dark:bg-gray-900/20 backdrop-blur-lg border-b border-white/20 dark:border-gray-800/30 shadow-sm shadow-gray-300/10 dark:shadow-gray-800/10 backdrop-saturate-150 backdrop-filter z-50">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-mono text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent"
        >
          Engr. Henry Edet
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium ${
                  pathname === link.href
                    ? "text-gray-900 dark:text-gray-100"
                    : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/50 dark:hover:bg-gray-800/20 px-3 py-1.5 rounded-lg transition-all"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gray-100/30 dark:hover:bg-gray-800/30"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </nav>
  );
}