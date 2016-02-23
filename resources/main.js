/* Maxtro Connection main.js */
/* This javascript is used for the main pages for Maxtro Connection */

//Following functions provide the user with a custom onfocus color
function colorChange(obj){
	obj.style.borderColor = "#cccccc";
};
function colorReset(obj){
	obj.style.borderColor = "#000000";
};

//Following functions provide dynamic and real time user input validation
function inputCheck(obj, frm){
	if(frm == "fn"){
		if(/\W/.test(obj.value) || /\d/.test(obj.value)){
			document.getElementById("first-name").innerHTML = "Please enter a valid name. No special characters allowed.";
			obj.style.borderColor = "#FF0000";
		}else if(obj.value.length > 25){
			document.getElementById("first-name").innerHTML = "Please enter a valid name. Must be less than 25 letters.";
			obj.style.borderColor = "#FF0000";
		}else{
			document.getElementById("first-name").innerHTML = "";
			obj.style.borderColor = "#000000";
		}
	}else if(frm == "usr"){
		if(obj.value.length > 35){
			document.getElementById("username").innerHTML = "Please enter a valid username. Must be less than 35 characters.";
			obj.style.borderColor = "#FF0000";
		}else{
			document.getElementById("username").innerHTML = "";
			obj.style.borderColor = "#000000";
		}
	}else if(frm == "em"){
		if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(obj.value)){
			if(obj.value != ""){
				document.getElementById("email").innerHTML = "Please enter a valid email.";
				obj.style.borderColor = "#FF0000";
			}else{
				document.getElementById("email").innerHTML = "";
				obj.style.borderColor = "#000000";
			}
		}else{
			document.getElementById("email").innerHTML = "";
			obj.style.borderColor = "#000000";
		}
	}
};
