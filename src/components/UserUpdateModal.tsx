import { useState } from "react";
import { UserUpdateForm } from "../utils/types";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Button from "./Button";
import FormSection from "./FormSection";
import ButtonContainer from "./ButtonContainer";
import styled from "@emotion/styled";
import THEME from "../theme/theme";
import TextInput from "./TextInput";
import FeedbackMessage from "./FeedbackMessage";

const ModalContainer = styled.div(({ theme }) => ({
  padding: "20px",
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  juutifyContent: "flex-start",
  gap: "26px",
  fontFamily: theme.fontFamily.primary,
  [theme.mediaQueries.tablet]: {
    width: "670px",
    height: "auto",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.colors.white,
    padding: "26px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: 1,
    borderRadius: "16px",
  },
}));

const StyledForm = styled.form(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "26px",
}));

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      localStorage.setItem("formData", JSON.stringify(formData));
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 2000);
    }
  };

  return (
    <ModalContainer theme={THEME}>
      <Title text="Neues Update erstellen" color="violet" />
      <StyledForm onSubmit={handleSubmit}>
        <FormSection>
          <Subtitle text="Titel" color="orange" />
          <TextInput
            id="updateTitle"
            name="updateTitle"
            value={formData.updateTitle}
            onChange={handleFormDataChange}
            errors={errors}
            maxLength={100}
            aria-label="Titel"
          />
        </FormSection>
        <FormSection>
          <Subtitle text="Deine Neuigkeiten" color="orange" />
          <div>
            <textarea
              id="updateContent"
              name="updateContent"
              type="textarea"
              placeholder="Bitte schreibe ein paar Worte zu deinem Update."
              value={formData.updateContent}
              onChange={handleFormDataChange}
              errors={errors}
              aria-label="Deine Neuigkeiten"
            />
          </div>
        </FormSection>
        <FormSection>
          <>
            <Subtitle text="Absender" color="orange" />
            <>
              <label htmlFor="isToggleChecked">Absender ändern</label>
              <input
                id="isToggleChecked"
                type="checkbox"
                checked={isToggleChecked}
                onChange={handleToggleChange}
              />
            </>
          </>
          <div>
            <p>
              Hier hast du die Option, das Update unter einem anderen Namen zu
              veröffentlichen.
            </p>
          </div>
          <TextInput
            label="Absender"
            id="author"
            name="author"
            placeholder="Vorname Nachname"
            value={formData.author}
            onChange={handleFormDataChange}
            errors={errors}
            disabled={!isToggleChecked}
          />
        </FormSection>
        <ButtonContainer>
          <Button bgColor="white" textColor="orange">
            Abbrechen
          </Button>
          <Button type="Submit" bgColor="violet" textColor="white">
            Entwurf speichern
          </Button>
          <Button bgColor="orange" textColor="white">
            Update veröffentlichen
          </Button>
        </ButtonContainer>
      </StyledForm>
      {showSuccessMessage ? (
        <FeedbackMessage
          textAlign="center"
          bold={true}
          color="success"
          size="medium"
        >
          Formular erfolgreich übermittelt
        </FeedbackMessage>
      ) : (
        <div style={{ height: "22px" }} />
      )}
    </ModalContainer>
  );
};

export default UserUpdateModal;
