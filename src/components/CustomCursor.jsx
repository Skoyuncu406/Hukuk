"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const mouseEnter = () => setHovered(true);
    const mouseLeave = () => setHovered(false);

    const hideCursor = () => setHidden(true);
    const showCursor = () => setHidden(false);

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, select"
    );

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", mouseEnter);
      el.addEventListener("mouseleave", mouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseenter", showCursor);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", mouseEnter);
        el.removeEventListener("mouseleave", mouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`pointer-events-none fixed left-0 top-0 z-[99999] hidden rounded-full border border-[#C6A15B] transition-all duration-200 ease-out lg:block ${
          hovered
            ? "h-14 w-14 bg-[#C6A15B]/10"
            : "h-6 w-6 bg-transparent"
        } ${hidden ? "opacity-0" : "opacity-100"}`}
        style={{
          transform: `translate(${position.x - (hovered ? 28 : 12)}px, ${
            position.y - (hovered ? 28 : 12)
          }px)`,
        }}
      />

      <div
        className={`pointer-events-none fixed left-0 top-0 z-[99999] hidden h-1.5 w-1.5 rounded-full bg-[#C6A15B] transition-opacity duration-200 lg:block ${
          hidden ? "opacity-0" : "opacity-100"
        }`}
        style={{
          transform: `translate(${position.x - 3}px, ${position.y - 3}px)`,
        }}
      />
    </>
  );
}