webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/layouts/BaseLayout.js":
/*!******************************************!*\
  !*** ./components/layouts/BaseLayout.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Header */ "./components/shared/Header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scrollable-anchor */ "./node_modules/react-scrollable-anchor/lib/index.js");
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_5__);








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
    crossorigin: "anonymous"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2212675550" + " " + "layout-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: 'upTop'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "port-nav-".concat(headerType)
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "jsx-2212675550" + " " + "cover ".concat(className)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2212675550" + " " + "wrapper"
  }, children)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-2212675550"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2212675550" + " " + "col-lg-8 col-md-10 mx-auto"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2212675550" + " " + "list-inline text-center"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2212675550" + " " + "list-inline-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-2212675550"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/images/Dux_logo2.svg",
    style: {
      height: '75px',
      paddingBottom: '10px',
      fill: 'white'
    },
    className: "jsx-2212675550"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
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
    css: "@import url('https://use.fontawesome.com/releases/v5.5.0/css/all.css');\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcm11cnBoeS9kdXgvd2Vic2l0ZS9jb21wb25lbnRzL2xheW91dHMvQmFzZUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RVcsQUFFbUYiLCJmaWxlIjoiL1VzZXJzL2Nlc2FybXVycGh5L2R1eC93ZWJzaXRlL2NvbXBvbmVudHMvbGF5b3V0cy9CYXNlTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vc2hhcmVkL0hlYWRlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3cgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCBTY3JvbGxhYmxlQW5jaG9yIGZyb20gJ3JlYWN0LXNjcm9sbGFibGUtYW5jaG9yJztcbmltcG9ydCB7IGNvbmZpZ3VyZUFuY2hvcnMgfSBmcm9tICdyZWFjdC1zY3JvbGxhYmxlLWFuY2hvcic7XG5cbmNvbnN0IEJhc2VMYXlvdXQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgdGl0bGUgfSA9IHByb3BzO1xuICBjb25zdCBoZWFkZXJUeXBlID0gcHJvcHMuaGVhZGVyVHlwZSB8fCAnZGVmYXVsdCc7XG5cbiAgY29uZmlndXJlQW5jaG9ycyh7IHNjcm9sbER1cmF0aW9uOiA4MDAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuNy4yL2Nzcy9hbGwuY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtZm5tT0NxYlRsV0lsajhMeVRqbzdtT1VTdGpzS0M0cE9wUWJxeWk3UnJoTjd1ZGk5UndoS2tNSHB2TGJIRzlTclwiXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXQtY29udGFpbmVyXCI+XG4gICAgICAgIDxTY3JvbGxhYmxlQW5jaG9yIGlkPXsndXBUb3AnfT5cbiAgICAgICAgICA8SGVhZGVyIGNsYXNzTmFtZT17YHBvcnQtbmF2LSR7aGVhZGVyVHlwZX1gfSAvPlxuICAgICAgICA8L1Njcm9sbGFibGVBbmNob3I+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17YGNvdmVyICR7Y2xhc3NOYW1lfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IGNvbC1tZC0xMCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL0R1eF9sb2dvMi5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNzVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogJ3doaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZHV4ZGV2ZWxvcG1lbnQvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2sgZmEtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW0gZmEtc3RhY2stMnggZmEtaW52ZXJzZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiN1cFRvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrIGZhLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG91YmxlLXVwIGZhLXN0YWNrLTJ4IGZhLWludmVyc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvcHlyaWdodCB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICBDb3B5cmlnaHQgJmNvcHk7IER1eCBEZXZlbG9wbWVudCAyMDE5XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS41LjAvY3NzL2FsbC5jc3MnKTtcbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/cesarmurphy/dux/website/components/layouts/BaseLayout.js */"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BaseLayout);

/***/ })

})
//# sourceMappingURL=index.js.2b494abfeaa7f1b2b559.hot-update.js.map