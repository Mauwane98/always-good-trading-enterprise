document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle navigation menu on mobile
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Change header background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            haeader.classList.remove('scrolled');
        }
    });
});

// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Get the Services button and dropdown content
    var servicesBtn = document.getElementById("servicesBtn");
    var servicesDropdown = document.getElementById("servicesDropdown");

    // Add click event listener to the Services button
    servicesBtn.addEventListener("click", function() {
        // Toggle the 'show' class on the dropdown content
        servicesDropdown.classList.toggle("show");
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function(event) {
        if (!event.target.matches("#servicesBtn")) {
            // If the clicked element is not the Services button, close the dropdown
            if (servicesDropdown.classList.contains("show")) {
                servicesDropdown.classList.remove("show");
            }
        }
    });
});

