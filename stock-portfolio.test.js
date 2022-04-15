const stockFunctions = require('./stock-portfolio.js');

test('Testing stock portfolio -- creation', () => {
  const result = stockFunctions.createStockPortfolio();
  expect(result.numStocks).toBe(0);
  expect(result.tickers).toStrictEqual([]);
});

test('Test unique stock number', () =>
{
  let sp = stockFunctions.createStockPortfolio();
  stockFunctions.addStock(sp, "GME");
  stockFunctions.addStock(sp, "RBLX");
  expect(sp.numStocks).toBe(2);
});

