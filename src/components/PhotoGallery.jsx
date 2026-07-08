import { useEffect, useState } from "react";

export default function PhotoGallery({ images, roomName }) {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (activeIndex === null) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") {
        setActiveIndex((value) => (value - 1 + images.length) % images.length);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((value) => (value + 1) % images.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, images.length]);

  if (!images?.length) return null;

  const go = (direction) => {
    setActiveIndex((value) => (value + direction + images.length) % images.length);
  };

  return (
    <>
      <div className="photo-gallery">
        {images.map((image, index) => (
          <button
            type="button"
            className={index === 0 ? "photo-tile featured" : "photo-tile"}
            key={image}
            onClick={() => setActiveIndex(index)}
            aria-label={`查看${roomName}第 ${index + 1} 张照片`}
          >
            <img
              src={image}
              alt={`${roomName}住宿照片 ${index + 1}`}
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${roomName}照片浏览`}>
          <button type="button" className="lightbox-close" onClick={() => setActiveIndex(null)} aria-label="关闭照片">×</button>
          <button type="button" className="lightbox-arrow previous" onClick={() => go(-1)} aria-label="上一张照片">←</button>
          <figure>
            <img src={images[activeIndex]} alt={`${roomName}住宿照片 ${activeIndex + 1}`} />
            <figcaption>{activeIndex + 1} / {images.length}</figcaption>
          </figure>
          <button type="button" className="lightbox-arrow next" onClick={() => go(1)} aria-label="下一张照片">→</button>
        </div>
      )}
    </>
  );
}
