import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://xtremeleague.revengerx.dev"),
  title: "Xtreme League",
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
    <html lang="en">
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

      <body>{children}</body>
    </html>
  );
}
