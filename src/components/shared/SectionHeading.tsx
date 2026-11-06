import { KidsBar } from "./Art";

export function SectionHeading({
  kicker,
  title,
  lead,
  center = false,
  className = "",
}: {
  kicker: string;
  title: string;
  lead?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} ${className}`}>
      <p className="font-display text-sm font-semibold text-ink-soft">{kicker}</p>
      <h2 className="brand-title mt-1 text-[1.7rem] leading-[1.15] font-bold lg:text-[2.3rem]">{title}</h2>
      <KidsBar className={`mt-2.5 ${center ? "justify-center" : ""}`} />
      {lead && <p className="mt-2.5 text-[0.95rem] text-ink-soft lg:text-base">{lead}</p>}
    </div>
  );
}
