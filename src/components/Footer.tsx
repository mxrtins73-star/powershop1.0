import { motion } from "framer-motion";
import { Shield, Lock, CreditCard, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import logo from "@/assets/powershop-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-crimson to-transparent opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-crimson rounded-sm rotate-45" />
              <span className="text-2xl font-black text-white tracking-tighter uppercase">PowerShop</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed font-mono">
              Domine seus jogos favoritos com recursos premium entregues instantaneamente. Segurança e velocidade em primeiro lugar.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest mb-6 text-sm">Navegação</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#" className="text-gray-500 hover:text-crimson transition-colors">Início</a></li>
              <li><a href="#" className="text-gray-500 hover:text-crimson transition-colors">Catálogo</a></li>
              <li><a href="#" className="text-gray-500 hover:text-crimson transition-colors">Promoções</a></li>
              <li><a href="#" className="text-gray-500 hover:text-crimson transition-colors">Status do Sistema</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest mb-6 text-sm">Suporte</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#" className="text-gray-500 hover:text-crimson transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-500 hover:text-crimson transition-colors">Disputas</a></li>
              <li><a href="#" className="text-gray-500 hover:text-crimson transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-500 hover:text-crimson transition-colors">Privacidade</a></li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest mb-6 text-sm">Conecte-se</h4>
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-crimson hover:text-white transition-all text-gray-400">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-crimson hover:text-white transition-all text-gray-400">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-crimson hover:text-white transition-all text-gray-400">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="bg-white/5 p-4 rounded border border-white/10">
              <p className="text-xs text-gray-500 mb-2 font-mono">STATUS DO SERVIDOR</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-500 text-sm font-bold uppercase">Operacional</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 font-mono">
            © {currentYear} PowerShop Gaming Services. All systems normal.
          </p>

          {/* Payment methods */}
          <div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="text-xs text-gray-600 mr-2">SECURE PAYMENT:</span>
            <div className="h-6 w-10 bg-white/10 rounded" />
            <div className="h-6 w-10 bg-white/10 rounded" />
            <div className="h-6 w-10 bg-white/10 rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
