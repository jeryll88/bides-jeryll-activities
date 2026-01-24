function register() {
<<<<<<< HEAD
    const username  = document.getElementById('username').value;
    const password  = document.getElementById('password').value;
    const cpassword  = document.getElementById('cpassword').value;
    const fname  = document.getElementById('fname').value;

    const error = document.getElementById('error');
if ((username == "") || (password == "") || (cpassword == "") || (fname == "")){
=======
 const username = document.getElementById('username').value;
 const password = document.getElementById('password').value;
 const cpassword = document.getElementById('cpassword').value;
 const fname = document.getElementById('fname').value;

 const error = document.getElementById('error');
if ((username == "") || (password == "") || (cpassword == "") || (fname == "")) {
>>>>>>> 54dd04ccde11f2782a8d32e3a9d992f15c651250
    error.innerHTML = "Fill all fields";
    error.style.color = "blue";
    error.style.backgroundColor = "beige";
    error.style.visibility = "visible";
<<<<<<< HEAD
    error.style.borderLeft = "5px solid blue"
    error.style.borderRight = "5px solid blue"

}
else if (password !== cpassword) {
=======
    error.style.borderLeft = "5px solid blue";
    error.style.borderRight = "5px solid blue";

}

else if (password !== cpassword){
>>>>>>> 54dd04ccde11f2782a8d32e3a9d992f15c651250
    error.innerHTML = "Password Mismatch";
    error.style.color = "red";
    error.style.backgroundColor = "beige";
    error.style.visibility = "visible";
<<<<<<< HEAD
    
=======

>>>>>>> 54dd04ccde11f2782a8d32e3a9d992f15c651250
}
else {
    error.innerHTML = "Registration Successful";
    error.style.color = "green";
    error.style.visibility = "visible";
    error.style.backgroundColor = "beige";
    error.style.borderLeft = "5px solid green";
    error.style.borderRight = "5px solid green";
}
<<<<<<< HEAD
=======

>>>>>>> 54dd04ccde11f2782a8d32e3a9d992f15c651250
}