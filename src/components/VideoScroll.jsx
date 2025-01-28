import { useScroll, useTransform, motion as m } from "motion/react";
import { useState } from "react";

export default function VideoScroll() {
  const { scrollYProgress } = useScroll();

  const number = useTransform(scrollYProgress, [0, 1], [1, 86]);

  const [n, setN] = useState(1);

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
