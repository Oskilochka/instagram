import React from "react";
import classnames from "classnames";
import { LoginBlock } from "./components";
import styles from './styles.module.scss'

export type TextFieldProps = {
  className?: string
}

export const AuthPage = React.memo<TextFieldProps>((
  {
    className,
  }) => {
  return (
    <div className={classnames(styles.wrap, className)}>
      <LoginBlock />
    </div>
  );
});

export default AuthPage;

