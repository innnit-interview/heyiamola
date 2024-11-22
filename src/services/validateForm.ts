import { UserUpdateForm } from "../types";

export const validateForm = (
  formData: UserUpdateForm,
  isToggleChecked: boolean,
  setErrors: (errors: { [key in keyof UserUpdateForm]?: string }) => void
): boolean => {
  const newErrors: { [key in keyof UserUpdateForm]?: string } = {};

  if (!formData.updateTitle.trim()) {
    newErrors.updateTitle = "Dieses Feld ist erforderlich.";
  }

  if (!formData.updateContent.trim()) {
    newErrors.updateContent = "Dieses Feld ist erforderlich.";
  }

  if (isToggleChecked && !formData.author.trim()) {
    newErrors.author = "Dieses Feld ist erforderlich.";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
