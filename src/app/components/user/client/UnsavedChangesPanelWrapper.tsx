"use client";

import { useUnsavedChanges } from "@/contexts/UnsavedChangesContext";
import UnsavedChangesPanel from "@/app/components/user/client/UnsavedChangesPanel";

export default function UnsavedChangesPanelWrapper() {
  const { hasUnsavedChanges } = useUnsavedChanges();

  return (
    <section className={`unsaved-changes ${hasUnsavedChanges ? "is-visible" : ""}`} role="alert">
      <div className="unsaved-changes-panel">
        <UnsavedChangesPanel />
      </div>
    </section>
  );
}
