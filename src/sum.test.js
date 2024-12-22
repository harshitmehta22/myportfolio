import Sum from "./sum";


test('testing for sum function', () => {
    expect(Sum(10, 10)).toBe(20);
});

test('testing for sum function 2', () => {
    let a = 10;
    let b = 20;
    let output = 30;
    expect(Sum(a, b)).toBe(output);
});
