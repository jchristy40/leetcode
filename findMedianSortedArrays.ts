let nums1:number[]=[2,2,2]
let nums2:number[]=[2,2,2,2]

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let pointer1 = 0
    let pointer2 = 0
    let count = 0
    let newArr:number[] = []
    
    let target = nums1.length + nums2.length;
    while (count < target / 2) {
        
        if (nums1[pointer1] === nums2[pointer2]) {
            newArr.push(nums1[pointer1]) 
            pointer1+=1
            count+=1 
        } 

        if ((nums1[pointer1] < nums2[pointer2]) || pointer2 >= nums2.length || nums2.length === 0 ) { 
            newArr.push(nums1[pointer1])
            pointer1+=1
            count += 1
        } 
        if ((nums1[pointer1] > nums2[pointer2]) || pointer1 >= nums1.length || nums1.length===0) {

            newArr.push(nums2[pointer2])
            pointer2+=1
            count+=1
        }
        
    }
    let indexed = pointer1 > pointer2 ? nums2[pointer2] : nums1[pointer1] 
    if (nums1.length === 0) {
        indexed = nums2[pointer2]
    }
    if (nums2.length === 0) {
        indexed = nums1[pointer1]
    }
    if (pointer1 === pointer2) {
        indexed = nums1[pointer1] <= nums2[pointer2] ? nums1[pointer1] : nums2[pointer2]
    }

    console.log(target % 2 === 0 ? (newArr[newArr.length - 1] + indexed) / 2 : newArr[newArr.length - 1]
    )
    return target % 2 === 0 ? (newArr[newArr.length - 1] + indexed) / 2 : newArr[newArr.length - 1]

    
}
findMedianSortedArrays(nums1, nums2)