import classnames from "classnames";
import React from "react";
import styles from "./styles.module.scss";
import { LoginBlock } from "./components";

export type TextFieldProps = {
  className?: string
}

export const AuthPage = React.memo<TextFieldProps>((
  {
    className
  }) => {
  return (
    <div>
     <LoginBlock />
    </div>
  );
});

export default AuthPage;

