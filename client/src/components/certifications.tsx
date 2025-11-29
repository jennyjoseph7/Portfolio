import { Brain, Database, BarChart3, Award, Bot, Cpu, Briefcase, Building2, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Certifications() {
  const certifications = [
    // Forage Job Simulations
    {
      title: "AWS Solutions Architecture Job Simulation",
      provider: "Forage",
      date: "NOV 2025",
      credentialId: "gcxSCmZjiBX9J4iDB",
      topics: "System Architecture • Technical Communication • Cloud Cost Management",
      description: "Completed the AWS Solutions Architecture Job Simulation Program. Designed a scalable web app architecture with Elastic Beanstalk and EC2. Set up CodePipeline for automated deployments. Used an Application Load Balancer and Auto Scaling for high availability. Worked with RDS for reliable database operations and S3 for backups. Learned how to build resilient cloud systems within real world scenarios.",
      icon: Building2,
      bgColor: "from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      iconBg: "bg-orange-600",
      textColor: "text-orange-800 dark:text-orange-300",
      providerColor: "text-orange-700 dark:text-orange-400",
      topicsColor: "text-orange-600 dark:text-orange-400"
    },
    {
      title: "Accenture UK Developer and Technology Job Simulation",
      provider: "Forage",
      date: "NOV 2025",
      credentialId: "aCPLzRwHp9ue5TTzZ",
      topics: "Process Mapping • Software Quality Assurance • Code Debugging • Agile Methodology • Trend Analysis • Comparative Analysis • Software Development Life Cycle (SDLC) • Algorithmic Thinking • Waterfall Methodology • Software Testing",
      description: "Completed Accenture Job Simulation with practical tasks in requirement analysis, software testing, and quality assurance. Applied SDLC, STLC, UML, and regression testing concepts to realistic project scenarios. Strengthened skills in test case design, documentation, process modelling, and defect understanding. Used tools and methods similar to JIRA style workflows and structured analysis to deliver clear outcomes.",
      icon: Briefcase,
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      iconBg: "bg-blue-600",
      textColor: "text-blue-800 dark:text-blue-300",
      providerColor: "text-blue-700 dark:text-blue-400",
      topicsColor: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Citi Technology Software Development Job Simulation",
      provider: "Forage",
      date: "NOV 2025",
      credentialId: "g7mqmfQsYdGxTBEmC",
      topics: "Process Mapping • API Development • Backend Development • Frontend Development • Risk Assessment • Java Programming • Data Visualization • Systems Design • Machine Learning",
      description: "Citi Technology Software Development. Built credit risk modeling proposal for loan workflows. Developed Java service to fetch live Dow Jones data. Created JavaFX dashboard for real time stock visualization. Gained experience in financial data pipelines and market monitoring.",
      icon: Briefcase,
      bgColor: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      borderColor: "border-green-200 dark:border-green-800",
      iconBg: "bg-green-600",
      textColor: "text-green-800 dark:text-green-300",
      providerColor: "text-green-700 dark:text-green-400",
      topicsColor: "text-green-600 dark:text-green-400"
    },
    {
      title: "Hewlett Packard Enterprise Software Engineering Job Simulation",
      provider: "Forage",
      date: "NOV 2025",
      credentialId: "AumWaunaaxPnFjzKP",
      topics: "API Development • HPE GreenLake • Spring Boot • Hypertext Transfer Protocol (HTTP) • Test Frameworks • REST API Development • Unit Testing",
      description: "Completed Hewlett Packard Enterprise Software Engineering Virtual Experience. Built cloud ready backend features using modern Java and service oriented patterns. Applied version control, clean code practices, and modular design aligned with HPE engineering standards. Implemented data handling workflows and API driven components for scalable systems. Strengthened practical skills in enterprise level software development workflows.",
      icon: Briefcase,
      bgColor: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      iconBg: "bg-purple-600",
      textColor: "text-purple-800 dark:text-purple-300",
      providerColor: "text-purple-700 dark:text-purple-400",
      topicsColor: "text-purple-600 dark:text-purple-400"
    },
    {
      title: "J.P. Morgan Software Engineering Job Simulation",
      provider: "Forage",
      date: "OCT 2025",
      credentialId: "DB2mjnppmW6SjLHrd",
      topics: "Spring Boot • SQL Database • REST APIs",
      description: "Completed J P Morgan Software Engineering Virtual Experience focused on end to end FinTech pipelines. Built Midas Core with Kafka streaming, Spring Boot services, and H2 with JPA. Developed REST APIs and integrated an external incentive calculation service. Implemented real time transaction validation, processing, and balance queries. Gained practical exposure to high volume fintech workflows.",
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
      credentialId: "823403de950f4b8d9ddb6ad7a9f11f44",
      topics: "AI Analysis • Machine Learning",
      description: "",
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
      credentialId: "d18c1a43ddda4d84b160295f910e5767",
      topics: "GPU Computing • Deep Learning",
      description: "",
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
      credentialId: "86bae01228884b76bcfefdc7f2b8c556",
      topics: "Big Data • Data Architecture",
      description: "",
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
      credentialId: "fb023c4ff2834598a53151ae777ee193",
      topics: "Business Intelligence • Analytics",
      description: "",
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
      credentialId: "7fbe1a9b59d441b399229919a0c12378",
      topics: "Data Science • Statistics",
      description: "",
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
      credentialId: "743b6dec2daf41c5a2e7cc0978dbf1e6",
      topics: "Python (Programming Language) • Data Visualization",
      description: "",
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
      credentialId: "13b5930351d343b5a68f227d570ca95c",
      topics: "Python (Programming Language) • Machine Learning",
      description: "",
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
      title: "Complete Ethical Hacking Bootcamp 2022: Zero to Mastery",
      provider: "Udemy",
      date: "MAR 2021",
      credentialId: "UC-2ead7398-54eb-4373-b6fc-7f6626056d91",
      topics: "Python (Programming Language) • Kali Linux",
      description: "",
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
                        <div className={`flex items-center justify-center gap-1 ${cert.topicsColor} mb-2`}>
                          <Award className="h-3 w-3" />
                          <span className="text-xs text-center">{cert.topics}</span>
                        </div>
                        {cert.description && (
                          <p className="text-xs text-gray-600 dark:text-gray-500 mt-2 leading-relaxed line-clamp-3">
                            {cert.description}
                          </p>
                        )}
                        {cert.credentialId && (
                          <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">
                            ID: {cert.credentialId}
                          </p>
                        )}
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
