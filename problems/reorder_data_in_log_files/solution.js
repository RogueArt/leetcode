/**
 * @param {string[]} logs
 * @return {string[]}
 */
const reorderLogFiles = (logs) => {
    // Sort by letter logs first, then digit logs
    logs.sort((a, b) => {
        const isDigitA = isDigitLog(a)
        const isDigitB = isDigitLog(b)
        
        // Don't swap if both are digit logs
        if (isDigitA && isDigitB) return 0
        
        // Swap if one of them is not a digit log
        if (isDigitA && !isDigitB) return 1
        if (isDigitB && !isDigitA) return -1
        
        // Ignore if neither is true
        return 0
    })
    
    logs.sort((a, b) => {
        // Don't sort if it's a digit log
        if (isDigitLog(a) || isDigitLog(b)) return 0
        
        // Sort lexicographically by contents otherwise
        const spaceIdxA = a.indexOf(' ')
        const spaceIdxB = b.indexOf(' ')
        const contentsA = a.substr(spaceIdxA + 1)
        const contentsB = b.substr(spaceIdxB + 1)
        
        // A is later into the alphabet than B, so swap
        if (contentsA > contentsB) return 1
        
        // B is later into the alphabet than A, so swap
        if (contentsB > contentsA) return -1
        
        // Contents are same, so sort by identifier
        const identifierA = a.substring(0, spaceIdxA)
        const identifierB = b.substring(0, spaceIdxB)
            
        if (identifierA > identifierB) return 1
        if (identifierB > identifierA) return -1
        
        // Everything is the same
        return 0        
    })
    
    return logs
};

function isDigitLog(log) {
    // Get the index of the first space, which is after identifier
    const spaceIndex = log.indexOf(' ')
    
    // Get the index of the last digit
    let digitIndex = -1
    for (let x = log.length - 1; x >= 0; x -= 1) {
        const ch = log[x]
        
        // Found a digit character, stop searching
        if ('0' <= ch && ch <= '9') {
            digitIndex = x
            break
        }
    }
        
    // Space is after identifier, so if digit is
    // before the space, then part of identifier
    // Otherwise, digit is part of logo
    return digitIndex > spaceIndex
}