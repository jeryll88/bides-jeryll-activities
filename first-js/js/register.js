function register() {
 const username = document.getElementById('username').value;
 const password = document.getElementById('password').value;
 const cpassword = document.getElementById('cpassword').value;
 const fname = document.getElementById('fname').value;

 const error = document.getElementById('error');
if ((username == "") || (password == "") || (cpassword == "") || (fname == "")) {
    error.innerHTML = "Fill all fields";
    error.style.color = "blue";
    error.style.backgroundColor = "beige";
    error.style.visibility = "visible";
    error.style.borderLeft = "5px solid blue";
    error.style.borderRight = "5px solid blue";

}

else if (password !== cpassword){
    error.innerHTML = "Password Mismatch";
    error.style.color = "red";
    error.style.backgroundColor = "beige";
    error.style.visibility = "visible";

}
else {
    error.innerHTML = "Registration Successful";
    error.style.color = "green";
    error.style.visibility = "visible";
    error.style.backgroundColor = "beige";
    error.style.borderLeft = "5px solid green";
    error.style.borderRight = "5px solid green";
}

}