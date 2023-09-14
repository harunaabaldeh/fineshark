import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import Search from "./components/Search/Search";
import { CompanySearch } from "./types/company";
import { searchCompanies } from "./api/agent";
import ListPortfolio from "./components/Portfolio/ListPortfolio/ListPortfolio";

function App() {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }

    console.log(searchResult);
  };

  const onCreatePortfolio = (e: any) => {
    e.preventDefault();
    const exist = portfolioValues.find((value) => value === e.target[0].value);
    if (exist) return;
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  };

  return (
    <>
      <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchOnChange={handleSearchOnChange}
      />
      <ListPortfolio portfolioValues={portfolioValues} />
      <CardList
        searchResults={searchResult}
        onCreatePortfolio={onCreatePortfolio}
      />
      {serverError && <h1>{serverError}</h1>}
    </>
  );
}

export default App;
