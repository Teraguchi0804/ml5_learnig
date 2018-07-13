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
		this.style1 = ml5.styleTransfer('../assets/resource/models/wave', function () {
			this.modelLoaded();
			window.console.log('style1_COMP!!');
		}.bind(this));
		this.style2 = ml5.styleTransfer('../assets/resource/models/udnie', function () {
			this.modelLoaded();
			window.console.log('style2_COMP!!');
		}.bind(this));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTE1ODBlZjBkMWVlNzg4MjA5YjUiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL0NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3BhZ2UvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRvcC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJnYiIsInVuZGVmaW5lZCIsImluIiwiY29tbW9uIiwibWFpbiIsIkNvbW1vbiIsInNldHVwIiwic2V0RXZlbnRzIiwiJCIsImRvY3VtZW50Iiwib24iLCJvblJlYWR5IiwiYmluZCIsIm9uTG9hZCIsIk1haW4iLCJwYWdlIiwiZGF0YSIsIkRpc3BsYXlUb3AiLCJpbnB1dEltZyIsInN0YXR1c01zZyIsInRyYW5zZmVyQnRuIiwic3R5bGUxIiwibWw1Iiwic3R5bGVUcmFuc2ZlciIsIm1vZGVsTG9hZGVkIiwiY29uc29sZSIsImxvZyIsInN0eWxlMiIsIl9tb2RlbExvYWRlZCIsInRyYW5zZmVySW1hZ2VzIiwiX3RyYW5zZmVySW1hZ2VzIiwiX2NsaWNrIiwib250b3VjaHN0YXJ0IiwicmVhZHkiLCJodG1sIiwidHJhbnNmZXIiLCJyZXN1bHQiLCJjcmVhdGVJbWciLCJzcmMiLCJwYXJlbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztB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cEI7QUFFQTs7OzJCQUVRLENBR1I7Ozs4QkFFVzs7QUFFWDFCLEtBQUVULE1BQUYsRUFBVVcsRUFBVixDQUFhLE1BQWIsRUFBcUIsS0FBS0csTUFBTCxDQUFZRCxJQUFaLENBQWlCLElBQWpCLENBQXJCO0FBRUE7Ozs7OztrQkF0Rm1CSyxVIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1MTU4MGVmMGQxZWU3ODgyMDliNSIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFRvcFxuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IENvbW1vbiBmcm9tICcuL3BhZ2UvQ29tbW9uJztcbmltcG9ydCBNYWluIGZyb20gJy4vcGFnZS9NYWluJztcblxuKCgpPT57XG5cbiAgLy8gZ2xvYmFs44Kq44OW44K444Kn44Kv44OIXG4gIGlmICh3aW5kb3cuZ2I9PT11bmRlZmluZWQpIHdpbmRvdy5nYiA9IHt9O1xuICB3aW5kb3cuZ2IuaW4gPSB7fTsgLy9pbnN0YW5jZVxuXG4gIGdiLmluLmNvbW1vbiA9IG5ldyBDb21tb24oKTtcbiAgZ2IuaW4ubWFpbiA9IG5ldyBNYWluKCk7XG5cbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBDb21tb25cbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb24ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG5cdHNldHVwKCkge1xuXG5cblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvcGFnZS9Db21tb24uanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBNYWluXG4gKiBEYXRlOiAxOC8yLzJcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IERpc3BsYXlUb3AgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5VG9wJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuICAgIC8vcGFnZeODmuODvOOCuOWIpeOBrklE44KS5Y+W5b6XXG4gICAgY29uc3QgcGFnZSA9ICQoJ2JvZHknKS5kYXRhKCdpZCcpO1xuXG4gICAgLy8gd2luZG93LmNvbnNvbGUubG9nKCfnj77lnKjjga7jg5rjg7zjgrhJROOBryAnLCBwYWdlKTtcblxuXHRcdC8vcGFnZeOBrklE44GU44Go44Gr55m654Gr44GZ44KL44Kv44Op44K544Gu5oyv44KK5YiG44GRXG4gICAgc3dpdGNoIChwYWdlKSB7XG5cbiAgICAgIGNhc2UgJ3RvcCc6XG5cblx0XHRcdFx0bmV3IERpc3BsYXlUb3AoKTtcblxuXHRcdFx0XHRicmVhaztcbiAgICB9XG5cbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIFxuICB9XG5cbiAgb25SZW5kZXIoKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpOyAgICAgICAgXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL01haW4uanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBEaXNwbGF5VG9wXG4gKiBEYXRlOiAxOC83LzFcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5VG9wIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdHRoaXMuaW5wdXRJbWcgPSBudWxsO1xuXHRcdHRoaXMuc3RhdHVzTXNnID0gbnVsbDtcblx0XHR0aGlzLnRyYW5zZmVyQnRuID0gbnVsbDtcblxuXHRcdC8vIENyZWF0ZSB0d28gU3R5bGUgbWV0aG9kcyB3aXRoIGRpZmZlcmVudCBwcmUtdHJhaW5lZCBtb2RlbHNcblx0XHR0aGlzLnN0eWxlMSA9IG1sNS5zdHlsZVRyYW5zZmVyKCcuLi9hc3NldHMvcmVzb3VyY2UvbW9kZWxzL3dhdmUnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLm1vZGVsTG9hZGVkKCk7XG5cdFx0XHR3aW5kb3cuY29uc29sZS5sb2coJ3N0eWxlMV9DT01QISEnKTtcblx0XHR9LmJpbmQodGhpcykpO1xuXHRcdHRoaXMuc3R5bGUyID0gbWw1LnN0eWxlVHJhbnNmZXIoJy4uL2Fzc2V0cy9yZXNvdXJjZS9tb2RlbHMvdWRuaWUnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLm1vZGVsTG9hZGVkKCk7XG5cdFx0XHR3aW5kb3cuY29uc29sZS5sb2coJ3N0eWxlMl9DT01QISEnKTtcblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5tb2RlbExvYWRlZCA9IHRoaXMuX21vZGVsTG9hZGVkLmJpbmQodGhpcyk7XG5cdFx0dGhpcy50cmFuc2ZlckltYWdlcyA9IHRoaXMuX3RyYW5zZmVySW1hZ2VzLmJpbmQodGhpcyk7XG5cblx0XHR0aGlzLnNldHVwKCk7XG5cdFx0dGhpcy5zZXRFdmVudHMoKTtcblxuXHR9XG5cblx0c2V0dXAoKSB7XG5cblx0XHQvLyBub0NhbnZhcygpO1xuXG5cdFx0Ly8gU3RhdHVzIE1zZ1xuXHRcdHRoaXMuc3RhdHVzTXNnID0gJCgnI3N0YXR1c01zZycpO1xuXG5cdFx0Ly8gR2V0IHRoZSBpbnB1dCBpbWFnZVxuXHRcdHRoaXMuaW5wdXRJbWcgPSAkKCcjaW5wdXRJbWcnKTtcblxuXHRcdC8vIFRyYW5zZmVyIEJ1dHRvblxuXHRcdHRoaXMudHJhbnNmZXJCdG4gPSAkKCcjdHJhbnNmZXJCdG4nKTtcblxuXHRcdGxldCBfY2xpY2sgPSAod2luZG93Lm9udG91Y2hzdGFydCA9PT0gdW5kZWZpbmVkKT8gJ2NsaWNrJyA6ICd0b3VjaHN0YXJ0Jztcblx0XHQkKGRvY3VtZW50KS5vbihfY2xpY2ssIHRoaXMudHJhbnNmZXJCdG4sIHRoaXMudHJhbnNmZXJJbWFnZXMpO1xuXG5cdH1cblxuXHQvKipcblx0ICog44Oi44OH44Or44OH44O844K/44KS44Ot44O844OJXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfbW9kZWxMb2FkZWQoKSB7XG5cdFx0d2luZG93LmNvbnNvbGUubG9nKCdtb2RlbExvYWRlZCEhJyk7XG5cdFx0Ly8gQ2hlY2sgaWYgYm90aCBtb2RlbHMgYXJlIGxvYWRlZFxuXHRcdGlmKHRoaXMuc3R5bGUxLnJlYWR5ICYmIHRoaXMuc3R5bGUyLnJlYWR5KSB7XG5cdFx0XHR0aGlzLnN0YXR1c01zZy5odG1sKCdSZWFkeSEnKVxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfdHJhbnNmZXJJbWFnZXMoKSB7XG5cblx0XHR0aGlzLnN0YXR1c01zZy5odG1sKCdBcHBseWluZyBTdHlsZSBUcmFuc2Zlci4uLiEnKTtcblxuXHRcdHRoaXMuc3R5bGUxLnRyYW5zZmVyKHRoaXMuaW5wdXRJbWcsIGZ1bmN0aW9uKHJlc3VsdCkge1xuXHRcdFx0Y3JlYXRlSW1nKHJlc3VsdC5zcmMpLnBhcmVudCgnc3R5bGVBJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnN0eWxlMi50cmFuc2Zlcih0aGlzLmlucHV0SW1nLCBmdW5jdGlvbihyZXN1bHQpIHtcblx0XHRcdGNyZWF0ZUltZyhyZXN1bHQuc3JjKS5wYXJlbnQoJ3N0eWxlQicpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5zdGF0dXNNc2cuaHRtbCgnRG9uZSEnKTtcblxuXHR9XG5cblx0b25Mb2FkKCkge1xuXG5cblx0fVxuXG5cdHNldEV2ZW50cygpIHtcblxuXHRcdCQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpO1xuXG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VG9wLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==