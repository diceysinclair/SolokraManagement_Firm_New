export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  club?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Solokra Management gave me the platform and guidance I needed to take my career seriously. Nana Antwi believes in every player he signs and that makes all the difference.",
    author: "Antwi Clifford",
    role: "Central Midfielder",
    club: "Kumasi Angels",
  },
  {
    id: "t2",
    quote: "Since joining Solokra, my career has had a clear direction. They handle everything professionally so I can focus entirely on my game.",
    author: "Owusu Roland",
    role: "Defensive Midfielder",
    club: "Al-Rayyan Sports Club",
  },
  {
    id: "t3",
    quote: "Nana Antwi saw potential in me when others didn't. Solokra Management Firm is more than an agency — they are family.",
    author: "Thomas Blay",
    role: "Defender",
    club: "Memphis FC",
  },
  {
    id: "t4",
    quote: "Solokra has opened doors I never thought possible at my age. Their belief in young Ghanaian talent is genuine and inspiring.",
    author: "Asante Collins",
    role: "Forward",
    club: "Kofi's FC",
  },
  {
    id: "t5",
    quote: "Being represented by Solokra means having someone in your corner who truly fights for your future. I am proud to be part of this team.",
    author: "Francisca Kwarteng",
    role: "Defender",
    club: "Ashtown Ladies",
  },
];
