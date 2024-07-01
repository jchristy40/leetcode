/*
 * @lc app=leetcode id=386 lang=typescript
 *
 * [386] Lexicographical Numbers
 */

// @lc code=start
function lexicalOrder(n: number): number[] {
    let arr = []
    let num = 1;
    
    for (let i=0; i < n; i++) {
        arr.push(num);

        if (num * 10 <= n) {
            num = num * 10;
        } else {
            if (num >= n) {
                num = Math.floor(num / 10);
            };
            num = num + 1

            while (num % 10 === 0) {
                num = num / 10
            }
        }

        

    }
    return arr;
};
// @lc code=end

