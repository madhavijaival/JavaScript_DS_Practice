
//***************************************
//1. Reverse a String//

//*************************************
//Madhavi
//Result - ivadhaM
/*
const string = 'madhavi'

function reverseString(str) {
    // Step 1. Create an empty string that will host the new created string
    var newStr = "";
    // Step 2. Create the FOR loop
    /* The starting point of the loop will be (str.length - 1) which corresponds to the
       last character of the string, "i"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */

// for (let i = str.length - 1; i >= 0; i--) {

//     newStr += str[i];

// }
/* Here hello's length equals 5
    For each iteration: i = str.length - 1 and newString = newString + str[i]
    First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
    Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
    Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
    Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
    Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
End of the FOR Loop*/

// Step 3. Return the reversed string

//     return newStr;
// }

// const result = reverseString(string)
// console.log(result);

//  */
/*************2. USNING BILT IN METHODS ******** */
/* const divide = str.split('');
 console.log(divide);
 const reverse = divide.reverse();
 console.log(reverse);
 const answer = reverse.join('');
 console.log(answer); */
/******************************************** */


//*************3. ANOTHER WAY USING ARRAY METHOD*************** */
/*
const string = 'madhavi'

function reverseString3(str) {
    if (!str && str < 2 && typeof str !== "String") {
        return false;
    }

    const backword = [];
    const Itemlength = str.length - 1;
    for (let i = Itemlength; i >= 0; i--) {

        backword.push(str[i]);
    }

    return backword.join("");

}
const result = reverseString3(string)
console.log(result); */

//=====================================================================//