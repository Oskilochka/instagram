import React from "react";
import TextField from "../TextField";
import styles from "./styles.module.scss";

export type SearchBlockProps = {}

export const SearchBlock = React.memo<SearchBlockProps>(() => {
  const [ searchValue, setSearchValue ] = React.useState<string | null>(null);

  return (
    <TextField
      className={styles.root}
      placeholder="Search"
      onChange={React.useCallback((value: string) => setSearchValue(value), [])}
    />
  );
});

export default SearchBlock;

