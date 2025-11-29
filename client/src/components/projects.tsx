import { Brain, Heart, Trophy, Code, Smartphone, Github, Coffee } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio",
      description: "A personal portfolio website showcasing my projects, skills, and experiences. Built using modern web technologies and designed to highlight my abilities in both frontend and backend development.",
      date: "January 2024 - November 2025",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tech: ["Node.js", "React.js", "TypeScript", "Vite", "Express"],
      icon: Code,
      achievement: "Associated with Lovely Professional University",
      achievementIcon: Code,
      color: "blue",
      githubUrl: "https://github.com/jennyjoseph7/jennyjoseph7.github.io"
    },
    {
      id: 2,
      title: "Forage Midas Project",
      description: "This repository contains the solution to the Forage Midas virtual experience program. It demonstrates the application of data analytics skills to real world business problems, focusing on extracting actionable insights, visualizing key metrics, and making strategic recommendations. Tasks include data cleaning, exploratory analysis, dashboard creation, and delivering findings in a clear, professional format.",
      date: "August 2025 - September 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tech: ["Data Analysis", "Python (Programming Language)", "Data Visualization", "Business Intelligence"],
      icon: Heart,
      achievement: "Associated with JP Morgan Chase & Co",
      achievementIcon: Trophy,
      color: "purple",
      githubUrl: "https://github.com/jennyjoseph7/forage-midas1" // Add GitHub URL if available
    },
    {
      id: 3,
      title: "Mindwell",
      description: "MindWell is built as an AI first mental health companion for college students. The system combines a modular engine for story flow, emotion interpretation, generation control, safety checks, memory, and analytics so conversations stay stable across web and mobile. Its emotion intelligence detects eleven categories through dense linguistic cues and adjusts responses accordingly. A crisis aware copilot runs in the background to catch self harm signals and surface India specific helplines instantly while guiding the user through grounded steps. Journals pass through the same checks so the platform can spot mood shifts without exposing identities. The result is a quiet but constant support layer shaped with a clean React and Flask interface.",
      date: "April 2025",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tech: ["React", "Flask"],
      icon: Brain,
      achievement: "April 2025",
      achievementIcon: Trophy,
      color: "emerald",
      githubUrl: "https://github.com/jennyjoseph7/MindWell"
    },
    {
      id: 4,
      title: "Friends Cafe",
      description: "Friends Cafe is structured as a complete online ordering system. Next.js with TypeScript powers the interface and routes, MySQL handles persistence, and a shared component library keeps the design consistent. A real time menu engine tracks inventory while category filters keep navigation simple. The cart recalculates totals, delivery rules, and item variations as the user edits. A direct OTP flow manages authentication and keeps sessions stable across history, tracking, and payments. An admin dashboard mirrors this clarity for menu updates, order checks, and trend views. The architecture stays predictable through REST style routes, tuned queries, reusable components, and custom hooks that isolate logic for carts and identity.",
      date: "",
      image: "/friendscafe.jpg",
      tech: ["TypeScript", "JavaScript", "MySQL", "CSS", "Tailwind CSS", "Next.js"],
      icon: Coffee,
      achievement: "Personal Project",
      achievementIcon: Code,
      color: "amber",
      githubUrl: "" // Add GitHub URL if available
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project) => {
              const IconComponent = project.icon;
              const AchievementIcon = project.achievementIcon;
              
              const getColorClasses = (color: string) => {
                switch (color) {
                  case 'emerald':
                    return {
                      icon: 'text-emerald-600',
                      badge: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300',
                      achievement: 'text-emerald-600'
                    };
                  case 'blue':
                    return {
                      icon: 'text-blue-600',
                      badge: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
                      achievement: 'text-blue-600'
                    };
                  case 'purple':
                    return {
                      icon: 'text-purple-600',
                      badge: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300',
                      achievement: 'text-purple-600'
                    };
                  case 'amber':
                    return {
                      icon: 'text-amber-600',
                      badge: 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300',
                      achievement: 'text-amber-600'
                    };
                  default:
                    return {
                      icon: 'text-gray-600',
                      badge: 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300',
                      achievement: 'text-gray-600'
                    };
                }
              };

              const colors = getColorClasses(project.color);
              
              return (
                <Card key={project.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover-lift">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <CardContent className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-start gap-3">
                        <IconComponent className={`h-8 w-8 ${colors.icon} mt-1`} />
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 leading-tight">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className={`text-xs ${colors.badge}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className={`flex items-center gap-2 ${colors.achievement}`}>
                        <AchievementIcon className="h-4 w-4" />
                        <span className="text-sm font-medium">{project.achievement}</span>
                      </div>
                      {project.githubUrl && (
                        <Button 
                          variant="ghost" 
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm p-0"
                          asChild
                        >
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:gap-2 transition-all"
                          >
                            <Github className="h-4 w-4" />
                            View on GitHub
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
