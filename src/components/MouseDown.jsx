import { useScroll, useTransform, motion as m } from "motion/react";

export default function MouseDown() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 0.2], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const wheelAnimation = {
    initial: {
      y: "20%",
      x: "-50%",
      opacity: 1,
    },
    animate: {
      y: "200%",
      x: "-50%",
      opacity: 0,
      transition: {
        duration: 2,
        ease: [0.76, 0, 0.24, 1],
        repeat: Infinity,
        repeatDelay: 0.5,
      },
    },
  };

  return (
    <m.div initial="initial" animate="animate" className="MouseDown">
      <m.div style={{ y, opacity }} className="mouse">
        <m.div variants={wheelAnimation} className="wheel"></m.div>
      </m.div>
    </m.div>
  );
}
