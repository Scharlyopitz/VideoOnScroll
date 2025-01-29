import { useScroll, useTransform, motion as m } from "motion/react";
import { useState } from "react";

export default function VideoScroll() {
  const { scrollYProgress } = useScroll();

  const imageLength = 87;

  const number = useTransform(scrollYProgress, [0, 1], [imageLength, 1]);

  const [n, setN] = useState(imageLength - 1);

  function roundNumber() {
    setN(Math.trunc(number.current));
  }

  window.addEventListener("scroll", roundNumber);

  return (
    <div id="VideoScroll">
      {[...Array(imageLength - 1)].map((_, i) => {
        return (
          <img
            style={{ opacity: n === i + 1 ? 1 : 0 }}
            key={i}
            src={`/${i + 1}.webp`}
            alt="image"
          />
        );
      })}
    </div>
  );
}
