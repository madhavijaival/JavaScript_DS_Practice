//=================1. Two Number Sum================================//
//**************SOLUTION 1************ */
//BRUTE FORSE APPROCH || TIME COMPLEXITY O(n^2) || SPACE COMPLEXITY O(1)
/* 
function twoNumberSum(array, targetSum) {
    // Write your code here.
      for (let i= 0; i < array.length - 1  ; i++ ){
           const first = array[i];
               for (let j = i + 1; j < array.length; j++ ){
                   const second = array[j];
                   if (first + second === targetSum){
                       return [first, second]
                   }
               }	     
         }
       return [];
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
   */
  //**********SOLUTION 2********** */
  //HERE THIS USES THE HASHMAP|| TIME COMPLEXITY O(n)||SPACE COMPLEXITY O(n)
/* function twoNumberSum(array, targetSum) {
    // Write your code here.
   const nums={};
    for(const num of array){
      const match = targetSum - num;
      if(match in nums){
        return [match, num];
      }else{
        nums[num]= true;
      }
    }
    return [];
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
   */
  //***********SOLUTION 3************* */
  // FIRST NEED TO SORT AN ARRAY THEN COMPAIR LEFT AND RIGHT ELEMENT ||TIME COMPLEXITY O(nlog(n))||SPACE COMPLEXITY O(1)
  /* 
  function twoNumberSum(array, targetSum) {
    // Write your code here.
   array.sort((a, b) => a-b);
    let left =0; 
    let right = array.length - 1;
    while(left < right){
      let currSum = array[left] + array[right];
      if(currSum === targetSum) {
        return [array[left], array[right]];
      }else if(currSum < targetSum){
        left++;
      }else if(currSum >targetSum){
        right--;
      }
    }
   return [];
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum; */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//==================2. ============================
