import React, { SyntheticEvent } from "react";
import "./Card.css";
import { CompanySearch } from "../../types/company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onCreatePortfolio: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({
  id,
  searchResult,
  onCreatePortfolio,
}: Props): JSX.Element => {
  return (
    <div className="card">
      <img alt="Company logo" />
      <div className="details">
        <h2>
          {searchResult.name}({searchResult.symbol})
        </h2>
        <p>{searchResult.currency}</p>
      </div>
      <p className="info">
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>
      <AddPortfolio
        onCreatePortfolio={onCreatePortfolio}
        symbol={searchResult.symbol}
      />
    </div>
  );
};

export default Card;