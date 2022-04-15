function createStockPortfolio()
{
  let sp = 
  {
    tickers: [],
    numUniqueStocks: 0
  };
  return sp;
}

function addStock(portfolio, stockName, numshares)
{
  if ((portfolio.tickers.find((ticker) => ticker.name == stockName)) == undefined)
  {
    portfolio.tickers.push({name: stockName, num: numshares});
    portfolio.numUniqueStocks++;
  }
}

function removeStock(portfolio, stockName, numshares)
{
  const tickerIndex = portfolio.tickers.findIndex((ticker) => ticker.name == stockName);
  if (tickerIndex != -1)
  {
    portfolio.tickers[tickerIndex].num -= numshares;
    if (portfolio.tickers[tickerIndex].num <= 0)
    {
      portfolio.tickers.splice(tickerIndex, 1);
      portfolio.numUniqueStocks--;
    }
  }
}

function checkShares(portfolio, stockName)
{
  const tickerIndex = portfolio.tickers.findIndex((ticker) => ticker.name == stockName);
  if (tickerIndex != -1)
  {
    return portfolio.tickers[tickerIndex].num;
  }
  return 0;
}

exports.createStockPortfolio = createStockPortfolio;
exports.addStock = addStock;
exports.removeStock = removeStock;
exports.checkShares = checkShares;
