import React, { SyntheticEvent } from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../types/company";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResults: CompanySearch[];
  onCreatePortfolio: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({
  searchResults,
  onCreatePortfolio,
}: Props): JSX.Element => {
  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return (
            <Card
              id={result.symbol}
              key={uuidv4()}
              searchResult={result}
              onCreatePortfolio={onCreatePortfolio}
            />
          );
        })
      ) : (
        <h1>No result</h1>
      )}
    </>
  );
};

export default CardList;
