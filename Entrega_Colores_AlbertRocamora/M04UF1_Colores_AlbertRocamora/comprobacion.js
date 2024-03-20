let login_form = document.getElementById("login_form");
let pass_form = document.getElementById("pass_form");
let boton = document.getElementById("button_login_1");
let expresion = /"/;
let error = document.getElementById("error_login_user");

boton.addEventListener("click", haz_click);
function haz_click(){
	
	if(login_form.value.length < 4){
		alert("¡El nombre es muy corto!");
		login_form.style.color = "red";
	}
	
	if(pass_form.value.length < 6){
		alert("¡El password es muy corto!");
		pass_form.style.color = "red";
	}
	
	if(pass_form.value.length > 16){
		alert("¡El password es muy largo!");
		pass_form.style.color = "red";
	}	
	let error_login = expresion.test(login_form.value);
	
	
	console.log(error_login);
	if(error_login){
		error.innerHTML = "ERROR: ¡Estás usando carácteres prohibidos!";
		error.style.color = "red"
		login_form.style.color = "red";
	}
		
	else {
		error.innerHTML = "OKAY";
		error.style.color = "green"
	}
	


}
