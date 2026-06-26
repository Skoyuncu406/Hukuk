"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const trailRefs = useRef([]);

  const mouse = useRef({ x: -100, y: -100 });
  const cursor = useRef({ x: -100, y: -100 });
  const dot = useRef({ x: -100, y: -100 });
  const trail = useRef(
    Array.from({ length: 8 }, () => ({ x: -100, y: -100 }))
  );

  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    const moveCursor = (e) => {
      mouse.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const handleEnterInteractive = () => setHovered(true);
    const handleLeaveInteractive = () => setHovered(false);

    const hideCursor = () => setHidden(true);
    const showCursor = () => setHidden(false);

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, select, [data-cursor='hover']"
    );

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleEnterInteractive);
      el.addEventListener("mouseleave", handleLeaveInteractive);
    });

    let animationFrame;

    const animate = () => {
      cursor.current.x += (mouse.current.x - cursor.current.x) * 0.16;
      cursor.current.y += (mouse.current.y - cursor.current.y) * 0.16;

      dot.current.x += (mouse.current.x - dot.current.x) * 0.45;
      dot.current.y += (mouse.current.y - dot.current.y) * 0.45;

      trail.current.forEach((point, index) => {
        const target = index === 0 ? dot.current : trail.current[index - 1];

        point.x += (target.x - point.x) * 0.28;
        point.y += (target.y - point.y) * 0.28;

        const el = trailRefs.current[index];

        if (el) {
          el.style.transform = `translate3d(${point.x - 3}px, ${
            point.y - 3
          }px, 0)`;
          el.style.opacity = hidden ? "0" : `${0.18 - index * 0.018}`;
        }
      });

      if (cursorRef.current) {
        const size = hovered ? 56 : 26;

        cursorRef.current.style.width = `${size}px`;
        cursorRef.current.style.height = `${size}px`;
        cursorRef.current.style.transform = `translate3d(${
          cursor.current.x - size / 2
        }px, ${cursor.current.y - size / 2}px, 0)`;
        cursorRef.current.style.opacity = hidden ? "0" : "1";
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.current.x - 3}px, ${
          dot.current.y - 3
        }px, 0)`;
        dotRef.current.style.opacity = hidden ? "0" : "1";
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${
          cursor.current.x - 90
        }px, ${cursor.current.y - 90}px, 0)`;
        glowRef.current.style.opacity = hovered && !hidden ? "0.28" : "0.14";
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseenter", showCursor);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnterInteractive);
        el.removeEventListener("mouseleave", handleLeaveInteractive);
      });
    };
  }, [hovered, hidden]);

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-[180px] w-[180px] rounded-full bg-[#C6A15B]/20 blur-3xl transition-opacity duration-300 lg:block"
      />

      {Array.from({ length: 8 }).map((_, index) => (
        <span
          key={index}
          ref={(el) => {
            trailRefs.current[index] = el;
          }}
          className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1.5 w-1.5 rounded-full bg-[#C6A15B] lg:block"
        />
      ))}

      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden rounded-full border border-[#C6A15B] bg-[#C6A15B]/5 transition-[width,height,opacity] duration-200 lg:block"
      />

      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[10001] hidden h-1.5 w-1.5 rounded-full bg-[#C6A15B] lg:block"
      />
    </>
  );
}