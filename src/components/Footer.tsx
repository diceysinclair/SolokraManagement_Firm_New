import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { NONAME } from "dns";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-heading text-2xl font-bold text-gold-gradient mb-4">SOLOKRA</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Premier sports management agency representing elite football talent worldwide.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["About", "Services", "Players", "Gallery", "Contact"].map((l) => (
              <Link key={l} to={`/${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4 text-foreground">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            
            <span className="flex items-center gap-2"><Mail size={14} /> solokramanagementfirm1@gmail.com</span>
            <span className="flex items-center gap-2"><Phone size={14} /> +233 59 609 3560</span>
            <span className="flex items-center gap-2"><MapPin size={14} /> Sefwi Boako, Ghana</span>
            
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4 text-foreground">Follow Us</h4>
          <div className="flex gap-3">
            {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Solokra Management Firm. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
