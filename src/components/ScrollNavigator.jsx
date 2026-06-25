"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollNavigator() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      aria-label="Yukarı çık"
      className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center border border-[#C6A15B]/40 bg-[#1B1B1B]/90 text-[#C6A15B] backdrop-blur transition-all duration-300 hover:bg-[#C6A15B] hover:text-[#1B1B1B] ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ChevronUp size={22} strokeWidth={1.8} />
    </button>
  );
}