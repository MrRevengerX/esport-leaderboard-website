import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "./components/navbar";

export const metadata = {
  metadataBase: new URL("https://xtremeleague.revengerx.dev"),
  title: { template: "%s - Xtreme League", default: "Xtreme League" },
  description:
    " Don't miss your chance to be part of this epic esports event. Register now and secure your spot in the tournament. Let the games begin!",
  openGraph: {
    images: "/xtremeleague-thumbnail.png",
  },
  twitter: {
    images: "/xtremeleague-thumbnail.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="select-none ">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-E4H2B0ZX1D"
      />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-E4H2B0ZX1D');
          `}
      </Script>
      <Analytics />

      <body className="bg-gray-900 font-poppins">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
