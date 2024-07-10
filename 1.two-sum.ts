/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    
    let hashMap = new Map()

        for (let i=0; i <nums.length; i++) {
            let num = nums[i]
            let targetNum = target - num
            const targetIndex = hashMap.get(targetNum)
            const hasTarget = hashMap.has(targetNum)
            if (hasTarget) {
                return [i, targetIndex]
            }
            hashMap.set(num, i)
            
        }
        return [-1,-1]
};
// @lc code=end

