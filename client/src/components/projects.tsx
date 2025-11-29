import { Brain, Heart, Trophy, Code, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "MindWell - AI Mental Health Companion",
      description: "An AI-first mental health companion for college students. Features emotion intelligence recognizing 11 emotional categories, crisis-aware copilot with pattern detection, daily journaling with mood tracking, and comprehensive analytics. Built with React and Flask stack with modular architecture including story engine, reaction interpreter, and safety layer.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tech: ["React", "Flask", "NLP", "Emotion Intelligence", "Analytics"],
      icon: Brain,
      achievement: "MCA Final Year Project",
      achievementIcon: Trophy,
      color: "emerald",
      features: ["AI Chatbot", "Emotion Intelligence", "Crisis Detection", "Daily Journaling"]
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my projects, skills, and experiences. Built using modern web technologies and designed to highlight my abilities in both frontend and backend development.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tech: ["React", "TypeScript", "Vite", "Express", "Tailwind CSS"],
      icon: Code,
      achievement: "Personal Project",
      achievementIcon: Code,
      color: "blue",
      features: ["React Frontend", "Express Backend", "Modern Design", "Responsive"]
    },
    {
      id: 3,
      title: "Forage Midas Project",
      description: "This repository contains the solution to the Forage Midas virtual experience program. It demonstrates the application of data analytics skills to real world business problems, focusing on extracting actionable insights, visualizing key metrics, and making strategic recommendations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tech: ["Data Analytics", "Python", "Visualization", "Business Intelligence"],
      icon: Heart,
      achievement: "Virtual Experience",
      achievementIcon: Trophy,
      color: "purple",
      features: ["Data Cleaning", "Exploratory Analysis", "Dashboard Creation", "Strategic Recommendations"]
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
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium">
                        {project.id === 1 ? "Mental Health AI" : project.id === 2 ? "Healthcare Innovation" : "ML Recommendation Engine"}
                      </p>
                    </div>
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

                    {project.features && (
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">Key Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.features.map((feature, index) => (
                            <Badge 
                              key={index} 
                              variant="outline" 
                              className="text-xs py-0 px-2"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
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
                      <Button variant="ghost" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm p-0">
                        View Details →
                      </Button>
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
