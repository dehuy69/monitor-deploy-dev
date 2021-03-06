(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["extras-extras-module-ngfactory"],{

/***/ "./src/app/pages/extras/extras.module.ngfactory.js":
/*!*********************************************************!*\
  !*** ./src/app/pages/extras/extras.module.ngfactory.js ***!
  \*********************************************************/
/*! exports provided: ExtrasModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasModuleNgFactory", function() { return ExtrasModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _extras_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extras.module */ "./src/app/pages/extras/extras.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _profile_profile_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component.ngfactory */ "./src/app/pages/extras/profile/profile.component.ngfactory.js");
/* harmony import */ var _timeline_timeline_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeline/timeline.component.ngfactory */ "./src/app/pages/extras/timeline/timeline.component.ngfactory.js");
/* harmony import */ var _invoice_invoice_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoice/invoice.component.ngfactory */ "./src/app/pages/extras/invoice/invoice.component.ngfactory.js");
/* harmony import */ var _pricing_pricing_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pricing/pricing.component.ngfactory */ "./src/app/pages/extras/pricing/pricing.component.ngfactory.js");
/* harmony import */ var _gallery_gallery_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gallery/gallery.component.ngfactory */ "./src/app/pages/extras/gallery/gallery.component.ngfactory.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _node_modules_ngx_lightbox_lightbox_overlay_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../node_modules/ngx-lightbox/lightbox-overlay.component.ngfactory */ "./node_modules/ngx-lightbox/lightbox-overlay.component.ngfactory.js");
/* harmony import */ var _node_modules_ngx_lightbox_lightbox_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../node_modules/ngx-lightbox/lightbox.component.ngfactory */ "./node_modules/ngx-lightbox/lightbox.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_lightbox_lightbox_config_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-lightbox/lightbox-config.service */ "./node_modules/ngx-lightbox/lightbox-config.service.js");
/* harmony import */ var ngx_lightbox_lightbox_config_service__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox_lightbox_config_service__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-lightbox/lightbox-event.service */ "./node_modules/ngx-lightbox/lightbox-event.service.js");
/* harmony import */ var ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ngx_lightbox_lightbox_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-lightbox/lightbox.service */ "./node_modules/ngx-lightbox/lightbox.service.js");
/* harmony import */ var ngx_lightbox_lightbox_service__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox_lightbox_service__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _extras_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./extras-routing.module */ "./src/app/pages/extras/extras-routing.module.ts");
/* harmony import */ var ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-click-outside/lib/click-outside.module */ "./node_modules/ng-click-outside/lib/click-outside.module.js");
/* harmony import */ var ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../shared/ui/ui.module */ "./src/app/shared/ui/ui.module.ts");
/* harmony import */ var ngx_lightbox_lightbox_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-lightbox/lightbox.module */ "./node_modules/ngx-lightbox/lightbox.module.js");
/* harmony import */ var ngx_lightbox_lightbox_module__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox_lightbox_module__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/pages/extras/profile/profile.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/pages/extras/timeline/timeline.component.ts");
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./invoice/invoice.component */ "./src/app/pages/extras/invoice/invoice.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pages/extras/pricing/pricing.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/pages/extras/gallery/gallery.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



























var ExtrasModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["??cmf"](_extras_module__WEBPACK_IMPORTED_MODULE_1__["ExtrasModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["??CodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_router_router_lNgFactory"], _profile_profile_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ProfileComponentNgFactory"], _timeline_timeline_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["TimelineComponentNgFactory"], _invoice_invoice_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["InvoiceComponentNgFactory"], _pricing_pricing_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["PricingComponentNgFactory"], _gallery_gallery_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["GalleryComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerNgFactory"], _node_modules_ngx_lightbox_lightbox_overlay_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["LightboxOverlayComponentNgFactory"], _node_modules_ngx_lightbox_lightbox_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["LightboxComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_11__["??angular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["??angular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["??angular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, ngx_lightbox_lightbox_config_service__WEBPACK_IMPORTED_MODULE_13__["LightboxConfig"], ngx_lightbox_lightbox_config_service__WEBPACK_IMPORTED_MODULE_13__["LightboxConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_14__["LightboxEvent"], ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_14__["LightboxEvent"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, ngx_lightbox_lightbox_service__WEBPACK_IMPORTED_MODULE_15__["Lightbox"], ngx_lightbox_lightbox_service__WEBPACK_IMPORTED_MODULE_15__["Lightbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], ngx_lightbox_lightbox_config_service__WEBPACK_IMPORTED_MODULE_13__["LightboxConfig"], ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_14__["LightboxEvent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_14__["LightboxWindowRef"], ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_14__["LightboxWindowRef"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["??angular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _extras_routing_module__WEBPACK_IMPORTED_MODULE_17__["ExtrasRoutingModule"], _extras_routing_module__WEBPACK_IMPORTED_MODULE_17__["ExtrasRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["??angular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["??angular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_18__["ClickOutsideModule"], ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_18__["ClickOutsideModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_20__["UIModule"], _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_20__["UIModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, ngx_lightbox_lightbox_module__WEBPACK_IMPORTED_MODULE_21__["LightboxModule"], ngx_lightbox_lightbox_module__WEBPACK_IMPORTED_MODULE_21__["LightboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _extras_module__WEBPACK_IMPORTED_MODULE_1__["ExtrasModule"], _extras_module__WEBPACK_IMPORTED_MODULE_1__["ExtrasModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ROUTES"], function () { return [[{ path: "profile", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"] }, { path: "timeline", component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_23__["TimelineComponent"] }, { path: "invoice", component: _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_24__["InvoiceComponent"] }, { path: "pricing", component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_25__["PricingComponent"] }, { path: "gallery", component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_26__["GalleryComponent"] }]]; }, [])]); });



/***/ })

}]);
//# sourceMappingURL=extras-extras-module-ngfactory-es5.js.map