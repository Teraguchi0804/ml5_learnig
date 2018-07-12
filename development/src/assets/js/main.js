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

		// Create two Style methods with different pre-trained models
		this.style1 = ml5.styleTransfer('assets/resource/models/wave', this.modelLoaded);
		this.style2 = ml5.styleTransfer('assets/resource/models/udnie', this.modelLoaded);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjllOWFlM2E4Y2VmZDY1Yjc0ZjYiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL0NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3BhZ2UvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRvcC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJnYiIsInVuZGVmaW5lZCIsImluIiwiY29tbW9uIiwibWFpbiIsIkNvbW1vbiIsInNldHVwIiwic2V0RXZlbnRzIiwiJCIsImRvY3VtZW50Iiwib24iLCJvblJlYWR5IiwiYmluZCIsIm9uTG9hZCIsIk1haW4iLCJwYWdlIiwiZGF0YSIsIkRpc3BsYXlUb3AiLCJpbnB1dEltZyIsInN0YXR1c01zZyIsInRyYW5zZmVyQnRuIiwic3R5bGUxIiwibWw1Iiwic3R5bGVUcmFuc2ZlciIsIm1vZGVsTG9hZGVkIiwic3R5bGUyIiwiX21vZGVsTG9hZGVkIiwidHJhbnNmZXJJbWFnZXMiLCJfdHJhbnNmZXJJbWFnZXMiLCJfY2xpY2siLCJvbnRvdWNoc3RhcnQiLCJyZWFkeSIsImh0bWwiLCJ0cmFuc2ZlciIsInJlc3VsdCIsImNyZWF0ZUltZyIsInNyYyIsInBhcmVudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtB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O0FBRUEsT0FBSXFCLFNBQVU5QixPQUFPK0IsWUFBUCxLQUF3QjdCLFNBQXpCLEdBQXFDLE9BQXJDLEdBQStDLFlBQTVEO0FBQ0FPLEtBQUVDLFFBQUYsRUFBWUMsRUFBWixDQUFlbUIsTUFBZixFQUF1QixLQUFLVCxXQUE1QixFQUF5QyxLQUFLTyxjQUE5QztBQUVBOztBQUVEOzs7Ozs7O2lDQUllOztBQUVkO0FBQ0EsT0FBRyxLQUFLTixNQUFMLENBQVlVLEtBQVosSUFBcUIsS0FBS04sTUFBTCxDQUFZTSxLQUFwQyxFQUEyQztBQUMxQyxTQUFLWixTQUFMLENBQWVhLElBQWYsQ0FBb0IsUUFBcEI7QUFDQTtBQUVEOztBQUVEOzs7Ozs7O29DQUlrQjs7QUFFakIsUUFBS2IsU0FBTCxDQUFlYSxJQUFmLENBQW9CLDZCQUFwQjs7QUFFQSxRQUFLWCxNQUFMLENBQVlZLFFBQVosQ0FBcUIsS0FBS2YsUUFBMUIsRUFBb0MsVUFBU2dCLE1BQVQsRUFBaUI7QUFDcERDLGNBQVVELE9BQU9FLEdBQWpCLEVBQXNCQyxNQUF0QixDQUE2QixRQUE3QjtBQUNBLElBRkQ7O0FBSUEsUUFBS1osTUFBTCxDQUFZUSxRQUFaLENBQXFCLEtBQUtmLFFBQTFCLEVBQW9DLFVBQVNnQixNQUFULEVBQWlCO0FBQ3BEQyxjQUFVRCxPQUFPRSxHQUFqQixFQUFzQkMsTUFBdEIsQ0FBNkIsUUFBN0I7QUFDQSxJQUZEOztBQUlBLFFBQUtsQixTQUFMLENBQWVhLElBQWYsQ0FBb0IsT0FBcEI7QUFFQTs7OzJCQUVRLENBR1I7Ozs4QkFFVzs7QUFFWHhCLEtBQUVULE1BQUYsRUFBVVcsRUFBVixDQUFhLE1BQWIsRUFBcUIsS0FBS0csTUFBTCxDQUFZRCxJQUFaLENBQWlCLElBQWpCLENBQXJCO0FBRUE7Ozs7OztrQkFoRm1CSyxVIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyOWU5YWUzYThjZWZkNjViNzRmNiIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFRvcFxuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IENvbW1vbiBmcm9tICcuL3BhZ2UvQ29tbW9uJztcbmltcG9ydCBNYWluIGZyb20gJy4vcGFnZS9NYWluJztcblxuKCgpPT57XG5cbiAgLy8gZ2xvYmFs44Kq44OW44K444Kn44Kv44OIXG4gIGlmICh3aW5kb3cuZ2I9PT11bmRlZmluZWQpIHdpbmRvdy5nYiA9IHt9O1xuICB3aW5kb3cuZ2IuaW4gPSB7fTsgLy9pbnN0YW5jZVxuXG4gIGdiLmluLmNvbW1vbiA9IG5ldyBDb21tb24oKTtcbiAgZ2IuaW4ubWFpbiA9IG5ldyBNYWluKCk7XG5cbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBDb21tb25cbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb24ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG5cdHNldHVwKCkge1xuXG5cblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvcGFnZS9Db21tb24uanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBNYWluXG4gKiBEYXRlOiAxOC8yLzJcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IERpc3BsYXlUb3AgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5VG9wJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuICAgIC8vcGFnZeODmuODvOOCuOWIpeOBrklE44KS5Y+W5b6XXG4gICAgY29uc3QgcGFnZSA9ICQoJ2JvZHknKS5kYXRhKCdpZCcpO1xuXG4gICAgLy8gd2luZG93LmNvbnNvbGUubG9nKCfnj77lnKjjga7jg5rjg7zjgrhJROOBryAnLCBwYWdlKTtcblxuXHRcdC8vcGFnZeOBrklE44GU44Go44Gr55m654Gr44GZ44KL44Kv44Op44K544Gu5oyv44KK5YiG44GRXG4gICAgc3dpdGNoIChwYWdlKSB7XG5cbiAgICAgIGNhc2UgJ3RvcCc6XG5cblx0XHRcdFx0bmV3IERpc3BsYXlUb3AoKTtcblxuXHRcdFx0XHRicmVhaztcbiAgICB9XG5cbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIFxuICB9XG5cbiAgb25SZW5kZXIoKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpOyAgICAgICAgXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL01haW4uanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBEaXNwbGF5VG9wXG4gKiBEYXRlOiAxOC83LzFcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5VG9wIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdHRoaXMuaW5wdXRJbWcgPSBudWxsO1xuXHRcdHRoaXMuc3RhdHVzTXNnID0gbnVsbDtcblx0XHR0aGlzLnRyYW5zZmVyQnRuID0gbnVsbDtcblxuXHRcdC8vIENyZWF0ZSB0d28gU3R5bGUgbWV0aG9kcyB3aXRoIGRpZmZlcmVudCBwcmUtdHJhaW5lZCBtb2RlbHNcblx0XHR0aGlzLnN0eWxlMSA9IG1sNS5zdHlsZVRyYW5zZmVyKCdhc3NldHMvcmVzb3VyY2UvbW9kZWxzL3dhdmUnLCB0aGlzLm1vZGVsTG9hZGVkKTtcblx0XHR0aGlzLnN0eWxlMiA9IG1sNS5zdHlsZVRyYW5zZmVyKCdhc3NldHMvcmVzb3VyY2UvbW9kZWxzL3VkbmllJywgdGhpcy5tb2RlbExvYWRlZCk7XG5cblx0XHR0aGlzLm1vZGVsTG9hZGVkID0gdGhpcy5fbW9kZWxMb2FkZWQuYmluZCh0aGlzKTtcblx0XHR0aGlzLnRyYW5zZmVySW1hZ2VzID0gdGhpcy5fdHJhbnNmZXJJbWFnZXMuYmluZCh0aGlzKTtcblxuXHRcdHRoaXMuc2V0dXAoKTtcblx0XHR0aGlzLnNldEV2ZW50cygpO1xuXG5cdH1cblxuXHRzZXR1cCgpIHtcblxuXHRcdC8vIG5vQ2FudmFzKCk7XG5cblx0XHQvLyBTdGF0dXMgTXNnXG5cdFx0dGhpcy5zdGF0dXNNc2cgPSAkKCcjc3RhdHVzTXNnJyk7XG5cblx0XHQvLyBHZXQgdGhlIGlucHV0IGltYWdlXG5cdFx0dGhpcy5pbnB1dEltZyA9ICQoJyNpbnB1dEltZycpO1xuXG5cdFx0Ly8gVHJhbnNmZXIgQnV0dG9uXG5cdFx0dGhpcy50cmFuc2ZlckJ0biA9ICQoJyN0cmFuc2ZlckJ0bicpO1xuXG5cdFx0bGV0IF9jbGljayA9ICh3aW5kb3cub250b3VjaHN0YXJ0ID09PSB1bmRlZmluZWQpPyAnY2xpY2snIDogJ3RvdWNoc3RhcnQnO1xuXHRcdCQoZG9jdW1lbnQpLm9uKF9jbGljaywgdGhpcy50cmFuc2ZlckJ0biwgdGhpcy50cmFuc2ZlckltYWdlcyk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiDjg6Ljg4fjg6vjg4fjg7zjgr/jgpLjg63jg7zjg4lcblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9tb2RlbExvYWRlZCgpIHtcblxuXHRcdC8vIENoZWNrIGlmIGJvdGggbW9kZWxzIGFyZSBsb2FkZWRcblx0XHRpZih0aGlzLnN0eWxlMS5yZWFkeSAmJiB0aGlzLnN0eWxlMi5yZWFkeSkge1xuXHRcdFx0dGhpcy5zdGF0dXNNc2cuaHRtbCgnUmVhZHkhJylcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X3RyYW5zZmVySW1hZ2VzKCkge1xuXG5cdFx0dGhpcy5zdGF0dXNNc2cuaHRtbCgnQXBwbHlpbmcgU3R5bGUgVHJhbnNmZXIuLi4hJyk7XG5cblx0XHR0aGlzLnN0eWxlMS50cmFuc2Zlcih0aGlzLmlucHV0SW1nLCBmdW5jdGlvbihyZXN1bHQpIHtcblx0XHRcdGNyZWF0ZUltZyhyZXN1bHQuc3JjKS5wYXJlbnQoJ3N0eWxlQScpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5zdHlsZTIudHJhbnNmZXIodGhpcy5pbnB1dEltZywgZnVuY3Rpb24ocmVzdWx0KSB7XG5cdFx0XHRjcmVhdGVJbWcocmVzdWx0LnNyYykucGFyZW50KCdzdHlsZUInKTtcblx0XHR9KTtcblxuXHRcdHRoaXMuc3RhdHVzTXNnLmh0bWwoJ0RvbmUhJyk7XG5cblx0fVxuXG5cdG9uTG9hZCgpIHtcblxuXG5cdH1cblxuXHRzZXRFdmVudHMoKSB7XG5cblx0XHQkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRvcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=