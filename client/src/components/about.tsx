import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function About() {
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
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Profile Picture Section */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative group">
                {/* Profile Picture with Modern Design */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800 p-2">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img
                      src="/profile.jpg"
                      alt="Jenny Joseph K - Professional Portrait"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out relative z-0"
                      onError={(e) => {
                        // Fallback if image doesn't load
                        const target = e.target as HTMLImageElement;
                        target.src = '/profile.jpg?' + Date.now();
                        console.error('Profile image failed to load, retrying...');
                      }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 via-transparent to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm in my final year of MCA, starting in DevOps with a strong interest in how systems run behind the scenes. What pulled me in wasn't just the tech but the way DevOps brings development and operations together to build things that work and scale.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I've been learning by doing. Version control, CI/CD, containers, and cloud basics. These experiences taught me the value of consistency, automation, and asking the right questions when things go wrong.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm now looking for an internship or entry level role where I can keep learning, contribute to real projects, and grow with a team that's serious about building good systems.
                </p>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="h-5 w-5" />
                <span className="text-sm">Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
