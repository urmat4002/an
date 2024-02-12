import { useState } from "react";
import styles from "./ObjectCard.module.scss";
import { MapPin } from "lucide-react";
import { WhatsApp } from "@shared/ui/Icons";

export const ObjectCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
  ];

  const handlePrev = () => {
    setCurrentSlide((oldSlide) => {
      if (oldSlide === 0) {
        return images.length - 1;
      } else {
        return oldSlide - 1;
      }
    });
  };

  const handleNext = () => {
    setCurrentSlide((oldSlide) => (oldSlide + 1) % images.length);
  };

  return (
    <div className={styles.objectCard}>
      <div className={styles.imageContainer}>
        <img
          className={styles.imageContainerReal}
          src={images[currentSlide]}
          alt="Serena Living Tower"
        />
        <button className={styles.buttonSliderPrev} onClick={handlePrev}>
          ‹
        </button>
        <button className={styles.buttonSliderNext} onClick={handleNext}>
          ›
        </button>
        <div className={styles.dots}>
          {images.map((_, index) => (
            <span
              key={index}
              className={currentSlide === index ? styles.activeDot : styles.dot}
            />
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.content_1}>
          <h1>Serena Living Tower</h1>
          <p>
            <MapPin />
            Dubai, Serenia Living
          </p>
          <p className={styles.price}>AED 159,000,000</p>
        </div>
        <div className={styles.content_2}>
          <button className={styles.button_1}>
            Whatsapp
            <WhatsApp />
          </button>
        </div>
      </div>
    </div>
  );
};
