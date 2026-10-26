import type { AchievementProps } from "@/constants/types";

const AchievementCard = ({
  number,
  title,
  color = "var(--color-powder-blue)",
  shadowColor = "var(--color-dark-pine-green)",
  borderColor = "var(--color-dusty-blue)",
  className = "",
}: AchievementProps) => {
  return (
    <article
      className={`
        flex w-full flex-col items-start
        gap-4 rounded-[20px]
        border p-6 tablet:p-7.5
        ${className}
      `}
      style={{
        backgroundColor: color,
        borderColor,
        boxShadow: `4px 4px 0 0 ${shadowColor}`,
      }}
    >
      <h2 className="font-bricolage text-[clamp(2.25rem,5vw,2.875rem)] font-bold leading-[1.1] tracking-[-0.04em] text-deep-forest-green">
        {number}
      </h2>

      <div className="w-full border-t border-deep-forest-green-20 pt-4">
        <p className="body">{title}</p>
      </div>
    </article>
  );
};

export default AchievementCard;
