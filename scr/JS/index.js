const sideMenu = () => {
    const sandwichMenu = document.querySelector('.sandwich');
    const menu = document.querySelector('.navbar');
    sandwichMenu.classList.toggle('change');
    menu.classList.toggle('open');
}