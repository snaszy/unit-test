const reverseString = require('./reverse-string');

it('reverse string', () => {
    expect(reverseString('abcd')).toBe('dcba');
});