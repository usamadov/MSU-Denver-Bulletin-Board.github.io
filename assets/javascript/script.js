function updateTime() {
  const now = new Date();
  const dateTimeStr = now.toLocaleString('en-US', { 
      hour: 'numeric', 
      minute: 'numeric', 
      second: 'numeric', 
      hour12: true, 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
  });
  document.getElementById('date-time').innerHTML = dateTimeStr;
}

function teacherLogin() {
  // You should replace the contents of this function with your actual login logic.
  // Below is just placeholder functionality for demonstration purposes.
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Here, you should send the email and password to your server for validation.
  // For demonstration, I'm just logging to the console.
  console.log('Attempting teacher login with:', email, password);

  // Prevent the form from submitting in the traditional way
  return false;
}

// Update the time every second and set initial time
setInterval(updateTime, 1000);
updateTime();


// This function toggles the visibility of the dropdown content
function toggleDropdown() {
    const dropdownContent = document.querySelector('.logo-background .dropdown-content');
    const dropBtn = document.querySelector('.logo-background .dropbtn');

    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        dropBtn.classList.remove('active'); // Remove the active class when menu is closed
    } else {
        dropdownContent.style.display = "block";
        dropBtn.classList.add('active'); // Add the active class when menu is opened
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        const dropBtns = document.getElementsByClassName("dropbtn");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
                dropBtns[i].classList.remove('active'); // Remove the active class
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const tickerText = document.querySelector('.news-ticker p');
    if (tickerText) {
        const tickerSpeed = 500; // Adjust the speed as needed: pixels per second
        const tickerLength = tickerText.offsetWidth; // Get the width of the ticker text
        const viewportWidth = window.innerWidth; // Get the width of the viewport
        const totalLength = tickerLength + viewportWidth; // Total length for the animation
        const animationDuration = totalLength / tickerSpeed; // Calculate duration
        tickerText.style.animationDuration = `${animationDuration}s`; // Apply duration
    }
});


