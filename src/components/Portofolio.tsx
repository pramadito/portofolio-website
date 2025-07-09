const portfolios = [
  {
    id: 1,
    title: "Railway Signaling Software",
    description: "Diagnostic software for railway systems at PT. Elsicom Engineering",
    technologies: [".NET C#", "HTML", "CSS", "Python", "Bootstrap"],
    situation: "Modernization of legacy railway signaling systems",
    action: "Developed desktop (.NET C#) and web applications (HTML/CSS/Python)",
    result: "Enhanced diagnostic capabilities with responsive Bootstrap interfaces"
  },
  {
    id: 2,
    title: "Full Stack API Website",
    description: "Thesis project for BSc in Computer Science",
    technologies: ["Python", "FastAPI", "Docker", "OpenAPI"],
    situation: "Academic requirement to demonstrate full-stack development",
    action: "Built API-driven website with Python/FastAPI and containerized with Docker",
    result: "Completed with 3.27 GPA, showcasing backend Python expertise"
  },
  {
    id: 3,
    title: "Financial Analysis System",
    description: "Internship project at Mandiri Europe",
    technologies: ["Data Analysis", "SQL", "AWS", "Financial Modeling"],
    situation: "European Bank Loan Operation needed better analytics",
    action: "Performed data analysis and created financial models",
    result: "Improved cross-border financial service strategies"
  }
];

const Portfolio = () => (
  <div id="portfolio" className="min-h-screen py-12 px-6 bg-gray-900/20 text-gray-100">
    <h2 className="mb-14 text-5xl font-bold text-center">Portfolio</h2>
    <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolios.map((project) => (
        <div key={project.id} className="rounded-xl p-6 bg-gray-800 shadow-lg border border-gray-700 hover:border-primary transition-all">
          <h3 className="text-xl font-bold ">{project.title}</h3>
          <p className="text-gray-400 mb-4">{project.description}</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-gray-300">Technologies:</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className={`px-2 py-1 rounded text-sm bg-gray-700 text-gray-300
                  `}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2 text-gray-300">
            <p><span className="font-semibold text-gray-200">Action:</span> {project.action}</p>
            <p><span className="font-semibold text-gray-200">Result:</span> <span className="text-gray-100">{project.result}</span></p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Portfolio; 