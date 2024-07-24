/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    testStr = strs[0]
    if (strs.length === 0) {
        return ""
    }

    strs.forEach((str) => {
        while (str.indexOf(testStr) !== 0) {
            testStr = testStr.slice(0, testStr.length - 1)
        }
    })
    return testStr 
};
// @lc code=end

