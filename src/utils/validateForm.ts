import { UserUpdateForm } from "./types";

export const validateForm = (
  formData: UserUpdateForm,
  setErrors: (errors: { [key in keyof UserUpdateForm]?: string }) => void
): boolean => {
  const newErrors: { [key in keyof UserUpdateForm]?: string } = {};

  if (!formData.updateTitle.trim()) {
    newErrors.updateTitle = "Dieses Feld ist erforderlich.";
  }

  if (!formData.updateContent.trim()) {
    newErrors.updateContent = "Dieses Feld ist erforderlich.";
  }

  if (!formData.author.trim()) {
    newErrors.author = "Dieses Feld ist erforderlich.";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0; // returns true if the form is valid
};
