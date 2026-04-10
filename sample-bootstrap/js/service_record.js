const employee = JSON.parse(localStorage.getItem("currentEmployee"));
let services = JSON.parse(localStorage.getItem("services")) || [];
const tableBody = document.querySelector("#serviceTable tbody");

// Render service records for current employee
function renderServices() {
    if (!tableBody) return;
    tableBody.innerHTML = "";

    if (!employee) {
        tableBody.innerHTML = `<tr><td colspan="5">No employee data found</td></tr>`;
        return;
    }

    // Filter services for this employee
    const empServices = services.filter(s => s.id === employee.id);

    if(empServices.length === 0){
        tableBody.innerHTML = `<tr><td colspan="5">No service records yet</td></tr>`;
        return;
    }

    empServices.forEach((s, index) => {
        tableBody.innerHTML += `
        <tr>
            <td>${s.id}</td>
            <td>${s.position}</td>
            <td>${s.start}</td>
            <td>${s.end}</td>
            <td>
                <button class="btn btn-sm btn-warning mb-1" onclick="editService(${index})">
                    <i class="fa-solid fa-pen"></i> Edit
                </button>
                <button class="btn btn-sm btn-danger mb-1" onclick="deleteService(${index})">
                    <i class="fa-solid fa-trash"></i> Delete
                </button>
            </td>
        </tr>
        `;
    });
}

// Go to add_service.html
function addService() {
    window.location.href = "add_service.html";
}

// Delete a service
function deleteService(index){
    if(confirm("Delete this service record?")){
        // Note: The index here is relative to the filtered list if not careful.
        // Actually, the original code used index from the forEach loop of empServices.
        // But services is the full list. Filtering might make the index wrong if we don't handle it.
        // The original code had: const empServices = services.filter(s => s.id === employee.id);
        // and then used index in the forEach.
        // THIS IS A BUG in the original code if multiple employees have services.
        // I will fix it by finding the original index.
        
        const empServices = services.filter(s => s.id === employee.id);
        const targetService = empServices[index];
        const originalIndex = services.indexOf(targetService);
        
        if (originalIndex !== -1) {
            services.splice(originalIndex, 1);
            localStorage.setItem("services", JSON.stringify(services));
            renderServices();
        }
    }
}

// Edit a service
function editService(index){
    const empServices = services.filter(s => s.id === employee.id);
    const targetService = empServices[index];
    const originalIndex = services.indexOf(targetService);

    if (originalIndex !== -1) {
        localStorage.setItem("editServiceIndex", originalIndex);
        window.location.href = "edit_service.html";
    }
}

// Back to employee info
function goBack(){
    if (employee) {
        window.location.href = `employee_info.html?id=${employee.id}`;
    } else {
        window.location.href = "employee_list.html";
    }
}

// Initial render
renderServices();
