!function(n){var t={};function e(g){if(t[g])return t[g].exports;var i=t[g]={i:g,l:!1,exports:{}};return n[g].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,g){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:g})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var g=Object.create(null);if(e.r(g),Object.defineProperty(g,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(g,i,function(t){return n[t]}.bind(null,i));return g},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(module,exports){eval("console.log(`Hello world!`);\n\n\nconst navButton = document.querySelector(`.navigation__button--js`);\n\nnavButton.addEventListener(`click`, menu = () => {\n    const hamburger = document.querySelector(`.navigation__list--js`);\n    const icon = document.querySelector(`.navigation__button--js`);\n    const timeout = 400;\n    icon.classList.toggle(`hamburger--active`);\n    const addActive = () => {\n        hamburger.classList.add(`navigation__list--active`);\n    }\n    const removeActive = () => {\n        hamburger.classList.remove(`navigation__list--active`);\n    }\n\n    icon.classList.contains(`hamburger--active`) ?\n        addActive() :\n        removeActive();\n\n    const animIn = () => {\n        hamburger.classList.add(`slideIn`);\n        setTimeout(() => {\n            hamburger.classList.remove(`slideIn`)\n        }, timeout);\n    }\n\n\n    const animOut = () => {\n        hamburger.classList.add(`navigation__list--active`)\n        hamburger.classList.add(`slideOut`);\n        setTimeout(() => {\n            hamburger.classList.remove(`slideOut`);\n            hamburger.classList.remove(`navigation__list--active`)\n        }, timeout);\n\n    }\n\n    hamburger.classList.contains(`navigation__list--active`) ?\n        animIn() :\n        animOut()\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhgSGVsbG8gd29ybGQhYCk7XG5cblxuY29uc3QgbmF2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5hdmlnYXRpb25fX2J1dHRvbi0tanNgKTtcblxubmF2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgbWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmF2aWdhdGlvbl9fbGlzdC0tanNgKTtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5hdmlnYXRpb25fX2J1dHRvbi0tanNgKTtcbiAgICBjb25zdCB0aW1lb3V0ID0gNDAwO1xuICAgIGljb24uY2xhc3NMaXN0LnRvZ2dsZShgaGFtYnVyZ2VyLS1hY3RpdmVgKTtcbiAgICBjb25zdCBhZGRBY3RpdmUgPSAoKSA9PiB7XG4gICAgICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QuYWRkKGBuYXZpZ2F0aW9uX19saXN0LS1hY3RpdmVgKTtcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlQWN0aXZlID0gKCkgPT4ge1xuICAgICAgICBoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZShgbmF2aWdhdGlvbl9fbGlzdC0tYWN0aXZlYCk7XG4gICAgfVxuXG4gICAgaWNvbi5jbGFzc0xpc3QuY29udGFpbnMoYGhhbWJ1cmdlci0tYWN0aXZlYCkgP1xuICAgICAgICBhZGRBY3RpdmUoKSA6XG4gICAgICAgIHJlbW92ZUFjdGl2ZSgpO1xuXG4gICAgY29uc3QgYW5pbUluID0gKCkgPT4ge1xuICAgICAgICBoYW1idXJnZXIuY2xhc3NMaXN0LmFkZChgc2xpZGVJbmApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKGBzbGlkZUluYClcbiAgICAgICAgfSwgdGltZW91dCk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBhbmltT3V0ID0gKCkgPT4ge1xuICAgICAgICBoYW1idXJnZXIuY2xhc3NMaXN0LmFkZChgbmF2aWdhdGlvbl9fbGlzdC0tYWN0aXZlYClcbiAgICAgICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoYHNsaWRlT3V0YCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoYHNsaWRlT3V0YCk7XG4gICAgICAgICAgICBoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZShgbmF2aWdhdGlvbl9fbGlzdC0tYWN0aXZlYClcbiAgICAgICAgfSwgdGltZW91dCk7XG5cbiAgICB9XG5cbiAgICBoYW1idXJnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKGBuYXZpZ2F0aW9uX19saXN0LS1hY3RpdmVgKSA/XG4gICAgICAgIGFuaW1JbigpIDpcbiAgICAgICAgYW5pbU91dCgpXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);