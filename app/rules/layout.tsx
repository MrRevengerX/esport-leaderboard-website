import NavBar from "../components/navbar";

export const metadata = {
  title: "Teams",
  description:
    "Explore our detailed guidelines and point system that ensure fair play and an electrifying tournament experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
