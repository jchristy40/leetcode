/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    let obj = {}
    for (let i of nums) {
        if (obj[i] === 1) {
            return true
        }
        obj[i] = 1
    }
    return false
};
// @lc code=end

