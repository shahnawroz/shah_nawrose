const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Passionate developer with a love for creating amazing digital experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image/Visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-gradient mb-4">2+</div>
                  <p className="text-lg text-muted-foreground">Years of Experience</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float"></div>
            </div>
            
            {/* Right side - Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate frontend developer with over 2 years of experience building 
                modern web applications. I specialize in React, Next.js, and TypeScript, 
                with a strong focus on creating intuitive user experiences.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing my knowledge through 
                blog posts and tutorials.
              </p>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {[
                  { skill: "Frontend Development", level: "95%" },
                  { skill: "React/Next.js", level: "90%" },
                  { skill: "Tailwind CSS", level: "85%" },
                  { skill: "UI/UX Design", level: "80%" }
                ].map(({ skill, level }) => (
                  <div key={skill} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">{skill}</span>
                      <span className="text-muted-foreground">{level}</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="hero-gradient h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;