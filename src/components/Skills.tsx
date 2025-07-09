import {
  Code,
  Database,
  Server,
  Cloud,
  Cpu,
  FileText,
  Globe,
  Languages,
  Settings2,
} from "lucide-react";
import React from "react";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Proficient in JavaScript, TypeScript, HTML, CSS, and Bootstrap for creating responsive and user-friendly interfaces.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Experienced in Python, C++, C#, Java, and FastAPI for building robust server-side applications and APIs.",
  },
  {
    icon: Database,
    title: "Database & Cloud",
    description:
      "Skilled in SQL, Docker, AWS EC2, AWS Lightsail, and Heroku for database management and cloud computing solutions.",
  },
  {
    icon: Cpu,
    title: "Full Stack Development",
    description:
      "Created standards-based full stack software with API using OpenAPI and JSON Schema.",
  },
  {
    icon: Settings2,
    title: "Desktop Applications",
    description:
      "Developed desktop applications using .NET framework and Python for various business needs.",
  },
  {
    icon: Cloud,
    title: "Cloud Server Management",
    description:
      "Managed cloud server databases and deployed applications on various cloud platforms.",
  },
  {
    icon: FileText,
    title: "Legacy Code Maintenance",
    description:
      "Experienced in maintaining and migrating older software systems to newer versions with proper documentation.",
  },
  {
    icon: Globe,
    title: "Company Analysis",
    description:
      "Business management skills with focus on tech sector operations and financial analysis.",
  },
  {
    icon: Languages,
    title: "Languages",
    description:
      "Fluent in English and Bahasa Indonesia, with experience in international collaboration.",
  },
];

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen flex items-center justify-center py-12">
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Skills
        </h2>
        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto px-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="flex flex-col border rounded-xl py-6 px-5"
            >
              <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                <skill.icon className="h-6 w-6" />
              </div>
              <span className="text-lg font-semibold">{skill.title}</span>
              <p className="mt-1 text-foreground/80 text-[15px]">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;