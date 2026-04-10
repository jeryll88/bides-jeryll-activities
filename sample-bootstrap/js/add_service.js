const employee = JSON.parse(localStorage.getItem("currentEmployee"));

// Go back to previous page
function goBack(){
    window.history.back();
}

// Save new service record
function saveService(){

    const position = document.getElementById("position").value;
    const start = document.getElementById("start").value;
    const end = document.getElementById("end").value;

    if(!position || !start || !end){
        alert("Please complete the form");
        return;
    }

    // Get existing services or empty array
    let services = JSON.parse(localStorage.getItem("services")) || [];

    // Create new service record linked to current employee
    const newService = {
        id: employee.id,   // same as employee ID
        position: position,
        start: start,
        end: end
    };

    // Add to array
    services.push(newService);

    // Save to localStorage
    localStorage.setItem("services", JSON.stringify(services));

    alert("Service Record Added");

    // Redirect to service records page
    window.location.href = "service_record.html";
}
