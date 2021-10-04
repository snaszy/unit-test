const capitilize = require('./capitilize')

it('Capitilize first letter in lower case word', () => {
    expect(capitilize('abcd')).toBe('Abcd')
});

it('Capitilize first letter in upper case word', () => {
    expect(capitilize('ABCD')).toBe('Abcd')
});

it('Capitilize first letter in mixed case word', () => {
    expect(capitilize('aBcD')).toBe('Abcd')
});


