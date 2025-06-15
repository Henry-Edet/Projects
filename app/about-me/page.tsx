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
        <p className="text-xl text-neutral-600 mb-8">
          I am a Software Engineer with experience in designing software architecture and enterprise level solutions. 
          I co-founded a tech community at Near East University (TRNC) → <Link href="https://codecrafters.rweru.com" className="hover:text-purple-900">CODECRAFTERS DEV COMMUNITY</Link> which enabled me have the privilege and opportunity to demonstrate success in mentoring engineers.<br/>
          During this period i came across a bevy of engineers with different personas; this enabled me build resilience in character and sharpened my leadership wits.<br/>
          I have had the opportunity to contribute to a few projects, building apps, reducing product delivery time,  and managing micro services across diverse technologies.<br/>
          I am also an author of three unpublished books, <b><i>Precocious Natives</i></b>, <b><i>Wormwood</i></b> and <b><i>Deshabille</i></b>.<br/>
        </p><br/>
        <h4 className="text-5xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-600 bg-clip-text text-transparent">Professional Experience</h4>
        <p className="text-xl text-neutral-600 mb-8">
          09/23  - <b>Software Intern</b><br/>
          At the Near East Robotics Lab, i developed a library management system for near east library<br/>
          I also implemented a database system for it using postgreSQL. I had the privilege of collaborating with different teams to ensure it was successful.<br/>
          <i>Skill Acquired</i>: <b>PostgreSQL, Python, Django, FastAPI</b><br/><br/>

          02-24 - <b>CodeCrafters Tech Community Co-Founder (NEU)</b><br/>
          In order to create relevance of some sort, i found a major problem students both old and new<br/>
          faced. The new ones lacked the necessary skills and guidance to navigate the world they had entered;<br/>
          whilst the old ones were not able to find a way to give back to the community. I co-founded a tech community<br/>
          to bridge this gap. I was able to gather a few students and we started organizing events, hackathons.<br/>
          The blog section will have images of our first ever public event (CCO) in May, 2024. <br/>
          We pulled resources together and built a delivery drone which was our biggest feat yet.<br/>
          <i>Skill Acquired</i>: <b>Leadership, Teamwork, Communication, Project Management, React, Arduino, solidworks simulations.</b><br/><br/>
        </p>
        <h4 className="text-5xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-600 bg-clip-text text-transparent">Education</h4>
        <p className="text-xl text-neutral-600 mb-8">
          <b>BSc Sofware Engineering(B.Eng)</b><br/>
          Near East University, Mersin 10, Turkey<br/>
        </p>
        <h4 className="text-5xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-600 bg-clip-text text-transparent">Certificates</h4>
        <p className="text-xl text-neutral-600 mb-8">
          <b>AWS Solutions Architect (Udemy.com)</b><br/>
          {/* <i>Skill Acquired</i>: <b>HTML, CSS, JavaScript, React, Firebase, Cloud Computing.</b><br/><br/> */}

          <b>Python hands on (Udemy)</b><br/>
          I learnt how python works, encapsulation, abstraction, and the basics.<br/>
          <i>Skill Acquired</i>: <b>Python</b><br/><br/>

          <b>Automate the boring stuff with python</b><br/>
          I learnt how to automate simple things like a whatsapp message using python or a birthday reminder for a friend.<br/>
          <i>Skill Acquired</i>: <b>Python, Django, FastAPI.</b><br/><br/>
        </p>
      </div>
    </section>
  );
}