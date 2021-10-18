/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = (points, k) => {
    points.sort((a, b) => {
        const distA = getDistanceToOrigin(a)
        const distB = getDistanceToOrigin(b)
        
        return distA - distB
    })
    
    const res = []
    for (let x = 0; x < k; x += 1) {
        res.push(points[x])
    }
    return res
};

function getDistanceToOrigin(point) {
    return Math.sqrt(point[0] ** 2 + point[1] ** 2)
}