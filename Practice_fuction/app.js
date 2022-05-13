
// let random = Math.random();
// if (random < 0.5) {
//     console.log("Your no is less than 0.5!!!")

// } else {
//     console.log("Your no is greater than 0.5!!!")

// }
// console.log(random);

/* if else conditional statement*/

// let age = prompt("Type a number");

// if (age < 5) {
//     console.log("Baby don't need to pay.")
// } else if (age < 10) {
//     console.log("You are a child. you pay $10")

// } else if (age < 65) {
//     console.log("You are a adult. you pay $20")
// }
// else {
//     console.log("you are senior. you pay $10")
// }


/* exercise only */

// const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :)

// // DO NOT TOUCH ANYTHING BELOW (please)
// if (num <= 100) {
//     if (num >= 50) {
//         console.log("HEY!");
//     }
// } else {
//     if (num < 103) {
//         if (num % 2 === 0) {
//             console.log("YOU GOT ME!");
//         }
//     }
// }

/* switch statement practice */
/*
const day = 3;
switch (day) {
    case 1:
        console.log("Monday!");
        break;
    case 2:
        console.log("Tuesday!");
        break;
    case 3:
        console.log("Wednesday!");
        break;
    case 4:
        console.log("Thursday!");
        break;
    case 5:
        console.log("Friday!");
        break;
    case 6:
        console.log("Saturday!");
        break;
    case 7:
        console.log("Sunday!");
        break;

    default:
        console.log("Invalid day entered");

}
*/

/***For loops***/
// for (let i = 1; i <= 20; i += 2) {
//     console.log(i);
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }
//================Nested  for loop=================//

// const seatingChart = [
//     ['Rina', 'Rekha', 'Madhu', 'Kiran'],
//     ['George', 'kevin', 'Ritesh', 'Ron'],
//     ['Reva', 'Rinky', 'Dips', 'Nayu']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i]
//     console.log(`Row ${i + 1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }
//==================================//
//=======Other way using for..of==============//

// for (let row of seatingChart) {
//     for (let students of row) {
//         console.log(students);
//     }
// }
//==========================================//

//==============While Loop=====================//
// let num = 0;

// while (num < 10) {

//     console.log(num);
//     num++;
// }

// const secretKey = "Hippo"

// let guess = prompt("Enter the Secret key here.....");
// while (guess !== secretKey) {
//     guess = prompt("Please enter correct key...")
// }
// console.log("Hey.... You got the secret here")

// let input = prompt("Type something you want..")

// while (true) {
//     input = prompt(input);
//     if (input === "stop copying me")
//         break;
// }
// console.log("OK. YOU WIN!")
//================================================================//
//=========================Guessing game==========================//
/*

let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum) {
    maximum = parseInt(prompt("Enter the valid number"))
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter you first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high enter new guess:");
    } else {
        guess = prompt("Too low enter new guess:");
    }
}
if (guess === 'q') {
    console.log("YOU QUIT GAME")
} else {
    console.log(`CONGRATES`);
    console.log(`You got correct after ${attempts} guesses`);
}
*/
//==================================================================//
//=================================================================//
 //===================for....of =loop=======================//
// const listGoogle = ['Song', 'Video', 'Youtube', 'Pictures']

// for (let i = 0; i < listGoogle.length; i++) {

//     console.log(`The list of websearch of Google / ${listGoogle[i]}`)
// }

// for (let list of listGoogle) {
//     console.log(list);
// }
//**********************************************************// 