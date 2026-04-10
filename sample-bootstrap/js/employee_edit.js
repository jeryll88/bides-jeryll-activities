const urlParams = new URLSearchParams(window.location.search);
const empId = urlParams.get('id');

let employees = JSON.parse(localStorage.getItem('employees')) || [];
const employee = employees.find(e => e.id == empId);

if(employee){
    document.getElementById('empId').value = employee.id;
    document.getElementById('firstName').value = employee.firstName;
    document.getElementById('lastName').value = employee.lastName;
    document.getElementById('birthday').value = employee.birthday;
    document.getElementById('status').value = employee.status;
} else if (empId) {
    alert("Employee not found!");
    window.location.href = "employee_list.html";
}

const form = document.getElementById('editEmployeeForm');
if (form) {
    form.addEventListener('submit', function(e){
        e.preventDefault();

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const birthday = document.getElementById('birthday').value;
        const status = document.getElementById('status').value;

        if(!firstName || !lastName || !birthday || !status) return;

        // Update the employee object
        const index = employees.findIndex(e => e.id == empId);
        if(index !== -1){
            employees[index].firstName = firstName;
            employees[index].lastName = lastName;
            employees[index].birthday = birthday;
            employees[index].status = status;

            localStorage.setItem('employees', JSON.stringify(employees));
            alert("Employee updated successfully!");
            if (typeof logActivity === "function") {
                logActivity("Edited Employee", firstName + " " + lastName);
            }
            window.location.href = "employee_list.html";
        }
    });
}
