console.log(`Hello world!`);


const navButton = document.querySelector(`.navigation__button--js`);

navButton.addEventListener(`click`, menu = () => {
    const hamburger = document.querySelector(`.navigation__list--js`);
    const icon = document.querySelector(`.navigation__button--js`);
    hamburger.classList.toggle(`navigation__list--active`);
    icon.classList.toggle(`hamburger--active`);
})