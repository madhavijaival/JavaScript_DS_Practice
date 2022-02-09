//===========================================================================//
//**************************FOREACH METHOD ***********************************/
/* 
const numbers = [1, 3, 4, 6, 7, 9, 19, 16, 15]

numbers.forEach(function (el) {

    console.log(el)

}) */
/* 

const movies = [
    {
        name: "bhag mika bhag",
        rating: "80"
    },
    {
        name: "dabangg",
        rating: "90"
    },
    {
        name: "Rannjhana",
        rating: "95"
    }
]
//===================MAP METHOD========================//
const arrayMovie = movies.map(function (title) {
    return title.name.toUpperCase()
})

 */
// movies.forEach(function (movie) {
//     console.log(`${movie.name} has ratings ${movie.rating}`);
// })
//===================================================================================//
//********************************************************************************** */
//==========================MAP METHOD=====================================//
const numbers = [1, 3, 4, 6, 7, 9, 19, 16, 15, 4, 5, 6, 7, 9]

const newArray = numbers.map(function (num) {
    return num * 5;

})
//******************************************************************************* */

