/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
function maximumUnits(boxTypes, truckSize) {
    // Sort by highest units first
    boxTypes.sort((a, b) => b[1] - a[1])
        
    // Go through until truck is full
    let boxIndex = 0
    const len = boxTypes.length
    
    let maxUnits = 0
    while (truckSize > 0 && boxIndex < len) {    
        const [numBoxes, numUnits] = boxTypes[boxIndex]
                
        // Decrement truck size by whichever is smaller: number of boxes or truck size
        const totalBoxes = Math.min(numBoxes, truckSize)
        truckSize -= totalBoxes
        maxUnits += totalBoxes * numUnits
        boxIndex += 1
    }
    
    return maxUnits
};