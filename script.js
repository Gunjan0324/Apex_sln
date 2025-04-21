// JavaScript for interactivity

// Function for button alert
function showAlert() {
    alert("Thank you for visiting my portfolio!");
}

// Function to scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add event listener for button click (Example)
document.querySelector("button").addEventListener("click", showAlert);
