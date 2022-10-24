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