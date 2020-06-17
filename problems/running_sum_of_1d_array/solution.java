class Solution {
    public int[] runningSum(int[] nums) {
        int[] r = new int[nums.length];
        r[0] = nums[0];
        for (int n = 1; n < nums.length; n++) {
            r[n] = nums[n] + r[n-1]; 
        }
        return r;
    }
}