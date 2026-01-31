import { motion } from "framer-motion";
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
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-foreground mb-6"
          >
            A MAIOR LOJA DE RECURSOS PARA JOGOS DO BRASIL
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg"
          >
            Segurança, entrega rápida e os melhores preços para dominar o seu jogo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <button className="group relative px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 glow-crimson-hover">
              <span className="relative z-10">Ver Ofertas</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
