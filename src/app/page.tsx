import Image from "next/image";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { LiquidGlass } from "@/components/ui/LiquidGlass";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ChatCircle,
  CodeBlock,
  Database,
  Lightning,
  UserFocus,
  Student,
  Brain,
  TerminalWindow,
  GithubLogo,
  EnvelopeSimple,
  Phone,
  FlowerLotus,
  FlowerTulip,
  LinkedinLogo,
  FileText,
  MapPin,
  GameController
} from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <main className="min-h-[100dvh] flex flex-col items-center justify-start selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black overflow-x-hidden relative">

      {/* Background ambient gradient for dark mode depth */}
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-200/40 via-transparent to-transparent dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-950" />

      <ThemeToggle />

      {/* 1. HERO SECTION (Asymmetric, Premium Story Setup) */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-16 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-center">
        <div className="md:col-span-8 flex flex-col items-start text-left z-10 relative">

          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-sans font-medium tracking-tighter leading-[0.85] text-zinc-950 dark:text-zinc-50 mb-8">
            Praneeth Goud. <br />
            <span className="text-zinc-400 dark:text-zinc-600 block mt-4 text-3xl md:text-4xl tracking-tight">Engineer & Maker.</span>
          </h1>

          <div className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed mb-10 space-y-6">
            <p>
              Many call me Zoro. My journey began in Kazipet, navigating the roots of my mother tongue, Telugu, at Bishop Beretta.
            </p>
            <p>
              I learned conversational Hindi not through textbooks, but the chaos of online gaming—<span className="italic">"Bhai Game Me aajao!"</span>
            </p>
            <p>
              Driven by a deep curiosity for how systems operate, I experiment, break things, and engineer robust solutions.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#connect" className="group">
              <MagneticButton>Let's Connect</MagneticButton>
            </a>
            <a href="https://drive.google.com/file/d/1vwO7LBW7MaRS7oSS6LLI7sGZz9zyLkf5/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <MagneticButton intensity={0.2} className="bg-transparent text-zinc-950 border border-zinc-300 hover:bg-zinc-100 dark:bg-transparent dark:text-white dark:border-zinc-800 dark:hover:bg-zinc-900">
                View Resume
              </MagneticButton>
            </a>
          </div>
        </div>

        {/* Hero Asset: Premium Portrait (Frameless, integrated) */}
        <div className="md:col-span-4 flex justify-center md:justify-end mt-12 md:mt-0 z-20 w-full">
          <div className="relative w-[180px] md:w-[220px] aspect-[3/4] rounded-xl overflow-hidden diffusion-shadow">
            <Image
              src="/profile.jpg"
              alt="Burra Praneeth Goud"
              fill
              className="object-contain hover:scale-[1.02] transition-transform duration-1000 ease-out"
              priority
              quality={100}
              unoptimized
            />
            <div className="absolute inset-0 max-w-full h-full mix-blend-overlay pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* 2. THE PERSONA & STORY (Bento Grid) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32">
        <h2 className="text-4xl md:text-5xl tracking-tighter font-medium mb-16 text-zinc-950 dark:text-zinc-50">
          The Origin & Vibe.
        </h2>
        <BentoGrid className="max-w-6xl mx-auto">
          <BentoGridItem
            title="Active Communication"
            description="I thrive on energy. Awkward silences aren't my style. I connect, offer encouragement, and collaborate to find solutions."
            icon={<ChatCircle size={32} weight="light" className="text-zinc-900 dark:text-zinc-100" />}
            className="md:col-span-2"
          />
          <BentoGridItem
            title="The Origin"
            description="Intermediate (MPC) at SR Edu Center, leading into CSE (AI & ML) at SR University. Math was the anchor."
            icon={<MapPin size={32} weight="light" className="text-zinc-900 dark:text-zinc-100" />}
            className="md:col-span-1 border-none shadow-none bg-zinc-100 dark:bg-zinc-900/50"
          />
          <BentoGridItem
            title="Polyglot Nature"
            description="Fluent in Telugu and English. Picked up Hindi during intense online gaming lobbies."
            icon={<GameController size={32} weight="light" className="text-zinc-900 dark:text-zinc-100" />}
            className="md:col-span-1 border-none shadow-none bg-zinc-100 dark:bg-zinc-900/50"
          />
          <BentoGridItem
            title="Hands-on Architect"
            description="I believe data is the true crux of AI. I build, test, and occasionally break systems to understand their boundaries."
            icon={<Student size={32} weight="light" className="text-zinc-900 dark:text-zinc-100" />}
            className="md:col-span-2"
          />
        </BentoGrid>
      </section>

      {/* 3. TECHNICAL ARSENAL (Cockpit Mode Data Density) */}
      <section className="w-full bg-zinc-950 dark:bg-zinc-100 py-24 md:py-32 text-zinc-50 dark:text-zinc-950 border-y border-zinc-900 dark:border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <h2 className="text-4xl md:text-5xl tracking-tighter font-medium mb-8">
                Technical Arsenal.
              </h2>
              <p className="text-zinc-400 dark:text-zinc-600 text-lg leading-relaxed max-w-[40ch]">
                Focused on manipulating data, prompt architecture, and building scalable underlying logic. Currently mastering SQL and distributed networks.
              </p>
            </div>

            {/* Extremely dense, 1px separated list (Cockpit Aesthetic) */}
            <div className="flex flex-col border-t border-zinc-800 dark:border-zinc-300">
              <div className="py-6 flex flex-col md:flex-row md:items-center justify-between group border-b border-zinc-800 dark:border-zinc-300 gap-4">
                <div className="flex items-center gap-6">
                  <TerminalWindow size={24} className="text-zinc-500" />
                  <span className="font-sans font-medium tracking-tight text-xl">Python Ecosystem</span>
                </div>
                <span className="font-mono text-sm text-zinc-500 w-24 md:text-right">Primary</span>
              </div>
              <div className="py-6 flex flex-col md:flex-row md:items-center justify-between group border-b border-zinc-800 dark:border-zinc-300 gap-4">
                <div className="flex items-center gap-6">
                  <Brain size={24} className="text-zinc-500" />
                  <span className="font-sans font-medium tracking-tight text-xl">AI & Prompt Engineering</span>
                </div>
                <span className="font-mono text-sm text-zinc-500 w-24 md:text-right">Core</span>
              </div>
              <div className="py-6 flex flex-col md:flex-row md:items-center justify-between group border-b border-zinc-800 dark:border-zinc-300 gap-4">
                <div className="flex items-center gap-6">
                  <CodeBlock size={24} className="text-zinc-500" />
                  <span className="font-sans font-medium tracking-tight text-xl">Data Structures & Algo</span>
                </div>
                <span className="font-mono text-sm text-zinc-500 w-24 md:text-right">Logic</span>
              </div>
              <div className="py-6 flex flex-col md:flex-row md:items-center justify-between group border-b border-zinc-800 dark:border-zinc-300 gap-4">
                <div className="flex items-center gap-6">
                  <Database size={24} className="text-zinc-500" />
                  <span className="font-sans font-medium tracking-tight text-xl">SQL & Computer Networks</span>
                </div>
                <span className="font-mono text-sm text-zinc-500 w-24 md:text-right">Focus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AI PHILOSOPHY & PROJECTS */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32">
        <LiquidGlass className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="z-10 relative">
              <h2 className="text-4xl md:text-5xl tracking-tighter font-medium mb-8">
                The Philosophy.
              </h2>
              <blockquote className="text-2xl font-serif italic text-zinc-800 dark:text-zinc-200 leading-tight mb-8 border-l-2 border-zinc-300 dark:border-zinc-700 pl-6">
                "AI is a tool that strictly follows instructions."
              </blockquote>
              <div className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed space-y-6 mb-12">
                <p>
                  Because I always maintain clarity on the underlying logic and desired outcome, AI serves purely to uncover edge cases faster. Together, we engineer stability.
                </p>
                <p>
                  I'm highly adaptable—whether it's frontend, backend, or desktop. Give me the constraints, and I will build.
                </p>
              </div>
              <a href="https://github.com/praneeth-9589417/" target="_blank" rel="noopener noreferrer">
                <MagneticButton className="bg-zinc-100 text-zinc-950 dark:bg-zinc-800 dark:text-white border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 py-4 px-8 shadow-sm">
                  Explore 15+ Repositories
                </MagneticButton>
              </a>
            </div>

            {/* Visual spacer removing the generic symmetric card from earlier */}
            <div className="relative h-full min-h-[400px] w-full flex items-center justify-center pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/20 to-transparent dark:from-zinc-800/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen opacity-50"></div>
              <GithubLogo size={160} weight="thin" className="text-zinc-300 dark:text-zinc-800 z-10" />
            </div>
          </div>
        </LiquidGlass>
      </section>

      {/* 5. LET'S CONNECT & FOOTER */}
      <section id="connect" className="w-full max-w-[1400px] mx-auto px-6 pt-32 pb-12 relative">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-sans font-medium tracking-tighter leading-[0.8] text-zinc-950 dark:text-zinc-50 mb-12">
            Connect.
          </h2>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-[30ch] mb-16 tracking-tight">
            I am always open to constructive criticism and fast-paced collaboration.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-32 z-10">
            <a href="mailto:burrapraneeth007@gmail.com">
              <MagneticButton className="gap-3 px-8 text-lg"><EnvelopeSimple size={24} /> <span className="tracking-tight">Email Me</span></MagneticButton>
            </a>
            <a href="tel:9515692690">
              <MagneticButton className="gap-3 px-8 text-lg bg-transparent border border-zinc-300 text-zinc-950 dark:bg-transparent dark:border-zinc-800 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900"><Phone size={24} /> <span className="tracking-tight">(+91) 95156 92690</span></MagneticButton>
            </a>
            <a href="https://www.linkedin.com/in/burra-praneeth-76b326287/" target="_blank" rel="noopener noreferrer">
              <MagneticButton className="gap-3 px-8 text-lg bg-transparent border border-zinc-300 text-zinc-950 dark:bg-transparent dark:border-zinc-800 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900"><LinkedinLogo size={24} /> <span className="tracking-tight">LinkedIn</span></MagneticButton>
            </a>
          </div>

          {/* Premium Zoro Showcase in Footer */}
          <div className="w-full max-w-5xl relative h-[250px] md:h-[350px] rounded-[2.5rem] overflow-hidden diffusion-shadow mb-8 mt-12 bg-zinc-950">
            <Image
              src="/zoro.webp"
              alt="Zoro cinematic three-sword style combat strike"
              fill
              className="object-cover hover:scale-[1.03] transition-transform duration-[1.5s] ease-out mix-blend-screen"
              priority
              quality={100}
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white/90 font-mono text-sm tracking-widest uppercase font-semibold whitespace-nowrap z-10">
              <FlowerLotus size={24} weight="light" className="text-white/60" />
              <span>Burra Praneeth Goud © 2026</span>
              <FlowerTulip size={24} weight="light" className="text-white/60" />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
