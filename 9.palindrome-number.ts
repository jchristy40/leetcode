/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    
    if (x < 0) {
        return false
    }
    
    let numPlaces = Math.floor(Math.log10(x))
    
    
    
    let newNum = 0
    let processNum = x;
    while (processNum > 0) {
        let reverseNum = processNum % 10;
        processNum = Math.floor(processNum / 10)
        newNum = newNum + (reverseNum * Math.pow(10, numPlaces))
        numPlaces = numPlaces - 1;
        

    }

    if (newNum === x) {
        return true
    } else {
        return false
    }
};
// @lc code=end

