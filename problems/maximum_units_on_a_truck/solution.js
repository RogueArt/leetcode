/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = (boxTypes, truckSize) => {
    // Sort by number of units in descending order
    boxTypes.sort((a, b) => b[1] - a[1])
    
    // Go through each box, try to fill up truck
    let total = 0
    for (const box of boxTypes) {
        let [numBoxes, units] = box
        
        // Add to total until number of boxes hits zero
        while (numBoxes > 0 && truckSize > 0) {
            total += units
            numBoxes -= 1
            truckSize -= 1
        }
    
        // If truck size becomes 0, early return
        if (truckSize === 0) return total
    }
    
    return total
};