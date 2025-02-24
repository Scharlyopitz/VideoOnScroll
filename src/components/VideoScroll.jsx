import { useScroll, useTransform, motion as m } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function VideoScroll() {
  const canvas = useRef(null);

  const frames = 86;
  const [images, setImages] = useState([]);
  const [frameIndex, setFrameIndex] = useState(frames - 1);

  const { scrollYProgress } = useScroll();

  const progressIndex = useTransform(scrollYProgress, [0, 1], [frames - 1, 0]);

  const setFrameOnScroll = () => {
    setFrameIndex(Math.trunc(progressIndex.current));
  };

  const getCurrentFrame = (i) => {
    return `/${(i + 1).toString()}.webp`;
  };

  const preloaderImages = () => {
    for (let i = 0; i < frames; i++) {
      const img = new Image();
      const imgSrc = getCurrentFrame(i);
      img.src = imgSrc;
      setImages((prevImages) => [...prevImages, img]);
    }
  };

  useEffect(() => {
    preloaderImages();
    window.addEventListener("scroll", setFrameOnScroll);
    return () => window.removeEventListener("scroll", setFrameOnScroll);
  }, []);

  useEffect(() => {
    if (!canvas.current || images.length < 1) {
      return;
    }

    const context = canvas.current.getContext("2d");

    context.canvas.width = 1000;
    context.canvas.height = 714;
    let animation;
    const render = () => {
      context.drawImage(images[frameIndex], 0, 0);
      animation = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animation);
  }, [frameIndex, images]);

  return (
    <div id="VideoScroll">
      <canvas ref={canvas}></canvas>
    </div>
  );
}
