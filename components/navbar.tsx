"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about-me" },
  {name: "Books", href: "/books"},
  { name: "Skills", href: "/skills" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/30 dark:bg-gray-900/20 backdrop-blur-lg border-b border-white/20 dark:border-gray-800/30 shadow-sm shadow-gray-300/10 dark:shadow-gray-800/10 backdrop-saturate-150 backdrop-filter z-50">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="font-mono text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent"
        >
          Engr. Henry Edet
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
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

          {/* Theme toggle */}
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

        {/* Mobile Section */}
        <div className="flex md:hidden items-center gap-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gray-100/30 dark:hover:bg-gray-800/30"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Hamburger Menu */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm font-medium ${
                  pathname === link.href
                    ? "text-gray-900 dark:text-gray-100"
                    : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
                } px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
