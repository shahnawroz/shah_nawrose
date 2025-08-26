import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 hero-gradient rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl opacity-10 animate-float"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-accent p-1 animate-float">
            <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-gradient">SN</span>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Frontend</span>
            <br />
            Developer
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful, responsive web experiences with modern
            technologies. Passionate about clean code and pixel-perfect designs.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Api Integration"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium transition-smooth hover:bg-secondary hover:scale-105"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#contact">
              <Button variant="hero" size="lg">
                <Mail className="w-5 h-5" />
                Get In Touch
              </Button>
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=16LXOa79WHNHkJyUeWR0jOWLFEyUQrI7u"
              download
            >
              <Button variant="minimal" size="lg">
                <Download className="w-5 h-5" />
                Download CV
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {[
              {
                icon: Github,
                href: "https://github.com/shahnawroz",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/shah-nawrose/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:sh.nawrose@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-smooth hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
