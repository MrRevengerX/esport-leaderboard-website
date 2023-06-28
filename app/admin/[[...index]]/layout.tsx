export const metadata = {
  title: "Dashboard",
  description: "ADMIN ONLY",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
