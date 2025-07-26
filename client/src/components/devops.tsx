import { 
  GitBranch, 
  Server, 
  Cloud, 
  Monitor, 
  Shield, 
  Code2,
  Settings,
  Container
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function DevOps() {
  const devopsCategories = [
    {
      title: "CI/CD & Automation",
      icon: Settings,
      color: "blue",
      tools: ["Jenkins", "GitHub Actions"],
      progress: 75
    },
    {
      title: "Containers & Orchestration", 
      icon: Container,
      color: "emerald",
      tools: ["Docker", "Kubernetes"],
      progress: 70
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "purple",
      tools: ["AWS", "Terraform", "Ansible"],
      progress: 65
    },
    {
      title: "Monitoring & Observability",
      icon: Monitor,
      color: "amber",
      tools: ["Prometheus", "Grafana"],
      progress: 60
    },
    {
      title: "Security & GitOps",
      icon: Shield,
      color: "rose",
      tools: ["DevSecOps practices", "GitOps"],
      progress: 55
    },
    {
      title: "Version Control & Scripting",
      icon: GitBranch,
      color: "cyan",
      tools: ["Git", "Linux Shell Scripting (Bash)"],
      progress: 85
    }
  ];

  const programmingLanguages = [
    { name: "Python", level: 90, color: "bg-blue-500" },
    { name: "Java", level: 85, color: "bg-orange-500" },
    { name: "Swift", level: 75, color: "bg-red-500" },
    { name: "Shell Scripting", level: 80, color: "bg-green-500" }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
        border: "border-blue-200 dark:border-blue-800",
        icon: "bg-blue-600",
        text: "text-blue-800 dark:text-blue-300",
        badge: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
      },
      emerald: {
        bg: "from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20",
        border: "border-emerald-200 dark:border-emerald-800",
        icon: "bg-emerald-600",
        text: "text-emerald-800 dark:text-emerald-300",
        badge: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300"
      },
      purple: {
        bg: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
        border: "border-purple-200 dark:border-purple-800",
        icon: "bg-purple-600",
        text: "text-purple-800 dark:text-purple-300",
        badge: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300"
      },
      amber: {
        bg: "from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20",
        border: "border-amber-200 dark:border-amber-800",
        icon: "bg-amber-600",
        text: "text-amber-800 dark:text-amber-300",
        badge: "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300"
      },
      rose: {
        bg: "from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/20",
        border: "border-rose-200 dark:border-rose-800",
        icon: "bg-rose-600",
        text: "text-rose-800 dark:text-rose-300",
        badge: "bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300"
      },
      cyan: {
        bg: "from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20",
        border: "border-cyan-200 dark:border-cyan-800",
        icon: "bg-cyan-600",
        text: "text-cyan-800 dark:text-cyan-300",
        badge: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="devops" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">DevOps Learning Journey</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Currently expanding expertise in DevOps practices, cloud technologies, and infrastructure automation 
              to build scalable and reliable systems.
            </p>
          </div>

          {/* DevOps Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {devopsCategories.map((category, index) => {
              const IconComponent = category.icon;
              const colors = getColorClasses(category.color);
              
              return (
                <Card 
                  key={index} 
                  className={`bg-gradient-to-br ${colors.bg} border-0 hover:shadow-xl transition-all duration-300 hover-lift`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`${colors.icon} p-2 rounded-lg`}>
                        <IconComponent className="text-white h-5 w-5" />
                      </div>
                      <CardTitle className={`text-base ${colors.text}`}>
                        {category.title}
                      </CardTitle>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Progress</span>
                        <span className="text-gray-600 dark:text-gray-400">{category.progress}%</span>
                      </div>
                      <Progress value={category.progress} className="h-2" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, toolIndex) => (
                        <Badge 
                          key={toolIndex} 
                          variant="secondary" 
                          className={`text-xs ${colors.badge}`}
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Programming Languages for DevOps */}
          <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-indigo-600 p-3 rounded-lg">
                  <Code2 className="text-white h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Programming Languages</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {programmingLanguages.map((lang, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800 dark:text-gray-200">{lang.name}</span>
                      <span className="text-sm text-gray-500">{lang.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`${lang.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${lang.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}