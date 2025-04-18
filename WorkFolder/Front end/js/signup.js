document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const terms = document.getElementById('terms').checked;

        // Basic validation
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if (!terms) {
            alert('Please agree to the Terms and Conditions');
            return;
        }

        // Here you would typically make an API call to your backend
        // For now, we'll just simulate a successful registration
        console.log('Registration attempt:', {
            firstName,
            lastName,
            email,
            password
        });

        // Redirect to login page after successful registration
        window.location.href = 'login.html';
    });
}); 