import { cn } from "@/lib/utils";

type Props = {
  hue?: number;
  seat?: number;
  className?: string;
  size?: number;
};

/** Minimalist cosmic 9-pointed star silhouette for placeholder stewards. */
export function StewardAvatar({
  hue = 42,
  seat,
  className,
  size = 160,
}: Props) {
  const cx = 50;
  const cy = 50;
  const outer = 36;
  const points = Array.from({ length: 9 }, (_, i) => {
    const angle = (Math.PI * 2 * i) / 9 - Math.PI / 2;
    return {
      x: cx + outer * Math.cos(angle),
      y: cy + outer * Math.sin(angle),
    };
  });
  const starPath =
    points
      .map((_, i) => {
        const p = points[(i * 4) % 9];
        return `${i === 0 ? "M" : "L"} ${p.x.toFixed(3)} ${p.y.toFixed(3)}`;
      })
      .join(" ") + " Z";

  const gold = `hsl(${hue} 48% 58%)`;
  const deep = `hsl(${hue} 35% 18%)`;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-full",
        className
      )}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 35% 28%, ${gold}33 0%, ${deep} 55%, #060918 100%)`,
      }}
      aria-hidden
    >
      <svg viewBox="0 0 100 100" className="h-[72%] w-[72%]" fill="none">
        <circle cx="50" cy="50" r="40" stroke={gold} strokeOpacity="0.25" strokeWidth="0.6" />
        <path d={starPath} stroke={gold} strokeWidth="1.1" fill={`${gold}22`} />
        <circle cx="50" cy="50" r="3" fill={gold} fillOpacity="0.85" />
      </svg>
      {seat != null && (
        <span
          className="absolute bottom-2 font-sans text-[10px] uppercase tracking-[0.2em]"
          style={{ color: gold }}
        >
          {seat}
        </span>
      )}
    </div>
  );
}
