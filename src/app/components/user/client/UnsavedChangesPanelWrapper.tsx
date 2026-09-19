"use client";

import UnsavedChangesPanel from "./UnsavedChangesPanel";
import { useUnsavedChanges } from "@/contexts/UnsavedChangesContext";

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
