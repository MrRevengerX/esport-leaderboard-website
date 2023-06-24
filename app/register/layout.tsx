import NavBar from "../components/navbar";

export const metadata = {
  title: "Xtreme League Registration",
  description:
    "Register now for the Xtreme League and be part of the ultimate adrenaline-fueled tournament. Experience intense competition, conquer challenges, and compete against the best to claim your victory.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="select-none ">
      <body className="bg-gray-900 font-poppins">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
