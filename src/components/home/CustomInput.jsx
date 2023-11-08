import { useState } from "react";
import "./stylesInput.css";

export default function CustomInput({
  className,
  label,
  maxLength,
  messageErrorBlank,
  messageErrorValid,
  placeHolder,
  customType,
  value,
  onInputChange,
  onValid,
}) {
  const [isValid, setIsValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [messageError, setMessageError] = useState("");

  const validarEmail = (email) => {
    // Expresión regular para validar un correo electrónico
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  };

  const handleKeyDown = (event) => {
    if (customType === "number" || customType === "tel") {
      const inputValue = event.target.value;
      const lastChar = inputValue.slice(-1);
      if (!/^\d$/.test(lastChar)) {
        event.target.value = inputValue.slice(0, -1);
      }
    }
  };
  function validInput(e) {
    onInputChange(e.target.value);
    let changeMessageError = e.target.value;
    if (changeMessageError === "") {
      setMessageError(messageErrorBlank);
      setIsValid(false);
      onValid(false);
    } else {
      if (customType === "email") {
        if (validarEmail(changeMessageError)) {
          setMessageError("valid");
          setIsValid(true);
          onValid(true);
        } else {
          setMessageError(messageErrorValid);
          setIsValid(false);
          onValid(false);
        }
      } else {
        if (changeMessageError.length > maxLength - 1) {
          if (customType === "tel") {
            if (changeMessageError[0] === "9") {
              setMessageError("valid");
              setIsValid(true);
              onValid(true);
            } else {
              setMessageError(messageErrorValid);
              setIsValid(false);
              onValid(false);
            }
          } else {
            setMessageError("valid");
            setIsValid(true);
            onValid(true);
          }
        } else {
          setMessageError(messageErrorValid);
          setIsValid(false);
          onValid(false);
        }
      }
    }
  }
  return (
    <>
      <div className={className}>
        <label className="text-[16px] text-primary-800 font-medium">
          {label}
        </label>
        <div className="container-input mt-2">
          <input
            type={customType === "email" ? "email" : "text"}
            maxLength={maxLength}
            onChange={validInput}
            onInput={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeHolder}
            value={value}
            required
          />
          <label
            className={`is-label ${
              isFocused || messageError !== "" ? "is-focused-label" : ""
            }`}
          ></label>
        </div>
        <span className={`message-error ${isValid ? "hidden" : ""}`}>
          {messageError}
        </span>
      </div>
    </>
  );
}
