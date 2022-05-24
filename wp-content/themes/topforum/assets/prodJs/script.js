/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/blocks/slider.js":
/*!************************************!*\
  !*** ./assets/js/blocks/slider.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function slider() {
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
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

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

window.addEventListener('DOMContentLoaded', () => {
  (0,_blocks_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map