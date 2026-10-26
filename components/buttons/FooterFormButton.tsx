"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonProps } from "@/constants/types";
import { icons } from "@/constants/images";

interface FooterFormButtonProps extends ButtonProps {
  success?: boolean;
}

const FooterFormButton = ({
  loading = false,
  error = false,
  success = false,
  disabled = false,
  type = "submit",
  ...props
}: FooterFormButtonProps) => {
  const { rightArrow, circleCheck, errorCross } = icons;

  const isDisabled = disabled || loading;

  const icon = error
    ? errorCross
    : disabled
      ? errorCross
      : success
        ? circleCheck
        : rightArrow;

  const buttonStyles = error
    ? "bg-[#ff2142] text-white"
    : disabled
      ? "bg-gray-300 text-gray-500"
      : "bg-burnt-orange text-white";

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={loading}
      aria-label={
        loading
          ? "Loading"
          : error
            ? "Error"
            : disabled
              ? "Disabled"
              : success
                ? "Success"
                : "Submit"
      }
      className={`
        inline-flex items-center justify-center
        rounded-full font-instrument font-medium
        transition-all duration-300
        w-8 h-8 p-2
        ${buttonStyles}
        disabled:cursor-not-allowed
      `}
      {...props}
    >
      {loading ? (
        <motion.span
          className="h-2 w-2 rounded-full bg-current"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ) : (
        <Image
          src={icon}
          alt=""
          aria-hidden="true"
          width={16}
          height={16}
          className="h-full w-full object-contain"
        />
      )}
    </button>
  );
};

export default FooterFormButton;
