console.log(`Hello world!`);

const navButton = document.querySelector(`.navigation__button--js`);
const header = document.querySelector(`.header__js`);
const pageHeight = window.pageYOffset;

if (pageHeight === 0) {
    header.classList.remove(`header--fixed`)
} else {
    header.classList.add(`header--fixed`)
};

const navPosition = () => {

    let pageHeight = window.pageYOffset;

    if (pageHeight > 0) {
        header.classList.add(`header--fixed`)
    } else {
        header.classList.remove(`header--fixed`)
    };

}



window.addEventListener(`scroll`, navPosition);

navButton.addEventListener(`click`, menu = () => {
    const hamburger = document.querySelector(`.navigation__list--js`);
    const icon = document.querySelector(`.navigation__button--js`);
    const timeout = 400;
    icon.classList.toggle(`hamburger--active`);
    const addActive = () => {
        hamburger.classList.add(`navigation__list--active`);
    }
    const removeActive = () => {
        hamburger.classList.remove(`navigation__list--active`);
    }

    icon.classList.contains(`hamburger--active`) ?
        addActive() :
        removeActive();

    const animIn = () => {
        hamburger.classList.add(`slideIn`);
        setTimeout(() => {
            hamburger.classList.remove(`slideIn`)
        }, timeout);
    }


    const animOut = () => {
        hamburger.classList.add(`navigation__list--active`)
        hamburger.classList.add(`slideOut`);
        setTimeout(() => {
            hamburger.classList.remove(`slideOut`);
            hamburger.classList.remove(`navigation__list--active`)
        }, timeout);

    }

    hamburger.classList.contains(`navigation__list--active`) ?
        animIn() :
        animOut()
});

