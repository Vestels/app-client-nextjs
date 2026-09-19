"use client";

import { useEffect, useRef, useState } from "react";
import { UserProfile } from "@/interfaces/user.interface";
import { handleUpdateField } from "@/lib/handle-update-field.lib";
import { Gender } from "@/enums/user.enum";
import { useUnsavedChanges } from "@/contexts/UnsavedChangesContext";
import { getChangedFields } from "@/lib/get-changed-fields.lib";

export default function UserProfileForm({ initialPreferences }: { initialPreferences: UserProfile }) {
  const [formData, setFormData] = useState<UserProfile>(initialPreferences);
  const { registerForm, unregisterForm, markChanged, markSaved } = useUnsavedChanges();
  const formDataRef = useRef(formData);

  useEffect(() => {
    formDataRef.current = formData;

    const changed = JSON.stringify(formData) !== JSON.stringify(initialPreferences);

    if (changed) {
      markChanged("user");
    } else {
      markSaved("user");
    }
  }, [formData, initialPreferences, markChanged, markSaved]);

  useEffect(() => {
    registerForm(
      "user",

      async () => {
        const changedFields = getChangedFields(initialPreferences, formDataRef.current);
        // await updateUser(changedFields);
        console.log(changedFields);
      },

      () => {
        setFormData(initialPreferences);
        formDataRef.current = initialPreferences;
      },
    );

    return () => {
      unregisterForm("user");
    };
  }, [registerForm, unregisterForm, initialPreferences]);

  return (
    <div className="user-informations">
      <div className="user-informations__data-row">
        <label htmlFor="birthDate" className="property property--required">
          Születési idő:
          <span className="input-requirement">{"(Kötelező)"}</span>
        </label>

        <input
          id="birthDate"
          type="date"
          className="value"
          value={formData.birthDate ?? ""}
          required
          onChange={(event) => handleUpdateField(setFormData, "birthDate", event.target.value)}
        />
      </div>

      <div className="user-informations__data-row">
        <label htmlFor="gender" className="property property--required">
          Nem:
          <span className="input-requirement">{"(Kötelező)"}</span>
        </label>

        <select
          id="gender"
          className="value"
          value={formData.gender ?? ""}
          onChange={(event) => handleUpdateField(setFormData, "gender", event.target.value as Gender)}>
          <option value="" disabled>
            Válassz
          </option>

          {Object.entries(Gender).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </div>

      <div className="user-informations__data-row">
        <label htmlFor="nickname" className="property">
          Becenév:
        </label>

        <input
          id="nickname"
          type="text"
          className="value"
          value={formData.nickname ?? ""}
          onChange={(event) => handleUpdateField(setFormData, "nickname", event.target.value)}
        />
      </div>

      <div className="user-informations__data-row">
        <label htmlFor="firstName" className="property">
          Keresztnév:
        </label>

        <input
          id="firstName"
          type="text"
          className="value"
          value={formData.firstName ?? ""}
          onChange={(event) => handleUpdateField(setFormData, "firstName", event.target.value)}
        />
      </div>

      <div className="user-informations__data-row">
        <label htmlFor="lastName" className="property">
          Vezetéknév:
        </label>

        <input
          id="lastName"
          type="text"
          className="value"
          value={formData.lastName ?? ""}
          onChange={(event) => handleUpdateField(setFormData, "lastName", event.target.value)}
        />
      </div>
    </div>
  );
}
