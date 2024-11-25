import { useState } from "react";
import { UserUpdateForm } from "../utils/types";
import { validateForm } from "../utils/validateForm";

import styled, { CSSObject } from "@emotion/styled";
import THEME from "../theme/theme";

import Button from "./Button";
import ButtonContainer from "./ButtonContainer";
import FeedbackMessage from "./FeedbackMessage";
import FormSection from "./FormSection";
import Subtitle from "./Subtitle";
import TextInput from "./TextInput";
import TextareaInput from "./TextareaInput";
import Title from "./Title";
import Toggle from "./Toggle";

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

const StyledForm = styled.form((): CSSObject => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "26px",
}));

const SubtitleWithToggle = styled.div(() => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: "8px",
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm(formData, setErrors)) {
      localStorage.setItem("formData", JSON.stringify(formData));
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3_000);
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
          <TextareaInput
            name="updateContent"
            placeholder="Bitte schreibe ein paar Worte zu deinem Update."
            value={formData.updateContent}
            onChange={handleFormDataChange}
            errors={errors}
            aria-label="Deine Neuigkeiten"
          />
        </FormSection>
        <FormSection>
          <SubtitleWithToggle>
            <Subtitle text="Absender" color="orange" />
            <Toggle
              name="isToggleChecked"
              isChecked={isToggleChecked}
              onChange={handleToggleChange}
              labelText="Absender ändern"
            />
          </SubtitleWithToggle>
          <p style={{ width: "100%" }}>
            Hier hast du die Option, das Update unter einem anderen Namen zu
            veröffentlichen.
          </p>
          <TextInput
            label="Absender"
            id="author"
            name="author"
            defaultValue={userName}
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
          <Button type="submit" bgColor="violet" textColor="white">
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
