// const array1 = [0, 4, 5, 7, 20];
// const array2 = [3, 5, 6, 18, 28];

/* function mergeArray(arr1, arr2) {

    const mergedArr = [];
    let newArr1 = arr1[0];
    let newArr2 = arr2[0];
    let i = 1;
    let j = 1;

    if (arr1 === 0) {
        return arr2;

    }
    if (arr2 === 0) {
        return arr1;

    }

    while (newArr1 || newArr2) {
        if (!newArr2 || newArr1 < newArr2) {
            mergedArr.push(newArr1);
            newArr1 = arr1[i];
            i++;
        } else {
            mergedArr.push(newArr2);
            newArr2 = arr2[j];
            j++;
        }
    }
    return mergedArr;
}

console.log(mergeArray(array1, array2));
 */
//*****************************************************************
//================LEETCODE QUESTION==================================//
/*
nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3

var merge = function (nums1, m, nums2, n) {

    const mergedArray = [];
    let arr1 = m-1;
    let arr2 = n-1;
    let i = 1;
    let j = 1;


    while (arr1 || arr2) {
        if (!arr2 || arr1 < arr2 && arr1 !== 0 && arr2 !== 0) {
            mergedArray.push(arr1);
            arr1 = nums1[i];
            i++
        } else {
            mergedArray.push(arr2);
            arr2 = nums2[j];
            j++;
        }
    }
    return mergedArray;
};
console.log(merge(nums1, m, nums2, n));
 */
//===============================================================
//**********LEETCODE ACCEPTED MERGE SORT************************ */
//==============================================================

/* var merge = function (nums1, m, nums2, n) {
    let num1len=m-1,num2len=n-1;

      let arr1Item =m+n-1;

      for(i=arr1Item;i>=0;i--)
          {
             if(num2len<0){
                 break;
             }
              if(nums1[num1len]>nums2[num2len]){
                  nums1[i]=nums1[num1len];
                  num1len--;
              }else{
                  nums1[i]=nums2[num2len];
                  num2len--;
              }
          }
      return nums1;

  };
   */

//========================================================================
/* nums = [2, 7, 11, 15], target = 9

var twoSum = function (nums, target) {
    const newArr = nums.sort();
    console.log(newArr);
    let r = newArr.length - 1;
    console.log(r);
    let l = 0;
    console.log(l);
    while (newArr[l] > newArr[r]) {
        let currentSum = newArr[l] + newArr[r];
        if (currentSum === target) {
            // return [l, r];
            return true;

        } else if (currentSum > target) {
            r += 1;

        } else if (currentSum < target) {
            l -= 1;
        }
    }
    return false;

};

console.log(twoSum(nums, target)); */