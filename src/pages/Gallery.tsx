import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

// Players
import player1 from "@/assets/player-1.png";
import player2 from "@/assets/player-2.png";
import player3 from "@/assets/player-3.png";
import amoah from "@/assets/Amoah.jpg";
import francisca from "@/assets/Francisca.png";
import kelvin from "@/assets/Kelvin.jpg";
import august from "@/assets/August.png";
import mathar from "@/assets/Mathar.png";
import gk from "@/assets/goalkeeper.jpg";

// Staff & Branding
import manager from "@/assets/Manager-1.jpg";
import logo from "@/assets/Logo.jpeg";
import stadium from "@/assets/hero-stadium.jpg";

// Events & Activities
import img0 from "@/assets/IMG-20241228-WA0047.jpg";
import img1 from "@/assets/IMG-20250304-WA0047.jpg";
import img2 from "@/assets/IMG-20250304-WA0048.jpg";
import img3 from "@/assets/IMG-20250304-WA0049.jpg";
import img4 from "@/assets/IMG-20250304-WA0050.jpg";
import img5 from "@/assets/IMG-20250304-WA0051.jpg";
import img6 from "@/assets/IMG-20250304-WA0052.jpg";
import img7 from "@/assets/IMG-20250304-WA0053.jpg";
import img8 from "@/assets/IMG-20250304-WA0054.jpg";
import img9 from "@/assets/IMG-20250304-WA0055.jpg";
import img10 from "@/assets/IMG-20250304-WA0056.jpg";
import img11 from "@/assets/IMG-20250304-WA0057.jpg";
import img12 from "@/assets/IMG-20250304-WA0058.jpg";
import img13 from "@/assets/IMG-20250304-WA0059.jpg";
import img14 from "@/assets/IMG-20250304-WA0060.jpg";
import img15 from "@/assets/IMG-20250317-WA0056.jpg";
import img16 from "@/assets/IMG-20250317-WA0057.jpg";
import img17 from "@/assets/IMG-20250317-WA0058.jpg";
import img18 from "@/assets/IMG-20250416-WA0068.jpg";
import img19 from "@/assets/IMG-20250918-WA0022.jpg";
import img20 from "@/assets/IMG-20250918-WA0023.jpg";
import img21 from "@/assets/IMG-20250918-WA0024.jpg";
import img22 from "@/assets/IMG-20250918-WA0026.jpg";
import img23 from "@/assets/IMG-20250918-WA0027.jpg";
import img24 from "@/assets/IMG-20250924-WA0008.jpg";
import img25 from "@/assets/IMG-20250924-WA0009.jpg";
import img26 from "@/assets/IMG-20250924-WA0010.jpg";
import img27 from "@/assets/IMG-20250924-WA0011.jpg";
import img28 from "@/assets/IMG-20250924-WA0012.jpg";
import img29 from "@/assets/IMG-20250924-WA0013.jpg";
import img30 from "@/assets/IMG-20250924-WA0014.jpg";
import img31 from "@/assets/IMG-20250924-WA0015.jpg";
import img32 from "@/assets/IMG-20250924-WA0016.jpg";
import img33 from "@/assets/IMG-20250924-WA0018.jpg";
import img34 from "@/assets/IMG-20250924-WA0019.jpg";
import img35 from "@/assets/IMG-20250924-WA0020.jpg";
import img36 from "@/assets/IMG-20250924-WA0021.jpg";
import wa1 from "@/assets/WhatsApp Image 2025-03-05 at 12.23.41_14a2fa7c.jpg";
import wa2 from "@/assets/WhatsApp Image Roland.jpeg";

type Category = "All" | "Players" | "Venues" | "Staff" | "Events";

interface GalleryImage {
  src: string;
  alt: string;
  category: Category;
  label?: string;
}

const images: GalleryImage[] = [
  // Stadium
  { src: stadium,  alt: "Stadium atmosphere",      category: "Venues", label: "The Pitch" },
  // Players
  { src: player1,  alt: "Antwi Clifford",           category: "Players", label: "Antwi Clifford" },
  { src: player2,  alt: "Owusu Roland",             category: "Players", label: "Owusu Roland" },
  { src: player3,  alt: "Thomas Blay",              category: "Players", label: "Thomas Blay" },
  { src: amoah,    alt: "Christopher Amoah",        category: "Players", label: "Christopher Amoah" },
  { src: francisca,alt: "Francisca Kwarteng",       category: "Players", label: "Francisca Kwarteng" },
  { src: kelvin,   alt: "Mensah Kelvin Osei",       category: "Players", label: "Mensah Kelvin Osei" },
  { src: august,   alt: "Augustine Sosu",           category: "Players", label: "Augustine Sosu" },
  { src: mathar,   alt: "Nsobila Martha",           category: "Players", label: "Nsobila Martha" },
  { src: gk,       alt: "Emmanuel Adjetey Arthur",  category: "Players", label: "Emmanuel Adjetey Arthur" },
  // Staff & Branding
  { src: manager,  alt: "Nana Antwi Boasiako",      category: "Staff",   label: "Nana Antwi Boasiako — CEO" },
  { src: logo,     alt: "Solokra Logo",             category: "Staff",   label: "Solokra Management Firm" },
  // Events & Activities
  { src: img0,  alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img1,  alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img2,  alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img3,  alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img4,  alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img5,  alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img6,  alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img7,  alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img8,  alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img9,  alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img10, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img11, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img12, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img13, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img14, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img15, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img16, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img17, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img18, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img19, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img20, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img21, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img22, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img23, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img24, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img25, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img26, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img27, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img28, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img29, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img30, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img31, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img32, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img33, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img34, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img35, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: img36, alt: "Event photo", category: "Events", label: "Solokra Event" },
  { src: wa1,   alt: "Solokra moment", category: "Events", label: "Solokra Event" },
  { src: wa2,   alt: "Owusu Roland",   category: "Players", label: "Owusu Roland" },
];

const categories: Category[] = ["All", "Players", "Events", "Venues", "Staff"];

const Gallery = () => {
  const [filter, setFilter] = useState<Category>("All");
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  // Navigate lightbox
  const currentIndex = selected ? filtered.findIndex((img) => img.src === selected.src) : -1;
  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < filtered.length - 1) setSelected(filtered[currentIndex + 1]);
  };
  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) setSelected(filtered[currentIndex - 1]);
  };

  return (
    <div className="pt-16">
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Gallery"
            subtitle="Moments from the pitch, the office, and beyond."
          />

          {/* Category Filter Tabs */}
          <div className="flex justify-center gap-3 flex-wrap mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-gold-gradient text-primary-foreground shadow-md scale-105"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {cat}
                <span className="ml-2 text-xs opacity-70">
                  ({cat === "All" ? images.length : images.filter((i) => i.category === cat).length})
                </span>
              </button>
            ))}
          </div>

          {/* Uniform Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            >
              {filtered.map((img, i) => (
                <AnimatedSection key={img.src} delay={i * 0.03}>
                  <div
                    className="cursor-pointer overflow-hidden rounded-xl group relative border border-border hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg aspect-square"
                    onClick={() => setSelected(img)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                      <p className="text-foreground font-heading text-xs font-semibold truncate">{img.label}</p>
                      <p className="text-primary text-xs font-medium uppercase tracking-wider mt-0.5">{img.category}</p>
                    </div>
                    {/* Zoom icon */}
                    <div className="absolute top-2 right-2 w-7 h-7 bg-background/70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                      <ZoomIn size={12} className="text-primary" />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No images in this category.</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors z-10"
              onClick={() => setSelected(null)}
            >
              <X size={20} />
            </button>

            {/* Prev */}
            {currentIndex > 0 && (
              <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors z-10 text-lg font-bold"
              >
                ‹
              </button>
            )}

            {/* Next */}
            {currentIndex < filtered.length - 1 && (
              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors z-10 text-lg font-bold"
              >
                ›
              </button>
            )}

            <motion.div
              key={selected.src}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="flex flex-col items-center gap-4 max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.src}
                alt={selected.alt}
                className="max-h-[75vh] max-w-full rounded-xl object-contain border border-border shadow-2xl"
              />
              <div className="text-center">
                <p className="text-foreground font-heading font-semibold">{selected.label}</p>
                <p className="text-primary text-xs uppercase tracking-widest mt-1">{selected.category}</p>
                <p className="text-muted-foreground text-xs mt-2">{currentIndex + 1} / {filtered.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
