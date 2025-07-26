import { Users, MessageCircle, Lightbulb, CheckSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const skills = [
    { name: "Leadership", icon: Users, color: "text-blue-600" },
    { name: "Communication", icon: MessageCircle, color: "text-emerald-600" },
    { name: "Problem-solving", icon: Lightbulb, color: "text-amber-600" },
    { name: "Project Management", icon: CheckSquare, color: "text-purple-600" },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Professional developer workspace"
                className="rounded-xl shadow-lg w-full h-auto hover-lift"
              />
            </div>

            <div className="md:col-span-2 space-y-6">
              <div className="space-y-4">
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  My journey began with a Bachelor's in Computer Applications from Acharya Institute, Bangalore, 
                  where I discovered my passion for technology and problem-solving. Now pursuing my Master's at 
                  Lovely Professional University, I've immersed myself in AI, DevOps, and ethical hacking.
                </p>

                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  I've gained hands-on experience with cutting-edge tools like TensorFlow, Kali Linux, 
                  and Xcode. My goal is to build systems that solve real-world problems and make technology more accessible.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <Card key={index} className="hover-lift">
                      <CardContent className="text-center p-3">
                        <IconComponent className={`h-6 w-6 mx-auto mb-1 ${skill.color}`} />
                        <h4 className="font-medium text-sm text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </h4>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Card className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-1 text-sm">
                    Currently Seeking
                  </h4>
                  <p className="text-blue-700 dark:text-blue-400 text-sm">
                    DevOps or AI-based internships where I can apply my skills and continue learning.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
