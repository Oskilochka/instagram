import React from "react";
import { InputField } from "../InputField";

export type SearchBlockProps = {}

export const SearchBlock = React.memo<SearchBlockProps>(() => {
  return (
    <div>
      <InputField placeholder='Search block' />
    </div>
  );
});

export default SearchBlock;

