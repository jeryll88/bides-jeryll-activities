function login() {
<<<<<<< HEAD
    const username = document.getElementById('username').value; 
    const password = document.getElementById('password').value;

    const error = document.getElementById('error');
if ((username == "jeryll") && (password == "080806")){
    error.innerHTML = "Log in Succesful";
=======
 const username = document.getElementById('username').value;
 const password = document.getElementById('password').value;


 const error = document.getElementById('error');
if
     ((username == "jeryll") && (password == "080806")) {
    error.innerHTML = "Log in Successful";
>>>>>>> 54dd04ccde11f2782a8d32e3a9d992f15c651250
    error.style.color = "green";
    error.style.visibility = "visible";
    error.style.borderLeft = "5px solid green";
    error.style.borderRight = "5px solid green";

<<<<<<< HEAD
}
 else {
=======
    
    
}

else {
>>>>>>> 54dd04ccde11f2782a8d32e3a9d992f15c651250
    error.innerHTML = "Invalid Credentials";
    error.style.color = "red";
    error.style.visibility = "visible";
    error.style.borderLeft = "5px solid red";
    error.style.borderRight = "5px solid red";
<<<<<<< HEAD
 }
=======

}

>>>>>>> 54dd04ccde11f2782a8d32e3a9d992f15c651250
}