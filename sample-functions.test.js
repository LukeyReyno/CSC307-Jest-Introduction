const myFunctions = require('./sample-functions.js');

test('Testing sum -- success', () => {
    const target = 21;
    const result = myFunctions.sum(10, 11);
    expect(target).toBe(result);
});
