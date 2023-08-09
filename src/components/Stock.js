import React from "react";

function Stock({ stock, buyStock, sellStock, inPortfolio }) {
  const handleTransaction = () => {
    if (inPortfolio) {
      sellStock(stock.id);
    } else {
      buyStock(stock);
    }
  };

  return (
    <div>
      <div className="card" onClick={handleTransaction}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">Price: {stock.price}</p>
          <p className="card-text">Type: {stock.type}</p>
        </div>
      </div>
    </div>
  );
}

export default Stock;