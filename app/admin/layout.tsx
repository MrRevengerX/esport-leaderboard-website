export const metadata = {
  title: "Xtreme League Dashboard",
  description: "ADMIN ONLY",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="select-none ">
      <body className="bg-gray-900 font-poppins">{children}</body>
    </html>
  );
}
