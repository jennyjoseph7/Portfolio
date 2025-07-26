import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Education() {
  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "Lovely Professional University, Punjab",
      period: "Aug 2023 – 2025",
      grade: "CGPA: 6.63",
      color: "blue",
      position: "left",
      status: "Current",
      description: "Specializing in AI, Machine Learning, and Advanced Software Engineering"
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "Acharya Institute, Bangalore",
      period: "2020 – 2023",
      grade: "76.5%",
      color: "emerald",
      position: "right",
      status: "Completed",
      description: "Foundation in Computer Science, Programming, and System Design"
    },
    {
      degree: "12th & 10th Grade",
      institution: "Kendriya Vidyalaya Rail Wheel Factory, Bangalore",
      period: "2017 – 2019",
      grade: "",
      color: "amber",
      position: "left",
      status: "Completed",
      description: "Strong foundation in Mathematics and Science"
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
        border: "border-blue-200 dark:border-blue-800",
        institution: "text-blue-600 dark:text-blue-400",
        dot: "bg-gradient-to-br from-blue-500 to-blue-600",
        badge: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
        timeline: "bg-blue-600"
      },
      emerald: {
        bg: "from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20",
        border: "border-emerald-200 dark:border-emerald-800",
        institution: "text-emerald-600 dark:text-emerald-400",
        dot: "bg-gradient-to-br from-emerald-500 to-emerald-600",
        badge: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300",
        timeline: "bg-emerald-600"
      },
      amber: {
        bg: "from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20",
        border: "border-amber-200 dark:border-amber-800",
        institution: "text-amber-600 dark:text-amber-400",
        dot: "bg-gradient-to-br from-amber-500 to-amber-600",
        badge: "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300",
        timeline: "bg-amber-600"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Education Journey</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A progressive academic path building expertise in computer applications, 
              AI technologies, and software engineering fundamentals.
            </p>
          </div>

          <div className="relative">
            {/* Enhanced Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-emerald-400 to-amber-400 rounded-full shadow-lg"></div>

            <div className="space-y-16">
              {education.map((edu, index) => {
                const colors = getColorClasses(edu.color);
                const isLeft = edu.position === "left";
                
                return (
                  <div key={index} className="relative flex items-center group">
                    {/* Left side content */}
                    <div className={`w-1/2 ${isLeft ? "pr-12 text-right" : "pr-12"}`}>
                      {isLeft && (
                        <Card className={`bg-gradient-to-br ${colors.bg} border ${colors.border} hover:shadow-xl transition-all duration-300 hover-lift group/card`}>
                          <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-4 justify-end">
                              <div className="text-right">
                                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                                  {edu.degree}
                                </h3>
                                <Badge variant="secondary" className={`text-xs ${colors.badge}`}>
                                  {edu.status}
                                </Badge>
                              </div>
                              <div className={`${colors.timeline} p-3 rounded-xl group-hover/card:scale-110 transition-transform duration-300 shadow-lg`}>
                                <GraduationCap className="h-6 w-6 text-white" />
                              </div>
                            </div>
                            
                            <div className="space-y-3 text-right">
                              <div className="flex items-center gap-2 justify-end">
                                <span className={`${colors.institution} font-semibold`}>
                                  {edu.institution}
                                </span>
                                <MapPin className="h-4 w-4 text-gray-500" />
                              </div>
                              
                              <div className="flex items-center gap-2 justify-end">
                                <span className="text-gray-600 dark:text-gray-400 text-sm">
                                  {edu.period}
                                </span>
                                <Calendar className="h-4 w-4 text-gray-500" />
                              </div>
                              
                              {edu.grade && (
                                <div className="flex items-center gap-2 justify-end">
                                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                                    {edu.grade}
                                  </span>
                                  <Award className="h-4 w-4 text-yellow-500" />
                                </div>
                              )}
                              
                              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-3">
                                {edu.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </div>

                    {/* Enhanced Timeline dot */}
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${colors.dot} rounded-full border-4 border-white dark:border-gray-900 shadow-lg group-hover:scale-125 transition-transform duration-300 z-10`}>
                      <div className="absolute inset-1 bg-white/30 rounded-full animate-pulse"></div>
                    </div>

                    {/* Right side content */}
                    <div className={`w-1/2 ${!isLeft ? "pl-12" : "pl-12"}`}>
                      {!isLeft && (
                        <Card className={`bg-gradient-to-br ${colors.bg} border ${colors.border} hover:shadow-xl transition-all duration-300 hover-lift group/card`}>
                          <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                              <div className={`${colors.timeline} p-3 rounded-xl group-hover/card:scale-110 transition-transform duration-300 shadow-lg`}>
                                <GraduationCap className="h-6 w-6 text-white" />
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                                  {edu.degree}
                                </h3>
                                <Badge variant="secondary" className={`text-xs ${colors.badge}`}>
                                  {edu.status}
                                </Badge>
                              </div>
                            </div>
                            
                            <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-gray-500" />
                                <span className={`${colors.institution} font-semibold`}>
                                  {edu.institution}
                                </span>
                              </div>
                              
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-gray-500" />
                                <span className="text-gray-600 dark:text-gray-400 text-sm">
                                  {edu.period}
                                </span>
                              </div>
                              
                              {edu.grade && (
                                <div className="flex items-center gap-2">
                                  <Award className="h-4 w-4 text-yellow-500" />
                                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                                    {edu.grade}
                                  </span>
                                </div>
                              )}
                              
                              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-3">
                                {edu.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
