import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "./components/navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Providers from "@/utils/provider";

export const metadata = {
  metadataBase: new URL("https://xtremeleague.revengerx.dev"),
  title: { template: "%s", default: "Xtreme League" },
  description: "Xtreme League CODM Tournament Series",
  openGraph: {
    images: "/thumbnail.png",
  },
  twitter: {
    images: "/thumbnail.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="select-none bg-gray-900 font-poppins">
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
      <body className="">
        <NavBar />

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
