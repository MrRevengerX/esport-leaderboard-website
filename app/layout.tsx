import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
