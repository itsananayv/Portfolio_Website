import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { useActiveSection } from "@/hooks/use-active-section";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowRight,
  ExternalLink,
  Code2,
  Terminal,
  Database,
  Layout,
  Award,
  Users,
  MapPin
} from "lucide-react";
import { 
  SiJavascript, 
  SiPython, 
  SiHtml5, 
  SiGit, 
  SiGithub 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
} as const;

export default function Home() {
  const activeSection = useActiveSection([
    "hero", "projects", "about", "skills", "contact"
  ]);
  const { toast } = useToast();

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: `${label} has been copied to your clipboard.`,
    });
  };

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/20 transition-colors duration-300">
      <Navbar activeSection={activeSection} />

      <main className="pt-20">
        {/* HERO SECTION */}
        <section 
          id="hero" 
          className="relative min-h-[90dvh] flex items-center py-12 px-6 border-b border-border"
        >
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Rotated Sidebar Title */}
              <div className="md:col-span-2 shrink-0 md:flex md:justify-start">
                <span className="md:writing-vertical md:rotate-180 md:sticky md:top-28 text-xs font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground select-none block mb-4 md:mb-0">
                  ANANAY V.
                </span>
              </div>
              
              {/* Hero Content */}
              <div className="md:col-span-10">
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="flex flex-col text-left"
                >
                  <motion.div variants={fadeInUp} className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 border border-border text-xs font-mono font-medium max-w-fit">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Available for internships
                  </motion.div>
                  
                  <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-wide uppercase leading-none text-foreground mb-6">
                    HEY THERE,<br />
                    I'M ANANAY.
                  </motion.h1>
                  
                  <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-serif italic text-muted-foreground leading-relaxed mb-10 max-w-2xl">
                    A Computer Science student who turns complex logic into clean, functional applications.
                  </motion.p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-border pt-8">
                    {/* Left details info */}
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-sm leading-relaxed text-muted-foreground max-w-md">
                        Detail-oriented developer passionate about problem-solving, clean code, and building practical applications that make an impact. Specializing in software engineering, I combine programming practices with community actions as the Social Media Head at GDG On Campus.
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4 pt-4">
                        <Button size="lg" onClick={() => scrollTo("#projects")} className="h-12 px-8 rounded-full font-sans shadow-sm">
                          View My Work <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button size="lg" variant="outline" onClick={() => scrollTo("#contact")} className="h-12 px-8 rounded-full font-sans">
                          Collaborate
                        </Button>
                      </div>
                    </div>

                    {/* Right cropped portrait */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                      <div className="relative group w-full max-w-[260px]">
                        <div className="absolute -inset-1 rounded-2xl bg-foreground/5 opacity-50 blur"></div>
                        <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-border bg-card shadow-md">
                          <img 
                            src="/profile.jpg" 
                            alt="Ananay Verma" 
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                            loading="eager"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* SELECTED PROJECTS SECTION */}
        <section id="projects" className="py-20 border-b border-border">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Rotated Sidebar Title */}
              <div className="md:col-span-2 shrink-0 md:flex md:justify-start">
                <span className="md:writing-vertical md:rotate-180 md:sticky md:top-28 text-xs font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground select-none block mb-4 md:mb-0">
                  SELECTED WORK
                </span>
              </div>
              
              {/* Content */}
              <div className="md:col-span-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Project 1 */}
                  <div className="group border border-border bg-card rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between transition-colors duration-250 hover:border-foreground/20">
                    <div className="relative aspect-video border-b border-border bg-secondary/35 flex items-center justify-center">
                      <div className="absolute inset-0 bg-grid-white/[0.01] bg-[length:16px_16px]"></div>
                      <Terminal className="w-12 h-12 text-muted-foreground opacity-30 group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-sans font-bold text-foreground mb-2">Student Management System</h3>
                        <p className="text-muted-foreground text-sm font-serif leading-relaxed mb-6">
                          A robust console-based application designed to manage student records. Engineered leveraging core OOP concepts to support add, view, and delete operations safely and efficiently.
                        </p>
                      </div>
                      <div>
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                          <span className="px-2.5 py-0.5 border border-border bg-background rounded-full text-[10px] font-mono text-muted-foreground">Core Java</span>
                          <span className="px-2.5 py-0.5 border border-border bg-background rounded-full text-[10px] font-mono text-muted-foreground">OOP</span>
                          <span className="px-2.5 py-0.5 border border-border bg-background rounded-full text-[10px] font-mono text-muted-foreground">CLI</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="group border border-border bg-card rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between transition-colors duration-250 hover:border-foreground/20">
                    <div className="relative aspect-video border-b border-border bg-secondary/35 flex items-center justify-center">
                      <div className="absolute inset-0 bg-grid-white/[0.01] bg-[length:16px_16px]"></div>
                      <Layout className="w-12 h-12 text-muted-foreground opacity-30 group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-sans font-bold text-foreground mb-2">Responsive Portfolio</h3>
                        <p className="text-muted-foreground text-sm font-serif leading-relaxed mb-6">
                          A highly responsive, visual, and editorial portfolio site displaying projects and details. Features modern typography, clean CSS variables, and rotated vertical section headers.
                        </p>
                      </div>
                      <div>
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                          <span className="px-2.5 py-0.5 border border-border bg-background rounded-full text-[10px] font-mono text-muted-foreground">React</span>
                          <span className="px-2.5 py-0.5 border border-border bg-background rounded-full text-[10px] font-mono text-muted-foreground">Tailwind CSS</span>
                          <span className="px-2.5 py-0.5 border border-border bg-background rounded-full text-[10px] font-mono text-muted-foreground">Framer Motion</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ABOUT ME / METRICS SECTION */}
        <section id="about" className="py-20 border-b border-border bg-card">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Rotated Sidebar Title */}
              <div className="md:col-span-2 shrink-0 md:flex md:justify-start">
                <span className="md:writing-vertical md:rotate-180 md:sticky md:top-28 text-xs font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground select-none block mb-4 md:mb-0">
                  ABOUT & IMPACT
                </span>
              </div>
              
              {/* Content */}
              <div className="md:col-span-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Biography text */}
                  <div className="lg:col-span-7 space-y-6">
                    <h3 className="text-2xl font-sans font-bold text-foreground">My Journey</h3>
                    <p className="text-muted-foreground text-base font-serif leading-relaxed italic">
                      I am a motivated and detail-oriented Computer Science Engineering student currently pursuing my B.Tech at Shri Ramswaroop Memorial College of Engineering & Management (2023–2027).
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      My core objective is to apply solid engineering, object-oriented designs, and problem-solving skills to real-world products. Alongside software development, I coordinate creative content strategies and lead online engagement for the Google Developer Group (GDG On Campus) on our campus.
                    </p>
                    <div className="flex flex-col space-y-2.5 pt-4 text-sm font-sans">
                      <div className="flex items-center gap-2.5">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>Shri Ramswaroop Memorial College of Engineering & Management</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Award className="h-4 w-4 text-muted-foreground" />
                        <span>Graduation Year: 2027 (Lucknow, India)</span>
                      </div>
                    </div>
                  </div>

                  {/* Impact metrics grid */}
                  <div className="lg:col-span-5">
                    <div className="grid grid-cols-2 gap-4 border border-border p-4 bg-background rounded-2xl shadow-sm">
                      <div className="p-4 bg-card border border-border rounded-xl flex flex-col justify-center text-center">
                        <span className="text-3xl font-display font-medium text-foreground block">2027</span>
                        <span className="text-[10px] font-mono uppercase text-muted-foreground tracking-wider">Grad Year</span>
                      </div>
                      <div className="p-4 bg-card border border-border rounded-xl flex flex-col justify-center text-center">
                        <span className="text-3xl font-display font-medium text-foreground block">GDG</span>
                        <span className="text-[10px] font-mono uppercase text-muted-foreground tracking-wider">Social Head</span>
                      </div>
                      <div className="p-4 bg-card border border-border rounded-xl flex flex-col justify-center text-center">
                        <span className="text-3xl font-display font-medium text-foreground block">81%</span>
                        <span className="text-[10px] font-mono uppercase text-muted-foreground tracking-wider">High School</span>
                      </div>
                      <div className="p-4 bg-card border border-border rounded-xl flex flex-col justify-center text-center">
                        <span className="text-3xl font-display font-medium text-foreground block">77%</span>
                        <span className="text-[10px] font-mono uppercase text-muted-foreground tracking-wider">Intermediate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TECHNICAL STACK SECTION */}
        <section id="skills" className="py-20 border-b border-border">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Rotated Sidebar Title */}
              <div className="md:col-span-2 shrink-0 md:flex md:justify-start">
                <span className="md:writing-vertical md:rotate-180 md:sticky md:top-28 text-xs font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground select-none block mb-4 md:mb-0">
                  TECH STACK
                </span>
              </div>
              
              {/* Content */}
              <div className="md:col-span-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left font-sans">
                  {/* Category 1 */}
                  <div className="pb-6 border-b border-border md:border-b-0 md:pb-0">
                    <h3 className="text-lg font-bold text-foreground mb-4 uppercase tracking-wide">Languages</h3>
                    <ul className="space-y-2.5 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><FaJava className="text-red-500 w-4 h-4" /> Core Java</li>
                      <li className="flex items-center gap-2"><SiPython className="text-blue-400 w-4 h-4" /> Python</li>
                      <li className="flex items-center gap-2"><SiJavascript className="text-yellow-400 w-4 h-4" /> JavaScript</li>
                      <li className="flex items-center gap-2"><SiHtml5 className="text-orange-500 w-4 h-4" /> HTML5 / CSS3</li>
                    </ul>
                  </div>

                  {/* Category 2 */}
                  <div className="pb-6 border-b border-border md:border-b-0 md:pb-0">
                    <h3 className="text-lg font-bold text-foreground mb-4 uppercase tracking-wide">Fundamentals</h3>
                    <ul className="space-y-2.5 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-foreground" /> Data Structures</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-foreground" /> Object-Oriented Design</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-foreground" /> Algorithm Analysis</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-foreground" /> Problem Solving</li>
                    </ul>
                  </div>

                  {/* Category 3 */}
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4 uppercase tracking-wide">Tools & Web</h3>
                    <ul className="space-y-2.5 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><SiGit className="text-orange-600 w-4 h-4" /> Git & GitHub</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-foreground" /> VS Code / DevTools</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-foreground" /> Responsive Design</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-foreground" /> Flexbox & CSS Grid</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 border-b border-border">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Rotated Sidebar Title */}
              <div className="md:col-span-2 shrink-0 md:flex md:justify-start">
                <span className="md:writing-vertical md:rotate-180 md:sticky md:top-28 text-xs font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground select-none block mb-4 md:mb-0">
                  COLLABORATE
                </span>
              </div>
              
              {/* Content Form */}
              <div className="md:col-span-10">
                <div className="max-w-xl text-left">
                  <h2 className="text-4xl md:text-5xl font-display font-medium tracking-wide uppercase text-foreground mb-4">
                    Get In Touch
                  </h2>
                  <p className="text-muted-foreground text-sm font-serif leading-relaxed italic mb-8">
                    I'm currently looking for new opportunities and internships. Send a message to collaborate!
                  </p>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label htmlFor="name" className="text-xs font-mono uppercase text-muted-foreground tracking-wider mb-2">Name</label>
                        <input type="text" id="name" required placeholder="Enter your name" className="px-4 py-3 bg-card border border-border rounded-xl text-sm font-sans focus:outline-none focus:border-foreground transition-colors" />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="email" className="text-xs font-mono uppercase text-muted-foreground tracking-wider mb-2">Email</label>
                        <input type="email" id="email" required placeholder="Enter your email" className="px-4 py-3 bg-card border border-border rounded-xl text-sm font-sans focus:outline-none focus:border-foreground transition-colors" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="message" className="text-xs font-mono uppercase text-muted-foreground tracking-wider mb-2">Message</label>
                      <textarea id="message" required rows={4} placeholder="Describe your project details..." className="px-4 py-3 bg-card border border-border rounded-xl text-sm font-sans focus:outline-none focus:border-foreground transition-colors resize-none"></textarea>
                    </div>
                    
                    <Button 
                      type="button" 
                      onClick={() => window.location.href="mailto:itsananayv@gmail.com"} 
                      className="w-full py-4 rounded-xl font-sans text-sm font-semibold uppercase tracking-wider bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                    >
                      Send Message
                    </Button>
                  </form>
                  
                  {/* Footer details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 font-sans">
                    <div 
                      className="bg-card border border-border p-4 rounded-2xl flex items-center justify-between cursor-pointer hover:border-foreground/20 transition-colors group"
                      onClick={() => handleCopy("itsananayv@gmail.com", "Email address")}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-secondary text-foreground">
                          <Mail className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Email</p>
                          <p className="text-sm font-medium">itsananayv@gmail.com</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">Copy</span>
                    </div>

                    <div 
                      className="bg-card border border-border p-4 rounded-2xl flex items-center justify-between cursor-pointer hover:border-foreground/20 transition-colors group"
                      onClick={() => handleCopy("+91-9453658233", "Phone number")}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-secondary text-foreground">
                          <Phone className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Phone</p>
                          <p className="text-sm font-medium">+91 9453658233</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">Copy</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center bg-card">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
          Designed & Built by Ananay Verma
        </p>
      </footer>
    </div>
  );
}
