const toggleButton = document.getElementsByClassName('toggler')[0];
const navLinks = document.getElementsByClassName('navbar-links');
toggleButton.addEventListener('click', function() {
    for(var i=0; i<navLinks.length; i++)
        navLinks[i].classList.toggle('switch')
});
