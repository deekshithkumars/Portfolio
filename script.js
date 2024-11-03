
// // Initialize EmailJS
// (function() {
//     emailjs.init('PnZoIc73EdH55h8Mo'); // Replace 'your_user_id' with your EmailJS User ID
// })();

// // Handle form submission
// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form reload

//     const btn = document.getElementById('button');
//     btn.value = 'Sending...';
//     const form = event.target;

//     // Send form data via EmailJS
//     emailjs.sendForm('service_iaakhfm', 'template_08zxaan', form)
//         .then(function() {
//             document.getElementById('successMessage').style.display = 'block';
//             document.getElementById('errorMessage').style.display = 'none';
//             btn.value = 'Send Message';
//             form.reset(); // Clear the form
//         }, function(error) {
//             document.getElementById('successMessage').style.display = 'none';
//             document.getElementById('errorMessage').style.display = 'block';
//             btn.value = 'Send Message';
//             console.error('Error sending message:', error);
//         });
// });


// const themeToggle = document.getElementById('themeToggle');
// const body = document.body;

// themeToggle.addEventListener('change', () => {
//   body.classList.toggle('dark-mode');
//   document.getElementById('navbar').classList.toggle('dark-mode');
//   document.getElementById('content').classList.toggle('dark-mode');

//   // Store the user's preference in localStorage
//   if (body.classList.contains('dark-mode')) {
//     localStorage.setItem('theme', 'dark');
//   } else {
//     localStorage.setItem('theme', 'light');
//   }
// });

// // Load the theme based on the saved preference
// window.onload = () => {
//   const savedTheme = localStorage.getItem('theme');
//   if (savedTheme === 'dark') {
//     body.classList.add('dark-mode');
//     themeToggle.checked = true;
//   }
// };

document.addEventListener("DOMContentLoaded", function() {
  // Initialize EmailJS
  (function() {
      emailjs.init('PnZoIc73EdH55h8Mo'); // Replace with your EmailJS User ID
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

  // Dark mode functionality
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  themeToggle.addEventListener('change', () => {
      body.classList.toggle('dark-mode');
      document.getElementById('navbar').classList.toggle('dark-mode');
      document.getElementById('content').classList.toggle('dark-mode');

      // Store the user's preference in localStorage
      if (body.classList.contains('dark-mode')) {
          localStorage.setItem('theme', 'dark');
      } else {
          localStorage.setItem('theme', 'light');
      }
  });

  // Load the theme based on the saved preference
  window.onload = () => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
          body.classList.add('dark-mode');
          themeToggle.checked = true;
      }
  };
});
