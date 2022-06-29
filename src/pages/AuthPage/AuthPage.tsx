import React from "react";
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
    <div className={styles.wrap}>
      <LoginBlock />
    </div>
  );
});

export default AuthPage;

