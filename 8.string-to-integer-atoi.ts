/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
    let digitMap = {
        "0":'0',
        "1":'1',
        "2":'2',
        "3":'3',
        "4":'4',
        "5":'5',
        "6":'6',
        "7":'7',
        "8":'8',
        "9":'9',
        
    }

    let characterMap = {
        
        "-":"-",
        "+":""
    }

    let characterTest = false;
    let digitTest = false;
    let newString = '';
    for (let i=0; i <= s.length; i++) {
        if (s[i] in characterMap && characterTest === true) {
            break
        }

        if (s[i] in characterMap && characterTest === false) {
            characterTest = true;
            newString+=s[i]
        } 

        if (s[i] in digitMap) {
            digitTest = true
            newString+=digitMap[s[i] as keyof typeof digitMap]
        } 

        if (!(s[i] in digitMap) && !(s[i] in characterMap) && s[i] !== ' ') {
            break
        }

        if (characterTest === true && s[i] === ' ') {
            break
        }

        if (digitTest === true && s[i] === ' ') {
            break
        }
        
        

    }
    if (newString === '' || newString === '-' || newString === '+') {newString='0'} 
    
    let newInt = parseInt(newString);
    if (newInt < ((-2)**31) ) {newInt = ((-2)**31) }
    if (newInt > (2**31-1)) {newInt = 2**31-1}
    return newInt
};
// @lc code=end

