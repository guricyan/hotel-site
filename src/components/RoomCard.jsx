import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function RoomCard({ room, index }) {
  return (
    <motion.article
      className="room-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.06 }}
    >
      <Link to={`/rooms/${room.id}`}>
        <div className="room-card-media">
          <img src={room.cardImage} alt={`${room.name}房源图片`} />
          <span>{room.location}</span>
        </div>
        <div className="room-card-content">
          <div>
            <p className="room-romanized">{room.romanized}</p>
            <h3>{room.name}</h3>
          </div>
          <p>{room.cardText}</p>
          <div className="room-meta">
            <span>最多 {room.maxGuests} 人</span>
            <span>{room.propertyType}</span>
          </div>
          <strong className="text-link">进入居所 <span>→</span></strong>
        </div>
      </Link>
    </motion.article>
  );
}
