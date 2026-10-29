"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { logos } from "@/constants/images";
import Button from "../buttons/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Program", href: "/program" },
  { label: "Mentor", href: "/mentor" },
  { label: "Contact", href: "/contact" },
];

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const overlayTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    if (overlayTimeout.current) {
      clearTimeout(overlayTimeout.current);
    }

    if (!show) {
      setShow(true);

      overlayTimeout.current = setTimeout(() => {
        setShowOverlay(true);
      }, 300);
    } else {
      setShow(false);

      overlayTimeout.current = setTimeout(() => {
        setShowOverlay(false);
      }, 100);
    }
  };

  const closeMenu = () => {
    if (overlayTimeout.current) {
      clearTimeout(overlayTimeout.current);
    }

    setShow(false);

    overlayTimeout.current = setTimeout(() => {
      setShowOverlay(false);
    }, 200);
  };

  return (
    <nav className="relative z-30 flex items-center bg-ivory-cream pt-2.5 pb-3.5 desktop:py-5">
      {/* Navbar content */}
      <div className="relative z-30 mx-auto w-full max-w-365 px-5 tablet:px-7.5">
        <div className="flex w-full items-center justify-between desktop:gap-25">
          {/* Logo */}
          <Link href="/" onClick={closeMenu}>
            <Image
              src={logos.navLogoImage}
              alt="Bright Path navigation logo"
              width={190}
              height={36}
              className="h-8 w-42.25 tablet:h-9 tablet:w-27.5 desktop:h-8 desktop:w-42"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-10 desktop:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-md underline underline-offset-4 decoration-2 transition-colors duration-400 ease-in-out ${
                    active
                      ? "text-burnt-orange decoration-burnt-orange"
                      : "text-deep-forest-green decoration-transparent hover:text-burnt-orange hover:decoration-burnt-orange"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-5">
            {/* Desktop/tablet CTA */}
            <div className="hidden tablet:block">
              <Button title="Get started" variant="nav" />
            </div>

            {/* Animated mobile/tablet menu button */}
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={
                show ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={show}
              className="flex h-8.5 w-8.5 shrink-0 cursor-pointer items-center justify-center rounded-full border border-sage-green bg-dark-pine-green text-white shadow-[0_3px_0_0_var(--color-sage-green)] outline-none tablet:h-10.5 tablet:w-10.5 desktop:hidden"
            >
              {/* Mobile icon: shorter lines */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="block h-5.5 w-5.5 tablet:hidden"
              >
                {/* Top line */}
                <motion.line
                  animate={{
                    x1: 5,
                    y1: show ? 18 : 8,
                    x2: 19,
                    y2: show ? 6 : 8,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />

                {/* Bottom line */}
                <motion.line
                  animate={{
                    x1: 5,
                    y1: show ? 6 : 16,
                    x2: 19,
                    y2: show ? 18 : 16,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </svg>

              {/* Tablet icon: longer lines */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="hidden h-6.5 w-6.5 tablet:block desktop:hidden"
              >
                {/* Top line */}
                <motion.line
                  animate={{
                    x1: 3,
                    y1: show ? 18 : 8,
                    x2: 21,
                    y2: show ? 6 : 8,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />

                {/* Bottom line */}
                <motion.line
                  animate={{
                    x1: 3,
                    y1: show ? 6 : 16,
                    x2: 21,
                    y2: show ? 18 : 16,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/tablet navigation menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: show ? 1 : 0,
          y: show ? 0 : -8,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          delay: show ? 0.1 : 0,
        }}
        aria-hidden={!show}
        className={`absolute left-0 top-full z-20 w-full bg-ivory-cream px-5 pb-5 pt-5 ${
          show ? "pointer-events-auto visible" : "pointer-events-none invisible"
        }`}
      >
        <div className="flex flex-col items-start gap-2.5">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                tabIndex={show ? 0 : -1}
                onClick={closeMenu}
                aria-current={active ? "page" : undefined}
                className={`text-md underline decoration-2 underline-offset-4 transition-colors duration-200 ${
                  active
                    ? "text-burnt-orange decoration-burnt-orange"
                    : "text-deep-forest-green decoration-transparent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </motion.div>

      {/* Mobile/tablet overlay */}
      <motion.div
        initial={false}
        animate={{
          opacity: showOverlay ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        aria-hidden={!showOverlay}
        onClick={closeMenu}
        className={`absolute left-0 right-0 top-17.5 z-9 h-screen w-full bg-deep-forest-green-70 ${
          showOverlay ? "pointer-events-auto" : "pointer-events-none"
        }`}
      />
    </nav>
  );
};

export default NavBar;
