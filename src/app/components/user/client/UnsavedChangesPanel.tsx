"use client";

import { useUnsavedChanges } from "@/contexts/UnsavedChangesContext";
import { useTranslations } from "next-intl";

export default function UnsavedChangesPanel() {
  const translate = useTranslations("APP");
  const { hasUnsavedChanges, saveChanges, discardChanges } = useUnsavedChanges();

  if (!hasUnsavedChanges) {
    return null;
  }

  return (
    <>
      <p className="unsaved-changes-panel__status-label">{translate("PROFILE.UNSAVED_CHANGES_PANEL.LABEL")}</p>

      <div className="unsaved-changes-panel__actions">
        <button className="btn" type="button" onClick={discardChanges}>
          {translate("ACTIONS.PROFILE.CANCEL")}
        </button>

        <button className="btn" type="button" onClick={saveChanges}>
          {translate("ACTIONS.PROFILE.SAVE")}
        </button>
      </div>
    </>
  );
}
