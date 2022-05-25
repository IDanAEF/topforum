/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/blocks/mediaArt.js":
/*!**************************************!*\
  !*** ./assets/js/blocks/mediaArt.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function mediaArt() {
  try {
    const artBtn = document.querySelector('.media__button'),
          artItems = document.querySelectorAll('.media__articles-item');
    let curr = 0,
        artCount = +document.querySelector('.media__articles').getAttribute('data-count'),
        way = artCount;

    function setArts() {
      for (let i = curr; i < way; i++) {
        if (!artItems[i]) {
          artBtn.classList.add('hide');
          break;
        }

        artItems[i].classList.remove('hide');
      }

      curr = way;
      way += artCount;
    }

    setArts();
    artBtn.addEventListener('click', () => {
      setArts();
    });
  } catch (e) {
    console.log(e.stack);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (mediaArt);

/***/ }),

/***/ "./assets/js/blocks/slider.js":
/*!************************************!*\
  !*** ./assets/js/blocks/slider.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function slider() {
  try {
    const sliderPlace = document.querySelectorAll('.slider-place');
    sliderPlace.forEach(sliderRow => {
      const slider = sliderRow.querySelector('.slider-row'),
            sliderItems = sliderRow.querySelectorAll('.slider-item'),
            leftArrow = sliderRow.querySelectorAll('.slider-left'),
            rightArrow = sliderRow.querySelectorAll('.slider-right');
      slider.style.width = `${sliderItems.length * 100}%`;
      let itemWidth = sliderItems[0].clientWidth + +window.getComputedStyle(sliderItems[0]).marginRight.replace(/[a-zа-яё]/gi, ''),
          count = 0;

      if (sliderItems.length <= 1) {
        leftArrow.forEach(arr => arr.remove());
        rightArrow.forEach(arr => arr.remove());
      }

      leftArrow.forEach(arr => {
        arr.addEventListener('click', () => {
          count == 0 ? count = sliderItems.length - 1 : count--;
          slider.style.transform = `translateX(-${count * itemWidth}px)`;
        });
      });
      rightArrow.forEach(arr => {
        arr.addEventListener('click', () => {
          count == sliderItems.length - 1 ? count = 0 : count++;
          slider.style.transform = `translateX(-${count * itemWidth}px)`;
        });
      });
      let startPos = 0;
      slider.addEventListener('touchstart', e => {
        startPos = e.changedTouches[0].screenX;
      });
      slider.addEventListener('touchend', e => {
        if (startPos - e.changedTouches[0].screenX > 150) {
          count == sliderItems.length - 1 ? count = 0 : count++;
          slider.style.transform = `translateX(-${count * itemWidth}px)`;
        } else if (startPos - e.changedTouches[0].screenX < 150) {
          count == 0 ? count = sliderItems.length - 1 : count--;
          slider.style.transform = `translateX(-${count * itemWidth}px)`;
        }
      });
    });
  } catch (e) {
    console.log(e.stack);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./assets/js/blocks/sponsorsTab.js":
/*!*****************************************!*\
  !*** ./assets/js/blocks/sponsorsTab.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function sponsorsTab() {
  try {
    const tabItems = document.querySelectorAll('.sponsors__clients-tab-item'),
          tabPages = document.querySelectorAll('.sponsors__clients-page'),
          tabArrow = document.querySelector('.sponsors__clients-tab-arrow'),
          tabSpan = document.querySelector('.sponsors__clients-tab span'),
          tabList = document.querySelector('.sponsors__clients-tab-list'),
          tabPlace = document.querySelector('.sponsors__clients-tab');

    function setPage() {
      let num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      tabPages.forEach(item => item.classList.remove('hide'));
      tabPages.forEach(item => item.classList.add('hide'));
      tabPages[num].classList.remove('hide');
      tabSpan.textContent = tabItems[num].textContent;
    }

    setPage();
    tabPlace.addEventListener('click', () => {
      tabArrow.classList.toggle('active');
      tabList.classList.toggle('hide');
    });
    tabItems.forEach((tab, i) => {
      tab.addEventListener('click', () => {
        setPage(i);
      });
    });
    window.addEventListener('click', e => {
      if (!tabList.classList.contains('hide') && !e.target.parentElement.classList.contains('sponsors__clients-tab') && !e.target.classList.contains('sponsors__clients-tab-item') && !e.target.classList.contains('sponsors__clients-tab')) {
        tabArrow.classList.remove('active');
        tabList.classList.add('hide');
      }
    });
  } catch (e) {
    console.log(e.stack);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (sponsorsTab);

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
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/slider */ "./assets/js/blocks/slider.js");
/* harmony import */ var _blocks_sponsorsTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/sponsorsTab */ "./assets/js/blocks/sponsorsTab.js");
/* harmony import */ var _blocks_mediaArt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/mediaArt */ "./assets/js/blocks/mediaArt.js");



window.addEventListener('DOMContentLoaded', () => {
  (0,_blocks_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_sponsorsTab__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_blocks_mediaArt__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map