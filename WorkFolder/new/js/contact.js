// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formInputs = contactForm.querySelectorAll('input, textarea');

    // Add input event listeners for real-time validation
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            validateInput(this);
        });

        input.addEventListener('blur', function() {
            validateInput(this);
        });
    });

    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        formInputs.forEach(input => {
            if (!validateInput(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            // Collect form data
            const formData = {
                name: contactForm.querySelector('input[type="text"]').value,
                email: contactForm.querySelector('input[type="email"]').value,
                subject: contactForm.querySelector('input[placeholder="Subject"]').value,
                message: contactForm.querySelector('textarea').value
            };

            // Simulate form submission
            submitForm(formData);
        }
    });

    // Input validation function
    function validateInput(input) {
        const value = input.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Remove existing error message
        const existingError = input.parentElement.querySelector('.invalid-feedback');
        if (existingError) {
            existingError.remove();
        }

        // Validation rules
        if (input.required && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        } else if (input.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }

        // Update input styling
        if (!isValid) {
            input.classList.add('is-invalid');
            const errorDiv = document.createElement('div');
            errorDiv.className = 'invalid-feedback';
            errorDiv.textContent = errorMessage;
            input.parentElement.appendChild(errorDiv);
        } else {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        }

        return isValid;
    }

    // Form submission function
    function submitForm(formData) {
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';

        // Simulate API call
        setTimeout(() => {
            // Reset form
            contactForm.reset();
            formInputs.forEach(input => {
                input.classList.remove('is-valid', 'is-invalid');
            });

            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success mt-3';
            successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            contactForm.appendChild(successMessage);

            // Reset button
            submitButton.disabled = false;
            submitButton.textContent = originalText;

            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        }, 1500);
    }

    // Add animation to contact info items
    const infoItems = document.querySelectorAll('.info-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    });

    infoItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.5s ease-out';
        observer.observe(item);
    });
}); 