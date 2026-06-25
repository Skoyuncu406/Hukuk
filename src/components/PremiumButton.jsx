export default function PremiumButton({
  href,
  children,
  onClick,
  type = "link",
  variant = "dark",
  className = "",
}) {
  const baseClass =
    "group relative inline-flex items-center justify-center gap-3 overflow-hidden border px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] transition-all duration-500";

  const variants = {
    dark:
      "border-[#1B1B1B] bg-[#1B1B1B] text-white hover:border-[#C6A15B] hover:text-[#1B1B1B]",
    gold:
      "border-[#C6A15B] bg-[#C6A15B] text-[#1B1B1B] hover:text-[#1B1B1B]",
    outline:
      "border-[#C6A15B]/70 bg-transparent text-[#1B1B1B] hover:text-[#1B1B1B]",
    outlineGold:
      "border-[#C6A15B]/60 bg-transparent text-[#C6A15B] hover:text-[#1B1B1B]",
  };

  const content = (
    <>
      <span className="absolute inset-0 origin-left scale-x-0 bg-[#C6A15B] transition-transform duration-500 group-hover:scale-x-100" />
      <span className="absolute -left-24 top-0 h-full w-14 rotate-[25deg] bg-white/40 blur-md transition-all duration-700 group-hover:left-[130%]" />
      <span className="relative z-10 flex items-center justify-center gap-3">
        {children}
      </span>
    </>
  );

  if (type === "button") {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${baseClass} ${variants[variant]} ${className}`}
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${baseClass} ${variants[variant]} ${className}`}
    >
      {content}
    </a>
  );
}