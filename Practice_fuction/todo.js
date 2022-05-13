
let input = prompt("What would you like to do?")
const todos = ['collect eggs']

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log("*****************************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("*****************************");

    } else if (input === 'new') {
        const newText = prompt('Ok, What you want to add new?')
        todos.push(newText);
        console.log(`${newText} added to your list`)

    } else if (input === 'delete') {
        const index = parseInt(prompt(`what index you want to delete`))
        if (index < todos.length) {
            if (!Number.isNaN(index)) {
                const deleted = todos.splice(index, 1);
                console.log(`Ok,deleted ${deleted[0]}`);
            } else {
                console.log('Unknown Index');
            }
        } else {
            console.log("enter valid index number")
        }
    }


    input = prompt("What would you like to do?");
}
console.log("OK QUIT THE APP!")


