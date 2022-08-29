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
    
//========================================================================//
//-----------------------++  STACK  ++--------------------------------//
//========================================================================//

//************* PROBLEM 12 - 20. Valid Parentheses ************** */
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


//************* PROBLEM 13 - 155. Min Stack ************** */
//TIME COMPLEXITY O(1) || SPACE COMPLEXITY O(n)

// var MinStack = function() {
   
//     this.stack =[];
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
 
//************* PROBLEM 14 - 150. Evaluate Reverse Polish Notation ************** */
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
   
}; */

//************* PROBLEM 15 - 704. Binary Search  ************** */
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
//************* PROBLEM 16 - 74. Search a 2D Matrix ************** */
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

//========================================================================//
//-----------------------++ LINKED LIST ++--------------------------------//
//========================================================================//

//************* PROBLEM 17- 206. Reverse Linked List************** */
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

//************* PROBLEM 18 - 21. Merge Two Sorted Lists **************** */

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

//****************** PROBLEM 19 - 141. Linked List Cycle **************** */
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