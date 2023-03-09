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
- TAKE SMALLER VALUE = 0; AND LARGER = LEN -1 AND CREATED ONE SORTED[] TO STORE SQUARE.
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
- THEN WE HAVE TO CALCULATE THE ABSOLUTE DIFFRENCE BETWEEN THE CURRENT NODE VALUE WITH THE TARGET VALUE |TARGET - CLOSESTNODE.VALUE|.
- AND COMPARE THE DIFFRENCE IF IT SMALLER THAN THE ABSOLUTE DIFFERENCE OF THE |CLOSEST - TARGET| IF IT'S TRUE THEN UPDATE CLOSEST WITH THE CURRENT NODE.
- COMPARE THIS CLOSEST WITH THE TARGET VALUE IF CURRENTNODE IS SMALL THAN THE TARGET THEN MOVE TO THE RIGHT NODES.
- IF THE CURRENTNODE IS GREATER THE TARGET VALUE THE MOVE TO THE LEFT NODES.
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

//====================7. BRANCH SUM =====================================//
//||TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(n)
/*ALGORITHMS:  
- CREATE A EMPTY ARRAY TO ADD SUMS
- CALL HELPER FUNCTION IN MAIN  & RETURN SUMS 
- IN THE HELPER FUNCTION TAKE 3 PARAMETERS ROOT , RUNNING SUM =0, AND SUMS
- CREATE A VARIABLE NEWRUNNIGSUM TO STORE THE VALUE OF RUNNINGSUM + NODE.VALUE
- THEN CHECK THE CONDITION FOR CHILD NODE IF THE NODE.LEFT AND NODE.RIGHT IS EMPTY(NULL) THEN PUSH THE NEWRUNNNING SUM TO THE SUMS ARRAY
- RETURN VLAUE
- THEN REPEATE THIS FOR 
    sumOfBranches(node.left, newRunningSum, sums)
    sumOfBranches(node.right, newRunningSum, sums)
 */

// This is the class of the input root.
// Do not edit it.
/* class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
let sums = [];
  sumOfBranches(root, 0, sums);
  return sums;
  
}

function sumOfBranches(node, runningSum, sums){
  if( node === null) return;
const newRunningSum = runningSum + node.value;
  if(node.left === null && node.right === null){
    sums.push(newRunningSum);
      return;
  }

    sumOfBranches(node.left, newRunningSum, sums)
    sumOfBranches(node.right, newRunningSum, sums)
  }

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
 */
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//=====================8.NODE DEPTHS : CALCULATION OF THE NODE LEVEL ==================//
//||TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(h)
/*ALGORITHM:  
- WE ARE CALLING THE RECURSIVE FUNCTION OF THE ORIGIONAL ONE
- WE ADDED DEPTH TO THE MAIN FUNCTION AND ASSIGN 0 TO IT AS ROOT HAS NO LEVEL 
- THEN WE ARE ADDING THE RIGHT NODE AND THE LEFT NODE DEPTH TO IT AND RETURNING TOTAL OF THE DEPTH.
 */
//Recursive algorithm way.
/* function nodeDepths(root, depth = 0) {
  // Write your code here.

  if(!root) return 0;
  return depth + nodeDepths(root.left, depth+1) + nodeDepths(root.right, depth+1);
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths; 
*/
//***************SOLUTION 2*********************/
//ITERATIVE WAY OF THE ALGO
/* function nodeDepths(root) {
  // Write your code here.
 let sumOfDepth=0;
  const stack=[{node: root, depth:0}];
  while(stack.length > 0){
    const {node, depth} =stack.pop();
    if(node === null) continue;
    sumOfDepth += depth;
    stack.push({node:node.left, depth: depth + 1});
     stack.push({node:node.right, depth: depth + 1});
  }
  return sumOfDepth;
}
// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//======================= 9.DEPTH-FIRST SEARCH ====================================//
//||TIME COMPLEXITY O(V + E) & SPACE COMPLEXITY O(V) where V = VERTEX OF TREE & E = EDGES OF THE TREE.
/* 
ALGORITHM: 
- WE HAVE TO VISIT THE DEPTH VALUE OF THE LEFT SIDE CHILDRESN FIRST
- WHEN THE LEFT CHILD IS NULL THEN IT TRAVERSE TRHOUGH THE RIGHT CHILDS
- IT REPEAT THE PROCESS UNTILL THE ALL THE CHILD VISITED.
- In the code first pushing the name value to the array.
- Then looping through the childerns value.
- Then using the child value we running the DFS function (recursively) on the child value
- In last we are returning the array of the DFS.
 */
/* class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }
// MAIN CODE IS HERE
  depthFirstSearch(array) {
    // Write your code here.
  //First push the name value to the array
    array.push(this.name);
    //go through the for loop for getting childerns value
    for(const child of this.children){
      //then run the DFS on the child value
      child.depthFirstSearch(array)
    }
    // return the array of the output
    return array;
  }
}

// Do not edit the line below.
exports.Node = Node; */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//===================== 10. MINIMUM WAITING TIME ===================================//
//||TIME COMPLEXITY O(nlog(n)) & SPACE COMPLEXITY O(1) 
/*
ALGORITHM: 
-  
 */
/* function minimumWaitingTime(queries) {
  // Write your code here.
  queries.sort((a,b) => a - b);
  
 let  minWaitTime =0;
  
  for(let i =0; i< queries.length; i++){
  const duration = queries[i];
  const leftQueries =queries.length - ( i + 1);
    minWaitTime += duration * leftQueries;
    console.log(minWaitTime);
  }
  return minWaitTime;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime; */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//======================11.CLASS-PHOTO ===================================//
//||TIME COMPLEXITY O(nlog(n)) & SPACE COMPLEXITY O(1) 
/*
ALGORITHM: 
- FIRST WE NEED TO SORT ARRAY IN DECENDING ORDER.
- THEN CREATE THE VARIABLE TO STORE THE TOPHEIGHT THEN COMPARE THE 1ST ELEMENT FROM THE BOTH ARRAY AND RETURN THE TOP ELEMENT WITH OUTPUT OF IT'S COLOR.
- THEN LOOP THROUGH THE INDEXES AS BOTH ARRAY HAS SAME VALUES WE NEED TO LOOP ON ONLY ONE ARRAY.
- CHECK THE CONDITION IF THE TOPHEIGHT IS EQUAL TO THE ="COLOR ANY BLUE/RED " THE CHECK CONDITION IFR FIRST ARRAY IS >= TO SECOND THEN RETURN FALSE;
- AND CHECK OF THE SECOND ARRAY >= FIRST ARRAY ALSO RETURN FLASE
- IF OUR ARRANGEMNT IS RIGHT THEN SIMPLY RETURN TRUE AT END
-  
 */

/* function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
  redShirtHeights.sort((a,b)=> b - a);
   blueShirtHeights.sort((a,b)=> b - a);
const topHeight =  redShirtHeights[0] > blueShirtHeights[0] ? 'RED' : 'BLUE';
  
  for(let idx =0; idx < redShirtHeights.length; idx++){
    if(topHeight === 'BLUE'){
      if(redShirtHeights[idx]>= blueShirtHeights[idx])
        return false;
      }else  if(blueShirtHeights[idx] >= redShirtHeights[idx])
        return false;
       }
    
  return true;
} 
*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//========================== 12.TANDEM BICYCLE ===============================//
//||TIME COMPLEXITY O(nlog(n)) & SPACE COMPLEXITY O(1) 
/* 
ALGORITHM:
- FIRST WE NEED TO SORT BLUESHIRT ARRAY IN THE REVERSE ORDER.
- THEN WE CHECK IF THE FASTEST IS FALSE THEN WE SORT REDSHIRT ARRAY IN DECENDING ORDER TO GET THE LOWEST TOTAL
- ELSE WE SORT THE REDSHIRT ARRAY IN THE ASSENDING ORDER.
- THEN CRATE VERIABLE TO STORE THE TOTALSPEED AND RUN THE FOR LOOP FOR ITERATING THE VALUES
-THEN WE ADD THE VALUE WHICH ONE IS THE MAX FROM THE REDSHIRT OR BLUESHIRT.
- IN LAST RESTURN TOTTAL SPEED
 */
/* function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
  blueShirtSpeeds.sort((a,b)=> b - a);
  
  if(!fastest){
    redShirtSpeeds.sort((a,b)=> b - a); 
  }else {
    redShirtSpeeds.sort((a,b)=> a - b);
  }
let totalSpeed=0;
  for(let i=0; i<blueShirtSpeeds.length; i++){
    totalSpeed += Math.max(redShirtSpeeds[i],  blueShirtSpeeds[i]);
  }
  return totalSpeed;
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;

 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=======================13.REMOVE DUPLICATES FROM THE LINKED-LIST ================================//
//||TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(1) 
/*
ALGORITHM:
- FIRST WE NEED TO CREATE THE CURRRENTNODE VARIABLE TO STORE OUR HEAD NODE.
- THEN  CHECK CONDITION IF THE CURRENTNODE IS NOT NULL IS TRUE THEN WE ASSIGN THE NEXTDISTNODE = CURRENTNODE.NEXT VALUE;
- THEN WHILE LOOP FOR THE NEXTDIST IS NOT NULL AND IF IT'S VALUE IS EQUAL TO THE CURRENTNODE VALUE.
- IT IT'S TRUE THEN WE MOVE OUR NEXTDIST NODE TO THE NEXT OF THE NEXTDISTNODE = NEXTDISTNODE.NEXT
- AND THEN IN FINALLY WE MOVE OUR POINT TO THE OUR "CURRENTNODE.NEXT" TO THE NEXTDISTNODE AND "CURRENTNODE" = NEXTDISTNODE.

- WE ARE NOT GETTING ANY O(N^2) TIME BECAUSE WE AREN'T REPEATATING THE VALUE ACTUALLY WE ARE ELIMENATING THOSE.

 */
/* // This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
  let currentNode =linkedList;
  while(currentNode!== null){
    let nextDistNode = currentNode.next; 
    while(nextDistNode !== null && nextDistNode.value === currentNode.value ){
      nextDistNode = nextDistNode.next;
    }

    currentNode.next = nextDistNode;
    currentNode = nextDistNode;
  }
  return linkedList;
  
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
 */
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//=====================14. NTH FIBONACCI ==========================================
//||TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(1) 
/* 
ALGORITHM:
- FIRST WE NEED TO CREATE AN ARRAY TO STORE FIRST TWO NUMBER 0 AND 1 
- THEN CREATE COUNTER VARIABLE AND ASSIGN IT 3
- DO THE WHILE LOOP UNTILL THE COUNTER <= N VALUE
- IN THE WHILE LOOP ADD THE FORMULA TO CREATE NEW FIB NUMBER AND THEN DO THE SWAPPING FIRST NUMBER GONNA REMOVE 2ND NUMBER MOVE PLACE TO FIRST AND NEW FIB NUMBER ON THE SECOND PLACE OF THE ARRAY INDEX[1]
- THEN INCREASE THE COUNTER BY 1 AND RETURN THE VALUE OF LASTTWO [1] IF THE NUMBER IS GREATER THAN 1
*/
/* 
function getNthFib(n) {
  // Write your code here.
  let lastTwo =[0, 1];
  let Counter = 3;
  while(Counter <= n){
    nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] =nextFib;
    Counter += 1;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//=========================15. PRODUCT SUM [ARRAY IN THE ARRAY]====================================//
//TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(d), Where  n is the total number of element in the array 
//including sub-element, and d is the greatest depth of the special array in the array.
/*
ALGORITHM:
- FIRST WE NEED TO ADD AN MULTIPLIER IN THE FUNCTION PARAMETER.
-THEN CREATE SUM VARIABLE TO STORE THE SUM.
- THEN RUN THE FOR LOOP TO ACCESSING THE ARRAY ELEMENT AND ADD IF THE ELEMENT IS ARRAY OR NOT.
- IF THE ELEMENT IS THE ARRAY THEN CALL RESURSIVE FUNCTION AND ADD TO THE SUM.
- ELSE ADD ELEMENT TOT THE SUM AND END RETURN THE SUM * MULTIPLIER. 
 */

/* // Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, multiplier=1) {
  // Write your code here.
  let sum = 0;
  for (const element of array){
    if(Array.isArray(element)){
      sum += productSum(element, multiplier + 1)
    }else{
      sum += element;
    }
  }
  return sum * multiplier;
}

// Do not edit the line below.
exports.productSum = productSum;
 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//====================16. BINARY SEARCH ==============================//
/*
ALGORITHM: 
- FOR THE BINARY SEARCH ARRAY ALWAYS SHOULD BE SORTED.
- WE ASSIGN THE FIRST VALUE LEFT AND LAST IS RIGHT.
- THEN TAKE MIDDLE VALUE BYE THE FORMULA USING (LEFT + RIGHT / 2) 
- THEN CHECK IS THE MIDDLE VALUE IS SAME AS THE TARGET VALUE IF IT'S SAME THE JUST O/P THE INDEX OF MIDDLE
- ELSE IF THE MIDDLE VALUE IS GREATER THAN THE TARGET WE NEED TO ERASE ALL RIGHT ELEMENT AND THE  ADD RIGHT = MIDDLE - 1
- ELSE IF THE MIDDLE VALUE IS SMALLER THAN THE TARGET VALUE THEN WE NEED TO ERASE ALL THE LEFT VALUE AND ASSIGN LEFT = MIDDLE + 1
- RETURN THE HELPER FUNCTION IN MAIN. 
 */

//***********SOLUTION 1******************** */
//TIME COMPLEXITY O(log(n)) & SPACE COMPLEXITY O(log(n))
/* function binarySearch(array, target) {
  // Write your code here.
  return binarySearchHelper(array, target, 0, array.length-1);
}
function binarySearchHelper(array, target, left, right){
  if(left > right)  return -1;
  let middle = Math.floor((left+right) / 2);
  if(array[middle] ===  target){
    return middle;
  }else if(array[middle] > target){
    return binarySearchHelper(array, target, left, middle -1);
  }else{
    return binarySearchHelper(array, target, middle +1, right);
  }
}
// Do not edit the line below.
exports.binarySearch = binarySearch;
 */
//**************SOLUTION 2********************* */
//TIME COMPLEXITY O(log(n)) & SPACE COMPLEXITY O(1)
/* function binarySearch(array, target) {
  // Write your code here.
 return binarySearchHelper(array, target, 0, array.length-1);
}

function binarySearchHelper(array, target, left, right){
  while(left <= right){
    const middle = Math.floor((left + right) / 2);
    if(array[middle] === target){
      return middle;
    }else if(target < array[middle]){
      right = middle - 1;
    }else{
      left = middle + 1;
    }
  }
  return -1;
}
// Do not edit the line below.
exports.binarySearch = binarySearch; 
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//=====================17. FIND THREE LARGEST NUMBERS ===================================//
////TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(1)
/*
ALGORITHM:
- FIRST WE NEED TO CREATE AN ARRAY TO STORE THE LARGEST NUMBER AND ASSIGN INTIAL NULL TO ALL THREE.
- IN THE HELPER FUNCTION WE HAVE TWO PARAMETER ONE IS THE THREELASRGEST ARRAY AND PASSED ELEMENT OF ARRAY.
- THEN CHECK IF THE LARGEST INDEX VALUE IS NULL OR GREATER THAN THE CURRENT ARRAY ELEMNTS IF ONE OF THE CONDITION IS TRUE THEN 
 CALL ANOTHER HELPER FUNCTION TO SHIFT ARRAY ELEMENT OF THE LARGESTTHREE.
- REPEAT PREVIOUS SAME PROCEDURE FOR THE INDEX 1 AND INDEX 0 ALSO.
- THEN IN THE 2ND HELPER FUCNTION WE SHIFT THE ELEMENT CHECKING THE VALUE OF THE ARRAY OF THREELARGEST NUMS.   
 */
/* function findThreeLargestNumbers(array) {
  // Write your code here.
let threeLargest= [null, null, null];
  for(let num of array){
    updateArray(threeLargest, num);
  }
  return threeLargest;
}

function  updateArray(threeLargest, num){
  if(threeLargest[2] === null || num > threeLargest[2]){
  shiftLargest(threeLargest, num, 2);
  } else if(threeLargest[1] === null || num > threeLargest[1]){
    shiftLargest(threeLargest, num , 1);
  } else if (threeLargest[0] === null || num > threeLargest[0]){
    shiftLargest(threeLargest, num, 0);
  }
}

function shiftLargest(array, num, idx){
  for(let i =0; i<= idx; i++){
    if(i === idx) return array[i] = num;
    else
      array[i] = array[i+1];
  }
}
// Do not edit the line below.

exports.findThreeLargestNumbers = findThreeLargestNumbers; 
*/
//******************* SOLUTION 2 EASY:**************************//
/* function findThreeLargestNumbers(array) {
  // Write your code here.
  //Time complexity(log(n)) Space Complexity O(1).
  array.sort((a, b) => a-b); 
  return array.slice(-3);
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
 */

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//=====================18. BUBBLE SORT ================================//
//Best: TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(1)
//Average: TIME COMPLEXITY O(n^2) & SPACE COMPLEXITY O(1)
//Worst: TIME COMPLEXITY O(n^2) & SPACE COMPLEXITY O(1)
/* 
ALGORITHM : 
- FIRST TAKE IS isSorted =  TRUE.
- THEN IN WHILE NOT isSorted, THEN ASSIGN isSorted WITH true. 
- RUN THE FOR LOOP ON THE ARRAY ANY CHECK IF THE CURRENT ELEMENT IS GREATER THAN NEXT.
- IF IT'S TRUE THEN CALL SWAP FUNCTION WITH CURRENT, NEXT AND ARRAY.
   - IN SWAP CREATE TEMP VARIABLE AND SWAP CURRENT AND NEXT ELEMENT IN THE ARRAY.
- ALSO ASSIGN isSorted WITH false.
- RETURN array.
 */
/* 
function bubbleSort(array) {
  // Write your code here.
  let isSorted = false; 
  while(!isSorted){
    isSorted = true;
    for(let i = 0; i< array.length - 1 ; i++ ){
      if(array[i] > array[i+1]){
        swap(i, i+1, array);
        isSorted = false;
      }
    }  
  }
  return array;
}

function swap(i, j, array){
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
// Do not edit the line below.
exports.bubbleSort = bubbleSort;
 */

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//==================== 19. INSERTION SORT ====================================//
//TIME COMPLEXITY O(n^2) & SPACE COMPLEXITY O(1)
/*ALGORITHM:
- Iterate from arr[1] to arr[N] over the array. 
- Compare the current element (key) to its predecessor. 
- If the key element is smaller than its predecessor, compare it to the elements before. 
  Move the greater elements one position up to make space for the swapped element.
- return  array
 */

/* function insertionSort(array) {
  // Write your code here.
  for (let num =0; num < array.length; num++)
    {
      let j = num;
      while( j > 0 && array[j] < array[j-1] ){
        swap(j, j-1, array);
        j -=1;
      }
    }
  return array;
}
function swap(i, j, array){
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// Do not edit the line below.
exports.insertionSort = insertionSort;
 */

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//=====================20.SELECTION SORT ================================//
//TIME COMPLEXITY O(n^2) & SPACE COMPLEXITY O(1)
/* ALGORITHM:
- Initialize minimum value currentIdx to location 0.
- Traverse the array to find the minimum element in the array.
- Create variable smallIdx and assign currentIdx to it.
-While traversing if any element smaller than smallIdx is found then swap both the values.
Then, increment currentIdx to point to the next element.
- Repeat until the array is sorted. */

/* function selectionSort(array) {
  // Write your code here.
  let currentIdx = 0;
  while(currentIdx < array.length-1){
    let smallIdx = currentIdx;
    for(let i = currentIdx + 1; i < array.length; i++){
      if(array[smallIdx] > array[i]) smallIdx = i;
    }
      swap(currentIdx, smallIdx, array)
      currentIdx +=1;
  }
  return array
}

function swap(i, j, array){
  let temp= array[i];
  array[i] =array[j];
  array[j] = temp;
} 

// Do not edit the line below.
exports.selectionSort = selectionSort; */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//========================= 21. PALINDROME CHECK ===================//
//TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(1)
/* 
ALGORITHM:
- CHECKING FIRST AND LAST CHARACTER IS EQUAL OR NOT.
 -  IF NOT EQUAL THEN RETURN false.
 - AND FIRST INCREMENT AND LAST DECREMENT.
- LAST IF ALL ARE EQUAL THEN RETURN TRUE.
 */

 //************SOLUTION 1********************** */
/* function isPalindrome(string, i = 0) {
  // Write your code here.
  let left = 0; 
  let right = string.length-1;
   while(left < right){
     if(string[left] !== string[right]) return false;
     left++;
     right--;
   }
  return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
 */

//************* SOLUTION 2 **************** */
//TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(n)
 /* 
  let j =string.length - 1 - i;
  if(i >= j)
    return true; 
  if(string[i] !== string[j])
    return false;
  return isPalindrome(string, i+1); 
  */
  //*************SOLUTION 3*************** */
 //TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(n)
/* 
  let reverseStr=[]; 
  
  for(let i = string.length; i>=0 ; i--){
    
    reverseStr.push(string[i]);
  }
  
  return reverseStr.join('') === string;
   */
//*************SOLUTION 4 *************** */
//TIME COMPLEXITY O(n^2) & SPACE COMPLEXITY O(1)

/* 
let reverseStr= ""; 
  
for(let i = string.length-1; i>=0 ; i--){

   reverseStr +=string[i];
}
 
 return string === reverseStr;
 
 */
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//================== 22. RUN-LENGTH ENCODING ========================//

//TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(n) - Where n is the length of the input string.

/* 
ALGORITHM: 
- FIRST WE NEED TO CREATE THE ARRAY FOR STORING ENCODED CHARACTER.
- THEN ASSIGN CURRENTLENGHT = 1
- LOOP THROUGH THE STRING ELEMENTS AND ADD THE IF LOOP TO CHECK CONDITION
    - IF THE CURRENT CHAR IS NOT EQUAL TO PREVIOUS CHAR OR THE CURRENTLENGHT === 9
- THEN ADD THE LENGTH TO THE ENCODED ARRAY (toString() for conversion)
- AND ADD PREVIOUS CHARACTER AND RESET THE CURRENTLENGTH
- TO HANDLE LAST RUN WE HAVE TO ADD LENGTH AND LASTELEMENT TO THE ENCODED ARRAY
- RETURN THE RESULT WITH THE ENCODED STRING ARRAY USING (join(""))
 */

/* 
function runLengthEncoding(string) {
  // Write your code here.
 let encodeChar = [];
  let currentLength = 1;
  
  for(let i = 1; i < string.length ; i++){
     if(string[i] !== string[i-1] || currentLength === 9){
      encodeChar.push(currentLength.toString());
      encodeChar.push(string[i-1]);
       currentLength = 0;    
    }  
     currentLength++;
  }
//Handle the last run...
 encodeChar.push(currentLength.toString());
 encodeChar.push(string[string.length - 1]);

 return encodeChar.join('');
  
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;
 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//====================23. CaesarCipherEncryptor =================//
//TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(n)

//**************SOLUTION 1********************* */
/* function caesarCipherEncryptor(string, key) {
  // Write your code here.
  const newLetter =[];
  const newKey = key % 26;
  for(const letter of string){
    newLetter.push(getNewLetter(letter, newKey));
  }
  return newLetter.join("");
}
function getNewLetter(letter, key){
  const newLetterCode = letter.charCodeAt() + key;
  return newLetterCode <=122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 +(newLetterCode %122));
}
// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
 */

//**************SOLUTION 2********************* */
//TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(n)

/* function caesarCipherEncryptor(string, key) {
  // Write your code here.
  const newLetter = [];
  const newKey = key % 26;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for(const letter of string){
    newLetter.push(getLetter(letter, newKey, alphabet));
  }
  return newLetter.join('');
}

function getLetter(letter, key, alphabet){
 const newCodedLetter = alphabet.indexOf(letter) + key;
  return alphabet[newCodedLetter  % 26];
}
// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//===========24.GENERATE DOCUMENT - LOOKING FOR SIMILAR STRING FROM GIVEN =====================//

//TIME COMPLEXITY O( n + m ) & SPACE COMPLEXITY O(C), WHERE n IS NUMBAER OF CHARACTERS, 
//m IS THE LENGTH OF THE DOCUMENT, AND C IS THE NUMBER OF UNIQUE CHARACTERS IN STRING
/* ALGORITHM :
- CREATE HASH TABLE AND START COUNTING ALL OF THE CHAR FROM CHARATERS STRNG AND STORE THOSE COUNTS IN HASH-TABLE.\
- THEN LOOP THROUGH DOCUMENT STRING AND CHECK IF THE CHAR IS IN THE HASH TABLE AND HAS VALUE GREATER THAN 0, 
 THEN DECREMENT THE VALUE OF THE CHAR IN HASH TABLE.
- IF WE MAKE IT THROUGHT ENTIRE DOCUMENT STRING WITHOUT RETURNING false, THEN WE CAN GENERATE DOCUMENT.
- IT RETURN TRUE.  
 */

//************* SOLUTION 1 - OPTIMAL(HASHMAP)****************** */
/* 
function generateDocument(characters, document) {
  // Write your code here.
  let characterCount = {};

  for(const char of characters){
    if(!(char in characterCount)) characterCount[char] =0;
    
    characterCount[char]++;
  }

  for(const char of document){
    if(!(char in characterCount) || characterCount[char] === 0) return false;
    
    characterCount[char]--;
  }
  
  return true;
}

// Do not edit the line below.
exports.generateDocument = generateDocument;
 */



//************* SOLUTION 2 - (SET)****************** */

//TIME COMPLEXITY O(c * ( n + m) ) & SPACE COMPLEXITY O(C)

/* function generateDocument(characters, document) {
  // Write your code here.
  let alreadycCounted = new Set();
  
  for(const char of document){
    
    if(char in alreadycCounted) continue;
    
    const freqOfDocument = countFrequencyChar(char, document);
    const freqOfCharacters = countFrequencyChar(char, characters);

    if(freqOfDocument > freqOfCharacters) return false; 
    
    alreadycCounted.add(char);
  }
  return true;
}
 */
//********************SOLUTION 3************************ */

//TIME COMPLEXITY O(m * ( n + m) ) & SPACE COMPLEXITY O(C) 

/* function generateDocument(characters, document) {
  // Write your code here. 
for( const char of document){
  const freqOfDocument = countFrequencyChar(char, document);
   const freqOfCharacters= countFrequencyChar(char, characters);
if(freqOfDocument > freqOfCharacters) return false;
   }
  return true;
}

function countFrequencyChar(char, target){
let frequency =0;
  for(const num of target){
    if( num == char ) frequency++;
  }
  return frequency;
} 
*/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//===================== 25.FIRST NON-REAPEATING CHARACTER ======================================//
//TIME COMPLEXITY O(N) & SPACE COMPLEXITY O(1) 
/* ALGORITHM :
- CREATE HASH TABLE AND START COUNTING ALL OF THE CHAR FROM string AND STORE THOSE COUNTS IN HASH-TABLE.
- THEN LOOP THROUGH string AND ASSIGN string[Idx] TO THE CHAR VARIABLE.
- IF THE CHAR IS IN THE HASH TABLE AND HAS VALUE EQUAL TO 1, 
 - THEN RETURN THAT INDEX.
- IF THERE IS NO REPEATING VARIABLE THEN RETURN -1.  
 */
/* 
function firstNonRepeatingCharacter(string) {
  // Write your code here.
  const charFreq = {};
  
  for(const char of string){
    if(!(char in charFreq)) charFreq[char] = 0;
    charFreq[char]++;
   // console.log(freqMap);
  }
  for(let idx in string){
    const char = string[idx]
    if(charFreq[char] === 1) return idx;
  }
  return -1;
}

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter; */


//===================== 26. SEMORDNILAP : REVERSE STRING ======================================//
//TIME COMPLEXITY O(N * M) & SPACE COMPLEXITY O(N * M) 
/*ALGORITHM:
- CREATE SET WITH THE SAME WORDS ARRAY.
- THEN IERATE THROUGH THE WORDS STRING AND TAKE REVERSE OF THE WORD.
- AND CHECK ID IT'S IN THE SET OR NOT AND THE REVERSE IS NOT EQUAL TO THE WORD
  - THEN PUSH WORD AND REVERSE IN THE ANSWER ARRAY.
  - THEN DELETE THE WORD AND IT'S REVERSE FROM SET.
- RETURN ANSWER ARRAY.  
 */

/* function semordnilap(words) {
  // Write your code here.
  const wordSet = new Set(words);
  const ansArr = [];

  for(const word of words){
    let reverse = word.split('').reverse().join('');
    if(wordSet.has(reverse) && reverse !== word ){
      ansArr.push([word, reverse]);
      wordSet.delete(word);
      wordSet.delete(reverse);
    }
  }
  return ansArr;
}

// Do not edit the line below.
exports.semordnilap = semordnilap;
 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//********************************** MEDIUM QUESTIONS ************************************** */
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//===============================27. THREE NUMBER SUM ======================================//
//TIME COMPLEXITY O(N^2) & SPACE COMPLEXITY O(N) 
/* ALGORITHM:
- CREATE NEW RESULT ARRAY AND THEN SORT MAIN ARRAY.
- ITERATE THE ARRAY FROM 0 TO LENGTH-2, AND ASSIGN LEFT = IDX + 1, RIGHT  = LENGTH - 1.
- WHILE LEFT < RIGHT, COUNT THE TOTAL WITH ARRAY CURRENT VAL + LEFT + RIGHT.
- IF THE TOTAL IS EQUAL TO TARGET VALUE THEN PUSH THE ALL THREE ELEMENT TO THE RESULT ARRAY.
- ELSE IF TOTAL IS LESS THAN THE TARGET THEN, INCREASE LEFT POINTER.
- ELSE IF TOTAL IS GREATER THAN THE TARGET THEN, DECREASE RIGHT POINTER.
- LAST RETURN RESULT ARRAY.
 */

/* function threeNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a,b) => a - b);
  const resultArr = [];

  for(let num = 0; num < array.length - 2; num++ ){
    let left = num + 1;
    let right = array.length - 1;
    while(left < right){
      const Total = array[left] + array[right] + array[num];
      if( Total === targetSum){
        resultArr.push([array[num], array[left], array[right]]);
        left++;
        right--;
      }else if(Total < targetSum){
        left++;
      }else if(Total > targetSum){
        right--;
      }
    }
  }
  return resultArr;
}
*/

//===============================28. SMALLEST DIFFERENCE ======================================//
//TIME COMPLEXITY O(nlog (n) + m log(m)) & SPACE COMPLEXITY O(1)
/*ALGORITHM : 
- SORT ARRAY ONE AND ARRAY TWO, CREATE 2 VARIABLE FIRST AND SECOND WITH INITIAL VALUE OF TWO ARRAYS.
- CREATE VARIABLE SMALLEST STORE INFINITY VAL, AND  CREATE NEW ARRAY TO STORE OUR RESULT.
- WHILE LOOK UNTILL THE FIRST AND SECOND LESS THAN LENGTH OF RESPECTIVE ARRAYS.
- CREATE TEMPSUM VARUIABLE TO STORE ABSOLUTE DIFFERENCE OF FIRST - SECOND VALUE OF ARRAY.
- IF TEMPSUM IS LESS THAN SMALLEST VALUE.
  - THEN ASSIGN TEMPSUM TO SMALLEST, AND ADD ARRAYONE FIRST AND ARRAYTWO SECOND VALUE TO THE RESULT ARRAY.
- IF FIRST > SECOND THEN INCREMENT THE SECOND ELSE INCREMENT THE FIRST VALUE.
- IN LAST RETURN THE RESULT ARRAY WITH TWO SMALLEST DIFFERENCE VALUE.
 */
/* 
function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a,b) => a - b);
  arrayTwo.sort((a,b) => a - b);
  let first = 0;
  let second = 0;
  let smallest = Infinity;
  let smallDiff= [];

  while(first < arrayOne.length && second < arrayTwo.length){
    
    var tempSum = Math.abs(arrayOne[first] - arrayTwo[second]); 

    if( tempSum  < smallest){
      smallest = tempSum;
      smallDiff = [arrayOne[first], arrayTwo[second]];
  }
    (arrayOne[first] > arrayTwo[second]) ? second++ : first++;
    
  }
  return smallDiff;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
 */

//=============================== 29. MOVE ELEMENT TO THE END ======================================//
//TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(1)
/*ALGORITHM:
- TAKE TWO POINTER LEFT WITH 0 AND RIGHT WITH LENGTH-1
- WHILE THE LEFT IS LESS THAN RIGHT
 - WHILE THE LEFT IS LESS THAN RIGHT AND RIGHT VALUE IS EQUAL TO THE toMove NUM THEN RIGHT--;
 - IF LEFT VALUE  IS EQUAL TO THE toMove VAL THEN CALL SWAP FUNCTION EITH THE LEFT, RIGHT AND ARRAY, AND INCREMENT LEFT POINTER.
 - (SWAP FUNCTION CREATE TEMP VARIABLE AND SWAPS THE LEFT AND RIGHT ELEMENT OF ARRAY)
- LAST RETURN ARRAY  
 */

/* unction moveElementToEnd(array, toMove) {
  // Write your code here.
  // Write your code here.
  let left = 0; 
  let right = array.length - 1;

  while(left < right){
    
    while ( left < right && array[right] === toMove ) right--; 
    if(array[left] === toMove) swap(left, right, array);
      left++; 
}
return array;
}

function swap(i, j, arr){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd; */



//=============================== 30. MONOTONIC ARRAY ======================================//
//TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(1)
/*ALGORITHM: 
- FIRST CREATE ISDECREASING AND ISINCREASING VARIABLE WITH INTIAL VALUE true.
- ITERATE TRHOUGH AN ARRAY
 - IF ARRAY CURRENT VALUE IS LESS THAN IT'S PREVIOUS VALUE THEN ASSING false TO ISINCREASING. 
 - IF ARRAY CURRENT VALUE IS GREATER THAN IT'S PREVIOUS VALUE THEN ASSIGN false TO ISDECREASING.
- LAST RETURN (ISDECREASING OR ISINCREASING).
 */

/* function isMonotonic(array) {
  // Write your code here.
  let isDecreasing = true;
  let isIncreasing = true;

  for(let num = 1; num < array.length; num++){
    if(array[num] < array[num - 1]) isIncreasing = false;
    if(array[num] > array[num - 1]) isDecreasing = false;
  }
  return (isDecreasing || isIncreasing);
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic; */


//=============================== 31. SPIRAL TRAVERSE ======================================//
//TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(n)
/*ALGORITHM:

 */
/* 
function spiralTraverse(array) {
  // Write your code here.
  const result = [];
  let startRow = 0, endRow = array.length - 1;
  let startCol = 0; endCol = array[0].length - 1;

  while(startRow <= endRow && startCol <= endCol){
    for(let col = startCol ; col <= endCol ; col++){
      result.push(array[startRow][col]);
    }
     for(let row = startRow + 1 ; row <= endRow; row++ ){
       result.push(array[row][endCol]);
     }
      for(let col = endCol - 1; col >= startCol; col--){
        if(startRow === endRow) break;
        result.push(array[endRow][col])
      }
      for(let row = endRow -1 ; row > startRow; row--){
        if(startCol === endCol) break;
        result.push(array[row][startCol]);
      }
    
    startRow++;
    endRow--;
    startCol++;
    endCol--;   
  }
  return result;
}

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
 */

//=============================== 32.ARRAY PRODUCT - EXCEPT ITSELF  ======================================//
//TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(n)
/*ALGORITHM:
 - FIRST CREATE NEW RESULT ARRAY WITH THE SAME LENGTH OF ARRAY AND FILL WITH 1 
 & CREATE PRODUCT VARIABLE WITH INITIAL VALUE 1.
 - ITERATE THROUGH ARRAY AND ASSIGN PRODUCT TO THE CURRENT RESULT ARR VALUE, 
 AND ASSIGN THE PRODUCT OF CURRENT ARRAY VAULE AND PRODUCT, TO PROD.
 - THEN AGAIN MAKE PRODUCT INTIALLY 1.
- ITERATE THROUGH ARRAY IN REVERSE ORDER, AND ASSIGN PRODUCT OF CURRENT RESULT VALUE && PRODUCT, TO THE CURRENT RESULT ARR VALUE. 
 ALSO ASSIGN PRODUCT OF CURRENT ARRAY VALUE AND PRODUCT VALUE TO THE PRODUCT.
- IN LAST RETURN THE RESULT ARR.

 */
/* function arrayOfProducts(array) {
  // Write your code here.
  let result = new Array(array.length).fill(1);

  let product = 1;
  for(let i in array){
    result[i] = product;
    product *= array[i];
  }

  product = 1;
  for(let i = array.length -1; i > -1; i--){
    result[i] *= product;
    product *= array[i];
  }

  return result;
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;
 */

//=============================== 33. FIRST DUPLICATE VALUE ======================================//
//TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(1)
/* ALGORITHM:
- CREATE HASH SET  TO STORE UNIQUE VALUES. 
- ITERATE THROUGH ARRAY, IF SET HAS THE CURRENT VALUE OF ARRAY ALREADY THEN IMMIDIATLY RETURNS THE CURRENT VAL.
- ELSE ADD CURRENT VALUE TO THE SET.
- LAST THER IS NO DUPLICATE VALUE THEN RETURN -1;
 */
/* function firstDuplicateValue(array) {
  // Write your code here.

  const set = new Set();
  for(let num of array){
    if(set.has(num)) return num;
    set.add(num);
  }
  return -1;
}

// Do not edit the line below. 
exports.firstDuplicateValue = firstDuplicateValue;
*/

//=============================== 34. MERGE OVERLAPPING INTERVAL ======================================//
//TIME COMPLEXITY O(nlog(n)) & SPACE COMPLEXITY O(n)
/* ALGORITHM:
- FIRST SORT INTERVAL WITH RESPECT TO THEIR STARTING VALUES. TAKE 2 VARIABLE CURRENT AND NEXT WIITH INITAL VALUES 0 AND 1.
- WHILE NEXT < ARRLENGTH
- IF CHECK WHETHER THE LAST ELEMENT OF THE FIRST INTERVAL OVERLAPS WITH THE FIRST ELEMENT OF THE
  NEXT INTERVAL.
  - THEN LAST MAXIMUM ELEMENT TO SET AT THE VALUE OF OVERLAPPED INTERVAL 
  - AND MERGE THAT OVERLAP.
- ELSE INCREASE THE COUNTER FOR THE NEXT ELEMENT OF CURRENT AND NEXT VALUE.
- LAST RETURN ARRAY.
 */
/* 
function mergeOverlappingIntervals(array) {
  // Write your code here.
  array.sort((a,b) => a[0] - b[0]);

  let current = 0;
  let next = 1;
  while(next < array.length){
    //check condition whether the last element of the first interval overlaps with the 
    // first element of the next interval
    if(array[current][1] >= array[next][0]){
      //last maximum element to set at the value of overlapped interval
      array[current][1] = Math.max(array[current][1] , array[next][1]);
      //to merge elements that overlap
      
      array.splice(next, 1);
  
  
       } else{
      //else increase the counter for the next elements
               current++;
               next++;
       }
      
    }

    return array;
  }
// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;
 */

//=============================== 35. ZERO SUM SUBARRAY ======================================//
//TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(n)
/*ALGORITHM:
- CREATE SET TO STORE THE UNIQUE VALUE AND CREATE COUNT VARIABLE WITH INITIALLY 0.
- ITERATE THROUGH NUMS ARRAY. 
 - ADD COUNT TO SET THEN COUNT += NUM(CURRRENT VALUE OF ARRAY)
 - IF SET HAS COUNT THEN RETURN true.
 - ELSE ADD COUNT TO THE SET.
- IN LAST IF NOT FOUND THE SUBARRAY WITH THE ZERO SUM RETURN false 
 */
/* 
function zeroSumSubarray(nums) {
  // Write your code here.
  //create set to add unique values.
  let set = new Set();
  //take count to calculate the sum of numbers.
  let count  = 0;

  for(let num of nums){
    //add  0 to set 
    set.add(count);
    //add num to count
    count += num;
    //if the count is already in the set means 0 = 0 then return true we got sum = 0;
    if(set.has(count)) return true;

    //else add the count
    set.add(count);
  }
  //if there is not elements which can sums = 0 returns false. 
  return false;
}

// Do not edit the line below.
exports.zeroSumSubarray = zeroSumSubarray;
 */

//=============================== 36. BST CONSTRUCTION ======================================//
  // Average: O(log(n)) time | O(log(n)) space
  // Worst: O(n) time | O(n) space

// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
/* class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if(value < this.value){
      if(this.left === null){
        this.left = new BST(value);
      }else{
        this.left.insert(value);
      }
    }else{
      if(this.right === null){
        this.right = new BST(value)
      }else{
        this.right.insert(value);
      }
      // Write your code here.
    // Do not edit the return statement of this method.
    return this;
      }
  }

  contains(value) {
    // Write your code here.
    if(value < this.value){
      if(this.left === null){
        return false;
      }else{
        return this.left.contains(value);
      }
    }else if(value > this.value){
      if(this.right === null){
        return false;
      }else{
        return this.right.contains(value);
      }
    }else{
      return true;
    }
  }


  remove(value, parent = null) {
    if(value < this.value){
      if(this.left !== null){
        this.left.remove(value, this);
      }
    }else if(value > this.value){
      if(this.right !== null){
        this.right.remove(value, this);
      }
    }else{
      if(this.left !== null && this.right !== null){
        this.value = this.right.getMinValue();
        this.right.remove(this.value, this);
      }else if(parent === null){
        if(this.left !== null){
          this.value = this.left.value;
          this.right= this.left.right;
          this.left = this.left.left;
        }else if(this.right !== null){
          this.value = this.right.value;
          this.left= this.right.left;
          this.right = this.right.right;
         }else{
          
         }
        }else if(parent.left === this){
        parent.left =this.left !== null? this.left : this.right;
        }else if(parent.right === this){
      parent.right =this.right !== null? this.right : this.left;
      }
    }
   
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }
    
 getMinValue(){
      if(this.left === null){
        return this.value;
      }else{
        return this.left.getMinValue();
      }
    }
}

// Do not edit the line below.
exports.BST = BST;
 */

//=============================== 37. BST VALIDATION ======================================//
//TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(d)

/* // This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  // Write your code here.
  return DFS(tree, -Infinity , Infinity)
}

function DFS(node, minVal, maxVal){
  if(node === null) return true;
  if(node.value < minVal || node.value >= maxVal){
    return false;
  }
  return DFS(node.left, minVal, node.value) && DFS(node.right, node.value, maxVal);
}

// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;
 */


//=============================== 38. BST TRAVERSAL ======================================//
//TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(n)

/* 
function inOrderTraverse(tree, array) {
  // Write your code here.
  if(tree){
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array)
  }
  return array;
}

function preOrderTraverse(tree, array) {
  // Write your code here.
  if(tree){
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
  }
  return array;
  
}

function postOrderTraverse(tree, array) {
  // Write your code here.
  if(tree){
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
  }
  return array;
}

// Do not edit the lines below.
exports.inOrderTraverse = inOrderTraverse;
exports.preOrderTraverse = preOrderTraverse;
exports.postOrderTraverse = postOrderTraverse;
 */

//=============================== 39. MIN HEIGHT BST ======================================//
//TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(n)
/* 
function minHeightBst(array) {
  // Write your code here.
  return minHeightBST(array, 0, array.length - 1);
}

function minHeightBST(arr, startIdx,  endIdx){
  if(endIdx < startIdx) return null;

  const midIdx = Math.floor((endIdx + startIdx) / 2);
  let bst = new BST(arr[midIdx]);

  bst.left = minHeightBST(arr, startIdx, midIdx - 1);
  bst.right = minHeightBST(arr, midIdx + 1, endIdx);
  return bst;
  
}
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// Do not edit the line below.
exports.minHeightBst = minHeightBst;
 */

//=============================== 40. FIND KTH LARGEST ELEMENT IN BST ======================================//
//TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(h) where h is the height of the BST
/* 
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k, count = [0]) {
  // Write your code here.
  // Check if the current node is null, in which case return null
  
  if(!tree) return null;

  // Check the right subtree of the current node to see if the kth largest value is present there
  const right = findKthLargestValueInBst(tree.right, k, count);
  // If the right subtree returns a non-null value, return it.

  if(right) return right;

  // Increment the count as the current node is being processed

  count[0] += 1;

       // If the count is equal to k, return the value of the current node

      if (count[0] === k) return tree.value;

      // If the kth largest value is not found in the right subtree, check the left subtree
    return  findKthLargestValueInBst(tree.left, k,  count);
  
}

// Do not edit the lines below.
exports.BST = BST;
exports.findKthLargestValueInBst = findKthLargestValueInBst;
 */


//=============================== 41. MAX SUBSET SUM NO ADJACENT  ======================================//
//TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(1)

/* function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
  // Check if the array is empty or has only one element
if(!array.length)  return 0;
  if(array.length === 1 ) return array[0];

  let second = array[0];
  let first = Math.max(array[0], array[1]);
   // Iterate over the array, starting from the third element
  for(let idx = 2; idx < array.length; idx++){
    let curr = Math.max(first, second + array[idx]);
    second = first;  // second is updated to be the previous first
    first = curr; // first is updated to be the current maximum sum ending with the current element
  }
  return first;
}

// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent; 
*/


//=============================== 42. NUMBER OF WAYS TO MAKE CHANGE ======================================//
//TIME COMPLEXITY O(n d) & SPACE COMPLEXITY O(n)
/* 
function numberOfWaysToMakeChange(n, denoms) {
  // Write your code here.
  // Create an array of `ways` to store the number of ways to 
  //make change for each value from 0 to n
  const  ways  = new Array(n+1).fill(0);
  
  // Initialize the first element of the array to 1
  ways[0] = 1;
   // Iterate over the denominations
  for(let denom of denoms){
     // Iterate over the values from 1 to n
    for(let amt = 1;  amt < n + 1 ; amt++){
      // If the current denomination is less than or equal to the current value, add the number of 
      //ways to make change for the remaining value to the current position.
      if(denom <= amt){
        ways[amt] += ways[amt - denom];
      }
    }
  }
  return ways[n];
}

// Do not edit the line below.
exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;
 */

//=============================== 43. MIN NUMBER OF COINS FOR CHANGE ======================================//
//TIME COMPLEXITY O(n d) & SPACE COMPLEXITY O(n)
/* 
function minNumberOfCoinsForChange(n, denoms) {
  // Write your code here.

  const ways = new Array(n+1).fill(Infinity);

  ways[0] = 0;

    for(const denom of denoms){
       for(let amt = 0;  amt < ways.length; amt++){
      if( denom <= amt){
        ways[amt] = Math.min(ways[amt], ways[amt - denom] + 1)
      }
  
    }
    
  }

 return ways[n] !== Infinity ?  ways[n] : -1
  
}

// Do not edit the line below.
exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;
 */

//=============================== 44. ======================================//
//TIME COMPLEXITY O(n d) & SPACE COMPLEXITY O(n)