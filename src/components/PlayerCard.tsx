import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Player } from "@/data/players";

const PlayerCard = ({ player }: { player: Player }) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
  >
    <Link to={`/players/${player.id}`} className="block group">
      <div className="relative overflow-hidden rounded-lg bg-card border border-border">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={player.image}
            alt={player.name}
            loading="lazy"
            width={640}
            height={800}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-xs font-medium tracking-widest uppercase text-primary mb-1">{player.position}</p>
          <h3 className="font-heading text-xl font-bold text-foreground">{player.name}</h3>
          <p className="text-sm text-muted-foreground">{player.nationality} · Age {player.age}</p>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default PlayerCard;
