const employee = JSON.parse(localStorage.getItem('currentEmployee'));

function goBack() {
    if(employee && employee.id){
        window.location.href = `employee_info.html?id=${employee.id}`;
    } else {
        window.location.href = "employee_info.html";
    }
}

function showAddTrainingForm() {
    const form = document.getElementById('addTrainingForm');
    if (form) form.style.display = 'block';
}

function hideAddTrainingForm() {
    const form = document.getElementById('addTrainingForm');
    if (form) form.style.display = 'none';
}

let trainings = JSON.parse(localStorage.getItem('trainings')) || [];
const tableBody = document.querySelector("#trainingsTable tbody");

function renderTrainings(list = trainings){
  if (!tableBody) return;
  tableBody.innerHTML = '';

  if(list.length === 0){
    tableBody.innerHTML = `<tr><td colspan="4">No trainings yet</td></tr>`;
    return;
  }

  list.forEach(t => {

    tableBody.innerHTML += `
      <tr>
        <td>${t.id}</td>
        <td>${t.title}</td>
        <td>${t.date}</td>
        <td>
          <a href="edit_training.html?id=${t.id}" class="btn btn-sm btn-warning mb-1">
            <i class="fa-solid fa-pen"></i> Edit
          </a>
          <button class="btn btn-sm btn-danger" onclick="deleteTraining('${t.id}','${t.title}')">
            <i class="fa-solid fa-trash"></i> Delete
          </button>
        </td>
      </tr>
    `;

  });

}

function deleteTraining(id, title){
  if(confirm("Are you sure you want to delete this training?")){
    trainings = trainings.filter(t => String(t.id) !== String(id));
    localStorage.setItem('trainings', JSON.stringify(trainings));
    if (typeof logActivity === "function") {
        logActivity("Deleted Training", title);
    }
    renderTrainings();
  }
}

const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', function(){
      const search = this.value.toLowerCase();

      const filtered = trainings.filter(t =>
        t.title.toLowerCase().includes(search) ||
        t.date.includes(search)
      );

      renderTrainings(filtered);
    });
}

function saveTraining() {
    const title = document.getElementById('trainingTitle').value.trim();
    const date = document.getElementById('trainingDate').value;

    if(!title || !date){
        alert("Please enter title and date.");
        return;
    }

    if(!employee || !employee.id){
        alert("No employee selected.");
        return;
    }

    const newTraining = {
        id: employee.id,
        empId: employee.id,
        title: title,
        date: date
    };

    trainings.push(newTraining);
    localStorage.setItem('trainings', JSON.stringify(trainings));

    if (typeof logActivity === "function") {
        logActivity("Added Training", title);
    }

    renderTrainings();
    hideAddTrainingForm();

    document.getElementById('trainingTitle').value = '';
    document.getElementById('trainingDate').value = '';
}

renderTrainings();
