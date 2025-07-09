import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

function AboutMe() {
  return (
    <section
      id="about-me"
      className="container mx-auto px-4 py-16 mt-16 bg-purple-950/20"
    >
      <h1 className="text-center text-4xl">About Me</h1>
      <div className="grid gap-8 mt-8">
        <div className="w-full h-auto text-center text-xl px-10 py-10">
          <p>
            Passionate full-stack developer with a BSc in Computer Science (Bina Nusantara University) 
            and MSc in Management with Entrepreneurship (University of Brighton). 
            Experienced in building API-driven systems, maintaining legacy code, 
            and developing solutions for diverse industries including railway signaling 
            and international banking. Adept at both technical implementation and 
            business strategy with a Merit-class postgraduate achievement.
          </p>
        </div>

        <div className="w-full h-auto text-center text-xl px-10 py-10">
          <h1 className="text-center text-2xl mb-6">Technical Expertise</h1>
          
          <div className="mb-6">
            <h2 className="font-semibold text-lg">Backend Development</h2>
            <p className="text-gray-300">
              Python (FastAPI), C# (.NET), Java, SQL, Docker, OpenAPI/JSON Schema
            </p>
            <p className="mt-2 text-sm">
              Built full-stack API systems including thesis project with FastAPI and Docker
            </p>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold text-lg">Frontend Development</h2>
            <p className="text-gray-300">
              JavaScript, TypeScript, HTML/CSS, Bootstrap, WordPress
            </p>
            <p className="mt-2 text-sm">
              Developed user interfaces for PPI UK website and railway diagnostic tools
            </p>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold text-lg">Cloud & DevOps</h2>
            <p className="text-gray-300">
              AWS (EC2, Lightsail), Heroku, Vercel, Cloud Server Management
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Additional Skills</h2>
            <p className="text-gray-300">
              Legacy Code Maintenance, Financial Analysis, International Business
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;