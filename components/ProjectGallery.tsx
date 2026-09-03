"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TouchEvent,
} from "react";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";

type ProjectGalleryProps = {
  images: string[];
  title: string;
  priority?: boolean;
};

export default function ProjectGallery({
  images,
  title,
  priority = false,
}: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const count = images.length;
  const current = images[index] ?? images[0];

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return;
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  const goPrevious = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") goPrevious();
      if (event.key === "ArrowRight") goNext();
      if (event.key === "Escape") setLightboxOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrevious]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [lightboxOpen]);

  const onTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: TouchEvent) => {
    if (touchStartX.current == null) return;
    const delta = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
    if (delta > 40) goPrevious();
    if (delta < -40) goNext();
    touchStartX.current = null;
  };

  if (!current) return null;

  return (
    <>
      <div className="space-y-3">
        <div
          className="group relative overflow-hidden rounded-2xl border border-border/70 bg-muted/40 h-64 sm:h-80 lg:h-[420px]"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={current}
                alt={`${title} screenshot ${index + 1} of ${count}`}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover object-top"
                priority={priority && index === 0}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

          <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(count).padStart(2, "0")}
          </div>

          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="absolute top-3 right-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur-sm opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition"
            aria-label={`View ${title} screenshot fullscreen`}
          >
            <Expand size={15} />
          </button>

          {count > 1 ? (
            <div className="absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-3">
              <button
                type="button"
                onClick={goPrevious}
                className="h-9 w-9 rounded-full border border-white/15 bg-black/45 text-white backdrop-blur-sm hover:bg-black/60 transition"
                aria-label="Previous photo"
              >
                <ArrowLeft size={15} className="mx-auto" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="h-9 w-9 rounded-full border border-white/15 bg-black/45 text-white backdrop-blur-sm hover:bg-black/60 transition"
                aria-label="Next photo"
              >
                <ArrowRight size={15} className="mx-auto" />
              </button>
            </div>
          ) : null}
        </div>

        {count > 1 ? (
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]">
            {images.map((image, imageIndex) => {
              const isActive = imageIndex === index;

              return (
                <button
                  key={image}
                  type="button"
                  onClick={() => goTo(imageIndex)}
                  aria-label={`Show ${title} photo ${imageIndex + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl border transition ${
                    isActive
                      ? "border-orange-500 ring-2 ring-orange-500/30"
                      : "border-border hover:border-orange-500/40"
                  }`}
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="96px"
                    className="object-cover object-top"
                  />
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      <AnimatePresence>
        {lightboxOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 sm:p-8"
            onClick={() => setLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} photo viewer`}
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"
              aria-label="Close photo viewer"
            >
              <X size={18} />
            </button>

            {count > 1 ? (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    goPrevious();
                  }}
                  className="absolute left-4 z-10 hidden sm:inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"
                  aria-label="Previous photo"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    goNext();
                  }}
                  className="absolute right-4 z-10 hidden sm:inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"
                  aria-label="Next photo"
                >
                  <ArrowRight size={18} />
                </button>
              </>
            ) : null}

            <motion.div
              key={current}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              className="relative h-[72vh] w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <Image
                src={current}
                alt={`${title} screenshot ${index + 1} of ${count}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
