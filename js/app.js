/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navList = document.querySelector('#navbar__list');
const section = document.querySelectorAll('[data-nav]');
let generateLink;

function navBar() {
    for (let i = 0; i < section.length; i++) {
        let navItem = document.createElement('LI');
        navList.append(navItem);
        generateLink = document.createElement('A')
        navItem.append(generateLink);
        generateLink.innerHTML = section[i].getAttribute('data-nav');
        generateLink.classList.add('menu__link');
        generateLink.style.cursor = 'pointer';
        generateLink.setAttribute('href', '#section' + (i+1));
        generateLink.setAttribute('data-link', section[i].getAttribute('data-nav'));
        
    }
}

navBar();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
document.addEventListener('scroll', function sectionInViewPort() {
    section.forEach( (sect) => {
        if(window.scrollY >= sect.offsetHeight) {
            sect.classList.add("your-active-class");

        } else {
            sect.classList.remove("your-active-class");
        }
    });
});


const listLinks = document.querySelectorAll("a[href^='#section']");

listLinks.forEach(function(link) {
    link.addEventListener('click', () => {
        listLinks.forEach( (link) => {
            if (link.classList.contains('active-link')) {
                link.classList.remove('active-link');
            }
        });
        link.classList.add('active-link');
        let linkSect = link.href.split('#section');
        linkSect = '#section' + linkSect[1];
        window.scroll({
            behavior: 'smooth',
            left:0,
            top: document.querySelector(linkSect).offsetTop
        });
    });
});