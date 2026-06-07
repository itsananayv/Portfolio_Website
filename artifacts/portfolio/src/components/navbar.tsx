import { useState, useEffect } from "react";
import { Moon, Sun, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";

export function Navbar({ activeSection }: { activeSection: string }) {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-5xl flex items-center justify-between">
        {/* Left Side: Brand Name in Display font */}
        <a
          href="#hero"
          onClick={(e) => scrollTo(e, "#hero")}
          className="text-2xl font-display uppercase tracking-wider text-foreground hover:opacity-80 transition-opacity"
        >
          ANANAY VERMA
        </a>

        {/* Center / Right side links */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6 font-sans text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`transition-all duration-200 hover:text-foreground relative pb-1 ${
                    activeSection === link.href.substring(1)
                      ? "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-foreground"
                      : ""
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block h-4 w-px bg-border"></div>

          {/* Resume Link & Theme Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-mono font-medium hover:opacity-90 transition-opacity animate-fade-in"
            >
              Resume
              <Download className="h-3 w-3" />
            </a>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full w-8 h-8 text-foreground hover:bg-secondary"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
