const myFunctions = require('./sample-functions.js');


// Testing Sum Fuction
test('Testing sum -- success', () => {
  const target = 21;
  const result = myFunctions.sum(10, 11);
  expect(target).toBe(result);
});

test('Testing sum -- failure', () => {
  const target = 21;
  const result = myFunctions.sum(9, 10);
  expect(target).not.toBe(result);
});

test('Testing sum -- negative numbers success', () => {
  const target = 1;
  const result = myFunctions.sum(-9, 10);
  expect(target).toBe(result);
});

test('Testing sum -- negative numbers failure', () => {
  const target = -1;
  const result = myFunctions.sum(-9, 10);
  expect(target).not.toBe(result);
});

// Testing Div Function
test('Testing div -- success', () => {
  const target = 3;
  const result = myFunctions.div(21, 7);
  expect(target).toBe(result);
});

test('Testing div -- failure', () => {
  const target = 3;
  const result = myFunctions.div(21, 5);
  expect(target).not.toBe(result);
});

test('Testing div -- divide by zero error', () => {
  const target = () => myFunctions.div(21, 0);
  expect(target).toThrow(Error);
  expect(target).toThrow(/Divide By Zero/);
});

// Testing ContainsNumbers Function
test('Testing constainsNumbers -- true', () => {
  const result = myFunctions.containsNumbers("21, 7");
  expect(result).toBeTruthy();
});

test('Testing constainsNumbers -- false', () => {
  const result = myFunctions.containsNumbers("alkdfjdklafj");
  expect(result).toBeFalsy();
});

test('Testing constainsNumbers -- num in middle', () => {
  const result = myFunctions.containsNumbers("alkdfjd9klafj");
  expect(result).toBeTruthy();
});

test('Testing constainsNumbers -- special characters', () => {
  const result = myFunctions.containsNumbers("œ∑´®†¥¨ˆøπåß∂ƒ©≈ç√∫˜µ≤≥÷åß∂ƒ©˚¬…æ«‘πøˆ¥†´∑œ`¡™£¢∞§¶•ªº–≠");
  expect(result).toBeFalsy();
});

// Bug in Program thinks some characteres are numbers
test('Testing constainsNumbers -- space', () => {
  const result = myFunctions.containsNumbers("a a");
  expect(result).toBeTruthy();
});

test('Testing constainsNumbers -- tabs', () => {
  const result = myFunctions.containsNumbers("a\ta");
  expect(result).toBeTruthy();
});

test('Testing constainsNumbers -- new line', () => {
  const result = myFunctions.containsNumbers("a\na");
  expect(result).toBeTruthy();
});
