import type { Metadata } from "next";
import { Inter, Space_Grotesk as SpaceGrotesk, Geist_Mono as GeistMono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AnimatedBackground } from '@/components/AnimatedBackground';

// Font setup
const spaceGrotesk = SpaceGrotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = GeistMono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// const geistSans = Geistsans({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Henry Edet | Portfolio",
  description: "Software Engineer & Full-stack developer",
  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${geistMono.variable}`}>
      <body 
        className={`${spaceGrotesk.variable} ${ geistMono.variable }"bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950`}
        style={{ backgroundColor: "var(--color-background)", color: "var(--color-foreground)" }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <AnimatedBackground />

          {/* Main layout structure */}
          <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 container max-w-6xl mx-auto px-4 md:px-6 py-24">
            
              {children}
            </main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
