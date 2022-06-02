
//*************1. ANOTHER WAY USING ARRAY METHOD*************** */
/*
// check whether the string is available or not.
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


  for (let i = 1; i<nums.length;i++){
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
//First we have to declare variable left assign value 0.
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
    //since a value of k larger than n eventually leads to a k equivalent to k%n
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

//====================Remove Duplicates from Sorted Array====================================//

//**************************05/31/2022***************************************** */
/* We can use this property of the sorted array containing duplicates to solve this question using the following steps —
Check if the current and the next element are equal.
If they are, we will skip the next element and will continue the procedure as long as we encounter the duplicates.
If the elements are not duplicate, we will place the next (different) element next to the current element.
Time Complexity:-
We are scanning the array once, hence the time complexity will be O(n).
Space Complexity:-
Since we are forbidden to use the external data structure (and we are not using it), the space complexity will be O(1).
 */

/* var removeDuplicates = function(nums) {
    let count = 0;
     // Loop for all the elements in the array
     for (let i = 0; i < nums.length; i++) {
         // If the current element is equal to the next element, we skip
         if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
             continue;
         }
         // We will update the array in place
         nums[count] = nums[i];
         count++;
     }
     return count;


 };
 console.log(removeDuplicates(nums));
  */
//===================================================================================================//
//************136. Single Number*************** */
/*
 const nums = [4, 1, 2, 1, 2];
var singleNumber = function(nums) {
    let map={};
    nums.forEach(nums=>{
        if(nums in map) delete map[nums]
        else map[nums]=1;
    })

    return Object.keys(map)[0];
};
console.log(singleNumber(nums));
*/
//================================================================================//
//*******************350. Intersection of Two Arrays II************************ */
/* var intersect = function(nums1, nums2) {

    let map={}
     let result=[]

    for(let i of nums1){
        if(!map[i]){
            map[i] = 1;
            }else{
                map[i]++;
            }
        }
    for (let j of nums2){
        if(map[j] > 0){
            result.push(j);
            map[j]--;
        }
    }

    return (result);
};
 */
//===================================================================================//
//**************HACKER RANK :- LEFT ROTATTION OF THE ARRAY********************** */
// A left rotation operation on an array of size  shifts each of the array's elements  unit to the left.
// Given an integer, , rotate the array that many steps left and return the result.
/*
 function rotateLeft(d, arr) {
    // Write your code here
    let len =arr.length
    let newArr=[];
    let j=0;
    for(let i =d; i < len; i++){
        newArr[j] = arr[i];
        j++;
    }
    for(let i=0 ; i < d; i++){
        newArr[j] =arr[i];
        j++
    }
    return newArr;
}
 */
//===================Another simplest way to do that =========================================//
//https://646634.medium.com/how-to-solve-hackerranks-left-rotation-problem-88e6ee5d40ea

/* function rotLeft(a, d) {
    while (d) {
       a.push(a.shift());
       d--;
    }
 return a;
 } */
 //====================================================================================

 //**********************Date: 06/01/2022*********************************** */
 //===========================================================================//
 //*****************349. Intersection of Two Arrays************************** */
/*  var intersection = function(nums1, nums2) {
    let firstset =new Set();
     for(let i of nums1){
         firstset.add(i);
     }
     let newSet =new Set();
     for(let j of nums2){
         if(firstset.has(j)){
             newSet.add(j);
         }
     }
     return Array.from(newSet);
 };
  */
 //================================================================================//
 //*************************HACKERRANK- PLUS MINUS PROBLEM********************************* */
 //Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
 // Print the decimal value of each fraction on a new line with  places after the decimal.
 /* 
function plusMinus(arr) {
    // Write your code here
  let len =arr.length;
  
  let pos= 0, neg =0, zero=0;
  for(let i= 0;i< arr.length ; i++){
      if(arr[i] > 0)
      {
          pos++;
          
      }
      else if(arr[i]<0)
      {
          neg++;
          
      }
      else if(arr[i]=== 0)
      {
          zero++
      }
  }
 
   console.log((pos/len).toFixed(6), " ");
   console.log((neg/len).toFixed(6), " ");
   console.log((zero/len).toFixed(6), " ");
} */
//=======================================================================
//****************************HACKERRANK- STAIRCASE**********************************/
//https://www.youtube.com/watch?v=zRrGulKTb4Q
/* 
function staircase(n) {
    // Write your code here
      for(let i=0 ; i<n; i++){
       let string ="";
       
       for (let j=0 ; j<n-i-1; j++){
            string +=" ";
            }
        for(let k=0; k<i+1; k++ ){
            string +="#";
        }
        console.log(string);
      }
  }
 */
//================================================================================//
//*********************HACKERRANK: - BIRTHDAY CAKE CANDLES ***********************/
//==================================================================================//
/* 
function birthdayCakeCandles(candles) {
    // Write your code here
    let max=0;
    let maxCount=0;
    for(let i=0; i<candles.length; i++){
        if(candles[i] > max){
            max = candles[i];
        }
    }
        for(let i=0; i<candles.length; i++){
            if(max === candles[i]){
                maxCount++;
            }
        }
    
    return maxCount;
}
 */