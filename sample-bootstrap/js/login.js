async function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    if (errorMsg) errorMsg.textContent = "";

    if (!username || !password) {
        if (errorMsg) errorMsg.textContent = "Please enter username and password";
        return;
    }

    try {
        const response = await fetch("http://localhost/api/login.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Invalid username or password");
        }

        sessionStorage.setItem("auth", "true");
        window.location.href = "dashboard.html";

    } catch (err) {
        if (errorMsg) errorMsg.textContent = err.message;
    }
}
