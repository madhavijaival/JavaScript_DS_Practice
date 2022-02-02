
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

// for (i = 1; i <= 20; i += 2) {
//     console.log(i);
// }

for (i = 100; i >= 0; i -= 10) {
    console.log(i);
}