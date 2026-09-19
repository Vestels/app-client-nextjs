"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";

export type FormKey = "user" | "preferences" | "settings";

type FormAction = () => void | Promise<void>;

type UnsavedChangesContextType = {
  registerForm: (key: FormKey, save: FormAction, reset: FormAction) => void;
  unregisterForm: (key: FormKey) => void;

  markChanged: (key: FormKey) => void;
  markSaved: (key: FormKey) => void;

  saveChanges: () => Promise<void>;
  discardChanges: () => void;

  hasUnsavedChanges: boolean;
};

const UnsavedChangesContext = createContext<UnsavedChangesContextType | null>(null);

export function UnsavedChangesProvider({ children }: { children: React.ReactNode }) {
  const [changedForms, setChangedForms] = useState<Set<FormKey>>(new Set());

  const saveFunctions = useRef<Map<FormKey, FormAction>>(new Map());

  const resetFunctions = useRef<Map<FormKey, FormAction>>(new Map());

  const registerForm = useCallback((key: FormKey, save: FormAction, reset: FormAction) => {
    saveFunctions.current.set(key, save);
    resetFunctions.current.set(key, reset);
  }, []);

  const unregisterForm = useCallback((key: FormKey) => {
    saveFunctions.current.delete(key);
    resetFunctions.current.delete(key);
  }, []);

  const markChanged = useCallback((key: FormKey) => {
    setChangedForms((prev) => {
      if (prev.has(key)) {
        return prev;
      }

      const next = new Set(prev);
      next.add(key);

      return next;
    });
  }, []);

  const markSaved = useCallback((key: FormKey) => {
    setChangedForms((prev) => {
      if (!prev.has(key)) {
        return prev;
      }

      const next = new Set(prev);
      next.delete(key);

      return next;
    });
  }, []);

  const saveChanges = useCallback(async () => {
    const forms = Array.from(changedForms);

    await Promise.all(
      forms.map(async (key) => {
        const save = saveFunctions.current.get(key);

        if (save) {
          await save();
        }
      }),
    );

    setChangedForms(new Set());
  }, [changedForms]);

  const discardChanges = useCallback(() => {
    changedForms.forEach((key) => {
      const reset = resetFunctions.current.get(key);

      if (reset) {
        reset();
      }
    });

    setChangedForms(new Set());
  }, [changedForms]);

  return (
    <UnsavedChangesContext.Provider
      value={{
        registerForm,
        unregisterForm,
        markChanged,
        markSaved,
        saveChanges,
        discardChanges,
        hasUnsavedChanges: changedForms.size > 0,
      }}>
      {children}
    </UnsavedChangesContext.Provider>
  );
}

export function useUnsavedChanges() {
  const context = useContext(UnsavedChangesContext);

  if (!context) {
    throw new Error("useUnsavedChanges must be used inside UnsavedChangesProvider");
  }

  return context;
}
