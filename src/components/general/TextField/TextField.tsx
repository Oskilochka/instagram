import React from "react";
import styles from "./styles.module.scss";
import InputField, { InputFieldProps } from "../InputField";
import classnames from "classnames";


export const TextField = React.memo<InputFieldProps>((
  {
    className,
    ...props
  },
) => {
  return (
    <InputField className={classnames(styles.root, className)} {...props} />
  );
});

export default TextField;
