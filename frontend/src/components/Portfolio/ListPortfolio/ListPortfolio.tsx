import CardPortfolio from "../CardPortfolio/CardPortfolio";

interface Props {
  portfolioValues: string[];
}
const ListPortfolio = ({ portfolioValues }: Props) => {
  return (
    <>
      <h3>My Portfolio</h3>
      <ul>
        {portfolioValues &&
          portfolioValues.map((portfolioValue) => {
            return (
              <CardPortfolio
                portfolioValue={portfolioValue}
                key={portfolioValue}
              />
            );
          })}
      </ul>
    </>
  );
};
export default ListPortfolio;