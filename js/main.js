!function(n){var t={};function e(g){if(t[g])return t[g].exports;var l=t[g]={i:g,l:!1,exports:{}};return n[g].call(l.exports,l,l.exports,e),l.l=!0,l.exports}e.m=n,e.c=t,e.d=function(n,t,g){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:g})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var g=Object.create(null);if(e.r(g),Object.defineProperty(g,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var l in n)e.d(g,l,function(t){return n[t]}.bind(null,l));return g},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(module,exports){eval("console.log(`Hello world!`);\n\nconst navButton = document.querySelector(`.navigation__button--js`);\nconst header = document.querySelector(`.header__js`);\nconst pageHeight = window.pageYOffset;\n\nif (pageHeight === 0) {\n    header.classList.remove(`header--fixed`)\n} else {\n    header.classList.add(`header--fixed`)\n};\n\nconst navPosition = () => {\n\n    let pageHeight = window.pageYOffset;\n\n    if (pageHeight > 0) {\n        header.classList.add(`header--fixed`)\n    } else {\n        header.classList.remove(`header--fixed`)\n    };\n\n}\n\n\n\nwindow.addEventListener(`scroll`, navPosition);\n\nnavButton.addEventListener(`click`, menu = () => {\n    const hamburger = document.querySelector(`.navigation__list--js`);\n    const icon = document.querySelector(`.navigation__button--js`);\n    const timeout = 400;\n    icon.classList.toggle(`hamburger--active`);\n    const addActive = () => {\n        hamburger.classList.add(`navigation__list--active`);\n    }\n    const removeActive = () => {\n        hamburger.classList.remove(`navigation__list--active`);\n    }\n\n    icon.classList.contains(`hamburger--active`) ?\n        addActive() :\n        removeActive();\n\n    const animIn = () => {\n        hamburger.classList.add(`slideIn`);\n        setTimeout(() => {\n            hamburger.classList.remove(`slideIn`)\n        }, timeout);\n    }\n\n\n    const animOut = () => {\n        hamburger.classList.add(`navigation__list--active`)\n        hamburger.classList.add(`slideOut`);\n        setTimeout(() => {\n            hamburger.classList.remove(`slideOut`);\n            hamburger.classList.remove(`navigation__list--active`)\n        }, timeout);\n\n    }\n\n    hamburger.classList.contains(`navigation__list--active`) ?\n        animIn() :\n        animOut()\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coYEhlbGxvIHdvcmxkIWApO1xuXG5jb25zdCBuYXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmF2aWdhdGlvbl9fYnV0dG9uLS1qc2ApO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmhlYWRlcl9fanNgKTtcbmNvbnN0IHBhZ2VIZWlnaHQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cbmlmIChwYWdlSGVpZ2h0ID09PSAwKSB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoYGhlYWRlci0tZml4ZWRgKVxufSBlbHNlIHtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChgaGVhZGVyLS1maXhlZGApXG59O1xuXG5jb25zdCBuYXZQb3NpdGlvbiA9ICgpID0+IHtcblxuICAgIGxldCBwYWdlSGVpZ2h0ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG4gICAgaWYgKHBhZ2VIZWlnaHQgPiAwKSB7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKGBoZWFkZXItLWZpeGVkYClcbiAgICB9IGVsc2Uge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShgaGVhZGVyLS1maXhlZGApXG4gICAgfTtcblxufVxuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoYHNjcm9sbGAsIG5hdlBvc2l0aW9uKTtcblxubmF2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgbWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmF2aWdhdGlvbl9fbGlzdC0tanNgKTtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5hdmlnYXRpb25fX2J1dHRvbi0tanNgKTtcbiAgICBjb25zdCB0aW1lb3V0ID0gNDAwO1xuICAgIGljb24uY2xhc3NMaXN0LnRvZ2dsZShgaGFtYnVyZ2VyLS1hY3RpdmVgKTtcbiAgICBjb25zdCBhZGRBY3RpdmUgPSAoKSA9PiB7XG4gICAgICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QuYWRkKGBuYXZpZ2F0aW9uX19saXN0LS1hY3RpdmVgKTtcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlQWN0aXZlID0gKCkgPT4ge1xuICAgICAgICBoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZShgbmF2aWdhdGlvbl9fbGlzdC0tYWN0aXZlYCk7XG4gICAgfVxuXG4gICAgaWNvbi5jbGFzc0xpc3QuY29udGFpbnMoYGhhbWJ1cmdlci0tYWN0aXZlYCkgP1xuICAgICAgICBhZGRBY3RpdmUoKSA6XG4gICAgICAgIHJlbW92ZUFjdGl2ZSgpO1xuXG4gICAgY29uc3QgYW5pbUluID0gKCkgPT4ge1xuICAgICAgICBoYW1idXJnZXIuY2xhc3NMaXN0LmFkZChgc2xpZGVJbmApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKGBzbGlkZUluYClcbiAgICAgICAgfSwgdGltZW91dCk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBhbmltT3V0ID0gKCkgPT4ge1xuICAgICAgICBoYW1idXJnZXIuY2xhc3NMaXN0LmFkZChgbmF2aWdhdGlvbl9fbGlzdC0tYWN0aXZlYClcbiAgICAgICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoYHNsaWRlT3V0YCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoYHNsaWRlT3V0YCk7XG4gICAgICAgICAgICBoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZShgbmF2aWdhdGlvbl9fbGlzdC0tYWN0aXZlYClcbiAgICAgICAgfSwgdGltZW91dCk7XG5cbiAgICB9XG5cbiAgICBoYW1idXJnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKGBuYXZpZ2F0aW9uX19saXN0LS1hY3RpdmVgKSA/XG4gICAgICAgIGFuaW1JbigpIDpcbiAgICAgICAgYW5pbU91dCgpXG59KTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);