import { useEffect } from "react";
import VideoScroll from "./components/VideoScroll";
import Lenis from "lenis";
import ScrollText from "./components/ScrollText";

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
      <ScrollText />
    </main>
  );
}
