import { Dispatch, SetStateAction } from "react";

export const handleUpdateField = <T, K extends keyof T>(setFormData: Dispatch<SetStateAction<T>>, field: K, value: T[K]) => {
  setFormData((previous) => ({
    ...previous,
    [field]: value,
  }));
};
