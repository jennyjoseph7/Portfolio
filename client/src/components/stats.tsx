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
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const colors = getColorClasses(stat.color);
              
              return (
                <Card key={index} className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift group">
                  <CardContent className="p-6 text-center">
                    <div className={`bg-gradient-to-r ${colors.bg} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                      {stat.number}
                    </h3>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {stat.label}
                    </p>
                    {stat.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">
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