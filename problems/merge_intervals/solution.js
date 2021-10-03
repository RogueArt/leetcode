/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
    // Sort the intervals by start value
    intervals.sort((a, b) => a[0] - b[0])
    
    // Push the first interval onto stack
    const res = []
    res.push(intervals[0])
    
    // Go through each interval, check if can merge
    for (const interval of intervals) {
        // Check if mergeable with stack top
        const topInterval = res[res.length - 1]
        
        // Current interval mergeable with top
        if (topInterval[1] >= interval[0]) {
            const upper = Math.max(topInterval[1], interval[1])
            
            // Replace top with merged interval
            const mergedInterval = [topInterval[0], upper]
            res.pop()
            res.push(mergedInterval)
        }
        
        // Otherwise push interval to stack
        else res.push(interval)
    }
    
    return res
};