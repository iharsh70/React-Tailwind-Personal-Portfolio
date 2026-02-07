import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Code2,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";  

const skills = [
  "Java",
  "Python",
  "Terraform",
  "k8s",
  "Machine Learning",
  "Generative AI",
  "JavaScript",
  "Data Analysis",  
  "MS & G suite Tools",                  

  "MySQL",
  "MongoDB",

  "ReactJS",
  "Node.js",
  "Express.js",
  "Restful APIs",


  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Power BI",

  "Figma",
  "Git",
  "GitHub Actions",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-950/20 to-background" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-repeat pointer-events-none" 
        style={{backgroundImage: 'linear-gradient(0deg, #00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)', backgroundSize: '50px 50px'}} 
      />

      {/* Floating Tech Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-40"
            style={{
              backgroundColor: i % 3 === 0 ? "#00d4ff" : i % 3 === 1 ? "#0ea5e9" : "#7c3aed",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${20 + Math.random() * 40}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-glow text-sm font-medium">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  AI & Software Engineering
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting 
                <br />
                <span className="glow-text text-6xl md:text-6xl lg:text-7xl font-black">
                  Digital
                </span>
                <br />
                excellence,
                <br />
                <span className="font-light text-gray-300 text-base md:text-2xl bg-gradient-to-r from-cyan-400/80 to-blue-400/80 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]">
                  with modern engineering.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground max-w-xl leading-relaxed animate-fade-in animation-delay-200 font-light tracking-wide">
                I'm <span className="font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,212,255,0.6)]">Harsh</span> — a Computer Science innovator specializing in <span className="text-cyan-300 font-medium drop-shadow-[0_0_8px_rgba(0,212,255,0.5)]">AI, Machine Learning,</span> and scalable software applications. <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent font-medium drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]">Transforming complex problems</span> into elegant, high-performance solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300 pt-4">
              <a href="#contact">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all">
                  Start a Project <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="public\DA-Resume-HARSH.pdf1.pdf" download>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  <span className="ml-2">Download Resume</span>
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 animate-fade-in animation-delay-400 pt-6">
              <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Let's Connect:</span>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/iharsh70", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/harshimmadi/", label: "LinkedIn" },
                  { icon: Code2, href: "https://www.hackerrank.com/profile/charshBTECH22", label: "HackerRank" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    title={social.label}
                    className="p-3 rounded-lg glass-glow hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group"
                  >
                    {<social.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image with Enhanced Effects */}
          <div className="relative animate-fade-in animation-delay-300 flex items-center justify-center">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-md"> 
              {/* Floating Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-violet-500/20 rounded-3xl blur-2xl animate-pulse" />
              
              {/* Glass Border Container */}  
              <div className="relative glass-glow rounded-3xl p-1 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-violet-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Image */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-500 to-slate-500">
                  <img
                    src="public\IMG_1558 (3).jpg"
                    alt="Harsh Immadi"
                    className="w-full h-auto aspect-square object-cover rounded-2xl"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-6 -right-6 glass-glow rounded-2xl px-6 py-4 animate-float shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-75" />
                  </div>
                  <div className="font-medium text-sm text-foreground">
                    <div>Open for</div>
                    <div className="text-cyan-400">Opportunities</div>
                  </div>
                </div>
              </div>

              {/* Stats Badges */}
              <div className="absolute -top-8 -left-8 glass-glow rounded-2xl px-4 py-3 animate-float animation-delay-300">
                <div className="text-2xl font-bold text-cyan-400">Tech</div>
                <div className="text-xs text-muted-foreground">Driven</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-32 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium text-center mb-10">
            Technologies & Expertise
          </p>
          <div className="relative overflow-hidden">
            {/* Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/50 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/50 to-transparent z-20 pointer-events-none" />
            
            <div className="w-full overflow-hidden">
              <div className="marquee-track flex gap-6">
                {[...skills, ...skills].map((skill, idx) => (
                  <div key={idx} className="shrink-0 px-2">
                    <div className="px-6 py-3 glass rounded-lg hover:glass-glow transition-all hover:shadow-lg hover:shadow-cyan-500/20 whitespace-nowrap">
                      <span className="text-sm font-semibold text-muted-foreground hover:text-cyan-400 transition-colors">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0.6 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-700">
          <a
            href="#about"
            className="flex flex-col items-center gap-3 group cursor-pointer"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cyan-400 transition-colors">
              Explore my work
            </span>
            <div className="p-2 rounded-full glass group-hover:glass-glow transition-all">
              <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-cyan-400 animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};