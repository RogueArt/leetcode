impl Solution {
    pub fn maximum_wealth(accounts: Vec<Vec<i32>>) -> i32 {
        let mut max = 0;
        for row in accounts {
            let mut running_sum = 0;
            for item in row {
                running_sum += item;
            }
            max = if running_sum > max { running_sum } else { max };
        }
        max
    }
}