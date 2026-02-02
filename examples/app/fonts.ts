import { Alice, Geist } from "next/font/google";

export const AliceSerif = Alice({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  preload: true,
  variable: "--font-alice",
});

export const GeistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  preload: true,
  variable: "--font-geist",
});
