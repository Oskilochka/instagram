import React from "react";

export type TextFieldProps =  {
  id?: string,
  value?: string | number | undefined,
  type?: string,
  disabled?: boolean,
  placeholder?: string,
  onChange?: () => void,
  hasError?: boolean,
  errorText?: string,
  label?: string,
}

export const InputField = React.memo<TextFieldProps>((
  {
    value,
    onChange,
    label,
    hasError,
    errorText,
    type,
    id,
    disabled,
    placeholder
  }) => {
  return (
    <div>
      <p>{label}</p>
      <input
        id={id}
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => alert(e.target.value)}
      />
      <p>errors/warnings</p>
    </div>
  );
});

export default InputField;

