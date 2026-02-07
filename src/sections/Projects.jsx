import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  
  {
    title: "AI-Powered Resume Screening And Ranking System",
    description:
      "AI-powered resume screening system that ranks candidates by matching resumes with job descriptions using NLP and ML.",
    image: "/Projects/Resume image.png",
    tags: ["Python", "NLP", "Scikit-learn"],
    link: "https://github.com/iharsh70/AI-Powered-Resume-Screening-And-Ranking-System/blob/main/README.md",
    github: "https://github.com/iharsh70/AI-Powered-Resume-Screening-And-Ranking-System/blob/main/README.md",
  },
  {
    title: "IMS - SmartInventory System with POS & Expiry Tracking",
    description:
      "A full-stack inventory management system that enables real-time stock tracking, expiry monitoring, demand forecasting, and POS integration to optimize business operations.",
    image: "/Projects/IMS image.webp",
    tags: ["MySQL", "PHP", "JavaScript"],
    link: "https://github.com/iharsh70/Inventory-Management-System-SEAD/blob/main/Inventary-Management-System-IMS-/README.md",
    github: "https://github.com/iharsh70/Inventory-Management-System-SEAD/blob/main/Inventary-Management-System-IMS-/README.md",
  },
   {
    title: "Real Time Collaboration Tool",
    description:
      "A MERN-based document editor that enables rich text formatting, multimedia support, and real-time collaborative editing to improve productivity and workflow efficiency.",
    image: "/Projects/Real time image.webp",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    link: "https://github.com/iharsh70/EY-MERN-",
    github: "https://github.com/iharsh70/EY-MERN-",
  },
   {
    title: "Social Media Content Automation for News Agencies",
    description:
      "An AI-powered multimodal system that automatically generates tweet-length news summaries by fusing text and images using NLP and computer vision models.",
    image: "/ChatGPT Image Feb 7, 2026, 12_24_05 PM.png",
    tags: ["Python", "BLIP", "FastAPI", "MongoDB"],
    link: "",
    github: "",
  },
   {
    title: "Mutual Fund Analysis",
    description:
      "This mutual fund analysis project focuses on identifying top 30 schemes with high return and low risk using Python, Excel, and Power BI.",
    image: "/Mutual.avif",
    tags: ["Python", "Excel", "Power BI"],
    link: "https://github.com/iharsh70/Mutual-Fund-Analysis/tree/main/Mutual%20Fund%20Analysis/mutual-fund-analysis-Dashboard-Python-PowerBI",
    github: "https://github.com/iharsh70/Mutual-Fund-Analysis/tree/main/Mutual%20Fund%20Analysis/mutual-fund-analysis-Dashboard-Python-PowerBI",
  }, 
  {
    title: "Geo Vision - Deep Learning for Terrain Recognition",
    description:
      "AI-driven terrain recognition system for classifying land types and surface characteristics.",
    image: "/Geovision.jpg",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV"],  
    link: "https://github.com/iharsh70/Deep-Learning-For-Terrain-Recognition",
    github: "https://github.com/iharsh70/Deep-Learning-For-Terrain-Recognition",
  },
  {
    title: "Image Generation Using Stable Diffusion and Comfy UI",
    description:
      "A text-to-image generation system that leverages Stable Diffusion with Comfy UI to create high-quality images from natural language prompts through an interactive interface.",
    image: "/Projects/Screenshot 2026-01-06 195709.png",
    tags: ["Python", "Stable Diffusion", "Comfy UI"],
    link: "https://github.com/iharsh70/Techsaksham/blob/main/README.md",
    github: "https://github.com/iharsh70/Techsaksham/blob/main/README.md",
  },
  {
    title: "Ethical AI in Criminal Justice",
    description:
      "A machine learning system that predicts recidivism risk using COMPAS data while ensuring fairness, transparency, and bias analysis through explainable AI techniques like SHAP and LIME.",
    image: "/Projects/ethics-AI.webp",
    tags: ["Python", "Scikit-learn", "SHAP", "LIME"],
    link: "https://github.com/iharsh70/Ethical-AI-in-Criminal-Justice",
    github: "https://github.com/iharsh70/Ethical-AI-in-Criminal-Justice",
  },
  {
    title: "Data Analysis on Doctor Visits",
    description:
      "A data analytics project that analyzes Superstore sales data to uncover trends in profitability, customer behavior, and inventory performance for data-driven retail decision-making.",
    image: "/Projects/Media-Data-Analysis.jpeg",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    link: "https://github.com/iharsh70/DATA-ANALYSIS-ON-DOCTOR-VISITS",
    github: "https://github.com/iharsh70/DATA-ANALYSIS-ON-DOCTOR-VISITS",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-glow mb-4">
            <span className="w-2 h-2 bg-cyan-400 rounded-full" />
            <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider">
              Featured Work
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projects that
            <br />
            <span className="glow-text">make an impact</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            A curated selection of my work across AI, web development, and innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass-glow rounded-2xl overflow-hidden animate-fade-in h-fit border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-slate-800 to-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-70" />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass-glow hover:bg-cyan-500/30 text-cyan-400 hover:text-cyan-300 transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass-glow hover:bg-cyan-500/30 text-cyan-400 hover:text-cyan-300 transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
                </div>

                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-lg bg-cyan-500/10 text-xs font-medium border border-cyan-500/30 text-cyan-400 hover:border-cyan-500/60 hover:bg-cyan-500/20 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            Explore All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

