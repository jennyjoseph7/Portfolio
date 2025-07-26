import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Picture Section */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Profile Picture with Modern Design */}
                <div className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
                    alt="Jenny Joseph K - Professional Portrait"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-emerald-600 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  My journey began with a Bachelor's in Computer Applications from Acharya Institute, Bangalore, 
                  where I discovered my passion for technology and problem-solving. Now pursuing my Master's at 
                  Lovely Professional University, I've immersed myself in the world of AI, DevOps, and ethical hacking.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  What drives me is the ability to adapt and learn continuously. I've gained hands-on experience 
                  with cutting-edge tools like TensorFlow for machine learning, Kali Linux for cybersecurity, 
                  and Xcode for mobile development. My goal is to build systems that solve real-world problems 
                  and make technology more accessible.
                </p>
              </div>

              <Card className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 border-l-4 border-blue-600">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                    Currently Seeking
                  </h4>
                  <p className="text-blue-700 dark:text-blue-400">
                    DevOps or AI-based internships where I can apply my skills and continue learning 
                    in a dynamic environment.
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
