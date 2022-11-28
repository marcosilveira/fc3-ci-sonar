//import soma from ".";

const index = require("./index");
test('adds 1 + 2 to equal 3', () => {
    const result = index.soma(1,2);
    expect(result).toBe(3);
});