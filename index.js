const findRepeatableLetter = (str) => {
    str = str.toLowerCase();

    const letterObj = {};

    for (let char of str) {
        
        if (char.match(/[a-z]/i)) {
         
            letterObj[char] = (letterObj[char] || 0) + 1;
        }
    }

    
    let mostRepeatedLetter;
    let maxFrequency = 0;

    for (let char in letterObj) {
        if (letterObj[char] > maxFrequency) {
            mostRepeatedLetter = char;
            maxFrequency = letterObj[char];
        }
    }

    return mostRepeatedLetter;
}
module.exports = findRepeatableLetter;