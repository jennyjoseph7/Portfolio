import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Sparkles } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl border-b border-gray-200/60 dark:border-gray-800/60" 
        : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md border-b border-gray-200/40 dark:border-gray-800/40"
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollToSection("#home")}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Jenny Joseph K
              </span>
            </div>
          </div>

          {/* Right Side - Navigation and Actions */}
          <div className="flex items-center space-x-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium relative group ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 shadow-sm"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    }`}
                  >
                    {item.label}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-600 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}></div>
                  </button>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              {/* Modern Sliding Theme Toggle */}
              <div className="relative">
                <button
                  onClick={toggleTheme}
                  className={`relative w-16 h-8 rounded-full p-1 transition-all duration-300 shadow-lg hover:shadow-xl border ${
                    theme === "light"
                      ? "bg-gradient-to-r from-blue-100 to-blue-200 border-blue-200 hover:from-blue-200 hover:to-blue-300"
                      : "bg-gradient-to-r from-gray-700 to-gray-800 border-gray-600 hover:from-gray-600 hover:to-gray-700"
                  }`}
                >
                  {/* Sliding Circle */}
                  <div
                    className={`absolute top-1 w-6 h-6 rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${
                      theme === "light"
                        ? "left-1 bg-gradient-to-r from-amber-400 to-yellow-500"
                        : "left-[2.25rem] bg-gradient-to-r from-blue-500 to-indigo-600"
                    }`}
                  >
                    {theme === "light" ? (
                      <Sun className="h-3 w-3 text-white" />
                    ) : (
                      <Moon className="h-3 w-3 text-white" />
                    )}
                  </div>
                  
                  {/* Background Icons */}
                  <div className="absolute inset-0 flex items-center justify-between px-2">
                    <Sun className={`h-3 w-3 transition-opacity duration-300 ${
                      theme === "light" ? "opacity-0" : "opacity-40 text-gray-400"
                    }`} />
                    <Moon className={`h-3 w-3 transition-opacity duration-300 ${
                      theme === "light" ? "opacity-40 text-blue-600" : "opacity-0"
                    }`} />
                  </div>
                  
                  <span className="sr-only">Toggle theme</span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-10 h-10 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 border border-gray-200 dark:border-gray-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {mobileMenuOpen ? (
                  <X className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Menu className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                )}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-gray-200/50 dark:border-gray-800/50 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-2 pt-6">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium transform hover:translate-x-2 ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 shadow-sm border-l-4 border-blue-600"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    }`}
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      animationFillMode: 'both',
                      animation: `slideInLeft 0.3s ease-out ${index * 50}ms`
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
