import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll get back to you shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="pt-16">
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <SectionHeading title="Contact Us" subtitle="Get in touch with our team to discuss representation, partnerships, or any inquiries." />

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <AnimatedSection>
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input placeholder="Your Name" required className="bg-card border-border text-foreground placeholder:text-muted-foreground" />
                <Input type="email" placeholder="Email Address" required className="bg-card border-border text-foreground placeholder:text-muted-foreground" />
                <Input placeholder="Subject" className="bg-card border-border text-foreground placeholder:text-muted-foreground" />
                <Textarea placeholder="Your Message" required rows={5} className="bg-card border-border text-foreground placeholder:text-muted-foreground resize-none" />
                <Button type="submit" disabled={sending} className="bg-gold-gradient text-primary-foreground font-heading uppercase tracking-wider hover:opacity-90 w-full">
                  {sending ? "Sending..." : <><Send size={16} className="mr-2" /> Send Message</>}
                </Button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-xl font-bold mb-4 text-foreground">Get in Touch</h3>
                  <div className="space-y-4 text-muted-foreground">
                    
                    <p className="flex items-center gap-3"><Mail size={18} className="text-primary" /> solokramanagementfirm1@gmail.com</p>
                    <p className="flex items-center gap-3"><Phone size={18} className="text-primary" /> +233 59 609 3560</p>
                    <p className="flex items-center gap-3"><MapPin size={18} className="text-primary" /> 123 Football Lane, Sefwi Boako, Ghana</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold mb-4 text-foreground">Office Hours</h3>
                  <div className="text-muted-foreground space-y-1 text-sm">
                    <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
                    <p>Saturday – Sunday: Closed</p>
                  </div>
                </div>

                {/* Map embed */}
                <div className="rounded-lg overflow-hidden border border-border h-48">
                  <iframe
                    title="Solokra Office Location"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-2.4100%2C6.2000%2C-2.3500%2C6.3000&layer=mapnik&marker=6.2500%2C-2.3800"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <a
                  href="https://www.openstreetmap.org/node/1814294572"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline block text-right mt-1"
                >
                  View larger map →
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
