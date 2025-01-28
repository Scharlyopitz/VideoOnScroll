import { useEffect } from "react";
import VideoScroll from "./components/VideoScroll";
import Lenis from "lenis";

export default function App() {
  useEffect(() => {
    window.scrollTo({ top: 0 });

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
    </main>
  );
}
