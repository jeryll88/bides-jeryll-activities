function login() {
 const username = document.getElementById('username').value;
 const password = document.getElementById('password').value;
 const cpassword = document.getElementById('cpassword').value;
 const fname = document.getElementById('fname').value;

if ((username == "") || (password == "") || (cpassword == "") || (fname == "")) {
    alert ("Fill all");
}

else if (password !== cpassword){
    alert("Password Mismatch");
}
else {
    alert("login successful");
}

}