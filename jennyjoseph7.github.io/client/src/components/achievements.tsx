import { Trophy, Award, Users, Code, Target, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Academic Excellence",
      description: "Maintained strong academic performance throughout Computer Applications program",
      details: ["76.5% in Bachelor's", "6.63 CGPA in Master's (ongoing)", "Consistent high grades in AI/ML courses"],
      color: "blue",
      date: "2020-2025"
    },
    {
      icon: Code,
      title: "Technical Project Leadership",
      description: "Led development of AI-powered Mental Health Tracker with real-world impact",
      details: ["React Native mobile app", "Python ML backend", "User authentication & data security", "Mental health assessment algorithms"],
      color: "emerald",
      date: "2024"
    },
    {
      icon: Award,
      title: "Professional Certifications",
      description: "Earned 10+ industry certifications from IBM and other leading tech companies",
      details: ["IBM AI Engineering", "IBM DevOps", "IBM Cloud", "Multiple specialized certifications"],
      color: "purple",
      date: "2023-2024"
    },
    {
      icon: Users,
      title: "Collaborative Problem Solver",
      description: "Successfully worked in team environments on complex technical projects",
      details: ["Cross-functional collaboration", "Agile development practices", "Code review participation", "Knowledge sharing"],
      color: "amber",
      date: "Ongoing"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
        icon: "bg-blue-600",
        text: "text-blue-800 dark:text-blue-300",
        badge: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
      },
      emerald: {
        bg: "from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20",
        icon: "bg-emerald-600",
        text: "text-emerald-800 dark:text-emerald-300",
        badge: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300"
      },
      purple: {
        bg: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
        icon: "bg-purple-600",
        text: "text-purple-800 dark:text-purple-300",
        badge: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300"
      },
      amber: {
        bg: "from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20",
        icon: "bg-amber-600",
        text: "text-amber-800 dark:text-amber-300",
        badge: "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Key Achievements</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Notable accomplishments that demonstrate my technical skills, academic excellence, 
              and professional growth in the tech industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              const colors = getColorClasses(achievement.color);
              
              return (
                <Card 
                  key={index} 
                  className={`bg-gradient-to-br ${colors.bg} border-0 hover:shadow-xl transition-all duration-300 hover-lift group`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`${colors.icon} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                            {achievement.title}
                          </h3>
                          <Badge variant="secondary" className={`text-xs ${colors.badge}`}>
                            <Calendar className="h-3 w-3 mr-1" />
                            {achievement.date}
                          </Badge>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {achievement.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {detail}
                          </span>
                        </div>
                      ))}
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