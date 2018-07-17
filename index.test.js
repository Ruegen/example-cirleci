const {add, subtract} = require('./index')

test('addition function', () => {
    const result = add(1,3)
    expect(result).toBe(4)
})

test('subtraction function', () => {
    const result = subtract(3, 1)
    expect(result).toBe(2)
})