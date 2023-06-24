import NavBar from "../components/navbar";

export const metadata = {
  title: "Xtreme League Rules & Regulations",
  description:
    "Explore our detailed guidelines and point system that ensure fair play and an electrifying tournament experience.",
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
