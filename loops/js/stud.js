const students = [
  { name: "Ana", scores: [85, 90, 88], present: true },
  { name: "Ben", scores: [70, 75, 72], present: false },
  { name: "Cara", scores: [95, 92, 94], present: true },
  { name: "Daniel", scores: [60, 65, 70], present: true },
  { name: "Ella", scores: [88, 85, 90], present: true },
  { name: "Felix", scores: [78, 80, 82], present: false },
  { name: "Grace", scores: [92, 89, 94], present: true },
  { name: "Hannah", scores: [73, 70, 68], present: false },
  { name: "Ivan", scores: [81, 84, 79], present: true },
  { name: "Julia", scores: [96, 98, 97], present: true }
];

const tableBody = document.getElementById("studentTable");
const searchInput = document.getElementById("search");

function clearTable() {
  tableBody.innerHTML = "";
}

function renderTable(data) {
  clearTable();
 
  data.forEach(student => {
    let total = 0;
    for (let score of student.scores) {
      total += score;
    }

    let avg = total / student.scores.length;
    let status = avg >= 75 ? "Passed" : "Failed";

    tableBody.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.scores[0]}</td>
        <td>${student.scores[1]}</td>
        <td>${student.scores[2]}</td>
        <td>${avg.toFixed(1)}</td>
        <td>${status}</td>

      </tr>
    `;
  });
}

function showPresent() {
  renderTable(students.filter(s => s.present));
}

function showAbsent() {
  renderTable(students.filter(s => !s.present));
}

function showPassed() {
  renderTable(students.filter(s => {
    let avg = (s.scores[0] + s.scores[1] + s.scores[2]) / 3;
    return avg >= 75;
  }));
}

function showFailed() {
  renderTable(students.filter(s => {
    let avg = (s.scores[0] + s.scores[1] + s.scores[2]) / 3;
    return avg < 75;
  }));
}

function searchStudent() {
  const keyword = searchInput.value.trim().toLowerCase();
  if (keyword === "") {
    renderTable(students);
    return;
  }
  renderTable(students.filter(s => s.name.toLowerCase().includes(keyword)));
}
renderTable(students);

searchInput.addEventListener('input', searchStudent);
