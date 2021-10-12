/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
const canAttendMeetings = (intervals) => {
    // Sort meetings in ascending order of start time
    intervals.sort((a, b) => a[0] - b[0])
    
    // If any meetings overlap, return false
    for (let x = 0; x < intervals.length - 1; x += 1) {
        if (doMeetingsOverlap(intervals[x], intervals[x+1])) return false
    }
    
    // No meetings overlap
    return true
};

function doMeetingsOverlap(interval1, interval2) {
    return interval1[1] > interval2[0]
}