function createStockPortfolio()
{
  let sp = 
  {
    tickers: [],
    numStocks: 0
  };
  return sp;
}

function addStock(portfolio, stockName)
{
  if ((portfolio.tickers.find((ticker) => ticker == stockName)) == undefined)
  {
    portfolio.tickers.push(stockName)
    portfolio.numStocks++;
  }
}

exports.createStockPortfolio = createStockPortfolio;
exports.addStock = addStock;
