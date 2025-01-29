import { useEffect } from "react";
import VideoScroll from "./components/VideoScroll";
import Lenis from "lenis";
import MouseDown from "./components/MouseDown";

export default function App() {
  useEffect(() => {
    history.scrollRestoration = "manual";

    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <VideoScroll />
      <MouseDown />
    </main>
  );
}
