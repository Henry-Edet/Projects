// app/page.tsx
import Link from "next/link";
import Image from 'next/image';
import profilePic from "@/app/public/images/hendry.png"
import { DownloadCvButton } from "@/components/DownloadCvButton";

export default function Home() {
  return (
    <section className="pt-32 pb-20 px-4">
        {/* Profile Image */}
        <div className="relative w-76 h-76 mx-auto mb-8 rounded-full overflow-hidden shadow-lg">
          <Image
            src={profilePic}
            alt="Henry Edet"
            fill
            className="object-cover"
            priority
          />
        </div>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">Henry Edet</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          I'm a Software Engineer & Full-stack developer.
        </p>

        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4 justify-center">
            <Link 
              href="/projects" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              View Projects
            </Link>
          </div>
          <DownloadCvButton/>
        </div>
      </div>
    </section>
  );
}