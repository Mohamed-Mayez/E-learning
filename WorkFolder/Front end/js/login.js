document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const rememberMe = document.getElementById('rememberMe');

    // Check if there are stored credentials
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
        document.getElementById('email').value = storedEmail;
        rememberMe.checked = true;
    }

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Basic validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }

        // Remember me functionality
        if (rememberMe.checked) {
            localStorage.setItem('userEmail', email);
        } else {
            localStorage.removeItem('userEmail');
        }

        // Here you would typically make an API call to your backend
        // For now, we'll just simulate a successful login
        console.log('Login attempt:', { email, password });
        
        // Redirect to home page after successful login
        window.location.href = 'index.html';
    });
}); 