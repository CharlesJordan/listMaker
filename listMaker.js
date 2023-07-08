// ToDo List 
// New - Add a ToDo
// List - List all ToDos
// Delete - Remove specific ToDo
// Quit - Quit app

const validOptions = ["new", "list", "delete", "quit"];
let toDo = [];

while (true) {
    userInput = prompt("What would you like to do?").toLowerCase();

    if (userInput === "new") {
        addListValue = prompt("Enter an item for your to do list").toLowerCase();
        toDo.push(addListValue);
        console.log(addListValue,"added to the list")
    } else if (userInput === "list") {
        console.log("********");
        toDo.forEach((element, index) => {console.log(`${index}: ${element}`);});
        console.log("********");
    } else if (userInput === "delete") {
        deleteListValue = parseInt(prompt("What item index do you want to delete"));
        toDo.splice(deleteListValue);
        console.log("List item", deleteListValue,"has been removed");
    } else if (userInput === "quit") {
        alert("You have left the list maker")
        break;
    } else {
        alert("Invalid entry")
    } }
    