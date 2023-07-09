// ToDo List 
// New - Add a ToDo
// List - List all ToDos
// Delete - Remove specific ToDo
// Quit - Quit app

const validOptions = ["new", "list", "delete", "quit"];
let toDo = [];

while (true) {
    userInput = prompt("What would you like to do?");

    if (userInput === null) {
        break;
    }

    userInput = userInput.toLowerCase();

    switch (userInput) {
        case "new":
            addListValue = prompt("Enter an item for your to do list");
            if (addListValue !== null) {
                addListValue = addListValue.toLowerCase();
                toDo.push(addListValue);
                console.log(addListValue,"added to the list");
            }
            break;

        case "list":
            console.log("********");
            toDo.forEach((element, index) => {console.log(`${index}: ${element}`);});
            console.log("********");
            break;
        
        case "delete":
            deleteListValue = parseInt(prompt("What item index do you want to delete"));
            if (!isNaN(deleteListValue)) {
                toDo.splice(deleteListValue, 1);
                console.log("List item", deleteListValue,"has been removed");
            }
            break;
        
        case "quit":
            alert("You have left the list maker")
            break;
        
        default:
            alert("Invalid entry")

    }

    if (userInput === "quit") {
        break;
    }
}