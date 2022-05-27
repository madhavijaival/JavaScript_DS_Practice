
//*************1. ANOTHER WAY USING ARRAY METHOD*************** */
/*
// check whether the 2nd  and 1s st string is available or not.
//if available create new array to store the reverse value.
//assign i the last element and then decrease 1 by 1.
//in the last join the stored backeword element together.

const string = 'madhavi'

function reverseString3(str) {

    if (!str && str < 2 && typeof str !== "String") {
        return false;
    }

    const backword = [];
    const Itemlength = str.length - 1;
    for (let i = Itemlength; i >= 0; i--) {

        backword.push(str[i]);
    }

    return backword.join("");

}
const result = reverseString3(string)
console.log(result); */

//=====================================================================//
//*************************************
//Madhavi
//Result - ivadhaM
/*
const string = 'madhavi'

function reverseString(str) {
    // Step 1. Create an empty string that will host the new created string

    // Step 2. Create the FOR loop
    /* The starting point of the loop will be (str.length - 1) which corresponds to the
       last character of the string, "i"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
//    var newStr = "";
// for (let i = str.length - 1; i >= 0; i--) {

//     newStr += str[i];

// }
/* Here hello's length equals 5
    For each iteration: i = str.length - 1 and newString = newString + str[i]
    First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
    Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
    Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
    Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
    Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
End of the FOR Loop*/

// Step 3. Return the reversed string

//     return newStr;
// }

// const result = reverseString(string)
// console.log(result);
//=============================================================================================
///=================DATE:05/26/2022==============================//
//*********************************************************** */
//=========1. MAX SUM SUBARRRAY==============================//
/* const nums = [-2,1,-3,4,-1,2,1,-5,4];
var maxSubArray = function(nums) {

  let currSum =nums[0],
      maxSum =nums[0];


  for (let i =1; i<nums.length;i++){
    currSum =Math.max(currSum + nums[i], nums[i]);
    maxSum=Math.max(currSum, maxSum);
  }
  return maxSum;
};

console.log(maxSubArray(nums)); */
//========================================================//


//========2.  MAX PRODUCT OF SUBARRAY=================//
/* const nums = [5,4,-1,7,8];

var maxProductArray = function(nums) {
  if(nums.length === 0){
    return 0;
  }
let currMax =nums[0],
  currMin =nums[0],
  result=nums[0];

  for(let i=1; i<nums.length; i++){
     let tempMax=currMax;

    currMax= Math.max(nums[i], nums[i] * currMax, nums[i]*currMin);
    currMin=Math.min(nums[i], nums[i] * tempMax, nums[i]*currMin);

    result =Math.max(currMax, result);
  }

return result;

};

console.log(maxProductArray(nums)); */

//=======================================================//


//================3. MOVE ZEROS IN END======================//
/* const nums=[0,1,0,3,12];
var moveZeroes = function(nums) {
    let nonZero =0;
        for ( let i =0; i<nums.length ;i++){
            if(nums[i] !== 0){
               nums[nonZero++] = nums[i];
            }
        }

    for (let i =nonZero; i<nums.length; i++){
         nums[i] = 0;
    }

  return nums;
};

console.log( moveZeroes(nums)); */
//==============================================================================
//================2nd WAY==== ADD ZERO IN THE END============================//
//First we have to declare variable left assign vale 0.
//then iterate a loop and search for not equal to zeros numbers
//if we got the nonzero number then we swap those number
// it continues the process untill we get all zeros in the last of the array.
/* var moveZeroes = function (nums) {
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[left], nums[i]] = [nums[i], nums[left]];
            left++;
        }
    }
    return nums;
}; */
//==============================================================================
//=====================DATE 05/26/2022====================================================//
//*******************217. Contains Duplicate / LEETCODE************************************ */
// first we need to sort the array so we can get the sequence
// Then iterate a loop to scan array
// and if the i and i+1  is equal then it prints true.
//else it return false.
/* Time complexity: O(n \log n)O(nlogn).
Sorting is O(n \log n)O(nlogn) and the sweeping is O(n)O(n).
The entire algorithm is dominated by the sorting step, which is O(n \log n)O(nlogn).
Space complexity: O(1)O(1).
Space depends on the sorting implementation which, usually, costs O(1)O(1) auxiliary space if heapsort is used. */
/*

var containsDuplicate = function(nums) {
    let arr =nums.sort();
 for (let i = 0; i<arr.length; i++){

      if(arr[i] === arr[i+1] ){
          return true;

      }
  }

  return false;
}; */

//========================================================================================
//******************* 189. ROTATING ARRAY ***************************** */
//======THIS CODE IS NOT RUNNING IN VSCODE=========================//
/* let nums = [1, 2, 3, 4, 5, 6, 7], k = 3;

var rotate = function(nums, k) {
    //since a value of kk larger than nn eventually leads to a kk equivalent to k \% nk%n
   k %=nums.length;
    //reverse whole Arrray
    reverse(nums, 0, nums.length-1);
    //reverse the first k number of items
    reverse(nums, 0, k-1);
    //reverse whole rest of items
    reverse(nums, k, nums.length-1);
};
//reverse function for swapping the number
let reverse =function(nums, start, end){
    while(start < end){
        let temp =nums[start];
        nums[start]=nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

console.log(rotate(nums, k)); */

//=================================================================================================