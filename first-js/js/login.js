function login() {
    const username = document.getElementById('username').value; 
    const password = document.getElementById('password').value;

    const error = document.getElementById('error');
if ((username == "jeryll") && (password == "080806")){
    error.innerHTML = "Log in Succesful";
    error.style.color = "green";
    error.style.visibility = "visible";
    error.style.borderLeft = "5px solid green";
    error.style.borderRight = "5px solid green";

}
 else {
    error.innerHTML = "Invalid Credentials";
    error.style.color = "red";
    error.style.visibility = "visible";
    error.style.borderLeft = "5px solid red";
    error.style.borderRight = "5px solid red";
 }
}