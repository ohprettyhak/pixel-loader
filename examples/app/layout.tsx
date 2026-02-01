import "./globals.css";

import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { AliceSerif } from "./fonts";

export const metadata: Metadata = {
  title: "Pixel Loader Examples",
  description: "3x3 cell loading indicator web component examples",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={AliceSerif.className}>
        <main className="mx-auto w-full max-w-4xl p-4 pt-12 md:p-8 md:pt-24">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
