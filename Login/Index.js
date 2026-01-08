let usr = document.getElementById("usr");
let pass = document.getElementById("pass");
let loginForm = document.getElementById("loginForm");
let check = document.getElementById("check");


loginForm.addEventListener("submit", function (event) {
	event.preventDefault();

	let username = usr.value;
	let password = pass.value;

	let user = {
		username: username,
		password: password,
	};


	console.log(user);
	usr.value = "";
	pass.value = "";
});
check.addEventListener("change", function () {
    let getVal = pass.getAttribute("type");
    if(getVal === "password"){
        pass.setAttribute("type", "text");
    } else{
        pass.setAttribute("type", "password");
    }

});



