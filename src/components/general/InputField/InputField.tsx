import classnames from "classnames";
import React from "react";
import styles from "./styles.module.scss";

export type InputFieldProps = {
  id?: string,
  value?: string | number | undefined,
  type?: string,
  disabled?: boolean,
  placeholder?: string,
  onChange?: (value: any) => void,
  hasError?: boolean,
  errorText?: string,
  label?: string,
  className?: string
}

export const InputField = React.memo<InputFieldProps>((
  {
    value,
    onChange,
    label,
    hasError,
    errorText,
    type,
    id,
    disabled,
    placeholder,
    className
  }) => {
  return (
    <>
      {label?.length && <p>{label}</p>}
      <input className={classnames(styles.root, className)}
        id={id}
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {hasError && <p>{errorText}</p>}
    </>
  );
});

export default InputField;

