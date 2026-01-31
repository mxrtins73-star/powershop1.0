import { motion } from "framer-motion";
import { Zap, ShieldCheck, Star, MessageCircle, CreditCard, Headphones } from "lucide-react";

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

const testimonials = [
  {
    name: "Lucas M.",
    avatar: "LM",
    game: "Dragon City",
    text: "Comprei gemas e chegou em 3 minutos! Melhor loja que já usei.",
    rating: 5,
  },
  {
    name: "Ana P.",
    avatar: "AP",
    game: "Roblox",
    text: "Robux chegou super rápido e o preço foi o melhor que encontrei.",
    rating: 5,
  },
  {
    name: "Gabriel S.",
    avatar: "GS",
    game: "8 Ball Pool",
    text: "Excelente atendimento! Tive uma dúvida e resolveram na hora.",
    rating: 5,
  },
];

const TrustIndicators = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Bar - Social Proof with numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-20"
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
              <div className="text-3xl md:text-4xl font-black text-foreground mb-1">
                {stat.value}
                {stat.suffix && <span className="text-gold">{stat.suffix}</span>}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Por que escolher a PowerShop?
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-foreground">
            Confiança de Milhares de Jogadores
          </h2>
        </motion.div>

        {/* Features Grid - Gestalt: Proximity & Common Region */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials - Social Proof with faces */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            O Que Nossos Clientes Dizem
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border/50"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author - Authority with avatar */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.game}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
