import { useEffect, useRef } from "react";
import { Code, Layers, Wrench, Brain, Heart, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

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
        { name: "Swift", level: 75 },
        { name: "JavaScript", level: 80 },
      ]
    },
    {
      title: "Web & Mobile",
      icon: Smartphone,
      color: "emerald",
      skills: [
        { name: "React Native", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Flask", level: 80 },
        { name: "Node.js", level: 75 },
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "purple",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "scikit-learn", level: 88 },
        { name: "NLP", level: 75 },
      ]
    },
    {
      title: "Development Tools",
      icon: Wrench,
      color: "amber",
      tools: ["VS Code", "Xcode", "Git", "Linux", "Kali Linux"]
    },
    {
      title: "Soft Skills",
      icon: Heart,
      color: "rose",
      tools: ["Leadership", "Communication", "Problem-solving", "Teamwork", "Adaptability"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
        border: "border-blue-200 dark:border-blue-800",
        icon: "bg-blue-600",
        text: "text-blue-800 dark:text-blue-300",
        badge: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
      },
      emerald: {
        bg: "from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20",
        border: "border-emerald-200 dark:border-emerald-800",
        icon: "bg-emerald-600",
        text: "text-emerald-800 dark:text-emerald-300",
        badge: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300"
      },
      purple: {
        bg: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
        border: "border-purple-200 dark:border-purple-800",
        icon: "bg-purple-600",
        text: "text-purple-800 dark:text-purple-300",
        badge: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300"
      },
      amber: {
        bg: "from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20",
        border: "border-amber-200 dark:border-amber-800",
        icon: "bg-amber-600",
        text: "text-amber-800 dark:text-amber-300",
        badge: "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300"
      },
      rose: {
        bg: "from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/20",
        border: "border-rose-200 dark:border-rose-800",
        icon: "bg-rose-600",
        text: "text-rose-800 dark:text-rose-300",
        badge: "bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300"
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
                  progressElement.style.setProperty('--progress', value);
                }, 200);
              }
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive technical expertise spanning AI/ML, web development, mobile applications, 
              and modern software engineering practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              const colors = getColorClasses(category.color);
              
              return (
                <Card 
                  key={index} 
                  className={`bg-gradient-to-br ${colors.bg} border ${colors.border} hover:shadow-xl transition-all duration-300 hover-lift group border-0 ${
                    category.tools ? 'flex flex-col' : ''
                  }`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`${colors.icon} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="text-white h-6 w-6" />
                      </div>
                      <CardTitle className={`text-lg ${colors.text}`}>
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex-1">
                    {category.skills ? (
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                              <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                            </div>
                            <Progress 
                              value={skill.level} 
                              className="h-2"
                              data-progress={skill.level}
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {category.tools?.map((tool, toolIndex) => (
                          <Badge 
                            key={toolIndex} 
                            variant="secondary" 
                            className={`text-xs ${colors.badge} hover:scale-105 transition-transform duration-200`}
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
