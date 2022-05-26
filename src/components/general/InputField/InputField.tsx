import classnames from "classnames";
import React from "react";
import styles from "./styles.module.scss";

export type TextFieldProps = {
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
    placeholder,
    className
  }) => {
  return (
    <div className={classnames(styles.root, className)}>
      {label?.length && <p>{label}</p>}
      <input
        id={id}
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {hasError && <p>{errorText}</p>}
    </div>
  );
});

export default InputField;

