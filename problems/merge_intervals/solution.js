/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    // Sort the intervals by start and end time
    intervals.sort((a, b) => a[0] - b[0])
    
    // Base case: only one interval in array
    if (intervals.length === 1) return intervals
    
    const mergedIntervals = []
    
    // Push the first interval to merged intervals
    mergedIntervals.push(intervals[0])
    
    for (const interval of intervals) {
        const topInterval = mergedIntervals[mergedIntervals.length - 1]
        
        // Only merge interval if end time of top >= start time of next
        if (topInterval[1] >= interval[0]) {
            const start = topInterval[0]
            
            // End time is maximum of both end times
            const end = Math.max(topInterval[1], interval[1])
            const mergedInterval = [start, end]
            
            // Remove the top interval, replace it with merged
            mergedIntervals.pop()
            mergedIntervals.push(mergedInterval)
        }
        
        // Otherwise just add it to list
        else mergedIntervals.push(interval)
    }
    
    return mergedIntervals
};