import { Brain, Heart, Trophy, Code, Smartphone, Github } from "lucide-react";
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
      githubUrl: "" // Add GitHub URL if available
    },
    {
      id: 3,
      title: "Mindwell",
      description: "MindWell is built as an AI first mental health companion for college students. The core idea is straightforward. Students often struggle quietly, so the platform steps in as a steady presence that listens, understands, and supports them in real time without feeling like another scripted bot. It runs on a modular setup with a story engine, reaction interpreter, generation controller, safety layer, memory, analytics, and a full stack delivery layer. All of this simply ensures that conversations stay consistent and personal across web and mobile. The emotion intelligence layer is one of the strongest parts. It recognises eleven emotional categories using more than a hundred linguistic cues. This gives the system a way to sense the user's mood and respond with tone matching, subtle colour cues, and moment specific recommendations that feel natural. Safety is built in from the start. The crisis aware copilot uses pattern detection to catch self harm signals even when words are misspelled. When something serious appears, MindWell immediately shows India specific helplines like KIRAN and the national emergency number and then guides the user through calm, grounded steps. Students also write daily journals. These entries pass through the same emotion and crisis checks, so the platform can spot changes in mood and highlight patterns while keeping everything private. The analytics layer looks only at trends, not identities. The interface is shaped with a human centred approach using a React and Flask stack. Clean typography, thoughtful colours, and smooth switches between journaling, chat, and resources help the experience feel effortless. Behind the scenes, automated tests protect accuracy and shared documentation keeps engineering and mental health teams aligned. MindWell aims to be more than a chatbot. It functions as a reliable companion that turns daily check ins into proactive care while keeping trust and privacy at the centre.",
      date: "April 2025",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tech: ["React", "Flask"],
      icon: Brain,
      achievement: "April 2025",
      achievementIcon: Trophy,
      color: "emerald",
      githubUrl: "" // Add GitHub URL if available
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
