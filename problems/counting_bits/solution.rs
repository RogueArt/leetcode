impl Solution {
    pub fn count_bits(n: i32) -> Vec<i32> {
        let mut v = vec![0_i32; (n + 1) as usize];
        for (idx, val) in v.iter_mut().enumerate() {
            *val = idx as i32;
        }
        v.into_iter().map(|num| num.count_ones() as i32).collect()
    }
}