/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
    const getAlphaNumeric = (s) => {
        return s.toLowerCase().split('').filter((char) => {
            return /^[a-z0-9]*$/.test(char)
        }).join('')
    }
    const alphaNumericString = getAlphaNumeric(s)

    let l = 0;
    let r = alphaNumericString.length - 1

    while (l < r) {
        if (alphaNumericString[l] === alphaNumericString[r]) {
            l++
            r--
        } else {
            return false
        }
        
    }
    return true
};
// @lc code=end

