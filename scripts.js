// // Highlight the current page
// document.querySelectorAll('.nav-link').forEach(link => {
//     if (link.href === window.location.href) {
//         link.setAttribute('aria-current', 'page');
//         link.classList.add('active');
//     } else {
//         link.removeAttribute('aria-current');
//         link.classList.remove('active');
//     }

//     // Add an event listener for clicks
//     link.addEventListener('click', event => {
//         console.log(`You clicked on ${link.textContent}`);
//     });
// });

//above code was used when I was considering tracking which page is active, but have since decided on keeping the content on one page

const images = document.querySelectorAll("#gallery img");  // All images in the gallery
const form = document.forms.filterForm;  // The form that contains the radio buttons
const wrapRadios = form.elements.wrapType;  // The radio buttons
const search = form.elements.search;  // The search input field
const summary = document.getElementById('summary');  // The summary element

function getSelectedWrap() {
    for (const radio of wrapRadios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return 'all';  // Default to 'all' if no radio button is selected
}

function shouldShowImage(image) {
    const selectedWrap = getSelectedWrap()
    if (selectedWrap !== 'all' && selectedWrap !== image.getAttribute('data-category')) {
        return false;
    }
    if (!search.value) {
        return true;
    }
    return image.alt.toLowerCase().includes(search.value.toLowerCase())
}

function filterWraps() {
    for (const image of images) {
        if (shouldShowImage(image)) {
            image.classList.remove('hidden')
        }
        else {
            image.classList.add('hidden')
        }
    }
}

function updateSummary() {
    const selectedWrap = getSelectedWrap();
    const filterLabel = 
form.querySelector(`label[for=${selectedWrap}]`).textContent;
    summary.textContent = search.value ?
    `Showing wraps that match the filter "${filterLabel}" and the search "${search.value}".` :
    `Showing wraps that match the filter "${filterLabel}".`
}

updateSummary()

function update() {
    filterWraps();
    updateSummary();
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
})

for (const wrapRadio of wrapRadios) {
    wrapRadio.addEventListener('change', update)
}

search.addEventListener('keyup', update);
