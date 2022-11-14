// make all the nav links on the header turn to the theme color when clicked
const navLinks = document.querySelectorAll('.nav-links>a');
navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        navLinks.forEach(navLink => {
            if (!navLink.classList.value.split(" ").includes('inactive'))
                navLink.classList.add('inactive'); // it works

            if (navLink.classList.value.split(" ").includes('active'))
                navLink.classList.remove('active'); // it works
        })
    })

    if (!navLink.classList.value.split(" ").includes('inactive'))
        navLink.classList.add('inactive'); // it works

    if (navLink.classList.value.split(" ").includes('active'))
        navLink.classList.remove('active'); // it works
})

/**
 * all the li should have a class name of inactive
 * on click: 
 *      go through all the li>a items in header navbar :
 *          - check if inactive class exists:
 *              + if it exists:
 *                  - done nothing
 *              + else: 
 *                  - append it
 * 
 *          - check if active class exists:
 *              + if it exists:
 *                  - remove it
 *              + else:
 *                  - do nothing
 * 
 *      - append active to the class names of the clicked button, 
 *      - remove inactive,  
 */

