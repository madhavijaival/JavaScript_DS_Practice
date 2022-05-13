//===============================Map===========================================//

const movies = [{
    name: 'titanic',
    score: 45
},
{
    name: 'range',
    score: 56
},
{
    name: 'Gangubai',
    score: 80
},
{
    name: 'Beast',
    score: 90
}
]


const title = movies.map(function (movie) {
    return movie.name;                                    //normal function
})

// const title = movies.map(movie => {
//     return `${movie.name} - ${movie.score / 10} `        // Arrow function example
// })

// const title = movies.map(movie =>
//     `${movie.name} - ${movie.score / 10} `               //Implicit function example
// )


//===========Arrow Function============================//
const add = (x, y) => {
    let sum = x + y;
    return sum;

}

const addition = add(4, 5);
console.log(addition);


const square = x => {
    return x * x;
}

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }
//===============================================================//
//==============Implicit function================================//

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

//===================================================================//
//************Set Internval & SetTimeout &ClearInternval *************************  */


setTimeout(() => {
    console.log("Hello!!!!!!!");
}, 3000)

// const id = setInterval(() => {
//     console.log(Math.random());            //Id for clearInterval(id)
// }, 2000)

