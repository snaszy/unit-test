const calculator = require('./calculator');

it('adds', () => {
    expect(calculator.add(1, 2)).toBe(3)
})

it('subtracts', () => {
    expect(calculator.sub(1, 2)).toBe(-1)
})

it('multiplies', () => {
    expect(calculator.mul(1, 2)).toBe(2)
})

it('divides', () => {
    expect(calculator.div(1, 2)).toBe(.5)
})

