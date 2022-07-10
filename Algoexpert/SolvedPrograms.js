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
  // FIRST NEED TO SORT AN ARRAY THEN COMPAIRE LEFT AND RIGHT ELEMENT ||TIME COMPLEXITY O(nlog(n))||SPACE COMPLEXITY O(1)
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

//==================2.VALIDATE SUBSEQUENCE ============================

//||TIME COMPLEXITY O(n)||SPACE COMPLEXITY O(1)
/* 
function isValidSubsequence(array, sequence) {
  // Write your code here.
  //created the index for both arrays
  let arrInd = 0, seqInd = 0;
  //loop will continue untill the while condition is will get true.
  while (arrInd < array.length && seqInd < sequence.length){
    //looking for the same value in the sequence
    if(array[arrInd] === sequence[seqInd]) 
      //If find the match it will increment the index of sequence
      seqInd+=1;
     // and increment the index of array any how to looking for match the value
      arrInd+=1; 
  }
  //checking for the length if it's equal to sequence it returns true, else false
  return seqInd === sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence; 
*/

//******************* SOLUTION 2 **********************//
//||TIME COMPLEXITY O(n)||SPACE COMPLEXITY O(1)
/* function isValidSubsequence(array, sequence) {
  // Write your code here.
  let seqInd =0;
  for(let arr= 0; arr<array.length; arr++ ){
    if(seqInd === sequence.length) break;
    if(sequence[seqInd] === array[arr]) seqInd+=1
  }
  return seqInd === sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence; 
*/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=================3. Sorted Squared Array=============================//
//BRUTE FORCE ||TIME COMPLEXITY O(nlog(n)) & SPACE COMPLEXITY O(n)
/* 
function sortedSquaredArray(array) {
  // Write your code here.
const sqare =[];
  for(let i=0; i<array.length; i++){
    let sqr = array[i] * array[i];
    sqare.push(sqr);
  }
  
  return sqare.sort((a,b)=>a-b);
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
 */
//**************SOLUTION 2**************** */
//||TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(n)
/* ALGORITHM :
- TAKE SMALLER VALUE =0; AND LARGER =LEN -1 AND CREATED ONE SORTED[] TO STORE SQUARE.
- REVERSE THE FOR LOOP FOR Array.
- THEN STORE LEFTVAL AS ARRAY INDEX 1 AND RIGHTVAL ARRAY INDEX LAST VALUE.
- THEN CHECK THE CONDITION TAKING ABSOLUTE VALUE IF LEFTVAL IS GREATER THAN RIGHTVAL.
- IF IT'S TRUE THEN ADD LEFTVAL SQUARE TO THE SORTED ARRAY[IDX] AND SMALLER++.
- ELSE ADD RIGHTVAL SQUARE TO THE SORTED ARRAY[IDX] AND LARGER--.
- IN THE END PRINT THE RESULT OF SORTED ARRAY.  */

/* function sortedSquaredArray(array) {
  // Write your code here.
  const sortedArr= [];
  let smaller = 0;
  let larger= array.length - 1;
  
  for (let idx = array.length - 1; idx >= 0; idx--){
    
    const leftval = array[smaller];  //smaller value
    const rightval = array[larger]; //larger value
    
    if (Math.abs(leftval) > Math.abs(rightval)) {
     sortedArr[idx]= leftval * leftval;
      smaller++;
    }else 
    {
      sortedArr[idx]= rightval*rightval;
      larger--;
    }
}
  return sortedArr;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray; 
 */

//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//===================4. TOURNAMENT WINNER===================================
//||TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(K) - Where n is the number of competitions and k is the number of team.
/* ALGORITHM: 
-First assign the current best point team first.
-Create hashmap to store the team and key for points and assign 0 to the current best team so we can compare it with next one.
-Then the result also have same length so we assign the index of results array to result variable.
- Here we assigned the hometeam and wayteam to the index of competitions [0[0, 1]]
- This will assign winningteam if the result is 1 homeTeam else if the result 0 then awayTeam.
- Use the helper function to stores the points to the key with the team in hashmap
- checking the condition if the currentTeam is greater or small and update the team which has highest points.
 */

/* 
function tournamentWinner(competitions, results) {
  // Write your code here.

  let currentBestTeam ='';
   const scores ={[currentBestTeam] : 0};
     for(let i=0; i<competitions.length; i++){
       let result =results[i];
       let [homeTeam, awayTeam] =competitions[i];
   
       let winningTeam = result === 1 ? homeTeam : awayTeam;
       updateScore(winningTeam, 3, scores)
       if(scores[winningTeam] > scores[currentBestTeam]){
      currentBestTeam = winningTeam;
      }
  } 
  return currentBestTeam;
}

function updateScore(team, point, scores) {
  if(!(team in scores)) scores[team] =0;
  scores[team] += point;  
}
// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
 */


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//=======================5. Non Constructible Change =============================================//
//||TIME COMPLEXITY O(n log(n)) & SPACE COMPLEXITY O(1)
/*ALGORITHM:  
 - First sort the array.
 - Assign the currentChange 0 value
 - if the current coin is greater than the curentChange+1 it returns currentChange+1
 - Else it add coin value to the currentChange. 
 - Then return the currentChange+1;
 */
/* 
function nonConstructibleChange(coins) {
  // Write your code here.
 
  coins.sort((a, b) => a - b);
 
let currentChange = 0;
  
  for(let c=0; c<coins.length; c++){
   
    if(coins[c] > currentChange + 1) return currentChange + 1;
      currentChange += coins[c];  
  }
   return currentChange + 1; 
}
// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//===============6.Find the closest value in BST ===========================//
//||TIME COMPLEXITY O(log(n)) & SPACE COMPLEXITY O(n)
/*
Algorithm:  
- FIRST INITIALIZE CLOSEST VALUE AND ADD THE CURRENT NODE VALUE OF THE TREE TO IT.
- THEN WE HAVE TO CALCULATE THE ABSOLUTE DIFFRENCE BETWEEN THE CURRENT NODE VALUE WITH THE TARGET VALUE |TARGET -CLOSESTNODE.VLAUE|.
- AND COMPARE THE DIFFRENCE IF IT SMALLER THAN THE ABSOLUTE DIFFERENCE OF THE |CLOSEST - TARGET| IF THE IT'S TRUE THEN UPDATE CLOSEST WITH THE CURRENT NODE.
- COMPARE THIS CLOSEST WITH THE TARGET VALUE IF CURRENTNODE IS SMALL THAN THE TARGET THEN MOVE TO THE RIGHT NODES.
- IF THE CURRENTNODE IS GREATER THA TARGET VALUE THE MOVE TO THE LEFT NODES.
- NOW REPEATE THE PROCESS 1- 4 UNTILL WE GET THE CLOSEST NODE AND THEN RETURN CLOSEST. 
 */
//******************SOLUTION 1******************** */
/* function findClosestValueInBst(tree, target) {
  // Write your code here.
//This is a helper function
  return findclosestValueHelper(tree, target, tree.value);
}
 function findclosestValueHelper(tree, target, closest){
   if(tree === null) return closest;
   
   if(Math.abs(target - closest) > Math.abs(target - tree.value )){
     closest = tree.value;  
   } 
    if(tree.value < target ){
     return findclosestValueHelper(tree.right, target, closest);
   }else if(tree.value > target ){
     return findclosestValueHelper(tree.left, target, closest);
   }
   else {
     return closest;
   }
 }

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
 */
//*******************SOLUTION 2******************* */
/* function findClosestValueInBst(tree, target) {
  // Write your code here.
 return findclosestValueHelper(tree, target, tree.value);
}
function findclosestValueHelper(tree, target, closest){
  let closestNode = tree;
  while (closestNode !== null){
  if(Math.abs(target -closest) > Math.abs(target - closestNode.value)){
    closest =closestNode.value;
   }
  if(closestNode.value > target){
    closestNode = closestNode.left;
   }else if(closestNode.value < target){
   closestNode =closestNode.right;
   }else{
    break;
   }
  }
return closest;
  
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//====================7. =====================================//

/*ALGORITHMS:  
 */