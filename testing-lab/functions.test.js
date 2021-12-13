const {
    returnTwo, 
    greeting, 
    add,
    subtract,
    multiply,
    divide
} = require('./functions.js');

describe('returnTwo tests', () => {
    it('returnTwo should return two', () => {
        expect(returnTwo()).toBe(2);
    });
});

describe('greeting tests', () => {
    it('greeting should format a greeting in the proper way for "Freeman" and "Joe Hansen"', () => {
        expect(greeting('Freeman')).toBe('Hello, Freeman');
        expect(greeting('Joe Hansen')).toBe('Hello, Joe Hansen');
    });
});

describe('Math Functions', () => {
    it('adding basic numbers should return the proper addition of two numbers', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(5, 9)).toBe(14);
        expect(add(5, 9, 12)).toBe(14);
        expect(typeof add(1, 2)).toBe('number');
        expect(add('hello', 'world')).toBe('helloworld');
        expect(add(false, undefined)).toBe(NaN);
    });
    it('subtracting basic numbers should return the proper subtraction of two numbers', () => {
        expect(subtract(10, 4)).toBe(6);
        expect(subtract(5, 9)).toBe(-4);
        expect(subtract(5, 9, 12)).toBe(-4);
        expect(typeof subtract(1, 2)).toBe('number');
        expect(subtract('hello', 'world')).toBe(NaN);
        expect(subtract(false, undefined)).toBe(NaN);
    });
    it('multiplying basic numbers should return the proper multiplication of two numbers', () => {
        expect(multiply(2, 2)).toBe(4);
        expect(multiply(10, 10)).toBe(100);
        expect(multiply(10, 10, 12)).toBe(100);
        expect(typeof multiply(1, 2)).toBe('number');
        expect(multiply('hello', 'world')).toBe(NaN);
        expect(multiply(false, undefined)).toBe(NaN);
    });
    it('dividing basic numbers should return the proper division of two numbers', () => {
        expect(divide(8, 2)).toBe(4);
        expect(divide(125, 25)).toBe(5);
        expect(divide(125, 25, 12)).toBe(5);
        expect(typeof divide(1, 2)).toBe('number');
        expect(divide('hello', 'world')).toBe(NaN);
        expect(divide(false, undefined)).toBe(NaN);
    });
});