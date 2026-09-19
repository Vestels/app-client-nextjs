"use client";

import { useEffect, useRef, useState } from "react";
import { UserPreference } from "@/interfaces/user.interface";
import { handleUpdateField } from "@/lib/handle-update-field.lib";
import { Language, Theme, UnitSystem } from "@/enums/user.enum";
import { useUnsavedChanges } from "@/contexts/UnsavedChangesContext";
import { getChangedFields } from "@/lib/get-changed-fields.lib";

export default function UserPreferencesForm({ initialPreferences }: { initialPreferences: UserPreference }) {
  const [formData, setFormData] = useState<UserPreference>(initialPreferences);
  const { registerForm, unregisterForm, markChanged, markSaved } = useUnsavedChanges();
  const formDataRef = useRef(formData);

  useEffect(() => {
    formDataRef.current = formData;
    
    const changed = JSON.stringify(formData) !== JSON.stringify(initialPreferences);

    if (changed) {
      markChanged("preferences");
    } else {
      markSaved("preferences");
    }
  }, [formData, initialPreferences, markChanged, markSaved]);

  useEffect(() => {
    registerForm(
      "preferences",

      async () => {
        const changedFields = getChangedFields(initialPreferences, formDataRef.current);
        // await updatePreferences(changedFields);
        console.log(changedFields);
      },

      () => {
        setFormData(initialPreferences);
        formDataRef.current = initialPreferences;
      },
    );

    return () => {
      unregisterForm("preferences");
    };
  }, [registerForm, unregisterForm, initialPreferences]);

  return (
    <div className="user-informations">
      <div className="user-informations__data-row">
        <label htmlFor="language" className="property">
          Nyelv:
        </label>

        <select
          disabled
          id="language"
          value={formData.language}
          onChange={(event) => handleUpdateField(setFormData, "language", event.target.value as Language)}>
          {Object.entries(Language).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </div>

      <div className="user-informations__data-row">
        <label htmlFor="unitSystem" className="property">
          Mértékegység-rendszer:
        </label>

        <select
          id="unitSystem"
          value={formData.unitSystem}
          onChange={(event) => handleUpdateField(setFormData, "unitSystem", event.target.value as UnitSystem)}>
          {Object.entries(UnitSystem).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </div>

      <div className="user-informations__data-row">
        <label htmlFor="theme" className="property">
          Téma:
        </label>

        <select
          disabled
          id="theme"
          value={formData.theme}
          onChange={(event) => handleUpdateField(setFormData, "theme", event.target.value as Theme)}>
          {Object.entries(Theme).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </div>

      <div className="user-informations__data-row user-informations__data-row--one-liner">
        <label htmlFor="emailNotifications" className="property">
          Email értesítések:
        </label>

        <label className="switch">
          <input
            id="emailNotifications"
            type="checkbox"
            checked={formData.emailNotifications}
            onChange={(event) => handleUpdateField(setFormData, "emailNotifications", event.target.checked)}
          />
          <span className="switch__slider" />
        </label>
      </div>

      <div className="user-informations__data-row user-informations__data-row--one-liner">
        <label htmlFor="pushNotifications" className="property">
          Push étesítések:
        </label>

        <label className="switch">
          <input
            id="pushNotifications"
            type="checkbox"
            checked={formData.pushNotifications}
            onChange={(event) => handleUpdateField(setFormData, "pushNotifications", event.target.checked)}
          />
          <span className="switch__slider" />
        </label>
      </div>
    </div>
  );
}
