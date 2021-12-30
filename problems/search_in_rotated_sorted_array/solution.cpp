class Solution {
public:
    int search(vector<int>& nums, int target) {
        int l = 0, r = nums.size()-1;
        int mid = (l+r)/2;
        while (nums[mid] != target && l < r) {
            if (nums[l] == target) return l;
            if (nums[r] == target) return r;
            // discount impossible ranges
            if (nums[l] <= nums[mid] && (nums[l] > target || nums[mid] < target))
                l = mid+1;
            else if (nums[mid] <= nums[r] && (nums[mid] > target || nums[r] < target))
                r = mid-1;
            else if (nums[l] >= nums[mid] && (nums[l] > target && nums[mid] < target))
                l = mid+1;
            else if (nums[mid] >= nums[r] && (nums[mid] > target && nums[r] < target))
                r = mid-1;
            mid = (l+r)/2;
        }
        if (nums[mid] == target) return mid;
        else return -1;
    }
};