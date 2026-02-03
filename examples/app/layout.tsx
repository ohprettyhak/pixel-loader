import "./globals.css";

import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Toaster } from "sonner";
import { twMerge } from "tailwind-merge";
import { AliceSerif, GeistMono, GeistSans } from "./fonts";

export const metadata: Metadata = {
  title: "pixel-loader",
  description: "3x3 cell loading indicator by masonthecode",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body
        className={twMerge(
          GeistSans.variable,
          AliceSerif.variable,
          GeistMono.variable
        )}
      >
        <main className="mx-auto w-full max-w-4xl p-4 pt-12 md:p-8 md:pt-24">
          {children}
        </main>

        <Toaster
          gap={8}
          position="top-center"
          toastOptions={{ className: "rounded-full! h-10! shadow-none!" }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
