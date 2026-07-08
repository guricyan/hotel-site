import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BookingPanel from "../components/BookingPanel";
import HeroCarousel from "../components/HeroCarousel";
import RoomCard from "../components/RoomCard";
import SectionHeading from "../components/SectionHeading";
import { homeContent, rooms, siteConfig } from "../data/siteContent";

export default function HomePage() {
  return (
    <>
      <HeroCarousel images={homeContent.heroImages}>
        <motion.div
          className="home-hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="hero-kicker">OKINAWA · ITOMAN · TOMIGUSUKU</p>
          <h1>{siteConfig.brandName}</h1>
          <p className="hero-brand-english">{siteConfig.brandEnglish}</p>
          <p className="hero-tagline-cn">{siteConfig.taglineChinese}</p>
          <div className="hero-tagline-translations">
            <span lang="ja">{siteConfig.taglineJapanese}</span>
            <span lang="en">{siteConfig.taglineEnglish}</span>
          </div>
          <a className="button light" href="#stays">查看所有居所</a>
        </motion.div>
      </HeroCarousel>

      <section className="section story-split brand-story-section" id="story">
        <div className="story-copy">
          <SectionHeading
            eyebrow={homeContent.brandStory.eyebrow}
            title={homeContent.brandStory.title}
            align="left"
          />
          {homeContent.brandStory.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="brand-motto-block">
            <strong>{siteConfig.taglineChinese}</strong>
            <span lang="ja">{siteConfig.taglineJapanese}</span>
            <span lang="en">{siteConfig.taglineEnglish}</span>
          </div>
        </div>
        <motion.img
          className="story-image"
          src={homeContent.brandStory.image}
          alt="安处品牌故事占位图片"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </section>

      <section className="section locality" id="itoman">
        <SectionHeading
          eyebrow={homeContent.locality.eyebrow}
          title={homeContent.locality.title}
          text={homeContent.locality.text}
        />
        <div className="locality-grid">
          {homeContent.locality.cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
            >
              <img src={card.image} alt={card.title} />
              <div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="slow-section">
        <div className="slow-inner">
          <p className="eyebrow">A SLOWER DAY</p>
          <h2>在这里，可以把一天过得很慢</h2>
          <div className="slow-list">
            {homeContent.slowMoments.map((moment, index) => (
              <motion.p
                key={moment}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>{moment}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="stays">
        <SectionHeading
          eyebrow="ANCHU STAYS"
          title="五处居所，五种安心的日常"
          text="从临海住宅区到喜屋武村落，从传统古民家到宽敞现代独栋，每一处都有自己的节奏，也都属于安处。"
        />
        <div className="rooms-grid">
          {rooms.map((room, index) => <RoomCard key={room.id} room={room} index={index} />)}
        </div>
      </section>

      <section className="section booking-home" id="booking">
        <BookingPanel />
      </section>

      <section className="section final-note">
        <p className="eyebrow">COME BACK TO ANCHU</p>
        <h2>第一次因旅途而来，下一次，回到让你心安的地方。</h2>
        <Link className="text-link large" to="/#stays">选择你的居所 <span>→</span></Link>
      </section>
    </>
  );
}
