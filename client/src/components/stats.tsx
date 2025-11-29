import { Code, Award, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Stats() {
  const stats = [
    {
      icon: Code,
      number: "13",
      label: "Certifications",
      description: "",
      color: "blue"
    },
    {
      icon: Users,
      number: "3",
      label: "Projects",
      description: "",
      color: "emerald"
    },
    {
      icon: Clock,
      number: "4",
      label: "Experiences",
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
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const colors = getColorClasses(stat.color);
              
              return (
                <Card key={index} className="bg-white dark:bg-gray-800 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift group overflow-hidden relative">
                  {/* Decorative gradient overlay */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <CardContent className="p-8 text-center">
                    <div className={`bg-gradient-to-r ${colors.bg} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-2 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                      {stat.number}
                    </h3>
                    <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
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
    </section>
  );
}