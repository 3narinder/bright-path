import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Mind Spring | Where Hard Subjects Get Easier",
  description:
    "Mind Spring helps children build confidence and master difficult subjects through personalized learning plans that address their actual learning gaps, from number sense to calculus.",
  keywords: [
    "Mind Spring",
    "personalized learning for kids",
    "math tutoring for children",
    "academic confidence",
    "learning support for students",
    "math learning programs",
    "personalized education",
  ],
  applicationName: "Mind Spring",
  openGraph: {
    title: "Mind Spring | Where Hard Subjects Get Easier",
    description:
      "We rebuild confidence first, then speed. Personalized learning plans help every child overcome learning gaps and make hard subjects easier.",
    siteName: "Mind Spring",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mind Spring | Where Hard Subjects Get Easier",
    description:
      "Build confidence. Close learning gaps. Make hard subjects easier with personalized learning designed around every child's needs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
