/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    let left = 1;

    for (let right = 1; right < nums.length; right++) {
        if (nums[right] !== nums[right - 1]) {
            nums[left] = nums[right]
            left++
        } 
    }

    return left
};
// @lc code=end

