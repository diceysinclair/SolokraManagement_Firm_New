import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { announcements } from "@/data/announcements";
import { Badge } from "@/components/ui/badge";

const categories = ["All", "Transfer", "Partnership", "Award", "Event", "News"];

const categoryColor: Record<string, string> = {
  Transfer: "bg-primary/20 text-primary border-primary/30",
  Partnership: "bg-accent/20 text-accent-foreground border-accent/30",
  Award: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Event: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  News: "bg-muted text-muted-foreground border-border",
};

const Announcements = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? announcements : announcements.filter((a) => a.category === filter);

  return (
    <div className="pt-16">
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <SectionHeading title="Announcements" subtitle="Stay up to date with the latest from Solokra Management." />

          <div className="flex justify-center gap-3 flex-wrap mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-gold-gradient text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a, i) => (
              <AnimatedSection key={a.id} delay={i * 0.08}>
                <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className={categoryColor[a.category] || categoryColor.News}>
                      {a.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {new Date(a.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{a.summary}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No announcements found for this category.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Announcements;
