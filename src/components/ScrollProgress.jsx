"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const currentProgress =
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;

      setProgress(currentProgress);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="fixed right-4 top-1/2 z-50 hidden h-40 w-1.5 -translate-y-1/2 bg-[#C6A15B]/20 lg:block">
      <div
        className="w-px bg-[#C6A15B] transition-all duration-200"
        style={{ height: `${progress}%` }}
      />
    </div>
  );
}