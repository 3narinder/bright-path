"use client";

import type { ButtonProps } from "@/constants/types";
import LoadingDots from "../ui/LoadingDots";

const FormButton = ({
  title,
  loading = false,
  error = false,
  disabled = false,
  icon,
  iconPosition = "left",
  type = "submit",
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full font-instrument font-medium
        transition-all duration-300 cursor-pointer
        border border-terracotta-brown
        shadow-[0_4px_0_0_var(--color-terracotta-brown)]
        px-7.5 py-2.5 tablet:py-4
        ${
          error
            ? "bg-[#ff2142] text-terracotta-brown"
            : "bg-burnt-orange text-white"
        }
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <LoadingDots />
      ) : (
        <>
          {icon && iconPosition === "left" && icon}

          <span className="text-md text-white">{title}</span>

          {icon && iconPosition === "right" && icon}
        </>
      )}
    </button>
  );
};

export default FormButton;
