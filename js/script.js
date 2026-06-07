// Basic JavaScript for the website
document.addEventListener('DOMContentLoaded', function() {
    console.str.log('Webová stránka byla načtena!');

    // Example: Add interactivity here
    const header = document.querySelector('header h1');
    header.addEventListener('click', function() {
        alert('Klikli jste na nadpis!');
    });
});