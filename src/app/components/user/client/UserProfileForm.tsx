"use client";

import { useEffect, useRef, useState } from "react";
import { UserProfile } from "@/interfaces/user.interface";
import { handleUpdateField } from "@/lib/handle-update-field.lib";
import { Gender } from "@/enums/user.enum";
import { useUnsavedChanges } from "@/contexts/UnsavedChangesContext";
import { getChangedFields } from "@/lib/get-changed-fields.lib";
import { useTranslations } from "next-intl";

export default function UserProfileForm({ initialPreferences }: { initialPreferences: UserProfile }) {
  const translate = useTranslations("APP");
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
          {translate("PROFILE.PERSONAL.BIRTH_DATE")}
          <span className="input-requirement">{`(${translate("REQUIREMENTS.REQUIRED")})`}</span>
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
          {translate("PROFILE.PERSONAL.GENDER.LABEL")}
          <span className="input-requirement">{`(${translate("REQUIREMENTS.REQUIRED")})`}</span>
        </label>

        <select
          id="gender"
          className="value"
          value={formData.gender ?? ""}
          onChange={(event) => handleUpdateField(setFormData, "gender", event.target.value as Gender)}>
          <option className="placeholder" value="" disabled>
            {translate("PROFILE.PERSONAL.GENDER.PLACEHOLDER")}
          </option>

          {Object.values(Gender).map((gender) => (
            <option key={gender} value={gender}>
              {translate(`ENUMS.GENDER.${gender}`)}
            </option>
          ))}
        </select>
      </div>

      <div className="user-informations__data-row">
        <label htmlFor="nickname" className="property">
          {translate("PROFILE.PERSONAL.NICKNAME")}
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
          {translate("PROFILE.PERSONAL.FIRSTNAME")}
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
          {translate("PROFILE.PERSONAL.LASTNAME")}
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
