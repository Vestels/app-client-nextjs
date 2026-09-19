import UnsavedChangesPanelWrapper from "@/app/components/user/client/UnsavedChangesPanelWrapper";
import { UnsavedChangesProvider } from "@/contexts/UnsavedChangesContext";

export default async function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UnsavedChangesProvider>
      {children}
      <UnsavedChangesPanelWrapper />
    </UnsavedChangesProvider>
  );
}
