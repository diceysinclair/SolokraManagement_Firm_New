import AnimatedSection from "./AnimatedSection";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <AnimatedSection className="text-center mb-12">
    <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-wide">
      <span className="text-gold-gradient">{title}</span>
    </h2>
    {subtitle && <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">{subtitle}</p>}
  </AnimatedSection>
);

export default SectionHeading;
