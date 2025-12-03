import { Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jennyjosephksj7@gmail.com",
      href: "mailto:jennyjosephksj7@gmail.com",
      color: "blue"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9035937158",
      href: "tel:+919035937158",
      color: "emerald"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
                Whether you're looking for a dedicated AI engineer, DevOps enthusiast, or someone passionate about 
                ethical hacking, I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const colorClasses = {
                  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600",
                  emerald: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600"
                };

                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses[info.color as keyof typeof colorClasses]} group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                            {info.label}
                          </p>
                          {info.href === "#" ? (
                            <p className="text-gray-800 dark:text-gray-200 font-semibold">
                              {info.value}
                            </p>
                          ) : (
                            <a
                              href={info.href}
                              target={info.href.startsWith("http") ? "_blank" : undefined}
                              rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="text-gray-800 dark:text-gray-200 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                            >
                              {info.value}
                            </a>
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
      </div>
    </section>
  );
}