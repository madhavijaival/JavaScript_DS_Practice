//---------------------------ARRAY AND HASHING------------------------------//

//============PROBLEM 1.= 217. Contains Duplicate==========================//
//Time complexity: O(n (log n)) || Space complexity: O(1)

/*      //nums.sort((a,b) => a-b);
     for(let i=0; i<=nums.length-1; i++){
         for (let j=i+1; j<nums.length; j++){
         if(nums[i] === nums[j])
             return true;
     }
 }
     return false; */

//+++++++++++++++++++ SOLUTION 2++++++++++++++++++++++++++// 

//Time complexity: O(n) || Space complexity: O(n)

/* var containsDuplicate = function(nums) {
    let set =new Set();
     for(let i =0; i<nums.length ; i++){
         if(set.has(nums[i])) return true;
         set.add(nums[i]);    
     }
     return false;
 
 }; */
 //==================================================//

 //**************PROBLEM 2. **242. Valid Anagram****************************** */
 //Time complexity = O(n log(n)) || Space complexity = O(1)
 /* 
 var isAnagram = function(s, t) {
    //If the strings are anagrams they must have same characters but in different order but we can  // sort the element after splitting and can get same array element then comapre.  
       const arr1 =s.split("").sort().join("");
       const arr2 =t.split("").sort().join("");
       if(arr1 === arr2)
       return true;
       else 
        return false;
       
   }; 
   */

//+++++++++++++++++++ SOLUTION 2 +++++++++++++++++++++++++//
//Time complexity: O(n) || Space complexity: O(1)

 /* var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
      let map={};
      for(let i=0; i<s.length; i++){
          if(!map[s[i]]) map[s[i]] = 0;
          map[s[i]]++;
      }
      for(let j=0; j<t.length ; j++){
          if(!map[t[j]]) return false;
          map[t[j]]--;
      }
      return true;
  };
 */
//==================================================

//***********PROBLEM 3. ***1. Two Sum***************** */
//Time complexity: O(n^2) || Space complexity: O(1)
//BRUTE FORCE APPROCH

/* var twoSum = function(nums, target) {
    
    for(let i =0; i<nums.length; i++){
        for(let j =i+1 ; j<nums.length; j++){
            let sum = nums[i] + nums[j];
            if(sum === target){
                return [i, j];
            }
        }
    }
        return null;
} */
//+++++++++++++++++ SOLUTION 2 ++++++++++++++++++++//
//Time complexity: O(n) || Space complexity: O(n)
//HASH MAP
/* 
var twoSum = function(nums, target) {
    // created the Hash map
    let obj =new Map();
    
     for(let i=0; i<nums.length; i++){
         let comp = target - nums[i];
         if(obj.has(comp) ){
             return [obj.get(comp), i];
         }
         obj.set(nums[i],i);
     }
    return null;
     
};
*/
//============================================================//

//******************PROBLEM 4 - 49. Group Anagrams medium**************************** */
//Time Complexity O(m*n)
//https://www.youtube.com/watch?v=kQL41OMf51Y
/* 
var groupAnagrams = function(strs) {    
let result = {};

    const prime =[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
    
    for(let str of strs){
        
    let key = str.split('').reduce((total, char)=>total*prime[char.charCodeAt()-97],1);
        
    (!result[key]) ? result[key] = [str] : result[key].push(str);
        
    }
    return Object.values(result);
};
*/
//========================================================================//
//---------------------TWO POINTERS--------------------------------------//
//=======================================================================//

//******************PROBLEM 5 - 125. Valid Palindrome******************** */
//https://rishabh1403.com/posts/coding/leetcode/2020/03/leetcode-valid-palindrome

//++++++++++++++++++++ SOLUTION 1 +++++++++++++++++++++++++//
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(1)

/* var isPalindrome = function(s) {
if(s.length ===0) return true;
    
let left =0, right =s.length-1;

s = s.toLowerCase();

while(left < right){
    
    if((s[left] < 'a' || s[left] >'z') && (s[left] < '0' || s[left] > '9')){
        left++;
        continue;
    }
     if((s[right] < 'a' || s[right] >'z') && (s[right] < '0' || s[right] > '9')){
        right--;
        continue;
    }
    if(s[left] !== s[right]){
        return false;
    }
    left++;
    right--;
}

return true;

};
*/

//+++++++++++++++ SOLUTION 2 +++++++++++++++++++++++++++++++++//
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(n)

/* var isPalindrome = function(s) {
      let arr = s.split('');
        let result =[];
      const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";
        
        for(let char of s){
            if(alphabet.includes(char.toLowerCase())){
                result.push(char.toLowerCase());
            }
        }
        return (result.join("") === result.reverse().join(""));
}; */

//=====================================================================//

//************ PROBLEM 6 - 167. Two Sum II - Input Array Is Sorted **********/
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(1)
/*
 var twoSum = function(numbers, target) {
    let l = 0, r= numbers.length-1;
    //let ans =[];
    while(l < r){
        let sum = numbers[l] + numbers[r];
        if(sum === target){
          return [l+1 , r+1];
        }else if(sum < target ){
            l++;
        }else if(sum >target){
            r--;
        }
    }
    return [-1,-1];
     
}; 
*/
//=====================================================================//

//**************** PROBLEM 7 - 15. 3 Sum ********************/

//TIME COMPLEXITY O(n^2) || SPACE COMPLEXITY O(1)
/* 
var threeSum = function(nums) {
    
    nums.sort((a,b) => a-b);
     
    const result =[];
     
    if(nums.length < 3) return result;
     
     for(let i =0; i<nums.length; i++){
         
     let left = i+1;
     let right =nums.length-1;
         
         if(i >0 && nums[i] === nums[i-1]) continue;
         
           while(left < right){
             let sum = nums[i] +nums[left] +nums[right];
               
             if(sum === 0){
                 result.push([nums[i], nums[left], nums[right]]);
                 left++;
                 
                 while(nums[left] === nums[left-1] && left < right) left++;
                 
             }else if(sum > 0){
                 right--;
             }else
                 left++;
         }
         
     }
     return result;
     
     
 }; 
 */
//===================================================================//

//*************PROBLEM 8 - 11. Container With Most Water************* */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(1)
/* ALGORITHM:
- TAKE LEFT AND RIGHT OF THE ARRAY AND ASSIGNED VALUE AS FIRST AND LAST RESP.
- COUNT AREA OF THE WATER FILL WHICH IS WIDTH * HEIGHT (WIDTH IS R - L AND TAKE MINIMUM HEIGHT FROM L AND R ).
- AFTER CALCULATE THE AREA STORE THE AREA COMPARE WITH THE PREVIOUS RESULT AND STORE MAX AREA RESULT.
- TO MOVE THE POITER CHECK IF THE HEIGHT[L] < HEIGHT[R] THEN MOVE LEFT POINTER BY 1 ELSE MOVE RIGHT POINTER BY -1.
- IN THE LAST RETURN THE RESULT.
 */

/* var maxArea = function(height) {
        let result = 0;
        let l = 0, r = height.length-1;
        
        while(l < r){
          let area = ( r - l) * (Math.min(height[l], height[r]));
          result = Math.max(result, area);
        if(height[l] < height[r]){
            l++;
        }else{
            r--;
        }
        }
        return result;
    };
 */
//BRUTE FORSE SOLUTION ||TIME COMPLEXITY O(n^2)
  /*       let result = 0;
       
        for(let l=0; l < height.length-1; l++){
            for(let r= 0; r<height.length; r++){
                let area = (r - l) * (Math.min(height[l], height[r]));
                result = Math.max(result, area);
            }
        }
        return result; */

//*************PROBLEM 9 - 42. Trapping Rain Water - HARD************* */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(1)

/* 
var trap = function(height) {
    if (!height) return 0;
    let trapWater = 0, l = 0, r = height.length-1;
    let maxLeft = height[l];
    let maxRight = height[r];
    
    while( l < r){
        
        if(height[l]  <= height[r]){
            l++;
            maxLeft = Math.max(maxLeft, height[l]);
            trapWater += maxLeft - height[l]
            
        }else{
            
            r--;
            maxRight = Math.max(maxRight, height[r]);
            trapWater += maxRight - height[r]
        }
    }
return trapWater;
    
};
 */
//========================================================================//
//------------------------SLIDING WINDOW----------------------------------//
//========================================================================//

//*************PROBLEM 10 -121. Best Time to Buy and Sell Stock ************** */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(1)
/* 
var maxProfit = function(prices) {
    
    let maxProfit = 0;
    let buy = 0, sell = 1; // assinged 2 pointers for left and right value
    
    while(sell < prices.length){  
        
        if(prices[buy] < prices[sell] ){
            
            Profit = prices[sell] - prices[buy];
        
              maxProfit = Math.max(Profit, maxProfit);
        }
        else{
            buy = sell;  
           }
        sell++;  
        }
    return maxProfit;
}; 
*/

//*************PROBLEM 11 - 3. Longest Substring Without Repeating Characters************** */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(n)

/* var lengthOfLongestSubstring = function(s) {
    let charSet = new Set();
        let left = 0; longStr =0;
        
        for(let right =0; right<s.length; right++){
            while(charSet.has(s[right])){
                charSet.delete(s[left]);
                left++;
                }
            charSet.add(s[right]);
            longStr = Math.max(longStr, right - left + 1);
            
        }
        return longStr;
    };
     */

//*************PROBLEM 12 - ************** */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(n)