//import soma from ".";

const index = require("./index");
test('adds 10 + 20 to equal 30', () => {
    const result = index.soma(10,20);
    expect(result).toBe(30);
});