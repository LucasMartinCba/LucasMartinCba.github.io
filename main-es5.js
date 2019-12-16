(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class=\"container main-container\">\n  <router-outlet></router-outlet>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid animated fadeIn fast shadow\">\r\n  <div class=\"container col-md-6 text-center\">\r\n    <h1 class=\"display\">Masterphone</h1>\r\n    <p class=\"lead\">Tenemos como premisa la transparencia en la comercialización y somos fervientes creyentes del crecimiento comercial sustentado en el trabajo digno.</p>\r\n    <h1 class=\"display\">Propuestas</h1>\r\n    <p class=\"lead\">Cordialidad en su atención, máxima calidad en toda la gama de productos que ponemos a su disposición y satisfacción garantizada en los servicios ofrecidos, los cuales persiguen el objetivo de hacerles mas fácil y placentero el usos su equipo electrónico.</p>\r\n    <p class=\"lead\">Hemos desarrollado franquicias del \"NEGOCIO MASTERPHONE\", el cual reúne todos nuestros productos y servicios en un sistema online, el cual lo mantendrá informado de los múltiples cambios diarios de condiciones y promociones de todas las empresas y marcas representadas por la firma. Además, el mismo le brinda la posibilidad de Administrar el 100 % de su comercio de múltiples rubros, permitiendo que este amplio negocio sea fácil y sencillo de controlar y ejecutar.</p>\r\n    <p class=\"lead\">Masterphone es una herramienta Única por la importancia que tiene la velocidad de la información en estos tiempos tan competitivos que estamos viviendo, y sumamente necesaria para generar más y mejores operaciones. A su vez, reduce en forma notable los costos de comunicación, logística, administración y todo costo operativo existente en un negocio de esta magnitud, transformando su franquicia en un negocio más Rentable.</p>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/busqueda/busqueda.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/busqueda/busqueda.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>Buscando:  <small>{{ termino }}</small></h1>\n<hr>\n\n<div class=\"row animated fadeIn fast\" *ngIf=\"heroes.length == 0\">\n  <div class=\"col-md-12\">\n    <div class=\"alert alert-info\" role=\"alert\">\n      No existen resultados con el termino: {{termino}}\n    </div>\n  </div>\n</div>\n\n<div class=\"card-columns\">\n\n  <div class=\"card animated fadeIn fast\" *ngFor=\"let heroe of heroes, let i = index\">\n    <img [src]=\"heroe.img\" class=\"card-img-top \" [alt]=\"heroe.nombre\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{ heroe.nombre }}</h5>\n      <p class=\"card-text\">{{ heroe.bio }}</p>\n      <p class=\"card-text\"><small class=\"text-muted\">{{ heroe.aparicion }}</small></p>\n\n      <button (click)=\"heroe.verHeroe(i)\" type=\"button\" class=\"btn btn-outline-primary btn-block\">Ver mas...</button>\n      <!--<a [routerLink]=\"['/celular', i]\" class=\"btn btn-outline-primary\">Ver mas link....</a>-->\n\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/celular/celular.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/celular/celular.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"animated fadeIn\">{{celular.nombre | uppercase }}</h1>\r\n<hr>\r\n<br><br>\r\n<div class=\"row animated fadeIn fast\">\r\n  <div class=\"col-md-4\" align=\"center\">\r\n    <img [src]=\"celular.img\" class=\"img-fluid\" [alt]=\"celular.nombre\">\r\n    <p class=\"card-text text-center h1\">${{ celular.precio }}</p>\r\n    <a href=\"https://api.whatsapp.com/send?phone=5493513031506poo&text=Quiero%20mas%20informacion%20sobre%20{{celular.nombre}}\" target=\"_blank\"\r\n       class=\"btn btn-outline-success btn-block\">Envianos un WhatsApp</a>\r\n    <a [routerLink]=\"['']\" class=\"btn btn-outline-danger btn-block\">Regresar</a>\r\n    <img src=\"/assets/img/mercadopago.png\" align=\"center\" class=\"d-inline-block img-fluid mt-2 mb-2\" width=\"200\"  alt=\"\">\r\n  </div>\r\n  <hr>\r\n  <div class=\"card col-md-8 jumbotron-fluid shadow rounded\" style=\"box-shadow: inset; background-color: #F2F2F2\">\r\n    <div class=\"card-body\">\r\n      <p>\r\n        {{celular.desc}}\r\n        <br>\r\n      </p>\r\n      <hr style=\"border: 1px solid\">\r\n      <img class=\"card-img img-fluid\" style=\"width: 350px\" [src]=\"celular.spec\" alt=\"Card image\">\r\n\r\n\r\n      <!--div >\r\n        <img *ngIf = \"celular.casa == 'Marvel'\" class= \"img-logo\" src=\"assets/img/icono-marvel.png\" alt=\"Marvel\">\r\n        <img *ngIf=\"celular.casa == 'DC'\" class= \"img-logo\" src=\"assets/img/icono-dc.png\" alt=\"DC\">\r\n      </div!-->\r\n    </div>\r\n    <img class=\"card-img img-fluid\" align=\"bottom\" style=\"width: 300px\" src=\"assets/img/telefono.png\" alt=\"Card image\">\r\n\r\n  </div>\r\n</div>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n\r\n<div class *ngIf=\"celulares.length >= 1\">\r\n  <h3>Otros celulares {{celular.marca}}</h3>\r\n  <hr>\r\n  <div class=\"d-flex flex-wrap align-content-around\">\r\n\r\n    <div class=\"card animated fadeIn fast cards\"\r\n         style=\"border-width:3px; border-color: navajowhite;max-width: 250px; max-height: 500px\"\r\n         *ngFor=\"let celular of celulares, let i = index\">\r\n      <div>\r\n        <img [src]=\"celular.img\" class=\"card-img-top\" [alt]=\"celular.nombre\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{ celular.nombre }}</h5>\r\n          <p class=\"card-text\">${{ celular.precio }}</p>\r\n          <!--p class=\"card-text\"><small class=\"text-muted\">{{ heroe.aparicion }}</small></p!-->\r\n\r\n          <button (click)=\"verCelular(celular.id)\" type=\"button\" class=\"btn btn-outline-danger btn-block\">Ver mas...\r\n          </button>\r\n          <!--<a [routerLink]=\"['/celular', i]\" class=\"btn btn-outline-primary\">Ver mas link....</a>-->\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/celulares/celulares.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/celulares/celulares.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<img src=\"assets/img/samsung.png\" class=\"mt-4\" width=\"200\" alt=\"\">\r\n<hr style=\"border: 1px solid; color: #D11B1B\">\r\n\r\n<div class=\"d-flex flex-wrap align-content-around\">\r\n\r\n  <div class=\"card animated fadeIn fast cards\" style=\"border-width:3px; border-color: navajowhite ; max-width: 250px; max-height: 500px; \" *ngFor=\"let celular of celularesSamsung, let i = index\">\r\n    <div *ngIf = \"celular.marca == 'Samsung'\">\r\n\r\n      <img [src]=\"celular.img\" class=\"card-img-top\" alt=\"celular.nombre\">\r\n      <div class=\"card-body text-center\">\r\n        <h5 class=\"card-title\">{{ celular.nombre }}</h5>\r\n        <p class=\"card-text\">${{ celular.precio }}</p>\r\n        <!--p class=\"card-text\"><small class=\"text-muted\">{{ heroe.aparicion }}</small></p!-->\r\n\r\n        <button (click)=\"verCelular(celular.id)\" type=\"button\" class=\"btn btn-outline-danger btn-block\">Ver mas...</button>\r\n        <!--<a [routerLink]=\"['/celular', i]\" class=\"btn btn-outline-primary\">Ver mas link....</a>-->\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<img src=\"assets/img/apple.png\" class=\"\" width=\"200\" alt=\"\">\r\n<hr style=\"border: 1px solid; color: #D11B1B\">\r\n\r\n<div class=\"card-deck\">\r\n\r\n  <div class=\"card animated fadeIn fast\" style=\"border-width:3px; border-color: navajowhite  ;max-width: 250px; max-height: 500px\" *ngFor=\"let celular of celularesApple, let i = index\">\r\n    <div *ngIf = \"celular.marca == 'Apple'\">\r\n\r\n      <img [src]=\"celular.img\" class=\"card-img-top\" [alt]=\"celular.nombre\">\r\n      <div class=\"card-body text-center\">\r\n        <h5 class=\"card-title\">{{ celular.nombre }}</h5>\r\n        <p class=\"card-text\">${{ celular.precio }}</p>\r\n        <!--p class=\"card-text\"><small class=\"text-muted\">{{ heroe.aparicion }}</small></p!-->\r\n\r\n        <button (click)=\"verCelular(celular.id)\" type=\"button\" class=\"btn btn-outline-danger btn-block\">Ver mas...</button>\r\n        <!--<a [routerLink]=\"['/celular', i]\" class=\"btn btn-outline-primary\">Ver mas link....</a>-->\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<img src=\"assets/img/xiaomi.png\" class=\"mt-2\" width=\"200\" alt=\"\">\r\n<hr style=\"border: 1px solid; color: #D11B1B\">\r\n\r\n\r\n\r\n<div class=\"d-flex flex-wrap align-content-around\">\r\n\r\n  <div class=\"card animated fadeIn fast cards\" style=\"border-width:3px; border-color: navajowhite;max-width: 250px; max-height: 500px\" *ngFor=\"let celular of celularesXiaomi, let i = index\">\r\n    <div *ngIf = \"celular.marca == 'Xiaomi'\">\r\n\r\n      <img [src]=\"celular.img\" class=\"card-img-top \" [alt]=\"celular.nombre\">\r\n      <div class=\"card-body text-center\">\r\n        <h5 class=\"card-title\">{{ celular.nombre }}</h5>\r\n        <p class=\"card-text\">${{ celular.precio }}</p>\r\n        <!--p class=\"card-text\"><small class=\"text-muted\">{{ heroe.aparicion }}</small></p!-->\r\n\r\n        <button (click)=\"verCelular(celular.id)\" type=\"button\" class=\"btn btn-outline-danger btn-block vermas\">Ver mas...</button>\r\n        <!--<a [routerLink]=\"['/celular', i]\" class=\"btn btn-outline-primary\">Ver mas link....</a>-->\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<img src=\"assets/img/motorola.png\" class=\"\" width=\"200\" alt=\"\">\r\n<hr style=\"border: 1px solid; color: #D11B1B\">\r\n\r\n\r\n\r\n<div class=\"d-flex flex-wrap align-content-around\">\r\n\r\n  <div class=\"card animated fadeIn fast cards\" style=\"border-width:3px; border-color: navajowhite;max-width: 250px; max-height: 500px;\" *ngFor=\"let celular of celularesMotorola, let i = index\">\r\n    <div *ngIf = \"celular.marca == 'Motorola'\">\r\n\r\n      <img [src]=\"celular.img\" class=\"card-img-top\" alt=\"celular.nombre\">\r\n      <div class=\"card-body text-center\">\r\n        <h5 class=\"card-title\">{{ celular.nombre }}</h5>\r\n        <p class=\"card-text\">${{ celular.precio }}</p>\r\n        <!--p class=\"card-text\"><small class=\"text-muted\">{{ heroe.aparicion }}</small></p!-->\r\n\r\n        <button (click)=\"verCelular(celular.id)\" type=\"button\" class=\"btn btn-outline-danger btn-block\">Ver mas...</button>\r\n        <!--<a [routerLink]=\"['/celular', i]\" class=\"btn btn-outline-primary\">Ver mas link....</a>-->\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <img src=\"/assets/img/Banner.jpg\" alt=\"...\" class=\"img-fluid d-block shadow\" align=\"\" width=\"100%\">\r\n</div>\r\n<app-celulares></app-celulares>\r\n<div align=\"center\">\r\n  <a href=\"https://www.instagram.com/master___phone/\">\r\n    <img src=\"assets/img/ig.png\" alt=\"\" width=\"100\">\r\n  </a>\r\n  <a href=\"https://www.facebook.com/Master-Phone-100525318017521/\">\r\n    <img src=\"assets/img/facebook.png\" alt=\"\" width=\"100\">\r\n  </a>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<nav class=\"navbar navbar-expand-lg navbar-dark static-top shadow-lg\" style=\"background-color: #D11B1B\">\r\n  <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"#\">\r\n      <img src=\"/assets/img/A-64.png\" width=\"60\" height=\"60\" class=\" align-top\" alt=\"\">\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n     <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link font-weight-bold\" [routerLink]=\"['']\">Home</a>\r\n        </li>\r\n       <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link font-weight-bold\" [routerLink]=\"['about']\">¿Quienes somos?</a>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'spa';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
            /* harmony import */ var _servicios_celulares_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servicios/celulares.service */ "./src/app/servicios/celulares.service.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
            /* harmony import */ var _components_celulares_celulares_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/celulares/celulares.component */ "./src/app/components/celulares/celulares.component.ts");
            /* harmony import */ var _components_celular_celular_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/celular/celular.component */ "./src/app/components/celular/celular.component.ts");
            /* harmony import */ var _components_busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/busqueda/busqueda.component */ "./src/app/components/busqueda/busqueda.component.ts");
            // Rutas
            // Servicios
            // Componentes
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                        _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                        _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                        _components_celulares_celulares_component__WEBPACK_IMPORTED_MODULE_9__["CelularesComponent"],
                        _components_celular_celular_component__WEBPACK_IMPORTED_MODULE_10__["CelularComponent"],
                        _components_busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_11__["BusquedaComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routes__WEBPACK_IMPORTED_MODULE_3__["APP_ROUTING"]
                    ],
                    providers: [_servicios_celulares_service__WEBPACK_IMPORTED_MODULE_4__["CelularesService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/app.routes.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.routes.ts ***!
          \*******************************/
        /*! exports provided: APP_ROUTING */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function () { return APP_ROUTING; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_celulares_celulares_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/celulares/celulares.component */ "./src/app/components/celulares/celulares.component.ts");
            /* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
            /* harmony import */ var _components_celular_celular_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/celular/celular.component */ "./src/app/components/celular/celular.component.ts");
            /* harmony import */ var _components_busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/busqueda/busqueda.component */ "./src/app/components/busqueda/busqueda.component.ts");
            var APP_ROUTES = [
                { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
                { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
                { path: 'celulares', component: _components_celulares_celulares_component__WEBPACK_IMPORTED_MODULE_3__["CelularesComponent"] },
                { path: 'celular/:id', component: _components_celular_celular_component__WEBPACK_IMPORTED_MODULE_5__["CelularComponent"] },
                { path: 'busqueda/:termino', component: _components_busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_6__["BusquedaComponent"] },
                { path: '**', pathMatch: 'full', redirectTo: '' }
            ];
            var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(APP_ROUTES);
            /***/ 
        }),
        /***/ "./src/app/components/about/about.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/about/about.component.ts ***!
          \*****************************************************/
        /*! exports provided: AboutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function () { return AboutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutComponent = /** @class */ (function () {
                function AboutComponent() {
                }
                AboutComponent.prototype.ngOnInit = function () {
                };
                return AboutComponent;
            }());
            AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
                })
            ], AboutComponent);
            /***/ 
        }),
        /***/ "./src/app/components/busqueda/busqueda.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/components/busqueda/busqueda.component.ts ***!
          \***********************************************************/
        /*! exports provided: BusquedaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusquedaComponent", function () { return BusquedaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _servicios_celulares_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/celulares.service */ "./src/app/servicios/celulares.service.ts");
            var BusquedaComponent = /** @class */ (function () {
                function BusquedaComponent(activatedRoute, heroesService) {
                    this.activatedRoute = activatedRoute;
                    this.heroesService = heroesService;
                    this.heroes = [];
                }
                BusquedaComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.activatedRoute.params.subscribe(function (params) {
                        _this.termino = params.termino;
                        _this.heroes = _this.heroesService.buscarHeroes(params.termino);
                    });
                };
                return BusquedaComponent;
            }());
            BusquedaComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _servicios_celulares_service__WEBPACK_IMPORTED_MODULE_3__["CelularesService"] }
            ]; };
            BusquedaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-busqueda',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./busqueda.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/busqueda/busqueda.component.html")).default,
                })
            ], BusquedaComponent);
            /***/ 
        }),
        /***/ "./src/app/components/celular/celular.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/components/celular/celular.component.ts ***!
          \*********************************************************/
        /*! exports provided: CelularComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelularComponent", function () { return CelularComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _servicios_celulares_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/celulares.service */ "./src/app/servicios/celulares.service.ts");
            var CelularComponent = /** @class */ (function () {
                function CelularComponent(activatedRoute, celularesService, router) {
                    var _this = this;
                    this.activatedRoute = activatedRoute;
                    this.celularesService = celularesService;
                    this.router = router;
                    this.celulares = [];
                    this.activatedRoute.params.subscribe(function (params) {
                        _this.celular = _this.celularesService.getCelular(params['id']);
                    });
                    this.celulares = this.celularesService.getCelulares(this.celular.marca, this.celular.id);
                }
                CelularComponent.prototype.ngOnInit = function () {
                };
                CelularComponent.prototype.verCelular = function (idx) {
                    this.celulares = this.celularesService.getCelulares(this.celular.marca, idx);
                    this.router.navigate(['/celular', idx]);
                    window.scroll(0, 0);
                };
                return CelularComponent;
            }());
            CelularComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _servicios_celulares_service__WEBPACK_IMPORTED_MODULE_3__["CelularesService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            CelularComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-celular',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./celular.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/celular/celular.component.html")).default,
                })
            ], CelularComponent);
            /***/ 
        }),
        /***/ "./src/app/components/celulares/celulares.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/components/celulares/celulares.component.ts ***!
          \*************************************************************/
        /*! exports provided: CelularesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelularesComponent", function () { return CelularesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _servicios_celulares_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/celulares.service */ "./src/app/servicios/celulares.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CelularesComponent = /** @class */ (function () {
                // tslint:disable-next-line:variable-name
                function CelularesComponent(celularesService, router) {
                    this.celularesService = celularesService;
                    this.router = router;
                    this.celularesApple = [];
                    this.celularesSamsung = [];
                    this.celularesXiaomi = [];
                    this.celularesMotorola = [];
                }
                CelularesComponent.prototype.ngOnInit = function () {
                    this.celularesApple = this.celularesService.getCelularesApple();
                    this.celularesSamsung = this.celularesService.getCelularesSamsung();
                    this.celularesXiaomi = this.celularesService.getCelularesXiaomi();
                    this.celularesMotorola = this.celularesService.getCelularesMotorola();
                    // console.log(this.celulares);
                };
                CelularesComponent.prototype.verCelular = function (idx) {
                    window.scroll(0, 0);
                    // console.log(idx);
                    this.router.navigate(['/celular', idx]);
                };
                return CelularesComponent;
            }());
            CelularesComponent.ctorParameters = function () { return [
                { type: _servicios_celulares_service__WEBPACK_IMPORTED_MODULE_2__["CelularesService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            CelularesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-celulares',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./celulares.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/celulares/celulares.component.html")).default,
                })
            ], CelularesComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/components/home/home.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/home/home.component.ts ***!
          \***************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/components/shared/navbar/navbar.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
          \**************************************************************/
        /*! exports provided: NavbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () { return NavbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var NavbarComponent = /** @class */ (function () {
                function NavbarComponent(router) {
                    this.router = router;
                }
                NavbarComponent.prototype.ngOnInit = function () {
                };
                NavbarComponent.prototype.buscarHeroe = function (termino) {
                    this.router.navigate(['/busqueda', termino]);
                };
                return NavbarComponent;
            }());
            NavbarComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html")).default,
                })
            ], NavbarComponent);
            /***/ 
        }),
        /***/ "./src/app/servicios/celulares.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/servicios/celulares.service.ts ***!
          \************************************************/
        /*! exports provided: CelularesService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelularesService", function () { return CelularesService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CelularesService = /** @class */ (function () {
                function CelularesService() {
                    // @ts-ignore
                    // @ts-ignore
                    this.celulares = [
                        // Apple
                        {
                            id: '1',
                            nombre: 'iPhone 7 plus',
                            // tslint:disable-next-line:max-line-length
                            desc: 'El Apple iPhone 7 Plus mejora las características del iPhone 6S Plus con una cámara dual de 12 MP que permite realizar diferentes efectos de profundidad de campo, e incorpora un zoom óptico 2X y hasta 10x de zoom digital. Sigue conservando la pantalla de 5.5 pulgadas pero mejorada en su gama de colores. El iPhone 7 cuenta con un procesador A10 Fusion de Apple más veloz y de cuatro núcleos, que permite un mejor rendimiento de batería, un botón de inicio 3D Touch, y es resistente al agua. Su cámara frontal ha sido mejorada a una de 7 MP con captura de video Full HD.',
                            marca: 'Apple',
                            img: '/assets/img/apple/7-plus/1.png',
                            precio: '40.142',
                            precioCuotas: 54990,
                            spec: '/assets/img/apple/7-plus/spec.png'
                        },
                        {
                            id: '12',
                            nombre: 'iPhone 8 64gb',
                            // tslint:disable-next-line:max-line-length
                            desc: 'El Apple iPhone 8 es la nueva edición del iPhone para el 2017, salteando la serie S del iPhone 7. Esta vez, el iPhone 8 cuenta con un panel trasero de vidrio, que habilita el soporte para carga inalámbrica. La pantalla se mantiene en 4.7 pulgadas, con la misma resolución Retina HD, pero incorpora soporte HDR10 y Dolby Vision. Por dentro del iPhone 8, encontramos un nuevo procesador A11 Bionic, una nueva cámara de 12 MP con captura de video 4K a 60fps, cámara FaceTime de 7 MP, Touch ID en el botón de inicio y una duración de batería con la misma duración que en el iPhone 7.',
                            marca: 'Apple',
                            img: '/assets/img/apple/iphone-8/1.jpg',
                            precio: '44.000',
                            precioCuotas: 57000,
                            spec: '/assets/img/apple/iphone-8/spec.png'
                        },
                        {
                            id: '13',
                            nombre: 'iPhone 8 Plus 64gb',
                            // tslint:disable-next-line:max-line-length
                            desc: 'El Apple iPhone 8 Plus conserva la misma pantalla de su antecesor, con 5.5 pulgadas a resolución Full HD, con un nuevo diseño que combina aluminio con vidrio adelante y atrás. Por dentro, el iPhone 8 Plus está potenciado por el nuevo procesador A11 Bionic. El iPhone 8 Plus vuelve a contar con una cámara dual de 12 MP, con zoom óptico 2X, y aperturas combinables para efectos de fotografía y slow motion en 1080p y agrega soporte para carga inalámbrica en su batería con el mismo rendimiento que en el iPhone 7 Plus.',
                            marca: 'Apple',
                            img: '/assets/img/apple/iphone-8-plus/1.jpg',
                            precio: '55.500',
                            precioCuotas: 73500,
                            spec: '/assets/img/apple/iphone-8-plus/spec.png'
                        },
                        {
                            id: '21',
                            nombre: 'iPhone 11 64gb',
                            // tslint:disable-next-line:max-line-length
                            desc: 'El Apple iPhone 11 es el sucesor del iPhone Xr para el 2019. Este año el iPhone 11 llega con una pantalla de 6.1 pulgadas con resolución Liquid Retina y potenciado por un procesador Apple A13 Bionic con 64GB, 128GB o 256GB de almacenamiento interno. La cámara posterior del iPhone 11 ahora es dual, con un lente regular de 12 MP y otro gran angular de 12 MP, mientras que su cámara frontal es de 12 MP. El iPhone 11 cuenta con una batería de 3110 mAh con carga rápida, parlantes stereo con sonido Dolby Atmos, carga inalámbrica y utiliza reconocimiento de rostro Face ID para seguridad.',
                            marca: 'Apple',
                            img: '/assets/img/apple/iphone-11/1.jpg',
                            precio: '65.000',
                            precioCuotas: 89000,
                            spec: '/assets/img/apple/iphone-11/spec.png'
                        },
                        // Samsung
                        {
                            id: '17',
                            nombre: 'Samsung J8 32gb',
                            // tslint:disable-next-line:max-line-length
                            desc: 'El Samsung Galaxy J8 cuenta con una pantalla HD+ de 6 pulgadas, procesador Snapdragon 450 con 3GB de RAM y 32GB de almacenamiento interno o 4GB de RAM y 64GB de almacenamiento, cámara dual de 16 MP + 5 MP, cámara frontal de 16 MP, lector de huellas, batería de 3500 mAh y corre Android 8.0 Oreo.',
                            marca: 'Samsung',
                            img: '/assets/img/samsung/j8/1.jpg',
                            precio: '18.000',
                            precioCuotas: 25000,
                            spec: '/assets/img/samsung/j8/spec.png'
                        },
                        {
                            id: '2',
                            nombre: 'Samsung Galaxy A2 CORE 16GB',
                            // tslint:disable-next-line:max-line-length
                            desc: 'El Samsung Galaxy A2 Core SM-A260F/DS es un móvil Android bueno con procesador de 1.6Ghz Octa-Core que permite ejecutar juegos y aplicaciones pesadas. Una ventaja del Samsung Galaxy A2 Core SM-A260F/DS es la capacidad de utilizar dos operadores móvil, un terminal Doble-SIM con dos ranuras para tarjetas SIM. Buena conectividad de este terminal que incluye Bluetooth Versión 4.2 con A2DP, WiFi 802.11 b/g/n (2.4Ghz), pero carece de conexión NFC.',
                            marca: 'Samsung',
                            img: '/assets/img/samsung/a2-core/1.jpg',
                            precio: '10.000',
                            precioCuotas: 12000,
                            spec: '/assets/img/samsung/a2-core/spec.png'
                        },
                        {
                            id: '14',
                            nombre: 'Samsung A20 32gb',
                            // tslint:disable-next-line:max-line-length
                            desc: 'El Samsung Galaxy A20 completa la gama Galaxy Ax entre el Galaxy A10 y el Galaxy A30. Con una pantalla Infinity-V HD+ de 6.4 pulgadas, el Galaxy A20 está potenciado por un procesador Exynos 7884 de ocho núcleos, con 3GB de memoria RAM y 32GB de almacenamiento interno. La cámara principal del Galaxy A20 es dual de 13 MP + 5 MP y la cámara para selfies es de 8 megapixels. Completando sus características, el Galaxy A20 tiene una gran batería de 4000 mAh con carga rápida, lector de huellas, y corre Android 9.0 Pie',
                            marca: 'Samsung',
                            img: '/assets/img/samsung/a20/1.jpg',
                            precio: '15.200',
                            precioCuotas: 20500,
                            spec: '/assets/img/samsung/a20/spec.png'
                        },
                        {
                            id: '3',
                            nombre: 'Samsung Galaxy A30 32GB',
                            // tslint:disable-next-line:max-line-length
                            desc: 'El Samsung Galaxy A30 SM-A305G 32GB es un móvil Android bueno con procesador de 1.8Ghz Octa-Core que permite ejecutar juegos y aplicaciones pesadas. Con una ranura para tarjeta SIM, el Samsung Galaxy A30 SM-A305G 32GB permite download hasta 600 Mbps para la navegación por Internet, pero esto también depende del operador móvil. Buena conectividad de este terminal que incluye Bluetooth Versión 5.0 con A2DP/LE, WiFi 802.11 a/b/g/n/ac + MIMO (2.4Ghz, 5Ghz), pero carece de conexión NFC.',
                            marca: 'Samsung',
                            img: '/assets/img/samsung/a30/1.jpg',
                            precio: '18.000',
                            precioCuotas: 22000,
                            spec: '/assets/img/samsung/a30/spec.png'
                        },
                        {
                            id: '4',
                            nombre: 'Samsung Galaxy A50 128GB',
                            // tslint:disable-next-line:max-line-length
                            desc: 'El Samsung Galaxy A50 SM-A505F 128GB es un móvil Android bueno con procesador de 2.3Ghz Octa-Core que permite ejecutar juegos y aplicaciones pesadas. Con una ranura para tarjeta SIM, el Samsung Galaxy A50 SM-A505F 128GB permite download hasta 600 Mbps para la navegación por Internet, pero esto también depende del operador móvil. Buena conectividad de este terminal que incluye Bluetooth Versión 5.0 con A2DP/LE, WiFi 802.11 a/b/g/n/ac + MIMO (2.4Ghz, 5Ghz), pero carece de conexión NFC. Incluyendo la batería, el móvil Samsung Galaxy A50 SM-A505F 128GB tiene 166 gramos y es un terminal muy delgado con solamente 7,7 mm.',
                            marca: 'Samsung',
                            img: '/assets/img/samsung/a50/1.jpg',
                            precio: '25.500',
                            precioCuotas: 29999,
                            spec: '/assets/img/samsung/a50/spec.png'
                        },
                        {
                            id: '15',
                            nombre: 'Samsung A70 128gb',
                            // tslint:disable-next-line:max-line-length
                            desc: 'El Samsung Galaxy A70 completa la serie Galaxy A del 2019. Con una pantalla Full HD+ de 6.7 pulgadas, el Galaxy A70 está potenciado por un procesador octa-core a 2GHz con 6GB o 8GB de memoria RAM y 128GB de almacenamiento interno. La cámara principal del Galaxy A70 es triple, en configuración 24MP + 8MP + 5MP, y su cámara para selfies es de 32MP. Completando sus características, el Galaxy A70 tiene lector de huellas embebido en pantalla, batería de 4500 mAh de carga rápida, puerto USB-C, y corre Android 9.0 Pie.',
                            marca: 'Samsung',
                            img: '/assets/img/samsung/a70/1.jpg',
                            precio: '31.600',
                            precioCuotas: 43100,
                            spec: '/assets/img/samsung/a70/spec.png'
                        },
                        {
                            id: '16',
                            nombre: 'Samsung A80 128gb',
                            // tslint:disable-next-line:max-line-length
                            desc: 'El Samsung Galaxy A80 es un nuevo integrante de la renovada serie Galaxy A de Samsung. El Galaxy A80 llega con una cámara pop-up motorizada que revela tres sensores: 48 MP + 8 MP + TOF 3D. Esta cámara además es rotativa y funciona también como cámara para selfies frontal. Con una pantalla Super AMOLED de 6.7 pulgadas a resolución Full HD+, el Galaxy A80 cuenta con un procesador octa-core a 2.2GHz, acompañado de 8GB de memoria RAM y 128GB de almacenamiento interno no expandible. El Samsung Galaxy A80 completa sus características con una batería de 3700 mAh de carga rápida, lector de huellas embebido en pantalla, y Android 9.0 Pie a bordo.',
                            marca: 'Samsung',
                            img: '/assets/img/samsung/a80/1.jpg',
                            precio: '39.800',
                            precioCuotas: 53800,
                            spec: '/assets/img/samsung/a80/spec.png'
                        },
                        {
                            id: '5',
                            nombre: 'Samsung Galaxy S8 plus 64Gb',
                            // tslint:disable-next-line:max-line-length
                            desc: 'El Samsung Galaxy S8+ es la versión de pantalla más grande del Galaxy S8, con una pantalla Infinity Super AMOLED dual-edge de 6.2 pulgadas y resolución QHD+, procesador Snapdragon 835 o Exynos 8895, 4GB de RAM, 64GB de almacenamiento interno, resistencia al agua IP68, carga inalámbrica, cámara Dual Pixel de 12 megapixels, cámara frontal de 8 megapixels con autofocus, lector de huellas dactilares, lector de iris, batería de 3500 mAh con soporte para carga inalámbrica, asistente inteligente Bixby y Android 7.0 Nougat.',
                            marca: 'Samsung',
                            img: '/assets/img/samsung/s8-plus/1.jpg',
                            precio: '31.290',
                            precioCuotas: 43900,
                            spec: '/assets/img/samsung/s8-plus/spec.png'
                        },
                        // Xiaomi
                        {
                            id: '7',
                            nombre: 'Xiaomi Note 6 Pro 64gb',
                            // tslint:disable-next-line:max-line-length
                            desc: 'El Xiaomi Redmi Note 6 Pro es la variante con pantalla más grande del Redmi 6 Pro. Con una pantalla de 6.26 pulgadas a resolución Full HD+, el Redmi Note 6 Pro está potenciado por un procesador Snapdragon 636 de ocho núcleos, con configuraciones de 3GB de memoria RAM y 32GB de almacenamiento o 4GB de memoria RAM y 64GB de memoria interna. El Redmi Note 6 Pro tiene cámaras duales tanto al frente como atrás. Al frente, su cámara para selfies es de 20 MP + 2 MP, mientras que atrás su cámara es 12 MP + 5 MP. Completando sus características, el Redmi Note 6 Pro tiene lector de huellas, batería de 4000 mAh con carga rápida, y corre MIUI 9.',
                            marca: 'Xiaomi',
                            img: '/assets/img/xiaomi/note6-pro/1.jpg',
                            precio: '14.749',
                            precioCuotas: 19629,
                            spec: '/assets/img/xiaomi/note6-pro/spec.png'
                        },
                        {
                            id: '9',
                            nombre: 'Xiaomi Redmi Note 8 64gb',
                            // tslint:disable-next-line:max-line-length
                            desc: 'El Xiaomi Redmi Note 8 marca la octava generación de la serie Redmi Note, esta vez con una pantalla Full HD+ de 6.3 pulgadas y potenciado por un procesador Snapdragon 665 de ocho núcleos. Con opciones de 4GB de memoria RAM y 64GB de almacenamiento, 6GB de RAM y 64GB de almacenamiento o 6GB de RAM y 128GB de almacenamiento, el Redmi Note 8 cuenta con una cámara cuádruple en su posterior de 48 MP + 8 MP + 2 MP + 2 MP, y su cámara para selfies es de 13 megapixels. El Redmi Note 8 completa sus características con una batería de 4000 mAh con soporte para carga rápida, lector de huellas montado en su parte posterior, resistencia a salpicaduras y corre MIUI 10 basado en Android 9.0 Pie.',
                            marca: 'Xiaomi',
                            img: '/assets/img/xiaomi/note8/1.jpg',
                            precio: '17.280',
                            precioCuotas: 24800,
                            spec: '/assets/img/xiaomi/note8/spec.png'
                        },
                        {
                            id: '6',
                            nombre: 'Xiaomi Mi A3 64gb',
                            // tslint:disable-next-line:max-line-length
                            desc: 'El Xiaomi Mi A3 es la tercera generación de la serie A con la misma filosofía que sus predecesores: actualizaciones directas de Google gracias al programa Android One y un precio competitivo. En cuanto al hardware, encontramos en el Xiaomi Mi A3 una pantalla AMOLED de 6.01 pulgadas a resolución HD+. Considerando que sus predecesores contaban con resolución 1080p, esto cuenta como downgrade. Por dentro del Xiaomi Mi A3 tenemos un procesador Snapdragon 665 de ocho núcleos acompañado de 4GB de memoria RAM con opciones de 64GB o 128GB de almacenamiento interno expandible. El Mi A3 se luce con su cámara posterior triple de 48 MP + 8 MP + 2 MP, y su cámara para selfies de 32 MP. Completando sus especificaciones, el Xiaomi Mi A3 cuenta con una batería de 4030 mAh con soporte de carga rápida, lector de huellas integrado bajo la pantalla, radio FM y Android 9.0 Pie.',
                            marca: 'Xiaomi',
                            img: '/assets/img/xiaomi/mi-a3/1.jpg',
                            precio: '17.990',
                            precioCuotas: 22590,
                            spec: '/assets/img/xiaomi/mi-a3/spec.png'
                        },
                        {
                            id: '8',
                            nombre: 'Xiaomi Note 7 64gb',
                            // tslint:disable-next-line:max-line-length
                            desc: 'El Xiaomi Redmi Note 7 es el nuevo miembro de la serie Redmi Note, esta vez con una impresionante cámara dual de 48 MP + 5 MP. Potenciado por un procesador Qualcomm Snapdragon 660 de ocho núcleos, el Redmi Note 7 está disponible con 3GB de RAM y 32GB de almacenamiento o bien 4GB o 6GB de RAM con 64GB de almacenamiento, con una pantalla Full HD+ de 6.3 pulgadas con notch en forma de gota de agua. Con una batería de 4000 mAh con carga rápida, el Redmi Note 7 completa sus características con un lector de huellas posterior, infrarrojo, puerto USB-C, cámara frontal de 13 MP y MIUI 10 basado en Android 9.0 Pie.',
                            marca: 'Xiaomi',
                            img: '/assets/img/xiaomi/note7/1.jpg',
                            precio: '18.499',
                            precioCuotas: 23960,
                            spec: '/assets/img/xiaomi/note7/spec.png'
                        },
                        // Motorola
                        {
                            id: '22',
                            nombre: 'Motorola E6 Plus',
                            // tslint:disable-next-line:max-line-length
                            desc: 'El Motorola Moto E6 Plus es la variante más poderosa de la serie Moto E6, con una pantalla HD+ de 6.1 pulgadas y potenciado por un procesador Mediatek Helio P22 acompañado de opciones de 4GB de memoria RAM y 64GB de almacenamiento o 2GB de memoria RAM con 32GB de almacenamiento interno. En cuanto a cámaras, el Moto E6 Plus tiene una cámara trasera dual de 13 MP + 2 MP, y una cámara frontal de 8 MP. El Moto E6 Plus completa sus características con una batería de 3000 mAh, lector de huellas y corre Android 9.0 Pie.',
                            marca: 'Motorola',
                            img: '/assets/img/motorola/e6-plus/1.jpg',
                            precio: '12.800',
                            precioCuotas: 16800,
                            spec: '/assets/img/motorola/e6-plus/spec.png'
                        },
                        {
                            id: '10',
                            nombre: 'Motorola E6 PLAY 2GB',
                            // tslint:disable-next-line:max-line-length
                            desc: 'Buen móvil Android con procesador de 1.5Ghz Quad-Core que proporciona un buen rendimiento y una buena fluidez del sistema operativo del Motorola Moto E6 Play (XT2029-2). Con una ranura para tarjeta SIM, el Motorola Moto E6 Play (XT2029-2) permite download hasta 150 Mbps para la navegación por Internet, pero esto también depende del operador móvil. Buena conectividad de este terminal que incluye Bluetooth Versión 4.2 con A2DP, WiFi 802.11 b/g/n (2.4Ghz), pero carece de conexión NFC. Incluyendo la batería, el móvil Motorola Moto E6 Play (XT2029-2) tiene 140 gramos y es un terminal muy delgado con solamente 8,3 mm.',
                            marca: 'Motorola',
                            img: '/assets/img/motorola/e6-play/1.jpg',
                            precio: '13.000',
                            precioCuotas: 15900,
                            spec: '/assets/img/motorola/e6-play/spec.png'
                        },
                        {
                            id: '23',
                            nombre: 'Motorola G5s Plus',
                            // tslint:disable-next-line:max-line-length
                            desc: 'El Motorola Moto G5S Plus mejora marginalmente al Moto G5S con algunas ligeras diferencias como una pantalla Full HD de 5.5 pulgadas, procesador Snapdragon 625 octa-core, cámara dual de 13 MP y batería de 3000 mAh, con variantes de 3GB o 4GB de RAM y 32GB o 64GB de almacenamiento, lector de huellas dactilares, y Android 7.1.1 Nougat actualizable a Android 8.0 Oreo.',
                            marca: 'Motorola',
                            img: '/assets/img/motorola/g5s/1.jpg',
                            precio: '12.900',
                            precioCuotas: 16900,
                            spec: '/assets/img/motorola/g5s/spec.png'
                        },
                        {
                            id: '19',
                            nombre: 'Motorola G7 Power 32gb',
                            // tslint:disable-next-line:max-line-length
                            desc: 'El Motorola Moto G7 Power es la variante de gran batería de la serie Moto G7. Con una batería de 5000 mAh, el Moto G7 Power promete hasta 3 días de uso continuo. En cuanto a características, el Moto G7 Power tiene una pantalla HD+ de 6.2 pulgadas, con el mismo Snapdragon 632 de ocho núcleos pero esta vez con 3GB de memoria RAM y 32GB de almacenamiento. En cuanto a cámaras, el Moto G7 Power cuenta con una de 12 MP en su posterior, mientras que al frente es de 8 MP. El Moto G7 Power completa sus características con lector de huellas en su posterior, puerto USB-C y Android 9.0 Pie.',
                            marca: 'Motorola',
                            img: '/assets/img/motorola/g7/1.jpg',
                            precio: '15.300',
                            precioCuotas: 20300,
                            spec: '/assets/img/motorola/g7/spec.png'
                        },
                        {
                            id: '24',
                            nombre: 'Motorola G7 Plus',
                            // tslint:disable-next-line:max-line-length
                            desc: 'El Motorola Moto G7 Plus mejora al Moto G7 en algunos aspectos clave. Manteniendo la pantalla Full HD+ de 6.2 pulgadas, el Moto G7 Plus está potenciado por un procesador Snapdragon 636 octa-core, con 4GB de RAM y 64GB de almacenamiento interno expandible. La cámara del Moto G7 Plus es dual de 16 MP + 5 MP, y su cámara para selfies es de 12 MP. Con parlantes stereo y sonido Dolby, el Moto G7 Plus también tiene una batería de 3000 mAh, pero esta vez con carga de 27W con el protocolo Quick Charge 4.0 de Qualcomm, lector de huellas posterior, puerto USB-C y corre Android 9.0 Pie.',
                            marca: 'Motorola',
                            img: '/assets/img/motorola/g7-plus/1.jpg',
                            precio: '20.500',
                            precioCuotas: 27500,
                            spec: '/assets/img/motorola/g7-plus/spec.png'
                        },
                        {
                            id: '11',
                            nombre: 'Motorola G8 PLAY 32GB',
                            // tslint:disable-next-line:max-line-length
                            desc: 'El Motorola Moto G8 Play (XT2015-2) es un móvil Android bueno con procesador de 2Ghz Octa-Core que permite ejecutar juegos y aplicaciones pesadas. Una ventaja del Motorola Moto G8 Play (XT2015-2) es la capacidad de utilizar dos operadores móvil, un terminal Doble-SIM con dos ranuras para tarjetas SIM. Buena conectividad de este terminal que incluye Bluetooth Versión 4.2 con A2DP, WiFi 802.11 b/g/n (2.4Ghz), pero carece de conexión NFC. Incluyendo la batería, el móvil Motorola Moto G8 Play (XT2015-2) tiene 184 gramos y es un terminal muy delgado con solamente 9 mm.',
                            marca: 'Motorola',
                            img: '/assets/img/motorola/g8-play/1.jpg',
                            precio: '17.900',
                            precioCuotas: 22000,
                            spec: '/assets/img/motorola/g8-play/spec.png'
                        },
                        {
                            id: '18',
                            nombre: 'Motorola ONE 64gb',
                            // tslint:disable-next-line:max-line-length
                            desc: 'El Motorola One es un smartphone parte del programa Android One de Google y recibirá Android 9.0 Pie poco después de llegar al mercado. El Motorola One cuenta con una pantalla HD+ de 5.9 pulgadas y está potenciado por un procesador Snapdragon 625 con 4GB de RAM y 64GB de almacenamiento interno. En su posterior su ubica una cámara dual de 13 MP + 2 MP, mientras que una cámara de 8 megapixels se encarga de las selfies. El Motorola One completa sus características con radio FM, puerto USB-C, lector de huellas y una batería de 3000 mAh con soporte de carga rápida.',
                            marca: 'Motorola',
                            img: '/assets/img/motorola/one/1.jpg',
                            precio: '16.280',
                            precioCuotas: 22800,
                            spec: '/assets/img/motorola/one/spec.png'
                        },
                        {
                            id: '20',
                            nombre: 'Motorola Z3 Play 64gb',
                            // tslint:disable-next-line:max-line-length
                            desc: 'El Motorola Moto Z3 Play llega como la tercera generación de la serie Moto Z, manteniendo la posibilidad de utilizar accesorios Moto Mod. El Moto Z3 Play tiene una pantalla Super AMOLED de 6.01 pulgadas a 1080 x 2160 pixels de resolución, procesador Snapdragon 636 con 4GB de RAM y 32GB o 64GB de almacenamiento, cámara dual de 12 MP + 5 MP con PDAF, batería de 3000 mAh, lector de huellas y Android 8.1 Oreo.',
                            marca: 'Motorola',
                            img: '/assets/img/motorola/z3/1.jpg',
                            precio: '21.000',
                            precioCuotas: 28000,
                            spec: '/assets/img/motorola/z3/spec.png'
                        }
                    ];
                }
                CelularesService.prototype.costructor = function () {
                };
                CelularesService.prototype.getCelularesApple = function () {
                    var celularesApple = [];
                    for (var _i = 0, _a = this.celulares; _i < _a.length; _i++) {
                        var celular = _a[_i];
                        var marca = celular.marca;
                        if (marca === 'Apple') {
                            celularesApple.push(celular);
                        }
                    }
                    return celularesApple;
                };
                CelularesService.prototype.getCelularesSamsung = function () {
                    var celularesSamsung = [];
                    for (var _i = 0, _a = this.celulares; _i < _a.length; _i++) {
                        var celular = _a[_i];
                        var marca = celular.marca;
                        if (marca === 'Samsung') {
                            celularesSamsung.push(celular);
                        }
                    }
                    return celularesSamsung;
                };
                CelularesService.prototype.getCelularesXiaomi = function () {
                    var celularesXiaomi = [];
                    for (var _i = 0, _a = this.celulares; _i < _a.length; _i++) {
                        var celular = _a[_i];
                        var marca = celular.marca;
                        if (marca === 'Xiaomi') {
                            celularesXiaomi.push(celular);
                        }
                    }
                    return celularesXiaomi;
                };
                CelularesService.prototype.getCelularesMotorola = function () {
                    var celularesMotorola = [];
                    for (var _i = 0, _a = this.celulares; _i < _a.length; _i++) {
                        var celular = _a[_i];
                        var marca = celular.marca;
                        if (marca === 'Motorola') {
                            celularesMotorola.push(celular);
                        }
                    }
                    return celularesMotorola;
                };
                CelularesService.prototype.getCelular = function (idx) {
                    for (var _i = 0, _a = this.celulares; _i < _a.length; _i++) {
                        var celular = _a[_i];
                        if (celular.id === idx) {
                            return celular;
                        }
                    }
                    // return this.celulares[idx];
                };
                CelularesService.prototype.buscarHeroes = function (termino) {
                    var heroesArr = [];
                    termino = termino.toLowerCase();
                    for (var _i = 0, _a = this.celulares; _i < _a.length; _i++) {
                        var heroe = _a[_i];
                        var nombre = heroe.nombre.toLowerCase();
                        if (nombre.indexOf(termino) >= 0) {
                            heroesArr.push(heroe);
                        }
                    }
                    return heroesArr;
                };
                CelularesService.prototype.getCelulares = function (marca, id) {
                    var celularesReturn = [];
                    for (var _i = 0, _a = this.celulares; _i < _a.length; _i++) {
                        var celular = _a[_i];
                        if (celular.marca === marca && celular.id !== id) {
                            celularesReturn.push(celular);
                        }
                    }
                    return celularesReturn;
                };
                return CelularesService;
            }());
            CelularesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], CelularesService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\Facultad\Yo2\Mis proyectos\Angular Udemy\Angular\Masterphone\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map