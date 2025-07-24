import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />

      {/* Go to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Go to top"
          className="fixed bottom-6 right-6 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition"
          style={{ zIndex: 1000 }}
        >
          ↑
        </button>
      )}

      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">© 2025 Shah Nawrose. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
