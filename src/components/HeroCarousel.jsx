import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroCarousel({ images, children, compact = false }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % images.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [images.length]);

  const go = (direction) => {
    setIndex((value) => (value + direction + images.length) % images.length);
  };

  return (
    <section className={compact ? "hero-carousel compact" : "hero-carousel"}>
      <AnimatePresence mode="sync">
        <motion.img
          key={images[index]}
          className="hero-image"
          src={images[index]}
          alt=""
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>
      <div className="hero-shade" />
      <div className="hero-content">{children}</div>
      {images.length > 1 && (
        <>
          <button type="button" className="hero-arrow previous" onClick={() => go(-1)} aria-label="上一张">←</button>
          <button type="button" className="hero-arrow next" onClick={() => go(1)} aria-label="下一张">→</button>
          <div className="hero-dots" aria-label="轮播图页码">
            {images.map((image, dotIndex) => (
              <button
                type="button"
                key={image}
                className={dotIndex === index ? "is-active" : ""}
                onClick={() => setIndex(dotIndex)}
                aria-label={`查看第 ${dotIndex + 1} 张图片`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
