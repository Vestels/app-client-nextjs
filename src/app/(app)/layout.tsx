import { getCurrentUser } from "@/lib/get-current-user.lib";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await getCurrentUser();

  return <article className="main-container">{children}</article>;
}
