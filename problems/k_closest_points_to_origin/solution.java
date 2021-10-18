class Solution {
    public int[][] kClosest(int[][] points, int k) {
        // Min heap of increasing distances
        PriorityQueue<int[]> minHeap = new PriorityQueue<int[]>((a, b) -> compare(distance(a), distance(b)));
    
        // Build min heap from points
        for (int[] p : points) {
            minHeap.add(p);
        }
        
        // Return k closest points to origin
        int[][] results = new int[k][2];
        for (int x = 0; x < k; x += 1) {
            results[x] = minHeap.poll();
        }
        
        return results;
    }
    
    public int compare(double a, double b) {
        if (a > b) return 1;
        else if (a == b) return 0;
        else return -1;
    }
    
    public double distance(int[] point) {
        return Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
    }
}