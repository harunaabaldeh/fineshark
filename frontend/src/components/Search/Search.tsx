import React, { ChangeEvent, SyntheticEvent } from "react";

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onSearchSubmit,
  search,
  handleSearchOnChange,
}: Props): React.JSX.Element => {
  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <input value={search} onChange={handleSearchOnChange} />
      </form>
    </>
  );
};

export default Search;
