
// Initialize EmailJS
(function() {
    emailjs.init('PnZoIc73EdH55h8Mo'); // Replace 'your_user_id' with your EmailJS User ID
})();

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form reload

    const btn = document.getElementById('button');
    btn.value = 'Sending...';
    const form = event.target;

    // Send form data via EmailJS
    emailjs.sendForm('service_iaakhfm', 'template_08zxaan', form)
        .then(function() {
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('errorMessage').style.display = 'none';
            btn.value = 'Send Message';
            form.reset(); // Clear the form
        }, function(error) {
            document.getElementById('successMessage').style.display = 'none';
            document.getElementById('errorMessage').style.display = 'block';
            btn.value = 'Send Message';
            console.error('Error sending message:', error);
        });
});