"use client";

import { useUnsavedChanges } from "@/contexts/UnsavedChangesContext";

export default function UnsavedChangesPanel() {
  const { hasUnsavedChanges, saveChanges, discardChanges } = useUnsavedChanges();

  if (!hasUnsavedChanges) {
    return null;
  }

  return (
    <>
      <p className="unsaved-changes-panel__status-label">Nem mentett módosítások</p>

      <div className="unsaved-changes-panel__actions">
        <button className="btn" type="button" onClick={discardChanges}>
          Elvetés
        </button>

        <button className="btn" type="button" onClick={saveChanges}>
          Mentés
        </button>
      </div>
    </>
  );
}
