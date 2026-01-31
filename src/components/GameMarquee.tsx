import { motion } from "framer-motion";

const games = [
  { name: "ROBLOX", emoji: "🎮" },
  { name: "DRAGON CITY", emoji: "🐉" },
  { name: "FREE FIRE", emoji: "🔥" },
  { name: "LEAGUE OF LEGENDS", emoji: "⚔️" },
  { name: "CLASH ROYALE", emoji: "👑" },
  { name: "8 BALL POOL", emoji: "🎱" },
  { name: "BRAWL STARS", emoji: "⭐" },
  { name: "STUMBLE GUYS", emoji: "🏃" },
];

const GameMarquee = () => {
  return (
    <section className="relative py-8 bg-secondary/30 border-y border-border/50 overflow-hidden">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set */}
        {[...games, ...games].map((game, index) => (
          <motion.div
            key={`item-${index}`}
            whileHover={{ scale: 1.05 }}
            className="mx-6 md:mx-10 flex items-center gap-2 cursor-pointer group"
          >
            <span className="text-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300">
              {game.emoji}
            </span>
            <span className="text-base md:text-lg font-bold tracking-wider text-muted-foreground group-hover:text-foreground transition-all duration-300">
              {game.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GameMarquee;
