/**
 * @param {number[][]} intervals
 * @return {number}
 */
function minMeetingRooms(intervals) {
    // No meetings, so it must be zero
    if (intervals.length === 0) return 0
    
    // Split intervals by start and end times
    const startTimes = []
    const endTimes = []
    for (const interval of intervals) {
        startTimes.push(interval[0])
        endTimes.push(interval[1])
    }
    
    // Sort both of these arrays in ascending order
    startTimes.sort((a, b) => a - b)
    endTimes.sort((a, b) => a - b)
    
    // Use a two pointer approach
    let minMeetings = 1
    
    let [startPtr, endPtr] = [0, 0]
    let curMeetings = 0
    
    // NOTE: This always ends early with startPtr ending first
    // But that doesn't matter since we will have reached min coonferences at that point
    while (startPtr < intervals.length && endPtr < intervals.length) {
        // Check if start time is bigger than end time
        // If so, remove one from the meetings
        if (startTimes[startPtr] >= endTimes[endPtr]) {
            curMeetings -= 1
            endPtr += 1
        } 
        
        // Otherwise, increment the start pointer
        else {
            curMeetings += 1
            startPtr += 1
        }
        
        minMeetings = Math.max(curMeetings, minMeetings)
    }
    
    return minMeetings
};