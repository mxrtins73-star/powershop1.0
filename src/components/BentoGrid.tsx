import { motion } from "framer-motion";
import { Flame, TrendingUp, Clock, Sparkles } from "lucide-react";
import dragonCityBg from "@/assets/dragon-city-bg.jpg";
import robloxBg from "@/assets/roblox-bg.jpg";
import eightBallBg from "@/assets/8ball-bg.jpg";

interface GameCardProps {
  title: string;
  backgroundImage?: string;
  className?: string;
  isGhost?: boolean;
  isGold?: boolean;
  delay?: number;
  badge?: {
    text: string;
    icon?: React.ReactNode;
    variant?: "hot" | "sale" | "new";
  };
  subtitle?: string;
}

const GameCard = ({
  title,
  backgroundImage,
  className = "",
  isGhost = false,
  isGold = false,
  delay = 0,
  badge,
  subtitle,
}: GameCardProps) => {
  const badgeStyles = {
    hot: "bg-primary/90 text-primary-foreground",
    sale: "bg-gold/90 text-background",
    new: "bg-emerald-500/90 text-white",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, y: -4 }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-shadow duration-300 ${
        isGold ? "border-2 border-gold/60 hover:border-gold" : "border border-border/60 hover:border-border"
      } ${className}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          isGhost
            ? "bg-secondary/90 group-hover:bg-secondary/80"
            : backgroundImage
            ? "bg-gradient-to-t from-background via-background/70 to-background/30 group-hover:from-background/95"
            : "bg-secondary group-hover:bg-secondary/90"
        }`}
      />

      {/* Badge - Von Restorff & Scarcity */}
      {badge && (
        <div className={`absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${badgeStyles[badge.variant || "hot"]}`}>
          {badge.icon}
          {badge.text}
        </div>
      )}

      {/* Content - Gestalt: Proximity */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        <h3
          className={`text-xl md:text-2xl font-black uppercase tracking-wide transition-transform duration-300 group-hover:translate-x-1 ${
            isGold ? "text-gold" : "text-foreground"
          }`}
        >
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-1 transition-opacity duration-300 opacity-70 group-hover:opacity-100">
            {subtitle}
          </p>
        )}
      </div>

      {/* Hover glow effect - Doherty Threshold: Immediate feedback */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
        <div className="absolute inset-0 bg-primary/5" />
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            boxShadow: isGold 
              ? "inset 0 0 40px rgba(198, 156, 58, 0.2), 0 0 30px rgba(198, 156, 58, 0.15)"
              : "inset 0 0 40px rgba(217, 38, 50, 0.15), 0 0 30px rgba(217, 38, 50, 0.1)",
          }}
        />
      </div>

      {/* Arrow indicator on hover */}
      <div className="absolute bottom-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
        <span className="text-2xl text-foreground/60">→</span>
      </div>
    </motion.div>
  );
};

const BentoGrid = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header - Serial Position: Key info first */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Catálogo
          </span>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-wide text-foreground">
            Escolha Seu Jogo
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Selecione o jogo e encontre os melhores recursos com preços imbatíveis
          </p>
        </motion.div>

        {/* Bento Grid Layout - Gestalt: Common Region */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {/* Dragon City - Large/Featured (spans 2 rows) */}
          <GameCard
            title="Dragon City"
            subtitle="Gemas, ouro e dragões"
            backgroundImage={dragonCityBg}
            className="col-span-2 row-span-2 min-h-[300px] md:min-h-[420px]"
            badge={{ text: "Mais Vendido", icon: <Flame className="w-3 h-3" />, variant: "hot" }}
            delay={0.1}
          />

          {/* Roblox - Tall/Vertical */}
          <GameCard
            title="Roblox"
            subtitle="Robux instantâneo"
            backgroundImage={robloxBg}
            className="min-h-[180px] md:min-h-[200px]"
            badge={{ text: "Popular", icon: <TrendingUp className="w-3 h-3" />, variant: "new" }}
            delay={0.2}
          />

          {/* 8 Ball Pool - Square */}
          <GameCard
            title="8 Ball Pool"
            subtitle="Moedas e tacos"
            backgroundImage={eightBallBg}
            className="min-h-[180px] md:min-h-[200px]"
            delay={0.3}
          />

          {/* Outros Jogos - Ghost button style */}
          <GameCard
            title="Outros Jogos"
            subtitle="Free Fire, LoL e mais"
            isGhost
            className="min-h-[180px] md:min-h-[200px]"
            badge={{ text: "Novo", icon: <Sparkles className="w-3 h-3" />, variant: "new" }}
            delay={0.4}
          />

          {/* Promoções da Semana - Wide/Horizontal with gold accent */}
          <GameCard
            title="Promoções da Semana"
            subtitle="Até 40% OFF"
            isGold
            className="min-h-[180px] md:min-h-[200px]"
            badge={{ text: "Tempo Limitado", icon: <Clock className="w-3 h-3" />, variant: "sale" }}
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
