//==================****Akuna Capital****========================//
//==================1.**1370. Increasing Decreasing String====================//
//TIME COMPLEXITY O(n) || SPACE COMPLEXITY O(n)
/* ALGORITHM: Pseudo Code:
1. Create output array.
2. Create charCount array.
3. Loop through s.
  a. Fill up the charCount with the corresponding count for each letter.
4. Create count variable.
5. While count is greater than 0.
  a. Loop through charCount.
    i. Condition if value is greater than 0.
      1. Push to output.
      2. Decrement the charCount.
      3. Decrement the count.
  b. Loop backwards through charCount.
     i. Condition if value is greater than 0.
      1. Push to output.
      2. Decrement the charCount.
      3. Decrement the count.
6. Return output as string.
*/

/*
 var sortString = function(s) {
    let Result=[];
    let charCount = new Array(26).fill(0);
    for(let i=0; i<s.length; i++){
        charCount[s[i].charCodeAt() - 97]++;             //97 is a's position in ASCII
    }
   let count =s.length;
    while(count > 0){
        for(let i =0; i<charCount.length; i++){
            if(charCount[i] > 0){
            Result.push(String.fromCharCode(i+97));
            charCount[i]--;
            count--;
            }
        }
        for(let i =charCount.length-1; i>=0; i--){
            if(charCount[i] > 0){
            Result.push(String.fromCharCode(i+97));
            charCount[i]--;
            count--;
                
            }
        }
    }
    return Result.join('');
    
}; 
*/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//===============2. Reduce-array-size-to-the-half ========================================//
//Time Complexity : O(nlogn) ||Space Complexity : O(n)O(n).
//Algorithm : https://leetcode.com/problems/reduce-array-size-to-the-half/solution/

//***************SOLUTION 1********************* */
/* var minSetSize = function(arr) {
    
    arr.sort((a,b) => a-b)
    
     let currentRun =1;
     let counts=[]
    
    for(let i =1; i<arr.length; i++){
        if(arr[i] === arr[i-1]){
        currentRun+=1;
            continue;
            }
        counts.push(currentRun);
        currentRun=1;
        }
      counts.push(currentRun);
    
    counts.sort((a,b) => b-a);
    
    let removeEle = 0;
    let set =0;
    
    for(const i of counts){
        removeEle += i;
        set +=1;
        if(removeEle >= arr.length/2){
            break;
        }
    }
    return set;
    
};
 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//=============3.**1319. Number of Operations to Make Network Connected =============//

//https://www.geeksforgeeks.org/minimize-count-of-connections-required-to-be-rearranged-to-make-all-the-computers-connected/