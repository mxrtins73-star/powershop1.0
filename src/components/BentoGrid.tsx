import { motion } from "framer-motion";
import { Flame, TrendingUp, Clock, Sparkles, Trophy } from "lucide-react";
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
    hot: "bg-crimson text-white",
    sale: "bg-gold text-black",
    new: "bg-blue-600 text-white",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden cursor-pointer ${isGold ? "border-2 border-gold" : "border-0"
        } ${className} clip-angled bg-card/50`}
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
        className={`absolute inset-0 transition-all duration-500 ${isGhost
            ? "bg-secondary/40 group-hover:bg-secondary/60"
            : backgroundImage
              ? "bg-gradient-to-t from-black via-black/50 to-transparent group-hover:via-black/40"
              : "bg-secondary group-hover:bg-secondary/90"
          }`}
      />

      {/* Hexotech Overlay Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

      {/* Badge */}
      {badge && (
        <div className={`absolute top-0 right-0 z-20 flex items-center gap-1.5 px-4 py-1 text-xs font-bold uppercase tracking-wider clip-angled-reverse ${badgeStyles[badge.variant || "hot"]}`}>
          {badge.icon}
          {badge.text}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        <div className="transform transition-transform duration-300 group-hover:translate-x-2">
          <h3
            className={`text-2xl md:text-3xl font-black uppercase tracking-tighter italic ${isGold ? "text-gradient-gold" : "text-white"
              }`}
          >
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm font-mono text-gray-400 mt-1 border-l-2 border-crimson pl-2">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-crimson/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-crimson shadow-[0_0_20px_rgba(217,38,50,0.8)]" />
      </div>
    </motion.div>
  );
};

const BentoGrid = () => {
  return (
    <section className="py-20 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-crimson/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 text-crimson mb-2">
              <Trophy className="w-5 h-5" />
              <span className="font-mono text-sm tracking-widest uppercase">Vault Access</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
              Catálogo <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">Principal</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-right font-mono text-sm leading-relaxed hidden md:block">
            Selecione seu destino. <br />
            Recursos premium com entrega imediata.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {/* Dragon City - Feature */}
          <GameCard
            title="Dragon City"
            subtitle="Gemas // Ouro // Dragões"
            backgroundImage={dragonCityBg}
            className="col-span-1 md:col-span-2 md:row-span-2 min-h-[350px]"
            badge={{ text: "Mais Vendido", icon: <Flame className="w-3 h-3" />, variant: "hot" }}
            delay={0.1}
          />

          {/* Roblox */}
          <GameCard
            title="Roblox"
            subtitle="Robux Fast_Transfer"
            backgroundImage={robloxBg}
            className="col-span-1 md:col-span-1 min-h-[250px]"
            badge={{ text: "Popular", icon: <TrendingUp className="w-3 h-3" />, variant: "new" }}
            delay={0.2}
          />

          {/* 8 Ball Pool */}
          <GameCard
            title="8 Ball Pool"
            subtitle="Coins & Cash"
            backgroundImage={eightBallBg}
            className="col-span-1 md:col-span-1 min-h-[250px]"
            delay={0.3}
          />

          {/* Promoções - Gold Special */}
          <GameCard
            title="Promoções"
            subtitle="Ofertas por tempo limitado"
            isGold
            className="col-span-1 md:col-span-2 min-h-[200px]"
            badge={{ text: "Flash Sale", icon: <Clock className="w-3 h-3" />, variant: "sale" }}
            delay={0.4}
          />

          {/* Outros Jogos */}
          <GameCard
            title="Outros Jogos"
            subtitle="Ver catálogo completo"
            isGhost
            className="col-span-1 md:col-span-2 min-h-[200px]"
            badge={{ text: "Expansão", icon: <Sparkles className="w-3 h-3" />, variant: "new" }}
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
