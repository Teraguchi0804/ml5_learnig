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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Common = __webpack_require__(1);

var _Common2 = _interopRequireDefault(_Common);

var _Main = __webpack_require__(2);

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * fileOverview:
 * Project:
 * File: Top
 * Date:
 * Author: Teraguchi
 */

(function () {

  // globalオブジェクト
  if (window.gb === undefined) window.gb = {};
  window.gb.in = {}; //instance

  gb.in.common = new _Common2.default();
  gb.in.main = new _Main2.default();
})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * fileOverview:
 * Project:
 * File: Common
 * Date:
 * Author: Teraguchi
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Common = function () {
  function Common() {
    _classCallCheck(this, Common);

    this.setup();
    this.setEvents();
  }

  _createClass(Common, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'onReady',
    value: function onReady() {}
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'setEvents',
    value: function setEvents() {

      $(document).on('ready', this.onReady.bind(this));
      $(window).on('load', this.onLoad.bind(this));
    }
  }]);

  return Common;
}();

exports.default = Common;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fileOverview:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Project:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * File: Main
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Date: 18/2/2
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author: Teraguchi
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _DisplayTop = __webpack_require__(3);

var _DisplayTop2 = _interopRequireDefault(_DisplayTop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

var Main = function () {
  function Main() {
    _classCallCheck(this, Main);

    this.setup();
    this.setEvents();
  }

  _createClass(Main, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'onReady',
    value: function onReady() {

      //pageページ別のIDを取得
      var page = $('body').data('id');

      // window.console.log('現在のページIDは ', page);

      //pageのIDごとに発火するクラスの振り分け
      switch (page) {

        case 'top':

          new _DisplayTop2.default();

          break;
      }
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onRender',
    value: function onRender() {}
  }, {
    key: 'setEvents',
    value: function setEvents() {

      $(document).on('ready', this.onReady.bind(this));
      $(window).on('load', this.onLoad.bind(this));
    }
  }]);

  return Main;
}();

exports.default = Main;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * fileOverview:
 * Project:
 * File: DisplayTop
 * Date: 18/7/1
 * Author: Teraguchi
 */



Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DisplayTop = function () {
	function DisplayTop() {
		_classCallCheck(this, DisplayTop);

		this.inputImg = null;
		this.statusMsg = null;
		this.transferBtn = null;

		// // Create two Style methods with different pre-trained models
		// this.style1 = ml5.styleTransfer('./assets/resource/models/wave', this.modelLoaded);
		// this.style2 = ml5.styleTransfer('./assets/resource/models/udnie', this.modelLoaded);

		this.style1 = ml5.styleTransfer('../assets/resource/models/wave', function () {
			window.console.log('aaa');
		});
		this.style2 = ml5.styleTransfer('../assets/resource/models/udnie', this.modelLoaded);

		this.modelLoaded = this._modelLoaded.bind(this);
		this.transferImages = this._transferImages.bind(this);

		this.setup();
		this.setEvents();
	}

	_createClass(DisplayTop, [{
		key: 'setup',
		value: function setup() {

			// noCanvas();

			// Status Msg
			this.statusMsg = $('#statusMsg');

			// Get the input image
			this.inputImg = $('#inputImg');

			// Transfer Button
			this.transferBtn = $('#transferBtn');

			var _click = window.ontouchstart === undefined ? 'click' : 'touchstart';
			$(document).on(_click, this.transferBtn, this.transferImages);
		}

		/**
   * モデルデータをロード
   * @private
   */

	}, {
		key: '_modelLoaded',
		value: function _modelLoaded() {
			window.console.log('modelLoaded!!');
			// Check if both models are loaded
			if (this.style1.ready && this.style2.ready) {
				this.statusMsg.html('Ready!');
			}
		}

		/**
   *
   * @private
   */

	}, {
		key: '_transferImages',
		value: function _transferImages() {

			this.statusMsg.html('Applying Style Transfer...!');

			this.style1.transfer(this.inputImg, function (result) {
				createImg(result.src).parent('styleA');
			});

			this.style2.transfer(this.inputImg, function (result) {
				createImg(result.src).parent('styleB');
			});

			this.statusMsg.html('Done!');
		}
	}, {
		key: 'onLoad',
		value: function onLoad() {}
	}, {
		key: 'setEvents',
		value: function setEvents() {

			$(window).on('load', this.onLoad.bind(this));
		}
	}]);

	return DisplayTop;
}();

exports.default = DisplayTop;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjY4YWEzZjdmMjQ4ODI0ZjExYTMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL0NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3BhZ2UvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRvcC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJnYiIsInVuZGVmaW5lZCIsImluIiwiY29tbW9uIiwibWFpbiIsIkNvbW1vbiIsInNldHVwIiwic2V0RXZlbnRzIiwiJCIsImRvY3VtZW50Iiwib24iLCJvblJlYWR5IiwiYmluZCIsIm9uTG9hZCIsIk1haW4iLCJwYWdlIiwiZGF0YSIsIkRpc3BsYXlUb3AiLCJpbnB1dEltZyIsInN0YXR1c01zZyIsInRyYW5zZmVyQnRuIiwic3R5bGUxIiwibWw1Iiwic3R5bGVUcmFuc2ZlciIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZTIiLCJtb2RlbExvYWRlZCIsIl9tb2RlbExvYWRlZCIsInRyYW5zZmVySW1hZ2VzIiwiX3RyYW5zZmVySW1hZ2VzIiwiX2NsaWNrIiwib250b3VjaHN0YXJ0IiwicmVhZHkiLCJodG1sIiwidHJhbnNmZXIiLCJyZXN1bHQiLCJjcmVhdGVJbWciLCJzcmMiLCJwYXJlbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztB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QkssVSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjY4YWEzZjdmMjQ4ODI0ZjExYTMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBUb3BcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBDb21tb24gZnJvbSAnLi9wYWdlL0NvbW1vbic7XG5pbXBvcnQgTWFpbiBmcm9tICcuL3BhZ2UvTWFpbic7XG5cbigoKT0+e1xuXG4gIC8vIGdsb2JhbOOCquODluOCuOOCp+OCr+ODiFxuICBpZiAod2luZG93LmdiPT09dW5kZWZpbmVkKSB3aW5kb3cuZ2IgPSB7fTtcbiAgd2luZG93LmdiLmluID0ge307IC8vaW5zdGFuY2VcblxuICBnYi5pbi5jb21tb24gPSBuZXcgQ29tbW9uKCk7XG4gIGdiLmluLm1haW4gPSBuZXcgTWFpbigpO1xuXG59KSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvVG9wLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ29tbW9uXG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuXHRzZXR1cCgpIHtcblxuXG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cblxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3BhZ2UvQ29tbW9uLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogTWFpblxuICogRGF0ZTogMTgvMi8yXG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBEaXNwbGF5VG9wIGZyb20gJy4uL0Rpc3BsYXkvRGlzcGxheVRvcCc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICAvL3BhZ2Xjg5rjg7zjgrjliKXjga5JROOCkuWPluW+l1xuICAgIGNvbnN0IHBhZ2UgPSAkKCdib2R5JykuZGF0YSgnaWQnKTtcblxuICAgIC8vIHdpbmRvdy5jb25zb2xlLmxvZygn54++5Zyo44Gu44Oa44O844K4SUTjga8gJywgcGFnZSk7XG5cblx0XHQvL3BhZ2Xjga5JROOBlOOBqOOBq+eZuueBq+OBmeOCi+OCr+ODqeOCueOBruaMr+OCiuWIhuOBkVxuICAgIHN3aXRjaCAocGFnZSkge1xuXG4gICAgICBjYXNlICd0b3AnOlxuXG5cdFx0XHRcdG5ldyBEaXNwbGF5VG9wKCk7XG5cblx0XHRcdFx0YnJlYWs7XG4gICAgfVxuXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBcbiAgfVxuXG4gIG9uUmVuZGVyKCkge1xuXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvcGFnZS9NYWluLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRGlzcGxheVRvcFxuICogRGF0ZTogMTgvNy8xXG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheVRvcCB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHR0aGlzLmlucHV0SW1nID0gbnVsbDtcblx0XHR0aGlzLnN0YXR1c01zZyA9IG51bGw7XG5cdFx0dGhpcy50cmFuc2ZlckJ0biA9IG51bGw7XG5cblx0XHQvLyAvLyBDcmVhdGUgdHdvIFN0eWxlIG1ldGhvZHMgd2l0aCBkaWZmZXJlbnQgcHJlLXRyYWluZWQgbW9kZWxzXG5cdFx0Ly8gdGhpcy5zdHlsZTEgPSBtbDUuc3R5bGVUcmFuc2ZlcignLi9hc3NldHMvcmVzb3VyY2UvbW9kZWxzL3dhdmUnLCB0aGlzLm1vZGVsTG9hZGVkKTtcblx0XHQvLyB0aGlzLnN0eWxlMiA9IG1sNS5zdHlsZVRyYW5zZmVyKCcuL2Fzc2V0cy9yZXNvdXJjZS9tb2RlbHMvdWRuaWUnLCB0aGlzLm1vZGVsTG9hZGVkKTtcblxuXHRcdHRoaXMuc3R5bGUxID0gbWw1LnN0eWxlVHJhbnNmZXIoJy4uL2Fzc2V0cy9yZXNvdXJjZS9tb2RlbHMvd2F2ZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5jb25zb2xlLmxvZygnYWFhJyk7XG5cdFx0fSk7XG5cdFx0dGhpcy5zdHlsZTIgPSBtbDUuc3R5bGVUcmFuc2ZlcignLi4vYXNzZXRzL3Jlc291cmNlL21vZGVscy91ZG5pZScsIHRoaXMubW9kZWxMb2FkZWQpO1xuXG5cdFx0dGhpcy5tb2RlbExvYWRlZCA9IHRoaXMuX21vZGVsTG9hZGVkLmJpbmQodGhpcyk7XG5cdFx0dGhpcy50cmFuc2ZlckltYWdlcyA9IHRoaXMuX3RyYW5zZmVySW1hZ2VzLmJpbmQodGhpcyk7XG5cblx0XHR0aGlzLnNldHVwKCk7XG5cdFx0dGhpcy5zZXRFdmVudHMoKTtcblxuXHR9XG5cblx0c2V0dXAoKSB7XG5cblx0XHQvLyBub0NhbnZhcygpO1xuXG5cdFx0Ly8gU3RhdHVzIE1zZ1xuXHRcdHRoaXMuc3RhdHVzTXNnID0gJCgnI3N0YXR1c01zZycpO1xuXG5cdFx0Ly8gR2V0IHRoZSBpbnB1dCBpbWFnZVxuXHRcdHRoaXMuaW5wdXRJbWcgPSAkKCcjaW5wdXRJbWcnKTtcblxuXHRcdC8vIFRyYW5zZmVyIEJ1dHRvblxuXHRcdHRoaXMudHJhbnNmZXJCdG4gPSAkKCcjdHJhbnNmZXJCdG4nKTtcblxuXHRcdGxldCBfY2xpY2sgPSAod2luZG93Lm9udG91Y2hzdGFydCA9PT0gdW5kZWZpbmVkKT8gJ2NsaWNrJyA6ICd0b3VjaHN0YXJ0Jztcblx0XHQkKGRvY3VtZW50KS5vbihfY2xpY2ssIHRoaXMudHJhbnNmZXJCdG4sIHRoaXMudHJhbnNmZXJJbWFnZXMpO1xuXG5cdH1cblxuXHQvKipcblx0ICog44Oi44OH44Or44OH44O844K/44KS44Ot44O844OJXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfbW9kZWxMb2FkZWQoKSB7XG5cdFx0d2luZG93LmNvbnNvbGUubG9nKCdtb2RlbExvYWRlZCEhJyk7XG5cdFx0Ly8gQ2hlY2sgaWYgYm90aCBtb2RlbHMgYXJlIGxvYWRlZFxuXHRcdGlmKHRoaXMuc3R5bGUxLnJlYWR5ICYmIHRoaXMuc3R5bGUyLnJlYWR5KSB7XG5cdFx0XHR0aGlzLnN0YXR1c01zZy5odG1sKCdSZWFkeSEnKVxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfdHJhbnNmZXJJbWFnZXMoKSB7XG5cblx0XHR0aGlzLnN0YXR1c01zZy5odG1sKCdBcHBseWluZyBTdHlsZSBUcmFuc2Zlci4uLiEnKTtcblxuXHRcdHRoaXMuc3R5bGUxLnRyYW5zZmVyKHRoaXMuaW5wdXRJbWcsIGZ1bmN0aW9uKHJlc3VsdCkge1xuXHRcdFx0Y3JlYXRlSW1nKHJlc3VsdC5zcmMpLnBhcmVudCgnc3R5bGVBJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnN0eWxlMi50cmFuc2Zlcih0aGlzLmlucHV0SW1nLCBmdW5jdGlvbihyZXN1bHQpIHtcblx0XHRcdGNyZWF0ZUltZyhyZXN1bHQuc3JjKS5wYXJlbnQoJ3N0eWxlQicpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5zdGF0dXNNc2cuaHRtbCgnRG9uZSEnKTtcblxuXHR9XG5cblx0b25Mb2FkKCkge1xuXG5cblx0fVxuXG5cdHNldEV2ZW50cygpIHtcblxuXHRcdCQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpO1xuXG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VG9wLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==