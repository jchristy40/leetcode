/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false
    }
    
    let sMap = {}
    let tMap = {}

    for (let char of s) {
        sMap[char] = sMap[char] + 1 || 1
    }

    for (let char of t) {
        tMap[char] = tMap[char] + 1 || 1
    }

    for (let char in sMap) {
        if (sMap[char] !== tMap[char]) {
            return false
        }
    }

    return true

};
// @lc code=end

