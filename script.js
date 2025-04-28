// JavaScript for WM6004-CSS Project
// LO3: Form Validation + Quiz
// ================================

// ----- Form Validation -----
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    // Get form fields
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');

    // Name validation
    if (name.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!email.value.includes('@') || !email.value.includes('.')) {
        emailError.textContent = 'Enter a valid email address.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Submit the form if valid
    if (isValid) {
        alert('Form submitted successfully!');
        // Optionally, reset form
        // this.reset();
    }
});

// ----- Self-Correcting Quiz -----
function checkQuiz() {
    const answer = document.querySelector('input[name="q1"]:checked');
    const feedback = document.getElementById('quiz-feedback');

    if (!answer) {
        feedback.textContent = 'Please select an answer.';
        feedback.style.color = 'red';
        return;
    }

    if (answer.value === 'BMW') {
        feedback.textContent = 'Correct! BMW is a German car brand.';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Incorrect. The correct answer is BMW.';
        feedback.style.color = 'red';
    }
} 