//split string
//convert string to unicode
//move certain number
//convert unicode to string
const caesarCipher = require('./caesar-cipher');

it('works with 1', () => {
    expect(caesarCipher('hello', 1))
    .toBe('ifmmp');
});