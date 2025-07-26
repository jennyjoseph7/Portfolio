import { Pill, Film, Trophy, Code } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "MedBuddy – Smart Drug Dispenser",
      description: "A medication management app that won 1st place at Innothon by LPU. Built with a team to improve healthcare access using AI-powered recommendations and automated dispensing.",
      image: "https://pixabay.com/get/gd58b6e42478b059427d9150b74bead8462a63d7f2f2a560b5f4f8070b26ada4dcb6da7ddd6df4524bf55c3ac6988011f51517a4e92f9708beabb713d8cdea90e_1280.jpg",
      tech: ["Python", "Mobile Tech", "ML"],
      icon: Pill,
      achievement: "1st Place Winner",
      achievementIcon: Trophy,
      color: "emerald"
    },
    {
      id: 2,
      title: "Movie Recommendation System",
      description: "Built a recommendation engine using Python and ML libraries to suggest movies based on user preferences, viewing history, and collaborative filtering algorithms.",
      image: "https://pixabay.com/get/g5d178154beec311b03bbd9f623da33a1fc35c7613642acfb1195c63c41d6e7d7f43192f6136fe1d4e9af608fa435bc9b2c5cabdc1da803673316bdd6c7ecd949_1280.jpg",
      tech: ["Pandas", "scikit-learn", "Matplotlib"],
      icon: Film,
      achievement: "Machine Learning",
      achievementIcon: Code,
      color: "purple"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => {
              const IconComponent = project.icon;
              const AchievementIcon = project.achievementIcon;
              
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
                      <p className="text-sm">
                        {project.id === 1 ? "Healthcare AI Solution" : "AI-Powered Recommendations"}
                      </p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center gap-3">
                        <IconComponent className={`h-8 w-8 ${project.color === 'emerald' ? 'text-emerald-600' : 'text-purple-600'}`} />
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                          {project.title}
                        </h3>
                      </div>
                    </CardHeader>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className={`${
                            project.color === 'emerald' 
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' 
                              : 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300'
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className={`flex items-center gap-2 ${
                        project.color === 'emerald' ? 'text-emerald-600' : 'text-gray-500 dark:text-gray-400'
                      }`}>
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
