document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.getElementById('profileDropdownBtn');
    const profileMenu = document.getElementById('profileMenu');

    // Toggle menu display when clicking the avatar button
    dropdownBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Stops the click from instantly bubble-closing the menu
        profileMenu.classList.toggle('is-active');
    });

    // Close the menu automatically if the user clicks anywhere else on the window canvas
    window.addEventListener('click', () => {
        if (profileMenu.classList.contains('is-active')) {
            profileMenu.classList.remove('is-active');
        }
    });
});