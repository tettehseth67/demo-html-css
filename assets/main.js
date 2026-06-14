document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('drawerTrigger');
    const navMenu = document.getElementById('publicNav');

    if (trigger && navMenu) {
        trigger.addEventListener('click', () => {
            // Toggle active visual helper attributes on the elements
            trigger.classList.toggle('is-active');
            navMenu.classList.toggle('is-open');
        });
    }
});