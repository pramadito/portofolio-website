import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Business Development, Operation and Treasure Departments, Internship",
    company: "Mandiri Europe, London",
    period: "Sept 2024 – Oct 2024",
    description:
      "Assisting in financial analysis and market research for European Bank Loan Operation, gaining experience in international banking and investment strategies. Developed skills in data analysis, client relations, and cross-border financial services.",
    technologies: ["Financial Analysis", "Market Research", "Data Analysis", "Client Relations"],
    icon: <Building2 className="h-5 w-5 text-muted-foreground" />,
  },
  {
    title: "Software Engineer",
    company: "PT. ELSICOM ENGINEERING, Bandung",
    period: "Apr 2021 – Sept 2022",
    description:
      "Specialized in creating software for Railway Signaling and Telecommunication. Developed new Desktop Software using Microsoft .NET C# and web-based software with HTML, CSS, Python and Bootstrap. Maintained and migrated legacy systems.",
    technologies: [".NET", "C#", "Python", "HTML", "CSS", "Bootstrap", "Legacy Systems"],
    icon: <Building2 className="h-5 w-5 text-muted-foreground" />,
  },
];

const education = [
  {
    title: "MSc, Management (Entrepreneurship)",
    company: "University of Brighton, United Kingdom",
    period: "Sept 2022 – Dec 2023",
    description:
      "Focused on managing people working in the tech sector. Achieved Merit classification with average mark of 61.67 and GPA of 3.40.",
    technologies: ["Business Management", "Entrepreneurship", "Leadership"],
    icon: <GraduationCap className="h-5 w-5 text-muted-foreground" />,
  },
  {
    title: "BSc, Information Technology",
    company: "University of Bina Nusantara, Bandung",
    period: "Aug 2017 – Nov 2021",
    description:
      "Created a full stack API Website using FastAPI and Docker for Thesis. Completed 35 hours of community service. GPA: 3.27",
    technologies: ["Computer Science", "FastAPI", "Docker", "Full Stack Development"],
    icon: <GraduationCap className="h-5 w-5 text-muted-foreground" />,
  },
];

export default function Experience() {
  return (
    <div id="experience" className="max-w-screen-sm mx-auto py-12 md:py-20 px-6">
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center py-8">
        Experience & Education
      </h2>
      
      <h3 className="text-2xl font-bold mt-12 mb-6">Professional Experience</h3>
      <div className="relative ml-3">
        <div className="absolute left-0 top-4 bottom-0 border-l-2" />
        {experiences.map(({ company, description, period, technologies, title, icon }, index) => (
          <div key={`exp-${index}`} className="relative pl-8 pb-12 last:pb-0">
            <div className="absolute h-3 w-3 -translate-x-1/2 left-px top-3 rounded-full border-2 border-primary bg-background" />
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
                  {icon}
                </div>
                <span className="text-base sm:text-lg font-semibold">{company}</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-medium">{title}</h3>
                <div className="flex items-center gap-2 mt-1 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{period}</span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="rounded-full">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold mt-12 mb-6">Education</h3>
      <div className="relative ml-3">
        <div className="absolute left-0 top-4 bottom-0 border-l-2" />
        {education.map(({ company, description, period, technologies, title, icon }, index) => (
          <div key={`edu-${index}`} className="relative pl-8 pb-12 last:pb-0">
            <div className="absolute h-3 w-3 -translate-x-1/2 left-px top-3 rounded-full border-2 border-primary bg-background" />
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
                  {icon}
                </div>
                <span className="text-base sm:text-lg font-semibold">{company}</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-medium">{title}</h3>
                <div className="flex items-center gap-2 mt-1 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{period}</span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="rounded-full">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}