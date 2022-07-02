//=====================DATE: 06/16/2022=========================================
//1. ************* Reverse Integer************************ */
//Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
/*
var reverse = function(x) {

    const num = parseInt(x.toString().split("").reverse().join(""))*Math.sign(x);

     return result = num >=(2 ** 31) * -1 && num <= (2 ** 31) ? num : 0
 };

 */
//======================================================================
//2. ****************** First Unique Character in a String**************************** */
//https://dev.to/am20dipi/leetcode-walkthru-first-unique-character-in-a-string-1lh5
/*
 var firstUniqChar = function(s) {


    for(let i = 0; i < s.length; i++){
       if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
          // return the index of that unique character
          return i
      }
    }
    return -1;
 };
 */
//========================= DATE: 06/17/2022 ========================================//
//3. **********************242. Valid Anagram********************* */
//https://baffinlee.com/leetcode-javascript/problem/valid-anagram.html
/*
 var isAnagram = function(s, t) {
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
  //====================================================================//
//4. ********************125. Valid Palindrome******************** */
//https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/
/* var isPalindrome = function(s) {
    
    let re = /[\W_]/g;
      
      let newStr =s.toLowerCase().replace(re,'');
       // console.log(newStr);
      let rev = newStr.split("").reverse().join("");
     //  console.log(rev); 
    
  //     if(rev === newStr){
  //         return true;
  //     }
  //     return false;
      return rev===newStr;
         
  }; */