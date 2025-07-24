import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Datti Home Collection",
      description:
        "A Multivendor E-commerce Platform.",
      image: "./project1.png",
      technologies: ["React", "Next.js", "Nest.js", "Tailwind CSS"],
      liveUrl: "https://www.daattihomecollection.com/#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Abrar Awsaf Agro",
      description:
        "A modern e-commerce platform built with React, Next.js. Features include product catalog, shopping cart, and secure payments.",
      image:
        "./project2.png",
      technologies: ["React", "Next.js", "API Integration", "Tailwind CSS"],
      liveUrl: "https://abrarawsafagrofarm.com/",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Valerie Taylor Trust",
      description:
        "The Valerie Taylor Trust is the UK support organisation for Centre for the Rehabilitation of the Paralysed.",
      image:
        "./project3.png",
     technologies: ["Wordpress", "Stripe", "ElementorPro"],
      liveUrl: "https://www.valerietaylortrust.org/",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Motamot",
      description:
        "An online platform for sharing and voting on opinions.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["Next.js", "React", "Laravel", "Tailwind CSS", "Wireframe"],
      liveUrl: "https://motamot.io/",
      githubUrl: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate
            my skills and passion for development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`relative group ${
                  index % 2 === 1 ? "md:col-start-2" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-elevated transition-smooth group-hover:shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>

                  {/* Project Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-smooth">
                    <Button variant="hero" size="sm">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>

                {project.featured && (
                  <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "md:col-start-1" : ""
                }`}
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="cta">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
