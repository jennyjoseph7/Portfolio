import { Brain, Database, BarChart3, Award, Bot, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Certifications() {
  const certifications = [
    {
      title: "Business Intelligence",
      provider: "IBM",
      date: "MAY 2025",
      topics: "Data Analytics • Business Intelligence",
      icon: BarChart3,
      bgColor: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      iconBg: "bg-blue-600",
      textColor: "text-blue-800 dark:text-blue-300",
      providerColor: "text-blue-700 dark:text-blue-400",
      topicsColor: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Deep Learning",
      provider: "IBM",
      date: "APR 2025",
      topics: "Neural Networks • Deep Learning",
      icon: Brain,
      bgColor: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      iconBg: "bg-purple-600",
      textColor: "text-purple-800 dark:text-purple-300",
      providerColor: "text-purple-700 dark:text-purple-400",
      topicsColor: "text-purple-600 dark:text-purple-400"
    },
    {
      title: "Machine Learning",
      provider: "IBM",
      date: "MAR 2025",
      topics: "ML Algorithms • Model Training",
      icon: Bot,
      bgColor: "from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      iconBg: "bg-emerald-600",
      textColor: "text-emerald-800 dark:text-emerald-300",
      providerColor: "text-emerald-700 dark:text-emerald-400",
      topicsColor: "text-emerald-600 dark:text-emerald-400"
    },
    {
      title: "Data Visualization with Python",
      provider: "IBM",
      date: "MAR 2025",
      topics: "Python • Data Visualization",
      icon: BarChart3,
      bgColor: "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20",
      borderColor: "border-amber-200 dark:border-amber-800",
      iconBg: "bg-amber-600",
      textColor: "text-amber-800 dark:text-amber-300",
      providerColor: "text-amber-700 dark:text-amber-400",
      topicsColor: "text-amber-600 dark:text-amber-400"
    },
    {
      title: "Data Science",
      provider: "IBM",
      date: "FEB 2025",
      topics: "Data Analysis • Statistics",
      icon: Database,
      bgColor: "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20",
      borderColor: "border-cyan-200 dark:border-cyan-800",
      iconBg: "bg-cyan-600",
      textColor: "text-cyan-800 dark:text-cyan-300",
      providerColor: "text-cyan-700 dark:text-cyan-400",
      topicsColor: "text-cyan-600 dark:text-cyan-400"
    },
    {
      title: "Accelerating Deep Learning with GPU's",
      provider: "IBM",
      date: "FEB 2025",
      topics: "GPU Computing • Performance",
      icon: Cpu,
      bgColor: "from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20",
      borderColor: "border-rose-200 dark:border-rose-800",
      iconBg: "bg-rose-600",
      textColor: "text-rose-800 dark:text-rose-300",
      providerColor: "text-rose-700 dark:text-rose-400",
      topicsColor: "text-rose-600 dark:text-rose-400"
    },
    {
      title: "Big Data",
      provider: "Cognitiveclass.ai (IBM)",
      date: "OCT 2024",
      topics: "Big Data • Analytics",
      icon: Database,
      bgColor: "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-800",
      iconBg: "bg-indigo-600",
      textColor: "text-indigo-800 dark:text-indigo-300",
      providerColor: "text-indigo-700 dark:text-indigo-400",
      topicsColor: "text-indigo-600 dark:text-indigo-400"
    },
    {
      title: "Deep Learning Fundamentals",
      provider: "Cognitiveclass.ai (IBM)",
      date: "SEP 2024",
      topics: "Neural Networks • TensorFlow",
      icon: Brain,
      bgColor: "from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20",
      borderColor: "border-teal-200 dark:border-teal-800",
      iconBg: "bg-teal-600",
      textColor: "text-teal-800 dark:text-teal-300",
      providerColor: "text-teal-700 dark:text-teal-400",
      topicsColor: "text-teal-600 dark:text-teal-400"
    },
    {
      title: "Artificial Intelligence",
      provider: "Vidhyashala",
      date: "JUL 2024",
      topics: "AI Fundamentals • Applications",
      icon: Bot,
      bgColor: "from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20",
      borderColor: "border-violet-200 dark:border-violet-800",
      iconBg: "bg-violet-600",
      textColor: "text-violet-800 dark:text-violet-300",
      providerColor: "text-violet-700 dark:text-violet-400",
      topicsColor: "text-violet-600 dark:text-violet-400"
    },
    {
      title: "CipherSchool ML Developer",
      provider: "CipherSchool",
      date: "JUL 2024",
      topics: "Machine Learning • Development",
      icon: Bot,
      bgColor: "from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20",
      borderColor: "border-slate-200 dark:border-slate-800",
      iconBg: "bg-slate-600",
      textColor: "text-slate-800 dark:text-slate-300",
      providerColor: "text-slate-700 dark:text-slate-400",
      topicsColor: "text-slate-600 dark:text-slate-400"
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Certifications</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <Card 
                  key={index} 
                  className={`bg-gradient-to-br ${cert.bgColor} border ${cert.borderColor} hover:shadow-xl transition-all duration-300 hover-lift group`}
                >
                  <CardContent className="p-5">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className={`${cert.iconBg} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="text-white h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-sm font-semibold ${cert.textColor} mb-1 leading-tight`}>
                          {cert.title}
                        </h3>
                        <p className={`${cert.providerColor} text-xs mb-2 font-medium`}>
                          {cert.provider}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                          {cert.date}
                        </p>
                        <div className={`flex items-center justify-center gap-1 ${cert.topicsColor}`}>
                          <Award className="h-3 w-3" />
                          <span className="text-xs">{cert.topics}</span>
                        </div>
                      </div>
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
