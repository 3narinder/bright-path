import { ButtonProps, ButtonVariant } from "@/constants/types";
import React from "react";

const variants: Record<ButtonVariant, string> = {
  default:
    "bg-dark-pine-green text-white border border-sage-green shadow-[0_4px_0_0_var(--color-sage-green)] desktop:hover:bg-deep-orange px-7.5 py-2.5 tablet:py-4",

  nav: "bg-dark-pine-green text-white border border-sage-green shadow-[0_4px_0_0_var(--color-sage-green)] desktop:hover:bg-deep-orange px-7.5 py-2.5 tablet:py-3",

  primary:
    "bg-burnt-orange text-white border border-terracotta-brown shadow-[0_4px_0_0_var(--color-terracotta-brown)] desktop:hover:bg-deep-orange desktop:hover:shadow-[0_7px_0_0_var(--color-terracotta-brown)] px-7.5 py-2.5 tablet:py-4",

  white:
    "bg-ivory-cream text-deep-forest-green border border-dark-pine-green shadow-[0_4px_0_0_var(--color-dark-pine-green)] desktop:hover:bg-white desktop:hover:shadow-[0_7px_0_0_var(--color-dark-pine-green)] px-7.5 py-2.5 tablet:py-4",
};

const Button = ({
  title,
  variant = "default",
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`
        inline-flex items-center justify-center rounded-full
        font-instrument font-medium
        transition-all duration-300 cursor-pointer
        ${variants[variant]}
      `}
      {...props}
    >
      <p className="text-md">{title}</p>
    </button>
  );
};

export default Button;
