class Solution {
public:
    int findMin(vector<int>& nums) {
        // Three cases:
        // right < left < mid: search to the right of mid
        // mid < right < left: search to the left of mid
        // left < mid < right: return left
        int l = 0, r = nums.size()-1; 
        int mid = (l+r)/2;
        int min = nums[0];
        while (l < r) {
            if (nums[r] <= nums[l] && nums[l] <= nums[mid]) {
                min = std::min(min, nums[r]);
                l = mid+1;
            } else if (nums[mid] <= nums[r] && nums[r] <= nums[l]) {
                min = std::min(min, nums[mid]);
                r = mid-1;
            } else if (nums[l] <= nums[mid] && nums[mid] <= nums[r]) {
                min = std::min(min, nums[l]);
                break;
            }
            mid = (l+r)/2;
        }
        return min;
    }
};