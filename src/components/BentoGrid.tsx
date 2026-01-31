import { motion } from "framer-motion";
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
}

const GameCard = ({
  title,
  backgroundImage,
  className = "",
  isGhost = false,
  isGold = false,
  delay = 0,
}: GameCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`relative overflow-hidden rounded-xl cursor-pointer card-hover ${
        isGold ? "border-2 border-gold" : "border border-border"
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
        className={`absolute inset-0 ${
          isGhost
            ? "bg-secondary/80"
            : backgroundImage
            ? "bg-gradient-to-t from-background/95 via-background/60 to-transparent"
            : "bg-secondary"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end p-6">
        <h3
          className={`text-xl md:text-2xl font-black uppercase tracking-wide ${
            isGold ? "text-gold" : "text-foreground"
          }`}
        >
          {title}
        </h3>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-primary/10" />
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            boxShadow: "inset 0 0 30px rgba(217, 38, 50, 0.3)",
          }}
        />
      </div>
    </motion.div>
  );
};

const BentoGrid = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-black uppercase tracking-wider text-center mb-12 text-foreground"
        >
          Escolha Seu Jogo
        </motion.h2>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {/* Dragon City - Large/Featured (spans 2 rows) */}
          <GameCard
            title="Dragon City"
            backgroundImage={dragonCityBg}
            className="col-span-2 row-span-2 min-h-[300px] md:min-h-[400px]"
            delay={0.1}
          />

          {/* Roblox - Tall/Vertical */}
          <GameCard
            title="Roblox"
            backgroundImage={robloxBg}
            className="min-h-[180px] md:min-h-[190px]"
            delay={0.2}
          />

          {/* 8 Ball Pool - Square */}
          <GameCard
            title="8 Ball Pool"
            backgroundImage={eightBallBg}
            className="min-h-[180px] md:min-h-[190px]"
            delay={0.3}
          />

          {/* Outros Jogos - Ghost button style */}
          <GameCard
            title="Outros Jogos"
            isGhost
            className="min-h-[180px] md:min-h-[190px]"
            delay={0.4}
          />

          {/* Promoções da Semana - Wide/Horizontal with gold accent */}
          <GameCard
            title="Promoções da Semana"
            isGold
            className="min-h-[180px] md:min-h-[190px]"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
