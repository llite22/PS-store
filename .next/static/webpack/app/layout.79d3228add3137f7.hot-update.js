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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header/Header.module.scss */ \"(app-client)/./components/ui/Header/Header.module.scss\");\n/* harmony import */ var _Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Input = ()=>{\n    _s();\n    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const updateSearchQueryParams = (title)=>{\n        const searchParams = new URLSearchParams(window.location.search);\n        if (title) {\n            searchParams.set(\"title\", title);\n        } else {\n            searchParams.delete(\"title\");\n        }\n        searchParams.delete(\"page\");\n        const newPathName = \"\".concat(window.location.pathname, \"?\").concat(searchParams.toString());\n        if (\"\".concat(window.location.pathname, \"?/catalog\")) {\n            router.push(newPathName);\n        } else {}\n    };\n    const searchHandle = (event)=>{\n        setSearchValue(event.target.value);\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        setSearchValue(searchValue);\n        updateSearchQueryParams(searchValue.toLowerCase());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header__search),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header__searchIcon),\n                    src: \"/images/search.svg\",\n                    width: 12,\n                    height: 12,\n                    alt: \"Search Icon\",\n                    loading: \"lazy\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\PET\\\\PS-store\\\\peter\\\\components\\\\ui\\\\Input\\\\Input.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header__input),\n                    type: \"text\",\n                    placeholder: \"Search\",\n                    name: \"search\",\n                    value: searchValue,\n                    onChange: searchHandle\n                }, void 0, false, {\n                    fileName: \"D:\\\\PET\\\\PS-store\\\\peter\\\\components\\\\ui\\\\Input\\\\Input.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\PET\\\\PS-store\\\\peter\\\\components\\\\ui\\\\Input\\\\Input.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\PET\\\\PS-store\\\\peter\\\\components\\\\ui\\\\Input\\\\Input.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Input, \"GF0HY0Ob24gBoqx57cKGbKc+gOA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\nvar _c;\n$RefreshReg$(_c, \"Input\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy91aS9JbnB1dC9JbnB1dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3FDO0FBQ047QUFDYTtBQUNNO0FBRWxELE1BQU1JLFFBQVk7O0lBQ2hCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBUztJQUN2RCxNQUFNTyxTQUFTTCwwREFBU0E7SUFFeEIsTUFBTU0sMEJBQTBCLENBQUNDO1FBQy9CLE1BQU1DLGVBQWdDLElBQUlDLGdCQUN4Q0MsT0FBT0MsUUFBUSxDQUFDQyxNQUFNO1FBR3hCLElBQUlMLE9BQU87WUFDVEMsYUFBYUssR0FBRyxDQUFDLFNBQVNOO1FBQzVCLE9BQU87WUFDTEMsYUFBYU0sTUFBTSxDQUFDO1FBQ3RCO1FBQ0FOLGFBQWFNLE1BQU0sQ0FBQztRQUVwQixNQUFNQyxjQUFzQixHQUV4QlAsT0FERkUsT0FBT0MsUUFBUSxDQUFDSyxRQUFRLEVBQ3pCLEtBQTJCLE9BQXhCUixhQUFhUyxRQUFRO1FBRXpCLElBQUcsR0FFRixPQURDUCxPQUFPQyxRQUFRLENBQUNLLFFBQVEsRUFDekIsY0FBWTtZQUNYWCxPQUFPYSxJQUFJLENBQUNIO1FBQ2QsT0FBTyxFQUVOO0lBQ0g7SUFFQSxNQUFNSSxlQUFlLENBQUNDO1FBQ3BCaEIsZUFBZWdCLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUNuQztJQUVBLE1BQU1DLGVBQWUsQ0FBQ0g7UUFDcEJBLE1BQU1JLGNBQWM7UUFDcEJwQixlQUFlRDtRQUNmRyx3QkFBd0JILFlBQVlzQixXQUFXO0lBQ2pEO0lBRUEscUJBQ0UsOERBQUNDO1FBQUtDLFVBQVVKO2tCQUNkLDRFQUFDSztZQUFJQyxXQUFXNUIsa0ZBQXFCOzs4QkFDbkMsOERBQUNGLG1EQUFLQTtvQkFDSjhCLFdBQVc1QixzRkFBeUI7b0JBQ3BDK0IsS0FBSTtvQkFDSkMsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsS0FBSTtvQkFDSkMsU0FBUTs7Ozs7OzhCQUVWLDhEQUFDQztvQkFDQ1IsV0FBVzVCLGlGQUFvQjtvQkFDL0JzQyxNQUFLO29CQUNMQyxhQUFZO29CQUNaQyxNQUFLO29CQUNMbkIsT0FBT25CO29CQUNQdUMsVUFBVXZCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQjtHQTdETWpCOztRQUVXRixzREFBU0E7OztLQUZwQkU7QUE4RE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9JbnB1dC9JbnB1dC50c3g/ZjQwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL0hlYWRlci9IZWFkZXIubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IElucHV0OiBGQyA9ICgpID0+IHtcclxuICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNlYXJjaFF1ZXJ5UGFyYW1zID0gKHRpdGxlOiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgIGNvbnN0IHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnNlYXJjaFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodGl0bGUpIHtcclxuICAgICAgc2VhcmNoUGFyYW1zLnNldChcInRpdGxlXCIsIHRpdGxlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNlYXJjaFBhcmFtcy5kZWxldGUoXCJ0aXRsZVwiKTtcclxuICAgIH1cclxuICAgIHNlYXJjaFBhcmFtcy5kZWxldGUoXCJwYWdlXCIpO1xyXG5cclxuICAgIGNvbnN0IG5ld1BhdGhOYW1lOiBzdHJpbmcgPSBgJHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXHJcbiAgICB9PyR7c2VhcmNoUGFyYW1zLnRvU3RyaW5nKCl9YDtcclxuICAgIFxyXG4gICAgaWYoYCR7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxyXG4gICAgfT8vY2F0YWxvZ2ApIHtcclxuICAgICAgcm91dGVyLnB1c2gobmV3UGF0aE5hbWUpO1x0XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3V0ZXIucHVzaChgL2NhdGFsb2cvJHtuZXdQYXRoTmFtZX1gKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzZWFyY2hIYW5kbGUgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcbiAgICBzZXRTZWFyY2hWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pOiB2b2lkID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRTZWFyY2hWYWx1ZShzZWFyY2hWYWx1ZSk7XHJcbiAgICB1cGRhdGVTZWFyY2hRdWVyeVBhcmFtcyhzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19zZWFyY2h9PlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19zZWFyY2hJY29ufVxyXG4gICAgICAgICAgc3JjPVwiL2ltYWdlcy9zZWFyY2guc3ZnXCJcclxuICAgICAgICAgIHdpZHRoPXsxMn1cclxuICAgICAgICAgIGhlaWdodD17MTJ9XHJcbiAgICAgICAgICBhbHQ9XCJTZWFyY2ggSWNvblwiXHJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9faW5wdXR9XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcclxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtzZWFyY2hIYW5kbGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkltYWdlIiwidXNlUm91dGVyIiwic3R5bGVzIiwiSW5wdXQiLCJzZWFyY2hWYWx1ZSIsInNldFNlYXJjaFZhbHVlIiwicm91dGVyIiwidXBkYXRlU2VhcmNoUXVlcnlQYXJhbXMiLCJ0aXRsZSIsInNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2V0IiwiZGVsZXRlIiwibmV3UGF0aE5hbWUiLCJwYXRobmFtZSIsInRvU3RyaW5nIiwicHVzaCIsInNlYXJjaEhhbmRsZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInRvTG93ZXJDYXNlIiwiZm9ybSIsIm9uU3VibWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyX19zZWFyY2giLCJoZWFkZXJfX3NlYXJjaEljb24iLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImxvYWRpbmciLCJpbnB1dCIsImhlYWRlcl9faW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJuYW1lIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/ui/Input/Input.tsx\n"));

/***/ })

});