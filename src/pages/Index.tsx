import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GameMarquee from "@/components/GameMarquee";
import BentoGrid from "@/components/BentoGrid";
import TrustIndicators from "@/components/TrustIndicators";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <GameMarquee />
        <BentoGrid />
        <TrustIndicators />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
