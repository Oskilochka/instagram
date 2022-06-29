import React from "react";
import styles from "./styles.module.scss";
import { InputFieldProps } from "../InputField";
import { TextField } from "../TextField";
import classnames from "classnames";

export const PasswordField = React.memo<InputFieldProps>((
  {
    className,
    ...props
  }
) => {
  return (
    <TextField className={classnames(styles.root, className)} {...props}  />
  );
});

export default PasswordField;

