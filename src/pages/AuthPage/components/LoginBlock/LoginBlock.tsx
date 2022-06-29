import classnames from "classnames";
import React from "react";
import LargeLogo from "../../../../assets/icons/largeLogo.png";
import TextField from "../../../../components/general/TextField/TextField";
import PasswordField from "../../../../components/general/PasswordField";
import styles from "./styles.module.scss";

export type TextFieldProps = {
  className?: string
}

export const LoginBlock = React.memo<TextFieldProps>((
  {
    className,
  }) => {
  return (
    <div className={classnames(styles.block, className)}>

      <div className={styles.imgWrap}>
        <img src={LargeLogo} alt="logo" />
      </div>

      <div className={styles.fieldsWrap}>

        <TextField className={styles.field} placeholder="Phone number, username or email" />
        <PasswordField className={styles.field} placeholder="Password"  />

        <button>Login</button>

      </div>

      <div className={styles.divideBlock}>
        <hr />
        <span className={styles.divideTitle}>OR</span>
        <hr />
      </div>

      <button>
        Login Facebook
      </button>

      <button>
        forgot pass
      </button>
    </div>
  );
});

export default LoginBlock;

