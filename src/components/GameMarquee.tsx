import { motion } from "framer-motion";

const games = [
  "ROBLOX",
  "DRAGON CITY",
  "FREE FIRE",
  "LEAGUE OF LEGENDS",
  "CLASH ROYALE",
  "8 BALL POOL",
  "BRAWL STARS",
  "STUMBLE GUYS",
];

const GameMarquee = () => {
  return (
    <section className="relative py-10 bg-black border-y border-white/10 overflow-hidden">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {/* Triple duplication for smooth infinite loop on wide screens */}
        {[...games, ...games, ...games].map((game, index) => (
          <motion.div
            key={`item-${index}`}
            whileHover={{ scale: 1.05 }}
            className="mx-8 md:mx-16 flex items-center gap-4 cursor-pointer group hover:opacity-100 transition-all duration-300"
          >
            {/* Dot separator */}
            <div className="w-1.5 h-1.5 rounded-full bg-crimson shadow-[0_0_10px_var(--crimson)]" />

            <span className="text-3xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20 group-hover:from-white group-hover:to-white/60 font-display uppercase italic opacity-80 group-hover:opacity-100 transition-opacity">
              {game}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GameMarquee;
