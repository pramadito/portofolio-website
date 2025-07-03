import React from "react";
import Link from "next/link";

// import TextReveal from "@/components/fancy/text-reveal";
// import MotionWrap from "@/components/motion-wrap";

import { Button } from "@/components/ui/button";

import { ArrowUp } from "lucide-react";

function AboutMe() {
  return (
    <section
      id="about-me"
      className="container mx-auto px-4 py-16  mt-16 bg-purple-950/20 "
    >
      <h1 className="text-center text-4xl">About Me</h1>
      <div className="grid gap-8 mt-8"></div>
      <div>
        <div className="w-full h-auto text-center text-xl px-10 py-10">
          <p>
            A dynamic developer with a unique blend of technical expertise (BSc
            in Computer Science) and business acumen (MSc in Management).
            Experienced in both creating new software and maintaining legacy
            systems across industries from banking to railway signaling.
          </p>
        </div>

        <div className="w-full h-auto text-center text-xl px-10 py-10">
          <h1 className="text-center text-2xl">Core Skills</h1>
          <p>Backend:</p>
          <p>Python, C#, Java, Docker, FastAPI</p>
          <p>Frontend: </p>
          <p>JavaScript, HTML/CSS, Bootstrap, TypeScript</p>
          <p>Cloud:</p>
          <p> AWS EC2, Lightsail, Heroku, Vercel</p>
        </div>
      </div>
      
    </section>
  );
}

export default AboutMe;
