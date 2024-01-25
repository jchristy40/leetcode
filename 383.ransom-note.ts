/*
 * @lc app=leetcode id=383 lang=typescript
 *
 * [383] Ransom Note
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
    let noteMap = {};
    let magazineMap = {};


    
    Array.from(magazine).forEach((letter) => 
    magazineMap[letter] = (magazineMap[letter] + 1) || 1
    )

    let valid = true
    let count = 0
    Array.from(ransomNote).forEach((letter) => 
    typeof magazineMap[letter] === 'undefined' || magazineMap[letter] === 0 ? valid = false : magazineMap[letter] -= 1
    
    
    
    )
    return valid;

};
// @lc code=end

