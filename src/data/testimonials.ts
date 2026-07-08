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
    quote: "Since joining Solokra, my career has had a clear direction. They handle everything professionally so I can focus entirely on my game.",
    author: "Owusu Roland",
    role: "Defensive Midfielder",
    club: "Al-Rayyan Sports Club",
  },
  {
    id: "t2",
    quote: "Nana Antwi saw potential in me when others didn't. Solokra Management Firm is more than an agency — they are family.",
    author: "Thomas Blay",
    role: "Defender",
    club: "Memphis FC",
  },
  {
    id: "t3",
    quote: "Being represented by Solokra means having someone in your corner who truly fights for your future. I am proud to be part of this team.",
    author: "Francisca Kwarteng",
    role: "Defender",
    club: "Ashtown Ladies",
  },
  {
    id: "t4",
    quote: "Solokra has opened doors I never thought possible at my age. Their belief in young Ghanaian talent is genuine and inspiring.",
    author: "Mensah Kelvin Osei",
    role: "Winger",
    club: "Samuel Inkoom Academy",
  },
  {
    id: "t5",
    quote: "Under Solokra Management, I have the support and structure to develop into the professional I know I can be.",
    author: "Augustine Sosu",
    role: "Midfielder",
    club: "Dansoman Wise XI FC",
  },
];
