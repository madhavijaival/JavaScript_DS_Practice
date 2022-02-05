//=========================================================//
//********************************************************* */
// function returnDay(num) {
//     if (num < 1 || num > 7) {
//         return null;
//     } else if (num === 1) {
//         return "Monday";
//     } else if (num === 2) {
//         return "Tuesday";
//     } else if (num === 3) {
//         return "Wendesday";
//     } else if (num === 4) {
//         return "Thursday";
//     } else if (num === 5) {
//         return "Friday";
//     } else if (num === 6) {
//         return "Saturday";
//     } else if (num === 7) {
//         return "Sunday";
//     }

// }
//************************************************************** */
//=================================================================//
//********************High Order Function ******************************/
//==================Function operates with other function======================//

/* function calculate(func) {
    func();
    func();
}
// function answers() {

//     console.log("I am the winner");

// }

function answers() {
    let a = 4, b = 6;
    let sum = a + b;
    console.log("I am the winner :", sum);

}
calculate(answers)
 */
//======================================================================//
//**********************************************************************/
//=================Returning a function ================================//
/* 
function makeMysteryFunc() {
    const rand = Math.random;
    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS YOU WIN");
            console.log("oK, YOU WIN...!");
        }
    } else {
        return function () {
            alert(" Please try again");
        }
    }
}

makeMysteryFunc() */