import { Brain, Database, BarChart3, Award, Bot, Cpu, Briefcase, Building2, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Certifications() {
  const certifications = [
    // Forage Job Simulations
    {
      title: "AWS Solutions Architecture",
      provider: "Forage",
      date: "NOV 2025",
      topics: "Job Simulation • AWS Architecture",
      icon: Building2,
      bgColor: "from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      iconBg: "bg-orange-600",
      textColor: "text-orange-800 dark:text-orange-300",
      providerColor: "text-orange-700 dark:text-orange-400",
      topicsColor: "text-orange-600 dark:text-orange-400"
    },
    {
      title: "Accenture Developer & Technology",
      provider: "Forage",
      date: "NOV 2025",
      topics: "Job Simulation • Software Development",
      icon: Briefcase,
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      iconBg: "bg-blue-600",
      textColor: "text-blue-800 dark:text-blue-300",
      providerColor: "text-blue-700 dark:text-blue-400",
      topicsColor: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Citi Technology Software Development",
      provider: "Forage",
      date: "NOV 2025",
      topics: "Job Simulation • Financial Tech",
      icon: Briefcase,
      bgColor: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      borderColor: "border-green-200 dark:border-green-800",
      iconBg: "bg-green-600",
      textColor: "text-green-800 dark:text-green-300",
      providerColor: "text-green-700 dark:text-green-400",
      topicsColor: "text-green-600 dark:text-green-400"
    },
    {
      title: "HPE Software Engineering",
      provider: "Forage",
      date: "NOV 2025",
      topics: "Job Simulation • Enterprise Software",
      icon: Briefcase,
      bgColor: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      iconBg: "bg-purple-600",
      textColor: "text-purple-800 dark:text-purple-300",
      providerColor: "text-purple-700 dark:text-purple-400",
      topicsColor: "text-purple-600 dark:text-purple-400"
    },
    {
      title: "JP Morgan Software Engineering",
      provider: "Forage",
      date: "OCT 2025",
      topics: "Job Simulation • FinTech",
      icon: Briefcase,
      bgColor: "from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-800",
      iconBg: "bg-indigo-600",
      textColor: "text-indigo-800 dark:text-indigo-300",
      providerColor: "text-indigo-700 dark:text-indigo-400",
      topicsColor: "text-indigo-600 dark:text-indigo-400"
    },
    // LPU Certifications
    {
      title: "Artificial Intelligence Analyst",
      provider: "Lovely Professional University",
      date: "MAY 2025",
      topics: "AI Analysis • Machine Learning",
      icon: Brain,
      bgColor: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      iconBg: "bg-purple-600",
      textColor: "text-purple-800 dark:text-purple-300",
      providerColor: "text-purple-700 dark:text-purple-400",
      topicsColor: "text-purple-600 dark:text-purple-400"
    },
    {
      title: "Accelerating Deep Learning with GPUs",
      provider: "Lovely Professional University",
      date: "APR 2025",
      topics: "GPU Computing • Deep Learning",
      icon: Cpu,
      bgColor: "from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20",
      borderColor: "border-rose-200 dark:border-rose-800",
      iconBg: "bg-rose-600",
      textColor: "text-rose-800 dark:text-rose-300",
      providerColor: "text-rose-700 dark:text-rose-400",
      topicsColor: "text-rose-600 dark:text-rose-400"
    },
    {
      title: "Big Data Architecture",
      provider: "Lovely Professional University",
      date: "APR 2025",
      topics: "Big Data • Data Architecture",
      icon: Database,
      bgColor: "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-800",
      iconBg: "bg-indigo-600",
      textColor: "text-indigo-800 dark:text-indigo-300",
      providerColor: "text-indigo-700 dark:text-indigo-400",
      topicsColor: "text-indigo-600 dark:text-indigo-400"
    },
    {
      title: "Business Intelligence",
      provider: "Lovely Professional University",
      date: "JAN 2025",
      topics: "Business Intelligence • Analytics",
      icon: BarChart3,
      bgColor: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      iconBg: "bg-blue-600",
      textColor: "text-blue-800 dark:text-blue-300",
      providerColor: "text-blue-700 dark:text-blue-400",
      topicsColor: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Data Science 101",
      provider: "Lovely Professional University",
      date: "JAN 2025",
      topics: "Data Science • Statistics",
      icon: Database,
      bgColor: "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20",
      borderColor: "border-cyan-200 dark:border-cyan-800",
      iconBg: "bg-cyan-600",
      textColor: "text-cyan-800 dark:text-cyan-300",
      providerColor: "text-cyan-700 dark:text-cyan-400",
      topicsColor: "text-cyan-600 dark:text-cyan-400"
    },
    {
      title: "Data Visualization with Python",
      provider: "Lovely Professional University",
      date: "JAN 2025",
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
      title: "Machine Learning with Python",
      provider: "Lovely Professional University",
      date: "JAN 2025",
      topics: "Machine Learning • Python",
      icon: Bot,
      bgColor: "from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      iconBg: "bg-emerald-600",
      textColor: "text-emerald-800 dark:text-emerald-300",
      providerColor: "text-emerald-700 dark:text-emerald-400",
      topicsColor: "text-emerald-600 dark:text-emerald-400"
    },
    // Other Certifications
    {
      title: "Complete Ethical Hacking Bootcamp",
      provider: "Udemy",
      date: "MAR 2021",
      topics: "Ethical Hacking • Cybersecurity",
      icon: Shield,
      bgColor: "from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20",
      borderColor: "border-red-200 dark:border-red-800",
      iconBg: "bg-red-600",
      textColor: "text-red-800 dark:text-red-300",
      providerColor: "text-red-700 dark:text-red-400",
      topicsColor: "text-red-600 dark:text-red-400"
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
