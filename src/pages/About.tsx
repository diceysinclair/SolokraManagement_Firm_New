import { Target, Eye, Shield, Award, Users, Globe } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import managerImg from "@/assets/Manager-1.jpg";

const values = [
  { icon: Shield, title: "Integrity", desc: "Transparent and ethical representation at every level." },
  { icon: Target, title: "Excellence", desc: "Relentless pursuit of the highest standards in sports management." },
  { icon: Users, title: "Partnership", desc: "Building lasting relationships with players, clubs, and brands." },
  { icon: Globe, title: "Global Reach", desc: "A worldwide network spanning 40+ countries." },
];

const milestones = [
  { year: "2022", event: "Solokra Management Firm founded in Sefwi Boako, Ghana, with a vision to develop and represent local football talent." },
  { year: "2023", event: "Signed first roster of players from local clubs including Memphis FC, Kofi's FC, and Boako Nationals." },
  { year: "2023", event: "Secured representation deals for players competing in the Access Bank Division One league." },
  { year: "2024", event: "Expanded player portfolio to include female athletes, signing players from Ashtown Ladies and Dreamz Ladies." },
  { year: "2024", event: "Facilitated career moves for players to clubs including Al-Rayyan Sports Club and Samuel Inkoom Academy." },
  { year: "2025", event: "Now representing 10 elite athletes across multiple clubs and leagues, with ambitions to place players in top-tier African and international leagues." },
];

const About = () => (
  <div className="pt-16">
    {/* Hero */}
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <p className="text-primary font-heading uppercase tracking-widest text-sm mb-4">About Us</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase leading-tight">
            The <span className="text-gold-gradient">Future</span> of Sports Management
          </h1>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            Solokra Management Firm was founded with a singular mission: to provide elite athletes with the strategic guidance, personal attention, and global connections they need to thrive on and off the pitch.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Manager / Founder */}
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-5xl">
        <AnimatedSection>
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-2">
              <div className="relative rounded-lg overflow-hidden border border-border">
                <img
                  src={managerImg}
                  alt="Nana Antwi Boasiako —  CEO"
                  loading="lazy"
                  width={768}
                  height={960}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>
            <div className="md:col-span-3">
              <p className="text-primary font-heading uppercase tracking-widest text-sm mb-2">Founder &amp; CEO</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-foreground mb-4">
                Nana Antwi <span className="text-gold-gradient">"Tymmer"</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nana Antwi Boasiako, known in football circles as "Tymmer", is a forward-thinking talent manager dedicated to identifying and signing players to help them reach their full professional potential. Through strategic career guidance and strong leadership, he transforms athletes into world-class stars.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under his mentorship, every player gains the discipline and focus needed to secure major contracts and achieve long-term success throughout their career. His hands-on approach ensures that each athlete under his care receives personalised attention and a clear roadmap to professional excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A proud Ghanaian based in Accra, Nana brings deep knowledge of African football talent and a passionate commitment to elevating Ghanaian athletes onto the world stage.
              </p>
              <div className="mt-6 flex flex-wrap gap-6 text-sm">
                <div>
                  <p className="text-primary font-heading font-semibold uppercase text-xs tracking-wider">Position</p>
                  <p className="text-foreground"> CEO</p>
                </div>
                <div>
                  <p className="text-primary font-heading font-semibold uppercase text-xs tracking-wider">Based In</p>
                  <p className="text-foreground">Sefwi Boako, Ghana</p>
                </div>
                <div>
                  <p className="text-primary font-heading font-semibold uppercase text-xs tracking-wider">Nationality</p>
                  <p className="text-foreground">Ghanaian</p>
                </div>
                <div>
                  <p className="text-primary font-heading font-semibold uppercase text-xs tracking-wider">Known As</p>
                  <p className="text-foreground">"Tymmer"</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 max-w-5xl">
        <AnimatedSection>
          <div className="flex items-start gap-4">
            <Target className="text-primary mt-1 shrink-0" size={28} />
            <div>
              <h3 className="font-heading text-2xl font-bold mb-3 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower athletes with world-class representation, strategic career planning, and commercial opportunities that maximize their potential and secure their legacy.
              </p>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <div className="flex items-start gap-4">
            <Eye className="text-primary mt-1 shrink-0" size={28} />
            <div>
              <h3 className="font-heading text-2xl font-bold mb-3 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and innovative sports management agency in the world, setting new standards for athlete representation and career development.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Values */}
    <section className="py-24 px-4 bg-card">
      <div className="container mx-auto">
        <SectionHeading title="Our Values" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="text-center p-6 rounded-lg border border-border bg-background">
                <v.icon className="text-primary mx-auto mb-4" size={32} />
                <h4 className="font-heading text-lg font-semibold mb-2 text-foreground">{v.title}</h4>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Milestones */}
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading title="Milestones" subtitle="Key moments in our journey." />
        <div className="space-y-8">
          {milestones.map((m, i) => (
            <AnimatedSection key={m.year} delay={i * 0.08}>
              <div className="flex gap-6 items-start">
                <div className="font-heading text-2xl font-bold text-primary shrink-0 w-16">{m.year}</div>
                <div className="border-l border-border pl-6">
                  <p className="text-foreground">{m.event}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-24 px-4 bg-card">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          {[
            { val: "10+", label: "Elite Athletes" },
            { val: "5+", label: "Clubs Represented" },
            { val: "3+", label: "Years Active" },
            { val: "2", label: "Countries" },
          ].map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1}>
              <div className="font-heading text-3xl md:text-4xl font-bold text-gold-gradient">{s.val}</div>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
