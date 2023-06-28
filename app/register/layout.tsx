import NavBar from "../components/navbar";

export const metadata = {
  title: "Registration",
  description:
    "Register now for the Xtreme League and be part of the ultimate adrenaline-fueled tournament. Experience intense competition, conquer challenges, and compete against the best to claim your victory.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
