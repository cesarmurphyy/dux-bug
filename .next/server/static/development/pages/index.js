module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ActiveLink.js":
/*!**********************************!*\
  !*** ./components/ActiveLink.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var ActiveLink = function ActiveLink(_ref) {
  var children = _ref.children,
      router = _ref.router,
      props = _objectWithoutProperties(_ref, ["children", "router"]);

  var child = react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children);
  var className = child.props.className || '';

  if (router.asPath === props.route && props.activeClassName) {
    className = "".concat(className, " ").concat(props.activeClassName);
  }

  delete props.activeClassName;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], props, react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
    className: className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./components/layouts/BaseLayout.js":
/*!******************************************!*\
  !*** ./components/layouts/BaseLayout.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Header */ "./components/shared/Header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scrollable-anchor */ "react-scrollable-anchor");
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_DuxLogo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/DuxLogo */ "./components/shared/DuxLogo.js");









var BaseLayout = function BaseLayout(props) {
  var className = props.className,
      children = props.children,
      title = props.title;
  var headerType = props.headerType || 'default';
  Object(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_5__["configureAnchors"])({
    scrollDuration: 800
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.7.2/css/all.css",
    integrity: "sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr",
    crossOrigin: "anonymous"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2212675550"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: 'upTop'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2212675550"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "port-nav-".concat(headerType)
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "jsx-2212675550" + " " + "cover ".concat(className)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2212675550" + " " + "wrapper"
  }, children)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-2212675550"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2212675550" + " " + "col-lg-8 col-md-10 mx-auto"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2212675550" + " " + "footer-icon-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2212675550" + " " + "list-inline-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-2212675550"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_DuxLogo__WEBPACK_IMPORTED_MODULE_6__["default"], null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2212675550" + " " + "list-inline-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.instagram.com/duxdevelopment/",
    className: "jsx-2212675550"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2212675550" + " " + "fa-stack fa-lg"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-2212675550" + " " + "fab fa-instagram fa-stack-2x fa-inverse"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2212675550" + " " + "list-inline-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#upTop",
    className: "jsx-2212675550"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2212675550" + " " + "fa-stack fa-lg"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-2212675550" + " " + "fas fa-angle-double-up fa-stack-2x fa-inverse"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2212675550" + " " + "copyright text-muted"
  }, "Copyright \xA9 Dux Development 2019"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2212675550",
    css: "@import url('https://use.fontawesome.com/releases/v5.5.0/css/all.css');\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcm11cnBoeS9kdXgvd2Vic2l0ZS9jb21wb25lbnRzL2xheW91dHMvQmFzZUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RVcsQUFFbUYiLCJmaWxlIjoiL1VzZXJzL2Nlc2FybXVycGh5L2R1eC93ZWJzaXRlL2NvbXBvbmVudHMvbGF5b3V0cy9CYXNlTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vc2hhcmVkL0hlYWRlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3cgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCBTY3JvbGxhYmxlQW5jaG9yIGZyb20gJ3JlYWN0LXNjcm9sbGFibGUtYW5jaG9yJztcbmltcG9ydCB7IGNvbmZpZ3VyZUFuY2hvcnMgfSBmcm9tICdyZWFjdC1zY3JvbGxhYmxlLWFuY2hvcic7XG5pbXBvcnQgRHV4TG9nbyBmcm9tICcuLi9zaGFyZWQvRHV4TG9nbyc7XG5cbmNvbnN0IEJhc2VMYXlvdXQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgdGl0bGUgfSA9IHByb3BzO1xuICBjb25zdCBoZWFkZXJUeXBlID0gcHJvcHMuaGVhZGVyVHlwZSB8fCAnZGVmYXVsdCc7XG5cbiAgY29uZmlndXJlQW5jaG9ycyh7IHNjcm9sbER1cmF0aW9uOiA4MDAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuNy4yL2Nzcy9hbGwuY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtZm5tT0NxYlRsV0lsajhMeVRqbzdtT1VTdGpzS0M0cE9wUWJxeWk3UnJoTjd1ZGk5UndoS2tNSHB2TGJIRzlTclwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPFNjcm9sbGFibGVBbmNob3IgaWQ9eyd1cFRvcCd9PlxuICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgPC9TY3JvbGxhYmxlQW5jaG9yPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8SGVhZGVyIGNsYXNzTmFtZT17YHBvcnQtbmF2LSR7aGVhZGVyVHlwZX1gfSAvPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2Bjb3ZlciAke2NsYXNzTmFtZX1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOCBjb2wtbWQtMTAgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXItaWNvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWlubGluZS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPER1eExvZ28gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWlubGluZS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2R1eGRldmVsb3BtZW50L1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrIGZhLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtIGZhLXN0YWNrLTJ4IGZhLWludmVyc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWlubGluZS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjdXBUb3BcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFjayBmYS1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvdWJsZS11cCBmYS1zdGFjay0yeCBmYS1pbnZlcnNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb3B5cmlnaHQgdGV4dC1tdXRlZFwiPlxuICAgICAgICAgICAgICAgICAgQ29weXJpZ2h0ICZjb3B5OyBEdXggRGV2ZWxvcG1lbnQgMjAxOVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuNS4wL2Nzcy9hbGwuY3NzJyk7XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/Users/cesarmurphy/dux/website/components/layouts/BaseLayout.js */"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BaseLayout);

/***/ }),

/***/ "./components/shared/AnimatedLogo.js":
/*!*******************************************!*\
  !*** ./components/shared/AnimatedLogo.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var AnimatedLogo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AnimatedLogo, _React$Component);

  function AnimatedLogo() {
    _classCallCheck(this, AnimatedLogo);

    return _possibleConstructorReturn(this, _getPrototypeOf(AnimatedLogo).apply(this, arguments));
  }

  _createClass(AnimatedLogo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        viewBox: "0 0 292.07 180",
        id: "logo-image"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "Layer_2",
        "data-name": "Layer 2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "Layer_1-2",
        "data-name": "Layer 1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "cls-1",
        d: "M18,84.73v73.54l-9-9V93.73l9-9M27,63,0,90v63l27,27V63Z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "cls-1",
        d: "M45,22l9,9,.06,118.27-9.05,9V22M35.94,180,63,153V27L36,0"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "cls-1",
        d: "M72,35.92h32.77A47.87,47.87,0,0,1,127.31,41,37.41,37.41,0,0,1,142.5,55.3a40.26,40.26,0,0,1,5.4,20.87,40.3,40.3,0,0,1-5.4,20.88,37.41,37.41,0,0,1-15.19,14.26,47.87,47.87,0,0,1-22.54,5.11H72Zm32.31,73.14a39,39,0,0,0,18.52-4.19,30.54,30.54,0,0,0,12.31-11.62,33,33,0,0,0,4.37-17.08,33,33,0,0,0-4.37-17.07,30.54,30.54,0,0,0-12.31-11.62,39,39,0,0,0-18.52-4.2H80.51v65.78Z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "cls-1",
        d: "M219.77,55.93v60.49H212v-11A22.38,22.38,0,0,1,203.1,114a26.67,26.67,0,0,1-12.88,3q-11.85,0-18.69-6.61T164.69,91V55.93h8.16V90.2q0,9.55,4.72,14.49t13.45,5q9.55,0,15.07-5.81t5.52-16.16V55.93Z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "cls-1",
        d: "M281.18,116.42,262,91.12l-19.32,25.3h-9.2l23.92-31L234.61,55.93h9.2L262,79.62l18.17-23.69h9L266.35,85.38l24.15,31Z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "cls-1",
        d: "M72,127.05h6.62a10,10,0,0,1,4.82,1.12,8.23,8.23,0,0,1,3.25,3.13,9.31,9.31,0,0,1,0,9,8.2,8.2,0,0,1-3.25,3.12,10,10,0,0,1-4.82,1.13H72Zm6.57,17A9.66,9.66,0,0,0,83.19,143a7.59,7.59,0,0,0,3.07-2.95,8.87,8.87,0,0,0,0-8.52,7.59,7.59,0,0,0-3.07-2.95,9.67,9.67,0,0,0-4.62-1.07H72.5v16.55Z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "cls-1",
        d: "M108.27,138.07H96.77a6.28,6.28,0,0,0,.78,3.14,5.58,5.58,0,0,0,2.14,2.17,6.41,6.41,0,0,0,5.55.26,4.84,4.84,0,0,0,1.91-1.49l.35.35a5.64,5.64,0,0,1-2.1,1.57,6.85,6.85,0,0,1-6-.28,6,6,0,0,1-2.3-2.34,6.81,6.81,0,0,1-.84-3.38,7.23,7.23,0,0,1,.77-3.36,5.85,5.85,0,0,1,2.14-2.32,6,6,0,0,1,6.11,0,5.79,5.79,0,0,1,2.17,2.27,6.87,6.87,0,0,1,.78,3.3Zm-8.72-5.32a5.38,5.38,0,0,0-2,2,6.22,6.22,0,0,0-.82,2.85h11a6.11,6.11,0,0,0-.83-2.85,5.48,5.48,0,0,0-2-2,5.45,5.45,0,0,0-5.45,0Z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "cls-1",
        d: "M127.55,131.62l-6,12.93h-.5l-5.95-12.93h.57L121.35,144,127,131.62Z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "cls-1",
        d: "M146.27,138.07h-11.5a6.28,6.28,0,0,0,.78,3.14,5.58,5.58,0,0,0,2.14,2.17,6.41,6.41,0,0,0,5.55.26,4.84,4.84,0,0,0,1.91-1.49l.35.35a5.64,5.64,0,0,1-2.1,1.57,6.85,6.85,0,0,1-6-.28,6,6,0,0,1-2.3-2.34,6.81,6.81,0,0,1-.84-3.38,7.23,7.23,0,0,1,.77-3.36,5.85,5.85,0,0,1,2.14-2.32,6,6,0,0,1,6.11,0,5.79,5.79,0,0,1,2.17,2.27,6.87,6.87,0,0,1,.78,3.3Zm-8.72-5.32a5.38,5.38,0,0,0-2,2,6.1,6.1,0,0,0-.82,2.85h11a6.11,6.11,0,0,0-.83-2.85,5.48,5.48,0,0,0-2-2,5.45,5.45,0,0,0-5.45,0Z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "cls-1",
        d: "M156.12,126h.5v18.55h-.5Z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "cls-1",
        d: "M169.54,143.79a5.89,5.89,0,0,1-2.25-2.34,6.9,6.9,0,0,1-.82-3.38,6.8,6.8,0,0,1,.82-3.36,5.91,5.91,0,0,1,2.25-2.32,6.55,6.55,0,0,1,6.42,0,5.91,5.91,0,0,1,2.25,2.32,6.9,6.9,0,0,1,.81,3.36,7,7,0,0,1-.81,3.38,5.89,5.89,0,0,1-2.25,2.34,6.62,6.62,0,0,1-6.42,0Zm6.16-.41a5.48,5.48,0,0,0,2.07-2.17,6.93,6.93,0,0,0,0-6.27,5.36,5.36,0,0,0-2.07-2.15,6,6,0,0,0-5.9,0,5.38,5.38,0,0,0-2.08,2.15,6.93,6.93,0,0,0,0,6.27,5.5,5.5,0,0,0,2.08,2.17,6,6,0,0,0,5.9,0Z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "cls-1",
        d: "M198.34,132.39a6,6,0,0,1,2.26,2.33,6.9,6.9,0,0,1,.82,3.38,6.8,6.8,0,0,1-.82,3.36,6.1,6.1,0,0,1-2.26,2.33,6.22,6.22,0,0,1-3.19.83,6.09,6.09,0,0,1-3.56-1.08,5.88,5.88,0,0,1-2.22-2.92v8.78h-.5V131.62h.5v3.95a5.9,5.9,0,0,1,2.2-2.93,6.07,6.07,0,0,1,3.58-1.09A6.23,6.23,0,0,1,198.34,132.39Zm-.24,11a5.42,5.42,0,0,0,2.07-2.15,6.95,6.95,0,0,0,0-6.28,5.52,5.52,0,0,0-2.07-2.16,6,6,0,0,0-5.9,0,5.47,5.47,0,0,0-2.08,2.16,6.95,6.95,0,0,0,0,6.28,5.38,5.38,0,0,0,2.08,2.15,6.11,6.11,0,0,0,5.9,0Z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "cls-1",
        d: "M231,132.94a5.5,5.5,0,0,1,1.33,4v7.63h-.5v-7.63a5.14,5.14,0,0,0-1.17-3.63,4.33,4.33,0,0,0-3.33-1.27,5.06,5.06,0,0,0-3.87,1.52,5.58,5.58,0,0,0-1.43,4v7h-.5v-7.63a5.14,5.14,0,0,0-1.17-3.63,4.34,4.34,0,0,0-3.33-1.27,5.06,5.06,0,0,0-3.87,1.52,5.58,5.58,0,0,0-1.43,4v7h-.5V131.62h.5v3.43a5.08,5.08,0,0,1,1.95-2.58,5.89,5.89,0,0,1,3.33-.92,5.16,5.16,0,0,1,3.25,1A4.6,4.6,0,0,1,222,135.4a5.08,5.08,0,0,1,1.91-2.81,5.73,5.73,0,0,1,3.49-1A4.88,4.88,0,0,1,231,132.94Z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "cls-1",
        d: "M254.05,138.07h-11.5a6.38,6.38,0,0,0,.77,3.14,5.58,5.58,0,0,0,2.14,2.17,6.41,6.41,0,0,0,5.55.26,4.77,4.77,0,0,0,1.91-1.49l.35.35a5.48,5.48,0,0,1-2.1,1.57,6.42,6.42,0,0,1-2.65.55,6.54,6.54,0,0,1-3.31-.83,6.09,6.09,0,0,1-2.3-2.34,6.81,6.81,0,0,1-.84-3.38,7.12,7.12,0,0,1,.78-3.36,5.78,5.78,0,0,1,2.14-2.32,5.67,5.67,0,0,1,3.06-.84,5.85,5.85,0,0,1,5.21,3.1,6.77,6.77,0,0,1,.79,3.3Zm-8.73-5.32a5.45,5.45,0,0,0-2,2,6.21,6.21,0,0,0-.81,2.85h11a6.1,6.1,0,0,0-.82-2.85,5.5,5.5,0,0,0-2-2,5.25,5.25,0,0,0-2.72-.73A5.31,5.31,0,0,0,245.32,132.75Z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "cls-1",
        d: "M273.62,132.94a5.39,5.39,0,0,1,1.38,4v7.63h-.5v-7.63a5.07,5.07,0,0,0-1.21-3.63,4.57,4.57,0,0,0-3.44-1.27,5.29,5.29,0,0,0-4,1.52,5.51,5.51,0,0,0-1.46,4v7h-.5V131.62h.5v3.45a5.06,5.06,0,0,1,2-2.58,6,6,0,0,1,3.42-.94A5.08,5.08,0,0,1,273.62,132.94Z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "cls-1",
        d: "M292.07,143.7a2.7,2.7,0,0,1-1.11.69,4.25,4.25,0,0,1-1.41.23,3,3,0,0,1-2.31-.86,3.18,3.18,0,0,1-.82-2.31V132.1h-2.5v-.48h2.5V128.8h.5v2.82h4.38v.48h-4.38v9.22a3,3,0,0,0,.68,2.1,2.54,2.54,0,0,0,2,.73,3,3,0,0,0,2.15-.8Z"
      })))));
    }
  }]);

  return AnimatedLogo;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AnimatedLogo);

/***/ }),

/***/ "./components/shared/ContactContainer.js":
/*!***********************************************!*\
  !*** ./components/shared/ContactContainer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ContactContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContactContainer, _React$Component);

  function ContactContainer(props) {
    _classCallCheck(this, ContactContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ContactContainer).call(this, props));
  }

  _createClass(ContactContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          content = _this$props.content,
          image = _this$props.image,
          overlay = _this$props.overlay,
          font = _this$props.font,
          background = _this$props.background,
          blurb = _this$props.blurb;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content-container",
        style: {
          backgroundImage: "url('".concat(this.props.image, "')"),
          color: "".concat(this.props.font),
          background: "".concat(this.props.background)
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-overlay",
        style: {
          background: "".concat(this.props.overlay)
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contact-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: "6",
        className: "container-inner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "contact-image",
        src: "/static/images/Dux_logo1.svg"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "container-inner"
      }, this.props.blurb)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "h1-contact"
      }, "contact us")))))));
    }
  }]);

  return ContactContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ContactContainer);

/***/ }),

/***/ "./components/shared/ContentContainer.js":
/*!***********************************************!*\
  !*** ./components/shared/ContentContainer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ContentContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContentContainer, _React$Component);

  function ContentContainer(props) {
    _classCallCheck(this, ContentContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ContentContainer).call(this, props));
  }

  _createClass(ContentContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          content = _this$props.content,
          image = _this$props.image,
          overlay = _this$props.overlay,
          font = _this$props.font,
          background = _this$props.background,
          featureImage = _this$props.featureImage;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content-container",
        style: {
          backgroundImage: "url('".concat(this.props.image, "')"),
          color: "".concat(this.props.font),
          background: "".concat(this.props.background)
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-overlay",
        style: {
          background: "".concat(this.props.overlay)
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        className: "super-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "display-image"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "display-image-inner",
        src: this.props.featureImage
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: "6",
        className: "container-button"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "container-inner"
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "container-inner"
      }, this.props.content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "h1-contact"
      }, "contact us"))))));
    }
  }]);

  return ContentContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ContentContainer);

/***/ }),

/***/ "./components/shared/ContentContainer2.js":
/*!************************************************!*\
  !*** ./components/shared/ContentContainer2.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ContentContainer2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContentContainer2, _React$Component);

  function ContentContainer2(props) {
    _classCallCheck(this, ContentContainer2);

    return _possibleConstructorReturn(this, _getPrototypeOf(ContentContainer2).call(this, props));
  }

  _createClass(ContentContainer2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          content = _this$props.content,
          image = _this$props.image,
          overlay = _this$props.overlay,
          font = _this$props.font,
          featureImage = _this$props.featureImage;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content-container",
        style: {
          backgroundImage: "url('".concat(this.props.image, "')"),
          color: "".concat(this.props.font)
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-overlay",
        style: {
          background: "".concat(this.props.overlay)
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        className: "super-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "container-inner"
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "container-inner"
      }, this.props.content)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "display-image"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "display-image-inner",
        src: this.props.featureImage
      })))))));
    }
  }]);

  return ContentContainer2;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ContentContainer2);

/***/ }),

/***/ "./components/shared/DuxLogo.js":
/*!**************************************!*\
  !*** ./components/shared/DuxLogo.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var DuxLogo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DuxLogo, _React$Component);

  function DuxLogo() {
    _classCallCheck(this, DuxLogo);

    return _possibleConstructorReturn(this, _getPrototypeOf(DuxLogo).apply(this, arguments));
  }

  _createClass(DuxLogo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        viewBox: "0 0 40 100",
        id: "dux-logo"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "Layer_2",
        "data-name": "Layer 2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "Layer_1-2",
        "data-name": "Layer 1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "dux-logo-child",
        d: "M18,84.73v73.54l-9-9V93.73l9-9M27,63,0,90v63l27,27V63Z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "dux-logo-child",
        d: "M45,22l9,9,.06,118.27-9.05,9V22M35.94,180,63,153V27L36,0"
      })))));
    }
  }]);

  return DuxLogo;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DuxLogo);

/***/ }),

/***/ "./components/shared/Header.js":
/*!*************************************!*\
  !*** ./components/shared/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Example; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ActiveLink */ "./components/ActiveLink.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var BsNavLink = function BsNavLink(props) {
  var route = props.route,
      title = props.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    activeClassName: "active",
    route: route
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link port-navbar-link"
  }, title)) // <Link href={route}>
  //   <a className="nav-link port-navbar-link">{title}</a>
  // </Link>
  ;
};

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this, props));
    _this.state = {
      isOpen: false,
      dropdownOpen: false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleDropdown = _this.toggleDropdown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Example, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "toggleDropdown",
    value: function toggleDropdown() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
        className: "port-navbar port-nav-base absolute ".concat(className, " menu-open"),
        light: true //was light - refers to burger
        ,
        expand: "md"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarBrand"], {
        className: "port-navbar-brand",
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/Dux_logo2.svg",
        style: {
          height: '75px',
          paddingBottom: '10px'
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarToggler"], {
        onClick: this.toggle,
        style: {
          borderColor: 'rgba(0,0,0,0)'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
        className: "ml-auto",
        navbar: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        className: "port-navbar-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BsNavLink, {
        route: "/",
        title: "Home"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
        isOpen: this.state.dropdownOpen,
        toggle: this.toggleDropdown
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], {
        nav: true,
        caret: true,
        className: "port-navbar-drop"
      }, "Our Services"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
        right: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BsNavLink, {
        route: "/webdev",
        title: "Web Development"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BsNavLink, {
        route: "/appdev",
        title: "iOS Apps"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BsNavLink, {
        route: "/ecommerce",
        title: "E-Commerce"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BsNavLink, {
        route: "/graphic",
        title: "Graphic Design"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        className: "port-navbar-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BsNavLink, {
        route: "/contact",
        title: "Contact Us"
      }))))));
    }
  }]);

  return Example;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/BaseLayout */ "./components/layouts/BaseLayout.js");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-typed */ "react-typed");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_shared_ContentContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shared/ContentContainer */ "./components/shared/ContentContainer.js");
/* harmony import */ var _components_shared_ContentContainer2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shared/ContentContainer2 */ "./components/shared/ContentContainer2.js");
/* harmony import */ var _components_shared_ContactContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shared/ContactContainer */ "./components/shared/ContactContainer.js");
/* harmony import */ var _components_shared_AnimatedLogo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/shared/AnimatedLogo */ "./components/shared/AnimatedLogo.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    _this.roles = ['what do we do?'];
    return _this;
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "cover",
        headerType: "index"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: "12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "logo-image-conatiner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_shared_AnimatedLogo__WEBPACK_IMPORTED_MODULE_7__["default"], null))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fade-container"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fade-container-rad"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "typed-container",
        style: {
          background: 'white'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: "12",
        className: "self-typed"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typed__WEBPACK_IMPORTED_MODULE_2___default.a, {
        typeSpeed: 65,
        backSpeed: 65,
        strings: this.roles,
        backDelay: 1000,
        loopCount: 0,
        showCursor: true,
        cursorChar: "|",
        className: "self-typed"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_shared_ContentContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        font: 'black',
        background: 'white',
        title: 'Web Development',
        content: "From simple websites to real-time secure APIs, we are here to create fully custom solutions to take your online presence to the next level.",
        style: {
          background: 'white'
        },
        featureImage: '/static/images/laptop.png'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_shared_ContentContainer2__WEBPACK_IMPORTED_MODULE_5__["default"], {
        font: 'white',
        title: 'iOS Apps',
        content: "Whether it be the next big hit or a custom enterprise solution, we are here to provide a UX driven development service to turn your idea into a production ready app.",
        style: {
          background: 'white'
        },
        image: '/static/images/iphone-backing.jpeg',
        overlay: '#25628b',
        featureImage: '/static/images/iphone.png'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_shared_ContentContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        font: 'white',
        image: '/static/images/ecommerce-backing.jpeg',
        title: 'E-Commerce',
        content: "With over 20% of all purchases this year being made online, it is no secret that the future of sales is going digital. Using Shopify, our team can build your store to be as simple or complex as you desire, all while retaining the easy Shopify interface for your day to day management.",
        overlay: '#272727',
        featureImage: '/static/images/shopify.svg'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_shared_ContentContainer2__WEBPACK_IMPORTED_MODULE_5__["default"], {
        font: 'white',
        title: 'Graphic Design',
        content: "From promotional banners and logos to advertising UIs, let us help you to bring your brand idea to life.",
        style: {
          background: 'white'
        },
        image: '/static/images/graphic-design-backing.jpeg',
        overlay: '#25628b'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_shared_ContactContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        font: 'white',
        image: '/static/images/contact-backing.jpg',
        overlay: '#272727',
        blurb: "We look forward to chatting with you about your next dream idea. If you have something in mind that is not listed, don\u2019t hesitate to ask.\n          "
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(/*! next-routes */ "next-routes");

module.exports = routes().add('portfolio', '/portfolio/:id');

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-scrollable-anchor":
/*!******************************************!*\
  !*** external "react-scrollable-anchor" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollable-anchor");

/***/ }),

/***/ "react-typed":
/*!******************************!*\
  !*** external "react-typed" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-typed");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map