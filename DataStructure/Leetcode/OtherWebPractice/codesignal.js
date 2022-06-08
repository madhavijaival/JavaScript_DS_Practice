//====================================================================================//
//****************PALINDROME STRING *********************** */
/* let s="aabaa";

function solution(inputString) {
//====Another easy way=============//
// return inputString === inputstring.split('').reverse().join('');

    const original = inputString;
  let newStr="";
    for (let i=inputString.length-1; i>=0; i--){
       newStr +=inputString[i];
       }
 
       if(newStr === original){
           return true;
          
       }
   
       return false;
}
console.log(solution(s)); 
*/
