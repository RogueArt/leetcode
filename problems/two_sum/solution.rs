use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut h = HashMap::new();
        
        // Traverse through vec, store values into this hashmap
        for (index, num) in nums.iter().enumerate() { 
            h.insert(num, index as i32); 
        }
        
        // Traverse through vec, check if difference already exists
        for (index, num) in nums.iter().enumerate() {
            // Check if difference exists in hashmap
            let diff = target - num;
            let stored_index = h.get(&diff);
            
            match stored_index {
                // Early return if found difference that is not not same element
                Some(i) => { if *i != index as i32 { return vec![index as i32, *i as i32]; }},
                None => {},
            }
            
            // Return value if it's a Some
            // if stored_index.is_some() { return vec![index as i32, *stored_index.unwrap()]; }
        }
        
        // Default to [0, 0]
        return vec![0, 0];
    }
}