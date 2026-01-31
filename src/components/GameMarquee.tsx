const games = [
  { name: "ROBLOX", logo: "ROBLOX" },
  { name: "DRAGON CITY", logo: "DRAGON CITY" },
  { name: "FREE FIRE", logo: "FREE FIRE" },
  { name: "LEAGUE OF LEGENDS", logo: "LEAGUE OF LEGENDS" },
  { name: "CLASH ROYALE", logo: "CLASH ROYALE" },
  { name: "8 BALL POOL", logo: "8 BALL POOL" },
];

const GameMarquee = () => {
  return (
    <section className="relative py-6 bg-secondary/50 border-y border-border overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set */}
        {games.map((game, index) => (
          <div
            key={`first-${index}`}
            className="mx-8 md:mx-12 flex items-center grayscale-hover cursor-pointer"
          >
            <span className="text-lg md:text-xl font-black tracking-wider text-muted-foreground hover:text-foreground transition-all duration-300">
              {game.logo}
            </span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {games.map((game, index) => (
          <div
            key={`second-${index}`}
            className="mx-8 md:mx-12 flex items-center grayscale-hover cursor-pointer"
          >
            <span className="text-lg md:text-xl font-black tracking-wider text-muted-foreground hover:text-foreground transition-all duration-300">
              {game.logo}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameMarquee;
