import axios from "axios";
import { CompanySearch } from "../types/company";

interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {
    const data = axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
      //console.log(axios.isAxiosError(error));
    }
    console.log("unexpected error: ", error);

    return "An unexpected error has occured";
  }
};
