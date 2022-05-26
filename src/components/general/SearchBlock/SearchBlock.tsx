import React from "react";
import { InputField } from "../InputField";
import styles from "./styles.module.scss";

export type SearchBlockProps = {}

export const SearchBlock = React.memo<SearchBlockProps>(() => {
  return (
    <InputField
      className={styles.root}
      placeholder="Search"
    />
  );
});

export default SearchBlock;

