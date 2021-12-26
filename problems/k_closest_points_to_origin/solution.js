
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
function kClosest(points, k) {    
    // Initialize a priority queue maximizing distance
    const pointsQueue = new MinPriorityQueue({
        compare: (p1, p2) => {
            const distA = getSquareDistanceBetween(p1)
            const distB = getSquareDistanceBetween(p2)
            
            return distB - distA
        }
    })
    
    // Add points to heap
    for (const point of points) {        
        // If size is smaller than k, just add it
        if (pointsQueue.size() < k) pointsQueue.enqueue(point)
    
        // Otherwise, peek and remove farthest if closer is found
        else if (getSquareDistanceBetween(point) < getSquareDistanceBetween(pointsQueue.front())) {
            pointsQueue.dequeue()
            pointsQueue.enqueue(point)
        }
    }
    
    // Convert heap into array
    const res = []
    for (let x = 0; x < k; x += 1)
        res.push(pointsQueue.dequeue())
    
    return res
};

function getSquareDistanceBetween(pointA, pointB = [0, 0]) {
    const distX = (pointA[0] ** 2) - (pointB[0] ** 2)
    const distY = (pointA[1] ** 2) - (pointB[1] ** 2)

    return distX + distY
}