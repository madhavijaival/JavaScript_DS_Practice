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

//===============================================================//
//**************************************************************** */

/* function isBetween(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
} */

//================================================================//
//***************************METHOD****************************** */
//=====================ADDING METHOD TO AN OBJECTS ===============================//
/* const myMath = {
    Pi: 3.14159,
    square: function (num) {    //square (num)
        return num * num;
    },
    cube: function (num) {          //cube (num)
        return num ** 3;
    }
} */
//================================================================//
//*************************THIS KEYWORD****************************  */
/*
const Cat = {
    name: "Bella",
    color: "Brown ",
    habbit: "Playing",
    meow() {
        console.log(`${this.name} says meowwwwwwww!!!!!!`);
    },
};

const meow2 = Cat.meow; */

//===================================================================//
//===================================================================//

/* const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return "EGG";
    },
}; */
//====================================================================//
//****************************TRY CATCH**************************** */
/* function addition(sent) {
    try {
        console.log(sent.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e);
        console.log("please enter valid string");
    }
} */

//=============================Arrow Functions==============================//


// const square = function (a) {
//     return a * a;
// }

const square = (a) => {
    return a * a;
}

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}