/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Card.ts":
/*!********************************!*\
  !*** ./src/components/Card.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createParticipantCard = exports.createEventCard = void 0;
function createEventCard(data) {
    const container = document.querySelector(".cards_container");
    container.insertAdjacentHTML("afterbegin", `<div class="card">
                    <div class="card_header">
                        <h4 class="card_title">${data.title}</h4>
                        <p class="card_data">${data.event_date.substring(0, 10)}</p>
                    </div>
                    <div class="card_organizer-wraper">
                        <h3 class="card_organizator_description">Organizer:</h3>
                        <h3 class="card_organizator">${data.organizer}</h3>
                    </div>
                    <div class="card_description-wrapper">
                        <p class="card_description">${data.description}</p>
                    </div>
                    <div class="card_footer">
                        <a class="card_register-link" href="./registration.html">Register</a>
                        <a class="card_view-link" href="./participants&eventId=${data._id}">View</a>
                    </div>
                </div>
        `);
}
exports.createEventCard = createEventCard;
function createParticipantCard(data) {
    const container = document.querySelector(".cards_container");
    container.insertAdjacentHTML("afterbegin", `<div class="card --participants">
        <div class="card_header">
            <h4 class="card_title">${data.name}</h4>
        </div>
        <p class="card_email">
            ${data.name}
        </p>
       </div>
        `);
}
exports.createParticipantCard = createParticipantCard;


/***/ }),

/***/ "./src/components/Pagination.ts":
/*!**************************************!*\
  !*** ./src/components/Pagination.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createPagination = void 0;
function createPagination(cardAmount) {
    const container = document.querySelector(".pagination_numbers-wrapper");
    const pagesAmount = Math.ceil(cardAmount / 5);
    for (let index = pagesAmount; index > 0; index--) {
        container.insertAdjacentHTML("afterbegin", `
            <li class="pagination_number">
                    <a href="?page=${index}" class="pagination_number-link">
                        <p class="a pagination_number_text">${index}</p>
                    </a>
                </li>
            `);
    }
}
exports.createPagination = createPagination;


/***/ }),

/***/ "./src/helpers/sendRequest.ts":
/*!************************************!*\
  !*** ./src/helpers/sendRequest.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sendRequest = void 0;
const sendRequest = async (url, method = "GET", config = undefined) => {
    return await fetch(url, {
        method,
        ...config,
    }).then((response) => {
        if (response.ok) {
            if (method === "GET" || method === "POST" || method === "PUT") {
                return response.json();
            }
            return response;
        }
        else {
            throw new Error("error");
        }
    });
};
exports.sendRequest = sendRequest;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Card_1 = __webpack_require__(/*! ./components/Card */ "./src/components/Card.ts");
const sendRequest_1 = __webpack_require__(/*! ./helpers/sendRequest */ "./src/helpers/sendRequest.ts");
__webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
const Pagination_1 = __webpack_require__(/*! ./components/Pagination */ "./src/components/Pagination.ts");
console.log("Events board page");
let url = "https://backend-events-registration-app.vercel.app";
const urlWidth = url.length;
function loadContent(url) {
    (0, sendRequest_1.sendRequest)(url)
        .then((response) => {
        response.cards.forEach((data) => {
            (0, Card_1.createEventCard)(data);
        });
        (0, Pagination_1.createPagination)(response.totalCardCount);
    })
        .then(() => {
        var _a;
        const links = document.querySelectorAll(".card_view-link");
        (_a = document.querySelector(".cards_loader")) === null || _a === void 0 ? void 0 : _a.remove();
        links.forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const linkHref = link === null || link === void 0 ? void 0 : link.getAttribute("href");
                const param = "eventId=";
                const startIndex = linkHref === null || linkHref === void 0 ? void 0 : linkHref.lastIndexOf(param);
                const paramValue = linkHref === null || linkHref === void 0 ? void 0 : linkHref.slice(startIndex + param.length, linkHref.length);
                const linkForTransition = linkHref === null || linkHref === void 0 ? void 0 : linkHref.slice(0, startIndex - 1);
                localStorage.setItem(param, paramValue);
                window.location.href = `${linkForTransition}.html`;
            });
        });
        const paginationNumbers = document.querySelectorAll(".pagination_number-link");
        paginationNumbers.forEach((paginationLink) => {
            paginationLink.addEventListener("click", (event) => {
                event.preventDefault();
                const linkHref = paginationLink === null || paginationLink === void 0 ? void 0 : paginationLink.getAttribute("href");
                const param = "page=";
                const startIndex = linkHref === null || linkHref === void 0 ? void 0 : linkHref.lastIndexOf(param);
                const paramValue = linkHref === null || linkHref === void 0 ? void 0 : linkHref.slice(startIndex + param.length, linkHref.length);
                localStorage.setItem(param, paramValue);
                const cards = document.querySelectorAll(".card");
                const paginationItems = document.querySelectorAll(".pagination_number");
                cards.forEach((item) => item.remove());
                paginationItems.forEach((item) => item.remove());
                const originalURL = "https://backend-events-registration-app.vercel.app".slice(0, urlWidth);
                url = originalURL + "/?" + param + paramValue;
                loadContent(url);
            });
        });
    })
        .catch((error) => console.log(error));
}
document.addEventListener("DOMContentLoaded", function () {
    loadContent(url);
});

})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map