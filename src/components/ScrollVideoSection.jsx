import { useRef, useEffect } from "react";
import flowerVideo from "../assets/Timelapse_Bouquet_Assembly_Video.mp4";

export default function ScrollVideoSection() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    const ctx = canvas.getContext("2d");
    const video = document.createElement("video");
    video.src = flowerVideo;
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";

    const frames = [];
    let totalFrames = 0;
    let ready = false;

    // Extract every frame by stepping through the video
    const extractFrames = async () => {
      await new Promise((r) => {
        video.addEventListener("loadeddata", r, { once: true });
      });

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const fps = 30;
      const duration = video.duration;
      totalFrames = Math.floor(duration * fps);
      const step = duration / totalFrames;

      for (let i = 0; i <= totalFrames; i++) {
        video.currentTime = i * step;
        await new Promise((r) => {
          video.addEventListener("seeked", r, { once: true });
        });

        const offscreen = document.createElement("canvas");
        offscreen.width = video.videoWidth;
        offscreen.height = video.videoHeight;
        offscreen.getContext("2d").drawImage(video, 0, 0);
        frames.push(offscreen);
      }

      ready = true;
      // Draw initial frame
      drawFrame(0);
    };

    const drawFrame = (progress) => {
      if (!ready || frames.length === 0) return;
      const idx = Math.min(
        Math.round(progress * (frames.length - 1)),
        frames.length - 1
      );
      ctx.drawImage(frames[idx], 0, 0, canvas.width, canvas.height);
    };

    let currentProgress = 0;
    let targetProgress = 0;
    let rafId = null;

    const animate = () => {
      const diff = targetProgress - currentProgress;
      if (Math.abs(diff) > 0.0005) {
        currentProgress += diff * 0.15;
        drawFrame(currentProgress);
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const start = viewportHeight * 0.9;
      const end = -sectionHeight * 0.35;
      const progress = (start - rect.top) / (start - end);
      targetProgress = Math.min(1, Math.max(0, progress));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    extractFrames();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
        {/* Video canvas */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-stone-100">
          <canvas
            ref={canvasRef}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.22em] text-pomegranate">
            The Process
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-900 md:text-5xl lg:text-6xl">
            Every bloom,
            <br />
            placed with intention
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-stone-600">
            From a single stem to a full arrangement — each piece is built
            layer by layer, balancing color, texture, and movement until the
            vision comes to life.
          </p>
        </div>
      </div>
    </section>
  );
}
