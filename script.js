// -----------------------------
// 🎉 Part 1: Event Handling
// -----------------------------

// Light/Dark mode toggle
document.getElementById('themeToggleBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Click Counter
let clickCount = 0;
document.getElementById('clickBtn').addEventListener('click', () => {
  clickCount++;
  document.getElementById('clickCount').textContent = clickCount;
});


// -----------------------------
// 🎮 Part 2: Interactive Features
// -----------------------------
// 1. Light/Dark Mode (above)
// 2. Click Counter (above)


// -----------------------------
// 📋✅ Part 3: Form Validation
// -----------------------------

document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Stop default form submission

  // Clear previous errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';
  document.getElementById('formSuccess').textContent = '';

  // Get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  let valid = true;

  // Name validation
  if (name.length < 2) {
    document.getElementById('nameError').textContent = 'Name must be at least 2 characters.';
    valid = false;
  }

  // Email validation with regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    valid = false;
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
    valid = false;
  }

  if (valid) {
    document.getElementById('formSuccess').textContent = 'Form submitted successfully!';
    this.reset();
  }
});
