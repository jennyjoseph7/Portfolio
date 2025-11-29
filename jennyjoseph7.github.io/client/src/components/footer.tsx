import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/jennyjoseph7",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/jenny-joseph-k-b6a50a230",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:jennyjosephksj7@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© 2024 Jenny Joseph K. All rights reserved.</p>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  <IconComponent className="h-6 w-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
