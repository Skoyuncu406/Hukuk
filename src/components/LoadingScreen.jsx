"use client";

import { useEffect, useState } from "react";
import { Scale } from "lucide-react";

export default function LoadingScreen({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish?.();
    }, 1200);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#1B1B1B]">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-[#C6A15B]/50 text-[#C6A15B]">
          <Scale size={34} strokeWidth={1.5} />
        </div>

        <h1 className="font-title text-4xl font-semibold tracking-[0.25em] text-white">
          KIRMIZI
        </h1>

        <p className="mt-3 text-xs uppercase tracking-[0.35em] text-[#C6A15B]">
          Hukuk & Danışmanlık
        </p>

        <div className="mx-auto mt-8 h-px w-44 overflow-hidden bg-[#C6A15B]/20">
          <div className="h-full w-full origin-left animate-[loading-line_1s_ease-in-out_forwards] bg-[#C6A15B]" />
        </div>
      </div>
    </div>
  );
}