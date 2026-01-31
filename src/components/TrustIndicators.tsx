import { motion } from "framer-motion";
import { Zap, ShieldCheck, Star } from "lucide-react";

const indicators = [
  {
    icon: Zap,
    title: "Entrega Flash",
    subtitle: "via WhatsApp",
  },
  {
    icon: ShieldCheck,
    title: "Compra",
    subtitle: "100% Segura",
  },
  {
    icon: Star,
    title: "+10.000",
    subtitle: "Clientes Satisfeitos",
  },
];

const TrustIndicators = () => {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl font-bold text-center text-foreground mb-12"
        >
          Social Proof
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {indicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4">
                <indicator.icon className="w-10 h-10 text-gold" strokeWidth={1.5} />
              </div>
              <p className="font-semibold text-foreground">
                {indicator.title}
              </p>
              <p className="text-muted-foreground text-sm">
                {indicator.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
