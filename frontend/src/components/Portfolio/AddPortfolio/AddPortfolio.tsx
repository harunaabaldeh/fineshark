import { SyntheticEvent } from "react";

interface Props {
  onCreatePortfolio: (e: SyntheticEvent) => void;
  symbol: string;
}

const AddPortfolio = ({ onCreatePortfolio, symbol }: Props) => {
  return (
    <>
      <form onSubmit={onCreatePortfolio}>
        <input readOnly={true} hidden value={symbol} />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddPortfolio;
