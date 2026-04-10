// Get training ID from URL
const urlParams = new URLSearchParams(window.location.search);
const trainingId = urlParams.get('id'); // keep as string for safer comparison

// Load trainings from localStorage
let trainings = JSON.parse(localStorage.getItem('trainings')) || [];

// Find the training to edit (works for string or number IDs)
const training = trainings.find(t => t.id == trainingId);

if(training){
    // Pre-fill the form inputs with current training info
    document.getElementById('title').value = training.title;
    document.getElementById('date').value = training.date;
}

const form = document.getElementById('editTrainingForm');
if (form) {
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const title = document.getElementById('title').value.trim();
        const date = document.getElementById('date').value;

        if(!title || !date) return;

        if(training){
            // Update training data
            training.title = title;
            training.date = date;

            // Save back to localStorage
            localStorage.setItem('trainings', JSON.stringify(trainings));
        }

        // Redirect back to trainings list
        window.location.href = "trainings.html";
    });
}
