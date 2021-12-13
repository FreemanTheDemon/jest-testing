const {
    returnTwo, 
    greeting, 
    add
} = require('./functions.js')

it('returnTwo should return two', () => {
    expect(returnTwo()).toBe(2);
})