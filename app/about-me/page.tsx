import profilePic from "@/app/public/images/hendry.png"
import Image from 'next/image';
import Link from "next/link";


export default function AboutMe() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden shadow-lg">
        <Image
          src={profilePic}
          alt="Henry Edet"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-600 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          I am a Software Engineer with experience in designing software architecture and enterprise level solutions. 
          I co-founded a tech community at Near East University (TRNC) → <Link href="https://codecrafters.rweru.com" className="hover:text-purple-900">CODECRAFTERS DEV COMMUNITY</Link> which enabled me have the privilege and opportunity to demonstrate success in mentoring engineers.<br/>
          During this period i came across a bevy of engineers with different personas; this enabled me build resilience in character and sharpened my leadership wits.<br/>
          I have had the opportunity to contribute to a few projects, building apps, reducing product delivery time,  and managing micro services across diverse technologies.
        </p>
      </div>
    </section>
  );
}