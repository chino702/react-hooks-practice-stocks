import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, sellStock }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map((stock) => (
        <Stock key={stock.id} stock={stock} sellStock={sellStock} inPortfolio={true} />
      ))}
    </div>
  );
}

export default PortfolioContainer;