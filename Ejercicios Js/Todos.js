let input = prompt('what you would yo like to do?');
const todos=[];

while(input !== 'quit'){
    if(input === 'list'){
        console.log("lista");
        for (let i = 0; i < todos.length; i++) {
            console.log(i,todos[i]);
        }
    }
    else if (input === 'new') {
        const newTodo = prompt("What is the new todo?");
        todos.push(newTodo);
        console.log(newTodo," added");      
    }

    else if (input === 'delete') {
        const indexStr = parseInt(prompt("insert an index to delete"));
        if (!Number.isNaN(indexStr)){
            const deleted = todos.splice(indexStr, 1);
            console.log(deleted, "has been deleted");
        }else{
            console.log("Wrong index");
        }
        
    }

    input = prompt("what you would yo like to do?");
}

console.log("ok quit the app");