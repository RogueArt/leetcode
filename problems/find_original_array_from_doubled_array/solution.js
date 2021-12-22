/**
 * @param {number[]} changed
 * @return {number[]}
 */
function findOriginalArray(changed) {
    // If it's an odd length array, not possible
    if (changed.length % 2 === 1) return []
    
    // Build frequency hashmap from numbers
    const frequencyMap = {}
    for (const num of changed) {
        if (num in frequencyMap) frequencyMap[num] += 1
        else frequencyMap[num] = 1
    }
    
    // Sort in ascending order
    changed.sort((a, b) => a - b)    
    
    // Store our result here
    const res = []
    
    
    // Iterate through sorted array
    for (let x = 0; x < changed.length; x += 1) {
        // Get the frequency of the number
        const num = changed[x]
        const freq = frequencyMap[num]
                
        // Compare frequency
        if (freq > 0) {
            // Element is part of original array
            res.push(num)
            
            // Decrement frequency
            frequencyMap[num] -= 1
            
            // Decrement frequency of double value
            const double = 2 * num
            frequencyMap[double] -= 1
        }
    }
    
    if (res.length !== (changed.length / 2)) return []
    else return res
};

// Initialize pointers and our result variaable 
// let [left, right] = [0, 1]
// const res = []

//     // Move right pointer until out of array
//     while (right < changed.length) {
//         // Check if right pointer is double of left
//         if (changed[left] * 2 === changed[right]) {
//             res.push(changed[left])
            
//             // If next to each other, move both by 2
//             if (right === left + 1) {
//                 left += 2
//                 right += 2
//             }
//             // Otherwise, move both by 1
//             else {
//                 left += 1
//                 right += 1
//             }  
//         }
//         // If it's not, keep moving right pointer
//         else {
//             right += 1
//         }
//     }
    
//     console.log(changed)
//     console.log(res)

// Reject if the length is odd

// Sort the numbers
// Check that

// [1*, 2*, 3, 4, 6, 8] -> [1, 2]
// [3*, 4*, 6, 8]
// [3*, 4, 6*, 8] -> [3, 6]
// [4*, 8*] -> [4, 8]

// [1*, 2*, 3 , 4 , 6 , 8 ] -> [1, 2]
// [1 , 2 , 3*, 4*, 6 , 8 ]
// [1 , 2 , 3*, 4 , 6*, 8 ] -> [3, 6]
// [1 , 2 , 3 , 4*, 6 , 8*] -> [4, 8]

// [0*, 1*, 3 , 6 ]
// [0*, 1 , 3*, 6 ]
// [0*, 1 , 3 , 6*]

// [1*, 2*, 3, 7]
// [1, 2, 3*, 7*]