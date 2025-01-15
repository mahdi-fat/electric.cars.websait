// This file contains the JavaScript code for the electric cars website.
// It handles dynamic content, user interactions, and other functionalities.

document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');
    const contentContainer = document.getElementById('content-container');

    languageSelector.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        loadContent(selectedLanguage);
    });

    function loadContent(language) {
        fetch(`./languages/${language}/content.html`)
            .then(response => response.text())
            .then(data => {
                contentContainer.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading content:', error);
                contentContainer.innerHTML = '<p>Error loading content. Please try again later.</p>';
            });
    }

    // Load default content in English
    loadContent('en');
});