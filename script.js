// Function to toggle the kebab menu
function toggleMenu() {
    var menuContent = document.getElementById('menuContent');
    if (menuContent.style.display === 'block') {
        menuContent.style.display = 'none';
    } else {
        menuContent.style.display = 'block';
    }
}

// Optional: Close the menu when clicking outside of it
window.onclick = function(event) {
    if (!event.target.matches('.menu-icon')) {
        var menuContent = document.getElementById('menuContent');
        if (menuContent.style.display === 'block') {
            menuContent.style.display = 'none';
        }
    }
}

// Make the kebab menu the top layer
var menuContent = document.getElementById('menuContent');
menuContent.style.zIndex = '9999';

