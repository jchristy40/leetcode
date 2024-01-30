/*
 * @lc app=leetcode id=387 lang=typescript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
function firstUniqChar(s: string): number {
    
    let charMap = {};
    let index = 0
    for (let char of s) {
        charMap[char] = [charMap[char]+1 || 1, index]
        index+=1
        

        
    }

    for (let key in charMap) {
        
        if (charMap[key][0] === 1) {
            
            return charMap[key][1]

        }
    }
    return -1
};
// @lc code=end
