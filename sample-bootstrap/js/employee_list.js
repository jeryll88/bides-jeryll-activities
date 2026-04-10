const tbody = document.getElementById('employeeTableBody');

// Load employees from localStorage
let employees = JSON.parse(localStorage.getItem('employees')) || [];

// Render employees
function renderEmployees(list = employees) {
    if (!tbody) return;
    tbody.innerHTML = '';
    if (list.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5">No employees found</td></tr>';
        return;
    }

    list.forEach(emp => {
        let statusClass = '';
        switch(emp.status.toLowerCase()) {
            case 'active': statusClass='status-active'; break;
            case 'permanent': statusClass='status-permanent'; break;
            case 'temporary': statusClass='status-temporary'; break;
            case 'separated': statusClass='status-separated'; break;
        }

        tbody.innerHTML += `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.lastName}</td>
                <td>${emp.firstName}</td>
                <td class="${statusClass}">${emp.status}</td>
                <td>
                    <a href="employee_info.html?id=${emp.id}" class="btn btn-sm btn-info mb-1"><i class="fa-solid fa-eye"></i> View</a>
                    <a href="employee_edit.html?id=${emp.id}" class="btn btn-sm btn-warning mb-1"><i class="fa-solid fa-pen"></i> Edit</a>
                    <button class="btn btn-sm btn-danger" onclick="deleteEmployee('${emp.id}')"><i class="fa-solid fa-trash"></i> Delete</button>
                </td>
            </tr>
        `;
    });
}

// Delete employee
function deleteEmployee(id) {
    const emp = employees.find(e => e.id === id);
    if(!emp) return;

    if(confirm(`Are you sure you want to delete ${emp.firstName} ${emp.lastName}?`)) {
        employees = employees.filter(e => e.id !== id);
        localStorage.setItem('employees', JSON.stringify(employees));
        renderEmployees();

        // Log activity
        if(typeof logActivity === "function") {
            logActivity("Deleted Employee", `${emp.firstName} ${emp.lastName}`);
        }
    }
}

// Go to dashboard
function goToDashboard() {
    window.location.href = "dashboard.html";
}

// Search functionality
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', function() {
        const search = this.value.toLowerCase();
        const filtered = employees.filter(emp => 
            emp.firstName.toLowerCase().includes(search) || 
            emp.lastName.toLowerCase().includes(search) || 
            emp.status.toLowerCase().includes(search) ||
            emp.id.toLowerCase().includes(search)
        );
        renderEmployees(filtered);
    });
}

// Initial render
renderEmployees();
