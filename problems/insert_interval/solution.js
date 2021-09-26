/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {
    let res = []
    const len = intervals.length
    
    for (let x = 0; x < len; x += 1) {
        // Check if end is smaller than start
        // In that case, insert newInterval + rest, return
        if (newInterval[1] < intervals[x][0]) {
            res.push(newInterval)
            return [...res, ...intervals.slice(x)]
        }
        
        // Start is bigger than some end value
        // So just keep pushing 
        else if (newInterval[0] > intervals[x][1]) {
            res.push(intervals[x])
        }
        
        // Merge the two intervals
        else {
            leftBound = Math.min(newInterval[0], intervals[x][0])
            rightBound = Math.max(newInterval[1], intervals[x][1])
            newInterval = [leftBound, rightBound]
        }
    }
    
    // We know that it didn't early return
    // so weren't able to insert interval
    // Perhaps we merged it with others, 
    // but add it to end now
    res.push(newInterval)
    
    return res
};