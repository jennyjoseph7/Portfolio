import { useEffect, useRef } from "react";
import { 
  Code, 
  Database, 
  Cloud, 
  Brain, 
  Layers, 
  TestTube,
  GitBranch,
  Server,
  BarChart3,
  Shield
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "blue",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "TypeScript", level: 80 },
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      color: "emerald",
      skills: [
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Spring Boot", level: 80 },
        { name: "Flask", level: 75 },
        { name: "Node.js", level: 75 },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "purple",
      skills: [
        { name: "AWS", level: 75 },
        { name: "Docker", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "Git", level: 85 },
      ]
    },
    {
      title: "Databases & Data",
      icon: Database,
      color: "amber",
      skills: [
        { name: "SQL", level: 80 },
        { name: "MySQL", level: 80 },
        { name: "Data Analysis", level: 85 },
        { name: "Data Modeling", level: 80 },
        { name: "Data Visualization", level: 80 },
        { name: "Machine Learning", level: 75 },
      ]
    },
    {
      title: "AI & Analytics",
      icon: Brain,
      color: "rose",
      skills: [
        { name: "AI/ML", level: 80 },
        { name: "Deep Learning", level: 75 },
        { name: "NLP", level: 70 },
        { name: "Big Data", level: 70 },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Server,
      color: "cyan",
      tools: [
        "REST APIs",
        "Kafka",
        "JPA",
        "Unit Testing",
        "System Architecture",
        "SDLC",
        "Agile",
        "API Development",
        "Data Visualization Tools",
        "Spreadsheet Skills",
        "Tailwind CSS",
        "CSS"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-50 via-blue-100 to-blue-50 dark:from-blue-900/20 dark:via-blue-800/20 dark:to-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
        icon: "bg-gradient-to-br from-blue-500 to-blue-600",
        text: "text-blue-800 dark:text-blue-300",
        badge: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
        progress: "bg-blue-500"
      },
      emerald: {
        bg: "from-emerald-50 via-emerald-100 to-emerald-50 dark:from-emerald-900/20 dark:via-emerald-800/20 dark:to-emerald-900/20",
        border: "border-emerald-200 dark:border-emerald-800",
        icon: "bg-gradient-to-br from-emerald-500 to-emerald-600",
        text: "text-emerald-800 dark:text-emerald-300",
        badge: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300",
        progress: "bg-emerald-500"
      },
      purple: {
        bg: "from-purple-50 via-purple-100 to-purple-50 dark:from-purple-900/20 dark:via-purple-800/20 dark:to-purple-900/20",
        border: "border-purple-200 dark:border-purple-800",
        icon: "bg-gradient-to-br from-purple-500 to-purple-600",
        text: "text-purple-800 dark:text-purple-300",
        badge: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300",
        progress: "bg-purple-500"
      },
      amber: {
        bg: "from-amber-50 via-amber-100 to-amber-50 dark:from-amber-900/20 dark:via-amber-800/20 dark:to-amber-900/20",
        border: "border-amber-200 dark:border-amber-800",
        icon: "bg-gradient-to-br from-amber-500 to-amber-600",
        text: "text-amber-800 dark:text-amber-300",
        badge: "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300",
        progress: "bg-amber-500"
      },
      rose: {
        bg: "from-rose-50 via-rose-100 to-rose-50 dark:from-rose-900/20 dark:via-rose-800/20 dark:to-rose-900/20",
        border: "border-rose-200 dark:border-rose-800",
        icon: "bg-gradient-to-br from-rose-500 to-rose-600",
        text: "text-rose-800 dark:text-rose-300",
        badge: "bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300",
        progress: "bg-rose-500"
      },
      cyan: {
        bg: "from-cyan-50 via-cyan-100 to-cyan-50 dark:from-cyan-900/20 dark:via-cyan-800/20 dark:to-cyan-900/20",
        border: "border-cyan-200 dark:border-cyan-800",
        icon: "bg-gradient-to-br from-cyan-500 to-cyan-600",
        text: "text-cyan-800 dark:text-cyan-300",
        badge: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300",
        progress: "bg-cyan-500"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('[data-progress]');
            progressBars.forEach((bar) => {
              const progressElement = bar as HTMLElement;
              const value = progressElement.getAttribute('data-progress');
              if (value) {
                setTimeout(() => {
                  progressElement.style.width = `${value}%`;
                }, 200);
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-800 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              A comprehensive collection of technologies and tools I work with, based on my projects, certifications, and professional experience.
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
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`${colors.icon} p-3 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className={`text-xl font-bold ${colors.text} group-hover:scale-105 transition-transform duration-300`}>
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills with Progress Bars */}
                    {category.skills ? (
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                                {skill.name}
                              </span>
                              <span className="text-xs font-bold text-gray-600 dark:text-gray-400">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden shadow-inner">
                              <div 
                                className={`h-full ${colors.progress} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                                data-progress={skill.level}
                                style={{ width: '0%' }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      // Tools as badges
                      <div className="flex flex-wrap gap-2">
                        {category.tools?.map((tool, toolIndex) => (
                          <Badge 
                            key={toolIndex} 
                            variant="secondary" 
                            className={`text-xs px-3 py-1.5 ${colors.badge} hover:scale-110 transition-transform duration-200 shadow-sm`}
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
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
