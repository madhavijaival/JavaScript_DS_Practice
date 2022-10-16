//---------------------------ARRAY AND HASHING------------------------------//
//============PROBLEM Class = 12. Integer to Roman==========================//
//Time complexity: O(log n) || Space complexity: O(n)
/* var romanNumberValues = [
    1, 4, 5, 9,
    10, 40, 50, 90,
    100, 400, 500, 900,
    1000
];
var romanNumbers = [
    'I', 'IV', 'V', 'IX',
    'X', 'XL', 'L', 'XC',
    'C', 'CD', 'D', 'CM',
    'M'
];

// Input: integer [1, 3999]
function convertToRoman(num) {
    var res = '';
    for (var i=romanNumbers.length-1; num > 0; ) {
        var val = romanNumberValues[i];
        if (num - val >= 0) {
            num -= val;
            res += romanNumbers[i];
        } else {
            --i;
        }
    }
    return res;
} */

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
 //==========================================================================//
 //**************PROBLEM 2 :- 242. Valid Anagram****************************** */
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
          //Counting the frequency of character incrementing.
      }
      for(let j=0; j<t.length ; j++){
          if(!map[t[j]]) return false;
          map[t[j]]--;
          //decrementing the frequency of the character.
      }
      return true;
  };
 */
//========================================================================//

//**************PROBLEM 3:- 1. Two Sum**********************************/
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
//========================================================================//
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
//=============================================================================//
//******************PROBLEM 5 : 347. Top K Frequent Elements*******************/
//Time Complexity O(n) ||https://www.youtube.com/watch?v=NoGoc5QmLxs

/* var topKFrequent = function(nums, k) {
    let map = {};
    const bucket =[];
    let res =[];
    
    //first add value with the occurence to the map
    for(let num of nums){
        if (!map[num]){
            map[num] =1;
        }else{
            map[num]++;
        }
    }
   
    //create the bucket to store the value eith occurence;
    for(let i = 0; i<=nums.length; i++){
        bucket.push([]);
    }
    
    //Populate the bucket
    
    for(let key in map){
        let count = map[key];
        bucket[count].push(key);
    }
    //to get the result
    for(let i = bucket.length - 1; i>=0; i--){
        if(bucket[i] === 0){
            continue;
        }else{
            res = [...res, ...bucket[i]];
        }    
    }
    
    return res.slice(0, k);
};
 */
//======================================================================//

//******************PROBLEM 6 : 238. Product of Array Except Self *******************/
//Time Complexity O(n) || Space Complexity O(n)

/* var productExceptSelf = function(nums) {
    const res=[];
     let product = 1;    
    //Calculate the prefix
    for(let i = 0; i< nums.length; i++){
        res[i] =product;
        product*= nums[i];
         }
    //Calculate the postfix
   product = 1;
   for(let j = nums.length-1; j>=0; j--){
        res[j] *= product;
        product *= nums[j];
       
    }
 return res;     
}; 
*/
//======================================================================//

//******************PROBLEM 7 :  36. Valid Sudoku *******************/
//Time Complexity O(n^2) || Space Complexity O(n^2)
/* 
var isValidSudoku = function(board) {
   let row ={};
    let col ={};
    let square = {};
    
    for(let r = 0; r<9; r++){
        for(let c =0; c<9; c++){
            const num  = board[r][c];
            
            if(num === "."){
                continue;
            }
            
            //count subgrid
            const grid = `${Math.floor(r/3)} ${Math.floor(c/3)}`;
            
            
            if(!row[r]){
                row[r] = new Set();
            }
            if(!col[c]){
                col[c] = new Set();
            }
            if(!square[grid]){
                square[grid] = new Set();
            }
            
            if(row[r].has(num)||col[c].has(num)||square[grid].has(num)){
                return false;
            }
           
            row[r].add(num);
            col[c].add(num);
            square[grid].add(num);
           
        }
    }
    return true;
};

//======================================================================//

//******************PROBLEM 8 : 271. Encode and Decode Strings*****************/
//Time Complexity O(n) || Space Complexity O(n)
/* var encode = function(strs) {
    
    return strs.map((str)=> `${str.length}#${str}`).join('');
};

var decode = function(s) {
   const res= [];
    let i =0; 
    
    while(i < s.length){
        let  j = i; 
        while( s[j] !== '#'){
            ++j;
        }
        
        const len = Number(s.slice(i, j));
        
        res.push(s.slice(++j, j+len));
        
        i = j+len;
    }
  
    return res;
};
 */
//====================================================================//

//******************PROBLEM 9 : 128. Longest Consecutive Sequence*****************/
//Time Complexity O(n) || Space Complexity O(n)

/* var longestConsecutive = function(nums) {
  
    if(nums ===  null || nums.length ===  null){
        return 0;
    }
    const set = new Set(nums);
    let max = 0; 
    
    for(let num of set){
        if(set.has(num-1)){
            continue;
        }
        
        let currNum = num;
        let currMax =1;
        while(set.has(currNum + 1)){
            currNum++;
            currMax++;
        }
        max = Math.max(currMax, max);
    }
    return max;
};
 */
 

//========================================================================//
//------------------------TWO POINTERS--------------------------------------//
//=======================================================================//

//******************PROBLEM 1- 125. Valid Palindrome******************** */
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

//************ PROBLEM 2- 167. Two Sum II - Input Array Is Sorted **********/
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

//**************** PROBLEM 3 - 15. 3 Sum ********************/

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

//*************PROBLEM 4 - 11. Container With Most Water************* */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(1)
/* ALGORITHM:
- TAKE LEFT AND RIGHT OF THE ARRAY AND ASSIGNED VALUE AS FIRST AND LAST RESP.
- COUNT AREA OF THE WATER FILL WHICH IS WIDTH * HEIGHT (WIDTH IS R - L AND TAKE MINIMUM HEIGHT FROM L AND R ).
- AFTER CALCULATE THE AREA STORE THE AREA COMPARE WITH THE PREVIOUS RESULT AND STORE MAX AREA RESULT.
- TO MOVE THE POINTER CHECK IF THE HEIGHT[L] < HEIGHT[R] THEN MOVE LEFT POINTER BY 1 ELSE MOVE RIGHT POINTER BY -1.
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

//*************PROBLEM 5- 42. Trapping Rain Water - HARD************* */
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

//*************PROBLEM 1 -121. Best Time to Buy and Sell Stock ************** */
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

//*************PROBLEM 2 : 3. Longest Substring Without Repeating Characters************** */
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
//*************PROBLEM 3 : 3. Longest Substring Without Repeating Characters************** */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(n)
/* var characterReplacement = function(s, k) {
    
    let map = {};
    let left = 0;
    let maxFreq =0, result =0;
        
        for(let right =0; right< s.length; right++){
            map[s[right]] = map[s[right]] ? map[s[right]] + 1 : 1;
            
            maxFreq= Math.max(maxFreq, map[s[right]]);
        
        //window = right -left+1
            
        if(((right - left + 1) - maxFreq) > k){
            map[s[left]] -= 1;
            left += 1;
          }
            result = Math.max(result,right - left + 1);
            
        }
        return result;
        
  }; */

//*************PROBLEM 4 : ************** */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(n)





    
//========================================================================//
//-----------------------++  STACK  ++--------------------------------//
//========================================================================//

//************* PROBLEM 1: 20. Valid Parentheses ************** */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(n)

/* var isValid = function(s) {
    let stack =[];
    let charStack ={
        ")" : "(",
        "]" : "[", 
        "}" : "{",
    };
    
    if(!s) return false;
    
    for(let c of s){
        // check if closing bracket
        if(charStack[c]){
            
            const topEle = stack.length === 0 ? "#": stack.pop();
            
            if(topEle !== charStack[c]){
                
                return false;
            }
               // opening bracket case
        }else{
            stack.push(c);
        }
    }
   return stack.length === 0;
}; */


//************* PROBLEM 2: 155. Min Stack ************** */
//TIME COMPLEXITY O(1) || SPACE COMPLEXITY O(n)

// var MinStack = function() {
   
//     this.stack =[];
       // to store minimum value only
//     this.minStack=[];
      
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function(val) {
//    this.stack.push(val);
//     if(!this.minStack.length || val <= this.minStack[this.minStack.length -1]){
//         this.minStack.push(val);
//     }
   
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
    
//     const val  =  this.stack.pop();
//     if(val === this.minStack[this.minStack.length -1]){
//         this.minStack.pop();
//     }
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//     return this.stack[this.stack.length -1];
    
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//    return this.minStack[this.minStack.length -1]; 
// };
 

// /** 
//  * Your MinStack object will be instantiated and called as such:
//  * var obj = new MinStack()
//  * obj.push(val)
//  * obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.getMin()
//  */
 
//************* PROBLEM 3: 150. Evaluate Reverse Polish Notation ************** */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(n)

/* const Operator = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b),
};

var evalRPN = function(tokens) {
  const stack=[];
    
    for(let i of tokens){
        if( i in Operator){
            const lhs = stack.pop();
            const rhs = stack.pop();
            stack.push(Operator[i](rhs,lhs));
        }else{
            stack.push(Number(i));
        }
    }
    return stack.pop();


//************* PROBLEM 4: 739. Daily Temperatures************** */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(n)
/* 
var dailyTemperatures = function(temperatures) {
    //fill the array with 0's
   let warmer = Array(temperatures.length).fill(0);
   // create stack to store temperatur and index
   const stack =[];
   //loop through an array
   for(let i =0; i < temperatures.length; i++){
       //check is stack is non empty and stack of top is less than the temperature
       while( stack.length !== 0 && stack[stack.length - 1][0]< temperatures[i]){
           //if condition true then pop the value from stack and add to the temp and index
           const [temp, idx] = stack.pop();
           //poped index value put to output array i - idx
           warmer[idx] = i - idx;
       }
       //push the value to the stack temperature and it's index value;
       stack.push([temperatures[i], i]);
   }
return warmer;
   
};
 */
//************* PROBLEM 5: 22. Generate Parentheses************** */
                //Using Backtracking
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(n)
/* 
var generateParenthesis = function(n) {
    //Only add open Paranthesis if open < n
        //Only add closing paranthesis if close < open
        //valid IIF open == close == n
        
        const combine=[];
        const current =[];
        
        function generatePar(openP, closeP){
            if(current.length == n*2){
                combine.push(current.join(''));
                return;
            }
            if(openP < n){
                current.push('(');
                generatePar(openP + 1, closeP);
                current.pop();
            }
            if(closeP < openP){
                current.push(')');
                generatePar(openP, closeP + 1);
                current.pop();
            }
        }
        generatePar(0, 0);
        
        return combine;
    };
 */
//***************** PROBLEM 6: 853. Car Fleet**************************** */
//TIME COMPLEXITY O(nlog n) || SPACE COMPLEXITY O(n)
/* 
    var carFleet = function(target, position, speed) {
    
        const combined = position.map((carPos, carSp)=>{
            return [carPos, speed[carSp]] 
        }).sort((a,b)=> a[0] - b[0]);
        
        let stack=[];
        
        for(let i = combined.length-1; i > -1; i--){
             
            stack.push((target - combined[i][0]) / combined[i][1]);
            
            if(stack.length >=2 && stack[stack.length-1] <= stack[stack.length - 2]){
                stack.pop();
            }
        }
        
        return stack.length;
    };  
 */

    
//========================================================================//
//-----------------------++  Binary Search  ++--------------------------------//
//========================================================================//
//************* PROBLEM 1: 704. Binary Search  ************** */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(1)
/* Algorithm
- Initialise left and right pointers : left = 0, right = n - 1.
      While left <= right :
- Compare middle element of the array nums[pivot] to the target value target.
- If the middle element is the target target = nums[pivot] : return pivot.
     - If the target is not yet found :
    -If target < nums[pivot], continue the search on the left right = pivot - 1.
- Else continue the search on the right left = pivot + 1. 
*/

/* var search = function(nums, target) {
    let mid;
    let left = 0;
    let right =nums.length-1;

    while(left <= right){
        mid = Math.floor(left +(right - left )/2);
        
        if(nums[mid] === target ){
            return mid;
        }
        if(target > nums[mid] ){
            left = mid+1;
        }else {
            right = mid-1;
        }     
    }
   
     return -1;
}; */
//************* PROBLEM 2: 74. Search a 2D Matrix ************** */
//TIME COMPLEXITY O(nlogm)|| SPACE COMPLEXITY O(1)

//++++++++++++++ SOLUTION 1 ++++++++++++++++++++++//
/* var searchMatrix = function(matrix, target) {
    
    let i =0, j = matrix[0].length-1; // number of coloumns
      
      while(i < matrix.length && j >=0){
          if(matrix[i][j] === target){
              return true;
          }else if(matrix[i][j] > target){
              j--;
              }else{
                  i++;
              }
          }
      return false;
  };
 */
//+++++++++++++++++++ SOLUTION 2 ++++++++++++++++++++++//
//Time O(log(ROWS * COLS)) | Space O(1)
/* var searchMatrix = function(matrix, target) {
    if(matrix.length == 0) return false;
  
    let n =matrix.length;
    let m =matrix[0].length;
    
    let low =0;
    let high = (n*m) -1;
    
    while(low <= high){
        let mid = Math.floor(low+(high - low) / 2);
         const [ row, col ] = [ (Math.floor(mid / m)), (mid % m) ]
        if(matrix[row][col] ===  target){
            return true;
        }else if(matrix[row][col] < target){
            low = mid +1;
        }else{
            high = mid-1;
        }
    }
    return false;
}; 
*/


//************* PROBLEM 3:33. Search in Rotated Sorted Array ********************** */
//TIME COMPLEXITY O( log n)|| SPACE COMPLEXITY O(1)

/* var search = function(nums, target) {
    let left =0, right =nums.length-1;
    let mid;
    while(left <= right){
        
       mid = Math.floor((right + left)/2);
        
        if(nums[mid] === target)return mid;
        
        if(nums[left] <= nums[mid]){
            if(nums[left] <= target && target <= nums[mid]) right= mid-1;
            else left =mid +1;
        }else {
            if(nums[mid] <=target && target <= nums[right]) left = mid+1;
          else  right= mid-1;
        }
    }
    return -1;
}; */

//************* PROBLEM 4: 153. Find Minimum in Rotated Sorted Array********************* */
//TIME COMPLEXITY O( log n)|| SPACE COMPLEXITY O(1)
/* 
var findMin = function(nums) {
     // initializing left and right pointers.
    let left =0, right = nums.length-1;
    let mid;
    
    // if the last element is greater than the first element then there is no
        // rotation.
        // e.g. 1 < 2 < 3 < 4 < 5 < 7. Already sorted array.
        // Hence the smallest element is first element. A[0]
    if(nums[right] > nums[left]){
        return nums[left];
    }
    
     // Binary search way
    while(left <=  right){
        // Find the mid element
        mid = Math.floor((left+ right)/2);
        
        //if the mid element is greater than its next element then mid+1 element is the
            // smallest
            // This point would be the point of change. From higher to lower value.
        if(nums[mid] > nums[mid+1]){
            return nums[mid+1];
        }
         // if the mid element is lesser than its previous element then mid element is
            // the smallest
        if(nums[mid] < nums[mid-1]){
            return nums[mid];
        }
          // if the mid elements value is greater than the 0th element this means
            // the least value is still somewhere to the right as we are still dealing with
            // elements
            // greater than nums[0]
        if(nums[mid] > nums[0]){
            left = mid+1;
        }else{
            // if nums[0] is greater than the mid value then this means the smallest value
                // is somewhere to
                // the left
            right =mid-1;
        }
    }
    return nums;
    
};*/






//************* PROBLEM 5: 875. Koko Eating Bananas ************** */
//TIME COMPLEXITY O(n log m)|| SPACE COMPLEXITY O(1)
/* 
Algorithm:
- Initialize the two boundaries of the binary search as left = 1left=1, right = max(piles)right=max(piles).
- Get the middle value from leftleft and rightright, that is, middle = (left + right) / 2middle=(left+right)/2, 
  this is Koko's eating speed during this iteration.
- Iterate over the piles and check if Koko can eat all the piles within hh hours given this eating speed of middlemiddle.
- If Koko can finish all the piles within hh hours, set rightright equal to middlemiddle signifying that all speeds 
   greater than middlemiddle are workable but less desirable by Koko. Otherwise, set leftleft equal to middle + 1middle+1 
   signifying that all speeds less than or equal to middlemiddle are not workable.
- Repeat the steps 2, 3, and 4 until the two boundaries overlap, i.e., left = rightleft=right, which means that we have 
  found the minimum speed by which Koko could finish eating all the piles within hh hours. We can return either leftleft or 
  rightright as the answer.
 */
/* 
var minEatingSpeed = function(piles, h) {
    
    let left =1;
    let right = Math.max(...piles);
    
    while(left < right){
        
        const mid = Math.floor((left + right) / 2);
        const hourSpent = countPiles(mid, piles);
        
        if(hourSpent > h){
            left = mid + 1;
        }
        if (hourSpent<=h){
            right = mid;
        }  
    }
    return right;
};

const countPiles = (mid, piles, hours=0 )=> {
    
    for(const pile of piles){
        hours += Math.ceil(pile/mid);
    }
    
    return hours;
}
 */




//========================================================================//
//-----------------------++ LINKED LIST ++--------------------------------//
//========================================================================//

//************* PROBLEM 1: 206. Reverse Linked List************** */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(1)
/* ALGORITHM :
//https://www.geeksforgeeks.org/reverse-a-linked-list/

1. Initialize three pointers prev as NULL, curr as head and next as NULL.
2. Iterate through the linked list. In loop, do following. 
// Before changing next of current, 
// store next node 
next = curr->next
// Now change next of current 
// This is where actual reversing happens 
curr->next = prev 
// Move prev and curr one step forward 
prev = curr 
curr = next
 */

/* var reverseList = function(head) {
    let prev =null;
    let curr = head;
    
    while(curr){
        let next = curr.next;
        curr.next =prev;
        prev = curr;
        curr = next;
    }
    return prev;
}; */

//************* PROBLEM 2:- 21. Merge Two Sorted Lists **************** */

//TIME COMPLEXITY O(m + n) || SPACE COMPLEXITY O(m + n)
//https://duncan-mcardle.medium.com/leetcode-problem-21-merge-two-sorted-lists-javascript-b5a4de3da319
/* 
ALGORITHM:
Method 2 (Iterative):

Approach: This approach is very similar to the above recursive approach.
1. Traverse the list from start to end.
2. If the head node of second list lies in between two nodes of the first list, insert it there and make the next node of second list the head. 
Continue this until there is no node left in both lists, i.e. both the lists are traversed.
3. If the first list has reached end while traversing, point the next node to the head of second list.
 */

/* var mergeTwoLists = function(list1, list2) {
      let newList = new ListNode(0);
        let headOfNew = newList;
        
        while(list1 !== null && list2 !== null){
            if(list1.val < list2.val){
                newList.next =list1;
                list1 =list1.next;
            }else{
                newList.next =list2;
                list2 =list2.next;
            }
            newList =newList.next;
        }
        
        if(list1 ===  null){
            newList.next =list2
        }else{
            newList.next =list1
        }
        return headOfNew.next;
        
    }; */
    
//++++++++++++++++SOLUTION 2 - RECURSIVE++++++++++++++++++++++++//
//TIME COMPLEXITY O(m + n) || SPACE COMPLEXITY O(m + n)

/* 
ALGORITHM:
Method (Recursive):
Approach: The recursive solution can be formed, given the linked lists are sorted.
1. Compare the head of both linked lists.
2. Find the smaller node among the two head nodes. The current element will be the smaller node among two head nodes.
3. The rest elements of both lists will appear after that.
4. Now run a recursive function with parameters, the next node of the smaller element, and the other head.
5. The recursive function will return the next smaller element linked with rest of the sorted element. Now point the next of current element to that, i.e curr_ele->next=recursivefunction()
6. Handle some corner cases. 
  - If both the heads are NULL return null.
  - If one head is null return the other.
 */

 /* var mergeTwoLists = function(list1, list2) {
    if(list1 === null) return list2;
    if(list2 === null) return list1;
    
    if(list1.val < list2.val){
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }else{
         list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};
 */
//==========================================================================

//****************** PROBLEM 3:- 141. Linked List Cycle **************** */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(1)
/*
ALGORITHM :
Approach : Floyd's Cycle Finding Algorithm 
- The space complexity can be reduced to O(1) by considering two pointers at different speed - a slow pointer and a fast pointer. 
The "slow pointer moves one step" at a time while the "fast pointer moves two steps" at a time.
- If there is no cycle in the list, the fast pointer will eventually reach the end and we can return FALSE in this case.
-If the fast runner will eventually meet the slow runner then there is a cycle and it return TRUE
 */

/* var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            return true;
        }
        
    }
    
    return false;
    
}; */

//****************** PROBLEM 4:- 143. Reorder List**************** */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(1)

/* var reorderList = function(head) {
    if(!head) return;
       
   //Frist we need to find the middle pointer using slow fast algo.
       
       let slow = head, fast = head;
       while(fast && fast.next){
           slow = slow.next;
           fast = fast.next.next;
       }
       
   // Now we get the middle pointer so we can reverse the right side nodes of the middle.
       
       let curr = slow;
       let prev = null;
       while(curr){
           let next  = curr.next;
           curr.next = prev;
           prev = curr;
           curr = next;
       }
       
   // Now we got the reverse of the second half so we can merge both together fist half and second half.
       
       let first = head, second  = prev; // prev is the second half head
       
       while(second.next){
           temp = first.next;
           first.next = second;
           first = temp;
           
           temp = second.next;
           second.next = first;
           second = temp;
       }
       
   }; 
   */
  


//========================================================================//
//-----------------------++ TREES ++--------------------------------//
//========================================================================//
//****************** PROBLEM 1: 226. Invert Binary Tree*************************** */
/*
Algorithm:
The inverse of an empty tree is the empty tree. The inverse of a tree with root rr, and subtrees right and left, 
is a tree with root rr, whose right subtree is the inverse of left, and whose left subtree is the inverse of right.
 */

//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(n)
     /* var invertTree = function(root) {
        if(!root) return root;
        
        let temp =root.left;
        root.left = root.right;
        root.right =temp;
        
        invertTree(root.left);
        invertTree(root.right);
        
        return root;
        
    } */



//****************** PROBLEM 2: 104. Maximum Depth of Binary Tree *************************** */
/*
Depth of Tree: Intuition By definition, the maximum depth of a binary tree is the maximum number of 
steps to reach a leaf node from the root node. 

 */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(n)
/* var maxDepth = function(root) {
    
    // //Using DFS Recursive algo
    // if(!root) return root;
    // return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    
    
    //DFS without Recursive using preorder DFS
    let maxDepth =0;
    
    let DFS =(node, depth)=>{
        if(!node) return maxDepth;
        if(maxDepth < depth) maxDepth = depth;
        DFS(node.left, depth+1);
        DFS(node.right, depth+1);
    }
    DFS(root, 1);
    
    return maxDepth;  
    
};
 */

//****************** PROBLEM 3: 543. Diameter of Binary Tree*************************** */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(n)

/* var diameterOfBinaryTree = function(root) {
    let dia = 0;
    
    function DFS(root){
        if(!root) return -1;
        
        let left = DFS(root.left);
        let right = DFS(root.right);
        
        dia =Math.max(dia, 2 + left + right);
        
        return 1 + Math.max(left, right);
    }
    DFS(root);
    
    return dia;
}; */

//****************** PROBLEM 4: 102. Binary Tree Level Order Traversal*************************** */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(n)
//BFS travaersal

/* var levelOrder = function(root) {
    
    if(!root) return [];
    
    let result = [];
    let queue  = [root];
    
   while(queue.length){
       const len = queue.length;
       const curr_val =[];
       
       for(let i=0; i< len; i++){
           let node = queue.shift();
           curr_val.push(node.val);
           
           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
       }
       result.push(curr_val);
   }
    return result;
    
};

 */

//****************** PROBLEM 5: 110. Balanced Binary Tree *************************** */
/*
For this problem, a height-balanced binary tree is defined as:
a binary tree in which the left and right subtrees of every node differ in height by no more than 1. 
 */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(n)
/* var isBalanced = function(root) {
    // create variable assign it as a true 
       let balanced = true; 
      
      function DFS(root, depth = 1) {
          //If answer === false, we have already discovered tree is imbalanced.
      //Return to exit recursion asap.
          
           if(!balanced) return 0;
          
          //If !node, we know the one above in recursion level is valid, but current is not.
      //We return depth - 1.
          
           if (!root) return depth - 1;
          
      //We get max depth of left and right at all levels of recursion.  If imbalanced on
      //any level, I.e. - abs(left - right) > 1, we set answer to false.  Answer is later returned.
          const left = DFS(root.left, depth + 1 );
          const right = DFS(root.right, depth + 1 );
          
          if(Math.abs(left - right) > 1){
              balanced = false;
          }
          return Math.max(left, right); 
      }
      DFS(root);
      
      return balanced;
  }; 
  */

//****************** PROBLEM 6: 100. Same Tree*************************** */
/*
Approach 1: Recursion
Intuition
The simplest strategy here is to use recursion. 
Check if p and q nodes are not None, and their values are equal. 
If all checks are OK, do the same for the child nodes recursively. 
 */

//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(n)
/* 
var isSameTree = function(p, q) { 
    
    if(p === null && q === null){
        return true;
    }
    if(p === null || q === null){
        return false;
    }
    if(p.val !== q.val){
        return false;
    } 
    return  isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    
}; 
*/

//****************** PROBLEM 7: 572. Subtree of Another Tree *************************** */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(n)
/* var isSubtree = function(root, subRoot) {
    
    if(!root) return false;
    if (!subRoot) return false;
    
    // check for subtree
    
    if(isSame(root, subRoot)) return true;
    
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    
    
    // use same tree function over here
    
    function isSame(t, s){
        
        if(t === null && s === null){
            return true;
        }
        if(t === null || s === null){
            return false
        }
        return (s.val === t.val) 
        && isSame(t.left, s.left) 
        && isSame(t.right, s.right);        
    }
}; 
*/


//****************** PROBLEM 8: 235. Lowest Common Ancestor of a Binary Search Tree *************************** */
/* 
Algorithm:
- Start traversing the tree from the root node.
- If both the nodes p and q are in the right subtree, then continue the search with right subtree starting step 1.
- If both the nodes p and q are in the left subtree, then continue the search with left subtree starting step 1.
- If both step 2 and step 3 are not true, this means we have found the node which is common to node p's and q's subtrees.
 and hence we return this common node as the LCA.
 */
//++++++++++++ SOLUTION 1 : Approach 1: Iterative Approach+++++++++++++++++++++//
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(1)
/* 
var lowestCommonAncestor = function(root, p, q) {
    
    while(root !== null){
        if(p.val > root.val && q.val > root.val){
            root =root.right;
            continue;
        }
         if(p.val < root.val && q.val < root.val){
            root =root.left;
            continue;
        }
        break;    
    }
    
    return root;
    
};*/

//++++++++++++ SOLUTION 2: Approach 2: Recursive Approach +++++++++++++++++++++//

//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(H)
/* if(p.val > root.val && q.val > root.val){
        return lowestCommonAncestor(root.right, p, q);
    }else if(p.val < root.val && q.val < root.val){
        return lowestCommonAncestor(root.left, p, q);
    }else{
        return root;
    }
 */

//****************** PROBLEM 9:102. Binary Tree Level Order Traversal *************************** */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(n)

/* var levelOrder = function(root) {
    if (!root) return [];
    const res = [];
    const queue = [root];
    
while(queue.length){
        const len = queue.length;
        const level = [];
  for(let i =0; i< len ; i++){
        let node = queue.shift();
        level.push(node.val);
        
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);    
    }
       res.push(level);
    }
    return res;
}; */

//****************** PROBLEM 10: 199. Binary Tree Right Side View *************************** */
/* 
Algorithm:
1. Initiate the arr of the right side view result.
2. Initiate the queue by adding a root.
3. While the queue is not empty:
  - Write down the length of the current level: levelLength = queue.size().
  - Iterate over i from 0 to < len (que.len):
     - pop the current node from the queue: node = queue.shift().
     - If i == len - 1, then it's the last node in the current level, push it to rightsize list.
     - Add first left and then right child node into the queue.
- Return result.
 */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(D) Space complexity: O(D) to keep the queues, where D is a tree diameter.
// Let's use the last level to estimate the queue size.This level could contain up to N/2 tree nodes in the case of complete binary tree.

/* var rightSideView = function(root) {
    
    if(!root) return [];
    const result =[];
    const queue =[root];
    
while(queue.length){
        const len = queue.length;
        let level =0
    for(let i =0; i<len ; i++){
        let node = queue.shift();
        level = node;
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
        result.push(level.val);
    }
    return result;
    
}; */


//****************** PROBLEM 11: 1448. Count Good Nodes in Binary Tree *************************** */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(n)

/* var goodNodes = function(root) {
    let count = 0;
       
       let DFS = (node, maxVal)=>{
           if(!node) return;  
           if(maxVal <= node.val)
               count++;
           maxVal =Math.max(maxVal, node.val);
           DFS(node.left, maxVal);
           DFS(node.right, maxVal);       
       }
       
       DFS(root, root.val);
       return count;
   }; 
   */

//****************** PROBLEM 12: 98. Validate Binary Search Tree*************************** */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(n)

/* 
var isValidBST = function(root) {
    
    if(!root) return true; // Sanity check for passing test case '[]'
     
  function DFS(node, left, right){
      if(!node) return true; // We hit the end of the path
      
      // current node's val doesn't satisfy the BST rules
      if((left !== null && left >= node.val)||(right !== null && right <= node.val)){
          return false;
      }
       // Continue to scan left and right
      return DFS(node.left, left, node.val) && DFS(node.right, node.val, right);
  }
    
    return DFS(root, null, null);
    
}; */


//****************** PROBLEM 12: 230. Kth Smallest Element in a BST *************************** */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(n)
//Inorder Traversal//
/* var kthSmallest = function(root, k) {
    let arr =[];
    
    function inOrder(root){
        if(!root) return;
        
        inOrder(root.left);
        arr.push(root.val);
        inOrder(root.right);
    }
    inOrder(root);
    
    return arr[k-1];
    
}; */

//========================================================================//
//-----------------------++ HEAP ++--------------------------------//
//========================================================================//
//****************** PROBLEM 1: 1046. Last Stone Weight *************************** */
//TIME COMPLEXITY O(n log n) || SPACE COMPLEXITY O(n)
/* 
var lastStoneWeight = function(stones) {
    if(stones.length < 2) return stones;
    //Sort the stone array
    stones.sort((a,b)=> a - b);
    //get last two element by poping
    let first  = stones.pop();
    let second = stones.pop();
    // as it will be in sorted order then  get difference of them 
    stones.push(Math.abs(first - second));
    // call recursively
    return lastStoneWeight(stones);
};
 */
//****************** PROBLEM 2:  *************************** */
//TIME COMPLEXITY O(n log n) || SPACE COMPLEXITY O(n)

















//========================================================================//
//-----------------------++ BIT MANIPULATION ++--------------------------------//
//========================================================================//

//****************** PROBLEM 1: 136. Single Number *************************** */
/* Concept:
If we take XOR of zero and some bit, it will return that bit
   - a ⊕ 0 = a
If we take XOR of two same bits, it will return 0
   - a ⊕ a = 0 
   */
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(1)

/* var singleNumber = function(nums) {
    
    let x = 0;
    
    for(let num of nums ){
        
        x ^= num;
    }
    
    return x ;
}; */


//****************** PROBLEM 2: 191. Number of 1 Bits *************************** */
//TIME COMPLEXITY O(1) || SPACE COMPLEXITY O(1)

/* var hammingWeight = function(n) {
    
    let res =0;
    
    while(n){
        
        n &= (n-1);
        res +=1;
    }
    return res;
}; */


//========================================================================//
//-----------------------++  GRAPH  ++--------------------------------//
//========================================================================//
//************* PROBLEM 1: 463. Island Perimeter ************** */
//https://leetcode.com/problems/island-perimeter/discuss/1485601/JavaScript-Whiteboard
//TIME COMPLEXITY O(m * n) || SPACE COMPLEXITY O(1)
/* 
var islandPerimeter = function(grid) {
  
    let height = grid.length;
    let width = grid[0].length;
    
    let count = 0;
    
    for(let row =0; row< height; row++){
        for(let col =0; col<width; col++){
            if(grid[row][col] === 1){
                
                count+=4;
                
             //if the above square is "1" then subtract it.
            if(row >0 && grid[row-1][col] === 1 ) count--;
                //if the below square is "1" then subtract it.
            if(row < height-1 && grid[row+1][col] ===1)count--;
                //if the left square is "1" then subtract it.
            if(grid[row][col-1] === 1)count--;
                //if the right square is "1" then subtract it.
            if(grid[row][col+1] === 1)count--;
        }
       }
    }
    return count;
}; */

//****************** PROBLEM 2: 200. Number of Islands**************** */
//Notes:https://www.youtube.com/watch?v=__98uL6wst8
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(1)& wors case O(mn * memory for each call)
/* 
var numIslands = function(grid) {
    if(!grid) return ;
    let height =grid.length;
    let width =grid[0].length;
    let  isIsland =0;
    
    for(let r =0; r< height; r++){
        for(let c =0; c< width; c++){
            if(grid[r][c] === "1"){
                
                isMarkIsland(grid, r, c, height, width);
                isIsland +=1;
            }
        }
    }
    return isIsland;
    
};

function isMarkIsland(arr, x, y, row, col){
    
    if(x < 0|| x>= row || y < 0 || y >= col || arr[x][y] !== "1"){
        return;
    }
    arr[x][y] ="2";
    isMarkIsland(arr, x+1, y, row, col);
    isMarkIsland(arr, x-1, y, row, col);
    isMarkIsland(arr, x, y-1, row, col);
    isMarkIsland(arr, x, y+1, row, col);
    
}
 */
//****************** PROBLEM  3 :  133. Clone Graph**************** */
//TIME COMPLEXITY O(n + m) || SPACE COMPLEXITY O(n)
//DFS solution 
/* var cloneGraph = function(node) {
    return dfsNewNode(node);
    
};

function dfsNewNode(root, map = new Map()){
    if(!root) return root;
    
    if(map.has(root)) return map.get(root);
    const newRoot = new Node(root.val);
    map.set(root, newRoot);
    for(let n of root.neighbors){
        newRoot.neighbors.push(dfsNewNode(n , map));
    }
    return newRoot;
} */

//****************** PROBLEM  4: ********************** */
//TIME COMPLEXITY O(n + m) || SPACE COMPLEXITY O(n)