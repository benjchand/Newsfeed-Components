
const toggleMenu = () => {
  menuClass[0].classList.toggle('menu--open')
}
// Toggle the "menu--open" class on your menu reference. 


// Start Here: Create a reference to the ".menu" class
const menuClass = document.getElementsByClassName('menu');
// create a reference to the ".menu-button" class
const menuButton = document.getElementsByClassName('menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton[0].addEventListener('click', function (eventObject) {
  toggleMenu();
})