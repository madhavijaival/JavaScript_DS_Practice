//---------------------------ARRAY AND HASHING------------------------------//
//============PROBLEM 1: 118. Pascal's Triangle==========================//
//Time complexity: O(numRows^2) || Space complexity: O(1)
/* var generate = function(numRows) {
    let arr = [];
    
    for(let i =0; i<numRows; i++){
        arr[i] = [];
        arr[i][0] =1;
        
        for(let j =1; j<= i; j++){
            arr[i][j] = arr[i-1][j-1] + arr[i-1][j];
        }
        arr[i][i] = 1;
    }
    return arr;
}; */
//============PROBLEM 2:  12. Integer to Roman==========================//
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

//******************PROBLEM 3 :  36. Valid Sudoku *******************/
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
//******************PROBLEM 4 :  1299. Replace Elements with Greatest Element on Right Side*****************/
//Time Complexity O(n) || Space Complexity O(1)
//https://medium.com/@choudharyarpit99/replace-elements-with-greatest-element-on-right-side-fedec5bab280

/* var replaceElements = function(arr) {
    let len =arr.length;
     let max = arr[len-1];
     arr[len-1] = -1;
     
     for(let num = len -2; num >=0; num--){
         let temp  = arr[num];
         arr[num] = max;
         if(temp > max ){
             max =temp;
         }
     }
    return arr;
 }; */

//******************PROBLEM 5 :  392. Is Subsequence*****************/
//Time Complexity O(M) || Space Complexity O(1)
/* ALGORITHM:
1.Two Pointers and Greedy:
i.We make a pointer of sChar and tChar for s and t respectively
ii.	When we match a character from t, we move sChar pointer forward
iii.If sChar is able to reach the end, we know s is subsequence of t
iv.	Time complexity O(m)
v.	Space complexity O(1)

 */
/*  var isSubsequence = function(s, t) {
    if(s.length === null) return false;
    let sChar = 0;
    let tChar = 0;
  
    while(sChar < s.length && tChar < t.length){
        if (s.charAt(sChar) === t.charAt(tChar)) {
            
            sChar++;
            
        }
        
        tChar++;
        
    }
    return sChar === s.length;
}; */

//******************PROBLEM 6 :  58. Length of Last Word****************/
//Time Complexity O(n) || Space Complexity O(1)
/* ALGORITHM:
-Assign the last word of the s to a new variable and len =0;
-Apply while untill the last is greater than 0
  - true then decrement value of last by 1
  - check condition if s[last] is not empty char
  - If true then len will increment by 1
  -else if length is greter than 0 return it. 
 */

/* 
var lengthOfLastWord = function(s) {
    let last = s.length , len =0;
  while(last > 0){
      last--;
      
      if(s[last] !== ' '){
          len++;
      }
      else if (len > 0){
          return len;
      }
  }
  return len;
}; */
//******************PROBLEM 7 : 27. Remove Element ****************/
//Time Complexity O(n) || Space Complexity O(1)
/*ALGORITHM : When nums[num] equals to the given value, skip this element by incrementing num. As long as nums[num] !== val, 
we copy nums[num] to nums[k] and increment both indexes at the same time. 
Repeat the process until num reaches the end of the array and the new length is k. 
 */
/* var removeElement = function(nums, val) {
    let k  = 0;
     
    for(let num in nums){
        if(nums[num] !==  val){
            nums[k] = nums[num];
            k+=1;
        }
    }
    return k;
}; */

//******************PROBLEM 8 :  929. Unique Email Addresses*******************/
//Time Complexity O(M*N) || Space Complexity O(N*M)
/* ALGORITHM:
1. For each email present in the emails array:
Split the string into two parts separated by'@', local name, and domain name.
Split the local name into parts separated by '+'. Since we do not need the part after '+', let the first part be the local name.
Remove all '.' from the local name and append the domain name to it.
After cleaning the email, insert it into the hash set.
2. Return the size of the hash set.

 */
/* var numUniqueEmails = function(emails) {
    let unique = new Set();
    
    for( let e of emails){
        let  [local, domain] = e.split("@");
        local = e.includes("+")&& local.slice(0, local.indexOf('+')) || local;
        local = local.replace(/\./g, "")
        
      unique.add(`${local}@${domain}`);
        console.log(unique);
    }
    return unique.size;
}; */

//******************PROBLEM 9 : 205. Isomorphic Strings  *******************/
//Time Complexity O(N) || Space Complexity O(1)
/* 
var isIsomorphic = function(s, t) {
    //create two separate map for the strings
    let mapS = {};
    let mapT ={};
    
    //Loop throgh characters
    for(let char in s){
        char1 = s[char];
        char2 = t[char];
        //check the conditon that if the charater is already map or not is yes return false
        if((mapS[char1] && mapS[char1] !== char2)||(mapT[char2] && mapT[char2] !== char1)){
            return false;
        }
        // OR we can map charater if its not mapped already
        mapS[char1] = char2;
        mapT[char2] = char1;
    }
    
    return true;
}; 
*/

//******************PROBLEM 10 : 605. Can Place Flowers*******************/
//Time Complexity O(N) || Space Complexity O(1)
/* 
var canPlaceFlowers = function(flowerbed, n) {
    // add 0 to the start and end 
    flowerbed.push(0);
    flowerbed.unshift(0);
    //iterate  through flowerbed array
    for(let i = 1 ; i <flowerbed.length-1; i++){
        //check the condition for the 0 front and back
        if(flowerbed[i] === 0 && flowerbed[i-1] === 0 && flowerbed[i+1] === 0){
            // add 1 if there is no adjacent 1
            flowerbed[i] = 1;
            //decrease the value of n
            n-=1;
        }
    }
    //if n <= 0 return true else false;
    return n <= 0;
}; */

//******************PROBLEM 10 : 169. Majority Element *******************/
//Time Complexity O(N) || Space Complexity O(1)
/* 
var majorityElement = function(nums) {

    //Boyer-Moore Voting Algorithm
    
    let count = 0, val =0;
    
    for(let num of nums){
        if(count === 0) {
            val = num;
        }
        
        count += num == val ? 1 : -1;
    }
    return val;
}; */

//******************PROBLEM 11 : 724. Find Pivot Index *******************/
//Time Complexity O(N) || Space Complexity O(1)

/* var pivotIndex = function(nums) {
    //create a variable to store total sum and leftSum
     
     let total=0 , leftSum = 0;
     
     //get a total of all element in array
     
     for(let num of nums){
         total += num;
     }
     //check if the right and left is qual or not using leftSum
     for(let num in nums){
         if(leftSum == total - leftSum - nums[num]) return num;
         leftSum += nums[num];
     }
     return -1;
 }; */

 //******************PROBLEM 12 : 448. Find All Numbers Disappeared in an Array *********************/
//Time Complexity O(N) || Space Complexity O(n)

/* var findDisappearedNumbers = function(nums) {
    const  map = {};
    const  result = [];
    for(let i = 0; i<nums.length; i++){
        
        map[nums[i]] = i + 1;
    }
    
    for(let i = 1; i<=nums.length; i++){
        if(!map[i]) result.push(i);
    }
    return result;
     
}; */

//******************PROBLEM 13:1189. Maximum Number of Balloons  *********************/
//Time Complexity O(n) || Space Complexity O(1)

/* var maxNumberOfBalloons = function(text) {
    let newMap = {b: 0, a:0, l:0, o:0, n:0};
    
    for(let char of text){
        newMap[char]++;
        
    }
    
    return Math.floor(
    Math.min(newMap.b, newMap.a, newMap.l/2, newMap.o/2, newMap.n)
        
    );
    
}; */

//******************PROBLEM 14: 290. Word Pattern *********************/
//Time Complexity O(n) || Space Complexity O(m)
/* var wordPattern = function(pattern, s) {
    let wordStr = s.split(' ');
     let patternMap = {};
      let wordMap = {};
      
      if(pattern.length !== wordStr.length) return false;
      
      for(let char=0; char < wordStr.length; char++){
          
          if(!patternMap[pattern[char]] && !wordMap[wordStr[char]]){
              patternMap[pattern[char]] = wordStr[char];
          }
          if(!wordMap[wordStr[char]]){
              wordMap[wordStr[char]] = pattern[char];
          }
          if( patternMap[pattern[char]] !== wordStr[char]) return false;
      }
      
      return true;
  }; */

//******************PROBLEM 15:  *********************/
//Time Complexity O(n) || Space Complexity O(1)






//========================================================================//
//------------------------TWO POINTERS--------------------------------------//
//=======================================================================//

//******************PROBLEM 1- 680. Valid Palindrome II ******************** */
//Time Complexity O(n) || Space Complexity O(1)
/*Algorithm:-
1. Create a helper function checkPalindrome that takes a string s, and two pointers i and j.This function returns a boolean indicating if s.substring(i, j) is a palindrome.
Implementation details for this function can be found in the first section of this article.Initialize two pointers, i = 0 and j = s.length() - 1.
2. While i < j, check if the characters at indices i and j match. If they don't, that means we must spend our deletion on one of these characters. Try both options using checkPalindrome. In other words, return true if either checkPalindrome(s, i, j -1) or checkPalindrome(s, i + 1, j) is true.
3. If we exit the while loop, that means the original string is a palindrome. Since we didn't need to use the deletion, we should return true. 
 */
/* 
var validPalindrome = function(s) {
 
    //create two pointers for left and right 
    let left = 0, right = s.length-1;
    
    while(left < right){
        if(s[left] !== s[right]){
            return (helpPalindrome(s, left, right-1)|| helpPalindrome(s, left+1, right))
        }
        left++;
        right--;
    }
    return true;
};

//Create helper function to check that string is palindrome or not

function helpPalindrome(s, i, j){
    
    while( i < j){
        if(s[i] !== s[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
} */
//******************PROBLEM 2- ******************** */
//Time Complexity O(n) || Space Complexity O(1)