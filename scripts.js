// JavaScript example to highlight the current page
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.href === window.location.href) {
        link.setAttribute('aria-current', 'page');
        link.classList.add('active');
    } else {
        link.removeAttribute('aria-current');
        link.classList.remove('active');
    }
});

// Highlight the current page
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.href === window.location.href) {
        link.setAttribute('aria-current', 'page');
        link.classList.add('active');
    } else {
        link.removeAttribute('aria-current');
        link.classList.remove('active');
    }

    // Add an event listener for clicks
    link.addEventListener('click', event => {
        console.log(`You clicked on ${link.textContent}`);
    });
});
