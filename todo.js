let task_list = [];

function renderTaskList () {
	let list = document.getElementById("tasklist");
	
	list.innerHTML = "";
	for (let i = 0; i < task_list.length; i++){
		list.innerHTML += "<li>"+ task_list[i] +"button type =\"button"
	}
	let buttons = document.querySelectorAll("button");
	
	for (let i = 0; i < buttons.length; i++){
	//console.log(buttons[i]);
	buttons[i].addEventListener("click",function(){
		console.log(i);
		task_list.splice(i, 1);
		buttons[i].parentElement.remove();
		
	});
	
	}
}
let button_add = document.getElementById("add");

button_add.addEventListener("click",function(){
	let tarea = document.getElementById("tarea");
	
	task_list.push(tarea.value);
	
	tarea.value = "";
	tarea.focus();
	console.log(task_list.value);
	
	renderTaskList();
});