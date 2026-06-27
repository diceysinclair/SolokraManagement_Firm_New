import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Target, Footprints, Eye, Mail, Download, User, ArrowRightLeft, Briefcase, Info } from "lucide-react";
import { motion } from "framer-motion";
import { players } from "@/data/players";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const PlayerProfile = () => {
  const { id } = useParams();
  const player = players.find((p) => p.id === id);

  if (!player) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Player Not Found</h1>
          <Link to="/players" className="text-primary hover:underline">← Back to Players</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={player.image} alt={player.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Link to="/players" className="text-primary text-sm flex items-center gap-1 mb-4 hover:underline">
              <ArrowLeft size={16} /> Back to Players
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-primary font-heading uppercase tracking-widest text-sm">{player.position}</p>
              <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase text-foreground">{player.name}</h1>
              <div className="flex gap-6 mt-3 text-muted-foreground text-sm">
                <span className="flex items-center gap-1"><MapPin size={14} /> {player.nationality}</span>
                <span className="flex items-center gap-1"><Calendar size={14} /> Age {player.age}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            {[
              { icon: Target, val: player.goals, label: "Goals" },
              { icon: Footprints, val: player.assists, label: "Assists" },
              { icon: Eye, val: player.appearances, label: "Appearances" },
            ].map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.1}>
                <s.icon className="text-primary mx-auto mb-2" size={24} />
                <div className="font-heading text-3xl md:text-4xl font-bold text-gold-gradient">{s.val}</div>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Details */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <Info className="text-primary" size={24} />
              <h2 className="font-heading text-2xl font-bold text-foreground">Personal Details</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Full Name", value: player.personalDetails.fullName },
                { label: "Date of Birth", value: player.personalDetails.dateOfBirth },
                { label: "Place of Birth", value: player.personalDetails.placeOfBirth },
                { label: "Height", value: player.personalDetails.height },
                { label: "Weight", value: player.personalDetails.weight },
                { label: "Preferred Foot", value: player.personalDetails.preferredFoot },
                { label: "Languages", value: player.personalDetails.languages.join(", ") },
                { label: "Contract Until", value: player.personalDetails.contractUntil },
                { label: "Market Value", value: player.personalDetails.marketValue },
              ].map((d) => (
                <div key={d.label} className="p-4 rounded-lg border border-border bg-card">
                  <p className="text-xs text-primary font-heading uppercase tracking-wider mb-1">{d.label}</p>
                  <p className="text-foreground text-sm font-medium">{d.value}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="font-heading text-2xl font-bold mb-4 text-foreground">Biography</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{player.bio}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Profile */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <User className="text-primary" size={24} />
              <h2 className="font-heading text-2xl font-bold text-foreground">Player Profile</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">{player.profile}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Career History */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-primary" size={24} />
              <h2 className="font-heading text-2xl font-bold text-foreground">Career History</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-3 pr-4 font-heading uppercase text-xs tracking-wider text-muted-foreground">Club</th>
                    <th className="pb-3 pr-4 font-heading uppercase text-xs tracking-wider text-muted-foreground">Seasons</th>
                    <th className="pb-3 pr-4 font-heading uppercase text-xs tracking-wider text-muted-foreground text-center">Apps</th>
                    <th className="pb-3 pr-4 font-heading uppercase text-xs tracking-wider text-muted-foreground text-center">Goals</th>
                    <th className="pb-3 font-heading uppercase text-xs tracking-wider text-muted-foreground text-center">Assists</th>
                  </tr>
                </thead>
                <tbody>
                  {player.careerHistory.map((c, i) => (
                    <tr key={i} className="border-b border-border/50 last:border-0">
                      <td className="py-3 pr-4 text-foreground font-medium">{c.club}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{c.seasons}</td>
                      <td className="py-3 pr-4 text-center text-foreground">{c.appearances}</td>
                      <td className="py-3 pr-4 text-center text-foreground">{c.goals}</td>
                      <td className="py-3 text-center text-foreground">{c.assists}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Goalkeeper Performance Stats */}
      {player.goalkeeperStats && player.goalkeeperStats.length > 0 && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-primary" size={24} />
                <h2 className="font-heading text-2xl font-bold text-foreground">Performance Stats</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="pb-3 pr-4 font-heading uppercase text-xs tracking-wider text-muted-foreground">Period</th>
                      <th className="pb-3 pr-4 font-heading uppercase text-xs tracking-wider text-muted-foreground text-center">Games</th>
                      <th className="pb-3 pr-4 font-heading uppercase text-xs tracking-wider text-muted-foreground text-center">Clean Sheets</th>
                      <th className="pb-3 font-heading uppercase text-xs tracking-wider text-muted-foreground text-center">Goals Conceded</th>
                    </tr>
                  </thead>
                  <tbody>
                    {player.goalkeeperStats.map((g, i) => (
                      <tr key={i} className="border-b border-border/50 last:border-0">
                        <td className="py-3 pr-4 text-foreground font-medium">{g.period}</td>
                        <td className="py-3 pr-4 text-center text-foreground">{g.games}</td>
                        <td className="py-3 pr-4 text-center text-foreground">{g.cleanSheets}</td>
                        <td className="py-3 text-center text-foreground">{g.goalsConceded}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Transfer History */}      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <ArrowRightLeft className="text-primary" size={24} />
              <h2 className="font-heading text-2xl font-bold text-foreground">Transfer History</h2>
            </div>
            <div className="space-y-4">
              {player.transfers.map((t, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card">
                  <div className="font-heading text-lg font-bold text-primary shrink-0 w-14">{t.season}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground text-sm font-medium truncate">{t.from} → {t.to}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.type}{t.fee && t.type !== "Loan" ? ` · ${t.fee}` : t.type === "Loan" ? " (Loan)" : ""}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Actions */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection className="flex gap-4 flex-wrap">
            {player.cvUrl && (
              <a href={player.cvUrl} download>
                <Button variant="outline" className="border-primary text-primary font-heading uppercase tracking-wider hover:bg-primary hover:text-primary-foreground">
                  <Download size={16} className="mr-2" /> Download CV
                </Button>
              </a>
            )}
            <Link to="/contact">
              <Button className="bg-gold-gradient text-primary-foreground font-heading uppercase tracking-wider hover:opacity-90">
                <Mail size={16} className="mr-2" /> Contact Agent
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default PlayerProfile;
