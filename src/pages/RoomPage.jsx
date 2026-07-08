import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BookingPanel from "../components/BookingPanel";
import HeroCarousel from "../components/HeroCarousel";
import SectionHeading from "../components/SectionHeading";
import { getRoomById, siteConfig } from "../data/siteContent";
import NotFoundPage from "./NotFoundPage";

export default function RoomPage() {
  const { roomId } = useParams();
  const room = getRoomById(roomId);

  useEffect(() => {
    if (!room) return undefined;
    const previousTitle = document.title;
    document.title = `${room.name}｜${siteConfig.brandName} ${siteConfig.brandEnglish}`;
    return () => { document.title = previousTitle; };
  }, [room]);

  if (!room) return <NotFoundPage />;

  return (
    <>
      <HeroCarousel images={room.heroImages} compact>
        <div className="room-hero-copy">
          <Link to="/" className="back-home">← 返回首页</Link>
          <p>{siteConfig.brandEnglish} · {room.romanized} · {room.location}</p>
          <h1>{room.name}</h1>
          <strong>{room.summary}</strong>
        </div>
      </HeroCarousel>

      <section className="section room-intro">
        <div className="room-intro-copy">
          <p className="eyebrow">THE STORY</p>
          {room.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p className="suitable-for">{room.suitableFor}</p>
        </div>
        <div className="quick-facts">
          <Fact label="最大住宿人数" value={`${room.maxGuests} 人`} />
          <Fact label="卧室" value={room.bedrooms} />
          <Fact label="卫浴" value={room.bathrooms} />
          <Fact label="房屋类型" value={room.propertyType} />
        </div>
      </section>

      <section className="section highlights-section">
        <SectionHeading eyebrow="STAY EXPERIENCE" title="住在这里的几个片刻" />
        <div className="highlights-grid">
          {room.highlights.map((highlight, index) => (
            <motion.article
              key={highlight.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{highlight.title}</h3>
              <p>{highlight.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section facilities-section">
        <SectionHeading eyebrow="FACILITIES" title="内部设备" text="以下为主要设备。请在发布前根据实际房源再次核对。" />
        <div className="facility-list">
          {room.facilities.map((facility) => <span key={facility}>{facility}</span>)}
        </div>
      </section>

      <section className="section attractions-section">
        <SectionHeading eyebrow="NEARBY" title="附近观光与日常补给" text="距离和车程为约数，会随路线、时段和交通状况变化。" />
        <div className="attraction-columns">
          {room.attractions.map((group) => (
            <article key={group.category}>
              <h3>{group.category}</h3>
              {group.items.map((item) => (
                <div className="attraction-item" key={item.name}>
                  <strong>{item.name}</strong>
                  <span>{item.detail}</span>
                </div>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="section access-section">
        <div className="access-copy">
          <SectionHeading eyebrow="ACCESS" title="如何抵达" text={room.access.intro} align="left" />
          <ol>
            {room.access.steps.map((step) => <li key={step}>{step}</li>)}
          </ol>
          <p className="privacy-note">为保护住客与邻里隐私，准确门牌与详细入住路线会在预订确认后发送。</p>
        </div>
        <img className="route-image" src={room.access.mapImage} alt={`${room.name}路线图占位图`} />
      </section>

      <section className="section room-booking">
        <BookingPanel roomName={room.name} />
      </section>
    </>
  );
}

function Fact({ label, value }) {
  return (
    <div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
