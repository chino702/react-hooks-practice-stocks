import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [filteredStocks, setFilteredStocks] = useState([]);

  useEffect(() => {
    // Fetch stocks from API
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => {
        setStocks(data);
        setFilteredStocks(data);
      });
  }, []);

  const buyStock = (stock) => {
    setPortfolio([...portfolio, stock]);
  };

  const sellStock = (stockId) => {
    const updatedPortfolio = portfolio.filter((stock) => stock.id !== stockId);
    setPortfolio(updatedPortfolio);
  };

  const handleSortByName = () => {
    const sortedStocks = [...filteredStocks].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setFilteredStocks(sortedStocks);
  };

  const handleSortByPrice = () => {
    const sortedStocks = [...filteredStocks].sort((a, b) => a.price - b.price);
    setFilteredStocks(sortedStocks);
  };

  const handleFilter = (event) => {
    const selectedType = event.target.value;
    if (selectedType === "All") {
      setFilteredStocks(stocks);
    } else {
      const filteredStocks = stocks.filter((stock) => stock.type === selectedType);
      setFilteredStocks(filteredStocks);
    }
  };

  return (
    <div>
      <SearchBar
        handleSortByName={handleSortByName}
        handleSortByPrice={handleSortByPrice}
        handleFilter={handleFilter}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} buyStock={buyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} sellStock={sellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;