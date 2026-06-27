import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, FileText, Search, Trophy, Star, Handshake, Megaphone, Quote } from "lucide-react";
import heroImg from "@/assets/hero-stadium.jpg";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import PlayerCard from "@/components/PlayerCard";
import { players } from "@/data/players";
import { announcements } from "@/data/announcements";
import { testimonials } from "@/data/testimonials";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const services = [
  { icon: Users, title: "Player Representation", desc: "Elite athlete management with personalized career strategies." },
  { icon: FileText, title: "Contract Negotiation", desc: "Securing the best terms and conditions for our clients." },
  { icon: Search, title: "Talent Scouting", desc: "Identifying the next generation of football superstars." },
  { icon: Trophy, title: "Career Management", desc: "Long-term career planning from youth to retirement." },
  { icon: Star, title: "Branding & Sponsorship", desc: "Building powerful personal brands and commercial partnerships." },
  { icon: Handshake, title: "Transfer Advisory", desc: "Strategic guidance for seamless club transitions." },
];

const categoryColor: Record<string, string> = {
  Transfer: "bg-primary/20 text-primary border-primary/30",
  Partnership: "bg-accent/20 text-accent-foreground border-accent/30",
  Award: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Event: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  News: "bg-muted text-muted-foreground border-border",
};

const Index = () => {
  const [currentPlayer, setCurrentPlayer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlayer((prev) => (prev + 1) % players.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
  <div>
    {/* Hero */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Stadium" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsla(220,20%,7%,0.4) 0%, hsla(220,20%,7%,0.9) 100%)" }} />
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-7xl font-bold uppercase tracking-wide leading-tight"
        >
          Uneathing Talent.{" "} <br />
          <span className="text-gold-gradient">Home of Happiness.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-muted-foreground text-lg md:text-xl mt-6 max-w-2xl mx-auto"
        >
          Solokra Management Firm — the premier sports agency representing elite football talent worldwide.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Link to="/players">
            <Button size="lg" className="bg-gold-gradient text-primary-foreground font-heading uppercase tracking-wider text-base px-8 hover:opacity-90 transition-opacity">
              View Players <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-primary text-primary font-heading uppercase tracking-wider text-base px-8 hover:bg-primary hover:text-primary-foreground transition-all">
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Player Showcase - Auto-rotating */}
    <section className="py-24 px-4 bg-card">
      <div className="container mx-auto">
        <SectionHeading title="Player Spotlight" subtitle="Meet our elite athletes — one at a time." />
        <div className="relative max-w-xs mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={players[currentPlayer].id}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5 }}
            >
              <Link to={`/players/${players[currentPlayer].id}`} className="block">
                <div className="rounded-xl overflow-hidden border border-border bg-background hover:border-primary/40 transition-colors">
                  <img
                    src={players[currentPlayer].image}
                    alt={players[currentPlayer].name}
                    className="w-full aspect-[3/4] object-cover"
                  />
                  <div className="p-5 text-center">
                    <h3 className="font-heading text-xl font-bold text-foreground">{players[currentPlayer].name}</h3>
                    <p className="text-sm text-primary mt-1">{players[currentPlayer].position} · {players[currentPlayer].nationality}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {players.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPlayer(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentPlayer ? "bg-primary" : "bg-muted-foreground/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Featured Players */}
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <SectionHeading title="Featured Players" subtitle="Our roster of elite athletes competing at the highest level." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {players.slice(0, 4).map((p, i) => (
            <AnimatedSection key={p.id} delay={i * 0.1}>
              <PlayerCard player={p} />
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/players">
            <Button variant="outline" className="border-primary text-primary font-heading uppercase tracking-wider hover:bg-primary hover:text-primary-foreground">
              View All Players <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Announcements */}
    <section className="py-24 px-4 bg-card">
      <div className="container mx-auto">
        <SectionHeading title="Announcements" subtitle="Latest news and updates from Solokra Management." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.slice(0, 3).map((a, i) => (
            <AnimatedSection key={a.id} delay={i * 0.1}>
              <div className="p-6 rounded-lg border border-border bg-background hover:border-primary/40 transition-colors h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className={categoryColor[a.category] || categoryColor.News}>
                    {a.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{new Date(a.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{a.summary}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/announcements">
            <Button variant="outline" className="border-primary text-primary font-heading uppercase tracking-wider hover:bg-primary hover:text-primary-foreground">
              All Announcements <Megaphone className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <SectionHeading title="Our Services" subtitle="Comprehensive management solutions for professional athletes." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors group">
                <s.icon className="text-primary mb-4" size={32} />
                <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-24 px-4 bg-card">
      <div className="container mx-auto">
        <SectionHeading title="What They Say" subtitle="Trusted by clubs, loved by players." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <AnimatedSection key={t.id} delay={i * 0.1}>
              <div className="p-6 rounded-lg border border-border bg-background h-full flex flex-col">
                <Quote className="text-primary mb-4 shrink-0" size={28} />
                <p className="text-muted-foreground italic flex-1 leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="font-heading font-semibold text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}{t.club ? ` · ${t.club}` : ""}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 px-4 text-center">
      <AnimatedSection>
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-6">
          Ready to <span className="text-gold-gradient">Elevate</span> Your Career?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Join Solokra and unlock your full potential with world-class management and representation.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-gold-gradient text-primary-foreground font-heading uppercase tracking-wider text-base px-10 hover:opacity-90">
            Get in Touch
          </Button>
        </Link>
      </AnimatedSection>
    </section>
  </div>
  );
};

export default Index;
