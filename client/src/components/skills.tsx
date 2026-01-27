import { 
  Code, 
  Database, 
  Brain
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Full-Stack Development",
      icon: Code,
      color: "blue",
      description: "Building responsive web applications with modern frameworks and clean architecture. Experienced in frontend design, backend APIs, and database integration.",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Python",
        "Flask",
        "Node.js",
        "HTML/CSS",
        "Tailwind CSS",
        "REST APIs"
      ],
      projects: "Projects: MindWell, Friends Cafe"
    },
    {
      title: "Database & Backend Engineering",
      icon: Database,
      color: "emerald",
      description: "Designing and implementing database schemas, optimizing queries, and building secure authentication systems for scalable applications.",
      skills: [
        "MySQL",
        "SQL",
        "Database Design",
        "API Development",
        "Authentication",
        "OTP Systems",
        "Git"
      ],
      projects: "Projects: Friends Cafe (inventory tracking), MindWell (user sessions)"
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "purple",
      description: "Applying machine learning to real-world problems with focus on emotion detection and intelligent systems. Integrating ML models into production applications.",
      skills: [
        "Python",
        "Machine Learning",
        "Emotion Detection",
        "Model Integration",
        "Data Analysis",
        "Flask APIs"
      ],
      projects: "Projects: MindWell (11-category emotion detection with crisis detection)"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-50 via-blue-100 to-blue-50 dark:from-blue-900/20 dark:via-blue-800/20 dark:to-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
        icon: "bg-gradient-to-br from-blue-500 to-blue-600",
        text: "text-blue-800 dark:text-blue-300",
        badge: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800",
        description: "text-blue-700 dark:text-blue-400"
      },
      emerald: {
        bg: "from-emerald-50 via-emerald-100 to-emerald-50 dark:from-emerald-900/20 dark:via-emerald-800/20 dark:to-emerald-900/20",
        border: "border-emerald-200 dark:border-emerald-800",
        icon: "bg-gradient-to-br from-emerald-500 to-emerald-600",
        text: "text-emerald-800 dark:text-emerald-300",
        badge: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
        description: "text-emerald-700 dark:text-emerald-400"
      },
      purple: {
        bg: "from-purple-50 via-purple-100 to-purple-50 dark:from-purple-900/20 dark:via-purple-800/20 dark:to-purple-900/20",
        border: "border-purple-200 dark:border-purple-800",
        icon: "bg-gradient-to-br from-purple-500 to-purple-600",
        text: "text-purple-800 dark:text-purple-300",
        badge: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800",
        description: "text-purple-700 dark:text-purple-400"
      },
      amber: {
        bg: "from-amber-50 via-amber-100 to-amber-50 dark:from-amber-900/20 dark:via-amber-800/20 dark:to-amber-900/20",
        border: "border-amber-200 dark:border-amber-800",
        icon: "bg-gradient-to-br from-amber-500 to-amber-600",
        text: "text-amber-800 dark:text-amber-300",
        badge: "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800",
        description: "text-amber-700 dark:text-amber-400"
      },
      rose: {
        bg: "from-rose-50 via-rose-100 to-rose-50 dark:from-rose-900/20 dark:via-rose-800/20 dark:to-rose-900/20",
        border: "border-rose-200 dark:border-rose-800",
        icon: "bg-gradient-to-br from-rose-500 to-rose-600",
        text: "text-rose-800 dark:text-rose-300",
        badge: "bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800",
        description: "text-rose-700 dark:text-rose-400"
      },
      cyan: {
        bg: "from-cyan-50 via-cyan-100 to-cyan-50 dark:from-cyan-900/20 dark:via-cyan-800/20 dark:to-cyan-900/20",
        border: "border-cyan-200 dark:border-cyan-800",
        icon: "bg-gradient-to-br from-cyan-500 to-cyan-600",
        text: "text-cyan-800 dark:text-cyan-300",
        badge: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",
        description: "text-cyan-700 dark:text-cyan-400"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-800 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              The technologies I actively work with, backed by real projects and hands-on experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              const colors = getColorClasses(category.color);
              
              return (
                <Card 
                  key={index} 
                  className={`bg-gradient-to-br ${colors.bg} border-2 ${colors.border} hover:shadow-2xl transition-all duration-500 hover-lift group overflow-hidden relative`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Animated gradient border on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${colors.icon} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`}></div>
                  
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${colors.icon}`}></div>
                  
                  <CardContent className="p-6 relative z-10">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`${colors.icon} p-3 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className={`text-xl font-bold ${colors.text} group-hover:scale-105 transition-transform duration-300`}>
                        {category.title}
                      </h3>
                    </div>

                    {/* Description */}
                    {category.description && (
                      <p className={`text-sm ${colors.description} mb-5 leading-relaxed`}>
                        {category.description}
                      </p>
                    )}

                    {/* Skills as badges */}
                    {category.skills && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {category.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="secondary" 
                            className={`text-xs px-3 py-1.5 ${colors.badge} border hover:scale-110 transition-all duration-200 shadow-sm hover:shadow-md font-medium`}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {/* Projects */}
                    {category.projects && (
                      <p className={`text-xs ${colors.description} mt-4 pt-4 border-t ${colors.border} italic`}>
                        {category.projects}
                      </p>
                    )}
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
