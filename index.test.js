const add = require('./index')

test('test addition function', () => {
    const result = add(1,3)
    expect(result).toBe(4)
})