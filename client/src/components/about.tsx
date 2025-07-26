import { MapPin, GraduationCap, Target, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education Journey",
      description: "Master's in Computer Applications at LPU, Bachelor's from Acharya Institute",
      color: "blue"
    },
    {
      icon: Target,
      title: "Specializations",
      description: "AI/ML, DevOps, Ethical Hacking, Mobile Development",
      color: "emerald"
    },
    {
      icon: Sparkles,
      title: "Core Strengths",
      description: "Problem-solving, Continuous Learning, System Architecture",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900/30",
        icon: "text-blue-600",
        text: "text-blue-800 dark:text-blue-300"
      },
      emerald: {
        bg: "bg-emerald-100 dark:bg-emerald-900/30",
        icon: "text-emerald-600",
        text: "text-emerald-800 dark:text-emerald-300"
      },
      purple: {
        bg: "bg-purple-100 dark:bg-purple-900/30",
        icon: "text-purple-600",
        text: "text-purple-800 dark:text-purple-300"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A passionate technologist on a mission to bridge AI innovation with practical solutions, 
              currently expanding into DevOps and cybersecurity domains.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-12">
            {/* Profile Picture Section */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative group">
                {/* Profile Picture with Modern Design */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800 p-2">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
                      alt="Jenny Joseph K - Professional Portrait"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 via-transparent to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  My journey began with a Bachelor's in Computer Applications from Acharya Institute, Bangalore, 
                  where I discovered my passion for technology and problem-solving. Now pursuing my Master's at 
                  Lovely Professional University, I've immersed myself in the world of <span className="font-semibold text-blue-600 dark:text-blue-400">AI, DevOps, and ethical hacking</span>.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  What drives me is the ability to <span className="font-semibold text-emerald-600 dark:text-emerald-400">adapt and learn continuously</span>. 
                  I've gained hands-on experience with cutting-edge tools like TensorFlow for machine learning, 
                  Kali Linux for cybersecurity, and React Native for mobile development. My goal is to build 
                  systems that solve real-world problems and make technology more accessible.
                </p>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="h-5 w-5" />
                <span className="text-sm">Punjab, India</span>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              const colors = getColorClasses(highlight.color);
              
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift group">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className={`${colors.bg} w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-6 w-6 sm:h-8 sm:w-8 ${colors.icon}`} />
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm sm:text-base">
                      {highlight.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Currently Seeking Card */}
          <Card className="bg-gradient-to-r from-blue-50 via-emerald-50 to-purple-50 dark:from-blue-900/20 dark:via-emerald-900/20 dark:to-purple-900/20 border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Target className="h-6 w-6 text-blue-600" />
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Currently Seeking
                </h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
                DevOps or AI-based internships where I can apply my skills and continue learning 
                in a dynamic, innovative environment.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                  DevOps Engineering
                </Badge>
                <Badge variant="secondary" className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300">
                  AI/ML Development
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300">
                  Software Engineering
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
