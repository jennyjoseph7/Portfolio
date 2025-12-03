import { Code, Award, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Stats() {
  const stats = [
    {
      icon: Code,
      number: "14",
      label: "Certifications",
      description: "",
      color: "blue"
    },
    {
      icon: Users,
      number: "4",
      label: "Projects",
      description: "",
      color: "emerald"
    },
    {
      icon: Clock,
      number: "4",
      label: "Internships",
      description: "",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-500 to-blue-600",
        icon: "text-blue-600"
      },
      emerald: {
        bg: "from-emerald-500 to-emerald-600",
        icon: "text-emerald-600"
      },
      purple: {
        bg: "from-purple-500 to-purple-600",
        icon: "text-purple-600"
      },
      amber: {
        bg: "from-amber-500 to-amber-600",
        icon: "text-amber-600"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-3">
              Key Highlights
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A snapshot of my professional journey and achievements
            </p>
          </div>

          {/* Stats Grid - Centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 w-full max-w-4xl">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                const colors = getColorClasses(stat.color);
                
                return (
                  <Card 
                    key={index} 
                    className="bg-white dark:bg-gray-800 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift group overflow-hidden relative transform hover:-translate-y-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Animated gradient border */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${colors.bg} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg`}></div>
                    
                    {/* Top accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${colors.bg}`}></div>
                    
                    <CardContent className="p-8 text-center relative z-10">
                      {/* Icon with animated background */}
                      <div className="relative mb-6">
                        <div className={`bg-gradient-to-r ${colors.bg} w-24 h-24 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                          <IconComponent className="h-12 w-12 text-white" />
                        </div>
                        {/* Glow effect on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${colors.bg} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                      </div>
                      
                      {/* Number with gradient */}
                      <h3 className="text-5xl md:text-6xl font-extrabold mb-3 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                        {stat.number}
                      </h3>
                      
                      {/* Label */}
                      <p className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                        {stat.label}
                      </p>
                      
                      {stat.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          {stat.description}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}