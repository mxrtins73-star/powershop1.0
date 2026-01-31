import { motion } from "framer-motion";
import { Zap, ShieldCheck, Star, MessageCircle, CreditCard, Headphones, Trophy } from "lucide-react";

const stats = [
  { value: "50k+", label: "Clientes Satisfeitos" },
  { value: "5 min", label: "Tempo Médio de Entrega" },
  { value: "4.9", label: "Avaliação Média", suffix: "★" },
  { value: "24/7", label: "Suporte Disponível" },
];

const features = [
  {
    icon: Zap,
    title: "Entrega Flash",
    description: "Receba seus recursos em até 5 minutos via WhatsApp. Sem espera, sem complicação.",
  },
  {
    icon: ShieldCheck,
    title: "100% Seguro",
    description: "Transações protegidas e conta garantida. Sua segurança é nossa prioridade.",
  },
  {
    icon: CreditCard,
    title: "Pagamento Fácil",
    description: "Pix, cartão ou boleto. Escolha a forma que preferir, sem taxas escondidas.",
  },
  {
    icon: Headphones,
    title: "Suporte Humano",
    description: "Atendimento real 24/7. Nada de robôs, você fala com pessoas de verdade.",
  },
];

const TrustIndicators = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-background">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-grid-white opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Bar - Social Proof with numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-20 p-8 glass-panel clip-angled"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-black text-white mb-2 font-display">
                {stat.value}
                {stat.suffix && <span className="text-crimson">{stat.suffix}</span>}
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="w-6 h-6 text-gold" />
            <span className="text-gold font-mono uppercase tracking-widest text-sm">Elite Status</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Confiança de <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson to-red-500">Líderes</span>
          </h2>
        </motion.div>

        {/* Features Grid - Gestalt: Proximity & Common Region */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 relative overflow-hidden bg-card/20 border border-white/5 hover:border-crimson/50 transition-all duration-300 clip-angled"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-crimson/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150" />

              <div className="w-14 h-14 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-crimson group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-white mb-3 uppercase tracking-wide">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-mono">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials - Social Proof with faces */}

      </div>
    </section>
  );
};

export default TrustIndicators;
