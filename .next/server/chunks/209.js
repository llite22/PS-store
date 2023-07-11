exports.id = 209;
exports.ids = [209];
exports.modules = {

/***/ 4332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1560);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_slices_cartSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2763);
/* harmony import */ var _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2723);
/* harmony import */ var _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* __next_internal_client_entry_do_not_use__ default auto */ 







const maxTitleLength = 22;
const ProductCard = ({ id, addOn, playstation, title, image, description, imageDev, price, newPrice, imageDevColor })=>{
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const [addedToCart, setAddedToCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onClickAdd = ()=>{
        dispatch((0,_redux_slices_cartSlice__WEBPACK_IMPORTED_MODULE_5__/* .addItem */ .jX)({
            id,
            addOn,
            playstation,
            title,
            image,
            description,
            imageDev,
            price,
            newPrice,
            imageDevColor
        }));
        dispatch((0,_redux_slices_cartSlice__WEBPACK_IMPORTED_MODULE_5__/* .updateTotalPrice */ .R4)());
        setAddedToCart(true);
        localStorage.setItem(`addedToCart-${id}`, "true");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const added = localStorage.getItem(`addedToCart-${id}`);
        if (added === "true") {
            setAddedToCart(true);
        }
    }, []);
    const onButtonClick = ()=>{
        if (addedToCart) {
            router.push("/cart");
        } else {
            onClickAdd();
        }
    };
    let newPriceYes = "";
    if (typeof newPrice === "string" && /^[a-zA-Z]+$/.test(newPrice)) {
        newPriceYes = newPrice;
    } else if (newPrice) {
        newPriceYes = `$${newPrice}`;
    }
    const priceYes = /^[a-zA-Z]+$/.test(price) ? price : `$${price}`;
    const bgColor = imageDevColor;
    const truncatedTitle = title.length > maxTitleLength ? `${title.slice(0, maxTitleLength)}...` : title;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().productCard),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: image,
                width: 170,
                height: 170,
                alt: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: truncatedTitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: description
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().productCard__ps),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: playstation
                    }),
                    addOn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().productCard__dev),
                        children: addOn
                    }),
                    imageDev && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: imageDev,
                        className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().productCard__psplus),
                        width: 14,
                        height: 14,
                        alt: "up"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().ProductCard__btn),
                children: newPriceYes ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: `${(_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().productCard__price)} ${addedToCart ? (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().productCard__added) : ""}`,
                        onClick: addedToCart ? ()=>router.push("/cart") : onButtonClick,
                        children: addedToCart ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "Посмотреть в корзине"
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: priceYes
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().productCard__priceSeparator)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `${(_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().productCard__newPrice)} ${addedToCart ? (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().productCard__addedPrice) : ""}`,
                                    style: {
                                        color: bgColor
                                    },
                                    children: newPriceYes
                                })
                            ]
                        })
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: `${(_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().productCard__price)} ${addedToCart ? (_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().productCard__added) : ""}`,
                    onClick: addedToCart ? ()=>router.push("/cart") : onButtonClick,
                    children: addedToCart ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Посмотреть в корзине"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: priceYes
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);


/***/ }),

/***/ 2723:
/***/ ((module) => {

// Exports
module.exports = {
	"productCard": "ProductCard_productCard__Qo5PQ",
	"productCard__ps": "ProductCard_productCard__ps__pH_kx",
	"productCard__psplus": "ProductCard_productCard__psplus__RzfO6",
	"productCard__dev": "ProductCard_productCard__dev__JZ0XI",
	"productCard__price": "ProductCard_productCard__price__kLi3C",
	"productCard__priceSeparator": "ProductCard_productCard__priceSeparator__a_pj_",
	"productCard__added": "ProductCard_productCard__added__J6Pqd",
	"productCard__addedPrice": "ProductCard_productCard__addedPrice__EDxQv"
};


/***/ }),

/***/ 2799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ GameServices)
/* harmony export */ });
const GameServices = {
    async getAllGames (filters) {
        const { page, title } = filters;
        try {
            const request = await fetch(`https://272d57829d9ed7cd.mokky.ru/items?title=*${title}*&page=${page}&limit=12`);
            return await request.json();
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    }
};


/***/ }),

/***/ 9514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\PET\PS-store\peter\components\ui\ProductCard\ProductCard.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;