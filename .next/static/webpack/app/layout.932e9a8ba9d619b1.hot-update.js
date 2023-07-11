"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./components/ui/Input/Input.tsx":
/*!***************************************!*\
  !*** ./components/ui/Input/Input.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header/Header.module.scss */ \"(app-client)/./components/ui/Header/Header.module.scss\");\n/* harmony import */ var _Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Input = ()=>{\n    _s();\n    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const updateSearchQueryParams = (title)=>{\n        const searchParams = new URLSearchParams(window.location.search);\n        if (title) {\n            searchParams.set(\"title\", title);\n        } else {\n            searchParams.delete(\"title\");\n        }\n        searchParams.delete(\"page\");\n        const newPathName = \"\".concat(window.location.pathname, \"?\").concat(searchParams.toString());\n        router.push(\"/catalog?\".concat(newPathName));\n    };\n    const searchHandle = (event)=>{\n        setSearchValue(event.target.value);\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        setSearchValue(searchValue);\n        updateSearchQueryParams(searchValue.toLowerCase());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header__search),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header__searchIcon),\n                    src: \"/images/search.svg\",\n                    width: 12,\n                    height: 12,\n                    alt: \"Search Icon\",\n                    loading: \"lazy\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\PET\\\\PS-store\\\\peter\\\\components\\\\ui\\\\Input\\\\Input.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header__input),\n                    type: \"text\",\n                    placeholder: \"Search\",\n                    name: \"search\",\n                    value: searchValue,\n                    onChange: searchHandle\n                }, void 0, false, {\n                    fileName: \"D:\\\\PET\\\\PS-store\\\\peter\\\\components\\\\ui\\\\Input\\\\Input.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\PET\\\\PS-store\\\\peter\\\\components\\\\ui\\\\Input\\\\Input.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\PET\\\\PS-store\\\\peter\\\\components\\\\ui\\\\Input\\\\Input.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Input, \"GF0HY0Ob24gBoqx57cKGbKc+gOA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\nvar _c;\n$RefreshReg$(_c, \"Input\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy91aS9JbnB1dC9JbnB1dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRWtEO0FBQ25CO0FBQ2E7QUFDSTtBQUVoRCxNQUFNSSxRQUFZOztJQUNoQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0gsK0NBQVFBLENBQVM7SUFDdkQsTUFBTUksU0FBU0wsMERBQVNBO0lBRXhCLE1BQU1NLDBCQUEwQixDQUFDQztRQUMvQixNQUFNQyxlQUFnQyxJQUFJQyxnQkFDeENDLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtRQUd4QixJQUFJTCxPQUFPO1lBQ1RDLGFBQWFLLEdBQUcsQ0FBQyxTQUFTTjtRQUM1QixPQUFPO1lBQ0xDLGFBQWFNLE1BQU0sQ0FBQztRQUN0QjtRQUNBTixhQUFhTSxNQUFNLENBQUM7UUFFcEIsTUFBTUMsY0FBc0IsR0FFeEJQLE9BREZFLE9BQU9DLFFBQVEsQ0FBQ0ssUUFBUSxFQUN6QixLQUEyQixPQUF4QlIsYUFBYVMsUUFBUTtRQUV6QlosT0FBT2EsSUFBSSxDQUFDLFlBQXdCLE9BQVpIO0lBQzFCO0lBSUEsTUFBTUksZUFBZSxDQUFDQztRQUNwQmhCLGVBQWVnQixNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDbkM7SUFFQSxNQUFNQyxlQUFlLENBQUNIO1FBQ3BCQSxNQUFNSSxjQUFjO1FBQ3BCcEIsZUFBZUQ7UUFDZkcsd0JBQXdCSCxZQUFZc0IsV0FBVztJQUNqRDtJQUVBLHFCQUNFLDhEQUFDQztRQUFLQyxVQUFVSjtrQkFDZCw0RUFBQ0s7WUFBSUMsV0FBVy9CLGtGQUFxQjs7OEJBQ25DLDhEQUFDQyxtREFBS0E7b0JBQ0o4QixXQUFXL0Isc0ZBQXlCO29CQUNwQ2tDLEtBQUk7b0JBQ0pDLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JDLEtBQUk7b0JBQ0pDLFNBQVE7Ozs7Ozs4QkFFViw4REFBQ0M7b0JBQ0NSLFdBQVcvQixpRkFBb0I7b0JBQy9CeUMsTUFBSztvQkFDTEMsYUFBWTtvQkFDWkMsTUFBSztvQkFDTG5CLE9BQU9uQjtvQkFDUHVDLFVBQVV2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0F6RE1qQjs7UUFFV0Ysc0RBQVNBOzs7S0FGcEJFO0FBMEROLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvSW5wdXQvSW5wdXQudHN4P2Y0MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9IZWFkZXIvSGVhZGVyLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IEZDLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBJbnB1dDogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCB1cGRhdGVTZWFyY2hRdWVyeVBhcmFtcyA9ICh0aXRsZTogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoXHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2hcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRpdGxlKSB7XHJcbiAgICAgIHNlYXJjaFBhcmFtcy5zZXQoXCJ0aXRsZVwiLCB0aXRsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZWFyY2hQYXJhbXMuZGVsZXRlKFwidGl0bGVcIik7XHJcbiAgICB9XHJcbiAgICBzZWFyY2hQYXJhbXMuZGVsZXRlKFwicGFnZVwiKTtcclxuXHJcbiAgICBjb25zdCBuZXdQYXRoTmFtZTogc3RyaW5nID0gYCR7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxyXG4gICAgfT8ke3NlYXJjaFBhcmFtcy50b1N0cmluZygpfWA7XHJcblxyXG4gICAgcm91dGVyLnB1c2goYC9jYXRhbG9nPyR7bmV3UGF0aE5hbWV9YCk7XHRcclxuICB9O1xyXG5cclxuXHJcblxyXG4gIGNvbnN0IHNlYXJjaEhhbmRsZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pOiB2b2lkID0+IHtcclxuICAgIHNldFNlYXJjaFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pik6IHZvaWQgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFNlYXJjaFZhbHVlKHNlYXJjaFZhbHVlKTtcclxuICAgIHVwZGF0ZVNlYXJjaFF1ZXJ5UGFyYW1zKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX3NlYXJjaH0+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX3NlYXJjaEljb259XHJcbiAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3NlYXJjaC5zdmdcIlxyXG4gICAgICAgICAgd2lkdGg9ezEyfVxyXG4gICAgICAgICAgaGVpZ2h0PXsxMn1cclxuICAgICAgICAgIGFsdD1cIlNlYXJjaCBJY29uXCJcclxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19pbnB1dH1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3NlYXJjaEhhbmRsZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkltYWdlIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJJbnB1dCIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJyb3V0ZXIiLCJ1cGRhdGVTZWFyY2hRdWVyeVBhcmFtcyIsInRpdGxlIiwic2VhcmNoUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJzZXQiLCJkZWxldGUiLCJuZXdQYXRoTmFtZSIsInBhdGhuYW1lIiwidG9TdHJpbmciLCJwdXNoIiwic2VhcmNoSGFuZGxlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidG9Mb3dlckNhc2UiLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXJfX3NlYXJjaCIsImhlYWRlcl9fc2VhcmNoSWNvbiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwibG9hZGluZyIsImlucHV0IiwiaGVhZGVyX19pbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/ui/Input/Input.tsx\n"));

/***/ })

});