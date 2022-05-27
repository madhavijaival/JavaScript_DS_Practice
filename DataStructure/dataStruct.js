//==========================================================================//
/*
const nemo = ['nemo'];
function find(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log("Found NEMO!")
    }
    let t1 = performance.now();
    console.log("Calling nemo took " + (t1 - t0) + " ms time")
  }
}
find(nemo); */
/*
//===============================================================//

const boxes = [1, 2, 3, 4, 5];

function pairsOfNumber(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

pairsOfNumber(boxes);
 */

//*************************************************************************//
/*
const array1=['a', 'b','c','d'];
const array2 =['e','f','g'];
const array1= [1, 2, 4, 6];
const array2=[7, 8, 9, 2];

function arrayEqualValue(arr1, arr2)
{
  for (let i =0; i<arr1.length; i++){
    for (let j=0; j<arr2.length; j++){
      if (arr1[i] === arr2[j]){
        return true;
      }
    }
  }
  return false;
}

let ans = arrayEqualValue(array1, array2);
console.log(ans) */

// ****This code need O(n^2) time complexity******//
//================================================//


/* const array2 =['e','f','g'];
const array1=['a', 'b','c','e'];

function chechSimilarity(arr1, arr2){
    let map={};
  for (let i=0;i<arr1.length; i++){
    if (!map[i]){
      const item =arr1[i];
      map[item]= true;
    }
  }
  for (let j =0 ;j<arr2.length; j++){
    if (map[arr2[j]]){
      return true;
    }
  }
  return false;

}
const ans = chechSimilarity(array1, array2)
console.log(ans);
*/
//*****Time Complexity of this fucntion is O(n+n)****//
//================================================================//
/*
const array2 =['e','f','g'];
const array1=['a', 'b','c','p'];
function isSimilarElement(arr1, arr2){
 return arr1.some(item => arr2.includes(item))

}
const result = isSimilarElement(array1, array2);
console.log(result)

*/
//****Time complexity of this code it O(a+1)*****//
//****Space complexity O(1)******//

//======================================================================//

//*****************************************************************
//*****Find some of the number equal from te array element*****//
//**************************************************************** *

/* const array1 = [3, 4, 6, 7, 2, 1]
const sum = 13;

 function checkSumNumbers(arr1, num){
  for (let i = 0; i<arr1.length; i++){
    for (let j= i+1; j<arr1.length; j++){
      if (arr1[i] +arr1[j] === num){
        return true;
      }

    }
  }
  return false;
}
const result= checkSumNumbers(array1, sum)
  console.log(result); */
//===============================================================//

/*
const array1 = [3, 4, 6, 7, 2, 1]
const sum = 13;

function checkSumNumbers(arr1, num){
  const newArr =arr1.sort();
  let r =arr1.length-1;
  let l = 0;
  while (newArr[l] < newArr[r]){
    let cursum = arr1[l] +arr1[r];
    if(cursum === num){
      return true;
    }
    else if(cursum > num){
      r -=1;
    }
    else if(cursum<num){
      l +=1;
    }

  }
  return false;
}
const result= checkSumNumbers(array1, sum)
console.log(result); */
//=============================================================================//
//*********BruteForse**********//

/*
const array1 = [3, 4, 6, 7, 2, 1]
const sum = 13;

 let checkSumNumbers = (arr1, num)=>{
  let arr2 =[]
   for (let i = 0; i<arr1.length; i++){
    for (let j= i+1; j<arr1.length; j++){
       if (arr1[i] +arr1[j] === num){
        arr2.push(arr1[i], arr1[j])
      }
    }
  }
  return arr2;
}
const result= checkSumNumbers(array1, sum)
console.log(result);
*/
//===========================================================================/===/

//**********************************************
//ARRAY CREATION UUNDER THE HOOD//
//************************************************
/* class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index]
  }
  push(item) {
    this.data[this.length] = item;
    this.length++
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1]
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shifItems(index);
  }

  shifItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

}
const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.delete(2);
newArray.push('are');
newArray.push('cute');
newArray.delete(0);

console.log(newArray);

 */

//===========================================================================///

//*************************************** 
//Reverse a String//

//************************************* 
//Madhavi
//Result - ivadhaM

const string = 'madhavi'

function reverseString(str) {
  // Step 1. Create an empty string that will host the new created string
  var newStr = "";
  // Step 2. Create the FOR loop
  /* The starting point of the loop will be (str.length - 1) which corresponds to the 
     last character of the string, "i"
     As long as i is greater than or equals 0, the loop will go on
     We decrement i after each iteration */

  for (let i = str.length - 1; i >= 0; i--) {

    newStr += str[i];

  }
  /* Here hello's length equals 5
      For each iteration: i = str.length - 1 and newString = newString + str[i]
      First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
      Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
      Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
      Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
      Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
  End of the FOR Loop*/

  // Step 3. Return the reversed string

  return newStr;
}

const result = reverseString(string)
console.log(result);


/**************USNING BILT IN METHODS********* */
/* const divide = str.split('');
 console.log(divide);
 const reverse = divide.reverse();
 console.log(reverse);
 const answer = reverse.join('');
 console.log(answer); */
/******************************************** */