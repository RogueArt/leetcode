impl Solution {
    pub fn missing_number(nums: Vec<i32>) -> i32 {
        let len = nums.len() as i32;
        let mut sum = ((len + 1) * len) / 2;

        for num in nums {
            sum -= num;
        }

        sum
    }
}