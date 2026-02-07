import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Label */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-glow">
                <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider">
                  About Me
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
              Building the future of
              <br />
              <span className="glow-text">intelligent systems</span>
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed animate-fade-in animation-delay-200">
              <p>
                I'm a Computer Science innovator specializing in <span className="text-cyan-400">AI and Machine Learning</span>, driven by curiosity for how intelligent systems and software products transform industries. My journey spans building data-driven applications, deep learning models, and scalable web systems grounded in strong computer science fundamentals.
              </p>
              <p>
               I architect solutions across <span className="text-cyan-400">Python, Java, JavaScript, and modern cloud technologies</span>, with hands-on expertise in deep learning, NLP-based automation, and enterprise application development. I obsess over writing clean, scalable code while translating complex challenges into elegant, real-world solutions.
              </p>
              <p>
                Beyond code, I'm passionate about exploring emerging technologies, contributing to open-source ecosystems, and mentoring the next generation of developers.
              </p>
            </div>

            {/* Quote Card */}
            <div className="glass-glow rounded-2xl p-8 border border-cyan-500/20 animate-fade-in animation-delay-300 hover:border-cyan-500/40 transition-all">
              <p className="text-lg font-medium leading-relaxed text-foreground italic">
                "Code isn't just about functionality—it's about creating elegant solutions that inspire and empower."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights Card Grid */}
          <div className="space-y-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="group glass-glow rounded-2xl p-8 animate-fade-in border border-cyan-500/10 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 group-hover:from-cyan-500/30 group-hover:to-cyan-500/20 transition-all">
                      <item.icon className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};