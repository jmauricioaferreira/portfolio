import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import localFont from "next/font/local";

import classNames from "classnames";
import { Quicksand } from "next/font/google";
import { getMessages } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-quicksand",
});
const myFont = localFont({
  src: "../../../public/fonts/porshaRichela.ttf",
  variable: "--font-porsha",
});

export const metadata: Metadata = {
  title: "JMauricio | Portfolio",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={classNames(quicksand.variable, myFont.variable)}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
