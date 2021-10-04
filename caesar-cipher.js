const caesarCipher = (string, num) => {
    let caesarArray = [];
    for (let i = 0; i < string.length; i++) {
        const unicodeNum = string.charCodeAt(i);
        if (unicodeNum > 96 && unicodeNum < 123) {
            const unicodeLower = unicodeNum; 
            if (unicodeLower + num > 122) {
                caesarArray.push(unicodeLower + num - 25);
            } else {
                caesarArray.push(unicodeLower + num);
            }
        } else if (unicodeNum > 64 && unicodeNum < 91) {
            const unicodeUpper = unicodeNum;
            if (unicodeUpper + num > 91) {
                caesarArray.push(unicodeUpper + num - 25);
            } else {
                caesarArray.push(unicodeUpper + num);
            }
        }
    }
    let finalArray = []
    for (let i = 0; i < caesarArray.length; i++) {
        finalArray.push(String.fromCharCode(caesarArray[i]));
    }
    return finalArray.join("");
}

module.exports = caesarCipher;