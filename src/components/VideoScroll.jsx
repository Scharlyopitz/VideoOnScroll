import { useScroll, useTransform, motion as m } from "motion/react";
import { useState } from "react";

export default function VideoScroll() {
  const { scrollYProgress } = useScroll();

  const imageLength = 86;

  const number = useTransform(scrollYProgress, [0, 1], [imageLength, 1]);

  const [n, setN] = useState(imageLength);

  function roundNumber() {
    setN(Math.trunc(number.current));
  }

  window.addEventListener("scroll", roundNumber);

  return (
    <div id="VideoScroll">
      <img src={`/${n}.webp`} alt="image" />
    </div>
  );
}
