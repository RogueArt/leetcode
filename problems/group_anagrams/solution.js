/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
    const map = {}
    for (const str of strs) {
        const frequencyStr = convertToFrequencyStr(str)
        
        // Check if frequency str already exists in map, if so add it to array
        if (frequencyStr in map) map[frequencyStr].push(str)
        
        // If not, create a new array with str in the map
        else map[frequencyStr] = [str]
    }
        
    const res = []
    for (const arr of Object.values(map)) {
        res.push(arr)
    }
    
    return res
};

const A_CHAR_CODE = 'a'.charCodeAt(0)
function convertToFrequencyStr(str) {
    const frequencyArr = new Array(26).fill(0)
    for (const ch of str) {
        frequencyArr[ch.charCodeAt(0) - A_CHAR_CODE] += 1
    }
    return frequencyArr.join(',')
}