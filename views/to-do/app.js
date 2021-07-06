// To Do List App

const toDo = [];

let create = function(todo){
	if(todo !== ""){
		toDo.push(todo);
		console.log(`${todo} added to the list.`)
	}
	else console.log("Details can not be empty!")
};

let remove = function(index){
	if(index > -1){
		console.log(`${toDo.splice(index, 1)} removed from the list.`);
	}
	else console.log("Invalid Index !!!");
};

let list = function(){
	let i = 0;
	if(toDo.length === 0) {
		console.log("Your To Do List is Empty!");
	}
	else{
		console.log("==================================");
		console.log('Your To Do List :');
		for(let todo of toDo){
			console.log(`${i} : ${todo}`);
			i++;
		};
		console.log("==================================");
	}
};

let removeAll = function(){
	if(toDo.length !== 0){
		while(toDo.length !== 0){
			toDo.pop();
		};
		console.log("Removed All To Do's.");
	}
	else {
		console.log("Nothing to delete!");
	}
};

function main(){
	let userInput = prompt("Enter your choice: ");
	while(userInput !== null && userInput.toLowerCase() !== 'quit') {
		switch(userInput.toLowerCase()) {
			case 'new': create(prompt("Enter the details :"));
			break;
			
			case 'delete': if(toDo.length !== 0){
				remove(prompt("Enter the Index of the to do to delete : "));
			}
			else {
				console.log("Nothing To Delete!");
			}
			break;
			
			case 'list': list();
			break;
			
			case 'delete-all': removeAll();
			break;
			
			default: console.log("Invalid Input !!!");
		};
		userInput = prompt("Enter Your Choice : ");
	}
	console.log('Quitting...');
};

console.log("############## To Do List App ###############");
console.log("new - create a new to do");
console.log("delete - delete a specific to do");
console.log("list - display all to do's");
console.log("delete-all - delete all to do's");
console.log("quit - quit from the app");
console.log("#############################################");
