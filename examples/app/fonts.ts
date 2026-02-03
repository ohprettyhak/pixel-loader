import { Alice, Geist, Geist_Mono } from "next/font/google";

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

export const GeistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  preload: true,
  variable: "--font-geist-mono",
});
