// Get employee ID from URL
const urlParams = new URLSearchParams(window.location.search);
const empId = urlParams.get('id');

// Load employees from localStorage
let employees = JSON.parse(localStorage.getItem('employees')) || [];
const employee = employees.find(e => e.id == empId);

if(employee) {
    document.getElementById('empNumber').textContent = employee.id;
    document.getElementById('firstName').textContent = employee.firstName;
    document.getElementById('lastName').textContent = employee.lastName;

    if(employee.birthday){
        const date = new Date(employee.birthday);
        document.getElementById('birthday').textContent = date.toLocaleDateString();
    } else {
        document.getElementById('birthday').textContent = "-";
    }

    document.getElementById('status').textContent = employee.status;

    // Save current employee to localStorage for Trainings page
    localStorage.setItem('currentEmployee', JSON.stringify(employee));
} else {
    if (document.getElementById('empNumber')) document.getElementById('empNumber').textContent = "-";
    if (document.getElementById('firstName')) document.getElementById('firstName').textContent = "-";
    if (document.getElementById('lastName')) document.getElementById('lastName').textContent = "-";
    if (document.getElementById('birthday')) document.getElementById('birthday').textContent = "-";
    if (document.getElementById('status')) document.getElementById('status').textContent = "-";
}

// Navigation functions
function goBack() {
    window.location.href = "employee_list.html";
}

function goToTrainings() {
    if(!empId) return alert("No employee selected");
    
    // Save current employee in localStorage
    localStorage.setItem('currentEmployee', JSON.stringify(employee));

    // Go to trainings page
    window.location.href = "trainings.html";
}

function goToServiceRecords() {
    window.location.href = "service_record.html";
}
