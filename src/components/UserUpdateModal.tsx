import { useState } from "react";
import { UserUpdateForm } from "../utils/types";
import Title from "./Title";

type Props = {
  userName: string;
};

const UserUpdateModal: React.FC<Props> = ({ userName }) => {
  const [formData, setFormData] = useState<UserUpdateForm>({
    updateTitle: "",
    updateContent: "",
    author: userName,
  });
  const [isToggleChecked, setIsToggleChecked] = useState<boolean>(false);
  const [errors, setErrors] = useState<{
    [key in keyof UserUpdateForm]?: string;
  }>({});
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  const handleFormDataChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsToggleChecked(e.target.checked);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.updateTitle.trim()) {
      newErrors.updateTitle = "This field is required.";
    }

    if (!formData.updateContent.trim()) {
      newErrors.updateContent = "This field is required.";
    }

    if (isToggleChecked && !formData.author.trim()) {
      newErrors.author = "This field is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      localStorage.setItem("formData", JSON.stringify(formData));
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 2000);
    }
  };

  return (
    <div>
      <Title text="Neues Update erstellen" color="violet" />
      <form onSubmit={handleSubmit}>
        <div>
          <p>Titel</p>
          <input
            id="updateTitle"
            name="updateTitle"
            type="text"
            value={formData.updateTitle}
            onChange={handleFormDataChange}
            maxLength={100}
            aria-label="Titel"
          />
          <p>{formData.updateTitle.length}/100 Zeichen</p>
          {errors.updateTitle && (
            <p style={{ color: "red" }}>{errors.updateTitle}</p>
          )}
        </div>
        <div>
          <p>Deine Neuigkeiten</p>
          <textarea
            id="updateContent"
            name="updateContent"
            type="textarea"
            value={formData.updateContent}
            onChange={handleFormDataChange}
            aria-label="Deine Neuigkeiten"
          />
          {errors.updateContent && (
            <p style={{ color: "red" }}>{errors.updateContent}</p>
          )}
        </div>
        <div>
          <p>Absender</p>
          <label htmlFor="isToggleChecked">Absender ändern</label>
          <input
            id="isToggleChecked"
            type="checkbox"
            checked={isToggleChecked}
            onChange={handleToggleChange}
          />
          <p>
            Hier hast du die Option, das Update unter einem anderen Namen zu
            veröffentlichen.
          </p>
          <label htmlFor="author">Absender</label>
          <input
            id="author"
            name="author"
            type="text"
            value={formData.author}
            onChange={handleFormDataChange}
            disabled={!isToggleChecked}
          />
          {errors.author && <p style={{ color: "red" }}>{errors.author}</p>}
        </div>
        <div>
          <button>Abbrechen</button>
          <button type="Submit">Entwurf speichern</button>
          <button>Update veröffentlichen</button>
        </div>
      </form>
      {showSuccessMessage && (
        <p style={{ color: "green", marginTop: "10px" }}>
          Formular erfolgreich übermittelt
        </p>
      )}
    </div>
  );
};

export default UserUpdateModal;
