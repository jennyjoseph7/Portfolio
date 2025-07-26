import { useEffect, useRef } from "react";
import { Code, Layers, Wrench, Brain, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const languageSkills = [
    { name: "Java", level: 85 },
    { name: "Python", level: 90 },
    { name: "Swift", level: 75 },
    { name: "Linux", level: 80 },
  ];

  const webSkills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
  ];

  const tools = ["Kali Linux", "Xcode", "VS Code"];
  const mlTools = ["TensorFlow", "PyTorch", "scikit-learn"];
  const softSkills = ["Teamwork", "Adaptability", "Communication", "Leadership"];

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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <Card className="hover-lift transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center">
                <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {languageSkills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                        data-progress={skill.level}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Web Technologies */}
            <Card className="hover-lift transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center">
                <Layers className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle>Web Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {webSkills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                        data-progress={skill.level}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools */}
            <Card className="hover-lift transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center">
                <Wrench className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle>Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <Badge key={index} variant="secondary" className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* ML Tools */}
            <Card className="hover-lift transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center">
                <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>ML Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {mlTools.map((tool, index) => (
                    <Badge key={index} variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="hover-lift transition-all duration-300 hover:shadow-xl md:col-span-2 lg:col-span-1">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <CardTitle>Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
