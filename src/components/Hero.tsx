import { motion } from "framer-motion";
import { Shield, Zap, Users, Play } from "lucide-react";
import obsidianBg from "@/assets/obsidian-bg.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with parallax-like feel */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${obsidianBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content - Magazine Style */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="h-[2px] w-12 bg-crimson" />

          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase mb-8 font-display"
          >
            Power<span className="text-transparent bg-clip-text bg-gradient-to-br from-crimson to-red-900">Shop</span>
            <br />
            <span className="text-outline-white text-transparent opacity-30 text-5xl md:text-7xl">
              Dominância
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 border-l-4 border-crimson pl-6 max-w-xl"
          >
            A plataforma definitiva para quem joga sério. Entrega automática, suporte 24/7 e preços que quebram o mercado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-6"
          >
            <button className="btn-premium px-10 py-5 text-lg group clip-angled">
              <span className="relative z-10 flex items-center gap-2">
                Começar Agora
                <Zap className="w-5 h-5 group-hover:text-yellow-400 transition-colors" />
              </span>
            </button>

            <button className="px-10 py-5 bg-secondary/50 backdrop-blur border border-white/10 hover:bg-white/5 transition-all uppercase font-bold tracking-wider clip-angled text-white/80 hover:text-white group">
              <span className="flex items-center gap-3">
                <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                Demo Visual
              </span>
            </button>
          </motion.div>

        </div>

        {/* Right Content - Abstract visual or 3D element placeholder */}
        <div className="hidden lg:block relative">
          {/* Decorative glowing orb/portal effect behind text or product */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-crimson/20 rounded-full blur-[100px]"
          />

          {/* Floating Cards with "Glass" effect */}

        </div>
      </div>


    </section>
  );
};

export default Hero;
