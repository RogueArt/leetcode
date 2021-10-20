/**
 * @param {string} currentState
 * @return {string[]}
 */
const generatePossibleNextMoves = (currentState) => {
    const res = []
    const len = currentState.length
    
    // Iterate through each of the characters
    for (let x = 0; x < currentState.length - 1; x += 1) {
        const lCh = currentState[x]
        const rCh = currentState[x + 1]
        
        // Make sure both characters are plus's
        if (lCh === rCh && lCh === '+') {
            const possibleState = currentState.substring(0, x) + '--' + currentState.substr(x + 2)
            res.push(possibleState)
        }
    }
    
    return res
};