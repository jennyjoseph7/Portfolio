import { useState } from "react";
import { Calendar, GraduationCap, Briefcase, Award, Code, ChevronRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TimelineEvent {
  id: string;
  type: "education" | "experience" | "project" | "certification";
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements?: string[];
  color: string;
  status: "completed" | "ongoing" | "upcoming";
}

export function Timeline() {
  const [filter, setFilter] = useState<string>("all");

  const timelineEvents: TimelineEvent[] = [
    {
      id: "1",
      type: "education",
      title: "Master of Computer Applications (MCA)",
      organization: "Lovely Professional University",
      period: "January 2023 - December 2025",
      description: "",
      achievements: [],
      color: "blue",
      status: "ongoing"
    },
    {
      id: "2",
      type: "experience",
      title: "Software Engineer",
      organization: "Hewlett Packard Enterprise · Internship",
      period: "November 2025 - November 2025",
      description: "",
      achievements: [],
      color: "blue",
      status: "completed"
    },
    {
      id: "3",
      type: "experience",
      title: "Software Engineer",
      organization: "JP Morgan Chase & Co · Internship",
      period: "October 2025 - October 2025",
      description: "",
      achievements: [],
      color: "emerald",
      status: "completed"
    },
    {
      id: "4",
      type: "experience",
      title: "Business Growth Analyst",
      organization: "MSsquare Technologies · Full-time",
      period: "November 2024 - January 2025",
      description: "",
      achievements: [],
      color: "purple",
      status: "completed"
    },
    {
      id: "5",
      type: "experience",
      title: "Intern",
      organization: "Corizo · Internship",
      period: "February 2024 - March 2024",
      description: "",
      achievements: [],
      color: "amber",
      status: "completed"
    },
    {
      id: "6",
      type: "project",
      title: "Mindwell",
      organization: "MCA Final Year Project",
      period: "December 2025",
      description: "",
      achievements: [],
      color: "purple",
      status: "ongoing"
    },
    {
      id: "7",
      type: "project",
      title: "Forage Midas Project",
      organization: "Associated with JP Morgan Chase & Co",
      period: "August 2025 - September 2025",
      description: "",
      achievements: [],
      color: "indigo",
      status: "completed"
    },
    {
      id: "8",
      type: "project",
      title: "Portfolio",
      organization: "Associated with Lovely Professional University",
      period: "January 2024 - November 2025",
      description: "",
      achievements: [],
      color: "blue",
      status: "completed"
    },
    {
      id: "8a",
      type: "project",
      title: "Friends Cafe",
      organization: "Personal Project",
      period: "",
      description: "Friends Cafe is structured as a complete online ordering system. Next.js with TypeScript powers the interface and routes, MySQL handles persistence, and a shared component library keeps the design consistent. A real time menu engine tracks inventory while category filters keep navigation simple. The cart recalculates totals, delivery rules, and item variations as the user edits. A direct OTP flow manages authentication and keeps sessions stable across history, tracking, and payments. An admin dashboard mirrors this clarity for menu updates, order checks, and trend views. The architecture stays predictable through REST style routes, tuned queries, reusable components, and custom hooks that isolate logic for carts and identity.",
      achievements: ["TypeScript", "JavaScript", "MySQL", "CSS", "Tailwind CSS", "Next.js"],
      color: "amber",
      status: "completed"
    },
    {
      id: "9",
      type: "education",
      title: "Bachelor of Computer Applications",
      organization: "Acharya Institute, Bangalore",
      period: "January 2020 - December 2023",
      description: "",
      achievements: [],
      color: "blue",
      status: "completed"
    },
    {
      id: "10",
      type: "education",
      title: "12th & 10th Grade",
      organization: "Kendriya Vidyalaya",
      period: "January 2017 - December 2019",
      description: "",
      achievements: [],
      color: "amber",
      status: "completed"
    },
    {
      id: "11",
      type: "experience",
      title: "Volunteer",
      organization: "Acharya - Arts and Culture",
      period: "October 2022 - June 2023",
      description: "",
      achievements: [],
      color: "purple",
      status: "completed"
    },
    // Certifications
    {
      id: "12",
      type: "certification",
      title: "AWS Solutions Architecture Job Simulation",
      organization: "Forage",
      period: "November 2025",
      description: "Completed the AWS Solutions Architecture Job Simulation Program. Designed a scalable web app architecture with Elastic Beanstalk and EC2. Set up CodePipeline for automated deployments. Used an Application Load Balancer and Auto Scaling for high availability. Worked with RDS for reliable database operations and S3 for backups. Learned how to build resilient cloud systems within real world scenarios.",
      achievements: ["System Architecture", "Technical Communication", "Cloud Cost Management"],
      color: "orange",
      status: "completed"
    },
    {
      id: "13",
      type: "certification",
      title: "Accenture UK Developer and Technology Job Simulation",
      organization: "Forage",
      period: "November 2025",
      description: "Completed Accenture Job Simulation with practical tasks in requirement analysis, software testing, and quality assurance. Applied SDLC, STLC, UML, and regression testing concepts to realistic project scenarios. Strengthened skills in test case design, documentation, process modelling, and defect understanding. Used tools and methods similar to JIRA style workflows and structured analysis to deliver clear outcomes.",
      achievements: ["Process Mapping", "Software Quality Assurance", "Code Debugging", "Agile Methodology", "SDLC", "Software Testing"],
      color: "blue",
      status: "completed"
    },
    {
      id: "14",
      type: "certification",
      title: "Citi Technology Software Development Job Simulation",
      organization: "Forage",
      period: "November 2025",
      description: "Citi Technology Software Development. Built credit risk modeling proposal for loan workflows. Developed Java service to fetch live Dow Jones data. Created JavaFX dashboard for real time stock visualization. Gained experience in financial data pipelines and market monitoring.",
      achievements: ["API Development", "Backend Development", "Frontend Development", "Java Programming", "Data Visualization", "Systems Design"],
      color: "green",
      status: "completed"
    },
    {
      id: "15",
      type: "certification",
      title: "Hewlett Packard Enterprise Software Engineering Job Simulation",
      organization: "Forage",
      period: "November 2025",
      description: "Completed Hewlett Packard Enterprise Software Engineering Virtual Experience. Built cloud ready backend features using modern Java and service oriented patterns. Applied version control, clean code practices, and modular design aligned with HPE engineering standards. Implemented data handling workflows and API driven components for scalable systems. Strengthened practical skills in enterprise level software development workflows.",
      achievements: ["API Development", "HPE GreenLake", "Spring Boot", "REST API Development", "Unit Testing"],
      color: "purple",
      status: "completed"
    },
    {
      id: "16",
      type: "certification",
      title: "J.P. Morgan Software Engineering Job Simulation",
      organization: "Forage",
      period: "October 2025",
      description: "Completed J P Morgan Software Engineering Virtual Experience focused on end to end FinTech pipelines. Built Midas Core with Kafka streaming, Spring Boot services, and H2 with JPA. Developed REST APIs and integrated an external incentive calculation service. Implemented real time transaction validation, processing, and balance queries. Gained practical exposure to high volume fintech workflows.",
      achievements: ["Spring Boot", "SQL Database", "REST APIs", "Kafka", "FinTech"],
      color: "indigo",
      status: "completed"
    },
    {
      id: "16a",
      type: "certification",
      title: "Deloitte Australia Data Analytics Job Simulation",
      organization: "Forage",
      period: "November 2025",
      description: "",
      achievements: ["Data Analysis", "Data Modeling", "Data Visualization Tools", "Spreadsheet Skills"],
      color: "cyan",
      status: "completed"
    },
    {
      id: "17",
      type: "certification",
      title: "Artificial Intelligence Analyst",
      organization: "Lovely Professional University",
      period: "May 2025",
      description: "",
      achievements: ["AI Analysis", "Machine Learning"],
      color: "purple",
      status: "completed"
    },
    {
      id: "18",
      type: "certification",
      title: "Accelerating Deep Learning with GPUs",
      organization: "Lovely Professional University",
      period: "April 2025",
      description: "",
      achievements: ["GPU Computing", "Deep Learning"],
      color: "rose",
      status: "completed"
    },
    {
      id: "19",
      type: "certification",
      title: "Big Data Architecture",
      organization: "Lovely Professional University",
      period: "April 2025",
      description: "",
      achievements: ["Big Data", "Data Architecture"],
      color: "indigo",
      status: "completed"
    },
    {
      id: "20",
      type: "certification",
      title: "Business Intelligence",
      organization: "Lovely Professional University",
      period: "January 2025",
      description: "",
      achievements: ["Business Intelligence", "Analytics"],
      color: "blue",
      status: "completed"
    },
    {
      id: "21",
      type: "certification",
      title: "Data Science 101",
      organization: "Lovely Professional University",
      period: "January 2025",
      description: "",
      achievements: ["Data Science", "Statistics"],
      color: "cyan",
      status: "completed"
    },
    {
      id: "22",
      type: "certification",
      title: "Data Visualization with Python",
      organization: "Lovely Professional University",
      period: "January 2025",
      description: "",
      achievements: ["Python", "Data Visualization"],
      color: "amber",
      status: "completed"
    },
    {
      id: "23",
      type: "certification",
      title: "Machine Learning with Python",
      organization: "Lovely Professional University",
      period: "January 2025",
      description: "",
      achievements: ["Python", "Machine Learning"],
      color: "emerald",
      status: "completed"
    },
    {
      id: "24",
      type: "certification",
      title: "Complete Ethical Hacking Bootcamp 2022: Zero to Mastery",
      organization: "Udemy",
      period: "March 2021",
      description: "",
      achievements: ["Python", "Kali Linux", "Ethical Hacking"],
      color: "red",
      status: "completed"
    }
  ];

  const filterOptions = [
    { value: "all", label: "All Events", icon: Clock },
    { value: "education", label: "Education", icon: GraduationCap },
    { value: "experience", label: "Experience", icon: Briefcase },
    { value: "project", label: "Projects", icon: Code },
    { value: "certification", label: "Certifications", icon: Award }
  ];

  const filteredEvents = filter === "all" 
    ? timelineEvents 
    : timelineEvents.filter(event => event.type === filter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "education": return GraduationCap;
      case "experience": return Briefcase;
      case "project": return Code;
      case "certification": return Award;
      default: return Calendar;
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
        border: "border-blue-200 dark:border-blue-700",
        dot: "bg-blue-500",
        icon: "bg-blue-600",
        text: "text-blue-600 dark:text-blue-400",
        badge: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
      },
      emerald: {
        bg: "from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20",
        border: "border-emerald-200 dark:border-emerald-700",
        dot: "bg-emerald-500",
        icon: "bg-emerald-600",
        text: "text-emerald-600 dark:text-emerald-400",
        badge: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300"
      },
      purple: {
        bg: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
        border: "border-purple-200 dark:border-purple-700",
        dot: "bg-purple-500",
        icon: "bg-purple-600",
        text: "text-purple-600 dark:text-purple-400",
        badge: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300"
      },
      amber: {
        bg: "from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20",
        border: "border-amber-200 dark:border-amber-700",
        dot: "bg-amber-500",
        icon: "bg-amber-600",
        text: "text-amber-600 dark:text-amber-400",
        badge: "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300"
      },
      red: {
        bg: "from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20",
        border: "border-red-200 dark:border-red-700",
        dot: "bg-red-500",
        icon: "bg-red-600",
        text: "text-red-600 dark:text-red-400",
        badge: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300"
      },
      green: {
        bg: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
        border: "border-green-200 dark:border-green-700",
        dot: "bg-green-500",
        icon: "bg-green-600",
        text: "text-green-600 dark:text-green-400",
        badge: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
      },
      indigo: {
        bg: "from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20",
        border: "border-indigo-200 dark:border-indigo-700",
        dot: "bg-indigo-500",
        icon: "bg-indigo-600",
        text: "text-indigo-600 dark:text-indigo-400",
        badge: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300"
      },
      orange: {
        bg: "from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20",
        border: "border-orange-200 dark:border-orange-700",
        dot: "bg-orange-500",
        icon: "bg-orange-600",
        text: "text-orange-600 dark:text-orange-400",
        badge: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300"
      },
      rose: {
        bg: "from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/20",
        border: "border-rose-200 dark:border-rose-700",
        dot: "bg-rose-500",
        icon: "bg-rose-600",
        text: "text-rose-600 dark:text-rose-400",
        badge: "bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ongoing":
        return <Badge className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">Ongoing</Badge>;
      case "completed":
        return <Badge className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300">Completed</Badge>;
      case "upcoming":
        return <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">Upcoming</Badge>;
      default:
        return null;
    }
  };

  return (
    <section id="timeline" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Timeline</h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filterOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <Button
                  key={option.value}
                  variant={filter === option.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(option.value)}
                  className={`flex items-center gap-2 transition-all duration-200 ${
                    filter === option.value 
                      ? "bg-blue-600 hover:bg-blue-700 text-white" 
                      : "hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  {option.label}
                </Button>
              );
            })}
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 via-emerald-400 to-purple-400 opacity-30"></div>

            <div className="space-y-8 sm:space-y-12">
              {filteredEvents.map((event, index) => {
                const IconComponent = getTypeIcon(event.type);
                const colors = getColorClasses(event.color);
                const isLeft = index % 2 === 0;

                return (
                  <div key={event.id} className="relative">
                    {/* Mobile Layout (always left-aligned) */}
                    <div className="sm:hidden">
                      <div className="flex items-start gap-4">
                        {/* Timeline dot and icon */}
                        <div className="relative flex-shrink-0">
                          <div className={`w-8 h-8 ${colors.dot} rounded-full flex items-center justify-center shadow-lg z-10 relative`}>
                            <IconComponent className="h-4 w-4 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-8">
                          <Card className={`bg-gradient-to-br ${colors.bg} border ${colors.border} hover:shadow-xl transition-all duration-300 hover-lift`}>
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between mb-3">
                                <div>
                                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">
                                    {event.title}
                                  </h3>
                                  <p className={`font-semibold ${colors.text} text-sm`}>
                                    {event.organization}
                                  </p>
                                </div>
                                {getStatusBadge(event.status)}
                              </div>

                              <div className="flex items-center gap-2 mb-4">
                                <Calendar className="h-4 w-4 text-gray-500" />
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  {event.period}
                                </span>
                              </div>

                              {event.description && (
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                  {event.description}
                                </p>
                              )}

                              {event.achievements && event.achievements.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                  {event.achievements.map((achievement, idx) => (
                                    <Badge key={idx} variant="secondary" className={`text-xs ${colors.badge}`}>
                                      {achievement}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout (alternating sides) */}
                    <div className="hidden sm:block">
                      <div className="relative flex items-center">
                        {/* Left content */}
                        <div className={`w-1/2 ${isLeft ? "pr-8 text-right" : "pr-8"}`}>
                          {isLeft && (
                            <Card className={`bg-gradient-to-br ${colors.bg} border ${colors.border} hover:shadow-xl transition-all duration-300 hover-lift`}>
                              <CardContent className="p-8">
                                <div className="flex items-start justify-between mb-4">
                                  <div className="text-right flex-1">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                                      {event.title}
                                    </h3>
                                    <p className={`font-semibold ${colors.text}`}>
                                      {event.organization}
                                    </p>
                                  </div>
                                  <div className="ml-4">
                                    {getStatusBadge(event.status)}
                                  </div>
                                </div>

                                <div className="flex items-center gap-2 justify-end mb-4">
                                  <span className="text-sm text-gray-600 dark:text-gray-400">
                                    {event.period}
                                  </span>
                                  <Calendar className="h-4 w-4 text-gray-500" />
                                </div>

                                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-right">
                                  {event.description}
                                </p>

                                {event.achievements && (
                                  <div className="flex flex-wrap gap-2 justify-end">
                                    {event.achievements.map((achievement, idx) => (
                                      <Badge key={idx} variant="secondary" className={`text-xs ${colors.badge}`}>
                                        {achievement}
                                      </Badge>
                                    ))}
                                  </div>
                                )}
                              </CardContent>
                            </Card>
                          )}
                        </div>

                        {/* Center dot */}
                        <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 ${colors.dot} rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-white dark:border-gray-900`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>

                        {/* Right content */}
                        <div className={`w-1/2 ${!isLeft ? "pl-8" : "pl-8"}`}>
                          {!isLeft && (
                            <Card className={`bg-gradient-to-br ${colors.bg} border ${colors.border} hover:shadow-xl transition-all duration-300 hover-lift`}>
                              <CardContent className="p-8">
                                <div className="flex items-start justify-between mb-4">
                                  <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                                      {event.title}
                                    </h3>
                                    <p className={`font-semibold ${colors.text}`}>
                                      {event.organization}
                                    </p>
                                  </div>
                                  <div className="ml-4">
                                    {getStatusBadge(event.status)}
                                  </div>
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                  <Calendar className="h-4 w-4 text-gray-500" />
                                  <span className="text-sm text-gray-600 dark:text-gray-400">
                                    {event.period}
                                  </span>
                                </div>

                                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                  {event.description}
                                </p>

                                {event.achievements && (
                                  <div className="flex flex-wrap gap-2">
                                    {event.achievements.map((achievement, idx) => (
                                      <Badge key={idx} variant="secondary" className={`text-xs ${colors.badge}`}>
                                        {achievement}
                                      </Badge>
                                    ))}
                                  </div>
                                )}
                              </CardContent>
                            </Card>
                          )}
                        </div>
                      </div>
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