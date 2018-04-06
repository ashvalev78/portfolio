/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _flipper = __webpack_require__(/*! ./common/flipper */ \"./src/scripts/common/flipper.js\");\n\nvar _flipper2 = _interopRequireDefault(_flipper);\n\nvar _fullMenu = __webpack_require__(/*! ./common/fullMenu */ \"./src/scripts/common/fullMenu.js\");\n\nvar _fullMenu2 = _interopRequireDefault(_fullMenu);\n\nvar _map = __webpack_require__(/*! ./common/map */ \"./src/scripts/common/map.js\");\n\nvar _map2 = _interopRequireDefault(_map);\n\nvar _parallax = __webpack_require__(/*! ./common/parallax */ \"./src/scripts/common/parallax.js\");\n\nvar _parallax2 = _interopRequireDefault(_parallax);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction start() {\n    (0, _parallax2.default)();\n    (0, _flipper2.default)();\n    (0, _map2.default)();\n    (0, _fullMenu2.default)();\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9hcHAuanM/Y2U0ZCJdLCJuYW1lcyI6WyJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSUEsU0FBU0EsS0FBVCxHQUFpQjtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0giLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmxpcCBmcm9tICcuL2NvbW1vbi9mbGlwcGVyJ1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL2NvbW1vbi9mdWxsTWVudSdcclxuaW1wb3J0IGluaXRNYXAgZnJvbSAnLi9jb21tb24vbWFwJ1xyXG5pbXBvcnQgcGFyYWxsYXggZnJvbSAnLi9jb21tb24vcGFyYWxsYXgnXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gICAgcGFyYWxsYXgoKTtcclxuICAgIGZsaXAoKTtcclxuICAgIGluaXRNYXAoKTtcclxuICAgIG1lbnUoKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/app.js\n");

/***/ }),

/***/ "./src/scripts/common/flipper.js":
/*!***************************************!*\
  !*** ./src/scripts/common/flipper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction flip() {\n    var authButton = document.querySelector('.hero__auth');\n    var flipper = document.querySelector('.hero__flipper');\n    var toMain = document.querySelector('.auth__back');\n    var heroDescr = document.querySelector('.hero__description');\n\n    authButton.addEventListener('click', function (e) {\n        e.preventDefault();\n        flipper.classList.remove('front__flipper');\n        flipper.classList.add('back__flipper');\n        authButton.style.display = 'none';\n    });\n\n    toMain.addEventListener('click', function (e) {\n        e.preventDefault();\n        flipper.classList.remove('back__flipper');\n        flipper.classList.add('front__flipper');\n        authButton.style.display = 'flex';\n    });\n\n    document.addEventListener('click', function (e) {\n        if (!heroDescr.contains(e.target)) {\n            if (!authButton.contains(e.target)) {\n                if (flipper.classList.contains('back__flipper')) {\n                    flipper.classList.remove('back__flipper');\n                    flipper.classList.add('front__flipper');\n                    authButton.style.display = 'flex';\n                }\n            }\n        }\n    });\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21tb24vZmxpcHBlci5qcz8zYzFiIl0sIm5hbWVzIjpbImZsaXAiLCJhdXRoQnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmxpcHBlciIsInRvTWFpbiIsImhlcm9EZXNjciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzdHlsZSIsImRpc3BsYXkiLCJjb250YWlucyIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxJQUFULEdBQWdCO0FBQ1osUUFBTUMsYUFBYUMsU0FBU0MsYUFBVCxDQUF1QixhQUF2QixDQUFuQjtBQUNBLFFBQU1DLFVBQVVGLFNBQVNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQWhCO0FBQ0EsUUFBTUUsU0FBU0gsU0FBU0MsYUFBVCxDQUF1QixhQUF2QixDQUFmO0FBQ0EsUUFBTUcsWUFBWUosU0FBU0MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBbEI7O0FBRUFGLGVBQVdNLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFVBQUNDLENBQUQsRUFBTztBQUN4Q0EsVUFBRUMsY0FBRjtBQUNBTCxnQkFBUU0sU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsZ0JBQXpCO0FBQ0FQLGdCQUFRTSxTQUFSLENBQWtCRSxHQUFsQixDQUFzQixlQUF0QjtBQUNBWCxtQkFBV1ksS0FBWCxDQUFpQkMsT0FBakIsR0FBMkIsTUFBM0I7QUFDSCxLQUxEOztBQU9BVCxXQUFPRSxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFDQyxDQUFELEVBQU87QUFDcENBLFVBQUVDLGNBQUY7QUFDQUwsZ0JBQVFNLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLGVBQXpCO0FBQ0FQLGdCQUFRTSxTQUFSLENBQWtCRSxHQUFsQixDQUFzQixnQkFBdEI7QUFDQVgsbUJBQVdZLEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCLE1BQTNCO0FBQ0gsS0FMRDs7QUFPQVosYUFBU0ssZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3RDLFlBQUksQ0FBQ0YsVUFBVVMsUUFBVixDQUFtQlAsRUFBRVEsTUFBckIsQ0FBTCxFQUFtQztBQUMvQixnQkFBSSxDQUFDZixXQUFXYyxRQUFYLENBQW9CUCxFQUFFUSxNQUF0QixDQUFMLEVBQW9DO0FBQ2hDLG9CQUFJWixRQUFRTSxTQUFSLENBQWtCSyxRQUFsQixDQUEyQixlQUEzQixDQUFKLEVBQWlEO0FBQzdDWCw0QkFBUU0sU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsZUFBekI7QUFDQVAsNEJBQVFNLFNBQVIsQ0FBa0JFLEdBQWxCLENBQXNCLGdCQUF0QjtBQUNBWCwrQkFBV1ksS0FBWCxDQUFpQkMsT0FBakIsR0FBMkIsTUFBM0I7QUFDSDtBQUNKO0FBQ0o7QUFDSixLQVZEO0FBV0giLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jb21tb24vZmxpcHBlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGZsaXAoKSB7XHJcbiAgICBjb25zdCBhdXRoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX2F1dGgnKTtcclxuICAgIGNvbnN0IGZsaXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fZmxpcHBlcicpO1xyXG4gICAgY29uc3QgdG9NYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1dGhfX2JhY2snKTtcclxuICAgIGNvbnN0IGhlcm9EZXNjciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19kZXNjcmlwdGlvbicpO1xyXG5cclxuICAgIGF1dGhCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBmbGlwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zyb250X19mbGlwcGVyJyk7XHJcbiAgICAgICAgZmxpcHBlci5jbGFzc0xpc3QuYWRkKCdiYWNrX19mbGlwcGVyJyk7XHJcbiAgICAgICAgYXV0aEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdG9NYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZmxpcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdiYWNrX19mbGlwcGVyJyk7XHJcbiAgICAgICAgZmxpcHBlci5jbGFzc0xpc3QuYWRkKCdmcm9udF9fZmxpcHBlcicpO1xyXG4gICAgICAgIGF1dGhCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoIWhlcm9EZXNjci5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgaWYgKCFhdXRoQnV0dG9uLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZsaXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdiYWNrX19mbGlwcGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGlwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2JhY2tfX2ZsaXBwZXInKTtcclxuICAgICAgICAgICAgICAgICAgICBmbGlwcGVyLmNsYXNzTGlzdC5hZGQoJ2Zyb250X19mbGlwcGVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/common/flipper.js\n");

/***/ }),

/***/ "./src/scripts/common/fullMenu.js":
/*!****************************************!*\
  !*** ./src/scripts/common/fullMenu.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = menu;\nfunction menu() {\n\n    var burger = document.querySelector('.hamburger-href');\n    var menu = document.querySelector('.header__menu-block');\n    var closeButton = document.querySelector('.header__back');\n    var body = document.querySelector('body');\n\n    burger.addEventListener('click', function (e) {\n        e.preventDefault();\n        menu.classList.add('active');\n        burger.style.display = 'none';\n        body.style.overflow = 'hidden';\n    });\n\n    closeButton.addEventListener('click', function (e) {\n        burger.style.display = 'block';\n        menu.classList.remove('active');\n        body.style.overflow = 'visible';\n    });\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21tb24vZnVsbE1lbnUuanM/MjU1YiJdLCJuYW1lcyI6WyJtZW51IiwiYnVyZ2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xvc2VCdXR0b24iLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwiZGlzcGxheSIsIm92ZXJmbG93IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFBd0JBLEk7QUFBVCxTQUFTQSxJQUFULEdBQWdCOztBQUUzQixRQUFNQyxTQUFTQyxTQUFTQyxhQUFULENBQXVCLGlCQUF2QixDQUFmO0FBQ0EsUUFBTUgsT0FBT0UsU0FBU0MsYUFBVCxDQUF1QixxQkFBdkIsQ0FBYjtBQUNBLFFBQU1DLGNBQWNGLFNBQVNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBcEI7QUFDQSxRQUFNRSxPQUFPSCxTQUFTQyxhQUFULENBQXVCLE1BQXZCLENBQWI7O0FBRUFGLFdBQU9LLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQUNDLENBQUQsRUFBTztBQUNwQ0EsVUFBRUMsY0FBRjtBQUNBUixhQUFLUyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsUUFBbkI7QUFDQVQsZUFBT1UsS0FBUCxDQUFhQyxPQUFiLEdBQXVCLE1BQXZCO0FBQ0FQLGFBQUtNLEtBQUwsQ0FBV0UsUUFBWCxHQUFzQixRQUF0QjtBQUNILEtBTEQ7O0FBT0FULGdCQUFZRSxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxVQUFDQyxDQUFELEVBQU87QUFDekNOLGVBQU9VLEtBQVAsQ0FBYUMsT0FBYixHQUF1QixPQUF2QjtBQUNBWixhQUFLUyxTQUFMLENBQWVLLE1BQWYsQ0FBc0IsUUFBdEI7QUFDQVQsYUFBS00sS0FBTCxDQUFXRSxRQUFYLEdBQXNCLFNBQXRCO0FBRUgsS0FMRDtBQU1IIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvY29tbW9uL2Z1bGxNZW51LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcclxuICAgIFxyXG4gICAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlci1ocmVmJyk7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudS1ibG9jaycpO1xyXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19iYWNrJyk7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cclxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgYnVyZ2VyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGJ1cmdlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XHJcblxyXG4gICAgfSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/common/fullMenu.js\n");

/***/ }),

/***/ "./src/scripts/common/map.js":
/*!***********************************!*\
  !*** ./src/scripts/common/map.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = initMap;\nfunction initMap() {\n  // Styles a map in night mode.\n  var map = new google.maps.Map(document.getElementById('map'), {\n    center: { lat: 59.846688, lng: 30.229678 },\n    zoom: 12,\n    styles: [{ elementType: 'geometry', stylers: [{ color: '#242f3e' }] }, { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] }, { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] }, {\n      featureType: 'administrative.locality',\n      elementType: 'labels.text.fill',\n      stylers: [{ color: '#d59563' }]\n    }, {\n      featureType: 'poi',\n      elementType: 'labels.text.fill',\n      stylers: [{ color: '#d59563' }]\n    }, {\n      featureType: 'poi.park',\n      elementType: 'geometry',\n      stylers: [{ color: '#263c3f' }]\n    }, {\n      featureType: 'poi.park',\n      elementType: 'labels.text.fill',\n      stylers: [{ color: '#6b9a76' }]\n    }, {\n      featureType: 'road',\n      elementType: 'geometry',\n      stylers: [{ color: '#FFFFFF' }]\n    }, {\n      featureType: 'road',\n      elementType: 'geometry.stroke',\n      stylers: [{ color: '#FFFFFF' }]\n    }, {\n      featureType: 'road',\n      elementType: 'labels.text.fill',\n      stylers: [{ color: '#FFFFFF' }]\n    }, {\n      featureType: 'road.highway',\n      elementType: 'geometry',\n      stylers: [{ color: 'grey' }]\n    }, {\n      featureType: 'road.highway',\n      elementType: 'geometry.stroke',\n      stylers: [{ color: 'grey' }]\n    }, {\n      featureType: 'road.highway',\n      elementType: 'labels.text.fill',\n      stylers: [{ color: 'grey' }]\n    }, {\n      featureType: 'transit',\n      elementType: 'geometry',\n      stylers: [{ color: 'grey' }]\n    }, {\n      featureType: 'transit.station',\n      elementType: 'labels.text.fill',\n      stylers: [{ color: 'grey' }]\n    }, {\n      featureType: 'water',\n      elementType: 'geometry',\n      stylers: [{ color: '#61dac9' }]\n    }, {\n      featureType: 'water',\n      elementType: 'labels.text.fill',\n      stylers: [{ color: '#61dac9' }]\n    }, {\n      featureType: 'water',\n      elementType: 'labels.text.stroke',\n      stylers: [{ color: '#61dac9' }]\n    }]\n  });\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21tb24vbWFwLmpzPzQ3NGIiXSwibmFtZXMiOlsiaW5pdE1hcCIsIm1hcCIsImdvb2dsZSIsIm1hcHMiLCJNYXAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2VudGVyIiwibGF0IiwibG5nIiwiem9vbSIsInN0eWxlcyIsImVsZW1lbnRUeXBlIiwic3R5bGVycyIsImNvbG9yIiwiZmVhdHVyZVR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUF3QkEsTztBQUFULFNBQVNBLE9BQVQsR0FBbUI7QUFDOUI7QUFDQSxNQUFJQyxNQUFNLElBQUlDLE9BQU9DLElBQVAsQ0FBWUMsR0FBaEIsQ0FBb0JDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBcEIsRUFBb0Q7QUFDNURDLFlBQVEsRUFBQ0MsS0FBSyxTQUFOLEVBQWlCQyxLQUFLLFNBQXRCLEVBRG9EO0FBRTVEQyxVQUFNLEVBRnNEO0FBRzVEQyxZQUFRLENBQ04sRUFBQ0MsYUFBYSxVQUFkLEVBQTBCQyxTQUFTLENBQUMsRUFBQ0MsT0FBTyxTQUFSLEVBQUQsQ0FBbkMsRUFETSxFQUVOLEVBQUNGLGFBQWEsb0JBQWQsRUFBb0NDLFNBQVMsQ0FBQyxFQUFDQyxPQUFPLFNBQVIsRUFBRCxDQUE3QyxFQUZNLEVBR04sRUFBQ0YsYUFBYSxrQkFBZCxFQUFrQ0MsU0FBUyxDQUFDLEVBQUNDLE9BQU8sU0FBUixFQUFELENBQTNDLEVBSE0sRUFJTjtBQUNFQyxtQkFBYSx5QkFEZjtBQUVFSCxtQkFBYSxrQkFGZjtBQUdFQyxlQUFTLENBQUMsRUFBQ0MsT0FBTyxTQUFSLEVBQUQ7QUFIWCxLQUpNLEVBU047QUFDRUMsbUJBQWEsS0FEZjtBQUVFSCxtQkFBYSxrQkFGZjtBQUdFQyxlQUFTLENBQUMsRUFBQ0MsT0FBTyxTQUFSLEVBQUQ7QUFIWCxLQVRNLEVBY047QUFDRUMsbUJBQWEsVUFEZjtBQUVFSCxtQkFBYSxVQUZmO0FBR0VDLGVBQVMsQ0FBQyxFQUFDQyxPQUFPLFNBQVIsRUFBRDtBQUhYLEtBZE0sRUFtQk47QUFDRUMsbUJBQWEsVUFEZjtBQUVFSCxtQkFBYSxrQkFGZjtBQUdFQyxlQUFTLENBQUMsRUFBQ0MsT0FBTyxTQUFSLEVBQUQ7QUFIWCxLQW5CTSxFQXdCTjtBQUNFQyxtQkFBYSxNQURmO0FBRUVILG1CQUFhLFVBRmY7QUFHRUMsZUFBUyxDQUFDLEVBQUNDLE9BQU8sU0FBUixFQUFEO0FBSFgsS0F4Qk0sRUE2Qk47QUFDRUMsbUJBQWEsTUFEZjtBQUVFSCxtQkFBYSxpQkFGZjtBQUdFQyxlQUFTLENBQUMsRUFBQ0MsT0FBTyxTQUFSLEVBQUQ7QUFIWCxLQTdCTSxFQWtDTjtBQUNFQyxtQkFBYSxNQURmO0FBRUVILG1CQUFhLGtCQUZmO0FBR0VDLGVBQVMsQ0FBQyxFQUFDQyxPQUFPLFNBQVIsRUFBRDtBQUhYLEtBbENNLEVBdUNOO0FBQ0VDLG1CQUFhLGNBRGY7QUFFRUgsbUJBQWEsVUFGZjtBQUdFQyxlQUFTLENBQUMsRUFBQ0MsT0FBTyxNQUFSLEVBQUQ7QUFIWCxLQXZDTSxFQTRDTjtBQUNFQyxtQkFBYSxjQURmO0FBRUVILG1CQUFhLGlCQUZmO0FBR0VDLGVBQVMsQ0FBQyxFQUFDQyxPQUFPLE1BQVIsRUFBRDtBQUhYLEtBNUNNLEVBaUROO0FBQ0VDLG1CQUFhLGNBRGY7QUFFRUgsbUJBQWEsa0JBRmY7QUFHRUMsZUFBUyxDQUFDLEVBQUNDLE9BQU8sTUFBUixFQUFEO0FBSFgsS0FqRE0sRUFzRE47QUFDRUMsbUJBQWEsU0FEZjtBQUVFSCxtQkFBYSxVQUZmO0FBR0VDLGVBQVMsQ0FBQyxFQUFDQyxPQUFPLE1BQVIsRUFBRDtBQUhYLEtBdERNLEVBMkROO0FBQ0VDLG1CQUFhLGlCQURmO0FBRUVILG1CQUFhLGtCQUZmO0FBR0VDLGVBQVMsQ0FBQyxFQUFDQyxPQUFPLE1BQVIsRUFBRDtBQUhYLEtBM0RNLEVBZ0VOO0FBQ0VDLG1CQUFhLE9BRGY7QUFFRUgsbUJBQWEsVUFGZjtBQUdFQyxlQUFTLENBQUMsRUFBQ0MsT0FBTyxTQUFSLEVBQUQ7QUFIWCxLQWhFTSxFQXFFTjtBQUNFQyxtQkFBYSxPQURmO0FBRUVILG1CQUFhLGtCQUZmO0FBR0VDLGVBQVMsQ0FBQyxFQUFDQyxPQUFPLFNBQVIsRUFBRDtBQUhYLEtBckVNLEVBMEVOO0FBQ0VDLG1CQUFhLE9BRGY7QUFFRUgsbUJBQWEsb0JBRmY7QUFHRUMsZUFBUyxDQUFDLEVBQUNDLE9BQU8sU0FBUixFQUFEO0FBSFgsS0ExRU07QUFIb0QsR0FBcEQsQ0FBVjtBQW9GSCIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL2NvbW1vbi9tYXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gICAgLy8gU3R5bGVzIGEgbWFwIGluIG5pZ2h0IG1vZGUuXHJcbiAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICAgY2VudGVyOiB7bGF0OiA1OS44NDY2ODgsIGxuZzogMzAuMjI5Njc4fSxcclxuICAgICAgem9vbTogMTIsXHJcbiAgICAgIHN0eWxlczogW1xyXG4gICAgICAgIHtlbGVtZW50VHlwZTogJ2dlb21ldHJ5Jywgc3R5bGVyczogW3tjb2xvcjogJyMyNDJmM2UnfV19LFxyXG4gICAgICAgIHtlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LnN0cm9rZScsIHN0eWxlcnM6IFt7Y29sb3I6ICcjMjQyZjNlJ31dfSxcclxuICAgICAgICB7ZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJywgc3R5bGVyczogW3tjb2xvcjogJyM3NDY4NTUnfV19LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZlYXR1cmVUeXBlOiAnYWRtaW5pc3RyYXRpdmUubG9jYWxpdHknLFxyXG4gICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcclxuICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZDU5NTYzJ31dXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmZWF0dXJlVHlwZTogJ3BvaScsXHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNkNTk1NjMnfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZlYXR1cmVUeXBlOiAncG9pLnBhcmsnLFxyXG4gICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzI2M2MzZid9XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmVhdHVyZVR5cGU6ICdwb2kucGFyaycsXHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyM2YjlhNzYnfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZCcsXHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcclxuICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjRkZGRkZGJ31dXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQnLFxyXG4gICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5zdHJva2UnLFxyXG4gICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNGRkZGRkYnfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZCcsXHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNGRkZGRkYnfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5JyxcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxyXG4gICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJ2dyZXknfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5JyxcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuc3Ryb2tlJyxcclxuICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICdncmV5J31dXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJ2dyZXknfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZlYXR1cmVUeXBlOiAndHJhbnNpdCcsXHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcclxuICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICdncmV5J31dXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmZWF0dXJlVHlwZTogJ3RyYW5zaXQuc3RhdGlvbicsXHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJ2dyZXknfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZlYXR1cmVUeXBlOiAnd2F0ZXInLFxyXG4gICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzYxZGFjOSd9XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmVhdHVyZVR5cGU6ICd3YXRlcicsXHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxyXG4gICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyM2MWRhYzknfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZlYXR1cmVUeXBlOiAnd2F0ZXInLFxyXG4gICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5zdHJva2UnLFxyXG4gICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyM2MWRhYzknfV1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/common/map.js\n");

/***/ }),

/***/ "./src/scripts/common/parallax.js":
/*!****************************************!*\
  !*** ./src/scripts/common/parallax.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction parallax() {\n\n    var parallaxSection = document.getElementById('parallax-section');\n    var layers = parallaxSection.children;\n\n    var move = function move(e) {\n        var initialX = window.innerWidth / 2 - e.pageX;\n        var initialY = window.innerHeight / 2 - e.pageY;\n\n        Array.from(layers).forEach(function (layer, i) {\n            var speed = i / 100;\n            var bottomPos = window.innerHeight / 2 * speed;\n            var posX = initialX * speed;\n            var posY = initialY * speed;\n\n            layer.style.transform = 'translate3d(' + posX + 'px, ' + posY + 'px, 0)';\n            layer.style.bottom = '-' + bottomPos + 'px';\n        });\n    };\n\n    window.addEventListener('mousemove', move);\n}\n\nwindow.onload = start;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21tb24vcGFyYWxsYXguanM/YTNmZCJdLCJuYW1lcyI6WyJwYXJhbGxheCIsInBhcmFsbGF4U2VjdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsYXllcnMiLCJjaGlsZHJlbiIsIm1vdmUiLCJlIiwiaW5pdGlhbFgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicGFnZVgiLCJpbml0aWFsWSIsImlubmVySGVpZ2h0IiwicGFnZVkiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwibGF5ZXIiLCJpIiwic3BlZWQiLCJib3R0b21Qb3MiLCJwb3NYIiwicG9zWSIsInN0eWxlIiwidHJhbnNmb3JtIiwiYm90dG9tIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ubG9hZCIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLFFBQVQsR0FBb0I7O0FBRWhCLFFBQU1DLGtCQUFrQkMsU0FBU0MsY0FBVCxDQUF3QixrQkFBeEIsQ0FBeEI7QUFDQSxRQUFNQyxTQUFTSCxnQkFBZ0JJLFFBQS9COztBQUVBLFFBQU1DLE9BQU8sU0FBUEEsSUFBTyxDQUFDQyxDQUFELEVBQU87QUFDaEIsWUFBTUMsV0FBV0MsT0FBT0MsVUFBUCxHQUFvQixDQUFwQixHQUF3QkgsRUFBRUksS0FBM0M7QUFDQSxZQUFNQyxXQUFXSCxPQUFPSSxXQUFQLEdBQXFCLENBQXJCLEdBQXlCTixFQUFFTyxLQUE1Qzs7QUFFQUMsY0FBTUMsSUFBTixDQUFXWixNQUFYLEVBQW1CYSxPQUFuQixDQUEyQixVQUFDQyxLQUFELEVBQVFDLENBQVIsRUFBYztBQUNyQyxnQkFBTUMsUUFBUUQsSUFBRSxHQUFoQjtBQUNBLGdCQUFNRSxZQUFZWixPQUFPSSxXQUFQLEdBQXFCLENBQXJCLEdBQXlCTyxLQUEzQztBQUNBLGdCQUFNRSxPQUFPZCxXQUFXWSxLQUF4QjtBQUNBLGdCQUFNRyxPQUFPWCxXQUFXUSxLQUF4Qjs7QUFFQUYsa0JBQU1NLEtBQU4sQ0FBWUMsU0FBWixvQkFBdUNILElBQXZDLFlBQWtEQyxJQUFsRDtBQUNBTCxrQkFBTU0sS0FBTixDQUFZRSxNQUFaLFNBQXlCTCxTQUF6QjtBQUNILFNBUkQ7QUFTSCxLQWJEOztBQWVBWixXQUFPa0IsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUNyQixJQUFyQztBQUNIOztBQUVERyxPQUFPbUIsTUFBUCxHQUFnQkMsS0FBaEIiLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jb21tb24vcGFyYWxsYXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBwYXJhbGxheCgpIHtcclxuXHJcbiAgICBjb25zdCBwYXJhbGxheFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyYWxsYXgtc2VjdGlvbicpO1xyXG4gICAgY29uc3QgbGF5ZXJzID0gcGFyYWxsYXhTZWN0aW9uLmNoaWxkcmVuO1xyXG5cclxuICAgIGNvbnN0IG1vdmUgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluaXRpYWxYID0gd2luZG93LmlubmVyV2lkdGggLyAyIC0gZS5wYWdlWDtcclxuICAgICAgICBjb25zdCBpbml0aWFsWSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDIgLSBlLnBhZ2VZO1xyXG5cclxuICAgICAgICBBcnJheS5mcm9tKGxheWVycykuZm9yRWFjaCgobGF5ZXIsIGkpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSBpLzEwMDtcclxuICAgICAgICAgICAgY29uc3QgYm90dG9tUG9zID0gd2luZG93LmlubmVySGVpZ2h0IC8gMiAqIHNwZWVkO1xyXG4gICAgICAgICAgICBjb25zdCBwb3NYID0gaW5pdGlhbFggKiBzcGVlZDtcclxuICAgICAgICAgICAgY29uc3QgcG9zWSA9IGluaXRpYWxZICogc3BlZWQ7XHJcblxyXG4gICAgICAgICAgICBsYXllci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtwb3NYfXB4LCAke3Bvc1l9cHgsIDApYDtcclxuICAgICAgICAgICAgbGF5ZXIuc3R5bGUuYm90dG9tID0gYC0ke2JvdHRvbVBvc31weGA7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZSk7XHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSBzdGFydDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/common/parallax.js\n");

/***/ })

/******/ });