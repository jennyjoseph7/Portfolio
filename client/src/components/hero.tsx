import { Download, Github, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-800 bg-clip-text text-transparent animate-fadeInUp">
            Jenny Joseph K
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Aspiring AI & DevOps Engineer | Ethical Hacker | Tech Explorer
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            I'm a curious builder and problem-solver currently pursuing my Master's in Computer Applications. 
            I specialize in artificial intelligence, DevOps, and ethical hacking. I enjoy turning complex 
            problems into clean solutions and building tools that make life easier.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              <Download className="mr-2 h-5 w-5" />
              View Resume
            </Button>

            <div className="flex gap-4">
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <a href="https://github.com/jennyjoseph7" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>

              <Button
                variant="secondary"
                size="lg"
                asChild
                className="px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <a href="https://www.linkedin.com/in/jenny-joseph-k-b6a50a230" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ChevronDown className="h-8 w-8 text-gray-400" />
      </button>
    </section>
  );
}
