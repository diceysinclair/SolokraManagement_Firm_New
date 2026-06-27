import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import PlayerCard from "@/components/PlayerCard";
import { players } from "@/data/players";

const positions = ["All", "Forward", "Midfielder", "Defender", "Goalkeeper"];

const Players = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? players : players.filter((p) => p.position === filter);

  return (
    <div className="pt-16">
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <SectionHeading title="Our Players" subtitle="Elite athletes competing at the highest level of professional football." />

          <div className="flex justify-center gap-3 flex-wrap mb-12">
            {positions.map((pos) => (
              <button
                key={pos}
                onClick={() => setFilter(pos)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === pos
                    ? "bg-gold-gradient text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {pos}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <AnimatedSection key={p.id} delay={i * 0.1}>
                <PlayerCard player={p} />
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No players found for this position.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Players;
