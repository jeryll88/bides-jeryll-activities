// ==================== LOGOUT FUNCTION ====================
function logout() {
    if (confirm("Are you sure you want to logout?")) {
        sessionStorage.removeItem("auth");
        window.location.replace("login.html");
    }
}

// ==================== GENERATE EMPLOYEE ID ====================
function generateEmployeeID() {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    let total = employees.length + 1;

    let group = Math.ceil(total / 10);
    let position = total % 10;
    if (position === 0) position = 10;

    let groupFormatted = group.toString().padStart(3, '0');
    let positionFormatted = position.toString().padStart(2, '0');

    return `E${groupFormatted}-${positionFormatted}`;
}

// ==================== ADD NEW EMPLOYEE ====================
function addEmployee(name, status) {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    let newEmployee = {
        id: generateEmployeeID(),
        name: name,
        status: status
    };

    employees.push(newEmployee);
    localStorage.setItem("employees", JSON.stringify(employees));

    // Reload dashboard stats
    loadEmployeeStats();
}

// ==================== LOAD DASHBOARD DATA ====================
document.addEventListener("DOMContentLoaded", function() {
    loadEmployeeStats();
    loadActivities();
});

// ==================== EMPLOYEE STATISTICS ====================
function loadEmployeeStats() {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    let active = 0;
    let permanent = 0;
    let temporary = 0;
    let separated = 0;

    employees.forEach(emp => {
        if (emp.status === "Active") active++;
        if (emp.status === "Permanent") permanent++;
        if (emp.status === "Temporary") temporary++;
        if (emp.status === "Separated") separated++;
    });

    document.getElementById("activeCount").textContent = active;
    document.getElementById("permanentCount").textContent = permanent;
    document.getElementById("temporaryCount").textContent = temporary;
    document.getElementById("separatedCount").textContent = separated;
}

// ==================== LOAD RECENT ACTIVITIES ====================
function loadActivities() {
    let activities = JSON.parse(localStorage.getItem("activities")) || [];
    const table = document.getElementById("recentActivities");

    table.innerHTML = "";

    if (activities.length === 0) {
        table.innerHTML = `
            <tr>
                <td colspan="4">No recent activities yet</td>
            </tr>
        `;
        return;
    }

    activities.slice().reverse().forEach((act, index) => {
        table.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${act.activity}</td>
                <td>${act.employee}</td>
                <td>${act.date}</td>
            </tr>
        `;
    });
}

// ==================== DELETE ALL ACTIVITIES ====================
function clearActivities() {
    if (confirm("Delete all recent activities?")) {
        localStorage.removeItem("activities");
        loadActivities();
    }
}

// ==================== ADD ACTIVITY ====================
function addActivity(activityText, employeeName) {
    let activities = JSON.parse(localStorage.getItem("activities")) || [];

    let newActivity = {
        activity: activityText,
        employee: employeeName,
        date: new Date().toLocaleString()
    };

    activities.push(newActivity);
    localStorage.setItem("activities", JSON.stringify(activities));

    loadActivities();
}