/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// main application entry point
	__webpack_require__(1);
	__webpack_require__(99);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var _coffeekrakenSDatepickerComponent = __webpack_require__(2);

	var _coffeekrakenSDatepickerComponent2 = _interopRequireDefault(_coffeekrakenSDatepickerComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _SDatepickerComponent = __webpack_require__(3);

	var _SDatepickerComponent2 = _interopRequireDefault(_SDatepickerComponent);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _SDatepickerComponent2.default.define('s-datepicker', _SDatepickerComponent2.default);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	var _get = function get(object, property, receiver) {
		if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
			var parent = Object.getPrototypeOf(object);if (parent === null) {
				return undefined;
			} else {
				return get(parent, property, receiver);
			}
		} else if ("value" in desc) {
			return desc.value;
		} else {
			var getter = desc.get;if (getter === undefined) {
				return undefined;
			}return getter.call(receiver);
		}
	};

	var _SWebComponent2 = __webpack_require__(4);

	var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

	var _flatpickr = __webpack_require__(97);

	var _flatpickr2 = _interopRequireDefault(_flatpickr);

	var _integer = __webpack_require__(98);

	var _integer2 = _interopRequireDefault(_integer);

	var _autoCast = __webpack_require__(7);

	var _autoCast2 = _interopRequireDefault(_autoCast);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	console.log('window', window);
	console.log('document', document);

	var SDatepickerComponent = function (_SWebComponent) {
		_inherits(SDatepickerComponent, _SWebComponent);

		function SDatepickerComponent() {
			_classCallCheck(this, SDatepickerComponent);

			return _possibleConstructorReturn(this, (SDatepickerComponent.__proto__ || Object.getPrototypeOf(SDatepickerComponent)).apply(this, arguments));
		}

		_createClass(SDatepickerComponent, [{
			key: 'componentWillMount',

			/**
	   * Component will mount
	   * @definition 		SWebComponent.componentWillMount
	   */
			value: function componentWillMount() {
				_get(SDatepickerComponent.prototype.__proto__ || Object.getPrototypeOf(SDatepickerComponent.prototype), 'componentWillMount', this).call(this);
			}

			/**
	   * Mount component
	   * @definition 		SWebComponent.componentMount
	   */

		}, {
			key: 'componentMount',
			value: function componentMount() {
				_get(SDatepickerComponent.prototype.__proto__ || Object.getPrototypeOf(SDatepickerComponent.prototype), 'componentMount', this).call(this);

				// get the datepicker input target
				this._target = this;
				if (this.props.for) {
					// try to get the input
					var input = document.querySelector('[name="' + this.props.for + '"],input#' + this.props.for);
					if (input) {
						this._target = input;
					}
				}

				// instanciate the datepicker
				this._instanciateDatepicker();
			}

			/**
	   * Component unmount
	   * @definition 		SWebComponent.componentUnmount
	   */

		}, {
			key: 'componentUnmount',
			value: function componentUnmount() {
				_get(SDatepickerComponent.prototype.__proto__ || Object.getPrototypeOf(SDatepickerComponent.prototype), 'componentUnmount', this).call(this);
			}

			/**
	   * Component will receive prop
	   * @definition 		SWebComponent.componentWillReceiveProp
	   */

		}, {
			key: 'componentWillReceiveProp',
			value: function componentWillReceiveProp(name, newVal, oldVal) {
				switch (name) {
					case 'color':
						break;
					default:
						// destroy and recreate the datepicker
						this._flatpickr.destroy();
						this._instanciateDatepicker();
						break;
				}
			}

			/**
	   * Render the component
	   * Here goes the code that reflect the this.props state on the actual html element
	   * @definition 		SWebComponent.render
	   */

		}, {
			key: 'render',
			value: function render() {
				_get(SDatepickerComponent.prototype.__proto__ || Object.getPrototypeOf(SDatepickerComponent.prototype), 'render', this).call(this);
				// copy props
				if (this.props.color) {
					this._flatpickr.calendarContainer.setAttribute('color', this.props.color);
				}
			}

			/**
	   * Create datepicker instance
	   */

		}, {
			key: '_instanciateDatepicker',
			value: function _instanciateDatepicker() {
				var _this2 = this;

				this._flatpickr = new _flatpickr2.default(this._target, {
					clickOpens: this.props.clickOpens,
					dateFormat: this.props.dateFormat,
					defaultDate: this._target.value || this.props.defaultDate,
					disable: this.props.disable,
					enable: this.props.enable,
					enableTime: this.props.enableTime,
					enableSeconds: this.props.enableSeconds,
					hourIncrement: this.props.hourIncrement,
					inline: this.props.inline,
					maxDate: this.props.maxDate,
					minDate: this.props.minDate,
					minuteIncrement: this.props.minuteIncrement,
					noCalendar: this.props.noCalendar,
					onChange: function onChange(dateObj, dateStr, instance) {
						_this2.props.onChange && _this2.props.onChange(dateObj, dateStr, instance);
						_this2.dispatchComponentEvent('change', {
							dateObj: dateObj,
							dateStr: dateStr,
							instance: instance
						});
					},
					onClose: this.props.onClose,
					onOpen: function onOpen(dateObj, dateStr, instance) {
						_this2.props.onOpen && _this2.props.onOpen(dateObj, dateStr, instance);
					},
					onReady: function onReady(dateObj, dateStr, instance) {
						_this2.props.onReady && _this2.props.onReady(dateObj, dateStr, instance);
						if (_this2._target.tagName.toLowerCase() === 'input') {
							if (!_this2._target.value) {
								instance.setDate(_this2.props.minDate || new Date());
							}
							instance.triggerChange();
						}
					},
					parseDate: this.props.parseDate ? this.props.parseDate.bind(this) : function (date) {
						// if the date is a time only
						if (this.props.noCalendar && this.props.enableTime) {
							return new Date(Date.parse('2000.01.01 ' + date));
						} else if ((0, _integer2.default)((0, _autoCast2.default)(date))) {
							// it's a timestamp
							return new Date(parseInt(date) * 1000);
						}
						return new Date(Date.parse(date));
					}.bind(this),
					shorthandCurrentMonth: this.props.shorthandCurrentMonth,
					time_24hr: this.props.time24hr,
					utc: this.props.utc,
					weekNumbers: this.props.weekNumbers,
					wrap: this.props.wrap,
					appendTo: this
				});
			}
		}], [{
			key: 'css',

			/**
	   * Css
	   */
			value: function css(componentName, componentNameDash) {
				return '\n\t\t\t' + componentNameDash + ' {\n\t\t\t\tdisplay:inline-block;\n\t\t\t}\n\t\t\t.flatpickr-input {\n\t\t\t\tcursor: pointer;\n\t\t\t\tz-index: 1\n\t\t\t}\n\t\t\t.flatpickr-mobileInput {\n\t\t\t\topacity: 0;\n\t\t\t\tvisibility: hidden;\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 0;\n\t\t\t\theight: 0;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tpadding: 0\n\t\t\t}\n\t\t\t.flatpickr-calendar {\n\t\t\t\tbackground: #fff;\n\t\t\t\topacity:0;\n\t\t\t\tpointer-events: none;\n\t\t\t\tmargin-top:-20px;\n\t\t\t\ttext-align: center;\n\t\t\t\tpadding:1em;\n\t\t\t\tposition: absolute;\n\t\t\t\ttop:0; left: -200vw;\n\t\t\t}\n\t\t\t.flatpickr-calendar.open {\n\t\t\t\topacity: 1;\n\t\t\t\tz-index: 99999;\n\t\t\t\tmargin-top:0;\n\t\t\t\tpointer-events: all;\n\t\t\t\ttop:0; left:0;\n\t\t\t}\n\t\t\t.flatpickr-calendar.inline {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tposition: relative;\n\t\t\t\topacity:1;\n\t\t\t\tmargin-top:0;\n\t\t\t\tpointer-events: all;\n\t\t\t\tleft:0;\n\t\t\t}\n\t\t\t.flatpickr-calendar.static {\n\t\t\t\tposition: relative\n\t\t\t}\n\t\t\t.flatpickr-calendar.static.open {\n\t\t\t\tdisplay: block\n\t\t\t}\n\t\t\t.flatpickr-calendar.hasWeeks {\n\t\t\t}\n\n\t\t\t.flatpickr-month,\n\t\t\t.flatpickr-next-month i,\n\t\t\t.flatpickr-prev-month i {\n\t\t\t\tposition: relative\n\t\t\t}\n\n\t\t\t.flatpickr-month {\n\t\t\t\tuser-select:none;\n\t\t\t\twidth:100%;\n\t\t\t\tdisplay: flex;\n\t\t\t}\n\t\t\t.flatpickr-month > span {\n\t\t\t\tvertical-align: middle;\n\t\t\t}\n\n\t\t\t.flatpickr-next-month,\n\t\t\t.flatpickr-prev-month {\n\t\t\t\ttext-decoration: none;\n\t\t\t\tcursor: pointer;\n\t\t\t\twidth: 3em;\n\t\t\t\tdisplay : inline-block !important;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t\t.flatpickr-next-month[style*="none"],\n\t\t\t.flatpickr-prev-month[style*="none"] {\n\t\t\t\tpointer-events:none;\n\t\t\t\topacity: .4;\n\t\t\t}\n\t\t\t.flatpickr-next-month svg,\n\t\t\t.flatpickr-prev-month svg {\n\t\t\t\theight: 1em;\n\t\t\t}\n\t\t\t.flatpickr-next-month svg path,\n\t\t\t.flatpickr-prev-month svg path {\n\t\t\t\tfill: inherit\n\t\t\t}\n\t\t\t.flatpickr-current-month {\n\t\t\t\tflex: 1 auto;\n\t\t\t}\n\t\t\t.flatpickr-current-month .cur-month {\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\t\t\t.flatpickr-current-month .numInputWrapper {\n\t\t\t\tdisplay:inline;\n\t\t\t}\n\t\t\t.flatpickr-current-month .cur-year {\n\t\t\t\tpadding: 0;\n\t\t\t\tmargin: 0;\n\t\t\t\twidth: 3.2em;\n\t\t\t\tdisplay: inline;\n\t\t\t\tfont-size: inherit;\n\t\t\t\tline-height: 0;\n\t\t\t\theight: initial;\n\t\t\t\tborder: 0;\n\t\t\t\tborder-radius: 0;\n\t\t\t\tvertical-align: initial;\n\t\t\t\toutline:none;\n\t\t\t}\n\t\t\t.flatpickr-current-month .cur-year:hover {\n\t\t\t\tbackground: rgba(0, 0, 0, .05)\n\t\t\t}\n\t\t\t.flatpickr-weekdays {\n\t\t\t\tpadding:.5em 0;\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\t\t\tspan.flatpickr-weekday {\n\t\t\t\tcursor: default;\n\t\t\t\tmargin: 0;\n\t\t\t\ttext-align: center;\n\t\t\t\tdisplay:inline-block;\n\t\t\t\twidth: 5em;\n\t\t\t\tfont-size:.6em;\n\t\t\t\tpadding:.5em 0;\n\t\t\t}\n\n\t\t\t.flatpickr-rContainer {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\twidth: 21em;\n\t\t\t}\n\t\t\t.flatpickr-days {\n\t\t\t\toutline: 0;\n\t\t\t\ttext-align: left;\n\t\t\t}\n\t\t\t.flatpickr-day {\n\t\t\t\twidth: 3em;\n\t\t\t\theight: 3em;\n\t\t\t\tline-height: 3em;\n\t\t\t\tcursor: pointer;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tmargin: 0;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t\t.flatpickr-day.disabled,\n\t\t\t.flatpickr-day.disabled:hover,\n\t\t\t.flatpickr-day.nextMonthDay,\n\t\t\t.flatpickr-day.notAllowed,\n\t\t\t.flatpickr-day.notAllowed.nextMonthDay,\n\t\t\t.flatpickr-day.notAllowed.prevMonthDay,\n\t\t\t.flatpickr-day.prevMonthDay {\n\t\t\t\tcolor: rgba(57, 57, 57, .3);\n\t\t\t\tbackground: 0 0;\n\t\t\t\tborder-color: transparent;\n\t\t\t\tcursor: default\n\t\t\t}\n\t\t\t.flatpickr-weekwrapper {\n\t\t\t\tpadding-top:.5em;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tfloat: left\n\t\t\t}\n\t\t\t.flatpickr-weekwrapper .flatpickr-weeks {\n\t\t\t\tpadding: .5em .25rem 0 .25em;\n\t\t\t}\n\t\t\t.flatpickr-weekwrapper .flatpickr-weekday {\n\t\t\t\tfloat: none;\n\t\t\t\twidth: 100%\n\t\t\t}\n\t\t\t.flatpickr-weekwrapper span.flatpickr-day {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 100%\n\t\t\t}\n\t\t\t.flatpickr-time {\n\t\t\t\toverflow: auto;\n\t\t\t\ttext-align: center;\n\t\t\t\tborder-top: 0;\n\t\t\t\toutline: 0;\n\t\t\t\tdisplay: block;\n\t\t\t\tdisplay: flex;\n\t\t\t\tmin-width:10em;\n\t\t\t}\n\t\t\t.flatpickr-am-pm {\n\t\t\t\tuser-select:none;\n\t\t\t}\n\t\t\t.flatpickr-am-pm,\n\t\t\t.flatpickr-time input,\n\t\t\t.flatpickr-time-separator {\n\t\t\t\theight: 3em;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tline-height: 3em;\n\t\t\t\tcolor: #393939\n\t\t\t}\n\t\t\t.flatpickr-time input {\n\t\t\t\tfont-size: 1em;\n\t\t\t\tbackground: 0 0;\n\t\t\t\tbox-shadow: none;\n\t\t\t\tborder: 0;\n\t\t\t\tborder-radius: 0;\n\t\t\t\tflex: 1;\n\t\t\t\twidth: 33%;\n\t\t\t\tmin-width: 33%;\n\t\t\t\ttext-align: center;\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 0;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.flatpickr-time input.flatpickr-minute {\n\t\t\t\twidth: 26%;\n\t\t\t}\n\t\t\t.flatpickr-time input.flatpickr-second {\n\t\t\t}\n\t\t\t.flatpickr-time input:focus {\n\t\t\t\toutline: 0;\n\t\t\t\tborder: 0\n\t\t\t}\n\n\t\t\t.flatpickr-time.has-seconds input[type=number] {\n\t\t\t\twidth: 25%;\n\t\t\t\tmin-width: 25%\n\t\t\t}\n\t\t\t.hasTime .flatpickr-days,\n\t\t\t.hasWeeks .flatpickr-days {\n\t\t\t\tborder-bottom: 0;\n\t\t\t\tborder-bottom-right-radius: 0;\n\t\t\t\tborder-bottom-left-radius: 0\n\t\t\t}\n\t\t\t.hasWeeks .flatpickr-days {\n\t\t\t\tborder-left: 0\n\t\t\t}\n\n\t\t\t.flatpickr-am-pm {\n\t\t\t\toutline: 0;\n\t\t\t\twidth: 21%;\n\t\t\t\tpadding: 0 2%;\n\t\t\t\tcursor: pointer;\n\t\t\t\ttext-align: left;\n\t\t\t}\n\n\t\t\t@media all and (-ms-high-contrast: none) {\n\t\t\t\t.flatpickr-month {\n\t\t\t\t\tpadding: 0\n\t\t\t\t}\n\t\t\t\t.flatpickr-month svg {\n\t\t\t\t\ttop: 0 !important\n\t\t\t\t}\n\t\t\t}\n\t\t';
			}
		}, {
			key: 'defaultProps',

			/**
	   * Default props
	   * @definition 		SWebComponent.defaultProps
	   */
			get: function get() {
				return {
					/**
	    * Specify the name or id of the field to link the datepicker to
	    * @prop
	    * @type  		{String}
	    */
					for: null,

					/**
	     * Displays the calendar inline
	     * @prop
	     * @type 		{Boolean}
	     */
					inline: false,

					/**
	     * Specify the color to use to skin the datepicker.
	     * @physicalProp
	     * @observed
	     * @prop
	     * @type		{String}
	     */
					color: null,

					/**
	     * Allows the user to enter a date directly input the input field. By default, direct entry is disabled.
	     * @prop
	     * @type 		{Boolean}
	     */
					allowInput: false,

					/**
	     * Clicking on the input opens the date (time) picker. Disable this if you wish to open the calendar manually with `.open()`
	     * @prop
	     * @type 		{Boolean}
	     */
					clickOpens: true,

					/**
	     * A string of characters which are used to define how the date will be displayed in the input box. The supported characters are defined in the table below.
	     * @prop
	     * @type 		{String}
	     */
					dateFormat: 'Y-m-d',

					/**
	     * Set the initial selected date. Same as preloading a date string into an input's value attribute, but can also handle a Date object.
	     * @prop
	     * @type 		{Date}{String}
	     */
					defaultDate: null,

					/**
	     * Disable some dates
	     * @see 		https://chmln.github.io/flatpickr/#disable
	     * @prop
	     * @type 		{Array}
	     */
					disable: [],

					/**
	     * Specify if the datepicker is disabled or not
	     * @physicalProp
	     * @observed
	     * @prop
	     * @type 		{Boolean}
	     */
					disabled: false,

					/**
	     * Disable all dates except the ones you specify.
	     * @see 		https://chmln.github.io/flatpickr/#enable
	     * @prop
	     * @type 		{Array}
	     */
					enable: [],

					/**
	     * Enables time picker
	     * @prop
	     * @type 		{Boolean}
	     */
					enableTime: false,

					/**
	     * Enables seconds in the time picker.
	     * @prop
	     * @type 		{Boolean}
	     */
					enableSeconds: false,

					/**
	     * Adjusts the step for the hour input (incl. scrolling)
	     * @prop
	     * @type 		{Integer}
	     */
					hourIncrement: 1,

					/**
	     * Adjusts the step for the minute input (incl. scrolling)
	     * @prop
	     * @type 		{Integer}
	     */
					minuteIncrement: 5,

					/**
	     * The maximum date that a user can pick to.
	     * @prop
	     * @type 		{Date}{String}
	     */
					maxDate: null,

					/**
	     * The minimum date that a user can start picking from
	     * @prop
	     * @type 		{Date){String}}
	     */
					minDate: null,

					/**
	     * Hides the calendar. For use along with enableTime.
	     * @prop
	     * @type 		{Boolean}
	     */
					noCalendar: false,

					/**
	     * Function(s) to trigger on every date selection
	     * @see 		https://chmln.github.io/flatpickr/#eventsAPI
	     * @prop
	     * @type 		{Function}
	     */
					onChange: null,

					/**
	     * Function(s) to trigger on every time the calendar is closed
	     * @see 		https://chmln.github.io/flatpickr/#eventsAPI
	     * @prop
	     * @type 		{Function}
	     */
					onClose: null,

					/**
	     * Function(s) to trigger on every time the calendar is opened
	     * @see 		https://chmln.github.io/flatpickr/#eventsAPI
	     * @prop
	     * @type 		{Function}
	     */
					onOpen: null,

					/**
	     * Function to trigger when the calendar is ready
	     * @see 		https://chmln.github.io/flatpickr/#eventsAPI
	     * @prop
	     * @type 		{Function}
	     */
					onReady: null,

					/**
	     * Function that expects a date string and must return a Date object
	     * @prop
	     * @type 		{Function}
	     */
					parseDate: false,

					/**
	     * Show the month using the shorthand version (ie, Sep instead of September).
	     * @prop
	     * @type 		{Boolean}
	     */
					shorthandCurrentMonth: false,

					/**
	     * Displays time picker in 24 hour mode without AM/PM selection when enabled.
	     * @prop
	     * @type 		{Boolean}
	     */
					time24hr: true,

					/**
	     * When true, dates will parsed, formatted, and displayed in UTC. It's recommended that date strings contain the timezone, but not necessary
	     * @prop
	     * @type 		{Boolean}
	     */
					utc: false,

					/**
	     * Enables display of week numbers in calendar
	     * @prop
	     * @type 		{Boolean}
	     */
					weekNumbers: false,

					/**
	     * flatpickr can parse an input group of textboxes and buttons, common in Bootstrap and other frameworks.
	     * @see 		https://chmln.github.io/flatpickr/#strap
	     * @prop
	     * @type 		{Boolean}
	     */
					wrap: false
				};
			}

			/**
	   * Physical props
	   * @definition 		SWebComponent.physicalProps
	   */

		}, {
			key: 'physicalProps',
			get: function get() {
				return ['color'];
			}
		}]);

		return SDatepickerComponent;
	}(_SWebComponent3.default);

	exports.default = SDatepickerComponent;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _mixwith = __webpack_require__(5);

	var _SWebComponentMixin = __webpack_require__(6);

	var _SWebComponentMixin2 = _interopRequireDefault(_SWebComponentMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	if (typeof HTMLElement !== 'function') {
		var _HTMLElement = function _HTMLElement() {};
		_HTMLElement.prototype = HTMLElement.prototype;
		HTMLElement = _HTMLElement;
	}

	var SWebComponent = function (_mix$with) {
		_inherits(SWebComponent, _mix$with);

		/**
	  * Constructor
	  */
		function SWebComponent() {
			_classCallCheck(this, SWebComponent);

			return _possibleConstructorReturn(this, _mix$with.call(this));
		}

		return SWebComponent;
	}((0, _mixwith.mix)(HTMLElement).with(_SWebComponentMixin2.default));

	exports.default = SWebComponent;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports);
	    global.mixwith = mod.exports;
	  }
	})(undefined, function (exports) {
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  var _appliedMixin = '__mixwith_appliedMixin';

	  var apply = exports.apply = function (superclass, mixin) {
	    var application = mixin(superclass);
	    application.prototype[_appliedMixin] = unwrap(mixin);
	    return application;
	  };

	  var isApplicationOf = exports.isApplicationOf = function (proto, mixin) {
	    return proto.hasOwnProperty(_appliedMixin) && proto[_appliedMixin] === unwrap(mixin);
	  };

	  var hasMixin = exports.hasMixin = function (o, mixin) {
	    while (o != null) {
	      if (isApplicationOf(o, mixin)) return true;
	      o = Object.getPrototypeOf(o);
	    }
	    return false;
	  };

	  var _wrappedMixin = '__mixwith_wrappedMixin';

	  var wrap = exports.wrap = function (mixin, wrapper) {
	    Object.setPrototypeOf(wrapper, mixin);
	    if (!mixin[_wrappedMixin]) {
	      mixin[_wrappedMixin] = mixin;
	    }
	    return wrapper;
	  };

	  var unwrap = exports.unwrap = function (wrapper) {
	    return wrapper[_wrappedMixin] || wrapper;
	  };

	  var _cachedApplications = '__mixwith_cachedApplications';

	  var Cached = exports.Cached = function (mixin) {
	    return wrap(mixin, function (superclass) {
	      // Get or create a symbol used to look up a previous application of mixin
	      // to the class. This symbol is unique per mixin definition, so a class will have N
	      // applicationRefs if it has had N mixins applied to it. A mixin will have
	      // exactly one _cachedApplicationRef used to store its applications.

	      var cachedApplications = superclass[_cachedApplications];
	      if (!cachedApplications) {
	        cachedApplications = superclass[_cachedApplications] = new Map();
	      }

	      var application = cachedApplications.get(mixin);
	      if (!application) {
	        application = mixin(superclass);
	        cachedApplications.set(mixin, application);
	      }

	      return application;
	    });
	  };

	  var DeDupe = exports.DeDupe = function (mixin) {
	    return wrap(mixin, function (superclass) {
	      return hasMixin(superclass.prototype, mixin) ? superclass : mixin(superclass);
	    });
	  };

	  var HasInstance = exports.HasInstance = function (mixin) {
	    if (Symbol && Symbol.hasInstance && !mixin[Symbol.hasInstance]) {
	      Object.defineProperty(mixin, Symbol.hasInstance, {
	        value: function value(o) {
	          return hasMixin(o, mixin);
	        }
	      });
	    }
	    return mixin;
	  };

	  var BareMixin = exports.BareMixin = function (mixin) {
	    return wrap(mixin, function (s) {
	      return apply(s, mixin);
	    });
	  };

	  var Mixin = exports.Mixin = function (mixin) {
	    return DeDupe(Cached(BareMixin(mixin)));
	  };

	  var mix = exports.mix = function (superclass) {
	    return new MixinBuilder(superclass);
	  };

	  var MixinBuilder = function () {
	    function MixinBuilder(superclass) {
	      _classCallCheck(this, MixinBuilder);

	      this.superclass = superclass || function () {
	        function _class() {
	          _classCallCheck(this, _class);
	        }

	        return _class;
	      }();
	    }

	    _createClass(MixinBuilder, [{
	      key: 'with',
	      value: function _with() {
	        for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
	          mixins[_key] = arguments[_key];
	        }

	        return mixins.reduce(function (c, m) {
	          return m(c);
	        }, this.superclass);
	      }
	    }]);

	    return MixinBuilder;
	  }();
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mixwith = __webpack_require__(5);

	var _autoCast = __webpack_require__(7);

	var _autoCast2 = _interopRequireDefault(_autoCast);

	var _camelize = __webpack_require__(8);

	var _camelize2 = _interopRequireDefault(_camelize);

	var _uniqid = __webpack_require__(9);

	var _uniqid2 = _interopRequireDefault(_uniqid);

	var _upperFirst = __webpack_require__(10);

	var _upperFirst2 = _interopRequireDefault(_upperFirst);

	var _sSettings = __webpack_require__(11);

	var _sSettings2 = _interopRequireDefault(_sSettings);

	var _fastdom = __webpack_require__(15);

	var _fastdom2 = _interopRequireDefault(_fastdom);

	var _dispatchEvent = __webpack_require__(16);

	var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

	var _whenInViewport = __webpack_require__(19);

	var _whenInViewport2 = _interopRequireDefault(_whenInViewport);

	var _whenVisible = __webpack_require__(20);

	var _whenVisible2 = _interopRequireDefault(_whenVisible);

	var _matches = __webpack_require__(26);

	var _matches2 = _interopRequireDefault(_matches);

	var _closest = __webpack_require__(25);

	var _closest2 = _interopRequireDefault(_closest);

	var _whenAttribute = __webpack_require__(27);

	var _whenAttribute2 = _interopRequireDefault(_whenAttribute);

	var _propertyProxy = __webpack_require__(43);

	var _propertyProxy2 = _interopRequireDefault(_propertyProxy);

	var _domReady = __webpack_require__(12);

	var _domReady2 = _interopRequireDefault(_domReady);

	var _prependChild = __webpack_require__(96);

	var _prependChild2 = _interopRequireDefault(_prependChild);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	if (!window.sugar) window.sugar = {};
	if (!window.sugar._webComponentsStack) window.sugar._webComponentsStack = {};
	if (!window.sugar._webComponentsDefaultPropsStack) window.sugar._webComponentsDefaultPropsStack = {};
	if (!window.sugar._templateWebComponents) window.sugar._templateWebComponents = {};
	if (!window.sugar._webComponentCss) window.sugar._webComponentCss = {};

	exports.default = (0, _mixwith.Mixin)(function (superclass) {
		return function (_superclass) {
			_inherits(_class2, _superclass);

			function _class2() {
				var _temp, _this, _ret;

				_classCallCheck(this, _class2);

				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				return _ret = (_temp = (_this = _possibleConstructorReturn(this, _superclass.call.apply(_superclass, [this].concat(args))), _this), _this.props = {}, _temp), _possibleConstructorReturn(_this, _ret);
			}

			/**
	  * Define the new web component
	  * @param 			{String} 			name 		The name of the component
	  * @param 			{SWebComponent} 	component 	The component class
	  */
			_class2.define = function define(name, component) {
				var ext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

				var componentName = (0, _upperFirst2.default)((0, _camelize2.default)(name));
				var componentNameDash = name;
				window.sugar._webComponentsStack[componentName] = component;

				// register the webcomponent
				var webcomponent = void 0;
				if (document.registerElement) {
					webcomponent = document.registerElement(name, {
						prototype: component.prototype,
						extends: ext
					});
				} else if (window.customElements) {
					webcomponent = window.customElements.define(name, component, {
						extends: ext
					});
				} else {
					throw 'Your browser does not support either document.registerElement or window.customElements.define webcomponents specification...';
				}

				// fix for firefox and surely other crapy browser...
				// this make sur that the (static) methods of the component
				// are present on the webcomponent itself
				Object.keys(component).forEach(function (key) {
					if (!webcomponent[key]) {
						webcomponent[key] = component[key];
					}
				});

				// handle css
				component._injectCss(component, componentName, componentNameDash);

				// return the webcomponent instance
				return webcomponent;
			};

			/**
	  * Inject css into html
	  * @param 		{String} 		componentName 		The component name
	  * @param 		{String} 		componentNameDash 	The dash formated component name
	  */


			_class2._injectCss = function _injectCss(componentClass, componentName, componentNameDash) {
				// __domReady().then(() => {
				// check if component has a css to be injected into the page
				if (window.sugar._webComponentCss[componentName] === undefined) {
					var css = '';
					var comp = componentClass;
					while (comp) {
						if (comp.css) {
							css += comp.css(componentName, componentNameDash);
						}
						comp = Object.getPrototypeOf(comp);
					}
					if (css) {
						css = css.replace(/[\s]+/g, ' ');
						window.sugar._webComponentCss[componentName] = css;
						// fastdom.mutate(() => {
						var styleElm = document.createElement('style');
						styleElm.setAttribute('name', componentName);
						styleElm.innerHTML = css;
						(0, _prependChild2.default)(styleElm, document.head);
						// document.head.appendChild(styleElm);
						// });
					} else {
						window.sugar._webComponentCss[componentName] = false;
					}
				}
				// });
			};

			/**
	  * Store all the props of the component
	  * Props are actual computed props with attributes
	  * @type 		{Object}
	  */


			_class2.setDefaultProps = function setDefaultProps(props) {
				var tagname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

				// if a tagname is specified, we store the default props for a
				// particular tagname
				if (tagname) {
					tagname = [].concat(tagname);
					tagname.forEach(function (tag) {
						tag = (0, _upperFirst2.default)((0, _camelize2.default)(tag));
						window.sugar._webComponentsDefaultPropsStack[tag] = _extends({}, window.sugar._webComponentsDefaultPropsStack[tag] || {}, props);
					});
				} else {
					var proto = this;
					proto._defaultProps = _extends({}, proto._defaultProps || {}, props);
				}
			};

			/**
	  * Get the default props for this particular instance
	  * @return 		{Object} 			The default props
	  */


			/**
	  * Component css
	  */
			_class2.css = function css(componentName, componentNameDash) {
				return '';
			};

			/**
	  * Method called before the component will be added in the dom.
	  * You will not have access to the siblings, etc here.
	  * This is the place to init your component, just like a constructor
	  *
	  * @example
	  * componentWillMount() {
	  * 		// call parent method
	  * 		super.componentWillMount();
	  * 		// do something here...
	  * }
	  *
	  * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	  */
			_class2.prototype.componentWillMount = function componentWillMount() {
				var _this2 = this;

				// dispatch event
				this.onComponentWillMount && this.onComponentWillMount();
				// this.dispatchComponentEvent('componentWillMount');

				// internal properties
				this._nextPropsStack = {};
				this._prevPropsStack = {};
				this._nextPropsTimeout = null;
				this._componentMounted = false;
				this._componentAttached = false;
				this._fastdomSetProp = null;

				// set the componentName
				var sourceName = this.getAttribute('is') || this.tagName.toLowerCase();
				this._componentNameDash = sourceName;
				this._componentName = (0, _upperFirst2.default)((0, _camelize2.default)(sourceName));

				// save each instances into the element _sComponents stack
				this._typeOf = [];
				var comp = window.sugar._webComponentsStack[this._componentName];
				while (comp) {
					var funcNameRegex = /function (.{1,})\(/;
					var res = funcNameRegex.exec(comp.toString());
					if (res && res[1]) {
						if (this._typeOf.indexOf(res[1]) === -1) {
							this._typeOf.push(res[1]);
						}
					}
					comp = Object.getPrototypeOf(comp);
				}

				// default props init
				this.props = Object.assign({}, this.defaultProps);

				// compute props
				this._computeProps();

				// props proxy
				// this._initPropsProxy();

				// check the required props
				this.requiredProps.forEach(function (prop) {
					if (!_this2.props[prop]) {
						throw 'The "' + _this2._componentNameDash + '" component need the "' + prop + '" property in order to work';
					}
				});
			};

			/**
	  * Method called right after that the component has been added in the dom,
	  * and before the initial render
	  * This is the first place where you will have access to the dom.
	  *
	  * @example
	  * componentMount() {
	  * 		// call parent method
	  * 		super.componentMount();
	  * 		// do something here...
	  * }
	  *
	  * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	  */


			_class2.prototype.componentMount = function componentMount() {
				// update the status
				this._componentMounted = true;
				// dispatch event
				this.onComponentMount && this.onComponentMount();
				// this.dispatchComponentEvent('componentMount');
			};

			/**
	  * Method called after the initial component render
	  *
	  * @example
	  * componentDidMount() {
	  * 		// call parent method
	  * 		super.componentDidMount();
	  * 		// do something here...
	  * }
	  *
	  * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	  */


			_class2.prototype.componentDidMount = function componentDidMount() {
				// dispatch event
				this.onComponentDidMount && this.onComponentDidMount();
				// this.dispatchComponentEvent('componentDidMount');
			};

			/**
	  * Method called right before the render when some props have been updated.
	  * This method is not called before the initial render
	  *
	  * @param 		{Object} 		nextProps 			An object that represent the props that have been updated
	  * @param 		{Array} 		nextPropsArray 		An array representation of the nextProps object [{name:...,value:...}]
	  *
	  * @example
	  * componentWillUpdate() {
	  * 		// call parent method
	  * 		super.componentWillUpdate();
	  * 		// do something here...
	  * }
	  *
	  * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	  */


			_class2.prototype.componentWillUpdate = function componentWillUpdate(nextProps) {
				// dispatch event
				this.onComponentWillUpdate && this.onComponentWillUpdate(nextProps);
				// this.dispatchComponentEvent('componentWillUpdate', nextProps);
			};

			/**
	  * Apply all the updated that you need in the dom for the component to reflect the props
	  *
	  * @example
	  * render() {
	  * 		// call the parent method
	  * 		super.render();
	  * 		// apply some classes, properties, styles, etc... in the dom
	  * 		// in order to reflect the props object state
	  * }
	  *
	  * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	  */


			_class2.prototype.render = function render() {
				// dispatch event
				this.onComponentRender && this.onComponentRender();
				// this.dispatchComponentEvent('componentRender');
			};

			_class2.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
				// dispatch event
				this.onComponentDidUpdate && this.onComponentDidUpdate(prevProps);
				// this.dispatchComponentEvent('componentDidUpdate', prevProps);
			};

			_class2.prototype.componentWillUnmount = function componentWillUnmount() {
				// dispatch event
				this.onComponentWillUnmount && this.onComponentWillUnmount();
				// this.dispatchComponentEvent('componentWillUnmount');
			};

			_class2.prototype.componentUnmount = function componentUnmount() {
				// update the status
				this._componentMounted = false;
				// dispatch event
				this.onComponentUnmount && this.onComponentUnmount();
				// this.dispatchComponentEvent('componentUnmount');
			};

			_class2.prototype.componentDidUnmount = function componentDidUnmount() {
				// dispatch event
				this.onComponentDidUnmount && this.onComponentDidUnmount();
				// this.dispatchComponentEvent('componentDidUnmount');
			};

			/**
	  * When the component is created
	  */


			_class2.prototype.createdCallback = function createdCallback() {
				// component will mount only if part of the active document
				this.componentWillMount();
			};

			/**
	  * When the element is attached
	  */


			_class2.prototype.attachedCallback = function attachedCallback() {
				var _this3 = this;

				// update attached status
				this._componentAttached = true;

				// wait until dependencies are ok
				this._whenMountDependenciesAreOk().then(function () {
					// switch on the mountWhen prop
					switch (_this3.props.mountWhen) {
						case 'inViewport':
							(0, _whenInViewport2.default)(_this3).then(function () {
								_this3._mountComponent();
							});
							break;
						case 'mouseover':
							_this3.addEventListener('mouseover', _this3._onMouseoverComponentMount.bind(_this3));
							break;
						case 'isVisible':
							(0, _whenVisible2.default)(_this3).then(function () {
								_this3._mountComponent();
							});
							break;
						default:
							// mount component directly
							_this3._mountComponent();
							break;
					}
				});
			};

			/**
	  * When mount dependencies
	  * @return 			{Promise} 				A promise that will be resolved when the dependencies are resolved
	  */


			_class2.prototype._whenMountDependenciesAreOk = function _whenMountDependenciesAreOk() {
				var _this4 = this;

				var promise = new Promise(function (resolve, reject) {
					if (!_this4.mountDependencies.length) {
						resolve();
					} else {
						// resolve all the promises
						Promise.all(_this4.mountDependencies).then(function () {
							resolve();
						});
					}
				});
				return promise;
			};

			/**
	  * Init props proxy.
	  * This will create a getter/setter accessor on the item itself
	  * that get and update his corresponding props.{name} property
	  */


			_class2.prototype._initPropsProxy = function _initPropsProxy() {
				var _this5 = this;

				var _loop = function _loop(key) {
					(0, _propertyProxy2.default)(_this5, key, {
						get: function get() {
							return _this5.props[key];
						},
						set: function set(value) {
							_this5.setProp(key, value);
						}
					});
				};

				// loop on each props
				for (var key in this.props) {
					_loop(key);
				}
			};

			/**
	  * On mouse over
	  */


			_class2.prototype._onMouseoverComponentMount = function _onMouseoverComponentMount() {
				this._mountComponent();
				this.removeEventListener('mouseover', this._onMouseoverComponentMount);
			};

			/**
	  * Internal mount component method
	  */


			_class2.prototype._mountComponent = function _mountComponent() {
				var _this6 = this;

				// wait next frame
				this.mutate(function () {
					// sometimes, the component has been unmounted between the
					// fastdom execution, so we stop here if it's the case
					if (!_this6._componentAttached) return;
					// init
					_this6.componentMount();
					// render
					_this6.render();
					// component did mount
					_this6.componentDidMount();
				});
			};

			/**
	  * When the component is detached
	  */


			_class2.prototype.detachedCallback = function detachedCallback() {
				var _this7 = this;

				// update attached status
				this._componentAttached = false;
				// will unmount
				this.componentWillUnmount();
				// wait next frame
				this.mutate(function () {
					// unmount only if the component is mounted
					if (!_this7._componentMounted) return;
					// unmount
					_this7.componentUnmount();
					// did unmount
					_this7.componentDidUnmount();
				});
			};

			/**
	  * When any of the component attribute changes
	  */


			_class2.prototype.attributeChangedCallback = function attributeChangedCallback(attribute, oldVal, newVal) {

				// cast the new val
				newVal = (0, _autoCast2.default)(newVal);

				// keep an original attribute name
				var _attribute = attribute;

				// process the attribute to camelCase
				attribute = (0, _camelize2.default)(attribute);

				// handle the case when newVal is undefined (added attribute whithout any value)
				if (newVal === undefined && this.hasAttribute(_attribute)) {
					newVal = true;
				}

				// do nothing if the value is already the same
				if (this.props[attribute] === newVal) return;

				// set the new prop
				this.setProp(attribute, newVal);
			};

			/**
	  * Dispatch an event from the tag with namespaced event name
	  * This will dispatch actually two events :
	  * 1. {tagName}.{name} : example : s-datepicker.change
	  * 2. {name} 		   : example : change
	  *
	  * @param		{String} 		name 		The event name
	  * @param 		{Mixed} 		data 		Some data to attach to the event
	  */


			_class2.prototype.dispatchComponentEvent = function dispatchComponentEvent(name) {
				var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

				(0, _dispatchEvent2.default)(this, name, data);
				(0, _dispatchEvent2.default)(this, this.tagName.toLowerCase() + '.' + name, data);
			};

			/**
	  * Set properties
	  */


			_class2.prototype.setProps = function setProps() {
				var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

				// set each props
				for (var key in props) {
					this.setProp(key, props[key]);
				}
				return this;
			};

			/**
	  * Set a property
	  */


			_class2.prototype.setProp = function setProp(prop, value) {
				var _this8 = this;

				// save the oldVal
				var _oldVal = this.props[prop];

				// stop if same value
				if (_oldVal === value) return;

				// set the prop
				this.props[prop] = value;

				// handle physical props
				this._handlePhysicalProps(prop, value);

				// if the component is not mounted
				// we do nothing here...
				if (!this.isComponentMounted()) return;

				// create the stacks
				this._prevPropsStack[prop] = _oldVal;
				this._nextPropsStack[prop] = value;

				// component will receive prop
				if (this.componentWillReceiveProp) {
					this.componentWillReceiveProp(prop, value, _oldVal);
				}

				// wait till next frame
				_fastdom2.default.clear(this._fastdomSetProp);
				this._fastdomSetProp = _fastdom2.default.mutate(function () {

					// create array version of each stacks
					var nextPropsArray = [],
					    prevPropsArray = [];
					for (var key in _this8._nextPropsStack) {
						var val = _this8._nextPropsStack[key];
						nextPropsArray.push({
							name: key,
							value: val
						});
					}
					for (var _key2 in _this8._prevPropsStack) {
						var _val = _this8._prevPropsStack[_key2];
						prevPropsArray.push({
							name: _key2,
							value: _val
						});
					}

					// call the will reveiveProps if exist
					if (_this8.componentWillReceiveProps) {
						_this8.componentWillReceiveProps(_this8._nextPropsStack, nextPropsArray);
					}

					// should component update
					if (_this8.shouldComponentUpdate && !_this8.shouldComponentUpdate(_this8._nextPropsStack, nextPropsArray)) return;

					// component will update
					_this8.componentWillUpdate(_this8._nextPropsStack, nextPropsArray);

					// render the component
					_this8.render();

					// component did update
					_this8.componentDidUpdate(_this8._prevPropsStack, prevPropsArray);
				});
			};

			/**
	  * Check if component is mounted
	  * @return 			{Boolean} 			true if mounted, false if not
	  */


			_class2.prototype.isComponentMounted = function isComponentMounted() {
				return this._componentMounted;
			};

			/**
	  * Handle physical props by setting or not the prop
	  * on the dom element as attribute
	  */


			_class2.prototype._handlePhysicalProps = function _handlePhysicalProps(prop, value) {
				// check if is a physical prop to set it in the dom
				var physicalProps = this.physicalProps;
				if (physicalProps.indexOf(prop) !== -1) {
					// set the prop on the node
					if (value !== 0 && (value === false || value === 'null' || !value)) {
						this.removeAttribute(prop);
					} else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
						this.setAttribute(prop, JSON.stringify(value));
					} else if (typeof value === 'function') {
						this.setAttribute(prop, 'fn');
					} else {
						this.setAttribute(prop, value);
					}
				}
			};

			/**
	  * Compute props by mixing settings with attributes presents on the component
	  */


			_class2.prototype._computeProps = function _computeProps() {
				for (var i = 0; i < this.attributes.length; i++) {
					var attr = this.attributes[i];
					if (!attr.value) {
						// the attribute has no value but it is present
						// so we assume the prop value is true
						this.props[(0, _camelize2.default)(attr.name)] = true;
						continue;
					}
					// cast the value
					this.props[(0, _camelize2.default)(attr.name)] = (0, _autoCast2.default)(attr.value);
				}

				// handle physicalProps
				for (var key in this.props) {
					var value = this.props[key];
					// handle physical props
					this._handlePhysicalProps(key, value);
				}
			};

			/**
	  * Mutate the dom using an optimize requestAnimationFrame technique
	  * @param 		{Function} 		cb 			The callback to exexute
	  */


			_class2.prototype.mutate = function mutate(cb) {
				return _fastdom2.default.mutate(cb);
			};

			/**
	  * componentClassName
	  * Set a class that will be construct with the componentNameDash,
	  * an optional element and modifier
	  * @param 	{String} 	[element=null] 		The element name
	  * @param 	{String} 	[modifier=null] 	The modifier name
	  * @param 	{String} 	[state=null] 		The state name
	  * @return 	{String} 						The generated class
	  */


			_class2.prototype.componentClassName = function componentClassName() {
				var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
				var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

				// if the method is BEM
				var sel = this._componentNameDash;
				// @TODO : handle the sSettings at component load
				if (false) {
					if (element) {
						sel += '-' + element;
					}
					if (modifier) {
						sel += '-' + modifier;
					}
					if (state) {
						sel += ' is-' + state;
					}
				} else {
					if (element) {
						sel += '__' + element;
					}
					if (modifier) {
						sel += '--' + modifier;
					}
					if (state) {
						sel += '--' + state;
					}
				}
				return sel;
			};

			/**
	  * Get a component selector class built with the passed element, modifier and state parameters
	  * @param 	{String} 	[element=null] 		The element name
	  * @param 	{String} 	[modifier=null] 	The modifier name
	  * @param 	{String} 	[state=null] 		The state name
	  * @return 	{String} 						The generated class
	  */


			_class2.prototype.componentSelector = function componentSelector() {
				var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
				var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

				var sel = this.componentClassName(element, modifier, state);
				sel = ('.' + sel).replace(' ', '.');
				return sel;
			};

			/**
	  * hasComponentClass
	  * Check if the passed element has the component class generated by the element and modifier argument
	  * @param 	{HTMLElement} 	elm 				The element to check
	  * @param 	{String} 		[element=null] 		The element name
	  * @param 	{String} 		[modifier=null] 	The modifier name
	  * @param 	{String} 		[state=null] 		The state name
	  * @return 	{Boolean} 							The check result
	  */


			_class2.prototype.hasComponentClass = function hasComponentClass(elm) {
				var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				var modifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

				// generate the class
				var cls = this.componentSelector(element, modifier, state);
				var _cls = cls.split('.');
				for (var i = 0; i < _cls.length; i++) {
					var cl = _cls[i];
					if (cl && cl !== '') {
						if (!elm.classList.contains(cl)) {
							return false;
						}
					}
				}
				return true;
			};

			/**
	  * Add a class on the passed element that will be construct with the componentNameDash,
	  * an optional element, modifier and state
	  * @param 	{String} 	[element=null] 		The element name
	  * @param 	{String} 	[modifier=null] 	The modifier name
	  * @param 	{String} 	[state=null] 		The state name
	  * @return 	{SComponent}} 			The component itself
	  */


			_class2.prototype.addComponentClass = function addComponentClass(elm) {
				var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

				var _this9 = this;

				var modifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

				// if is an array
				if (elm instanceof Array || elm instanceof NodeList) {
					[].forEach.call(elm, function (el) {
						_this9.addComponentClass(el, element, modifier, state);
					});
					return this;
				}

				// get the component class
				var cls = this.componentSelector(element, modifier, state);
				// loop on each classes to add
				cls.split('.').forEach(function (cl) {
					if (cl && cl !== '') {
						_this9.mutate(function () {
							elm.classList.add(cl);
						});
					}
				});
				// return the instance to maintain chainability
				return this;
			};

			/**
	  * Remove a class on the passed element that will be construct with the componentNameDash,
	  * an optional element, modifier and state
	  * @param 	{String} 	[element=null] 		The element name
	  * @param 	{String} 	[modifier=null] 	The modifier name
	  * @param 	{String} 	[state=null] 		The state name
	  * @return 	{SComponent}} 					The component itself
	  */


			_class2.prototype.removeComponentClass = function removeComponentClass(elm) {
				var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

				var _this10 = this;

				var modifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

				// if is an array
				if (elm instanceof Array || elm instanceof NodeList) {
					[].forEach.call(elm, function (el) {
						_this10.removeComponentClass(el, element, modifier, state);
					});
					return this;
				}

				// get the component class
				var cls = this.componentSelector(element, modifier, state);
				// loop on each classes to add
				cls.split('.').forEach(function (cl) {
					if (cl && cl !== '') {
						_this10.mutate(function () {
							elm.classList.remove(cl);
						});
					}
				});
				// return the instance to maintain chainability
				return this;
			};

			_createClass(_class2, [{
				key: 'defaultProps',
				get: function get() {
					var props = window.sugar._webComponentsStack[this._componentName].defaultProps;
					var comp = window.sugar._webComponentsStack[this._componentName];
					while (comp) {
						if (comp.defaultProps) {
							props = _extends({}, comp.defaultProps, props);
						}
						if (comp._defaultProps) {
							props = _extends({}, props, comp._defaultProps);
						}
						comp = Object.getPrototypeOf(comp);
					}
					// extend with default props stored in the component default props stack by tagname
					if (window.sugar._webComponentsDefaultPropsStack[this._componentName]) {
						props = _extends({}, props, window.sugar._webComponentsDefaultPropsStack[this._componentName]);
					}
					return props;
				}

				/**
	   * Return an array of props to set on the dom
	   */

			}, {
				key: 'physicalProps',


				/**
	   * Get physical props for this particular instance
	   * @return 		{Object} 			The physical props array
	   */
				get: function get() {
					var props = window.sugar._webComponentsStack[this._componentName].physicalProps;
					var comp = window.sugar._webComponentsStack[this._componentName];
					while (comp) {
						if (comp.physicalProps) {
							comp.physicalProps.forEach(function (prop) {
								if (props.indexOf(prop) === -1) {
									props.push(prop);
								}
							});
						}
						comp = Object.getPrototypeOf(comp);
					}
					return props;
				}

				/**
	   * Return an array of required props to init the component
	   */

			}, {
				key: 'requiredProps',


				/**
	   * Get the required props array for this particular instance
	   * @return 		{Array} 			An array of required props
	   */
				get: function get() {
					var props = window.sugar._webComponentsStack[this._componentName].requiredProps;
					var comp = window.sugar._webComponentsStack[this._componentName];
					while (comp) {
						if (comp.requiredProps) {
							comp.requiredProps.forEach(function (prop) {
								if (props.indexOf(prop) === -1) {
									props.push(prop);
								}
							});
						}
						comp = Object.getPrototypeOf(comp);
					}
					return props;
				}
			}, {
				key: 'css',
				get: function get() {
					var css = '';
					var comp = window.sugar._webComponentsStack[this._componentName];
					while (comp) {
						if (comp.css) {
							css += comp.css(this._componentName, this._componentNameDash);
						}
						comp = Object.getPrototypeOf(comp);
					}
					return css;
				}

				/**
	   * Return an array of props to set on the dom
	   */

			}, {
				key: 'mountDependencies',


				/**
	   * Get physical props for this particular instance
	   * @return 		{Object} 			The physical props array
	   */
				get: function get() {
					var _this11 = this;

					var deps = window.sugar._webComponentsStack[this._componentName].mountDependencies;
					var comp = window.sugar._webComponentsStack[this._componentName];
					while (comp) {
						if (comp.mountDependencies) {
							comp.mountDependencies.forEach(function (dep) {
								if (typeof dep === 'function') {
									dep = dep.bind(_this11);
									dep = dep();
								}
								if (deps.indexOf(dep) === -1) {
									deps.push(dep);
								}
							});
						}
						comp = Object.getPrototypeOf(comp);
					}
					return deps;
				}
			}], [{
				key: 'defaultProps',


				/**
	   * Return the default props for the component.
	   * Need to take care of the passed props parameter and mix it at the
	   * end of your default props
	   *
	   * @example
	   * getDefaultProps(props = {}) {
	   * 		return super.getDefaultProps({
	   * 			myCoolProp : null,
	   * 			...props
	   * 		});
	   * }
	   *
	   * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	   */
				get: function get() {
					return {
						mountWhen: null
					};
				}
			}, {
				key: 'physicalProps',
				get: function get() {
					return [];
				}
			}, {
				key: 'requiredProps',
				get: function get() {
					return [];
				}
			}, {
				key: 'mountDependencies',
				get: function get() {
					// return [];
					return [function () {
						var _this12 = this;

						return new Promise(function (resolve, reject) {
							var isTemplate = false;
							if (_this12._typeOf.indexOf('STemplateWebComponent')) {
								resolve();
							} else {
								setTimeout(function () {
									resolve();
								});
							}
						});
					}];
				}
			}]);

			return _class2;
		}(superclass);
	});

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = autoCast;
	/**
	 * Auto cast the string into the correct variable type
	 */
	function autoCast(string) {
		// boolean values
		if (string === 'false' || string === 'true' || string === 'undefined' || string === 'null' || !isNaN(string)) {
			return eval(string);
		}
		// array
		if (typeof string === 'string' && string.substr(0, 1) === '[') {
			var val = eval(string);
			if (val instanceof Array) return val;
		}
		// parse json
		if (typeof string === 'string' && string.substr(0, 1) === '{') {
			return eval('(' + string + ')');
		}
		// window. || document.
		if (typeof string === 'string' && (string.indexOf('window.') === 0 || string.indexOf('document.') === 0)) {
			var _val = eval(string);
			if (_val) return _val;
		}
		// return the string if nothing can be casted
		return string;
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = camelize;
	/**
	 * Camelize a string
	 */
	function camelize(text) {
		var res = '';
		res = text.replace(/(?:^|[-_])(\w)/g, function (_, c) {
			return c ? c.toUpperCase() : '';
		});
		res = res.substr(0, 1).toLowerCase() + res.slice(1);
		return res.trim();
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = uniqid;
	var uniqidIdx = 0;
	if (!window.sugar) window.sugar = {};
	if (!window.sugar._uniqid) window.sugar._uniqid = 0;

	/**
	 * Get a uniq id
	 */
	function uniqid() {
		// update uniqid idx
		window.sugar._uniqid++;
		return "s" + window.sugar._uniqid.toString();
		// uniqidIdx++;

		// let ts=String(new Date().getTime()), i = 0, out = '';
		// for(i=0;i<ts.length;i+=2) {
		// 	out+=Number(ts.substr(i, 2)).toString(36);
		// }
		// return ('s' + out + (uniqidIdx * Math.round(Math.random()*9999999)));
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = upperFirst;
	/**
	 * Upper first
	 */
	function upperFirst(string) {
	  return string.charAt(0).toUpperCase() + string.slice(1);
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _domReady = __webpack_require__(12);

	var _domReady2 = _interopRequireDefault(_domReady);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// prepare a settings object to store
	// the getted settings from the css
	var settings = {};

	// wait the css to be loaded
	/**
	 * Store all the sugar settings grabed from your scss settings
	 * @type 		{Object}
	 * @name 		settings
	 */

	// imports
	(0, _domReady2.default)(function () {
		var settingsElm = document.createElement('div');
		settingsElm.classList.add('s-settings');
		document.body.appendChild(settingsElm);
		var _settings = window.getComputedStyle(settingsElm, ':after').getPropertyValue('content').trim();
		if (_settings && _settings !== '' && _settings !== 'none') {
			_settings = _settings.replace(/\\"/g, '"');
			// handle numbers that does not have initial 0.65
			_settings = _settings.replace(/([:|\s])(\.\d+)([\s|,|}]?)/g, "$10$2$3");
			// _settings = _settings.replace(/\\\'\\"/g,'"').replace(/\\"\\\'/g,'"');
			// _settings = _settings.replace(/\'\\"/g,'"').replace(/\\"\'/g,'"');
			// _settings = _settings.replace(/'"/g,'"').replace(/"'/g,'"');
			_settings = _settings.slice(1, _settings.length - 1);
			_settings = JSON.parse(_settings);
			Object.assign(settings, _settings);
			// settings = {...settings, ..._settings};
		}
	});

	// export the settings
	module.exports = settings;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = domReady;

	var _stylesheetsReady = __webpack_require__(13);

	var _stylesheetsReady2 = _interopRequireDefault(_stylesheetsReady);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var neededStylesheetsStack = null; /**
	                                    * Wait that the dom is ready before resolving the promise
	                                    * If you need that some css files are loaded before considering the dom as loaded
	                                    * you can add the attribute 's-domready-dependency' on any css link tag
	                                    *
	                                    * @name 		domReady
	                                    * @param 		{Function} 		cb 			An optional callback that will be called when the dom is ready
	                                    * @return 		{Promise} 					A promise that will be resolved when the dom is ready
	                                    *
	                                    * @example  	js
	                                    * import domReady from 'sugarcss/js/dom/domReady'
	                                    * // using callback
	                                    * domReady(() => {
	                                    * 		// do something
	                                    * });
	                                    * // using promise
	                                    * domReady().then(() => {
	                                    * 		// do something
	                                    * });
	                                    *
	                                    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	                                    */


	function _domReady() {
		var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		return new Promise(function (resolve, reject) {

			var _domReady = function _domReady() {
				if (!document.body || /(un|ing)/.test(document.readyState)) {
					setTimeout(function () {
						_domReady();
					}, 9);
				} else {

					// grab all the needed stylesheets if not already done
					if (!neededStylesheetsStack) {
						// check in dom if has some needed stylesheets
						neededStylesheetsStack = document.querySelectorAll('link[s-domready-dependency]');
					}

					if (!neededStylesheetsStack.length) {
						if (cb) cb();
						resolve();
					} else {

						(0, _stylesheetsReady2.default)(neededStylesheetsStack, function () {
							// console.log('stylesheets loaded');
							if (cb) cb();
							resolve();
						});
					}
				}
			};
			_domReady();
		});
	}

	var domReadyCallbacks = [];
	var domReadyProcess = false;
	var domIsReady = false;

	function domReady() {
		var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


		return new Promise(function (resolve, reject) {

			// check if the dom is already ready
			if (domIsReady) {
				if (cb) cb();
				resolve();
				return;
			}

			// add the callback to the stack
			domReadyCallbacks.push(function () {
				if (cb) cb();
				resolve();
			});

			// check if already a domReady detecting process
			if (!domReadyProcess) {
				domReadyProcess = true;
				_domReady(function () {
					// update the domIsReady
					domIsReady = true;
					// apply all the callbacks
					domReadyCallbacks.forEach(function (callback) {
						callback();
					});
				});
			}
		});
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = stylesheetsReady;

	var _linkLoaded = __webpack_require__(14);

	var _linkLoaded2 = _interopRequireDefault(_linkLoaded);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Wait until all the HTMLLinkElement's are properly loaded
	 *
	 * @name 		stylesheetsReady
	 * @param 		{Array}<HTMLLinkElement> 		links 			The HTMLLinkElement tags to process
	 * @param 		{Function} 						[cb=null] 		An optional callback function to call when all the links are loaded
	 * @return 		{Promise} 										The promise that will be resolved when all the links are loaded
	 *
	 * @example 	js
	 * import stylesheetsReady from 'sugarcss/js/dom/stylesheetsReady'
	 * stylesheetsReady([
	 * 		myHTMLLinkElement1,
	 * 		myHTMLLinkElement2
	 * ]).then(() => {
	 * 		// do something when all the links are loaded
	 * });
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function stylesheetsReady(links) {
		var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


		var neededStylesheetsStack = links;
		var neededStylesheetsCount = links.length;
		var loadedStylesheedsCount = 0;
		var loadedStylesheetsCallbacks = [];
		var loadedStylesheedsProcess = false;
		var stylesheetsDependenciesStatus = false;

		return new Promise(function (resolve, reject) {

			if (stylesheetsDependenciesStatus) {
				cb !== null && cb();
				resolve();
				return;
			}

			// check if has some needed stylesheeds
			if (!neededStylesheetsCount) {
				// update the stylesheetsDependenciesStatus
				stylesheetsDependenciesStatus = true;
				// no dependencies or already loaded
				cb !== null && cb();
				resolve();
				return;
			}

			// add the callback into the loaded stylesheets stack
			// add the the callback stack
			loadedStylesheetsCallbacks.push(function () {
				cb !== null && cb();
				resolve();
			});

			// check if already a process of checking for loaded
			// stylesheets
			if (!loadedStylesheedsProcess) {

				// update the status
				loadedStylesheedsProcess = true;

				if (neededStylesheetsStack.length) {
					[].forEach.call(neededStylesheetsStack, function (link) {
						// check loaded
						(0, _linkLoaded2.default)(link).then(function (link) {
							// update the loaded stylesheet count
							loadedStylesheedsCount++;
							// check if all stylesheets has been loaded
							if (loadedStylesheedsCount >= neededStylesheetsCount) {

								// update the stylesheetsDependenciesStatus
								stylesheetsDependenciesStatus = true;
								// loop on all the loadedStylesheetsCallbacks
								loadedStylesheetsCallbacks.forEach(function (callback) {
									// apply the callback
									callback();
								});
							}
						}, function (error) {
							// something goes wrong...
							console.error('The following link as not been loaded properly...', error);
						});
					});
				}
			}
		});
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = linkLoaded;
	/**
	 * Wait until the passed HTMLLinkElement is fully loaded
	 *
	 * @name 		linkLoaded
	 * @param 		{HTMLLinkElement} 			link  		The link tag to check the loading state
	 * @param 		{Function}					[cb=null] 	An optional callback to call
	 * @return 		{Promise} 								The promise that will be resolved
	 *
	 * @example  	js
	 * import linkLoaded from 'sugarcss/js/dom/linkLoaded'
	 * linkLoaded(myCoolHTMLLinlElement).then((link) => {
	 * 		// do something when the link is loaded
	 * });
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function alreadyLoaded(link) {
		var href = link.href;
		var result = false;
		for (var i = 0; i < document.styleSheets.length; i++) {
			if (document.styleSheets[i].href && document.styleSheets[i].href.match(href)) {
				if (!document.styleSheets[i].cssRules || document.styleSheets[i].cssRules.length == 0) {
					// Fallback. There is a request for the css file, but it failed.
					break;
				}
				// the css is already loaded
				result = true;
			} else if (i == document.styleSheets.length - 1) {
				// Fallback. There is no request for the css file.
			}
		}
		return result;
	}

	function linkLoaded(link) {
		var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		return new Promise(function (resolve, reject) {
			// check if image is already loaded
			if (alreadyLoaded(link)) {
				// resolve promise
				resolve(link);
				// call the callback if exist
				callback != null && callback(link);
			} else {

				var img = document.createElement('img');

				// wait until loaded
				// console.log('CHECK LOADING', link.href);
				// we load the css into an image
				// when the image is in error more
				// that mean that the css is loaded
				img.addEventListener('error', function (e) {
					// console.log('LOADED', e);
					// resolve the promise
					resolve(link);
					// callback if exist
					callback != null && callback(link);
				});
				// listen for error
				// img.addEventListener('error', (e) => {
				// 	console.error('ERROR', e);
				// 	// reject
				// 	reject(e);
				// }, false);

				// set url
				img.src = link.href;
				// document.body.appendChild(img);
			}
		});
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(function(win) {

	/**
	 * FastDom
	 *
	 * Eliminates layout thrashing
	 * by batching DOM read/write
	 * interactions.
	 *
	 * @author Wilson Page <wilsonpage@me.com>
	 * @author Kornel Lesinski <kornel.lesinski@ft.com>
	 */

	'use strict';

	/**
	 * Mini logger
	 *
	 * @return {Function}
	 */
	var debug = 0 ? console.log.bind(console, '[fastdom]') : function() {};

	/**
	 * Normalized rAF
	 *
	 * @type {Function}
	 */
	var raf = win.requestAnimationFrame
	  || win.webkitRequestAnimationFrame
	  || win.mozRequestAnimationFrame
	  || win.msRequestAnimationFrame
	  || function(cb) { return setTimeout(cb, 16); };

	/**
	 * Initialize a `FastDom`.
	 *
	 * @constructor
	 */
	function FastDom() {
	  var self = this;
	  self.reads = [];
	  self.writes = [];
	  self.raf = raf.bind(win); // test hook
	  debug('initialized', self);
	}

	FastDom.prototype = {
	  constructor: FastDom,

	  /**
	   * Adds a job to the read batch and
	   * schedules a new frame if need be.
	   *
	   * @param  {Function} fn
	   * @public
	   */
	  measure: function(fn, ctx) {
	    debug('measure');
	    var task = !ctx ? fn : fn.bind(ctx);
	    this.reads.push(task);
	    scheduleFlush(this);
	    return task;
	  },

	  /**
	   * Adds a job to the
	   * write batch and schedules
	   * a new frame if need be.
	   *
	   * @param  {Function} fn
	   * @public
	   */
	  mutate: function(fn, ctx) {
	    debug('mutate');
	    var task = !ctx ? fn : fn.bind(ctx);
	    this.writes.push(task);
	    scheduleFlush(this);
	    return task;
	  },

	  /**
	   * Clears a scheduled 'read' or 'write' task.
	   *
	   * @param {Object} task
	   * @return {Boolean} success
	   * @public
	   */
	  clear: function(task) {
	    debug('clear', task);
	    return remove(this.reads, task) || remove(this.writes, task);
	  },

	  /**
	   * Extend this FastDom with some
	   * custom functionality.
	   *
	   * Because fastdom must *always* be a
	   * singleton, we're actually extending
	   * the fastdom instance. This means tasks
	   * scheduled by an extension still enter
	   * fastdom's global task queue.
	   *
	   * The 'super' instance can be accessed
	   * from `this.fastdom`.
	   *
	   * @example
	   *
	   * var myFastdom = fastdom.extend({
	   *   initialize: function() {
	   *     // runs on creation
	   *   },
	   *
	   *   // override a method
	   *   measure: function(fn) {
	   *     // do extra stuff ...
	   *
	   *     // then call the original
	   *     return this.fastdom.measure(fn);
	   *   },
	   *
	   *   ...
	   * });
	   *
	   * @param  {Object} props  properties to mixin
	   * @return {FastDom}
	   */
	  extend: function(props) {
	    debug('extend', props);
	    if (typeof props != 'object') throw new Error('expected object');

	    var child = Object.create(this);
	    mixin(child, props);
	    child.fastdom = this;

	    // run optional creation hook
	    if (child.initialize) child.initialize();

	    return child;
	  },

	  // override this with a function
	  // to prevent Errors in console
	  // when tasks throw
	  catch: null
	};

	/**
	 * Schedules a new read/write
	 * batch if one isn't pending.
	 *
	 * @private
	 */
	function scheduleFlush(fastdom) {
	  if (!fastdom.scheduled) {
	    fastdom.scheduled = true;
	    fastdom.raf(flush.bind(null, fastdom));
	    debug('flush scheduled');
	  }
	}

	/**
	 * Runs queued `read` and `write` tasks.
	 *
	 * Errors are caught and thrown by default.
	 * If a `.catch` function has been defined
	 * it is called instead.
	 *
	 * @private
	 */
	function flush(fastdom) {
	  debug('flush');

	  var writes = fastdom.writes;
	  var reads = fastdom.reads;
	  var error;

	  try {
	    debug('flushing reads', reads.length);
	    runTasks(reads);
	    debug('flushing writes', writes.length);
	    runTasks(writes);
	  } catch (e) { error = e; }

	  fastdom.scheduled = false;

	  // If the batch errored we may still have tasks queued
	  if (reads.length || writes.length) scheduleFlush(fastdom);

	  if (error) {
	    debug('task errored', error.message);
	    if (fastdom.catch) fastdom.catch(error);
	    else throw error;
	  }
	}

	/**
	 * We run this inside a try catch
	 * so that if any jobs error, we
	 * are able to recover and continue
	 * to flush the batch until it's empty.
	 *
	 * @private
	 */
	function runTasks(tasks) {
	  debug('run tasks');
	  var task; while (task = tasks.shift()) task();
	}

	/**
	 * Remove an item from an Array.
	 *
	 * @param  {Array} array
	 * @param  {*} item
	 * @return {Boolean}
	 */
	function remove(array, item) {
	  var index = array.indexOf(item);
	  return !!~index && !!array.splice(index, 1);
	}

	/**
	 * Mixin own properties of source
	 * object into the target.
	 *
	 * @param  {Object} target
	 * @param  {Object} source
	 */
	function mixin(target, source) {
	  for (var key in source) {
	    if (source.hasOwnProperty(key)) target[key] = source[key];
	  }
	}

	// There should never be more than
	// one instance of `FastDom` in an app
	var exports = win.fastdom = (win.fastdom || new FastDom()); // jshint ignore:line

	// Expose to CJS & AMD
	if (("function")[0] == 'f') !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return exports; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	else if ((typeof module)[0] == 'o') module.exports = exports;

	})( typeof window !== 'undefined' ? window : this);


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = dispatchEvent;

	var _SEvent = __webpack_require__(17);

	var _SEvent2 = _interopRequireDefault(_SEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Helper to quickly display an event with some optional data attached to it
	 *
	 * @name 		dispatchEvent
	 * @param 		{HTMLElement} 					target  		The element to dispatch the event from
	 * @param 		{String} 						name 			The event name to dispatch
	 * @param 		{Mixed} 						data 			The data to attache to the event
	 *
	 * @example  	js
	 * import dispatchEvent from 'sugarcss/js/dom/dispatchEvent'
	 * dispatchEvent(myCoolHTMLElement, 'myCoolEventName', {
	 * 		var1 : 'value1'
	 * });
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function dispatchEvent(target, name) {
	  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	  // create new event
	  var e = new _SEvent2.default(name, {
	    detail: data,
	    bubbles: true,
	    cancelable: true
	  });
	  target.dispatchEvent(e);
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _customEvent = __webpack_require__(18);

	var _customEvent2 = _interopRequireDefault(_customEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _customEvent2.default;

	/**
	 * @constructor
	 * @param  		{String} 	name 		The event name
	 * @param 		{Object} 	settings 	The event settings
	 */

	/**
	 * Set if the event is cancelable or not
	 * @setting
	 * @name 		cancelable
	 * @type 		{Boolean}
	 * @default 	true
	 */

	/**
	 * Set if the event will bubble or not
	 * @setting
	 * @name 		bubbles
	 * @type 		{Boolean}
	 * @default 	true
	 */

	/**
	 * Pass an object that will be sent with the event
	 * @setting
	 * @name 		detail
	 * @type 		{Object}
	 * @default 	null
	 */
	/**
	 * @class 		SEvent
	 * Proxy class to create custom events that can be dispatched
	 * through the standard dispatch method on any HTMLElement
	 *
	 * @example 	js
	 * let myEvent = new SEvent('myCoolEvent', {
	 * 		cancelable : true,
	 * 		bubbles : false,
	 * 		detail : {
	 * 			// some datas to send with the event
	 * 		}
	 * });
	 * // dispatch the event from an HTMLElement
	 * myHTMLElement.dispatch(myEvent);
	 *
	 * @see 		https://www.npmjs.com/package/customevent
	 * @author 		Olivier Bossel<olivier.bossel@gmail.com>
	 */

/***/ },
/* 18 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	var NativeCustomEvent = global.CustomEvent;

	function useNative () {
	  try {
	    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
	    return  'cat' === p.type && 'bar' === p.detail.foo;
	  } catch (e) {
	  }
	  return false;
	}

	/**
	 * Cross-browser `CustomEvent` constructor.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
	 *
	 * @public
	 */

	module.exports = useNative() ? NativeCustomEvent :

	// IE >= 9
	'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent (type, params) {
	  var e = document.createEvent('CustomEvent');
	  if (params) {
	    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
	  } else {
	    e.initCustomEvent(type, false, false, void 0);
	  }
	  return e;
	} :

	// IE <= 8
	function CustomEvent (type, params) {
	  var e = document.createEventObject();
	  e.type = type;
	  if (params) {
	    e.bubbles = Boolean(params.bubbles);
	    e.cancelable = Boolean(params.cancelable);
	    e.detail = params.detail;
	  } else {
	    e.bubbles = false;
	    e.cancelable = false;
	    e.detail = void 0;
	  }
	  return e;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = whenInViewport;

	var _whenVisible = __webpack_require__(20);

	var _whenVisible2 = _interopRequireDefault(_whenVisible);

	var _isInViewport = __webpack_require__(23);

	var _isInViewport2 = _interopRequireDefault(_isInViewport);

	var _throttle = __webpack_require__(24);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _closest = __webpack_require__(25);

	var _closest2 = _interopRequireDefault(_closest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Monitor an HTMLElement to be notified when it is in the viewport
	 *
	 * @name 		whenInViewport
	 * @param 		{HTMLElement} 				elm 		The element to monitor
	 * @param 		{Function} 					[cb=null] 	An optional callback to call when the element is in the viewport
	 * @return 		(Promise) 								The promise that will be resolved when the element is in the viewport
	 *
	 * @example 	js
	 * import whenInViewport from 'sugarcss/js/dom/whenInViewport'
	 * whenInViewport(myCoolHTMLElement).then((elm) => {
	 * 		// do something with your element that has entered the viewport...
	 * });
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function whenInViewport(elm) {
		var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		return new Promise(function (resolve, reject) {
			// try to get the closest element that has an overflow
			var scrollContainerElm = document;
			if (!elm._inViewportContainer) {
				var overflowContainer = (0, _closest2.default)(elm, '[data-in-viewport-container]');
				if (overflowContainer) {
					scrollContainerElm = overflowContainer;
					elm._inViewportContainer = overflowContainer;
				}
			} else {
				scrollContainerElm = elm._inViewportContainer;
			}

			var isInViewport = false,
			    isVisible = false,
			    _cb = function _cb() {
				if (isVisible && isInViewport) {
					scrollContainerElm.removeEventListener('scroll', checkViewport);
					window.removeEventListener('resize', checkViewport);
					if (cb) cb(elm);
					resolve(elm);
				}
			};
			var checkViewport = (0, _throttle2.default)(function (e) {
				isInViewport = (0, _isInViewport2.default)(elm, 50);
				_cb();
			}, 100);

			// detect when visible
			(0, _whenVisible2.default)(elm).then(function (elm) {
				isVisible = true;
				_cb();
			});

			// listen for resize
			scrollContainerElm.addEventListener('scroll', checkViewport);
			window.addEventListener('resize', checkViewport);
			setTimeout(function () {
				checkViewport(null);
			});
		});
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = whenVisible;

	var _isVisible = __webpack_require__(21);

	var _isVisible2 = _interopRequireDefault(_isVisible);

	var _closestNotVisible = __webpack_require__(22);

	var _closestNotVisible2 = _interopRequireDefault(_closestNotVisible);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Monitor an HTMLElement to be notified when it is visible
	 *
	 * @name 		whenVisible
	 * @param 		{HTMLElement} 				elm 		The element to monitor
	 * @param 		{Function} 					[cb=null] 	An optional callback to call when the element is visible
	 * @return 		(Promise) 								The promise that will be resolved when the element is visible
	 *
	 * @example 	js
	 * import whenVisible from 'sugarcss/js/dom/whenVisible'
	 * whenVisible(myCoolHTMLElement).then((elm) => {
	 * 		// do something with your element that is now visible
	 * });
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function whenVisible(elm) {
		var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		return new Promise(function (resolve, reject) {

			// variables
			var isSelfVisible = false,
			    areParentsVisible = false,
			    closestNotVisible = null,
			    selfObserver = null,
			    parentObserver = null;

			var _cb = function _cb() {
				if (isSelfVisible && areParentsVisible) {
					// process callbacks
					if (cb) cb(elm);
					resolve(elm);
					// remove the event listeners
					elm.removeEventListener('transitionend', _eventCb);
					elm.removeEventListener('animationstart', _eventCb);
					elm.removeEventListener('animationend', _eventCb);
					// remove the event listeners
					if (closestNotVisible) {
						closestNotVisible.removeEventListener('transitionend', _eventCb);
						closestNotVisible.removeEventListener('animationstart', _eventCb);
						closestNotVisible.removeEventListener('animationend', _eventCb);
					}
				}
			};

			// function called on each transitionend, start, etc...
			var _eventCb = function _eventCb(e) {
				// wait just a little time to check again
				setTimeout(function () {
					if (e.target === elm) {
						if ((0, _isVisible2.default)(elm)) {
							isSelfVisible = true;
							if (selfObserver && selfObserver.disconnect) {
								selfObserver.disconnect();
							}
							// remove the event listeners
							elm.removeEventListener('transitionend', _eventCb);
							elm.removeEventListener('animationstart', _eventCb);
							elm.removeEventListener('animationend', _eventCb);
						}
					} else if (e.target === closestNotVisible) {
						if ((0, _isVisible2.default)(closestNotVisible)) {
							areParentsVisible = true;
							if (parentObserver && parentObserver.disconnect) {
								parentObserver.disconnect();
							}
							// remove the event listeners
							closestNotVisible.removeEventListener('transitionend', _eventCb);
							closestNotVisible.removeEventListener('animationstart', _eventCb);
							closestNotVisible.removeEventListener('animationend', _eventCb);
						}
					}
					// callback
					_cb();
				});
			};

			// check if element itself is not visible
			if (!(0, _isVisible2.default)(elm)) {
				selfObserver = new MutationObserver(function (mutations) {
					mutations.forEach(function (mutation) {
						// check that is the style whos changed
						if (mutation.attributeName === 'style' || mutation.attributeName === 'class') {
							// check if is visible
							if ((0, _isVisible2.default)(mutation.target)) {
								// update
								isSelfVisible = true;
								// callback
								_cb();
								// stop observe
								selfObserver.disconnect();
							}
						}
					});
				});
				selfObserver.observe(elm, { attributes: true });

				// listen for animationstart to check if the element is visible
				elm.addEventListener('animationstart', _eventCb);
				elm.addEventListener('animationend', _eventCb);
				elm.addEventListener('transitionend', _eventCb);
			} else {
				isSelfVisible = true;
			}

			// get the closest not visible element
			// if found, we monitor it to check when it is visible
			closestNotVisible = (0, _closestNotVisible2.default)(elm);
			if (closestNotVisible) {
				parentObserver = new MutationObserver(function (mutations) {
					mutations.forEach(function (mutation) {
						// check that is the style whos changed
						if (mutation.attributeName === 'style' || mutation.attributeName === 'class') {
							// check if is visible
							if ((0, _isVisible2.default)(mutation.target)) {
								// update
								areParentsVisible = true;
								// callback
								_cb();
								// stop observe
								parentObserver.disconnect();
							}
						}
					});
				});
				parentObserver.observe(closestNotVisible, { attributes: true });

				// listen for animationstart to check if the element is visible
				closestNotVisible.addEventListener('animationstart', _eventCb);
				closestNotVisible.addEventListener('animationend', _eventCb);
				closestNotVisible.addEventListener('transitionend', _eventCb);
			} else {
				areParentsVisible = true;
			}

			// callback
			_cb();
		});
	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = isVisible;
	/**
	 * Check if the passed HTMLElement is visible or not.
	 * Visible mean that it has not an opacity of 0, not a visibility of hidden and not a display of none
	 *
	 * @name 		isVisible
	 * @param 		{HTMLElement} 				elm  		The element to check
	 * @return 		{Boolean								If the element is visible or not
	 *
	 * @example  	js
	 * import isVisible from 'sugarcss/js/dom/isVisible'
	 * if (isVisible(myCoolHTMLElement) {
	 * 		// i'm visible
	 * }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function isVisible(elm) {

	  // assume that the script tag is always visible
	  if (elm.nodeName.toLowerCase() === 'script') return true;

	  // if no offset parent
	  // mean that the element is not visible
	  // if (elm.offsetParent === null) return false;

	  // get style
	  var style = window.getComputedStyle(elm, null),
	      opacity = style['opacity'],
	      visibility = style['visibility'],
	      display = style['display'];
	  return '0' !== opacity && 'none' !== display && 'hidden' !== visibility;
	}
	window.__isVisible = isVisible;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = closestNotVisible;

	var _isVisible = __webpack_require__(21);

	var _isVisible2 = _interopRequireDefault(_isVisible);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Go up the dom three to find the first element that is not visible.
	 * Not visible mean that has either an opacity to 0, a visibility to hidden or a display to none
	 *
	 * @name 		closestNotVisible
	 * @param 		{HTMLElement} 					elm  		The element to start on
	 * @return 		{HTMLElement} 								The element found or null
	 *
	 * @example  	js
	 * import closestNotVisible from 'sugarcss/js/dom/closestNotVisible'
	 * const closestElm = closest(myCoolElement);
	 * if (closestElm) {
	 * 		// we have found en element is not visible
	 * }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function closestNotVisible(elm) {
	  elm = elm.parentNode;
	  while (elm && elm != document) {
	    if (!(0, _isVisible2.default)(elm)) {
	      return elm;
	    }
	    elm = elm.parentNode;
	  }
	  return false;
	}
	window.__closestNotVisible = closestNotVisible;

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = isInViewport;
	/**
	 * Check if the passed HTMLElement is in the viewport or not
	 *
	 * @name 		isInViewport
	 * @param 		{HTMLElement} 				elm  		The element to insert
	 * @param 		{Object} 					offset 		An object of top, right, bottom and left offset used to detect the status
	 * @return 		{Boolean								If the element is in the viewport or not
	 *
	 * @example  	js
	 * import isInViewport from 'sugarcss/js/dom/isInViewport'
	 * if (isInViewport(myCoolHTMLElement) {
	 * 		// i'm in the viewport
	 * }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	// import __getBoundingClientRect from './getBoundingClientRect'
	function isInViewport(elm) {
		var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;

		// // try to get the closest element that has an overflow
		// if ( ! elm._inViewportContainer) {
		// 	const overflowContainer = __closest(elm, '[data-in-viewport-container]');
		// 	if (overflowContainer) {
		// 		elm._inViewportContainer = overflowContainer;
		// 	} else {
		// 		elm._inViewportContainer = window;
		// 	}
		// }
		//
		// if (elm._inViewportContainer !== window) {
		// 	containerOffset = __getBoundingClientRect(elm._inViewportContainer);
		// 	containerHeight = elm._inViewportContainer.offsetHeight;
		// 	containerWidth = elm._inViewportContainer.offsetWidth;
		// }

		var containerHeight = window.innerHeight || document.documentElement.clientHeight;
		var containerWidth = window.innerWidth || document.documentElement.clientWidth;
		var rect = elm.getBoundingClientRect();
		return rect.top - containerHeight - offset <= 0 && rect.bottom + offset >= 0 && rect.left - containerWidth - offset <= 0 && rect.right + offset >= 0;
	}
	window.__isInViewport = isInViewport;

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = throttle;
	/**
	 * This utils function allows you to make sure that a function that will normally be called
	 * several times, for example during a scroll event, to be called once each threshhold time
	 *
	 * @name 			throttle
	 * @example 		js
	 * const myThrottledFn = throttle(() => {
	 * 		// my function content that will be
	 * 		// executed only once each second
	 * }, 1000);
	 *
	 * document.addEventListener('scroll', (e) => {
	 * 		// call my throttled function
	 * 		myThrottledFn();
	 * });
	 *
	 * @author 			Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function throttle(fn, threshhold) {
	    threshhold || (threshhold = 250);
	    var last, deferTimer;
	    return function () {
	        var context = this;

	        var now = +new Date(),
	            args = arguments;
	        if (last && now < last + threshhold) {
	            // hold on to it
	            clearTimeout(deferTimer);
	            deferTimer = setTimeout(function () {
	                last = now;
	                fn.apply(context, args);
	            }, threshhold);
	        } else {
	            last = now;
	            fn.apply(context, args);
	        }
	    };
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = closest;

	var _matches = __webpack_require__(26);

	var _matches2 = _interopRequireDefault(_matches);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Go up the dom three to find the first element that matches the passed selector
	 *
	 * @name 		closest
	 * @param 		{HTMLElement} 					elm  		The element to start on
	 * @param 		{String|Function} 				selector 	A css selector to search for or a check function that will be used
	 * @return 		{HTMLElement} 								The element found or null
	 *
	 * @example  	js
	 * import closest from 'sugarcss/js/dom/closest'
	 * const closestElm = closest(myCoolElement, '.my-cool-class');
	 * if (closestElm) {
	 * 		// we have found en element that matches the selector
	 * }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function closest(elm, selector) {
	  elm = elm.parentNode;
	  while (elm && elm != document) {
	    if (typeof selector === 'function') {
	      if (selector(elm)) return elm;
	    } else if (typeof selector === 'string' && (0, _matches2.default)(elm, selector)) {
	      return elm;
	    }
	    elm = elm.parentNode;
	  }
	  return null;
	}
	window.__closest = closest;

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = matches;
	/**
	 * Polyfill for the Element.matches function
	 *
	 * @name 		matches
	 * @param 		{HTMLElement} 			elm  			The element to check
	 * @param 		{String} 				selector 		The selector to check on the element
	 * @return 		{Boolean} 								If the element match the selector or not
	 *
	 * @example  	js
	 * import matches from 'sugarcss/js/dom/matches'
	 * if (matches(myCoolHTMLElement, '.my-cool-css-selector')) {
	 * 		// the element match the selector
	 * }
	 *
	 * @see 		https://developer.mozilla.org/en/docs/Web/API/Element/matches
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function matches(el, selector) {
	  if (el.nodeName == '#comment' || el.nodeName == '#text') {
	    return false;
	  }
	  var p = Element.prototype;
	  var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function (s) {
	    return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
	  };
	  return f.call(el, selector);
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = whenAttribute;

	var _attributesObservable = __webpack_require__(28);

	var _attributesObservable2 = _interopRequireDefault(_attributesObservable);

	var _autoCast = __webpack_require__(7);

	var _autoCast2 = _interopRequireDefault(_autoCast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Resolve a promise when the wanted attribute on the passed HTMLElement exist or pass the check function provided
	 *
	 * @name 		whenAttribute
	 * @param 		{HTMLElement} 				elm 				The HTMLElement on which to monitor the property
	 * @param 		{String} 					attribute 			The attribute to monitor
	 * @param 		{Function} 					[checkFn=null] 		An optional function to check the attribute. The promise is resolved when this function return true
	 * @return 		(Promise) 										The promise that will be resolved when the attribute exist on the element (and that it passes the checkFn)
	 *
	 * @example 	js
	 * import whenAttribute from 'sugarcss/js/dom/whenAttribute'
	 * whenAttribute(myCoolHTMLElement, 'value').then((value) => {
	 * 		// the value attribute exist on the element
	 * });
	 * // with a checkFn
	 * whenAttribute(myCoolHTMLElement, 'value', (newVal, oldVal) => {
	 * 		// make sure the value is a number
	 * 		return typeof(newVal) === 'number';
	 * }).then((value) => {
	 * 		// do something with your number value...
	 * });
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function whenAttribute(elm, attrName) {
		var checkFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

		return new Promise(function (resolve, reject) {

			if (elm.hasAttribute(attrName)) {
				var value = (0, _autoCast2.default)(elm.getAttribute(attrName));
				if (checkFn && checkFn(value, value)) {
					resolve(value);
					return;
				} else if (!checkFn) {
					resolve(value);
					return;
				}
			}

			var obs = (0, _attributesObservable2.default)(elm).subscribe(function (mutation) {
				if (mutation.attributeName === attrName) {
					var _value = (0, _autoCast2.default)(mutation.target.getAttribute(mutation.attributeName));
					if (checkFn && checkFn(_value, mutation.oldValue)) {
						resolve(_value);
						obs.unsubscribe();
					} else if (!checkFn) {
						resolve(_value);
						obs.unsubscribe();
					}
				}
			});
		});
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	/**
	 * List of attributes to observe
	 * @setting
	 * @name 		attributes
	 * @type 		{Array}
	 * @default 	null
	 */
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	/**
	 * Observe attributes on an HTMLElement and get mutations through the observable subscription
	 *
	 * @name 		attributesObservable
	 * @param 		{HTMLElement} 					target 		The element to observe
	 * @param 		{MutationObserverInit} 			settings 	The mutation observer settings
	 * @return 		{Observable} 								The mutation observable
	 *
	 * @example  	js
	 * import attributesObservable from 'sugarcss/js/dom/attributesObservable'
	 * attributesObservable(myCoolHTMLElement).subscribe((mutation) => {
	 * 		// do something with the mutation
	 * });
	 *
	 * @see 		https://developer.mozilla.org/en/docs/Web/API/MutationObserver
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */


	exports.default = function (target) {
		var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


		var observable = new _Observable.Observable(function (observer) {

			// create a new observer
			var mutationObserver = new MutationObserver(function (mutations) {
				var mutedAttrs = {};
				// loop on mutations
				mutations.forEach(function (mutation) {
					// push mutation
					if (!mutedAttrs[mutation.attribute]) {
						observer.next(mutation);
						mutedAttrs[mutation.attribute] = true;
					}
				});
				mutedAttrs = {};
			});
			mutationObserver.observe(target, _extends({
				attributes: true
			}, settings));
			// unsubscribe routine
			return function () {
				mutationObserver.disconnect();
			};
		});

		return observable;
	};

	var _Observable = __webpack_require__(29);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(30);
	var toSubscriber_1 = __webpack_require__(31);
	var observable_1 = __webpack_require__(42);
	/**
	 * A representation of any set of values over any amount of time. This the most basic building block
	 * of RxJS.
	 *
	 * @class Observable<T>
	 */
	var Observable = (function () {
	    /**
	     * @constructor
	     * @param {Function} subscribe the function that is  called when the Observable is
	     * initially subscribed to. This function is given a Subscriber, to which new values
	     * can be `next`ed, or an `error` method can be called to raise an error, or
	     * `complete` can be called to notify of a successful completion.
	     */
	    function Observable(subscribe) {
	        this._isScalar = false;
	        if (subscribe) {
	            this._subscribe = subscribe;
	        }
	    }
	    /**
	     * Creates a new Observable, with this Observable as the source, and the passed
	     * operator defined as the new observable's operator.
	     * @method lift
	     * @param {Operator} operator the operator defining the operation to take on the observable
	     * @return {Observable} a new observable with the Operator applied
	     */
	    Observable.prototype.lift = function (operator) {
	        var observable = new Observable();
	        observable.source = this;
	        observable.operator = operator;
	        return observable;
	    };
	    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
	        var operator = this.operator;
	        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
	        if (operator) {
	            operator.call(sink, this.source);
	        }
	        else {
	            sink.add(this._subscribe(sink));
	        }
	        if (sink.syncErrorThrowable) {
	            sink.syncErrorThrowable = false;
	            if (sink.syncErrorThrown) {
	                throw sink.syncErrorValue;
	            }
	        }
	        return sink;
	    };
	    /**
	     * @method forEach
	     * @param {Function} next a handler for each value emitted by the observable
	     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
	     * @return {Promise} a promise that either resolves on observable completion or
	     *  rejects with the handled error
	     */
	    Observable.prototype.forEach = function (next, PromiseCtor) {
	        var _this = this;
	        if (!PromiseCtor) {
	            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	                PromiseCtor = root_1.root.Rx.config.Promise;
	            }
	            else if (root_1.root.Promise) {
	                PromiseCtor = root_1.root.Promise;
	            }
	        }
	        if (!PromiseCtor) {
	            throw new Error('no Promise impl found');
	        }
	        return new PromiseCtor(function (resolve, reject) {
	            var subscription = _this.subscribe(function (value) {
	                if (subscription) {
	                    // if there is a subscription, then we can surmise
	                    // the next handling is asynchronous. Any errors thrown
	                    // need to be rejected explicitly and unsubscribe must be
	                    // called manually
	                    try {
	                        next(value);
	                    }
	                    catch (err) {
	                        reject(err);
	                        subscription.unsubscribe();
	                    }
	                }
	                else {
	                    // if there is NO subscription, then we're getting a nexted
	                    // value synchronously during subscription. We can just call it.
	                    // If it errors, Observable's `subscribe` will ensure the
	                    // unsubscription logic is called, then synchronously rethrow the error.
	                    // After that, Promise will trap the error and send it
	                    // down the rejection path.
	                    next(value);
	                }
	            }, reject, resolve);
	        });
	    };
	    Observable.prototype._subscribe = function (subscriber) {
	        return this.source.subscribe(subscriber);
	    };
	    /**
	     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
	     * @method Symbol.observable
	     * @return {Observable} this instance of the observable
	     */
	    Observable.prototype[observable_1.$$observable] = function () {
	        return this;
	    };
	    // HACK: Since TypeScript inherits static properties too, we have to
	    // fight against TypeScript here so Subject can have a different static create signature
	    /**
	     * Creates a new cold Observable by calling the Observable constructor
	     * @static true
	     * @owner Observable
	     * @method create
	     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
	     * @return {Observable} a new cold observable
	     */
	    Observable.create = function (subscribe) {
	        return new Observable(subscribe);
	    };
	    return Observable;
	}());
	exports.Observable = Observable;
	//# sourceMappingURL=Observable.js.map

/***/ },
/* 30 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	/**
	 * window: browser in DOM main thread
	 * self: browser in WebWorker
	 * global: Node.js/other
	 */
	exports.root = (typeof window == 'object' && window.window === window && window
	    || typeof self == 'object' && self.self === self && self
	    || typeof global == 'object' && global.global === global && global);
	if (!exports.root) {
	    throw new Error('RxJS could not find any global context (window, self, global)');
	}
	//# sourceMappingURL=root.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Subscriber_1 = __webpack_require__(32);
	var rxSubscriber_1 = __webpack_require__(41);
	var Observer_1 = __webpack_require__(40);
	function toSubscriber(nextOrObserver, error, complete) {
	    if (nextOrObserver) {
	        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
	            return nextOrObserver;
	        }
	        if (nextOrObserver[rxSubscriber_1.$$rxSubscriber]) {
	            return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
	        }
	    }
	    if (!nextOrObserver && !error && !complete) {
	        return new Subscriber_1.Subscriber(Observer_1.empty);
	    }
	    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	}
	exports.toSubscriber = toSubscriber;
	//# sourceMappingURL=toSubscriber.js.map

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isFunction_1 = __webpack_require__(33);
	var Subscription_1 = __webpack_require__(34);
	var Observer_1 = __webpack_require__(40);
	var rxSubscriber_1 = __webpack_require__(41);
	/**
	 * Implements the {@link Observer} interface and extends the
	 * {@link Subscription} class. While the {@link Observer} is the public API for
	 * consuming the values of an {@link Observable}, all Observers get converted to
	 * a Subscriber, in order to provide Subscription-like capabilities such as
	 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
	 * implementing operators, but it is rarely used as a public API.
	 *
	 * @class Subscriber<T>
	 */
	var Subscriber = (function (_super) {
	    __extends(Subscriber, _super);
	    /**
	     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
	     * defined Observer or a `next` callback function.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     */
	    function Subscriber(destinationOrNext, error, complete) {
	        _super.call(this);
	        this.syncErrorValue = null;
	        this.syncErrorThrown = false;
	        this.syncErrorThrowable = false;
	        this.isStopped = false;
	        switch (arguments.length) {
	            case 0:
	                this.destination = Observer_1.empty;
	                break;
	            case 1:
	                if (!destinationOrNext) {
	                    this.destination = Observer_1.empty;
	                    break;
	                }
	                if (typeof destinationOrNext === 'object') {
	                    if (destinationOrNext instanceof Subscriber) {
	                        this.destination = destinationOrNext;
	                        this.destination.add(this);
	                    }
	                    else {
	                        this.syncErrorThrowable = true;
	                        this.destination = new SafeSubscriber(this, destinationOrNext);
	                    }
	                    break;
	                }
	            default:
	                this.syncErrorThrowable = true;
	                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
	                break;
	        }
	    }
	    Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function () { return this; };
	    /**
	     * A static factory for a Subscriber, given a (potentially partial) definition
	     * of an Observer.
	     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
	     * Observer represented by the given arguments.
	     */
	    Subscriber.create = function (next, error, complete) {
	        var subscriber = new Subscriber(next, error, complete);
	        subscriber.syncErrorThrowable = false;
	        return subscriber;
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `next` from
	     * the Observable, with a value. The Observable may call this method 0 or more
	     * times.
	     * @param {T} [value] The `next` value.
	     * @return {void}
	     */
	    Subscriber.prototype.next = function (value) {
	        if (!this.isStopped) {
	            this._next(value);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `error` from
	     * the Observable, with an attached {@link Error}. Notifies the Observer that
	     * the Observable has experienced an error condition.
	     * @param {any} [err] The `error` exception.
	     * @return {void}
	     */
	    Subscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._error(err);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive a valueless notification of type
	     * `complete` from the Observable. Notifies the Observer that the Observable
	     * has finished sending push-based notifications.
	     * @return {void}
	     */
	    Subscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._complete();
	        }
	    };
	    Subscriber.prototype.unsubscribe = function () {
	        if (this.closed) {
	            return;
	        }
	        this.isStopped = true;
	        _super.prototype.unsubscribe.call(this);
	    };
	    Subscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    Subscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this.unsubscribe();
	    };
	    Subscriber.prototype._complete = function () {
	        this.destination.complete();
	        this.unsubscribe();
	    };
	    return Subscriber;
	}(Subscription_1.Subscription));
	exports.Subscriber = Subscriber;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SafeSubscriber = (function (_super) {
	    __extends(SafeSubscriber, _super);
	    function SafeSubscriber(_parent, observerOrNext, error, complete) {
	        _super.call(this);
	        this._parent = _parent;
	        var next;
	        var context = this;
	        if (isFunction_1.isFunction(observerOrNext)) {
	            next = observerOrNext;
	        }
	        else if (observerOrNext) {
	            context = observerOrNext;
	            next = observerOrNext.next;
	            error = observerOrNext.error;
	            complete = observerOrNext.complete;
	            if (isFunction_1.isFunction(context.unsubscribe)) {
	                this.add(context.unsubscribe.bind(context));
	            }
	            context.unsubscribe = this.unsubscribe.bind(this);
	        }
	        this._context = context;
	        this._next = next;
	        this._error = error;
	        this._complete = complete;
	    }
	    SafeSubscriber.prototype.next = function (value) {
	        if (!this.isStopped && this._next) {
	            var _parent = this._parent;
	            if (!_parent.syncErrorThrowable) {
	                this.__tryOrUnsub(this._next, value);
	            }
	            else if (this.__tryOrSetError(_parent, this._next, value)) {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._error) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._error, err);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._error, err);
	                    this.unsubscribe();
	                }
	            }
	            else if (!_parent.syncErrorThrowable) {
	                this.unsubscribe();
	                throw err;
	            }
	            else {
	                _parent.syncErrorValue = err;
	                _parent.syncErrorThrown = true;
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._complete) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._complete);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._complete);
	                    this.unsubscribe();
	                }
	            }
	            else {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            this.unsubscribe();
	            throw err;
	        }
	    };
	    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            parent.syncErrorValue = err;
	            parent.syncErrorThrown = true;
	            return true;
	        }
	        return false;
	    };
	    SafeSubscriber.prototype._unsubscribe = function () {
	        var _parent = this._parent;
	        this._context = null;
	        this._parent = null;
	        _parent.unsubscribe();
	    };
	    return SafeSubscriber;
	}(Subscriber));
	//# sourceMappingURL=Subscriber.js.map

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	function isFunction(x) {
	    return typeof x === 'function';
	}
	exports.isFunction = isFunction;
	//# sourceMappingURL=isFunction.js.map

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isArray_1 = __webpack_require__(35);
	var isObject_1 = __webpack_require__(36);
	var isFunction_1 = __webpack_require__(33);
	var tryCatch_1 = __webpack_require__(37);
	var errorObject_1 = __webpack_require__(38);
	var UnsubscriptionError_1 = __webpack_require__(39);
	/**
	 * Represents a disposable resource, such as the execution of an Observable. A
	 * Subscription has one important method, `unsubscribe`, that takes no argument
	 * and just disposes the resource held by the subscription.
	 *
	 * Additionally, subscriptions may be grouped together through the `add()`
	 * method, which will attach a child Subscription to the current Subscription.
	 * When a Subscription is unsubscribed, all its children (and its grandchildren)
	 * will be unsubscribed as well.
	 *
	 * @class Subscription
	 */
	var Subscription = (function () {
	    /**
	     * @param {function(): void} [unsubscribe] A function describing how to
	     * perform the disposal of resources when the `unsubscribe` method is called.
	     */
	    function Subscription(unsubscribe) {
	        /**
	         * A flag to indicate whether this Subscription has already been unsubscribed.
	         * @type {boolean}
	         */
	        this.closed = false;
	        if (unsubscribe) {
	            this._unsubscribe = unsubscribe;
	        }
	    }
	    /**
	     * Disposes the resources held by the subscription. May, for instance, cancel
	     * an ongoing Observable execution or cancel any other type of work that
	     * started when the Subscription was created.
	     * @return {void}
	     */
	    Subscription.prototype.unsubscribe = function () {
	        var hasErrors = false;
	        var errors;
	        if (this.closed) {
	            return;
	        }
	        this.closed = true;
	        var _a = this, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
	        this._subscriptions = null;
	        if (isFunction_1.isFunction(_unsubscribe)) {
	            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
	            if (trial === errorObject_1.errorObject) {
	                hasErrors = true;
	                (errors = errors || []).push(errorObject_1.errorObject.e);
	            }
	        }
	        if (isArray_1.isArray(_subscriptions)) {
	            var index = -1;
	            var len = _subscriptions.length;
	            while (++index < len) {
	                var sub = _subscriptions[index];
	                if (isObject_1.isObject(sub)) {
	                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
	                    if (trial === errorObject_1.errorObject) {
	                        hasErrors = true;
	                        errors = errors || [];
	                        var err = errorObject_1.errorObject.e;
	                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
	                            errors = errors.concat(err.errors);
	                        }
	                        else {
	                            errors.push(err);
	                        }
	                    }
	                }
	            }
	        }
	        if (hasErrors) {
	            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
	        }
	    };
	    /**
	     * Adds a tear down to be called during the unsubscribe() of this
	     * Subscription.
	     *
	     * If the tear down being added is a subscription that is already
	     * unsubscribed, is the same reference `add` is being called on, or is
	     * `Subscription.EMPTY`, it will not be added.
	     *
	     * If this subscription is already in an `closed` state, the passed
	     * tear down logic will be executed immediately.
	     *
	     * @param {TeardownLogic} teardown The additional logic to execute on
	     * teardown.
	     * @return {Subscription} Returns the Subscription used or created to be
	     * added to the inner subscriptions list. This Subscription can be used with
	     * `remove()` to remove the passed teardown logic from the inner subscriptions
	     * list.
	     */
	    Subscription.prototype.add = function (teardown) {
	        if (!teardown || (teardown === Subscription.EMPTY)) {
	            return Subscription.EMPTY;
	        }
	        if (teardown === this) {
	            return this;
	        }
	        var sub = teardown;
	        switch (typeof teardown) {
	            case 'function':
	                sub = new Subscription(teardown);
	            case 'object':
	                if (sub.closed || typeof sub.unsubscribe !== 'function') {
	                    break;
	                }
	                else if (this.closed) {
	                    sub.unsubscribe();
	                }
	                else {
	                    (this._subscriptions || (this._subscriptions = [])).push(sub);
	                }
	                break;
	            default:
	                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
	        }
	        return sub;
	    };
	    /**
	     * Removes a Subscription from the internal list of subscriptions that will
	     * unsubscribe during the unsubscribe process of this Subscription.
	     * @param {Subscription} subscription The subscription to remove.
	     * @return {void}
	     */
	    Subscription.prototype.remove = function (subscription) {
	        // HACK: This might be redundant because of the logic in `add()`
	        if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
	            return;
	        }
	        var subscriptions = this._subscriptions;
	        if (subscriptions) {
	            var subscriptionIndex = subscriptions.indexOf(subscription);
	            if (subscriptionIndex !== -1) {
	                subscriptions.splice(subscriptionIndex, 1);
	            }
	        }
	    };
	    Subscription.EMPTY = (function (empty) {
	        empty.closed = true;
	        return empty;
	    }(new Subscription()));
	    return Subscription;
	}());
	exports.Subscription = Subscription;
	//# sourceMappingURL=Subscription.js.map

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
	//# sourceMappingURL=isArray.js.map

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	function isObject(x) {
	    return x != null && typeof x === 'object';
	}
	exports.isObject = isObject;
	//# sourceMappingURL=isObject.js.map

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var errorObject_1 = __webpack_require__(38);
	var tryCatchTarget;
	function tryCatcher() {
	    try {
	        return tryCatchTarget.apply(this, arguments);
	    }
	    catch (e) {
	        errorObject_1.errorObject.e = e;
	        return errorObject_1.errorObject;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}
	exports.tryCatch = tryCatch;
	;
	//# sourceMappingURL=tryCatch.js.map

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	// typeof any so that it we don't have to cast when comparing a result to the error object
	exports.errorObject = { e: {} };
	//# sourceMappingURL=errorObject.js.map

/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when one or more errors have occurred during the
	 * `unsubscribe` of a {@link Subscription}.
	 */
	var UnsubscriptionError = (function (_super) {
	    __extends(UnsubscriptionError, _super);
	    function UnsubscriptionError(errors) {
	        _super.call(this);
	        this.errors = errors;
	        var err = Error.call(this, errors ?
	            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
	        this.name = err.name = 'UnsubscriptionError';
	        this.stack = err.stack;
	        this.message = err.message;
	    }
	    return UnsubscriptionError;
	}(Error));
	exports.UnsubscriptionError = UnsubscriptionError;
	//# sourceMappingURL=UnsubscriptionError.js.map

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";
	exports.empty = {
	    closed: true,
	    next: function (value) { },
	    error: function (err) { throw err; },
	    complete: function () { }
	};
	//# sourceMappingURL=Observer.js.map

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(30);
	var Symbol = root_1.root.Symbol;
	exports.$$rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
	    Symbol.for('rxSubscriber') : '@@rxSubscriber';
	//# sourceMappingURL=rxSubscriber.js.map

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(30);
	function getSymbolObservable(context) {
	    var $$observable;
	    var Symbol = context.Symbol;
	    if (typeof Symbol === 'function') {
	        if (Symbol.observable) {
	            $$observable = Symbol.observable;
	        }
	        else {
	            $$observable = Symbol('observable');
	            Symbol.observable = $$observable;
	        }
	    }
	    else {
	        $$observable = '@@observable';
	    }
	    return $$observable;
	}
	exports.getSymbolObservable = getSymbolObservable;
	exports.$$observable = getSymbolObservable(root_1.root);
	//# sourceMappingURL=observable.js.map

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = propertyProxy;

	var _get2 = __webpack_require__(44);

	var _get3 = _interopRequireDefault(_get2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Create a proxy for and object property.
	 * This gives you the possibility to process the data of the property
	 * when it is getted or setted.
	 *
	 * @name 		propertyProxy
	 * @param 		{Object} 		obj 			The object on which to create the proxy
	 * @param 		{String} 		property 		The property name that will be proxied
	 * @param 		{Object} 		descriptor 		A descriptor object that contains at least a get or a set method, or both
	 * @param 		{Boolean} 		applySetterAtStart 	If need to apply the descriptor setter directly on the current value or not
	 *
	 * @example 	js
	 * const myObject = {
	 * 		title : 'World'
	 * };
	 * // create the proxy
	 * propertyProxy(myObject, 'title', {
	 * 		get : (value) => {
	 * 			return `Hello ${value}`;
	 * 		},
	 * 		set : (value) => {
	 * 			return `Youhou ${value}`;
	 * 		}
	 * });
	 * console.log(myObject.title) => 'Hello World';
	 * myObject.title = 'Universe';
	 * console.log(myObject.title) => 'Hello Youhou Universe';
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function propertyProxy(obj, property, descriptor) {
		var applySetterAtStart = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;


		// store the current value
		var val = (0, _get3.default)(obj, property);
		var currentDescriptor = Object.getOwnPropertyDescriptor(obj.prototype || obj, property);

		// custom setter check
		var _set = function _set(value) {

			if (descriptor.set) {
				value = descriptor.set(value);
			}

			// descriptor
			if (currentDescriptor && currentDescriptor.set) {
				var ret = currentDescriptor.set(value);
				if (ret) {
					val = ret;
				} else {
					val = currentDescriptor.get();
				}
			} else {
				val = value;
			}
		};

		// apply the setter if needed
		if (applySetterAtStart) _set(val);

		// make sure we have the good descriptor
		var d = Object.getOwnPropertyDescriptor(obj, property);
		Object.defineProperty(obj, property, {
			get: function get() {
				var _val = val;
				if (descriptor.get) {
					_val = descriptor.get(_val);
				}
				if (currentDescriptor && currentDescriptor.get) {
					_val = descriptor.get();
				}
				return _val;
			},
			set: function set(v) {
				// const oldValue = val;
				// internal set to use the good setter
				_set(v);
				// notify of new update
				// this.notify(objPath, val, oldValue);
			},
			configurable: currentDescriptor && currentDescriptor.configurable !== undefined ? currentDescriptor.configurable : false,
			enumarable: currentDescriptor && currentDescriptor.enumarable !== undefined ? currentDescriptor.enumarable : true
		});

		// return the value
		return val;
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(45);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(46),
	    toKey = __webpack_require__(95);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(47),
	    isKey = __webpack_require__(48),
	    stringToPath = __webpack_require__(57),
	    toString = __webpack_require__(92);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}

	module.exports = castPath;


/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(47),
	    isSymbol = __webpack_require__(49);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(50),
	    isObjectLike = __webpack_require__(56);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(51),
	    getRawTag = __webpack_require__(54),
	    objectToString = __webpack_require__(55);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  value = Object(value);
	  return (symToStringTag && symToStringTag in value)
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(52);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(53);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 53 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(51);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 55 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },
/* 56 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(58);

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(59);

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	module.exports = memoizeCapped;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(60);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(61),
	    mapCacheDelete = __webpack_require__(86),
	    mapCacheGet = __webpack_require__(89),
	    mapCacheHas = __webpack_require__(90),
	    mapCacheSet = __webpack_require__(91);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(62),
	    ListCache = __webpack_require__(77),
	    Map = __webpack_require__(85);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(63),
	    hashDelete = __webpack_require__(73),
	    hashGet = __webpack_require__(74),
	    hashHas = __webpack_require__(75),
	    hashSet = __webpack_require__(76);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(64);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(65);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(66),
	    getValue = __webpack_require__(72);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(67),
	    isMasked = __webpack_require__(69),
	    isObject = __webpack_require__(68),
	    toSource = __webpack_require__(71);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(50),
	    isObject = __webpack_require__(68);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ },
/* 68 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(70);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(52);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ },
/* 71 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 72 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ },
/* 73 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(64);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(64);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(64);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(78),
	    listCacheDelete = __webpack_require__(79),
	    listCacheGet = __webpack_require__(82),
	    listCacheHas = __webpack_require__(83),
	    listCacheSet = __webpack_require__(84);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 78 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(80);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(81);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 81 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(80);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(80);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(80);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(65),
	    root = __webpack_require__(52);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(87);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(88);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 88 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(87);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(87);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(87);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(93);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(51),
	    arrayMap = __webpack_require__(94),
	    isArray = __webpack_require__(47),
	    isSymbol = __webpack_require__(49);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ },
/* 94 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(49);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ },
/* 96 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = prependChild;
	/**
	 * Prepend an HTMLElement into another HTMLElement
	 *
	 * @name 		prependChild
	 * @param 		{HTMLElement} 				elm  		The element to prepend
	 * @param 		{HTMLElement} 				refElm 		The element in which to prepend the new element
	 * @example  	js
	 * import prependChild from 'sugarcss/js/dom/prependChild'
	 * prependChild(myElementToInsert, theReferenceElement);
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function prependChild(elm, refElm) {
	  if (!refElm.firstChild) {
	    refElm.appendChild(elm);
	  } else {
	    refElm.insertBefore(elm, refElm.firstChild);
	  }
	}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*! flatpickr v2.3.0, @license MIT */
	function Flatpickr(element, config) {
		var self = this;

		function init() {
			if (element._flatpickr) destroy(element._flatpickr);

			element._flatpickr = self;

			self.element = element;
			self.instanceConfig = config || {};

			setupFormats();

			parseConfig();
			setupLocale();
			setupInputs();
			setupDates();

			setupHelperFunctions();

			self.isOpen = self.config.inline;
			self.changeMonth = changeMonth;
			self.clear = clear;
			self.close = close;
			self.destroy = destroy;
			self.formatDate = formatDate;
			self.jumpToDate = jumpToDate;
			self.open = open;
			self.redraw = redraw;
			self.set = set;
			self.setDate = setDate;
			self.toggle = toggle;

			self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable.length && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

			if (!self.isMobile) build();

			bind();

			if (!self.isMobile) {
				Object.defineProperty(self, "dateIsPicked", {
					set: function set(bool) {
						if (bool) return self.calendarContainer.classList.add("dateIsPicked");
						self.calendarContainer.classList.remove("dateIsPicked");
					}
				});
			}

			self.dateIsPicked = self.selectedDates.length > 0 || self.config.noCalendar;

			if (self.selectedDates.length) {
				if (self.config.enableTime) setHoursFromDate();
				updateValue();
			}

			if (self.config.weekNumbers) {
				self.calendarContainer.style.width = self.days.clientWidth + self.weekWrapper.clientWidth + "px";
			}

			triggerEvent("Ready");
		}

		function updateTime(e) {
			if (self.config.noCalendar && !self.selectedDates.length)
				// picking time only
				self.selectedDates = [self.now];

			timeWrapper(e);

			if (!self.selectedDates.length) return;

			if (!self.minDateHasTime || e.type !== "input" || e.target.value.length >= 2) {
				setHoursFromInputs();
				updateValue();
			} else {
				setTimeout(function () {
					setHoursFromInputs();
					updateValue();
				}, 1000);
			}
		}

		function setHoursFromInputs() {
			if (!self.config.enableTime) return;

			var hours = parseInt(self.hourElement.value, 10) || 0,
			    minutes = parseInt(self.minuteElement.value, 10) || 0,
			    seconds = self.config.enableSeconds ? parseInt(self.secondElement.value, 10) || 0 : 0;

			if (self.amPM) hours = hours % 12 + 12 * (self.amPM.textContent === "PM");

			if (self.minDateHasTime && compareDates(self.latestSelectedDateObj, self.config.minDate) === 0) {

				hours = Math.max(hours, self.config.minDate.getHours());
				if (hours === self.config.minDate.getHours()) minutes = Math.max(minutes, self.config.minDate.getMinutes());
			} else if (self.maxDateHasTime && compareDates(self.latestSelectedDateObj, self.config.maxDate) === 0) {
				hours = Math.min(hours, self.config.maxDate.getHours());
				if (hours === self.config.maxDate.getHours()) minutes = Math.min(minutes, self.config.maxDate.getMinutes());
			}

			setHours(hours, minutes, seconds);
		}

		function setHoursFromDate(dateObj) {
			var date = dateObj || self.latestSelectedDateObj;

			if (date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
		}

		function setHours(hours, minutes, seconds) {
			if (self.selectedDates.length) {
				self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
			}

			if (!self.config.enableTime || self.isMobile) return;

			self.hourElement.value = self.pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * (hours % 12 === 0) : hours);

			self.minuteElement.value = self.pad(minutes);

			if (!self.config.time_24hr && self.selectedDates.length) self.amPM.textContent = self.latestSelectedDateObj.getHours() >= 12 ? "PM" : "AM";

			if (self.config.enableSeconds) self.secondElement.value = self.pad(seconds);
		}

		function onYearInput(event) {
			if (event.target.value.length === 4) {
				self.currentYearElement.blur();
				handleYearChange(event.target.value);
				event.target.value = self.currentYear;
			}
		}

		function bind() {
			if (self.config.wrap) {
				["open", "close", "toggle", "clear"].forEach(function (el) {
					try {
						self.element.querySelector("[data-" + el + "]").addEventListener("click", self[el]);
					} catch (e) {
						//
					}
				});
			}

			if ("createEvent" in window.document) {
				self.changeEvent = window.document.createEvent("HTMLEvents");
				self.changeEvent.initEvent("change", false, true);
			}

			if (self.isMobile) return setupMobile();

			self.debouncedResize = debounce(onResize, 50);
			self.triggerChange = function () {
				return triggerEvent("Change");
			};
			self.debouncedChange = debounce(self.triggerChange, 1000);

			if (self.config.mode === "range" && self.days) self.days.addEventListener("mouseover", onMouseOver);

			window.document.addEventListener("keydown", onKeyDown);

			if (!self.config.inline && !self.config.static) window.addEventListener("resize", self.debouncedResize);

			if (window.ontouchstart) window.document.addEventListener("touchstart", documentClick);

			window.document.addEventListener("click", documentClick);
			window.document.addEventListener("blur", documentClick);

			if (self.config.clickOpens) (self.altInput || self.input).addEventListener("focus", open);

			if (!self.config.noCalendar) {
				self.prevMonthNav.addEventListener("click", function () {
					return changeMonth(-1);
				});
				self.nextMonthNav.addEventListener("click", function () {
					return changeMonth(1);
				});

				self.currentYearElement.addEventListener("wheel", function (e) {
					return debounce(yearScroll(e), 50);
				});
				self.currentYearElement.addEventListener("focus", function () {
					self.currentYearElement.select();
				});

				self.currentYearElement.addEventListener("input", onYearInput);
				self.currentYearElement.addEventListener("increment", onYearInput);

				self.days.addEventListener("click", selectDate);
			}

			if (self.config.enableTime) {
				self.timeContainer.addEventListener("transitionend", positionCalendar);
				self.timeContainer.addEventListener("wheel", function (e) {
					return debounce(updateTime(e), 5);
				});
				self.timeContainer.addEventListener("input", updateTime);
				self.timeContainer.addEventListener("increment", updateTime);

				self.timeContainer.addEventListener("wheel", self.debouncedChange);
				self.timeContainer.addEventListener("input", self.triggerChange);

				self.hourElement.addEventListener("focus", function () {
					self.hourElement.select();
				});
				self.minuteElement.addEventListener("focus", function () {
					self.minuteElement.select();
				});

				if (self.secondElement) {
					self.secondElement.addEventListener("focus", function () {
						self.secondElement.select();
					});
				}

				if (self.amPM) {
					self.amPM.addEventListener("click", function (e) {
						updateTime(e);
						self.triggerChange(e);
					});
				}
			}
		}

		function jumpToDate(jumpDate) {
			jumpDate = jumpDate ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);

			try {
				self.currentYear = jumpDate.getFullYear();
				self.currentMonth = jumpDate.getMonth();
			} catch (e) {
				console.error(e.stack);
				console.warn("Invalid date supplied: " + jumpDate);
			}

			self.redraw();
		}

		function incrementNumInput(e, delta) {
			var input = e.target.parentNode.childNodes[0];
			input.value = parseInt(input.value, 10) + delta * (input.step || 1);

			try {
				input.dispatchEvent(new Event("increment", { "bubbles": true }));
			} catch (e) {
				var ev = window.document.createEvent("CustomEvent");
				ev.initCustomEvent("increment", true, true, {});
				input.dispatchEvent(ev);
			}
		}

		function createNumberInput(inputClassName) {
			var wrapper = createElement("div", "numInputWrapper"),
			    numInput = createElement("input", "numInput " + inputClassName),
			    arrowUp = createElement("span", "arrowUp"),
			    arrowDown = createElement("span", "arrowDown");

			numInput.type = "text";
			wrapper.appendChild(numInput);
			wrapper.appendChild(arrowUp);
			wrapper.appendChild(arrowDown);

			arrowUp.addEventListener("click", function (e) {
				return incrementNumInput(e, 1);
			});
			arrowDown.addEventListener("click", function (e) {
				return incrementNumInput(e, -1);
			});
			return wrapper;
		}

		function build() {
			var fragment = window.document.createDocumentFragment();
			self.calendarContainer = createElement("div", "flatpickr-calendar");
			self.numInputType = navigator.userAgent.indexOf("MSIE 9.0") > 0 ? "text" : "number";

			if (!self.config.noCalendar) {
				fragment.appendChild(buildMonthNav());
				self.innerContainer = createElement("div", "flatpickr-innerContainer");

				if (self.config.weekNumbers) self.innerContainer.appendChild(buildWeeks());

				self.rContainer = createElement("div", "flatpickr-rContainer");
				self.rContainer.appendChild(buildWeekdays());
				self.rContainer.appendChild(buildDays());
				self.innerContainer.appendChild(self.rContainer);
				fragment.appendChild(self.innerContainer);
			}

			if (self.config.enableTime) fragment.appendChild(buildTime());

			if (self.config.mode === "range") self.calendarContainer.classList.add("rangeMode");

			self.calendarContainer.appendChild(fragment);

			if (self.config.inline || self.config.static) {
				self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
				positionCalendar();

				if (self.config.appendTo && self.config.appendTo.nodeType) self.config.appendTo.appendChild(self.calendarContainer);else {
					self.element.parentNode.insertBefore(self.calendarContainer, (self.altInput || self.input).nextSibling);
				}
			} else window.document.body.appendChild(self.calendarContainer);
		}

		function createDay(className, date, dayNumber) {
			var dateIsEnabled = isEnabled(date, true),
			    dayElement = createElement("span", "flatpickr-day " + className, date.getDate());

			dayElement.dateObj = date;

			if (compareDates(date, self.now) === 0) dayElement.classList.add("today");

			if (dateIsEnabled) {
				dayElement.tabIndex = 0;

				if (isDateSelected(date)) {
					dayElement.classList.add("selected");

					if (self.config.mode === "range") {
						dayElement.classList.add(compareDates(date, self.selectedDates[0]) === 0 ? "startRange" : "endRange");
					} else self.selectedDateElem = dayElement;
				}
			} else {
				dayElement.classList.add("disabled");
				if (self.selectedDates[0] && date > self.minRangeDate && date < self.selectedDates[0]) self.minRangeDate = date;else if (self.selectedDates[0] && date < self.maxRangeDate && date > self.selectedDates[0]) self.maxRangeDate = date;
			}

			if (self.config.mode === "range") {
				if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");

				if (self.selectedDates.length === 1 && (date < self.minRangeDate || date > self.maxRangeDate)) dayElement.classList.add("notAllowed");
			}

			if (self.config.weekNumbers && className !== "prevMonthDay" && dayNumber % 7 === 1) {
				self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='disabled flatpickr-day'>" + self.config.getWeek(date) + "</span>");
			}

			triggerEvent("DayCreate", dayElement);

			return dayElement;
		}

		function buildDays() {
			if (!self.days) {
				self.days = createElement("div", "flatpickr-days");
				self.days.tabIndex = -1;
			}

			self.firstOfMonth = (new Date(self.currentYear, self.currentMonth, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;

			self.prevMonthDays = self.utils.getDaysinMonth((self.currentMonth - 1 + 12) % 12);

			var daysInMonth = self.utils.getDaysinMonth(),
			    days = window.document.createDocumentFragment();

			var dayNumber = self.prevMonthDays + 1 - self.firstOfMonth;

			if (self.config.weekNumbers && self.weekNumbers.firstChild) self.weekNumbers.textContent = "";

			if (self.config.mode === "range") {
				// const dateLimits = self.config.enable.length || self.config.disable.length || self.config.mixDate || self.config.maxDate;
				self.minRangeDate = new Date(self.currentYear, self.currentMonth - 1, dayNumber);
				self.maxRangeDate = new Date(self.currentYear, self.currentMonth + 1, (42 - self.firstOfMonth) % daysInMonth);
			}

			if (self.days.firstChild) self.days.textContent = "";

			// prepend days from the ending of previous month
			for (var i = 0; dayNumber <= self.prevMonthDays; i++, dayNumber++) {
				days.appendChild(createDay("prevMonthDay", new Date(self.currentYear, self.currentMonth - 1, dayNumber), dayNumber));
			}

			// Start at 1 since there is no 0th day
			for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {
				days.appendChild(createDay("", new Date(self.currentYear, self.currentMonth, dayNumber), dayNumber));
			}

			// append days from the next month
			for (var dayNum = daysInMonth + 1; dayNum <= 42 - self.firstOfMonth; dayNum++) {
				days.appendChild(createDay("nextMonthDay", new Date(self.currentYear, self.currentMonth + 1, dayNum % daysInMonth), dayNum));
			}

			self.days.appendChild(days);
			return self.days;
		}

		function buildMonthNav() {
			var monthNavFragment = window.document.createDocumentFragment();
			self.monthNav = createElement("div", "flatpickr-month");

			self.prevMonthNav = createElement("span", "flatpickr-prev-month");
			self.prevMonthNav.innerHTML = self.config.prevArrow;

			self.currentMonthElement = createElement("span", "cur-month");

			var yearInput = createNumberInput("cur-year");
			self.currentYearElement = yearInput.childNodes[0];
			self.currentYearElement.title = self.l10n.scrollTitle;

			if (self.config.minDate) self.currentYearElement.min = self.config.minDate.getFullYear();

			if (self.config.maxDate) {
				self.currentYearElement.max = self.config.maxDate.getFullYear();

				self.currentYearElement.disabled = self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
			}

			self.nextMonthNav = createElement("span", "flatpickr-next-month");
			self.nextMonthNav.innerHTML = self.config.nextArrow;

			self.navigationCurrentMonth = createElement("span", "flatpickr-current-month");
			self.navigationCurrentMonth.appendChild(self.currentMonthElement);
			self.navigationCurrentMonth.appendChild(yearInput);

			monthNavFragment.appendChild(self.prevMonthNav);
			monthNavFragment.appendChild(self.navigationCurrentMonth);
			monthNavFragment.appendChild(self.nextMonthNav);
			self.monthNav.appendChild(monthNavFragment);

			updateNavigationCurrentMonth();

			return self.monthNav;
		}

		function buildTime() {
			self.calendarContainer.classList.add("hasTime");
			if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
			self.timeContainer = createElement("div", "flatpickr-time");
			self.timeContainer.tabIndex = -1;
			var separator = createElement("span", "flatpickr-time-separator", ":");

			var hourInput = createNumberInput("flatpickr-hour");
			self.hourElement = hourInput.childNodes[0];

			var minuteInput = createNumberInput("flatpickr-minute");
			self.minuteElement = minuteInput.childNodes[0];

			self.hourElement.tabIndex = self.minuteElement.tabIndex = 0;
			self.hourElement.pattern = self.minuteElement.pattern = "\d*";

			self.hourElement.value = self.pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.defaultHour);

			self.minuteElement.value = self.pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : self.config.defaultMinute);

			self.hourElement.step = self.config.hourIncrement;
			self.minuteElement.step = self.config.minuteIncrement;

			self.hourElement.min = self.config.time_24hr ? 0 : 1;
			self.hourElement.max = self.config.time_24hr ? 23 : 12;

			self.minuteElement.min = 0;
			self.minuteElement.max = 59;

			self.hourElement.title = self.minuteElement.title = self.l10n.scrollTitle;

			self.timeContainer.appendChild(hourInput);
			self.timeContainer.appendChild(separator);
			self.timeContainer.appendChild(minuteInput);

			if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

			if (self.config.enableSeconds) {
				self.timeContainer.classList.add("hasSeconds");

				var secondInput = createNumberInput("flatpickr-second");
				self.secondElement = secondInput.childNodes[0];

				self.secondElement.pattern = self.hourElement.pattern;
				self.secondElement.value = self.latestSelectedDateObj ? self.pad(self.latestSelectedDateObj.getSeconds()) : "00";

				self.secondElement.step = self.minuteElement.step;
				self.secondElement.min = self.minuteElement.min;
				self.secondElement.max = self.minuteElement.max;

				self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
				self.timeContainer.appendChild(secondInput);
			}

			if (!self.config.time_24hr) {
				// add self.amPM if appropriate
				self.amPM = createElement("span", "flatpickr-am-pm", ["AM", "PM"][self.hourElement.value > 11 | 0]);
				self.amPM.title = self.l10n.toggleTitle;
				self.amPM.tabIndex = 0;
				self.timeContainer.appendChild(self.amPM);
			}

			return self.timeContainer;
		}

		function buildWeekdays() {
			if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays");

			var firstDayOfWeek = self.l10n.firstDayOfWeek;
			var weekdays = self.l10n.weekdays.shorthand.slice();

			if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
				weekdays = [].concat(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
			}

			self.weekdayContainer.innerHTML = "\n\t\t<span class=flatpickr-weekday>\n\t\t\t" + weekdays.join("</span><span class=flatpickr-weekday>") + "\n\t\t</span>\n\t\t";

			return self.weekdayContainer;
		}

		/* istanbul ignore next */
		function buildWeeks() {
			self.calendarContainer.classList.add("hasWeeks");
			self.weekWrapper = createElement("div", "flatpickr-weekwrapper");
			self.weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
			self.weekNumbers = createElement("div", "flatpickr-weeks");
			self.weekWrapper.appendChild(self.weekNumbers);

			return self.weekWrapper;
		}

		function changeMonth(value, is_offset) {
			self.currentMonth = typeof is_offset === "undefined" || is_offset ? self.currentMonth + value : value;

			handleYearChange();
			updateNavigationCurrentMonth();
			buildDays();

			if (!self.config.noCalendar) self.days.focus();

			triggerEvent("MonthChange");
		}

		function clear(triggerChangeEvent) {
			self.input.value = "";

			if (self.altInput) self.altInput.value = "";

			if (self.mobileInput) self.mobileInput.value = "";

			self.selectedDates = [];
			self.latestSelectedDateObj = null;
			self.dateIsPicked = false;

			self.redraw();

			if (triggerChangeEvent !== false)
				// triggerChangeEvent is true (default) or an Event
				triggerEvent("Change");
		}

		function close() {
			self.isOpen = false;

			if (!self.isMobile) {
				self.calendarContainer.classList.remove("open");
				(self.altInput || self.input).classList.remove("active");
			}

			triggerEvent("Close");
		}

		function destroy(instance) {
			instance = instance || self;
			instance.clear(false);

			window.document.removeEventListener("keydown", onKeyDown);
			window.removeEventListener("resize", instance.debouncedResize);

			window.document.removeEventListener("click", documentClick);
			window.document.removeEventListener("touchstart", documentClick);
			window.document.removeEventListener("blur", documentClick);

			if (instance.timeContainer) instance.timeContainer.removeEventListener("transitionend", positionCalendar);

			if (instance.mobileInput && instance.mobileInput.parentNode) instance.mobileInput.parentNode.removeChild(instance.mobileInput);else if (instance.calendarContainer && instance.calendarContainer.parentNode) instance.calendarContainer.parentNode.removeChild(instance.calendarContainer);

			if (instance.altInput) {
				instance.input.type = "text";
				if (instance.altInput.parentNode) instance.altInput.parentNode.removeChild(instance.altInput);
			}

			instance.input.classList.remove("flatpickr-input");
			instance.input.removeEventListener("focus", open);
			instance.input.removeAttribute("readonly");

			delete instance.input._flatpickr;
		}

		function isCalendarElem(elem) {
			var e = elem;
			while (e) {
				if (/flatpickr-day|flatpickr-calendar/.test(e.className)) return true;
				e = e.parentNode;
			}

			return false;
		}

		function documentClick(e) {
			var isInput = self.element.contains(e.target) || e.target === self.input || e.target === self.altInput || ~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput);

			if (self.isOpen && !self.config.inline && !isCalendarElem(e.target) && !isInput) {
				e.preventDefault();
				self.close();

				if (self.config.mode === "range" && self.selectedDates.length === 1) {
					self.clear();
					self.redraw();
				}
			}
		}

		function formatDate(frmt, dateObj) {
			if (self.config.formatDate) return self.config.formatDate(frmt, dateObj);

			var chars = frmt.split("");
			return chars.map(function (c, i) {
				return self.formats[c] && chars[i - 1] !== "\\" ? self.formats[c](dateObj) : c !== "\\" ? c : "";
			}).join("");
		}

		function handleYearChange(newYear) {
			if (self.currentMonth < 0 || self.currentMonth > 11) {
				self.currentYear += self.currentMonth % 11;
				self.currentMonth = (self.currentMonth + 12) % 12;

				triggerEvent("YearChange");
			} else if (newYear && (!self.currentYearElement.min || newYear >= self.currentYearElement.min) && (!self.currentYearElement.max || newYear <= self.currentYearElement.max)) {
				self.currentYear = parseInt(newYear, 10) || self.currentYear;

				if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
					self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
				} else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
					self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
				}

				self.redraw();
				triggerEvent("YearChange");
			}
		}

		function isEnabled(date, timeless) {
			var ltmin = compareDates(date, self.config.minDate, typeof timeless !== "undefined" ? timeless : !self.minDateHasTime) < 0;
			var gtmax = compareDates(date, self.config.maxDate, typeof timeless !== "undefined" ? timeless : !self.maxDateHasTime) > 0;

			if (ltmin || gtmax) return false;

			if (!self.config.enable.length && !self.config.disable.length) return true;

			var dateToCheck = self.parseDate(date, true); // timeless

			var bool = self.config.enable.length > 0,
			    array = bool ? self.config.enable : self.config.disable;

			for (var i = 0, d; i < array.length; i++) {
				d = array[i];

				if (d instanceof Function && d(dateToCheck)) // disabled by function
					return bool;else if (d instanceof Date && d.getTime() === dateToCheck.getTime())
					// disabled by date string
					return bool;else if ( // disabled by range
				(typeof d === "undefined" ? "undefined" : _typeof(d)) === "object" && d.from && d.to && dateToCheck >= d.from && dateToCheck <= d.to) return bool;
			}

			return !bool;
		}

		function onKeyDown(e) {
			if (self.isOpen) {
				switch (e.which) {
					case 13:
						if (self.timeContainer && self.timeContainer.contains(e.target)) updateValue();else selectDate(e);

						break;

					case 27:
						// escape
						self.clear();
						self.redraw();
						self.close();
						break;

					case 37:
						if (e.target !== self.input & e.target !== self.altInput) changeMonth(-1);
						break;

					case 38:
						e.preventDefault();

						if (self.timeContainer && self.timeContainer.contains(e.target)) updateTime(e);else {
							self.currentYear++;
							self.redraw();
						}

						break;

					case 39:
						if (e.target !== self.input & e.target !== self.altInput) changeMonth(1);
						break;

					case 40:
						e.preventDefault();
						if (self.timeContainer && self.timeContainer.contains(e.target)) updateTime(e);else {
							self.currentYear--;
							self.redraw();
						}

						break;

					default:
						break;
				}
			}
		}

		function onMouseOver(e) {
			if (self.selectedDates.length !== 1 || !e.target.classList.contains("flatpickr-day")) return;

			var hoverDate = e.target.dateObj,
			    initialDate = self.parseDate(self.selectedDates[0], true),
			    rangeStartDate = Math.min(hoverDate.getTime(), self.selectedDates[0].getTime()),
			    rangeEndDate = Math.max(hoverDate.getTime(), self.selectedDates[0].getTime()),
			    containsDisabled = false;

			for (var t = rangeStartDate; t < rangeEndDate; t += self.utils.duration.DAY) {
				if (!isEnabled(new Date(t))) {
					containsDisabled = true;
					break;
				}
			}

			for (var timestamp = self.days.childNodes[0].dateObj.getTime(), i = 0; i < 42; i++, timestamp += self.utils.duration.DAY) {
				var outOfRange = timestamp < self.minRangeDate.getTime() || timestamp > self.maxRangeDate.getTime();

				if (outOfRange) {
					self.days.childNodes[i].classList.add("notAllowed");
					self.days.childNodes[i].classList.remove("inRange", "startRange", "endRange");
					continue;
				} else if (containsDisabled && !outOfRange) continue;

				self.days.childNodes[i].classList.remove("startRange", "inRange", "endRange", "notAllowed");

				var minRangeDate = Math.max(self.minRangeDate.getTime(), rangeStartDate),
				    maxRangeDate = Math.min(self.maxRangeDate.getTime(), rangeEndDate);

				e.target.classList.add(hoverDate < self.selectedDates[0] ? "startRange" : "endRange");

				if (initialDate > hoverDate && timestamp === initialDate.getTime()) self.days.childNodes[i].classList.add("endRange");else if (initialDate < hoverDate && timestamp === initialDate.getTime()) self.days.childNodes[i].classList.add("startRange");else if (timestamp > minRangeDate && timestamp < maxRangeDate) self.days.childNodes[i].classList.add("inRange");
			}
		}

		function onResize() {
			if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
		}

		function open(e) {
			if (self.isMobile) {
				if (e) {
					e.preventDefault();
					e.target.blur();
				}

				setTimeout(function () {
					self.mobileInput.click();
				}, 0);

				triggerEvent("Open");
				return;
			} else if (self.isOpen || (self.altInput || self.input).disabled || self.config.inline) return;

			self.calendarContainer.classList.add("open");

			if (!self.config.static && !self.config.inline && !self.calendarContainer.style.top) positionCalendar();

			self.isOpen = true;

			if (!self.config.allowInput) {
				(self.altInput || self.input).blur();
				(self.config.noCalendar ? self.timeContainer : self.selectedDateElem ? self.selectedDateElem : self.days).focus();
			}

			(self.altInput || self.input).classList.add("active");
			triggerEvent("Open");
		}

		function minMaxDateSetter(type) {
			return function (date) {
				var dateObj = self.config["_" + type + "Date"] = self.parseDate(date);
				var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];

				if (self.selectedDates) {
					self.selectedDates = self.selectedDates.filter(isEnabled);
					updateValue();
				}

				if (self.days) redraw();

				if (!self.currentYearElement) return;

				if (date && dateObj instanceof Date) {
					self[type + "DateHasTime"] = dateObj.getHours() || dateObj.getMinutes() || dateObj.getSeconds();

					self.currentYearElement[type] = dateObj.getFullYear();
				} else self.currentYearElement.removeAttribute(type);

				self.currentYearElement.disabled = inverseDateObj && dateObj && inverseDateObj.getFullYear() === dateObj.getFullYear();
			};
		}

		function parseConfig() {
			var boolOpts = ["utc", "wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];
			self.config = Object.create(Flatpickr.defaultConfig);

			Object.defineProperty(self.config, "minDate", {
				get: function get() {
					return this._minDate;
				},
				set: minMaxDateSetter("min")
			});

			Object.defineProperty(self.config, "maxDate", {
				get: function get() {
					return this._maxDate;
				},
				set: minMaxDateSetter("max")
			});

			var userConfig = _extends({}, self.instanceConfig, JSON.parse(JSON.stringify(self.element.dataset || {})));

			_extends(self.config, userConfig);

			for (var i = 0; i < boolOpts.length; i++) {
				self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
			}if (!userConfig.dateFormat && userConfig.enableTime) {
				self.config.dateFormat = self.config.noCalendar ? "H:i" + (self.config.enableSeconds ? ":S" : "") : Flatpickr.defaultConfig.dateFormat + " H:i" + (self.config.enableSeconds ? ":S" : "");
			}

			if (userConfig.altInput && userConfig.enableTime && !userConfig.altFormat) {
				self.config.altFormat = self.config.noCalendar ? "h:i" + (self.config.enableSeconds ? ":S K" : " K") : Flatpickr.defaultConfig.altFormat + (" h:i" + (self.config.enableSeconds ? ":S" : "") + " K");
			}
		}

		function setupLocale() {
			if (_typeof(self.config.locale) !== "object" && typeof Flatpickr.l10ns[self.config.locale] === "undefined") console.warn("flatpickr: invalid locale " + self.config.locale);

			self.l10n = _extends(Object.create(Flatpickr.l10ns.default), _typeof(self.config.locale) === "object" ? self.config.locale : self.config.locale !== "default" ? Flatpickr.l10ns[self.config.locale] || {} : {});
		}

		function positionCalendar(e) {
			if (e && e.target !== self.timeContainer) return;

			var calendarHeight = self.calendarContainer.offsetHeight,
			    input = self.altInput || self.input,
			    inputBounds = input.getBoundingClientRect(),
			    distanceFromBottom = window.innerHeight - inputBounds.bottom + input.offsetHeight;

			var top = void 0;

			if (distanceFromBottom < calendarHeight + 60) {
				top = window.pageYOffset - calendarHeight + inputBounds.top - 2;
				self.calendarContainer.classList.remove("arrowTop");
				self.calendarContainer.classList.add("arrowBottom");
			} else {
				top = window.pageYOffset + input.offsetHeight + inputBounds.top + 2;
				self.calendarContainer.classList.remove("arrowBottom");
				self.calendarContainer.classList.add("arrowTop");
			}

			if (!self.config.static && !self.config.inline) {
				self.calendarContainer.style.top = top + "px";

				var left = window.pageXOffset + inputBounds.left;
				var right = window.document.body.offsetWidth - inputBounds.right;

				if (left + self.calendarContainer.offsetWidth <= window.document.body.offsetWidth) {
					self.calendarContainer.style.left = left + "px";
					self.calendarContainer.style.right = "auto";

					self.calendarContainer.classList.remove("rightMost");
				} else {
					self.calendarContainer.style.left = "auto";
					self.calendarContainer.style.right = right + "px";

					self.calendarContainer.classList.add("rightMost");
				}
			}
		}

		function redraw() {
			if (self.config.noCalendar || self.isMobile) return;

			buildWeekdays();
			updateNavigationCurrentMonth();
			buildDays();
		}

		function selectDate(e) {
			e.preventDefault();
			if (self.config.allowInput && e.which === 13 && e.target === (self.altInput || self.input)) return self.setDate((self.altInput || self.input).value), e.target.blur();

			if (!e.target.classList.contains("flatpickr-day") || e.target.classList.contains("disabled") || e.target.classList.contains("notAllowed")) return;

			var selectedDate = self.latestSelectedDateObj = e.target.dateObj;
			self.selectedDateElem = e.target;

			if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
				var selectedIndex = isDateSelected(selectedDate);
				if (selectedIndex) self.selectedDates.splice(selectedIndex, 1);else self.selectedDates.push(selectedDate);
			} else if (self.config.mode === "range") {
				if (self.selectedDates.length === 2) self.clear();

				self.selectedDates.push(selectedDate);
				self.selectedDates.sort(function (a, b) {
					return a.getTime() - b.getTime();
				});
			}

			setHoursFromInputs();

			if (selectedDate.getMonth() !== self.currentMonth && self.config.mode !== "range") {
				self.currentYear = selectedDate.getFullYear();
				self.currentMonth = selectedDate.getMonth();
				updateNavigationCurrentMonth();
			}

			buildDays();

			if (self.minDateHasTime && self.config.enableTime && compareDates(selectedDate, self.config.minDate) === 0) setHoursFromDate(self.config.minDate);

			updateValue();

			setTimeout(function () {
				return self.dateIsPicked = true;
			}, 50);

			if (self.config.mode === "range" && self.selectedDates.length === 1) onMouseOver(e);

			if (self.config.mode === "single" && !self.config.enableTime) self.close();

			triggerEvent("Change");
		}

		function set(option, value) {
			self.config[option] = value;
			self.redraw();
			jumpToDate();
		}

		function setDate(date, triggerChange) {
			if (!date) return self.clear();

			self.selectedDates = (Array.isArray(date) ? date.map(self.parseDate) : [self.parseDate(date)]).filter(function (d) {
				return d instanceof Date && isEnabled(d);
			});

			if (self.selectedDates.length > 0) {
				self.dateIsPicked = true;
				self.latestSelectedDateObj = self.selectedDates[0];
			} else self.latestSelectedDateObj = null;

			self.redraw();
			jumpToDate();

			setHoursFromDate();
			updateValue();

			if (triggerChange === true) triggerEvent("Change");
		}

		function setupDates() {
			function parseDateRules(arr) {
				for (var i = arr.length; i--;) {
					if (typeof arr[i] === "string" || +arr[i]) arr[i] = self.parseDate(arr[i], true);else if (arr[i] && arr[i].from && arr[i].to) {
						arr[i].from = self.parseDate(arr[i].from);
						arr[i].to = self.parseDate(arr[i].to);
					}
				}

				return arr.filter(function (x) {
					return x;
				}); // remove falsy values
			}

			self.selectedDates = [];
			self.now = new Date();
			var inputDate = self.config.defaultDate || self.input.value;

			if (Array.isArray(inputDate)) self.selectedDates = inputDate.map(self.parseDate);else if (inputDate) {
				switch (self.config.mode) {
					case "single":
						self.selectedDates = [self.parseDate(inputDate)];
						break;

					case "multiple":
						self.selectedDates = inputDate.split("; ").map(self.parseDate);
						break;

					case "range":
						self.selectedDates = inputDate.split(self.l10n.rangeSeparator).map(self.parseDate);
						break;

					default:
						break;
				}
			}

			if (self.config.disable.length) self.config.disable = parseDateRules(self.config.disable);

			if (self.config.enable.length) self.config.enable = parseDateRules(self.config.enable);

			self.selectedDates = self.selectedDates.filter(function (d) {
				return d instanceof Date && d.getTime() && isEnabled(d, false);
			});

			self.selectedDates.sort(function (a, b) {
				return a.getTime() - b.getTime();
			});

			var initialDate = self.selectedDates.length ? self.selectedDates[0] : self.config.minDate > self.now ? self.config.minDate : self.now;

			self.currentYear = initialDate.getFullYear();
			self.currentMonth = initialDate.getMonth();

			if (self.selectedDates.length) self.latestSelectedDateObj = self.selectedDates[0];

			self.minDateHasTime = self.config.minDate && (self.config.minDate.getHours() || self.config.minDate.getMinutes() || self.config.minDate.getSeconds());

			self.maxDateHasTime = self.config.maxDate && (self.config.maxDate.getHours() || self.config.maxDate.getMinutes() || self.config.maxDate.getSeconds());

			Object.defineProperty(self, "latestSelectedDateObj", {
				get: function get() {
					return self._selectedDateObj || self.selectedDates[self.selectedDates.length - 1] || null;
				},
				set: function set(date) {
					self._selectedDateObj = date;
				}
			});
		}

		function setupHelperFunctions() {
			self.utils = {
				duration: {
					DAY: 86400000
				},
				getDaysinMonth: function getDaysinMonth(month, yr) {
					month = typeof month === "undefined" ? self.currentMonth : month;

					yr = typeof yr === "undefined" ? self.currentYear : yr;

					if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;

					return self.l10n.daysInMonth[month];
				},
				monthToStr: function monthToStr(monthNumber, shorthand) {
					shorthand = typeof shorthand === "undefined" ? self.config.shorthandCurrentMonth : shorthand;

					return self.l10n.months[(shorthand ? "short" : "long") + "hand"][monthNumber];
				}
			};
		}

		/* istanbul ignore next */
		function setupFormats() {
			self.formats = {
				// weekday name, short, e.g. Thu
				D: function D(date) {
					return self.l10n.weekdays.shorthand[self.formats.w(date)];
				},

				// full month name e.g. January
				F: function F(date) {
					return self.utils.monthToStr(self.formats.n(date) - 1, false);
				},

				// hours with leading zero e.g. 03
				H: function H(date) {
					return Flatpickr.prototype.pad(date.getHours());
				},

				// day (1-30) with ordinal suffix e.g. 1st, 2nd
				J: function J(date) {
					return date.getDate() + self.l10n.ordinal(date.getDate());
				},

				// AM/PM
				K: function K(date) {
					return date.getHours() > 11 ? "PM" : "AM";
				},

				// shorthand month e.g. Jan, Sep, Oct, etc
				M: function M(date) {
					return self.utils.monthToStr(date.getMonth(), true);
				},

				// seconds 00-59
				S: function S(date) {
					return Flatpickr.prototype.pad(date.getSeconds());
				},

				// unix timestamp
				U: function U(date) {
					return date.getTime() / 1000;
				},

				// full year e.g. 2016
				Y: function Y(date) {
					return date.getFullYear();
				},

				// day in month, padded (01-30)
				d: function d(date) {
					return Flatpickr.prototype.pad(self.formats.j(date));
				},

				// hour from 1-12 (am/pm)
				h: function h(date) {
					return date.getHours() % 12 ? date.getHours() % 12 : 12;
				},

				// minutes, padded with leading zero e.g. 09
				i: function i(date) {
					return Flatpickr.prototype.pad(date.getMinutes());
				},

				// day in month (1-30)
				j: function j(date) {
					return date.getDate();
				},

				// weekday name, full, e.g. Thursday
				l: function l(date) {
					return self.l10n.weekdays.longhand[self.formats.w(date)];
				},

				// padded month number (01-12)
				m: function m(date) {
					return Flatpickr.prototype.pad(self.formats.n(date));
				},

				// the month number (1-12)
				n: function n(date) {
					return date.getMonth() + 1;
				},

				// seconds 0-59
				s: function s(date) {
					return date.getSeconds();
				},

				// number of the day of the week
				w: function w(date) {
					return date.getDay();
				},

				// last two digits of year e.g. 16 for 2016
				y: function y(date) {
					return String(self.formats.Y(date)).substring(2);
				}
			};
		}

		function setupInputs() {
			self.input = self.config.wrap ? self.element.querySelector("[data-input]") : self.element;

			if (!self.input) return console.warn("Error: invalid input element specified", self.input);

			self.input.type = "text";
			self.input.classList.add("flatpickr-input");

			if (self.config.altInput) {
				// replicate self.element
				self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
				self.altInput.placeholder = self.input.placeholder;
				self.altInput.type = "text";

				self.input.type = "hidden";
				if (self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
			}

			if (!self.config.allowInput) (self.altInput || self.input).setAttribute("readonly", "readonly");
		}

		function setupMobile() {
			var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";

			self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
			self.mobileInput.step = "any";
			self.mobileInput.tabIndex = 1;
			self.mobileInput.type = inputType;
			self.mobileInput.disabled = self.input.disabled;

			self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

			if (self.selectedDates.length) {
				self.mobileInput.defaultValue = self.mobileInput.value = formatDate(self.mobileFormatStr, self.selectedDates[0]);
			}

			if (self.config.minDate) self.mobileInput.min = formatDate("Y-m-d", self.config.minDate);

			if (self.config.maxDate) self.mobileInput.max = formatDate("Y-m-d", self.config.maxDate);

			self.input.type = "hidden";
			if (self.config.altInput) self.altInput.type = "hidden";

			try {
				self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
			} catch (e) {
				//
			}

			self.mobileInput.addEventListener("change", function (e) {
				self.latestSelectedDateObj = self.parseDate(e.target.value);
				self.setDate(self.latestSelectedDateObj);
				triggerEvent("Change");
				triggerEvent("Close");
			});
		}

		function toggle() {
			if (self.isOpen) self.close();else self.open();
		}

		function triggerEvent(event, data) {
			if (self.config["on" + event]) {
				var hooks = Array.isArray(self.config["on" + event]) ? self.config["on" + event] : [self.config["on" + event]];

				for (var i = 0; i < hooks.length; i++) {
					hooks[i](self.selectedDates, self.input.value, self, data);
				}
			}

			if (event === "Change") {
				try {
					self.input.dispatchEvent(new Event("change", { "bubbles": true }));

					// many front-end frameworks bind to the input event
					self.input.dispatchEvent(new Event("input", { "bubbles": true }));
				} catch (e) {
					if ("createEvent" in window.document) return self.input.dispatchEvent(self.changeEvent);

					self.input.fireEvent("onchange");
				}
			}
		}

		function isDateSelected(date) {
			for (var i = 0; i < self.selectedDates.length; i++) {
				if (compareDates(self.selectedDates[i], date) === 0) return "" + i;
			}

			return false;
		}

		function isDateInRange(date) {
			if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
			return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
		}

		function updateNavigationCurrentMonth() {
			if (self.config.noCalendar || self.isMobile || !self.monthNav) return;

			self.currentMonthElement.textContent = self.utils.monthToStr(self.currentMonth) + " ";
			self.currentYearElement.value = self.currentYear;

			if (self.config.minDate) {
				var hidePrevMonthArrow = self.currentYear === self.config.minDate.getFullYear() ? (self.currentMonth + 11) % 12 < self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear();

				self.prevMonthNav.style.display = hidePrevMonthArrow ? "none" : "block";
			} else self.prevMonthNav.style.display = "block";

			if (self.config.maxDate) {
				var hideNextMonthArrow = self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear();

				self.nextMonthNav.style.display = hideNextMonthArrow ? "none" : "block";
			} else self.nextMonthNav.style.display = "block";
		}

		function updateValue() {
			if (!self.selectedDates.length) return self.clear();

			if (self.isMobile) {
				self.mobileInput.value = self.selectedDates.length ? formatDate(self.mobileFormatStr, self.latestSelectedDateObj) : "";
			}

			var joinChar = self.config.mode !== "range" ? "; " : self.l10n.rangeSeparator;

			self.input.value = self.selectedDates.map(function (dObj) {
				return formatDate(self.config.dateFormat, dObj);
			}).join(joinChar);

			if (self.config.altInput) {
				self.altInput.value = self.selectedDates.map(function (dObj) {
					return formatDate(self.config.altFormat, dObj);
				}).join(joinChar);
			}

			triggerEvent("ValueUpdate");
		}

		function yearScroll(e) {
			e.preventDefault();

			var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY)),
			    newYear = parseInt(e.target.value, 10) + delta;

			handleYearChange(newYear);
			e.target.value = self.currentYear;
		}

		function createElement(tag, className, content) {
			var e = window.document.createElement(tag);
			className = className || "";
			content = content || "";

			e.className = className;

			if (content) e.textContent = content;

			return e;
		}

		/* istanbul ignore next */
		function debounce(func, wait, immediate) {
			var timeout = void 0;
			return function () {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				var context = this;
				var later = function later() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};

				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (immediate && !timeout) func.apply(context, args);
			};
		}

		function compareDates(date1, date2, timeless) {
			if (!(date1 instanceof Date) || !(date2 instanceof Date)) return false;

			if (timeless !== false) {
				return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
			}

			return date1.getTime() - date2.getTime();
		}

		function timeWrapper(e) {
			e.preventDefault();
			if (e && ((e.target.value || e.target.textContent).length >= 2 || // typed two digits
			e.type !== "keydown" && e.type !== "input" // scroll event
			)) e.target.blur();

			if (self.amPM && e.target === self.amPM) return e.target.textContent = ["AM", "PM"][e.target.textContent === "AM" | 0];

			var min = Number(e.target.min),
			    max = Number(e.target.max),
			    step = Number(e.target.step),
			    curValue = parseInt(e.target.value, 10),
			    delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY));

			var newValue = Number(curValue);

			switch (e.type) {
				case "wheel":
					newValue = curValue + step * delta;
					break;

				case "keydown":
					newValue = curValue + step * (e.which === 38 ? 1 : -1);
					break;
			}

			if (e.type !== "input" || e.target.value.length === 2) {
				if (newValue < min) {
					newValue = max + newValue + (e.target !== self.hourElement) + (e.target === self.hourElement && !self.amPM);
				} else if (newValue > max) {
					newValue = e.target === self.hourElement ? newValue - max - !self.amPM : min;
				}

				if (self.amPM && e.target === self.hourElement && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) self.amPM.textContent = self.amPM.textContent === "PM" ? "AM" : "PM";

				e.target.value = self.pad(newValue);
			} else e.target.value = newValue;
		}

		init();
		return self;
	}

	/* istanbul ignore next */
	Flatpickr.defaultConfig = {

		mode: "single",

		/* if true, dates will be parsed, formatted, and displayed in UTC.
	 preloading date strings w/ timezones is recommended but not necessary */
		utc: false,

		// wrap: see https://chmln.github.io/flatpickr/#strap
		wrap: false,

		// enables week numbers
		weekNumbers: false,

		// allow manual datetime input
		allowInput: false,

		/*
	 	clicking on input opens the date(time)picker.
	 	disable if you wish to open the calendar manually with .open()
	 */
		clickOpens: true,

		// display time picker in 24 hour mode
		time_24hr: false,

		// enables the time picker functionality
		enableTime: false,

		// noCalendar: true will hide the calendar. use for a time picker along w/ enableTime
		noCalendar: false,

		// more date format chars at https://chmln.github.io/flatpickr/#dateformat
		dateFormat: "Y-m-d",

		// altInput - see https://chmln.github.io/flatpickr/#altinput
		altInput: false,

		// the created altInput element will have this class.
		altInputClass: "flatpickr-input form-control input",

		// same as dateFormat, but for altInput
		altFormat: "F j, Y", // defaults to e.g. June 10, 2016

		// defaultDate - either a datestring or a date object. used for datetimepicker"s initial value
		defaultDate: null,

		// the minimum date that user can pick (inclusive)
		minDate: null,

		// the maximum date that user can pick (inclusive)
		maxDate: null,

		// dateparser that transforms a given string to a date object
		parseDate: null,

		// dateformatter that transforms a given date object to a string, according to passed format
		formatDate: null,

		getWeek: function getWeek(givenDate) {
			var date = new Date(givenDate.getTime());
			date.setHours(0, 0, 0, 0);

			// Thursday in current week decides the year.
			date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
			// January 4 is always in week 1.
			var week1 = new Date(date.getFullYear(), 0, 4);
			// Adjust to Thursday in week 1 and count number of weeks from date to week1.
			return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
		},

		// see https://chmln.github.io/flatpickr/#disable
		enable: [],

		// see https://chmln.github.io/flatpickr/#disable
		disable: [],

		// display the short version of month names - e.g. Sep instead of September
		shorthandCurrentMonth: false,

		// displays calendar inline. see https://chmln.github.io/flatpickr/#inline-calendar
		inline: false,

		// position calendar inside wrapper and next to the input element
		// leave at false unless you know what you"re doing
		static: false,

		// DOM node to append the calendar to in *static* mode
		appendTo: null,

		// code for previous/next icons. this is where you put your custom icon code e.g. fontawesome
		prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
		nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",

		// enables seconds in the time picker
		enableSeconds: false,

		// step size used when scrolling/incrementing the hour element
		hourIncrement: 1,

		// step size used when scrolling/incrementing the minute element
		minuteIncrement: 5,

		// initial value in the hour element
		defaultHour: 12,

		// initial value in the minute element
		defaultMinute: 0,

		// disable native mobile datetime input support
		disableMobile: false,

		// default locale
		locale: "default",

		// onChange callback when user selects a date or time
		onChange: null, // function (dateObj, dateStr) {}

		// called every time calendar is opened
		onOpen: null, // function (dateObj, dateStr) {}

		// called every time calendar is closed
		onClose: null, // function (dateObj, dateStr) {}

		// called after calendar is ready
		onReady: null, // function (dateObj, dateStr) {}

		onValueUpdate: null,

		onDayCreate: null
	};

	/* istanbul ignore next */
	Flatpickr.l10ns = {
		en: {
			weekdays: {
				shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
			},
			months: {
				shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
			},
			daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
			firstDayOfWeek: 0,
			ordinal: function ordinal(nth) {
				var s = nth % 100;
				if (s > 3 && s < 21) return "th";
				switch (s % 10) {
					case 1:
						return "st";
					case 2:
						return "nd";
					case 3:
						return "rd";
					default:
						return "th";
				}
			},
			rangeSeparator: " to ",
			weekAbbreviation: "Wk",
			scrollTitle: "Scroll to increment",
			toggleTitle: "Click to toggle"
		}
	};

	Flatpickr.l10ns.default = Object.create(Flatpickr.l10ns.en);
	Flatpickr.localize = function (l10n) {
		return _extends(Flatpickr.l10ns.default, l10n || {});
	};
	Flatpickr.setDefaults = function (config) {
		return _extends(Flatpickr.defaultConfig, config || {});
	};

	Flatpickr.prototype = {
		pad: function pad(number) {
			return ("0" + number).slice(-2);
		},
		parseDate: function parseDate(date, timeless) {
			if (!date) return null;

			var dateTimeRegex = /(\d+)/g,
			    timeRegex = /^(\d{1,2})[:\s](\d\d)?[:\s]?(\d\d)?\s?(a|p)?/i,
			    timestamp = /^(\d+)$/g,
			    date_orig = date;

			if (date.toFixed || timestamp.test(date)) // timestamp
				date = new Date(date);else if (typeof date === "string") {
				date = date.trim();

				if (date === "today") {
					date = new Date();
					timeless = true;
				} else if (this.config && this.config.parseDate) date = this.config.parseDate(date);else if (timeRegex.test(date)) {
					// time picker
					var m = date.match(timeRegex),
					    hours = !m[4] ? m[1] // military time, no conversion needed
					: m[1] % 12 + (m[4].toLowerCase() === "p" ? 12 : 0); // am/pm

					date = new Date();
					date.setHours(hours, m[2] || 0, m[3] || 0);
				} else if (/Z$/.test(date) || /GMT$/.test(date)) // datestrings w/ timezone
					date = new Date(date);else if (dateTimeRegex.test(date) && /^[0-9]/.test(date)) {
					var d = date.match(dateTimeRegex);
					date = new Date(d[0] + "/" + (d[1] || 1) + "/" + (d[2] || 1) + " " + (d[3] || 0) + ":" + (d[4] || 0) + ":" + (d[5] || 0));
				} else // fallback
					date = new Date(date);
			} else if (date instanceof Date) date = new Date(date.getTime()); // create a copy

			if (!(date instanceof Date)) {
				console.warn("flatpickr: invalid date " + date_orig);
				console.info(this.element);
				return null;
			}

			if (this.config && this.config.utc && !date.fp_isUTC) date = date.fp_toUTC();

			if (timeless === true) date.setHours(0, 0, 0, 0);

			return date;
		}
	};

	function _flatpickr(nodeList, config) {
		var instances = [];
		for (var i = 0; i < nodeList.length; i++) {
			try {
				nodeList[i]._flatpickr = new Flatpickr(nodeList[i], config || {});
				instances.push(nodeList[i]._flatpickr);
			} catch (e) {
				console.warn(e, e.stack);
			}
		}

		return instances.length === 1 ? instances[0] : instances;
	}
	if (typeof HTMLElement !== "undefined") {
		// browser env
		HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
			return _flatpickr(this, config);
		};

		HTMLElement.prototype.flatpickr = function (config) {
			return _flatpickr([this], config);
		};
	}

	function flatpickr(selector, config) {
		return _flatpickr(window.document.querySelectorAll(selector), config);
	}

	if (typeof jQuery !== "undefined") {
		jQuery.fn.flatpickr = function (config) {
			return _flatpickr(this, config);
		};
	}

	Date.prototype.fp_incr = function (days) {
		return new Date(this.getFullYear(), this.getMonth(), this.getDate() + parseInt(days, 10));
	};

	Date.prototype.fp_isUTC = false;
	Date.prototype.fp_toUTC = function () {
		var newDate = new Date(this.getUTCFullYear(), this.getUTCMonth(), this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds());

		newDate.fp_isUTC = true;
		return newDate;
	};

	// IE9 classList polyfill
	/* istanbul ignore next */
	if (!("classList" in window.document.documentElement) && Object.defineProperty && typeof HTMLElement !== "undefined") {
		Object.defineProperty(HTMLElement.prototype, "classList", {
			get: function get() {
				var self = this;
				function update(fn) {
					return function (value) {
						var classes = self.className.split(/\s+/),
						    index = classes.indexOf(value);

						fn(classes, index, value);
						self.className = classes.join(" ");
					};
				}

				var ret = {
					add: update(function (classes, index, value) {
						if (!~index) classes.push(value);
					}),

					remove: update(function (classes, index) {
						if (~index) classes.splice(index, 1);
					}),

					toggle: update(function (classes, index, value) {
						if (~index) classes.splice(index, 1);else classes.push(value);
					}),

					contains: function contains(value) {
						return !!~self.className.split(/\s+/).indexOf(value);
					},

					item: function item(i) {
						return self.className.split(/\s+/)[i] || null;
					}
				};

				Object.defineProperty(ret, "length", {
					get: function get() {
						return self.className.split(/\s+/).length;
					}
				});

				return ret;
			}
		});
	}

	if (true) module.exports = Flatpickr;


/***/ },
/* 98 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = isInteger;
	/**
	 * Check if the passed value is an integer
	 *
	 * @name 		isInteger
	 * @param 		{Mixed} 		value 		The value to check
	 * @return 		{Boolean} 					The check result
	 *
	 * @example 	js
	 * isInteger(10) => true
	 * isInteger('hello') => false
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function isInteger(data) {
	  return !isNaN(data) && function (x) {
	    return (x | 0) === x;
	  }(parseFloat(data));
	}

/***/ },
/* 99 */
/***/ function(module, exports) {

	

/***/ }
/******/ ]);