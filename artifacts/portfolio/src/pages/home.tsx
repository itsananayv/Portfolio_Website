import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { useActiveSection } from "@/hooks/use-active-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Download, 
  ArrowRight,
  ExternalLink,
  Code2,
  Terminal,
  Database,
  Layout,
  Award,
  Users
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
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const activeSection = useActiveSection([
    "hero", "about", "skills", "projects", "education", "experience", "contact"
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
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30">
      <Navbar activeSection={activeSection} />

      <main>
        {/* HERO SECTION */}
        <section 
          id="hero" 
          className="relative min-h-[100dvh] flex items-center justify-center pt-20 pb-12 px-4 md:px-6"
        >
          <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-background to-background"></div>
          
          <div className="container mx-auto max-w-5xl z-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <motion.div variants={fadeInUp} className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-secondary-border text-sm text-secondary-foreground font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for internships
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Ananay</span><br />
                Computer Science <span className="italic font-serif font-light text-muted-foreground">Student</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                Detail-oriented developer passionate about problem-solving, clean code, and building practical applications that make an impact.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
                <Button size="lg" onClick={() => scrollTo("#projects")} className="h-12 px-8 rounded-full shadow-lg shadow-primary/20">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollTo("#contact")} className="h-12 px-8 rounded-full">
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => scrollTo("#about")}
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent relative">
              <motion.div 
                animate={{ y: [0, 24, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-primary absolute -left-[2px] top-0"
              />
            </div>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 px-4 md:px-6 relative">
          <div className="container mx-auto max-w-5xl">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6 font-mono">
                  <span className="text-primary mr-2">01.</span>About Me
                </motion.h2>
                <motion.div variants={fadeInUp} className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    I am a motivated and detail-oriented Computer Science Engineering student currently pursuing my B.Tech at Shri Ramswaroop Memorial College of Engineering & Management (2023–2027).
                  </p>
                  <p>
                    My objective is to apply my programming and problem-solving skills professionally. I am eager to contribute to real-world projects while continuously learning and evolving as a developer.
                  </p>
                  <p>
                    When I'm not coding, I'm organizing community events as the Social Media Head at GDG On Campus and serving as a Creative Coordinator.
                  </p>
                </motion.div>
                <motion.div variants={fadeInUp} className="mt-8">
                  <Button variant="secondary" className="rounded-full" onClick={() => handleCopy("itsananayv@gmail.com", "Email")}>
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </Button>
                </motion.div>
              </div>
              
              <motion.div variants={fadeInUp} className="relative">
                <div className="aspect-square rounded-2xl bg-secondary/50 border border-border p-8 flex flex-col justify-center items-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]"></div>
                  <Terminal className="w-24 h-24 text-primary/40 mb-6 group-hover:scale-110 transition-transform duration-500" />
                  <div className="font-mono text-sm text-left w-full max-w-sm bg-background/80 p-4 rounded-lg shadow-xl border border-border backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-border/50">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <p className="text-primary">const <span className="text-foreground">ananay</span> = {"{"}</p>
                    <p className="pl-4 text-muted-foreground">major: <span className="text-accent-foreground">"Computer Science"</span>,</p>
                    <p className="pl-4 text-muted-foreground">gradYear: <span className="text-orange-400">2027</span>,</p>
                    <p className="pl-4 text-muted-foreground">focus: <span className="text-accent-foreground">"Software Engineering"</span>,</p>
                    <p className="pl-4 text-muted-foreground">driven: <span className="text-blue-400">true</span></p>
                    <p className="text-primary">{"};"}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 px-4 md:px-6 bg-secondary/30 border-y border-border">
          <div className="container mx-auto max-w-5xl">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-12 font-mono text-center">
                <span className="text-primary mr-2">02.</span>Technical Arsenal
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Languages */}
                <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-6 hover-elevate shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm flex items-center gap-2"><FaJava className="text-red-500" /> Core Java</span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm flex items-center gap-2"><SiPython className="text-blue-400" /> Python</span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm flex items-center gap-2"><SiJavascript className="text-yellow-400" /> JavaScript</span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm flex items-center gap-2"><SiHtml5 className="text-orange-500" /> HTML5</span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm flex items-center gap-2"><Code2 className="text-blue-500 w-4 h-4" /> CSS3</span>
                  </div>
                </motion.div>

                {/* CS Fundamentals */}
                <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-6 hover-elevate shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <Database className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Fundamentals</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Data Structures</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Object-Oriented Programming</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Problem Solving</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Algorithmic Thinking</li>
                  </ul>
                </motion.div>

                {/* Tools & Web */}
                <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-6 hover-elevate shadow-sm lg:col-span-1 md:col-span-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <Layout className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Tools & Web</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm flex items-center gap-2"><SiGit className="text-orange-600" /> Git</span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm flex items-center gap-2"><SiGithub className="text-foreground" /> GitHub</span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">VS Code</span>
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">DevTools</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 border border-border rounded-full text-sm text-muted-foreground">Responsive Design</span>
                    <span className="px-3 py-1 border border-border rounded-full text-sm text-muted-foreground">DOM Manipulation</span>
                    <span className="px-3 py-1 border border-border rounded-full text-sm text-muted-foreground">Flexbox/Grid</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-12 font-mono">
                <span className="text-primary mr-2">03.</span>Featured Projects
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Project 1 */}
                <motion.div variants={fadeInUp} className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors shadow-sm">
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Terminal className="w-6 h-6 text-primary" />
                      </div>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Student Management System</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">
                      A robust console-based application to manage student records. Built leveraging Object-Oriented Programming concepts to support adding, viewing, and deleting student details efficiently.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">Core Java</span>
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">OOP</span>
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">Data Structures</span>
                    </div>
                  </div>
                </motion.div>

                {/* Project 2 */}
                <motion.div variants={fadeInUp} className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors shadow-sm">
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Layout className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex gap-3">
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Responsive Portfolio</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">
                      A fully responsive personal portfolio website showcasing projects and skills. Implements modern CSS layout techniques including Flexbox and CSS Grid for optimal viewing across all devices.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">HTML5</span>
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">CSS3</span>
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">JavaScript</span>
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">Flexbox/Grid</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EDUCATION & EXPERIENCE SECTION */}
        <section id="education" className="py-24 px-4 md:px-6 bg-secondary/30 border-y border-border">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Education */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-8 font-mono flex items-center gap-3">
                  <span className="text-primary">04.</span> Education
                </motion.h2>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                  
                  {/* College */}
                  <motion.div variants={fadeInUp} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-background bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                    <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] bg-card border border-border p-5 rounded-xl shadow-sm hover-elevate">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-primary text-sm font-medium">2023 - 2027</span>
                      </div>
                      <h4 className="font-bold text-lg mb-1">B.Tech Computer Science</h4>
                      <p className="text-sm text-muted-foreground">Shri Ramswaroop Memorial College of Engineering & Management</p>
                    </div>
                  </motion.div>

                  {/* 12th */}
                  <motion.div variants={fadeInUp} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-background bg-muted-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                    <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] bg-card border border-border p-5 rounded-xl shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-muted-foreground text-sm font-medium">Intermediate</span>
                      </div>
                      <h4 className="font-bold text-lg mb-1">Class 12</h4>
                      <p className="text-sm text-muted-foreground mb-2">M.B. College, Barabanki</p>
                      <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded">Score: 77%</span>
                    </div>
                  </motion.div>

                  {/* 10th */}
                  <motion.div variants={fadeInUp} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-background bg-muted-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                    <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] bg-card border border-border p-5 rounded-xl shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-muted-foreground text-sm font-medium">High School</span>
                      </div>
                      <h4 className="font-bold text-lg mb-1">Class 10</h4>
                      <p className="text-sm text-muted-foreground mb-2">M.B. College, Barabanki</p>
                      <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded">Score: 81%</span>
                    </div>
                  </motion.div>

                </div>
              </motion.div>

              {/* Certifications & Leadership */}
              <motion.div 
                id="experience"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="space-y-12"
              >
                <div>
                  <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold mb-6 font-mono flex items-center gap-3">
                    <Award className="text-primary w-8 h-8" /> Certifications
                  </motion.h2>
                  <div className="space-y-4">
                    <motion.div variants={fadeInUp} className="flex items-start gap-4 bg-card border border-border p-4 rounded-xl shadow-sm hover:border-primary/50 transition-colors">
                      <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0"></div>
                      <div>
                        <h4 className="font-bold">Frontend Web Development Internship</h4>
                        <p className="text-sm text-muted-foreground">College-Based • 2024</p>
                      </div>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="flex items-start gap-4 bg-card border border-border p-4 rounded-xl shadow-sm hover:border-primary/50 transition-colors">
                      <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0"></div>
                      <div>
                        <h4 className="font-bold">Mobile App Development Internship</h4>
                        <p className="text-sm text-muted-foreground">2024</p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div>
                  <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold mb-6 font-mono flex items-center gap-3">
                    <Users className="text-primary w-8 h-8" /> Leadership & Community
                  </motion.h2>
                  <div className="space-y-4">
                    <motion.div variants={fadeInUp} className="bg-card border border-border p-5 rounded-xl shadow-sm">
                      <h4 className="font-bold text-lg text-primary mb-1">Social Media Head</h4>
                      <p className="text-sm font-medium mb-2">GDG On Campus</p>
                      <p className="text-sm text-muted-foreground">Managing online presence and engagement for the developer community.</p>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="bg-card border border-border p-5 rounded-xl shadow-sm">
                      <h4 className="font-bold text-lg text-primary mb-1">Creative Coordinator</h4>
                      <p className="text-sm text-muted-foreground">Responsible for content creation and event promotion strategies.</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 px-4 md:px-6 relative">
          <div className="absolute inset-0 bg-primary/5 dark:bg-primary/5 pointer-events-none"></div>
          <div className="container mx-auto max-w-3xl relative z-10 text-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-sm">
                05. What's Next?
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
                Get In Touch
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
                I'm currently looking for new opportunities and internships. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto h-14 px-8 rounded-full text-lg shadow-lg shadow-primary/20"
                  onClick={() => window.location.href = "mailto:itsananayv@gmail.com"}
                >
                  <Mail className="mr-2 h-5 w-5" /> Say Hello
                </Button>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-14 w-14 rounded-full"
                    onClick={() => handleCopy("+919453658233", "Phone number")}
                  >
                    <Phone className="h-5 w-5" />
                    <span className="sr-only">Copy Phone</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-14 w-14 rounded-full"
                    onClick={() => window.open("https://linkedin.com", "_blank")}
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
                <div 
                  className="bg-card border border-border p-4 rounded-xl flex items-center justify-between cursor-pointer hover:border-primary/50 transition-colors group"
                  onClick={() => handleCopy("itsananayv@gmail.com", "Email address")}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-secondary text-secondary-foreground">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono">Email</p>
                      <p className="text-sm font-medium">itsananayv@gmail.com</p>
                    </div>
                  </div>
                  <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">Copy</span>
                </div>
                
                <div 
                  className="bg-card border border-border p-4 rounded-xl flex items-center justify-between cursor-pointer hover:border-primary/50 transition-colors group"
                  onClick={() => handleCopy("+91-9453658233", "Phone number")}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-secondary text-secondary-foreground">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono">Phone</p>
                      <p className="text-sm font-medium">+91-9453658233</p>
                    </div>
                  </div>
                  <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">Copy</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center border-t border-border">
        <p className="text-sm text-muted-foreground font-mono">
          Designed & Built by Ananay Verma
        </p>
      </footer>
    </div>
  );
}
