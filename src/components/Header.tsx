import { motion } from "framer-motion";
import { User, ShoppingCart } from "lucide-react";
import logo from "@/assets/powershop-logo.png";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="PowerShop" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Navigation - Center */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-foreground font-medium text-sm uppercase tracking-wide hover:text-primary transition-colors border-b-2 border-primary pb-1"
            >
              Início
            </a>
            <a
              href="#"
              className="text-muted-foreground font-medium text-sm uppercase tracking-wide hover:text-foreground transition-colors"
            >
              Suporte
            </a>
            <a
              href="#"
              className="text-muted-foreground font-medium text-sm uppercase tracking-wide hover:text-foreground transition-colors"
            >
              Feedbacks
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary rounded-full flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                1
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
