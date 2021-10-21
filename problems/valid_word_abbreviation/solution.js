/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    let [wordPtr, abbrPtr] = [0, 0]
    const [wordLen, abbrLen] = [word.length, abbr.length] // 5, 3
    
    // Iterate through lengths of both
    while (wordPtr < wordLen && abbrPtr < abbrLen) {
        const wordCh = word[wordPtr]
        const abbrCh = abbr[abbrPtr]
        
        // Check if character in abbr is digit
        if (isDigit(abbrCh)) {
            // If the abbreviation has leading 0, invalid abrbev
            if (abbrCh === '0') return false
            
            // Parse the entire integer
            let val = 0;
            while (isDigit(abbr[abbrPtr])) {
                // Base ten so multiply value by 10 before adding
                val = val * 10 + parseInt(abbr[abbrPtr])
                
                // Move abbreviation pointer to the right
                abbrPtr += 1
            }
            
            // Move word pointer by parsed length
            wordPtr += val
        }
        
        // Otherwise check if characters are equal
        else {
            if (abbr[abbrPtr] !== word[wordPtr]) return false
            
            // Scan rest of string
            abbrPtr += 1
            wordPtr += 1
        }
    }
    
    // Abbreviations are same
    return wordPtr === wordLen && abbrPtr === abbrLen
};  

function isDigit(ch) {
    return '0' <= ch && ch <= '9'
}

function isAlpha(ch) {
    return 'a' <= ch && ch <= 'z'
}