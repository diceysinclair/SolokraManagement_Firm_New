import { Users, FileText, Search, Trophy, Star, Handshake, CheckCircle, ArrowRight, Globe, Shield, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  { icon: Users, title: "Player Representation", desc: "We act as dedicated advocates for our players, ensuring their interests are protected at every stage. From transfer negotiations to day-to-day management, we provide comprehensive support." },
  { icon: FileText, title: "Contract Negotiation", desc: "Our experienced legal and negotiation team secures the most favorable terms for our clients. We analyze market trends and leverage our network to achieve optimal outcomes." },
  { icon: Search, title: "Talent Scouting", desc: "Our global scouting network spans five continents, identifying emerging talent before they hit the mainstream. We combine data analytics with traditional scouting expertise." },
  { icon: Trophy, title: "Career Management", desc: "We develop personalized career roadmaps that align with each player's ambitions. From youth development to post-retirement planning, we guide every step of the journey." },
  { icon: Star, title: "Branding & Sponsorship", desc: "We build powerful personal brands that extend beyond the pitch. Our commercial team connects players with premium sponsors and media opportunities." },
  { icon: Handshake, title: "Transfer Advisory", desc: "Strategic guidance through the complex world of football transfers. We ensure seamless transitions that benefit players, selling clubs, and buying clubs alike." },
];

const stats = [
  { value: "€500M+", label: "Transfer Deals Completed" },
  { value: "200+", label: "Players Represented" },
  { value: "45+", label: "Partner Clubs Worldwide" },
  { value: "98%", label: "Client Satisfaction Rate" },
];

const process = [
  { step: "01", title: "Discovery", desc: "We assess the player's current standing, strengths, and long-term aspirations through in-depth consultations." },
  { step: "02", title: "Strategy", desc: "A bespoke career plan is crafted, covering contract goals, target leagues, brand positioning, and financial planning." },
  { step: "03", title: "Execution", desc: "Our team activates its global network — negotiating deals, securing endorsements, and managing every detail." },
  { step: "04", title: "Growth", desc: "Ongoing performance reviews, media training, and strategic pivots ensure sustained career elevation." },
];

const whyUs = [
  { icon: Globe, text: "Global network across 30+ countries" },
  { icon: Shield, text: "Fully licensed FIFA-registered agents" },
  { icon: TrendingUp, text: "Data-driven market analysis & valuation" },
  { icon: Clock, text: "24/7 dedicated support for every client" },
  { icon: CheckCircle, text: "Transparent fee structure — no hidden costs" },
  { icon: Star, text: "Proven track record with top-tier clubs" },
];

const Services = () => (
  <div className="pt-16">
    {/* Hero */}
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <AnimatedSection>
          <p className="text-primary font-heading uppercase tracking-widest text-sm mb-4">What We Do</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase leading-tight">
            World-Class <span className="text-gold-gradient">Services</span>
          </h1>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Comprehensive management solutions tailored for elite athletes and their unique career needs.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="py-12 px-4 border-y border-border bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-heading text-3xl md:text-4xl font-bold text-gold-gradient">{s.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase">
            Our <span className="text-gold-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Every aspect of a player's career, managed with precision and passion.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <div className="p-8 rounded-lg border border-border bg-card hover:border-primary/40 transition-all duration-300 group h-full hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <s.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{s.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-24 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase">
            How We <span className="text-gold-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A proven four-step approach that turns potential into legacy.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <AnimatedSection key={p.step} delay={i * 0.12}>
              <div className="relative p-6 rounded-lg border border-border bg-card h-full">
                <span className="font-heading text-5xl font-bold text-primary/15 absolute top-4 right-4">{p.step}</span>
                <div className="relative z-10">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase">
            Why <span className="text-gold-gradient">Solokra</span>
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {whyUs.map((item, i) => (
            <AnimatedSection key={item.text} delay={i * 0.08}>
              <div className="flex items-center gap-4 p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors">
                <item.icon className="text-primary shrink-0" size={22} />
                <span className="text-foreground font-medium">{item.text}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 px-4">
      <AnimatedSection>
        <div className="container mx-auto max-w-3xl text-center p-12 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-4">
            Ready to <span className="text-gold-gradient">Elevate</span> Your Career?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Whether you're an emerging talent or an established professional, we have the expertise and network to take you to the next level.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground font-heading font-bold uppercase tracking-wider px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
          >
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </AnimatedSection>
    </section>
  </div>
);

export default Services;
