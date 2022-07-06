//============1.= 217. Contains Duplicate==========================//

/*      //nums.sort((a,b) => a-b);
     for(let i=0; i<=nums.length-1; i++){
         for (let j=i+1; j<nums.length; j++){
         if(nums[i] === nums[j])
             return true;
     }
 }
     return false; */
//++++++++++++++++++++++++++++++++++++++++++++++// 
   
/* var containsDuplicate = function(nums) {
    let set =new Set();
     for(let i =0; i<nums.length ; i++){
         if(set.has(nums[i])) return true;
         set.add(nums[i]);    
     }
     return false;
 
 }; */
 //==================================================//
 //**************2. **242. Valid Anagram*********************************** */
 /* 
 var isAnagram = function(s, t) {
    //If the strings are anagrams they must have same characters but in different order but we can  // sort the element after splitting and can get same array element then comapre.  
       const arr1 =s.split("").sort().join("");
       const arr2 =t.split("").sort().join("");
       if(arr1 === arr2)
       return true;
       else 
        return false;
       
   //Time complexity = O(n log(n)) & Space = O(n)
   }; 
   */
  //+++++++++++++++++++++++++++++++++++++++++++++
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
//***********3. ***1. Two Sum***************** */
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
//+++++++++++++++++++++++++++++++++++++++++++++++//
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
//============================================================
