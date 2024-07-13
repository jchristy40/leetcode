/*
 * @lc app=leetcode id=278 lang=typescript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let low = 1
        let high = n

        while (low <= high) {
            let mid = Math.floor((low + high) / 2)

            let bad = isBadVersion(mid)

            if (bad) {
                high = mid - 1
            } else {
                low = mid + 1
            }


        }

        return low
    };
};
// @lc code=end

