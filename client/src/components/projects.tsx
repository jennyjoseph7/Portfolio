import { Brain, Heart, Trophy, Code, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Mental Health Tracker with Chatbot Support",
      description: "A comprehensive mobile application combining mood tracking, AI chatbot interaction, music therapy, and gamified mental health engagement. Features secure authentication, sentiment analysis, and emergency contact management for preventive mental healthcare.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tech: ["React Native", "Flask", "NLP", "SQLite", "NativeBase"],
      icon: Brain,
      achievement: "MCA Final Year Project",
      achievementIcon: Trophy,
      color: "emerald",
      features: ["AI Chatbot", "Mood Tracking", "Music Therapy", "Honor Score System"]
    },
    {
      id: 2,
      title: "MedBuddy – Smart Drug Dispenser",
      description: "A medication management app that won 1st place at Innothon by LPU. Built with a team to improve healthcare access using AI-powered recommendations and automated dispensing.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tech: ["Python", "Mobile Tech", "ML", "IoT"],
      icon: Heart,
      achievement: "1st Place Winner",
      achievementIcon: Trophy,
      color: "blue",
      features: ["AI Recommendations", "Automated Dispensing", "Healthcare Access"]
    },
    {
      id: 3,
      title: "Movie Recommendation System",
      description: "Built a recommendation engine using Python and ML libraries to suggest movies based on user preferences, viewing history, and collaborative filtering algorithms.",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tech: ["Python", "Pandas", "scikit-learn", "Matplotlib"],
      icon: Smartphone,
      achievement: "Machine Learning",
      achievementIcon: Code,
      color: "purple",
      features: ["Collaborative Filtering", "User Preferences", "Data Analysis"]
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
