import { motion } from "framer-motion";
import { Shield, Zap, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-start pt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gradient - enhanced for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
      
      {/* Subtle grid pattern for depth */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Trust badge - Authority Bias */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">+10.000</span> clientes atendidos hoje
            </span>
          </motion.div>

          {/* H1 - Clear value proposition */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-foreground mb-6"
          >
            A MAIOR LOJA DE{" "}
            <span className="text-gradient-crimson">RECURSOS</span>{" "}
            PARA JOGOS DO BRASIL
          </motion.h1>

          {/* Subtext - Benefits focused */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed"
          >
            Segurança garantida, entrega em minutos e os melhores preços para 
            <span className="text-foreground font-medium"> dominar o seu jogo</span>.
          </motion.p>

          {/* CTA Section - Fitts' Law: Large touch target */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            {/* Primary CTA - Von Restorff: Stands out */}
            <button className="group relative px-8 py-4 min-h-[56px] bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] glow-crimson-hover">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Ver Ofertas
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            {/* Secondary CTA */}
            <button className="px-8 py-4 min-h-[56px] border border-border text-foreground font-semibold uppercase tracking-wider rounded-xl transition-all duration-300 hover:bg-secondary hover:border-muted-foreground/30">
              Como Funciona?
            </button>
          </motion.div>

          {/* Trust indicators inline - Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap items-center gap-6 text-sm"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="w-4 h-4 text-gold" />
              <span>Entrega em <span className="text-foreground font-medium">5 min</span></span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span>100% <span className="text-foreground font-medium">Seguro</span></span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-4 h-4 text-primary" />
              <span><span className="text-foreground font-medium">50k+</span> avaliações</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
