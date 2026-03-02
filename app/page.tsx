"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const teamMembers = [
  {
    name: "Samar",
    role: "Fullstack Developer / Sprint Master",
    image: "/team/samar.jpg",
    bio: "Architecting end-to-end solutions with a focus on seamless user experience and performance.",
    skills: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    socials: { github: "https://github.com/sam404rihan" },
    portfolio: "https://samarrihan.dev",
  },
  {
    name: "Sushan",
    role: "Fullstack / AI Engineer",
    image: "/team/sushan.jpg",
    bio: "Integrating advanced AI models with robust fullstack architectures to build intelligent systems.",
    skills: ["Python", "PyTorch", "Next.js", "LLM Ops"],
    socials: { github: "https://github.com/sushanshetty1" },
    portfolio: "https://sushans.dev",
  },
  {
    name: "Yash",
    role: "Pro Level Backend Developer",
    image: "/team/yash.jpg",
    bio: "Deep-diver into distributed systems and high-throughput backend infrastructure.",
    skills: ["Go", "Rust", "Kubernetes", "PostgreSQL"],
    socials: { github: "https://github.com/yash-v-maurya" },
    portfolio: "https://yashv.dev",
  },
  {
    name: "Shaun",
    role: "Backend Dev / System Design",
    image: "/team/shaun.jpg",
    bio: "Crafting scalable system architectures and solid backend foundations for low-latency apps.",
    skills: ["Java", "Spring Boot", "System Design", "Microservices"],
    socials: { github: "https://github.com/shaunmarv3" },
    portfolio: "https://shaun.design",
  },
];

export default function Home() {
  const [displayMembers, setDisplayMembers] = useState<typeof teamMembers | null>(null);
  const [loadingStep, setLoadingStep] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const loadingSequence = [
    "booting_kernel_v4.0.2",
    "establishing_handshake",
    "decrypting_staff_db",
    "loading_neural_profiles",
    "initialising_node_grid",
    "access_granted"
  ];

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;

    const startLoading = async () => {
      // Shuffling members
      const shuffled = [...teamMembers].sort(() => Math.random() - 0.5);

      // Simulate step-by-step loading
      for (let i = 0; i < loadingSequence.length; i++) {
        setLoadingStep(i);
        // Random latency for each step to feel "real"
        await new Promise(resolve => setTimeout(resolve, 400 + Math.random() * 600));

        if (i === loadingSequence.length - 1) {
          setDisplayMembers(shuffled);
        }
      }
    };

    progressInterval = setInterval(() => {
      setLoadingProgress(prev => (prev < 99 ? prev + 1 : 99));
    }, 50);

    startLoading();

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  if (!displayMembers) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center font-mono p-6">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] text-cyan-500/50 uppercase tracking-[0.3em]">
              <span>system_init</span>
              <span>{loadingProgress}%</span>
            </div>
            <div className="h-[2px] w-full bg-white/5 overflow-hidden">
              <div
                className="h-full bg-cyan-500 transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </div>

          <div className="space-y-1">
            {loadingSequence.slice(0, loadingStep + 1).map((step, i) => (
              <div key={step} className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em]">
                <span className={i === loadingStep ? "text-cyan-500 animate-pulse" : "text-white/20"}>
                  {i === loadingStep ? ">" : "√"}
                </span>
                <span className={i === loadingStep ? "text-cyan-400" : "text-white/40"}>
                  {step}... {i < loadingStep && "done"}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-12 flex justify-center">
            <div className="w-12 h-12 border-2 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-mono selection:bg-cyan-500/30 overflow-x-hidden pt-12 pb-24 lowercase">
      {/* Structural Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.1)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header - Industrial Terminal */}
        <header className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-12 border-l border-cyan-500/30 pl-8 py-4 group">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-cyan-500" />
              <span className="text-cyan-500 text-[10px] tracking-[0.4em] uppercase">directory // staff_db</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none text-white overflow-hidden">
              <span className="inline-block animate-slide-up">Cyber</span>
              <span className="text-cyan-500 inline-block animate-slide-up [animation-delay:0.1s]">Sprinters</span>
            </h1>
          </div>
          <div className="max-w-[300px] text-[10px] leading-relaxed text-white/30 uppercase tracking-[0.2em]">
            [load_data]: success
            <br />
            [node_status]: 100%_optimal
            <br />
            [access_level]: core_dev_team
          </div>
        </header>

        {/* Team Grid - Terminal Nodes */}
        <div className="grid grid-cols-1 gap-12 mb-24">
          {displayMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative bg-[#080808] border border-white/10 p-8 sm:p-16 transition-all duration-500 hover:border-cyan-500/30 hover:bg-white/[0.02] overflow-hidden rounded-sm"
            >
              {/* Node Decoration */}
              <div className="absolute top-4 right-6 text-[9px] text-cyan-500/20 group-hover:text-cyan-500/50 transition-colors uppercase tracking-widest">
                node_00{index + 1} // static_lock
              </div>

              <div className="flex flex-col lg:flex-row gap-16 relative z-10 items-center lg:items-stretch">
                {/* Profile Image - Matrix Frame */}
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 shrink-0 border border-white/10 p-2 group-hover:border-cyan-500/30 transition-all">
                  <div className="relative w-full h-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 brightness-75 group-hover:brightness-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-cyan-500/5 mix-blend-overlay group-hover:opacity-0" />
                  </div>
                  {/* Corner Accents */}
                  <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content - Data Readout */}
                <div className="flex flex-col justify-between py-4 flex-1 min-w-0">
                  <div className="space-y-8">
                    <div className="space-y-3 text-center lg:text-left">
                      <h3 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white group-hover:text-cyan-400 transition-colors">
                        {member.name}
                      </h3>
                      <div className="inline-flex items-center gap-4 py-1.5 px-4 bg-cyan-500/10 border-l-4 border-cyan-500">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                        <span className="text-[12px] font-black text-cyan-400 uppercase tracking-[0.3em]">
                          {member.role}
                        </span>
                      </div>
                    </div>

                    <div className="border-l-2 border-white/20 pl-8 py-2">
                      <p className="text-[14px] sm:text-[16px] text-white/80 leading-relaxed normal-case font-medium italic group-hover:text-white transition-colors max-w-2xl">
                        &gt; {member.bio}
                      </p>
                    </div>

                    {/* Interactive Command Links */}
                    <div className="flex flex-wrap gap-8 items-center justify-center lg:justify-start">
                      <a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] font-black text-cyan-500/60 hover:text-cyan-400 transition-colors flex items-center gap-2 group/link border-b-2 border-transparent hover:border-cyan-500/40 pb-1"
                      >
                        <span className="opacity-50 group-hover/link:animate-pulse">_</span> portfolio.exe
                      </a>
                      <div className="hidden sm:block w-[1px] h-4 bg-white/20" />
                      <div className="flex gap-6">
                        {Object.entries(member.socials).map(([platform, url]) => (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[12px] font-black text-white/40 hover:text-white transition-colors uppercase tracking-[0.3em]"
                          >
                            {platform}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Skills - Data Tags */}
                  <div className="flex flex-wrap gap-x-10 gap-y-4 mt-12 opacity-70 group-hover:opacity-100 transition-opacity justify-center lg:justify-start">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-black text-white/50 group-hover:text-cyan-400 transition-colors uppercase tracking-[0.3em] flex items-center gap-2"
                      >
                        <span className="text-cyan-500/50">/</span> {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Grid Anchor Marker */}
              <div className="absolute bottom-6 left-8 text-[10px] text-white/5 uppercase tracking-[0.6em] group-hover:text-white/10 transition-colors">
                coord: {15 * (index + 1)}.00 // z_index: core
              </div>
            </div>
          ))}
        </div>

        {/* Footer Terminal */}
        <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] text-white/20 uppercase tracking-[0.4em]">
          <div className="flex items-center gap-4">
            <span className="text-cyan-500/40">system_status</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className={`w-1 h-3 ${i < 4 ? 'bg-cyan-500/30' : 'bg-white/5'}`} />
              ))}
            </div>
            <span className="text-cyan-500/50 animate-pulse">active</span>
          </div>
          <div>
            &copy; 2026 cybersprinters_group // all_access_reserved
          </div>
          <div className="text-white/10">
            node_ping: 02ms
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        body {
          cursor: crosshair;
        }
      `}</style>
    </div>
  );
}
