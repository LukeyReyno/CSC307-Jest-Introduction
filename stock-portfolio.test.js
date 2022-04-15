const stockFunctions = require('./stock-portfolio.js');

test('Testing stock portfolio -- creation', () => {
  const result = stockFunctions.createStockPortfolio();
  expect(result.numUniqueStocks).toBe(0);
  expect(result.tickers).toStrictEqual([]);
});

test('Test add stock number', () =>
{
  let sp = stockFunctions.createStockPortfolio();
  stockFunctions.addStock(sp, "GME", 5);
  stockFunctions.addStock(sp, "RBLX", 10);
  expect(sp.numUniqueStocks).toBe(2);
});

test('Test remove stock number', () =>
{
  let sp = stockFunctions.createStockPortfolio();
  stockFunctions.addStock(sp, "GME", 7);
  stockFunctions.addStock(sp, "YUM", 11);
  expect(sp.numUniqueStocks).toBe(2);

  stockFunctions.removeStock(sp, "GME", 7);
  stockFunctions.removeStock(sp, "YUM", 1);

  expect(sp.numUniqueStocks).toBe(1);
});

test('Test lookup stockshares by stockname', () =>
{
  let sp = stockFunctions.createStockPortfolio();
  stockFunctions.addStock(sp, "GME", 7);
  stockFunctions.addStock(sp, "YUM", 11);

  let result = stockFunctions.checkShares(sp, "GME");
  expect(result).toBe(7);

  result = stockFunctions.checkShares(sp, "YUM");
  expect(result).toBe(11);

  stockFunctions.removeStock(sp, "GME", 6);
  stockFunctions.removeStock(sp, "YUM", 1);

  result = stockFunctions.checkShares(sp, "GME");
  expect(result).toBe(1);

  result = stockFunctions.checkShares(sp, "YUM");
  expect(result).toBe(10);

  stockFunctions.removeStock(sp, "GME", 1);
  result = stockFunctions.checkShares(sp, "GME");
  expect(result).toBe(0);

  result = stockFunctions.checkShares(sp, "YUM");
  expect(result).toBe(10);
});

test('Test stock portfolio tickers get removed', () =>
{
  let sp = stockFunctions.createStockPortfolio();
  stockFunctions.addStock(sp, "GME", 7);
  expect(sp.tickers).toStrictEqual([{name: "GME", num: 7}]);
  expect(sp.numUniqueStocks).toBe(1);

  stockFunctions.removeStock(sp, "GME", 5);
  expect(sp.tickers).toStrictEqual([{name: "GME", num: 2}]);

  stockFunctions.removeStock(sp, "GME", 2);
  expect(sp.tickers).toStrictEqual([]);

  expect(sp.numUniqueStocks).toBe(0);
});

test('Test throw ShareSaleException when removing too many shares', () =>
{
  let sp = stockFunctions.createStockPortfolio();
  stockFunctions.addStock(sp, "GME", 7);
  expect(() => stockFunctions.removeStock(sp, "GME", 9)).toThrow(/ShareSaleException/);
});
