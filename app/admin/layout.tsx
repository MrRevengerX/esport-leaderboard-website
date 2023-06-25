export const metadata = {
  title: "Dashboard",
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
