import { Squiggle } from "./Art";

export function SectionHeading({
  kicker,
  title,
  lead,
  center = false,
  squiggleClass = "text-peach",
  className = "",
}: {
  kicker: string;
  title: string;
  lead?: string;
  center?: boolean;
  squiggleClass?: string;
  className?: string;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} ${className}`}>
      <p className="font-display text-sm font-semibold text-ink-soft">{kicker}</p>
      <h2 className="mt-1 text-[1.65rem] leading-[1.15] font-bold lg:text-[2.15rem]">{title}</h2>
      <Squiggle className={`mt-2 h-2.5 w-20 ${squiggleClass} ${center ? "mx-auto" : ""}`} />
      {lead && <p className="mt-2.5 text-[0.95rem] text-ink-soft lg:text-base">{lead}</p>}
    </div>
  );
}
