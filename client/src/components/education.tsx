import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Education() {
  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "Lovely Professional University, Punjab",
      period: "Aug 2023 – 2025",
      grade: "CGPA: 6.63",
      color: "blue",
      position: "left"
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "Acharya Institute, Bangalore",
      period: "2020 – 2023",
      grade: "76.5%",
      color: "emerald",
      position: "right"
    },
    {
      degree: "12th & 10th Grade",
      institution: "Kendriya Vidyalaya Rail Wheel Factory, Bangalore",
      period: "2017 – 2019",
      grade: "",
      color: "amber",
      position: "left"
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          institution: "text-blue-600 dark:text-blue-400",
          dot: "bg-blue-600",
        };
      case "emerald":
        return {
          institution: "text-emerald-600 dark:text-emerald-400",
          dot: "bg-emerald-600",
        };
      case "amber":
        return {
          institution: "text-amber-600 dark:text-amber-400",
          dot: "bg-amber-600",
        };
      default:
        return {
          institution: "text-gray-600 dark:text-gray-400",
          dot: "bg-gray-600",
        };
    }
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Education</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-800"></div>

            <div className="space-y-12">
              {education.map((edu, index) => {
                const colors = getColorClasses(edu.color);
                const isLeft = edu.position === "left";
                
                return (
                  <div key={index} className="relative flex items-center">
                    {/* Left side content */}
                    <div className={`w-1/2 ${isLeft ? "pr-8 text-right" : "pr-8"}`}>
                      {isLeft && (
                        <Card className="hover-lift">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-3 justify-end">
                              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                {edu.degree}
                              </h3>
                              <GraduationCap className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                            </div>
                            <p className={`${colors.institution} font-medium mb-2`}>
                              {edu.institution}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                              {edu.period}
                            </p>
                            {edu.grade && (
                              <p className="text-gray-700 dark:text-gray-300">
                                {edu.grade}
                              </p>
                            )}
                          </CardContent>
                        </Card>
                      )}
                    </div>

                    {/* Timeline dot */}
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${colors.dot} rounded-full border-4 border-white dark:border-gray-900`}></div>

                    {/* Right side content */}
                    <div className={`w-1/2 ${!isLeft ? "pl-8" : "pl-8"}`}>
                      {!isLeft && (
                        <Card className="hover-lift">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <GraduationCap className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                {edu.degree}
                              </h3>
                            </div>
                            <p className={`${colors.institution} font-medium mb-2`}>
                              {edu.institution}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                              {edu.period}
                            </p>
                            {edu.grade && (
                              <p className="text-gray-700 dark:text-gray-300">
                                {edu.grade}
                              </p>
                            )}
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
