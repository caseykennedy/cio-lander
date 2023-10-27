import { type Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import Header from "~/components/header";
import siteMetadata from "~/data/site-metadata";

const { siteUrl, title, description, socialBanner, language } = siteMetadata;

const Geologica = localFont({
  src: [
    {
      path: "_fonts/Geologica_Cursive-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "_fonts/Geologica_Cursive-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "_fonts/Geologica_Cursive-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-geologica",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: "./",
    siteName: title,
    images: [socialBanner],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "./",
    types: {
      "application/rss+xml": `${siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: title,
    card: "summary_large_image",
    images: [socialBanner],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={language}
      className={`${Geologica.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link rel="icon" href="/favicon/favicon.svg" sizes="any" />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#fff"
      />
      <meta name="msapplication-TileColor" content="#000" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#fff"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#000"
      />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <body>
        <div className="flex h-screen flex-col justify-between bg-white">
          <Header />
          <main className="relative bg-bg">{children}</main>
        </div>
      </body>
    </html>
  );
}
