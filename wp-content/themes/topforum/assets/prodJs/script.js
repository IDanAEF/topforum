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

/***/ "./assets/js/blocks/modals.js":
/*!************************************!*\
  !*** ./assets/js/blocks/modals.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function modals() {
  const modalPlace = document.querySelector('.modal');

  function closeBtnInit(btn, mdlItem) {
    btn.addEventListener('click', () => {
      modalPlace.classList.remove('active');
      mdlItem.classList.remove('active');
      document.querySelector('body').style.overflow = '';
    });
  }

  function showModal(mdlItem) {
    modalPlace.classList.add('active');
    mdlItem.classList.add('active');
    document.querySelector('body').style.overflow = 'hidden';
  }

  modalPlace.addEventListener('click', e => {
    if (e.target == modalPlace) {
      modalPlace.classList.remove('active');
      mdlItem.classList.remove('active');
      document.querySelector('body').style.overflow = '';
    }
  }); //subscribe modal

  try {
    const modalSubs = document.querySelector('.modal__subscribe'),
          modalSubsClose = document.querySelector('.modal__close');

    if (!localStorage.getItem('isOpen')) {
      setTimeout(() => {
        showModal(modalSubs);
        localStorage.setItem('isOpen', 'open');
      }, 15000);
    }

    closeBtnInit(modalSubsClose, modalSubs);
  } catch (e) {
    console.log(e.stack);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./assets/js/blocks/registration.js":
/*!******************************************!*\
  !*** ./assets/js/blocks/registration.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function registration() {
  try {
    const tabs = document.querySelectorAll('.registration__tab');
    tabs.forEach(tab => {
      const tabItems = tab.querySelectorAll('.registration__tab-item'),
            tabArrow = tab.querySelector('.registration__tab-arrow'),
            tabSpan = tab.querySelector('.registration__tab span'),
            tabList = tab.querySelector('.registration__tab-list');

      function setPage() {
        let num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        tabSpan.textContent = tabItems[num].textContent;
        document.querySelector('#' + tab.getAttribute('data-inp')).value = tabItems[num].textContent;
      }

      setPage();
      tab.addEventListener('click', () => {
        tabArrow.classList.toggle('active');
        tabList.classList.toggle('hide');
      });
      tabItems.forEach((tab, i) => {
        tab.addEventListener('click', () => {
          setPage(i);
        });
      });
      window.addEventListener('click', e => {
        if (!tabList.classList.contains('hide') && !e.target.parentElement.classList.contains('registration__tab') && !e.target.classList.contains('registration__tab-item') && !e.target.classList.contains('registration__tab')) {
          tabArrow.classList.remove('active');
          tabList.classList.add('hide');
        }
      });
    });

    function setBlocks(place, items) {
      items.forEach(item => {
        item.addEventListener('click', () => {
          items.forEach(it => it.classList.remove('active'));
          item.classList.add('active');
          document.querySelector('#' + place.getAttribute('data-inp')).value = item.getAttribute('data-val');
        });
      });
    }

    setBlocks(document.querySelector('.paym'), document.querySelectorAll('.paym span'));
    setBlocks(document.querySelector('.pack'), document.querySelectorAll('.pack span'));
  } catch (e) {
    console.log(e.stack);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (registration);

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
/* harmony import */ var _blocks_modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/modals */ "./assets/js/blocks/modals.js");
/* harmony import */ var _blocks_registration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/registration */ "./assets/js/blocks/registration.js");





window.addEventListener('DOMContentLoaded', () => {
  (0,_blocks_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_sponsorsTab__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_blocks_mediaArt__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_blocks_modals__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_blocks_registration__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map