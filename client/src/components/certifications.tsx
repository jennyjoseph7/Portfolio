import { Shield, Code2, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Certifications() {
  const certifications = [
    {
      title: "Complete Ethical Hacking Bootcamp using Kali Linux",
      provider: "Udemy",
      topics: "Cybersecurity • Penetration Testing",
      icon: Shield,
      bgColor: "from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20",
      borderColor: "border-red-200 dark:border-red-800",
      iconBg: "bg-red-600",
      textColor: "text-red-800 dark:text-red-300",
      providerColor: "text-red-700 dark:text-red-400",
      topicsColor: "text-red-600 dark:text-red-400"
    },
    {
      title: "Python, Data Science and Machine Learning",
      provider: "CipherSchools",
      topics: "Python • Data Science • ML",
      icon: Code2,
      bgColor: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      iconBg: "bg-blue-600",
      textColor: "text-blue-800 dark:text-blue-300",
      providerColor: "text-blue-700 dark:text-blue-400",
      topicsColor: "text-blue-600 dark:text-blue-400"
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Certifications</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <Card 
                  key={index} 
                  className={`bg-gradient-to-br ${cert.bgColor} border ${cert.borderColor} hover:shadow-lg transition-all duration-300 hover-lift`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`${cert.iconBg} p-3 rounded-lg`}>
                        <IconComponent className="text-white h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold ${cert.textColor} mb-2`}>
                          {cert.title}
                        </h3>
                        <p className={`${cert.providerColor} text-sm mb-2`}>
                          {cert.provider}
                        </p>
                        <div className={`flex items-center gap-2 ${cert.topicsColor}`}>
                          <Award className="h-4 w-4" />
                          <span className="text-sm">{cert.topics}</span>
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
