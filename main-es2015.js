(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _views_nica_o_s_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/nica-o-s.component */ 46353);
/* harmony import */ var _assets_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets.resolver */ 94277);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    {
        path: '',
        component: _views_nica_o_s_component__WEBPACK_IMPORTED_MODULE_0__.NicaOSComponent,
        resolve: {
            assets: _assets_resolver__WEBPACK_IMPORTED_MODULE_1__.AssetsResolver
        }
    },
    {
        path: '**',
        redirectTo: ''
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var gsap_Draggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/Draggable */ 90748);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ 12949);
/* harmony import */ var _constants_applications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @constants/applications */ 81962);
/* harmony import */ var _fsstore_file_explorer_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fsstore/file-explorer.actions */ 45353);
/* harmony import */ var _constants_filesystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @constants/filesystem */ 47022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);








class AppComponent {
    constructor(store$) {
        this.store$ = store$;
        this.title = 'ProdByFallen';
        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_Draggable__WEBPACK_IMPORTED_MODULE_4__.default);
        this.loadApplications();
        this.loadFiles();
    }
    /** @desc load all website applications */
    loadApplications() {
        this.store$.dispatch((0,_fsstore_file_explorer_actions__WEBPACK_IMPORTED_MODULE_1__.loadApplications)({ applications: Object.values(_constants_applications__WEBPACK_IMPORTED_MODULE_0__.APPLICATIONS) }));
    }
    /** @desc load all website files */
    loadFiles() {
        this.store$.dispatch((0,_fsstore_file_explorer_actions__WEBPACK_IMPORTED_MODULE_1__.loadFiles)({ files: Object.values(_constants_filesystem__WEBPACK_IMPORTED_MODULE_2__.FILES) }));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _views_nica_o_s_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @views/nica-o-s.component */ 46353);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _appstore_app_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @appstore/app.reducer */ 5754);
/* harmony import */ var _appstore_app_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @appstore/app.effects */ 21593);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ngrx/effects */ 20275);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ngrx/store-devtools */ 22373);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _services_assets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/assets.service */ 76284);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pipes/safe.pipe */ 25436);
/* harmony import */ var _components_taskbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/taskbar.component */ 49887);
/* harmony import */ var _applications_file_explorer_store_file_explorer_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @applications/file-explorer/store/file-explorer.reducer */ 94780);
/* harmony import */ var _components_desktop_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/desktop.component */ 72278);
/* harmony import */ var _directives_desktop_icon_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @directives/desktop-icon.directive */ 67845);
/* harmony import */ var _components_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/loader.component */ 44108);
/* harmony import */ var _applications_console_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @applications/console.component */ 74542);
/* harmony import */ var _directives_taskbar_item_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @directives/taskbar-item.directive */ 43628);
/* harmony import */ var _components_window_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @components/window.component */ 47068);
/* harmony import */ var _applications_browser_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @applications/browser.component */ 87024);
/* harmony import */ var _applications_file_explorer_file_explorer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @applications/file-explorer/file-explorer.component */ 36350);
/* harmony import */ var _applications_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @applications/welcome/welcome.component */ 24678);
/* harmony import */ var _components_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @components/menu.component */ 1676);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @services/theme.service */ 8140);
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @services/utility.service */ 67278);
/* harmony import */ var _applications_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @applications/text-editor/text-editor.component */ 17449);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 52334);
/* harmony import */ var _commons_commons_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./commons/commons.module */ 60058);
/* harmony import */ var _applications_text_editor_text_editor_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @applications/text-editor/text-editor.service */ 81975);
/* harmony import */ var _applications_knights_and_monsters_knights_and_monsters_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @applications/knights-and-monsters/knights-and-monsters.component */ 56006);
/* harmony import */ var _directives_button_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @directives/button.directive */ 81952);
/* harmony import */ var _applications_random_name_generator_random_name_generator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @applications/random-name-generator/random-name-generator */ 95800);
/* harmony import */ var _components_link_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @components/link.component */ 70964);
/* harmony import */ var _components_tooltip_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @components/tooltip.component */ 85628);
/* harmony import */ var _applications_welcome_skills_item_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @applications/welcome/skills-item.component */ 64212);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/core */ 2316);










































const components = [
    _views_nica_o_s_component__WEBPACK_IMPORTED_MODULE_2__.NicaOSComponent,
    _components_taskbar_component__WEBPACK_IMPORTED_MODULE_8__.TaskBarComponent,
    _components_loader_component__WEBPACK_IMPORTED_MODULE_12__.LoaderComponent,
    _components_desktop_component__WEBPACK_IMPORTED_MODULE_10__.DesktopComponent,
    _components_window_component__WEBPACK_IMPORTED_MODULE_15__.WindowComponent,
    _applications_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_18__.WelcomeComponent,
    _applications_console_component__WEBPACK_IMPORTED_MODULE_13__.ConsoleComponent,
    _components_menu_component__WEBPACK_IMPORTED_MODULE_19__.MenuComponent,
    _applications_browser_component__WEBPACK_IMPORTED_MODULE_16__.BrowserComponent,
    _applications_file_explorer_file_explorer_component__WEBPACK_IMPORTED_MODULE_17__.FileExplorerComponent,
    _applications_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_22__.TextEditorComponent,
    _applications_knights_and_monsters_knights_and_monsters_component__WEBPACK_IMPORTED_MODULE_25__.KnightsAndMonstersComponent,
    _applications_random_name_generator_random_name_generator__WEBPACK_IMPORTED_MODULE_27__.RandomNameGeneratorComponent,
    _components_link_component__WEBPACK_IMPORTED_MODULE_28__.LinkComponent,
    _components_tooltip_component__WEBPACK_IMPORTED_MODULE_29__.TooltipComponent,
    _applications_welcome_skills_item_component__WEBPACK_IMPORTED_MODULE_30__.SkillsItemComponent
];
const directives = [
    _directives_taskbar_item_directive__WEBPACK_IMPORTED_MODULE_14__.TaskbarItemDirective,
    _directives_desktop_icon_directive__WEBPACK_IMPORTED_MODULE_11__.DesktopIconDirective,
    _directives_button_directive__WEBPACK_IMPORTED_MODULE_26__.ButtonDirective
];
const pipes = [
    _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_7__.SafePipe
];
const services = [
    _services_theme_service__WEBPACK_IMPORTED_MODULE_20__.ThemeService,
    _services_assets_service__WEBPACK_IMPORTED_MODULE_6__.AssetsService,
    _services_utility_service__WEBPACK_IMPORTED_MODULE_21__.UtilityService,
    _applications_text_editor_text_editor_service__WEBPACK_IMPORTED_MODULE_24__.TextEditorService
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineInjector"]({ providers: [...services], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_33__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormsModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_35__.FontAwesomeModule,
            _commons_commons_module__WEBPACK_IMPORTED_MODULE_23__.CommonsModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_36__.StoreModule.forRoot({ app: _appstore_app_reducer__WEBPACK_IMPORTED_MODULE_3__.appReducer, fs: _applications_file_explorer_store_file_explorer_reducer__WEBPACK_IMPORTED_MODULE_9__.fileExplorerReducer }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_37__.EffectsModule.forRoot([_appstore_app_effects__WEBPACK_IMPORTED_MODULE_4__.AppEffects]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_38__.StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _views_nica_o_s_component__WEBPACK_IMPORTED_MODULE_2__.NicaOSComponent,
        _components_taskbar_component__WEBPACK_IMPORTED_MODULE_8__.TaskBarComponent,
        _components_loader_component__WEBPACK_IMPORTED_MODULE_12__.LoaderComponent,
        _components_desktop_component__WEBPACK_IMPORTED_MODULE_10__.DesktopComponent,
        _components_window_component__WEBPACK_IMPORTED_MODULE_15__.WindowComponent,
        _applications_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_18__.WelcomeComponent,
        _applications_console_component__WEBPACK_IMPORTED_MODULE_13__.ConsoleComponent,
        _components_menu_component__WEBPACK_IMPORTED_MODULE_19__.MenuComponent,
        _applications_browser_component__WEBPACK_IMPORTED_MODULE_16__.BrowserComponent,
        _applications_file_explorer_file_explorer_component__WEBPACK_IMPORTED_MODULE_17__.FileExplorerComponent,
        _applications_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_22__.TextEditorComponent,
        _applications_knights_and_monsters_knights_and_monsters_component__WEBPACK_IMPORTED_MODULE_25__.KnightsAndMonstersComponent,
        _applications_random_name_generator_random_name_generator__WEBPACK_IMPORTED_MODULE_27__.RandomNameGeneratorComponent,
        _components_link_component__WEBPACK_IMPORTED_MODULE_28__.LinkComponent,
        _components_tooltip_component__WEBPACK_IMPORTED_MODULE_29__.TooltipComponent,
        _applications_welcome_skills_item_component__WEBPACK_IMPORTED_MODULE_30__.SkillsItemComponent, _directives_taskbar_item_directive__WEBPACK_IMPORTED_MODULE_14__.TaskbarItemDirective,
        _directives_desktop_icon_directive__WEBPACK_IMPORTED_MODULE_11__.DesktopIconDirective,
        _directives_button_directive__WEBPACK_IMPORTED_MODULE_26__.ButtonDirective, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_7__.SafePipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_33__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormsModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_35__.FontAwesomeModule,
        _commons_commons_module__WEBPACK_IMPORTED_MODULE_23__.CommonsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_37__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_38__.StoreDevtoolsModule] }); })();


/***/ }),

/***/ 87024:
/*!***************************************************!*\
  !*** ./src/app/applications/browser.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserComponent": function() { return /* binding */ BrowserComponent; }
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons_faRedo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faRedo */ 80787);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faLongArrowAltLeft__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faLongArrowAltLeft */ 81818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pipes/safe.pipe */ 25436);





const _c0 = ["iframe"];
class BrowserComponent {
    constructor(store$) {
        this.store$ = store$;
        this.faReload = _fortawesome_free_solid_svg_icons_faRedo__WEBPACK_IMPORTED_MODULE_1__.faRedo;
        this.faBack = _fortawesome_free_solid_svg_icons_faLongArrowAltLeft__WEBPACK_IMPORTED_MODULE_2__.faLongArrowAltLeft;
    }
    get frame() {
        return this._iFrameRef.nativeElement;
    }
}
BrowserComponent.ɵfac = function BrowserComponent_Factory(t) { return new (t || BrowserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store)); };
BrowserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BrowserComponent, selectors: [["app-browser"]], viewQuery: function BrowserComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._iFrameRef = _t.first);
    } }, decls: 6, vars: 5, consts: [[1, "app-browser"], [1, "app-browser-searchbar"], ["disabled", "", "placeholder", "url", 3, "value"], [3, "src"], ["iframe", ""]], template: function BrowserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "iframe", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.data == null ? null : ctx.data.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 2, ctx.data == null ? null : ctx.data.url, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeResourceUrl"]);
    } }, pipes: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_0__.SafePipe], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 74542:
/*!***************************************************!*\
  !*** ./src/app/applications/console.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsoleComponent": function() { return /* binding */ ConsoleComponent; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/app.reducer */ 5754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pipes/safe.pipe */ 25436);






function ConsoleComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("[", i_r2 + 1, "]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 3, message_r1.description, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 6, message_r1.message, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
class ConsoleComponent {
    constructor(store$) {
        this.store$ = store$;
        this.consoleMessages$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.selectConsoleMessages));
    }
    trackByFn(index, item) {
        return index;
    }
}
ConsoleComponent.ɵfac = function ConsoleComponent_Factory(t) { return new (t || ConsoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store)); };
ConsoleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ConsoleComponent, selectors: [["app-console"]], decls: 10, vars: 4, consts: [["id", "console"], [1, "console-rindex"], [1, "console-message"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "console-description", 3, "innerHTML"], ["colspan", "3", 1, "console-message", 3, "innerHTML"]], template: function ConsoleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "[0]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ConsoleComponent_tr_8_Template, 7, 9, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 2, ctx.consoleMessages$))("ngForTrackBy", ctx.trackByFn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_1__.SafePipe], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 36350:
/*!***********************************************************************!*\
  !*** ./src/app/applications/file-explorer/file-explorer.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileExplorerComponent": function() { return /* binding */ FileExplorerComponent; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _appstore_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @appstore/app.reducer */ 5754);
/* harmony import */ var _constants_filesystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @constants/filesystem */ 47022);
/* harmony import */ var _store_file_explorer_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/file-explorer.reducer */ 94780);
/* harmony import */ var _store_file_explorer_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/file-explorer.actions */ 45353);
/* harmony import */ var _appstore_app_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @appstore/app.actions */ 85294);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSearch */ 97984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 52334);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pipes/safe.pipe */ 25436);












function FileExplorerComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FileExplorerComponent_li_7_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const path_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.setPath(path_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const path_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 6, ctx_r0.currentPath$) === ctx_r0.fs.getPath(path_r4))("secondary", path_r4 !== ctx_r0.fs.root);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 8, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 11, ctx_r0.loadedAssets$).folderIcon.resource, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", path_r4, " ");
} }
function FileExplorerComponent_ng_container_17_tr_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
} if (rf & 2) {
    const app_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 4, ctx_r9.loadedAssets$)[app_r8 == null ? null : app_r8.properties == null ? null : app_r8.properties.iconContrast] == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 4, ctx_r9.loadedAssets$)[app_r8 == null ? null : app_r8.properties == null ? null : app_r8.properties.iconContrast].resource, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
function FileExplorerComponent_ng_container_17_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FileExplorerComponent_ng_container_17_tr_5_Template_tr_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const app_r8 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r11.openApp(app_r8, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, FileExplorerComponent_ng_container_17_tr_5_div_2_Template, 3, 6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", (app_r8.properties == null ? null : app_r8.properties.alt) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", app_r8 == null ? null : app_r8.properties == null ? null : app_r8.properties.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](app_r8.properties.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", app_r8.properties.fs.category, " ");
} }
function FileExplorerComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Applications");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, FileExplorerComponent_ng_container_17_tr_5_Template, 7, 4, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("colSpan", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 3, ctx_r1.resultApplications$))("ngForTrackBy", ctx_r1.trackByFn);
} }
function FileExplorerComponent_ng_container_19_tr_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
} if (rf & 2) {
    const file_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 4, ctx_r15.loadedAssets$)[file_r14 == null ? null : file_r14.properties == null ? null : file_r14.properties.iconContrast] == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 4, ctx_r15.loadedAssets$)[file_r14 == null ? null : file_r14.properties == null ? null : file_r14.properties.iconContrast].resource, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
function FileExplorerComponent_ng_container_19_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FileExplorerComponent_ng_container_19_tr_5_Template_tr_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const file_r14 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r17.openFile(file_r14, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, FileExplorerComponent_ng_container_19_tr_5_div_2_Template, 3, 6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", (file_r14.properties == null ? null : file_r14.properties.alt) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", file_r14 == null ? null : file_r14.properties == null ? null : file_r14.properties.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](file_r14.properties.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", file_r14.properties.category, " ");
} }
function FileExplorerComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "File");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, FileExplorerComponent_ng_container_19_tr_5_Template, 7, 4, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("colSpan", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 3, ctx_r2.resultFiles$))("ngForTrackBy", ctx_r2.trackByFn);
} }
function FileExplorerComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "No results.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
class FileExplorerComponent {
    constructor(store$) {
        this.store$ = store$;
        this.loadedAssets$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(_appstore_app_reducer__WEBPACK_IMPORTED_MODULE_0__.selectLoadedAssets));
        this.currentPath$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(_store_file_explorer_reducer__WEBPACK_IMPORTED_MODULE_2__.selectCurrentPath));
        this.resultApplications$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(_store_file_explorer_reducer__WEBPACK_IMPORTED_MODULE_2__.selectApplicationsByCurrentPath));
        this.resultFiles$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(_store_file_explorer_reducer__WEBPACK_IMPORTED_MODULE_2__.selectFilesByCurrentPath));
        this.paths = Object.values(_constants_filesystem__WEBPACK_IMPORTED_MODULE_1__.fs.paths);
        this.fs = _constants_filesystem__WEBPACK_IMPORTED_MODULE_1__.fs;
        this.faSearch = _fortawesome_free_solid_svg_icons_faSearch__WEBPACK_IMPORTED_MODULE_8__.faSearch;
    }
    setPath(path) {
        this.store$.dispatch((0,_store_file_explorer_actions__WEBPACK_IMPORTED_MODULE_3__.setCurrentPath)({ path }));
    }
    openApp(app, event) {
        event.preventDefault();
        event.stopPropagation();
        this.store$.dispatch((0,_appstore_app_actions__WEBPACK_IMPORTED_MODULE_4__.createApp)({ app }));
    }
    openFile(file, event) {
        event.preventDefault();
        event.stopPropagation();
        this.store$.dispatch((0,_appstore_app_actions__WEBPACK_IMPORTED_MODULE_4__.openFile)({ file }));
    }
    ngOnDestroy() {
        this.store$.dispatch((0,_store_file_explorer_actions__WEBPACK_IMPORTED_MODULE_3__.resetFileExplorer)());
    }
    trackByFn(index, item) {
        return index;
    }
}
FileExplorerComponent.ɵfac = function FileExplorerComponent_Factory(t) { return new (t || FileExplorerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store)); };
FileExplorerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: FileExplorerComponent, selectors: [["app-file-explorer"]], decls: 24, vars: 16, consts: [[1, "app-file-explorer"], [1, "app-file-explorer-toolbar"], [3, "icon"], ["id", "current-path", "disabled", "", 3, "value"], [1, "app-file-explorer-three"], [3, "active", "secondary", "click", 4, "ngFor", "ngForOf"], [1, "app-file-explorer-result"], [4, "ngIf"], [3, "click"], [1, "icon", 3, "innerHTML"], [1, "app-file-explorer-result-separator"], [3, "colSpan"], [3, "title", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "title", "click"], ["class", "icon", 3, "innerHTML", 4, "ngIf"], ["colspan", "2"]], template: function FileExplorerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, FileExplorerComponent_li_7_Template, 6, 13, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, FileExplorerComponent_ng_container_17_Template, 7, 5, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, FileExplorerComponent_ng_container_19_Template, 7, 5, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, FileExplorerComponent_ng_container_21_Template, 5, 0, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 6, ctx.currentPath$) + "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.paths);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 8, ctx.resultApplications$).length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 10, ctx.resultFiles$).length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](22, 12, ctx.resultApplications$).length == 0 && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](23, 14, ctx.resultFiles$).length == 0);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__.SafePipe], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 45353:
/*!***************************************************************************!*\
  !*** ./src/app/applications/file-explorer/store/file-explorer.actions.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadApplications": function() { return /* binding */ loadApplications; },
/* harmony export */   "loadFiles": function() { return /* binding */ loadFiles; },
/* harmony export */   "loadItems": function() { return /* binding */ loadItems; },
/* harmony export */   "setCurrentPath": function() { return /* binding */ setCurrentPath; },
/* harmony export */   "resetFileExplorer": function() { return /* binding */ resetFileExplorer; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 17562);

/** FS MANAGEMENT */
const loadApplications = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[FileExplorer] Load applications', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadFiles = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[FileExplorer] Load files', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadItems = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[FileExplorer] Load items', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setCurrentPath = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[FileExplorer] Set current path', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const resetFileExplorer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[FileExplorer] Reset state');


/***/ }),

/***/ 94780:
/*!***************************************************************************!*\
  !*** ./src/app/applications/file-explorer/store/file-explorer.reducer.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "fileExplorerReducer": function() { return /* binding */ fileExplorerReducer; },
/* harmony export */   "selectFileExplorerState": function() { return /* binding */ selectFileExplorerState; },
/* harmony export */   "selectCurrentPath": function() { return /* binding */ selectCurrentPath; },
/* harmony export */   "selectApplications": function() { return /* binding */ selectApplications; },
/* harmony export */   "selectFiles": function() { return /* binding */ selectFiles; },
/* harmony export */   "selectApplicationsByCategory": function() { return /* binding */ selectApplicationsByCategory; },
/* harmony export */   "selectApplicationsByCurrentPath": function() { return /* binding */ selectApplicationsByCurrentPath; },
/* harmony export */   "selectFilesByCurrentPath": function() { return /* binding */ selectFilesByCurrentPath; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _constants_filesystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @constants/filesystem */ 47022);
/* harmony import */ var _file_explorer_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-explorer.actions */ 45353);



const initialState = {
    currentPath: _constants_filesystem__WEBPACK_IMPORTED_MODULE_0__.fs.root, currentPathItems: [], applications: [], files: []
};
const _fileExplorerReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_file_explorer_actions__WEBPACK_IMPORTED_MODULE_1__.loadApplications, (state, { applications }) => (Object.assign(Object.assign({}, state), { applications }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_file_explorer_actions__WEBPACK_IMPORTED_MODULE_1__.loadFiles, (state, { files }) => (Object.assign(Object.assign({}, state), { files }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_file_explorer_actions__WEBPACK_IMPORTED_MODULE_1__.loadItems, (state, { path }) => {
    const currentPathItems = [];
    return Object.assign(Object.assign({}, state), { currentPath: _constants_filesystem__WEBPACK_IMPORTED_MODULE_0__.fs.getPath(path), currentPathItems });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_file_explorer_actions__WEBPACK_IMPORTED_MODULE_1__.setCurrentPath, (state, { path }) => (Object.assign(Object.assign({}, state), { currentPath: _constants_filesystem__WEBPACK_IMPORTED_MODULE_0__.fs.getPath(path) }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_file_explorer_actions__WEBPACK_IMPORTED_MODULE_1__.resetFileExplorer, (state) => (Object.assign(Object.assign({}, state), { currentPath: initialState.currentPath, currentPathItems: initialState.currentPathItems }))));
function fileExplorerReducer(state, action) {
    return _fileExplorerReducer(state, action);
}
const selectFileExplorerState = (state) => state.fs;
const selectCurrentPath = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectFileExplorerState, (state) => state.currentPath);
const selectApplications = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectFileExplorerState, (state, props) => props && props.path ? state.applications.filter(app => app.properties.fs.paths.indexOf(props.path) > -1) : state.applications);
const selectFiles = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectFileExplorerState, (state, props) => props && props.path ? state.files.filter(file => file.fs.paths.indexOf(props.path) > -1) : state.files);
const selectApplicationsByCategory = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectFileExplorerState, (state, props) => props && props.category ? state.applications.filter(app => app.properties.fs.category === props.category) : []);
const selectApplicationsByCurrentPath = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectFileExplorerState, (state) => state.applications.filter(app => app.properties.fs.paths.indexOf(state.currentPath) > -1));
const selectFilesByCurrentPath = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectFileExplorerState, (state) => state.files.filter(file => file.fs.paths.indexOf(state.currentPath) > -1));


/***/ }),

/***/ 56006:
/*!*************************************************************************************!*\
  !*** ./src/app/applications/knights-and-monsters/knights-and-monsters.component.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnightsAndMonstersComponent": function() { return /* binding */ KnightsAndMonstersComponent; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _appstore_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @appstore/app.reducer */ 5754);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ 12949);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ 3877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_tooltip_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/tooltip.component */ 85628);






class KnightsAndMonstersComponent {
    constructor(store$) {
        this.store$ = store$;
        this.loadedAssets$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(_appstore_app_reducer__WEBPACK_IMPORTED_MODULE_0__.selectLoadedAssets));
    }
    ngOnInit() {
        this.introAnimation();
        this.handleParallax();
    }
    handleParallax() {
        document.addEventListener('mousemove', (event) => {
            cancelAnimationFrame(this.parallaxFrameRequest);
            this.parallaxFrameRequest = requestAnimationFrame(() => {
                this.updateParallax(event);
            });
        });
    }
    updateParallax(event) {
        const cy = window.innerWidth / 2;
        const cx = window.innerWidth / 2;
        const dx = event.x - cy;
        const dy = event.y - cx;
        const tilty = -(dy / cy);
        const tiltx = -(dx / cx);
        gsap__WEBPACK_IMPORTED_MODULE_3__.TweenMax.to('#background01', 1, {
            x: tilty * 5, y: tilty * 5
        });
        gsap__WEBPACK_IMPORTED_MODULE_3__.TweenMax.to('#background02', 1, {
            x: tiltx * 10, y: tilty * 10
        });
        gsap__WEBPACK_IMPORTED_MODULE_3__.TweenMax.to('#background03', 1, {
            x: tiltx * 30, y: tilty * 30
        });
    }
    introAnimation() {
        gsap__WEBPACK_IMPORTED_MODULE_3__.TweenMax.from('.app-kandm-intro-background', 2, {
            opacity: 0,
            ease: 'circle'
        });
        new gsap__WEBPACK_IMPORTED_MODULE_4__.TimelineMax({
            onComplete: _ => {
                gsap__WEBPACK_IMPORTED_MODULE_3__.TweenMax.to('#shield', 2, {
                    y: '5px',
                    repeat: -1,
                    yoyo: true,
                    ease: 'circle'
                });
            }
        }).add([
            gsap__WEBPACK_IMPORTED_MODULE_3__.TweenMax.from('#shield', .5, {
                opacity: 0,
                ease: 'power3'
            }),
            gsap__WEBPACK_IMPORTED_MODULE_3__.TweenMax.from('#shield', .5, {
                y: '-10rem',
                ease: 'circle'
            }),
        ], 'sequential');
        // sword left
        new gsap__WEBPACK_IMPORTED_MODULE_4__.TimelineMax({
            onComplete: _ => {
                gsap__WEBPACK_IMPORTED_MODULE_3__.TweenMax.to('#shield', .1, {
                    y: '-.5rem',
                    x: '-.5rem',
                    rotationZ: -1,
                    rotationX: -30,
                    ease: 'power4',
                    repeat: 1,
                    yoyo: true
                });
            },
            delay: 1
        }).add([
            gsap__WEBPACK_IMPORTED_MODULE_3__.TweenMax.from('#sword-left', .5, {
                opacity: 0,
                ease: 'circle'
            }),
            gsap__WEBPACK_IMPORTED_MODULE_3__.TweenMax.from('#sword-left', .5, {
                y: '100rem',
                x: '100rem',
                ease: 'circle'
            })
        ], 'sequential');
        // sword right
        new gsap__WEBPACK_IMPORTED_MODULE_4__.TimelineMax({
            onComplete: _ => {
                gsap__WEBPACK_IMPORTED_MODULE_3__.TweenMax.to('#shield', .1, {
                    y: '-.5rem',
                    x: '.5rem',
                    rotationZ: 1,
                    rotationX: 30,
                    ease: 'power4',
                    repeat: 1,
                    yoyo: true
                });
            },
            delay: 1.5
        }).add([
            gsap__WEBPACK_IMPORTED_MODULE_3__.TweenMax.from('#sword-right', .5, {
                opacity: 0,
                ease: 'circle'
            }),
            gsap__WEBPACK_IMPORTED_MODULE_3__.TweenMax.from('#sword-right', .5, {
                y: '100rem',
                x: '-100rem',
                ease: 'circle'
            })
        ], 'sequential');
        new gsap__WEBPACK_IMPORTED_MODULE_4__.TimelineMax({
            onComplete: _ => {
                gsap__WEBPACK_IMPORTED_MODULE_3__.TweenMax.to('#logo-p1', 2, {
                    y: '5px',
                    repeat: -1,
                    yoyo: true,
                    ease: 'circle'
                });
            },
            delay: 5
        }).add([
            gsap__WEBPACK_IMPORTED_MODULE_3__.TweenMax.from('#logo-p1', 5, {
                opacity: 1,
                ease: 'power4'
            })
        ], 'sequential');
        new gsap__WEBPACK_IMPORTED_MODULE_4__.TimelineMax({
            delay: 5.2,
            onComplete: _ => {
                gsap__WEBPACK_IMPORTED_MODULE_3__.TweenMax.to('#logo-p2', 2, {
                    y: '5px',
                    repeat: -1,
                    yoyo: true,
                    ease: 'power2'
                });
            }
        }).add([
            gsap__WEBPACK_IMPORTED_MODULE_3__.TweenMax.from('#logo-p2', 5, {
                opacity: 1,
                ease: 'power4'
            })
        ], 'sequential');
        new gsap__WEBPACK_IMPORTED_MODULE_4__.TimelineMax({
            delay: 5.4,
            onComplete: _ => {
                gsap__WEBPACK_IMPORTED_MODULE_3__.TweenMax.to('#logo-p3', 2, {
                    y: '5px',
                    repeat: -1,
                    yoyo: true,
                    ease: 'power1'
                });
            }
        }).add([
            gsap__WEBPACK_IMPORTED_MODULE_3__.TweenMax.from('#logo-p3', 5, {
                opacity: 1,
                ease: 'power4'
            })
        ], 'sequential');
        new gsap__WEBPACK_IMPORTED_MODULE_4__.TimelineMax({ delay: 4 }).add([
            gsap__WEBPACK_IMPORTED_MODULE_3__.TweenMax.from('.app-kandm-buttons', 2, {
                y: '10rem',
                ease: 'power4'
            }),
            gsap__WEBPACK_IMPORTED_MODULE_3__.TweenMax.from('.app-kandm-buttons', 2, {
                opacity: 0,
                ease: 'circle'
            })
        ], 'sequential');
        //
        const slideAnimation = new gsap__WEBPACK_IMPORTED_MODULE_4__.TimelineMax({ delay: 3, repeat: -1, yoyo: true })
            .to('#logos', 2, {
            x: '+=10px',
            ease: 'linear'
        })
            .to('#logos', 2, {
            x: '-=10px',
            ease: 'linear'
        });
    }
}
KnightsAndMonstersComponent.ɵfac = function KnightsAndMonstersComponent_Factory(t) { return new (t || KnightsAndMonstersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store)); };
KnightsAndMonstersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: KnightsAndMonstersComponent, selectors: [["app-browser"]], decls: 2, vars: 1, consts: [[1, "app-kandm"], [3, "html"]], template: function KnightsAndMonstersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-tooltip", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("html", "This is just an intro animation example using GSAP, game will not start.<br><b>Parallax</b> is pretty cool \uD83D\uDE0E");
    } }, directives: [_components_tooltip_component__WEBPACK_IMPORTED_MODULE_1__.TooltipComponent], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 57594:
/*!*****************************************************************!*\
  !*** ./src/app/applications/random-name-generator/constants.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prefixes": function() { return /* binding */ prefixes; },
/* harmony export */   "firstNames": function() { return /* binding */ firstNames; },
/* harmony export */   "secondNames": function() { return /* binding */ secondNames; },
/* harmony export */   "suffix": function() { return /* binding */ suffix; }
/* harmony export */ });
const prefixes = ['Sir.', 'Sire', 'Gentleman', 'Lord', 'The Honourable', 'The Baron', 'The Knight', 'The Scum', 'The Bandit'];
// tslint:disable-next-line:max-line-length
const firstNames = ['Marcus', 'Vopiscus', 'Sentius', 'Nonius', 'Vergilius', 'Brutus', 'Pipinus', 'Nikolaji', 'Tirlun', 'Kog', 'Norazolin'];
const secondNames = ['Gallicles', 'Artamo', 'Firminus', 'Baebio', 'Sphaerio', 'Krotdrerlum', 'Glarsorlim', 'Glarsorlim'];
const suffix = ['The Hearth Breaker', 'The Solid Stone', 'The Brute', 'The Emperor', 'The Wolf', 'The Poor Boy', 'The Lucky One'];


/***/ }),

/***/ 95800:
/*!*****************************************************************************!*\
  !*** ./src/app/applications/random-name-generator/random-name-generator.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RandomNameGeneratorComponent": function() { return /* binding */ RandomNameGeneratorComponent; }
/* harmony export */ });
/* harmony import */ var _applications_random_name_generator_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @applications/random-name-generator/constants */ 57594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class RandomNameGeneratorComponent {
    constructor() {
        this.randomName = '';
    }
    generateRandom() {
        // tslint:disable-next-line:max-line-length
        this.randomName = `${this.getRandomFrom(_applications_random_name_generator_constants__WEBPACK_IMPORTED_MODULE_0__.prefixes)} ${this.getRandomFrom(_applications_random_name_generator_constants__WEBPACK_IMPORTED_MODULE_0__.firstNames)} ${this.getRandomFrom(_applications_random_name_generator_constants__WEBPACK_IMPORTED_MODULE_0__.secondNames)}, ${this.getRandomFrom(_applications_random_name_generator_constants__WEBPACK_IMPORTED_MODULE_0__.suffix)}`;
    }
    getRandomFrom(array) {
        return array[Math.floor(Math.random() * (array.length - 1))];
    }
}
RandomNameGeneratorComponent.ɵfac = function RandomNameGeneratorComponent_Factory(t) { return new (t || RandomNameGeneratorComponent)(); };
RandomNameGeneratorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RandomNameGeneratorComponent, selectors: [["app-random-name-generator"]], decls: 5, vars: 1, consts: [[1, "random-name-generator"], [3, "click"]], template: function RandomNameGeneratorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RandomNameGeneratorComponent_Template_button_click_3_listener() { return ctx.generateRandom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "GIMME A NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.randomName || "Click to generate");
    } }, encapsulation: 2 });


/***/ }),

/***/ 75375:
/*!*******************************************************!*\
  !*** ./src/app/applications/text-editor/constants.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ICONS": function() { return /* binding */ ICONS; }
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons_faBold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faBold */ 10522);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faItalic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faItalic */ 15841);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faUnderline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faUnderline */ 13936);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faStrikethrough__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faStrikethrough */ 84594);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faAlignLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faAlignLeft */ 36453);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faAlignCenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faAlignCenter */ 15718);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faAlignRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faAlignRight */ 62889);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faAlignJustify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faAlignJustify */ 75428);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCut__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCut */ 96126);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCopy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCopy */ 96873);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faIndent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faIndent */ 98241);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSubscript__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSubscript */ 93654);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faOutdent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faOutdent */ 19533);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSuperscript__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSuperscript */ 90238);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faUndo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faUndo */ 75515);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faRedo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faRedo */ 80787);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faListUl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faListUl */ 87250);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faListOl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faListOl */ 25049);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faLink__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faLink */ 98134);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faUnlink__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faUnlink */ 16152);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCode__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCode */ 65756);





















const ICONS = {
    faBold: _fortawesome_free_solid_svg_icons_faBold__WEBPACK_IMPORTED_MODULE_0__.faBold,
    faItalic: _fortawesome_free_solid_svg_icons_faItalic__WEBPACK_IMPORTED_MODULE_1__.faItalic,
    faUnderline: _fortawesome_free_solid_svg_icons_faUnderline__WEBPACK_IMPORTED_MODULE_2__.faUnderline,
    faStrikethrough: _fortawesome_free_solid_svg_icons_faStrikethrough__WEBPACK_IMPORTED_MODULE_3__.faStrikethrough,
    faAlignLeft: _fortawesome_free_solid_svg_icons_faAlignLeft__WEBPACK_IMPORTED_MODULE_4__.faAlignLeft,
    faAlignCenter: _fortawesome_free_solid_svg_icons_faAlignCenter__WEBPACK_IMPORTED_MODULE_5__.faAlignCenter,
    faAlignRight: _fortawesome_free_solid_svg_icons_faAlignRight__WEBPACK_IMPORTED_MODULE_6__.faAlignRight,
    faAlignJustify: _fortawesome_free_solid_svg_icons_faAlignJustify__WEBPACK_IMPORTED_MODULE_7__.faAlignJustify,
    faCut: _fortawesome_free_solid_svg_icons_faCut__WEBPACK_IMPORTED_MODULE_8__.faCut,
    faCopy: _fortawesome_free_solid_svg_icons_faCopy__WEBPACK_IMPORTED_MODULE_9__.faCopy,
    faIndent: _fortawesome_free_solid_svg_icons_faIndent__WEBPACK_IMPORTED_MODULE_10__.faIndent,
    faOutdent: _fortawesome_free_solid_svg_icons_faOutdent__WEBPACK_IMPORTED_MODULE_11__.faOutdent,
    faSubscript: _fortawesome_free_solid_svg_icons_faSubscript__WEBPACK_IMPORTED_MODULE_12__.faSubscript,
    faSuperscript: _fortawesome_free_solid_svg_icons_faSuperscript__WEBPACK_IMPORTED_MODULE_13__.faSuperscript,
    faUndo: _fortawesome_free_solid_svg_icons_faUndo__WEBPACK_IMPORTED_MODULE_14__.faUndo,
    faRedo: _fortawesome_free_solid_svg_icons_faRedo__WEBPACK_IMPORTED_MODULE_15__.faRedo,
    faListUl: _fortawesome_free_solid_svg_icons_faListUl__WEBPACK_IMPORTED_MODULE_16__.faListUl,
    faListOl: _fortawesome_free_solid_svg_icons_faListOl__WEBPACK_IMPORTED_MODULE_17__.faListOl,
    faLink: _fortawesome_free_solid_svg_icons_faLink__WEBPACK_IMPORTED_MODULE_18__.faLink,
    faUnlink: _fortawesome_free_solid_svg_icons_faUnlink__WEBPACK_IMPORTED_MODULE_19__.faUnlink,
    faCode: _fortawesome_free_solid_svg_icons_faCode__WEBPACK_IMPORTED_MODULE_20__.faCode
};


/***/ }),

/***/ 17449:
/*!*******************************************************************!*\
  !*** ./src/app/applications/text-editor/text-editor.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextEditorComponent": function() { return /* binding */ TextEditorComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ 75375);
/* harmony import */ var _text_editor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-editor.service */ 81975);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 52334);
/* harmony import */ var _commons_gui_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../commons/gui/select.component */ 3846);






const _c0 = ["page"];
class TextEditorComponent {
    constructor(cd, service) {
        this.cd = cd;
        this.service = service;
        this.ICONS = _constants__WEBPACK_IMPORTED_MODULE_0__.ICONS;
        this.prompt = prompt;
        this.subs = [];
        this.formatBlockOptions = [
            { value: 'P', label: 'Paragraph' },
            { value: 'H1', label: 'HEADER 1' },
            { value: 'H2', label: 'HEADER 2' },
            { value: 'H3', label: 'HEADER 3' },
            { value: 'H4', label: 'HEADER 4' },
            { value: 'H5', label: 'HEADER 5' },
            { value: 'H5', label: 'HEADER 5' }
        ];
        this.formatBlock = this.formatBlockOptions[0];
        this.fontNameOptions = [
            { value: 'Arial', label: 'Arial' },
            { value: 'Comic Sans MS', label: 'Comic Sans MS' },
            { value: 'Courier', label: 'Courier' },
            { value: 'Georgia', label: 'Georgia' },
            { value: 'Tahoma', label: 'Tahoma' },
            { value: 'Times New Roman', label: 'Times New Roman' },
            { value: 'Verdana', label: 'Verdana' }
        ];
        this.fontName = this.fontNameOptions[0];
        this.downloadOptions = [
            { value: 'PDF', label: 'Download as PDF' },
            { value: 'DOC', label: 'Download as DOC' },
            { value: 'DOCX', label: 'Download as DOCX' }
        ];
        this.selectionTimeout = null;
        document.execCommand('DefaultParagraphSeparator', false, 'p');
    }
    onClick(event) {
        if (event.target.classList.contains('text-editor-pages-page')) {
            window.dispatchEvent(new Event('text-editor-item:focus'));
        }
    }
    ngAfterViewInit() {
        const { contentDocument, contentWindow } = this.page.nativeElement;
        contentDocument.designMode = 'On';
        contentDocument.body.addEventListener('selectstart', _ => {
            clearTimeout(this.selectionTimeout);
            this.selectionTimeout = setTimeout(() => this.handlePageSelection(contentWindow.getSelection()), 100);
        });
    }
    ngOnDestroy() {
        this.subs.map(s => s.unsubscribe());
    }
    handlePageSelection(selection) {
        const { anchorNode } = selection;
        if (anchorNode.nodeName === 'body' || !anchorNode.parentNode) {
            this.formatBlock = this.formatBlockOptions.find(fBO => fBO.value === 'P');
            return;
        }
        let target = 'P';
        switch (anchorNode.parentNode.nodeName.toLowerCase()) {
            case '#text':
                target = 'P';
                break;
            case 'h1':
                target = 'H1';
                break;
            case 'h2':
                target = 'H2';
                break;
            case 'h3':
                target = 'H3';
                break;
            case 'h4':
                target = 'H4';
                break;
            case 'h5':
                target = 'H5';
                break;
            case 'h6':
                target = 'H6';
                break;
        }
        this.formatBlock = this.formatBlockOptions.find(fBO => fBO.value === target);
        this.cd.detectChanges();
    }
    exec(command) {
        this.page.nativeElement.contentDocument.execCommand(command, false, null);
    }
    execCommandWithArg(command, arg) {
        this.page.nativeElement.contentDocument.execCommand(command, false, arg);
    }
    execCommandWithChangeEvent(command, options) {
        this.page.nativeElement.contentDocument.execCommand(command, false, options.value);
    }
    download(as) {
        const { value } = as;
        switch (value) {
            case 'PDF':
                return this.service.downloadPDF(this.page.nativeElement.contentDocument);
            case 'DOC':
                return this.service.downloadDoc(this.page.nativeElement.contentDocument);
            case 'DOCX':
                return this.service.downloadDoc(this.page.nativeElement.contentDocument, 'docx');
            default:
                return console.warn('No download for type %o found.', value);
        }
    }
}
TextEditorComponent.ɵfac = function TextEditorComponent_Factory(t) { return new (t || TextEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_text_editor_service__WEBPACK_IMPORTED_MODULE_1__.TextEditorService)); };
TextEditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TextEditorComponent, selectors: [["app-text-editor"]], viewQuery: function TextEditorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.page = _t.first);
    } }, hostBindings: function TextEditorComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mousedown", function TextEditorComponent_mousedown_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, decls: 50, vars: 27, consts: [[1, "text-editor"], [1, "text-editor-toolbar"], [3, "click"], [3, "icon"], [3, "options", "selectedValue", "change"], [3, "options", "placeholder", "change"], [1, "text-editor-pages"], ["id", "page", 3, "contentEditable"], ["page", ""]], template: function TextEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TextEditorComponent_Template_button_click_2_listener() { return ctx.exec("bold"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TextEditorComponent_Template_button_click_4_listener() { return ctx.exec("italic"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TextEditorComponent_Template_button_click_6_listener() { return ctx.exec("underline"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TextEditorComponent_Template_button_click_8_listener() { return ctx.exec("strikethrough"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TextEditorComponent_Template_button_click_10_listener() { return ctx.exec("justifyLeft"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TextEditorComponent_Template_button_click_12_listener() { return ctx.exec("justifyCenter"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TextEditorComponent_Template_button_click_14_listener() { return ctx.exec("justifyRight"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TextEditorComponent_Template_button_click_16_listener() { return ctx.exec("justifyFull"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TextEditorComponent_Template_button_click_18_listener() { return ctx.exec("cut"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TextEditorComponent_Template_button_click_20_listener() { return ctx.exec("copy"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TextEditorComponent_Template_button_click_22_listener() { return ctx.exec("indent"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TextEditorComponent_Template_button_click_24_listener() { return ctx.exec("outdent"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TextEditorComponent_Template_button_click_26_listener() { return ctx.exec("subscript"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TextEditorComponent_Template_button_click_28_listener() { return ctx.exec("superscript"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TextEditorComponent_Template_button_click_30_listener() { return ctx.exec("undo"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TextEditorComponent_Template_button_click_32_listener() { return ctx.exec("redo"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TextEditorComponent_Template_button_click_34_listener() { return ctx.exec("insertUnorderedList"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TextEditorComponent_Template_button_click_36_listener() { return ctx.exec("insertOrderedList"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TextEditorComponent_Template_button_click_38_listener() { return ctx.exec("insertHorizontalRule"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "HR");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TextEditorComponent_Template_button_click_40_listener() { return ctx.execCommandWithArg("createLink", ctx.prompt("Enter link")); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TextEditorComponent_Template_button_click_42_listener() { return ctx.exec("unlink"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "app-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function TextEditorComponent_Template_app_select_change_44_listener($event) { return ctx.execCommandWithChangeEvent("formatBlock", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "app-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function TextEditorComponent_Template_app_select_change_45_listener($event) { return ctx.execCommandWithChangeEvent("fontName", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "app-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function TextEditorComponent_Template_app_select_change_46_listener($event) { return ctx.download($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "iframe", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.ICONS.faBold);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.ICONS.faItalic);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.ICONS.faUnderline);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.ICONS.faStrikethrough);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.ICONS.faAlignLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.ICONS.faAlignCenter);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.ICONS.faAlignRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.ICONS.faAlignJustify);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.ICONS.faCut);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.ICONS.faCopy);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.ICONS.faIndent);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.ICONS.faOutdent);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.ICONS.faSubscript);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.ICONS.faSuperscript);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.ICONS.faUndo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.ICONS.faRedo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.ICONS.faListUl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.ICONS.faListOl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.ICONS.faLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.ICONS.faUnlink);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.formatBlockOptions)("selectedValue", ctx.formatBlock);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.fontNameOptions)("selectedValue", ctx.fontName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.downloadOptions)("placeholder", "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("contentEditable", true);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent, _commons_gui_select_component__WEBPACK_IMPORTED_MODULE_2__.SelectComponent], encapsulation: 2 });


/***/ }),

/***/ 81975:
/*!*****************************************************************!*\
  !*** ./src/app/applications/text-editor/text-editor.service.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextEditorService": function() { return /* binding */ TextEditorService; }
/* harmony export */ });
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html2canvas */ 52195);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ 75585);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);



class TextEditorService {
    constructor() {
    }
    downloadPDF(html) {
        const filename = prompt('Insert PDF name', 'document');
        if (filename) {
            html2canvas__WEBPACK_IMPORTED_MODULE_0___default()(html.body, { scale: 2, allowTaint: false }).then(canvas => {
                // Few necessary setting options
                const imgWidth = 208;
                const imgHeight = canvas.height * imgWidth / canvas.width;
                const contentDataURL = canvas.toDataURL('image/jpeg');
                const pdf = new jspdf__WEBPACK_IMPORTED_MODULE_1__('p', 'mm', 'a4');
                const position = 0;
                pdf.addImage(contentDataURL, 'JPEG', 0, position, imgWidth, imgHeight, true);
                pdf.save(`${filename}.pdf`); // Generated PDF
            });
        }
    }
    downloadDoc(html, extension = '.doc') {
        let filename = prompt('Insert DOC name', 'document');
        if (filename) {
            filename = `${filename}.${extension}`;
            const blob = new Blob(['\ufeff', html.body.innerHTML], {
                type: 'application/msword'
            });
            const url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html.body.innerHTML);
            this.downloadByLink(blob, url, filename);
        }
    }
    downloadByLink(blob, url, filename) {
        // Create download link element
        const downloadLink = document.createElement('a');
        document.body.appendChild(downloadLink);
        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, filename);
        }
        else {
            // Create a link to the file
            downloadLink.href = url;
            // Setting the file name
            downloadLink.download = filename;
            // triggering the function
            downloadLink.click();
        }
        document.body.removeChild(downloadLink);
    }
}
TextEditorService.ɵfac = function TextEditorService_Factory(t) { return new (t || TextEditorService)(); };
TextEditorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TextEditorService, factory: TextEditorService.ɵfac });


/***/ }),

/***/ 75466:
/*!*****************************************************!*\
  !*** ./src/app/applications/welcome/data/skills.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Skill": function() { return /* binding */ Skill; },
/* harmony export */   "DEVELOPMENT_SKILLS": function() { return /* binding */ DEVELOPMENT_SKILLS; },
/* harmony export */   "FRAMEWORK_SKILLS": function() { return /* binding */ FRAMEWORK_SKILLS; },
/* harmony export */   "TOOLS_SKILLS": function() { return /* binding */ TOOLS_SKILLS; }
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons_faPuzzlePiece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faPuzzlePiece */ 67007);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faGamepad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faGamepad */ 5607);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCode */ 65756);



class Skill {
}
const DEVELOPMENT_SKILLS = [
    {
        title: 'Chiptunes',
        description: 'Using GXSCC to turn Midis into chiptunes since 2013.',
        icon: _fortawesome_free_solid_svg_icons_faGamepad__WEBPACK_IMPORTED_MODULE_0__.faGamepad
    }
];
const FRAMEWORK_SKILLS = [
    {
        title: 'Basic reverse-engineering',
        description: 'ye',
        icon: _fortawesome_free_solid_svg_icons_faPuzzlePiece__WEBPACK_IMPORTED_MODULE_1__.faPuzzlePiece
    }
];
const TOOLS_SKILLS = [
    {
        title: ' ',
        description: ' ',
        icon: _fortawesome_free_solid_svg_icons_faCode__WEBPACK_IMPORTED_MODULE_2__.faCode
    }
];


/***/ }),

/***/ 64212:
/*!***************************************************************!*\
  !*** ./src/app/applications/welcome/skills-item.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsItemComponent": function() { return /* binding */ SkillsItemComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 52334);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pipes/safe.pipe */ 25436);



class SkillsItemComponent {
}
SkillsItemComponent.ɵfac = function SkillsItemComponent_Factory(t) { return new (t || SkillsItemComponent)(); };
SkillsItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SkillsItemComponent, selectors: [["app-skills-item"]], inputs: { title: "title", description: "description", icon: "icon" }, decls: 7, vars: 9, consts: [[1, "skills-item"], [1, "skills-item-title", 3, "innerHTML"], [1, "skills-item-description", 3, "innerHTML"], [1, "skills-item-icon"], [3, "icon"]], template: function SkillsItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 3, ctx.title, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 6, ctx.description, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.icon);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent], pipes: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_0__.SafePipe], encapsulation: 2 });


/***/ }),

/***/ 24678:
/*!***********************************************************!*\
  !*** ./src/app/applications/welcome/welcome.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeComponent": function() { return /* binding */ WelcomeComponent; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _appstore_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @appstore/app.reducer */ 5754);
/* harmony import */ var _applications_welcome_data_skills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @applications/welcome/data/skills */ 75466);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faDownload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faDownload */ 73739);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faPhone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faPhone */ 35812);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faMailBulk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faMailBulk */ 28229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/link.component */ 70964);
/* harmony import */ var _components_tooltip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/tooltip.component */ 85628);










const _c0 = ["welcomeRight"];
class WelcomeComponent {
    constructor(store$) {
        this.store$ = store$;
        this.loadedAssets$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.select)(_appstore_app_reducer__WEBPACK_IMPORTED_MODULE_0__.selectLoadedAssets));
        this.isIntroVisible = true;
        this.isEducationVisible = false;
        this.isWorkVisible = false;
        this.faDownload = _fortawesome_free_solid_svg_icons_faDownload__WEBPACK_IMPORTED_MODULE_5__.faDownload;
        this.faPhone = _fortawesome_free_solid_svg_icons_faPhone__WEBPACK_IMPORTED_MODULE_6__.faPhone;
        this.faMail = _fortawesome_free_solid_svg_icons_faMailBulk__WEBPACK_IMPORTED_MODULE_7__.faMailBulk;
        this.DEVELOPMENT_SKILLS = _applications_welcome_data_skills__WEBPACK_IMPORTED_MODULE_1__.DEVELOPMENT_SKILLS;
        this.FRAMEWORK_SKILLS = _applications_welcome_data_skills__WEBPACK_IMPORTED_MODULE_1__.FRAMEWORK_SKILLS;
        this.TOOLS_SKILLS = _applications_welcome_data_skills__WEBPACK_IMPORTED_MODULE_1__.TOOLS_SKILLS;
        this.ids = ['intro', 'story', 'education', 'works', 'skills', 'more'];
    }
    scrollTo(elementId) {
        this.welcomeRight.nativeElement.querySelector(`#${elementId}`).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    trackByFn(it, i) { return i; }
    onScroll($event) {
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(() => {
            this.afterScroll($event.target.scrollTop);
        }, 100);
    }
    afterScroll(scrollTop) {
        this.ids.forEach(id => {
            const element = document.querySelector(`#${id}`);
            if (!element) {
                return;
            }
            if (scrollTop >= element.offsetTop - 500) {
                document.querySelector(`.${id}-anchor`).classList.add('active');
            }
            else {
                document.querySelector(`.${id}-anchor`).classList.remove('active');
            }
        });
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store)); };
WelcomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], viewQuery: function WelcomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.welcomeRight = _t.first);
    } }, decls: 77, vars: 19, consts: [[1, "app-welcome"], [1, "app-welcome-left"], [1, "intro-anchor", "active", 3, "click"], [1, "story-anchor", 3, "click"], [1, "more-anchor", 3, "click"], ["id", "downloadCV", 3, "icon", "link"], [1, "app-welcome-right", 3, "scroll"], ["welcomeRight", ""], [3, "link"], ["id", "intro"], ["id", "text1"], ["id", "content"], ["src", "https://bandcamp.com/EmbeddedPlayer/album=3961355414/size=large/bgcol=333333/linkcol=2ebd35/tracklist=true/transparent=true/", "seamless", "", 2, "border", "0", "width", "400px", "height", "704px"], ["href", "https://xfallen.bandcamp.com/album/ep-super-position"], ["id", "story"], ["id", "text2"], ["id", "more"], [1, "more-links"], [3, "icon", "link"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function WelcomeComponent_Template_li_click_5_listener() { return ctx.scrollTo("intro"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "\u26AB Intro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function WelcomeComponent_Template_li_click_7_listener() { return ctx.scrollTo("story"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "\u26AB What I Do ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function WelcomeComponent_Template_li_click_9_listener() { return ctx.scrollTo("more"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "\u26AB Links ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "app-link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " Download My EP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("scroll", function WelcomeComponent_Template_div_scroll_13_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "app-tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "[Super Position EP] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "app-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Streaming Everywhere! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "\u2235/ProdByFallen");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Super Position EP");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, ", featuring Archaeologist!");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "iframe", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "[EP] Super Position by ProdByFallen");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "app-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "https://linktr.ee/ProdByFallen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "What I Do");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, " I make music, and sometimes I do chiptune remixes on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "YouTube");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "app-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "xFallenDemon99x");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, " (my main channel)");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "app-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, "Linktr.ee");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "app-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, "YouTube");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "app-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "Bandcamp");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "app-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58, "Spotify");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "app-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, "iTunes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "app-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, "SoundCloud");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "app-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64, "itch.io");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "app-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "app-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "app-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70, "TribalRose");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "app-link", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "app-link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74, " Download My EP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "app-tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76, "This website uses NicolaLC's Code (https://github.com/NicolaLC/nica-os) Support the Dev!");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faDownload)("link", "https://xfallen.bandcamp.com/album/ep-super-position");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("link", "https://linktr.ee/ProdByFallen");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("link", "https://linktr.ee/ProdByFallen");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("link", "https://Youtube.com/xFallenDemon99x");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("link", "https://linktr.ee/ProdByFallen");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("link", "https://www.youtube.com/xFallenDemon99x");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("link", "https://xFallen.bandcamp.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("link", "https://open.spotify.com/artist/58I7icWChtlsIQI7mgmfYz");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("link", "https://music.apple.com/us/artist/prodbyfallen/1577865911");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("link", "https://soundcloud.com/Prod-By-Fallen");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("link", "https://xFallenDemon99x.itch.io");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("link", "https://twitter.com/xFD99x");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("link", "https://facebook.com/ProdByFallen");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("link", "https://linktr.ee/TribalRose");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faMail)("link", "mailto:TribalRoseBand@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faDownload)("link", "https://xFallen.bandcamp.com/album/ep-super-position");
    } }, directives: [_components_link_component__WEBPACK_IMPORTED_MODULE_2__.LinkComponent, _components_tooltip_component__WEBPACK_IMPORTED_MODULE_3__.TooltipComponent], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 94277:
/*!************************************!*\
  !*** ./src/app/assets.resolver.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetsResolver": function() { return /* binding */ AssetsResolver; }
/* harmony export */ });
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/app.reducer */ 5754);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 53466);
/* harmony import */ var _store_app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/app.actions */ 85294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);






class AssetsResolver {
    constructor(store) {
        this.store = store;
        this.loadedAssets$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.selectLoadedAssets));
    }
    resolve(route, state) {
        this.store.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.loadAssets)());
        return this.loadedAssets$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1));
    }
}
AssetsResolver.ɵfac = function AssetsResolver_Factory(t) { return new (t || AssetsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store)); };
AssetsResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AssetsResolver, factory: AssetsResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 60058:
/*!*******************************************!*\
  !*** ./src/app/commons/commons.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonsModule": function() { return /* binding */ CommonsModule; }
/* harmony export */ });
/* harmony import */ var _gui_select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gui/select.component */ 3846);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



const components = [
    _gui_select_component__WEBPACK_IMPORTED_MODULE_0__.SelectComponent
];
class CommonsModule {
}
CommonsModule.ɵfac = function CommonsModule_Factory(t) { return new (t || CommonsModule)(); };
CommonsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CommonsModule });
CommonsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CommonsModule, { declarations: [_gui_select_component__WEBPACK_IMPORTED_MODULE_0__.SelectComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_gui_select_component__WEBPACK_IMPORTED_MODULE_0__.SelectComponent] }); })();


/***/ }),

/***/ 3846:
/*!*************************************************!*\
  !*** ./src/app/commons/gui/select.component.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectComponent": function() { return /* binding */ SelectComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);



function SelectComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectComponent_ng_container_4_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.onItemClick(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r1.selectedValue && item_r2.value === ctx_r1.selectedValue.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.label, " ");
} }
function SelectComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectComponent_ng_container_4_div_1_Template, 2, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.options)("ngForTrackBy", ctx_r0.trackByFn);
} }
class SelectComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.placeholder = '-';
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.opened = false;
    }
    onMouseDown(event) {
        const { target } = event;
        if (target && !this.elementRef.nativeElement.contains(target)) {
            this.opened = false;
        }
    }
    onItemClick(item) {
        this.selectedValue = item;
        this.opened = false;
        this.change.emit(item);
    }
    trackByFn(index, item) { return index; }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
SelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectComponent, selectors: [["app-select"]], hostBindings: function SelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function SelectComponent_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { options: "options", placeholder: "placeholder", selectedValue: "selectedValue" }, outputs: { change: "change" }, decls: 5, vars: 4, consts: [[1, "app-select"], [1, "app-select-value", 3, "click"], [1, "app-select-options"], [4, "ngIf"], ["class", "app-select-options-item", 3, "selected", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "app-select-options-item", 3, "click"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectComponent_Template_div_click_1_listener() { return ctx.opened = !ctx.opened; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectComponent_ng_container_4_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opened", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selectedValue ? ctx.selectedValue.label : ctx.placeholder, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.opened);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], encapsulation: 2 });


/***/ }),

/***/ 72278:
/*!*************************************************!*\
  !*** ./src/app/components/desktop.component.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesktopComponent": function() { return /* binding */ DesktopComponent; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/app.reducer */ 5754);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gsap */ 3877);
/* harmony import */ var _store_app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/app.actions */ 85294);
/* harmony import */ var _constants_applications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @constants/applications */ 81962);
/* harmony import */ var _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @interfaces/interfaces */ 94806);
/* harmony import */ var _constants_filesystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @constants/filesystem */ 47022);
/* harmony import */ var _fsstore_file_explorer_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fsstore/file-explorer.reducer */ 94780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _directives_desktop_icon_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @directives/desktop-icon.directive */ 67845);
/* harmony import */ var _components_window_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/window.component */ 47068);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @pipes/safe.pipe */ 25436);














const _c0 = ["desktop"];
const _c1 = ["background"];
function DesktopComponent_ng_container_4_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
} if (rf & 2) {
    const app_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 4, ctx_r7.loadedAssets$)[app_r6 == null ? null : app_r6.properties == null ? null : app_r6.properties.iconContrast] == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 4, ctx_r7.loadedAssets$)[app_r6 == null ? null : app_r6.properties == null ? null : app_r6.properties.iconContrast].resource, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
} }
function DesktopComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DesktopComponent_ng_container_4_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10); const app_r6 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r9.create(app_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DesktopComponent_ng_container_4_div_1_div_1_Template, 3, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", (app_r6.properties == null ? null : app_r6.properties.alt) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", app_r6 == null ? null : app_r6.properties == null ? null : app_r6.properties.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", app_r6.properties.title, " ");
} }
function DesktopComponent_ng_container_4_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
} if (rf & 2) {
    const file_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 4, ctx_r12.loadedAssets$)[file_r11 == null ? null : file_r11.properties == null ? null : file_r11.properties.iconContrast] == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 4, ctx_r12.loadedAssets$)[file_r11 == null ? null : file_r11.properties == null ? null : file_r11.properties.iconContrast].resource, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
} }
function DesktopComponent_ng_container_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DesktopComponent_ng_container_4_div_3_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15); const file_r11 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r14.openFile(file_r11, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DesktopComponent_ng_container_4_div_3_div_1_Template, 3, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", (file_r11.properties == null ? null : file_r11.properties.alt) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", file_r11 == null ? null : file_r11.properties == null ? null : file_r11.properties.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", file_r11.properties == null ? null : file_r11.properties.name, " ");
} }
function DesktopComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DesktopComponent_ng_container_4_div_1_Template, 3, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, DesktopComponent_ng_container_4_div_3_Template, 3, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 4, ctx_r2.applications$))("ngForTrackBy", ctx_r2.trackByFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 6, ctx_r2.files$))("ngForTrackBy", ctx_r2.trackByFn);
} }
function DesktopComponent_app_window_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-window", 10);
} if (rf & 2) {
    const window_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("currentWindow", window_r16);
} }
class DesktopComponent {
    constructor(store$, cd) {
        this.store$ = store$;
        this.cd = cd;
        this.loadedAssets$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.select)(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.selectLoadedAssets));
        this.windows$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.select)(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.selectActiveApplications));
        this.showIcons = false;
        this.applications$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.select)(_fsstore_file_explorer_reducer__WEBPACK_IMPORTED_MODULE_5__.selectApplications, { path: _constants_filesystem__WEBPACK_IMPORTED_MODULE_4__.fs.getPath('desktop') }));
        this.files$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.select)(_fsstore_file_explorer_reducer__WEBPACK_IMPORTED_MODULE_5__.selectFiles, { path: _constants_filesystem__WEBPACK_IMPORTED_MODULE_4__.fs.getPath('desktop') }));
        this.currentIcon = 0;
        this.icons = [
            'url(assets/superposition.png)',
            'url(assets/pbflogo.png)',
            'url(assets/pbf.jpg)',
        ];
        this.randomizedCount = 1;
        this.randomizedTimeout = null;
    }
    get desktop() {
        return this._desktop.nativeElement;
    }
    get background() {
        return this._background.nativeElement;
    }
    onMouseDown({ target }) {
        if (target === this.desktop) {
            this.store$.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.closeMenu)());
        }
    }
    ngAfterViewInit() {
        this.animateIn();
    }
    animateIn() {
        this.randomizedTimeout = setTimeout(() => this.randomizeLoader(), 100 * this.randomizedCount);
        setTimeout(() => {
            clearTimeout(this.randomizedTimeout);
        }, 2400);
        window.requestAnimationFrame(() => {
            this.desktopAnimation = new gsap__WEBPACK_IMPORTED_MODULE_11__.TimelineMax({ paused: true, reversed: false });
            this.desktopAnimation.to(this.desktop, 1, { opacity: '1', ease: 'Expo.easeInOut' }, 0);
            this.desktopAnimation.to(this.background, 1, { opacity: '.5', ease: 'Expo.easeInOut' }, 1);
            this.desktopAnimation.to(this.background, 1, { scale: '4', ease: 'Expo.easeInOut' }, 2);
            this.desktopAnimation.play();
            setTimeout(() => {
                this.showIcons = true;
                this.store$.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.createApp)({
                    app: _constants_applications__WEBPACK_IMPORTED_MODULE_2__.APPLICATIONS.console
                }));
                setTimeout(() => {
                    this.store$.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.setConsoleMessage)({ message: new _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.ConsoleMessage('[DESKTOP]', `<b>ProdByFallen Console</b>`) }));
                    this.store$.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.setConsoleMessage)({ message: new _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.ConsoleMessage('[DESKTOP]', `<b>LOADING...</b>`) }));
                }, 1000);
                setTimeout(() => {
                    this.store$.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.setAppMinified)({ app: _constants_applications__WEBPACK_IMPORTED_MODULE_2__.APPLICATIONS.console, minified: true }));
                    this.store$.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.createApp)({ app: _constants_applications__WEBPACK_IMPORTED_MODULE_2__.APPLICATIONS.welcome }));
                }, 2000);
            }, 4000);
        });
    }
    create(app) {
        this.store$.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.createApp)({ app }));
    }
    openFile(file, event) {
        event.preventDefault();
        event.stopPropagation();
        this.store$.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.openFile)({ file }));
    }
    trackByFn(index, item) {
        return item.id;
    }
    randomizeLoader() {
        this.currentIcon = this.getRandomInt(0, this.icons.length - 1);
        this.cd.detectChanges();
        clearTimeout(this.randomizedTimeout);
        this.randomizedTimeout = setTimeout(() => this.randomizeLoader(), 10 * (++this.randomizedCount));
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
DesktopComponent.ɵfac = function DesktopComponent_Factory(t) { return new (t || DesktopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef)); };
DesktopComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: DesktopComponent, selectors: [["app-desktop"]], viewQuery: function DesktopComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx._desktop = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx._background = _t.first);
    } }, hostBindings: function DesktopComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("mousedown", function DesktopComponent_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); });
    } }, decls: 7, vars: 7, consts: [[1, "desktop"], ["desktop", ""], [1, "icon", "desktop-background"], ["background", ""], [4, "ngIf"], [3, "currentWindow", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "desktop-icon", "appDesktopItem", "", 3, "title", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["appDesktopItem", "", 1, "desktop-icon", 3, "title", "click"], ["class", "icon", 3, "innerHTML", 4, "ngIf"], [1, "icon", 3, "innerHTML"], [3, "currentWindow"]], template: function DesktopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, DesktopComponent_ng_container_4_Template, 5, 8, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, DesktopComponent_app_window_5_Template, 1, 1, "app-window", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background", ctx.icons[ctx.currentIcon]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showIcons);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 5, ctx.windows$))("ngForTrackBy", ctx.trackByFn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _directives_desktop_icon_directive__WEBPACK_IMPORTED_MODULE_6__.DesktopIconDirective, _components_window_component__WEBPACK_IMPORTED_MODULE_7__.WindowComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_8__.SafePipe], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 70964:
/*!**********************************************!*\
  !*** ./src/app/components/link.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkComponent": function() { return /* binding */ LinkComponent; }
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons_faExternalLinkSquareAlt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faExternalLinkSquareAlt */ 34425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 52334);



const _c0 = ["*"];
class LinkComponent {
    constructor() {
        this.target = '_blank';
        this.faExternal = _fortawesome_free_solid_svg_icons_faExternalLinkSquareAlt__WEBPACK_IMPORTED_MODULE_0__.faExternalLinkSquareAlt;
    }
    navigate() {
        if (!this.link) {
            console.warn('Trying to open an empty link');
            return;
        }
        window.open(this.link, this.target);
    }
}
LinkComponent.ɵfac = function LinkComponent_Factory(t) { return new (t || LinkComponent)(); };
LinkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LinkComponent, selectors: [["app-link"]], inputs: { link: "link", icon: "icon", target: "target" }, ngContentSelectors: _c0, decls: 5, vars: 1, consts: [[1, "app-link", 3, "click"], [3, "icon"]], template: function LinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LinkComponent_Template_a_click_0_listener() { return ctx.navigate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", (tmp_0_0 = ctx.icon) !== null && tmp_0_0 !== undefined ? tmp_0_0 : ctx.faExternal);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent], encapsulation: 2 });


/***/ }),

/***/ 44108:
/*!************************************************!*\
  !*** ./src/app/components/loader.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": function() { return /* binding */ LoaderComponent; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/app.reducer */ 5754);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ 3877);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 84515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pipes/safe.pipe */ 25436);









const _c0 = ["loader"];
const _c1 = ["spinner"];
function LoaderComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("[", i_r4, "]");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 2, message_r3, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
class LoaderComponent {
    constructor(store$) {
        this.store$ = store$;
        this.loadingMessage$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.select)(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.selectLoadingMessage));
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment;
        this.spinnerSteps = ['\\', '|', '/', '-', '\\', '|', '/', '-'];
        this.currentSpinnerStep = 0;
        this.subs = [];
        this.subs.push(this.loadingMessage$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.skip)(1)).subscribe(next => {
            setTimeout(() => this.loader.scrollTop = this.loader.scrollHeight + 500, 100);
        }));
    }
    get loader() {
        return this._loader.nativeElement;
    }
    get spinner() {
        return this._spinner.nativeElement;
    }
    ngAfterViewInit() {
        this.animateLoader();
        this.animateSpinner();
    }
    ngOnDestroy() {
        this.subs.map(s => s.unsubscribe());
    }
    animateLoader() {
        window.requestAnimationFrame(() => {
            this.loaderAnimation = new gsap__WEBPACK_IMPORTED_MODULE_6__.TimelineMax({ paused: true, reversed: false });
            this.loaderAnimation.to(this.loader, 1, { opacity: '1', ease: 'Expo.easeInOut' }, 0);
            this.loaderAnimation.play();
        });
    }
    animateSpinner() {
        window.requestAnimationFrame(() => {
            if (this.currentSpinnerStep >= this.spinnerSteps.length) {
                this.currentSpinnerStep = 0;
            }
            this.spinner.innerHTML = this.spinnerSteps[this.currentSpinnerStep++];
            setTimeout(() => {
                this.animateSpinner();
            }, 200);
        });
    }
    trackByFn(index, item) {
        return index;
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store)); };
LoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader-component"]], viewQuery: function LoaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._loader = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._spinner = _t.first);
    } }, decls: 12, vars: 5, consts: [[1, "loader"], ["loader", ""], [1, "loader-title"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "loader-spinner"], ["spinner", ""], [1, "loader-rindex"], [1, "loader-message", 3, "innerHTML"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "PLEASE, WAIT UNTIL ALL ASSETS ARE LOADED.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, LoaderComponent_li_8_Template, 5, 5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("ProdByFallen [ Version ", ctx.environment.version, " ]");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 3, ctx.loadingMessage$))("ngForTrackBy", ctx.trackByFn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__.SafePipe], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 1676:
/*!**********************************************!*\
  !*** ./src/app/components/menu.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": function() { return /* binding */ MenuComponent; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/app.reducer */ 5754);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap */ 3877);
/* harmony import */ var _store_app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/app.actions */ 85294);
/* harmony import */ var _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @interfaces/interfaces */ 94806);
/* harmony import */ var _fsstore_file_explorer_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fsstore/file-explorer.reducer */ 94780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pipes/safe.pipe */ 25436);










const _c0 = ["menu"];
function MenuComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
} if (rf & 2) {
    const app_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, ctx_r4.loadedAssets$)[app_r3 == null ? null : app_r3.properties == null ? null : app_r3.properties.iconContrast] == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, ctx_r4.loadedAssets$)[app_r3 == null ? null : app_r3.properties == null ? null : app_r3.properties.iconContrast].resource, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function MenuComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MenuComponent_div_5_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const app_r3 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.create(app_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MenuComponent_div_5_div_1_Template, 3, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", (app_r3.properties == null ? null : app_r3.properties.alt) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", app_r3 == null ? null : app_r3.properties == null ? null : app_r3.properties.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", app_r3.properties.title, " ");
} }
function MenuComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
} if (rf & 2) {
    const app_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, ctx_r9.loadedAssets$)[app_r8 == null ? null : app_r8.properties == null ? null : app_r8.properties.iconContrast] == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, ctx_r9.loadedAssets$)[app_r8 == null ? null : app_r8.properties == null ? null : app_r8.properties.iconContrast].resource, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function MenuComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MenuComponent_div_9_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const app_r8 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.create(app_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MenuComponent_div_9_div_1_Template, 3, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", (app_r8.properties == null ? null : app_r8.properties.alt) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", app_r8 == null ? null : app_r8.properties == null ? null : app_r8.properties.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", app_r8.properties.title, " ");
} }
class MenuComponent {
    constructor(store$) {
        this.store$ = store$;
        this.loadedAssets$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.selectLoadedAssets));
        this.games$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_fsstore_file_explorer_reducer__WEBPACK_IMPORTED_MODULE_3__.selectApplicationsByCategory, { category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_2__.APPLICATION_CATEGORY.GAME }));
        this.infos$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_fsstore_file_explorer_reducer__WEBPACK_IMPORTED_MODULE_3__.selectApplicationsByCategory, { category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_2__.APPLICATION_CATEGORY.INFO }));
        this.utilities$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_fsstore_file_explorer_reducer__WEBPACK_IMPORTED_MODULE_3__.selectApplicationsByCategory, { category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_2__.APPLICATION_CATEGORY.UTILITY }));
    }
    get menu() { return this._menu.nativeElement; }
    ngAfterViewInit() { this.animateIn(); }
    animateIn() {
        window.requestAnimationFrame(() => {
            this.menuAnimation = new gsap__WEBPACK_IMPORTED_MODULE_7__.TimelineMax({ paused: true, reversed: false });
            this.menuAnimation.to(this.menu, 1, { y: '0', ease: 'Expo.easeInOut', delay: 2 }, 0);
            this.menuAnimation.play();
        });
    }
    toggleMenu() {
        this.store$.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.toggleMenuActive)());
    }
    create(app) {
        this.store$.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.createApp)({ app }));
        this.toggleMenu();
    }
    trackByFn(index, item) {
        return index;
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store)); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], viewQuery: function MenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._menu = _t.first);
    } }, decls: 19, vars: 12, consts: [[1, "menu"], ["menu", ""], [1, "menu-applications"], ["class", "menu-applications-item", 3, "title", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "menu-user"], [1, "menu-user-icon"], [1, "menu-user-info"], [1, "menu-applications-item", 3, "title", "click"], ["class", "icon", 3, "innerHTML", 4, "ngIf"], [1, "icon", 3, "innerHTML"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, MenuComponent_div_5_Template, 3, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Utilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, MenuComponent_div_9_Template, 3, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "xFD99x");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "ADMINISTRATOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_4_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 6, ctx.infos$))("ngForTrackBy", ctx.trackByFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 8, ctx.utilities$))("ngForTrackBy", ctx.trackByFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", "url(assets/" + ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 10, ctx.loadedAssets$)) == null ? null : tmp_4_0.about01 == null ? null : tmp_4_0.about01.path) + ")");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_4__.SafePipe], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 49887:
/*!*************************************************!*\
  !*** ./src/app/components/taskbar.component.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskBarComponent": function() { return /* binding */ TaskBarComponent; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/app.reducer */ 5754);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap */ 3877);
/* harmony import */ var _store_app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/app.actions */ 85294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _components_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/menu.component */ 1676);
/* harmony import */ var _directives_taskbar_item_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @directives/taskbar-item.directive */ 43628);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pipes/safe.pipe */ 25436);










const _c0 = ["taskbar"];
function TaskBarComponent_app_menu_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-menu");
} }
function TaskBarComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
} if (rf & 2) {
    const window_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, ctx_r5.loadedAssets$)[window_r4 == null ? null : window_r4.properties == null ? null : window_r4.properties.icon] == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, ctx_r5.loadedAssets$)[window_r4 == null ? null : window_r4.properties == null ? null : window_r4.properties.icon].resource, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function TaskBarComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskBarComponent_div_11_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const window_r4 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.toggleWindowMinified(window_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TaskBarComponent_div_11_div_1_Template, 3, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const window_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", !window_r4.properties.minified);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", window_r4 == null ? null : window_r4.properties == null ? null : window_r4.properties.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](window_r4.properties.title);
} }
function TaskBarComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Choose a Theme color");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskBarComponent_div_14_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.setTheme("default"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskBarComponent_div_14_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.setTheme("pink"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskBarComponent_div_14_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.setTheme("sunset"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskBarComponent_div_14_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r13.setTheme("elegant"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskBarComponent_div_14_Template_div_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r14.setTheme("vintage"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskBarComponent_div_14_Template_div_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.setTheme("paper"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("selected", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 12, ctx_r3.selectedTheme$) === "default");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("selected", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 14, ctx_r3.selectedTheme$) === "pink");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("selected", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 16, ctx_r3.selectedTheme$) === "sunset");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("selected", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 18, ctx_r3.selectedTheme$) === "elegant");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("selected", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 20, ctx_r3.selectedTheme$) === "vintage");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("selected", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 22, ctx_r3.selectedTheme$) === "paper");
} }
class TaskBarComponent {
    constructor(store$, cd) {
        this.store$ = store$;
        this.cd = cd;
        this.loadedAssets$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.selectLoadedAssets));
        this.windows$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.selectActiveApplications));
        this.menuActive$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.selectMenuActive));
        this.selectedTheme$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.selectTheme));
        this.selectTaskbarThemeSelectorActive$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.selectTaskbarThemeSelectorActive));
        this.date = new Date();
    }
    get taskbar() {
        return this._taskbar.nativeElement;
    }
    ngAfterViewInit() {
        this.animateIn();
        this.dateInterval = setInterval(() => {
            this.date = new Date();
            this.cd.detectChanges();
        }, 1000 / 60);
    }
    ngOnDestroy() {
        clearInterval(this.dateInterval);
    }
    animateIn() {
        window.requestAnimationFrame(() => {
            this.taskbarAnimation = new gsap__WEBPACK_IMPORTED_MODULE_7__.TimelineMax({ paused: true, reversed: false });
            this.taskbarAnimation.to(this.taskbar, 1, { y: '0', ease: 'Expo.easeInOut', delay: 2 }, 0);
            this.taskbarAnimation.play();
        });
    }
    toggleWindowMinified(w) {
        this.store$.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.setAppFocus)({ app: w, focus: true }));
        this.store$.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.setAppMinified)({ app: w, minified: false }));
    }
    toggleMenu() {
        this.store$.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.toggleMenuActive)());
    }
    setTheme(themeName) {
        this.store$.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.setTheme)({ theme: themeName }));
    }
    toggleTaskbarThemeSelector() {
        this.store$.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.toggleTaskbarThemeSelector)());
    }
    trackByFn(index, item) {
        return index;
    }
}
TaskBarComponent.ɵfac = function TaskBarComponent_Factory(t) { return new (t || TaskBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef)); };
TaskBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TaskBarComponent, selectors: [["app-taskbar"]], viewQuery: function TaskBarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._taskbar = _t.first);
    } }, decls: 19, vars: 20, consts: [[1, "taskbar"], ["taskbar", ""], [1, "taskbar-menu", 3, "click"], [1, "icon", 3, "innerHTML"], [4, "ngIf"], [1, "taskbar-windows"], ["class", "taskbar-windows-item", "appTaskbarItem", "", 3, "active", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["title", "Theme settings", 1, "taskbar-theme-toggle", 3, "click"], ["class", "taskbar-theme", 4, "ngIf"], [1, "taskbar-today"], ["appTaskbarItem", "", 1, "taskbar-windows-item", 3, "click"], ["class", "icon", 3, "innerHTML", 4, "ngIf"], [1, "taskbar-theme"], [1, "taskbar-theme-colors"], [1, "taskbar-theme-colors-picker"], [1, "taskbar-theme-colors-item", 2, "background-color", "#21e6c1", 3, "click"], [1, "taskbar-theme-colors-item", 2, "background-color", "#ffc2e2", 3, "click"], [1, "taskbar-theme-colors-item", 2, "background-color", "#e56b6f", 3, "click"], [1, "taskbar-theme-colors-item", 2, "background-color", "#57f9ff", 3, "click"], [1, "taskbar-theme-colors-item", 2, "background-color", "#ffe8d6", 3, "click"], [1, "taskbar-theme-colors-item", 2, "background-color", "#000", 3, "click"]], template: function TaskBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskBarComponent_Template_div_click_2_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, TaskBarComponent_app_menu_8_Template, 1, 0, "app-menu", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, TaskBarComponent_div_11_Template, 4, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskBarComponent_Template_div_click_13_listener() { return ctx.toggleTaskbarThemeSelector(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, TaskBarComponent_div_14_Template, 17, 24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 6, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 9, ctx.loadedAssets$)) == null ? null : tmp_0_0.nicaLogo == null ? null : tmp_0_0.nicaLogo.resource, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 11, ctx.menuActive$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 13, ctx.windows$))("ngForTrackBy", ctx.trackByFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 15, ctx.selectTaskbarThemeSelectorActive$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](18, 17, ctx.date, "short"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _components_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent, _directives_taskbar_item_directive__WEBPACK_IMPORTED_MODULE_3__.TaskbarItemDirective], pipes: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_4__.SafePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 85628:
/*!*************************************************!*\
  !*** ./src/app/components/tooltip.component.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipComponent": function() { return /* binding */ TooltipComponent; }
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons_faInfoCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faInfoCircle */ 77472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 52334);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pipes/safe.pipe */ 25436);





function TooltipComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "safe");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](1, 1, ctx_r0.html, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
const _c0 = ["*"];
class TooltipComponent {
    constructor() {
        this.faInfo = _fortawesome_free_solid_svg_icons_faInfoCircle__WEBPACK_IMPORTED_MODULE_2__.faInfoCircle;
    }
}
TooltipComponent.ɵfac = function TooltipComponent_Factory(t) { return new (t || TooltipComponent)(); };
TooltipComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TooltipComponent, selectors: [["app-tooltip"]], inputs: { html: "html" }, ngContentSelectors: _c0, decls: 4, vars: 2, consts: [[1, "tooltip"], [3, "icon"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"]], template: function TooltipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TooltipComponent_div_3_Template, 2, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.html);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], pipes: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_0__.SafePipe], encapsulation: 2 });


/***/ }),

/***/ 47068:
/*!************************************************!*\
  !*** ./src/app/components/window.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WindowComponent": function() { return /* binding */ WindowComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/app.reducer */ 5754);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap */ 3877);
/* harmony import */ var gsap_Draggable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap/Draggable */ 90748);
/* harmony import */ var _store_app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/app.actions */ 85294);
/* harmony import */ var _constants_applications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @constants/applications */ 81962);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 42457);
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utility.service */ 67278);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 52334);













const _c0 = ["window"];
const _c1 = ["contentComponent"];
function WindowComponent_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WindowComponent_ng_container_6_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r6.toggleFullScreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r4.faMaximize);
} }
function WindowComponent_ng_container_6_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WindowComponent_ng_container_6_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r8.toggleFullScreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r5.faMinimize);
} }
function WindowComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WindowComponent_ng_container_6_div_1_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, WindowComponent_ng_container_6_div_2_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.currentWindow.properties.fullScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.currentWindow.properties.fullScreen);
} }
function WindowComponent_ng_template_13_Template(rf, ctx) { }
class WindowComponent {
    constructor(utilityService, store$, viewContainerRef, componentFactoryResolver, cd) {
        this.utilityService = utilityService;
        this.store$ = store$;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.cd = cd;
        this.loadedAssets$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.selectLoadedAssets));
        this.faMaximize = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faExpand;
        this.faMinimize = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCompress;
        this.faWindowMaximize = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faWindowMaximize;
        this.faWindowMinimize = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faWindowMinimize;
        this.faClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faTimes;
    }
    get windowEl() {
        return this._windowEl.nativeElement;
    }
    ngAfterViewInit() {
        const componentFactory = this.componentFactoryResolver
            .resolveComponentFactory(_constants_applications__WEBPACK_IMPORTED_MODULE_2__.applicationMapping[this.currentWindow.properties.component]);
        this._windowContent.clear();
        const component = this._windowContent.createComponent(componentFactory);
        component.instance.data = this.currentWindow.properties.data;
        component.instance.window = this.currentWindow;
        this.animateIn();
    }
    ngOnChanges(changes) {
        const { currentWindow } = changes;
        if (currentWindow &&
            currentWindow.previousValue &&
            currentWindow.currentValue.properties.fullScreen !== currentWindow.previousValue.properties.fullScreen) {
            this.handleChanges(currentWindow.currentValue.properties.fullScreen);
        }
    }
    handleChanges(fullScreen) {
        if (this.draggableRef) {
            fullScreen ? this.draggableRef.disable() : this.draggableRef.enable();
            if (fullScreen) {
                this.windowEl.style.top = '50%';
                this.windowEl.style.left = '50%';
            }
        }
    }
    animateIn() {
        if (this.windowAnimation && this.windowAnimation.progress() === 1) {
            return;
        }
        window.requestAnimationFrame(() => {
            this.windowAnimation = new gsap__WEBPACK_IMPORTED_MODULE_7__.TimelineMax({ paused: true, reversed: false });
            this.windowAnimation.to(this.windowEl, .25, { opacity: '1', ease: 'Expo.easeInOut' }, 0);
            this.windowAnimation.play();
            if (this.currentWindow.properties.draggable) {
                this.draggableRef = gsap_Draggable__WEBPACK_IMPORTED_MODULE_8__.default.create(this.windowEl, {
                    type: 'x,y',
                    edgeResistance: 0.65,
                    trigger: this.windowEl.querySelector('.window-toolbar'),
                    bounds: '.desktop',
                    inertia: true,
                    onClick: () => this.store$.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.setAppFocus)({ app: this.currentWindow, focus: true })),
                    onDragStart: () => this.store$.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.setAppFocus)({ app: this.currentWindow, focus: true })),
                    onRelease: (e) => this.draggableRef.endDrag(e)
                })[0];
                this.handleChanges(this.currentWindow.properties.fullScreen);
            }
            setTimeout(() => {
                this.cd.detectChanges();
            }, 0);
        });
    }
    closeWindow() {
        this.store$.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.closeApp)({ app: this.currentWindow }));
    }
    toggleFullScreen() {
        this.store$.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.setAppFullscreen)({
            app: this.currentWindow,
            fullScreen: !this.currentWindow.properties.fullScreen
        }));
    }
    toggleWindowFocus() {
        this.store$.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.setAppFocus)({ app: this.currentWindow, focus: !this.currentWindow.properties.focus }));
    }
    toggleWindowMinified() {
        this.store$.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.setAppMinified)({ app: this.currentWindow, minified: !this.currentWindow.properties.minified }));
    }
}
WindowComponent.ɵfac = function WindowComponent_Factory(t) { return new (t || WindowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_utility_service__WEBPACK_IMPORTED_MODULE_3__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef)); };
WindowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: WindowComponent, selectors: [["app-window"]], viewQuery: function WindowComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewContainerRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._windowEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._windowContent = _t.first);
    } }, inputs: { currentWindow: "currentWindow" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 15, vars: 16, consts: [[1, "window", 3, "click"], ["window", ""], [1, "window-toolbar"], [1, "window-toolbar-title"], [1, "window-toolbar-actions"], [4, "ngIf"], [1, "icon", 3, "click"], [3, "icon"], [1, "window-content"], ["contentComponent", ""], ["class", "icon", 3, "click", 4, "ngIf"]], template: function WindowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WindowComponent_Template_div_click_0_listener() { return !ctx.currentWindow.properties.focus && ctx.toggleWindowFocus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, WindowComponent_ng_container_6_Template, 3, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WindowComponent_Template_div_click_8_listener() { return ctx.toggleWindowMinified(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WindowComponent_Template_div_click_10_listener() { return ctx.closeWindow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, WindowComponent_ng_template_13_Template, 0, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", (ctx.currentWindow.properties == null ? null : ctx.currentWindow.properties.size == null ? null : ctx.currentWindow.properties.size.width) || "auto")("height", (ctx.currentWindow.properties == null ? null : ctx.currentWindow.properties.size == null ? null : ctx.currentWindow.properties.size.height) || "auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("full-screen", ctx.currentWindow.properties.fullScreen)("on-focus", ctx.currentWindow.properties.focus)("hidden", ctx.currentWindow.properties.minified);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.currentWindow == null ? null : ctx.currentWindow.properties == null ? null : ctx.currentWindow.properties.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 14, ctx.utilityService.isMobile) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faWindowMinimize);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faClose);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FaIconComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 81962:
/*!*******************************************!*\
  !*** ./src/app/constants/applications.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APPLICATIONS": function() { return /* binding */ APPLICATIONS; },
/* harmony export */   "applicationMapping": function() { return /* binding */ applicationMapping; }
/* harmony export */ });
/* harmony import */ var _applications_console_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @applications/console.component */ 74542);
/* harmony import */ var _applications_browser_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @applications/browser.component */ 87024);
/* harmony import */ var _applications_file_explorer_file_explorer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @applications/file-explorer/file-explorer.component */ 36350);
/* harmony import */ var _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @interfaces/interfaces */ 94806);
/* harmony import */ var _applications_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @applications/welcome/welcome.component */ 24678);
/* harmony import */ var _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @constants/filesystem */ 47022);
/* harmony import */ var _applications_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @applications/text-editor/text-editor.component */ 17449);
/* harmony import */ var _applications_random_name_generator_random_name_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @applications/random-name-generator/random-name-generator */ 95800);








const explorer = new _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.Application({
    title: 'File explorer',
    component: 'FileExplorerComponent',
    alt: 'View files and applications',
    icon: 'folderIcon',
    iconContrast: 'folderIcon',
    size: { width: '1200px', height: '1000px' },
    fs: {
        category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.APPLICATION_CATEGORY.UTILITY,
        paths: [
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.APPLICATION),
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.UTILITIES),
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.DESKTOP)
        ]
    }
});
const textEditor = new _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.Application({
    title: 'Text editor',
    component: 'TextEditorComponent',
    alt: 'Text editor app',
    icon: 'textEditorIcon',
    iconContrast: 'textEditorIcon',
    fullScreen: true,
    size: { width: '1200px', height: '1000px' },
    fs: {
        category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.APPLICATION_CATEGORY.UTILITY,
        paths: [
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.APPLICATION),
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.UTILITIES)
        ]
    }
});
const console = new _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.Application({
    title: 'Console',
    component: 'ConsoleComponent',
    alt: 'A simple console wich displays a part of redux state changes',
    icon: 'console',
    iconContrast: 'console',
    startPosition: { x: '200px', y: '200px' },
    size: { width: '800px', height: '500px' },
    fs: {
        category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.APPLICATION_CATEGORY.UTILITY,
        paths: [
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.UTILITIES),
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.APPLICATION)
        ]
    }
});
const welcome = new _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.Application({
    title: 'Welcome',
    component: 'WelcomeComponent',
    alt: '...',
    icon: 'home',
    iconContrast: 'home',
    fullScreen: false,
    size: { width: '1000px', height: '800px' },
    fs: {
        category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.APPLICATION_CATEGORY.INFO,
        paths: [
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.APPLICATION),
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.INFO),
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.DESKTOP)
        ]
    }
});
const browser_spaceInvaders = new _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.Application({
    title: 'Bandcamp',
    alt: 'Checkout my Bandcamp',
    component: 'BrowserComponent',
    icon: 'unity',
    iconContrast: 'unity',
    fullScreen: true,
    size: { width: '1200px', height: '1000px' },
    data: { url: 'https://xfallen.bandcamp.com' },
    fs: {
        category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.APPLICATION_CATEGORY.UTILITY,
        paths: [
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.APPLICATION),
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.PROJECTS)
        ]
    }
});
const browser_helloUnity = new _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.Application({
    title: 'Hello Unity',
    component: 'BrowserComponent',
    alt: 'Take a look to an example of Unity3D webgl export and templating',
    icon: 'unity',
    iconContrast: 'unity',
    size: { width: '1200px', height: '1000px' },
    data: { url: 'https://www.youtube.com/channel/UCmJqyNQWj_imjSHUnmLRVrg' },
    fs: {
        category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.APPLICATION_CATEGORY.GAME,
        paths: [
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.APPLICATION),
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.GAMES)
        ]
    }
});
const browser_polyGone = new _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.Application({
    title: 'Poly Gone',
    component: 'BrowserComponent',
    alt: 'made by NicolaLC',
    icon: 'polygone_logo',
    iconContrast: 'polygone_logo',
    fullScreen: true,
    size: { width: '720px', height: '1280px' },
    data: { url: 'assets/static/webgl/polygone/index.html' },
    fs: {
        category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.APPLICATION_CATEGORY.GAME,
        paths: [
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.APPLICATION),
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.GAMES),
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.DESKTOP)
        ]
    }
});
const browser_relativeGravity = new _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.Application({
    title: 'YouTube',
    component: 'BrowserComponent',
    alt: 'My YouTube Channel',
    icon: 'unity',
    iconContrast: 'unity',
    fullScreen: true,
    size: { width: '720px', height: '1280px' },
    data: { url: 'http://youtube.com/xFallenDemon99x' },
    fs: {
        category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.APPLICATION_CATEGORY.GAME,
        paths: [
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.APPLICATION),
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.GAMES),
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.DESKTOP)
        ]
    }
});
const browser_autoBattler = new _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.Application({
    title: 'Reddit',
    component: 'BrowserComponent',
    alt: 'xFD99x Subreddit',
    icon: 'reddit',
    iconContrast: ' ',
    fullScreen: true,
    size: { width: '720px', height: '1280px' },
    data: { url: 'http://reddit.com/r/xFallenDemon99x' },
    fs: {
        category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.APPLICATION_CATEGORY.GAME,
        paths: [
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.APPLICATION),
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.GAMES),
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.DESKTOP)
        ]
    }
});
const knightsAndMonsters = new _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.Application({
    title: 'Knights VS Monsters',
    component: 'KnightsAndMonstersComponent',
    alt: 'Play Knights VS Monsters Now!',
    icon: 'unity',
    iconContrast: 'unity',
    size: { width: '1200px', height: '1000px' },
    fullScreen: true,
    fs: {
        category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.APPLICATION_CATEGORY.GAME,
        paths: [
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.APPLICATION),
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.GAMES)
        ]
    }
});
const randomNameGenerator = new _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.Application({
    title: 'Reddit',
    component: 'BrowserComponent',
    alt: 'xFD99x Subreddit',
    icon: 'reddit',
    iconContrast: ' ',
    fullScreen: true,
    size: { width: '720px', height: '1280px' },
    data: { url: 'http://reddit.com/r/xFallenDemon99x' },
    fs: {
        category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_3__.APPLICATION_CATEGORY.UTILITY,
        paths: [
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.APPLICATION),
            _constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.fs.getPath(_constants_filesystem__WEBPACK_IMPORTED_MODULE_5__.FS_PATH_MAPPING.UTILITIES)
        ]
    }
});
const APPLICATIONS = {
    console,
    welcome,
    browser_spaceInvaders,
    explorer,
    textEditor,
};
const applicationMapping = {
    'WelcomeComponent': _applications_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__.WelcomeComponent,
    'ConsoleComponent': _applications_console_component__WEBPACK_IMPORTED_MODULE_0__.ConsoleComponent,
    'BrowserComponent': _applications_browser_component__WEBPACK_IMPORTED_MODULE_1__.BrowserComponent,
    'FileExplorerComponent': _applications_file_explorer_file_explorer_component__WEBPACK_IMPORTED_MODULE_2__.FileExplorerComponent,
    'TextEditorComponent': _applications_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_6__.TextEditorComponent,
    'RandomNameGeneratorComponent': _applications_random_name_generator_random_name_generator__WEBPACK_IMPORTED_MODULE_7__.RandomNameGeneratorComponent,
};


/***/ }),

/***/ 61262:
/*!*************************************!*\
  !*** ./src/app/constants/assets.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assetsToLoad": function() { return /* binding */ assetsToLoad; }
/* harmony export */ });
const assetsToLoad = {
    nicaCutted: {
        path: 'nica-cutted.svg',
        loaded: false,
        resource: null
    },
    linkedin: {
        path: 'linkedin.svg',
        loaded: false,
        resource: null
    },
    github: {
        path: 'github.svg',
        loaded: false,
        resource: null
    },
    gitlab: {
        path: 'gitlab.svg',
        loaded: false,
        resource: null
    },
    nicaLogo: {
        path: 'nica-logo.svg',
        loaded: false,
        resource: null
    },
    nicaBackground: {
        path: 'nicaLogo.svg',
        loaded: false,
        resource: null
    },
    marimar: {
        path: 'marimar.svg',
        loaded: false,
        resource: null
    },
    console: {
        path: 'console.svg',
        loaded: false,
        resource: null
    },
    home: {
        path: 'home.svg',
        loaded: false,
        resource: null
    },
    about01: {
        path: 'about01.png',
        loaded: false,
        resource: null
    },
    university: {
        path: 'university.svg',
        loaded: false,
        resource: null
    },
    addvalue: {
        path: 'addvalue.svg',
        loaded: false,
        resource: null
    },
    vas: {
        path: 'vas.svg',
        loaded: false,
        resource: null
    },
    slowmedia: {
        path: 'slowmedia.svg',
        loaded: false,
        resource: null
    },
    eleads: {
        path: 'eleads.svg',
        loaded: false,
        resource: null
    },
    trueblue: {
        path: 'trueblue.svg',
        loaded: false,
        resource: null
    },
    spaceinvaders: {
        path: 'spaceinvaders.svg',
        loaded: false,
        resource: null
    },
    unity: {
        path: 'unity.svg',
        loaded: false,
        resource: null
    },
    unreal: {
        path: 'unreal.svg',
        loaded: false,
        resource: null
    },
    folderIcon: {
        path: 'folderIcon.svg',
        loaded: false,
        resource: null
    },
    devTo: {
        path: 'devTo.svg',
        loaded: false,
        resource: null
    },
    textEditorIcon: {
        path: 'textEditorIcon.svg',
        loaded: false,
        resource: null
    },
    jssheetIcon: {
        path: 'jssheetIcon.svg',
        loaded: false,
        resource: null
    },
    twitterIcon: {
        path: 'twitterIcon.svg',
        loaded: false,
        resource: null
    },
    redditIcon: {
        path: 'redditIcon.svg',
        loaded: false,
        resource: null
    },
    hackernoonIcon: {
        path: 'hackernoonIcon.svg',
        loaded: false,
        resource: null
    },
    socialFolderIcon: {
        path: 'socialFolderIcon.svg',
        loaded: false,
        resource: null
    },
    km_logo1: {
        path: 'k&m/logo-part1.svg',
        loaded: false,
        resource: null
    },
    km_logo2: {
        path: 'k&m/logo-part2.svg',
        loaded: false,
        resource: null
    },
    km_logo3: {
        path: 'k&m/logo-part3.svg',
        loaded: false,
        resource: null
    },
    km_playButton: {
        path: 'k&m/play_button.png',
        loaded: false,
        resource: null
    },
    km_shield: {
        path: 'k&m/shield_icon.png',
        loaded: false,
        resource: null
    },
    km_sword: {
        path: 'k&m/sword_icon.png',
        loaded: false,
        resource: null
    },
    km_sword_r: {
        path: 'k&m/sword_icon_r.png',
        loaded: false,
        resource: null
    },
    km_background01: {
        path: 'k&m/background01.png',
        loaded: false,
        resource: null
    },
    km_background02: {
        path: 'k&m/background02.png',
        loaded: false,
        resource: null
    },
    km_background03: {
        path: 'k&m/background03.png',
        loaded: false,
        resource: null
    },
    random: {
        path: 'random.svg',
        loaded: false,
        resource: null
    },
    polygone_logo: {
        path: 'polygone_logo.svg',
        loaded: false,
        resource: null
    },
    autobattler_logo: {
        path: 'autobattler-logo.svg',
        loaded: false,
        resource: null
    },
    folderIconGame: {
        path: 'folderIconGame.svg',
        loaded: false,
        resource: null
    },
    folderIconApps: {
        path: 'folderIconApps.svg',
        loaded: false,
        resource: null
    },
    folderIconProjects: {
        path: 'folderIconProjects.svg',
        loaded: false,
        resource: null
    },
    scienceIcon: {
        path: 'science-icon.svg',
        loaded: false,
        resource: null
    },
    catIcon: {
        path: 'cat-icon.svg',
        loaded: false,
        resource: null
    },
    beerIcon: {
        path: 'beer-icon.svg',
        loaded: false,
        resource: null
    },
    mountainIcon: {
        path: 'mountain-icon.svg',
        loaded: false,
        resource: null
    },
    italianLogo: {
        path: 'italian-logo.png',
        loaded: false,
        resource: null
    },
    youtube: {
        path: 'youtube.svg',
        loaded: false,
        resource: null
    },
    itch: {
        path: 'itch.io.svg',
        loaded: false,
        resource: null
    },
    codingame: {
        path: 'codingame.svg',
        loaded: false,
        resource: null
    }
};


/***/ }),

/***/ 47022:
/*!*****************************************!*\
  !*** ./src/app/constants/filesystem.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FS_PATH_MAPPING": function() { return /* binding */ FS_PATH_MAPPING; },
/* harmony export */   "fs": function() { return /* binding */ fs; },
/* harmony export */   "FILES": function() { return /* binding */ FILES; }
/* harmony export */ });
/* harmony import */ var _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @interfaces/interfaces */ 94806);
/** GLOBAL APP FILESYSTEM */

const FS_PATH_MAPPING = {
    ROOT: 'system',
    APPLICATION: 'applications',
    DESKTOP: 'desktop',
    UTILITIES: 'utilities',
    GAMES: 'Super Position EP',
    OTHERS: 'Super Position EP',
    INFO: 'info',
    SYSTEM: 'system',
    PROJECTS: 'Music',
    SOCIAL: 'social'
};
const fs = new _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FileSystem(FS_PATH_MAPPING.ROOT, {
    system: FS_PATH_MAPPING.SYSTEM,
    info: FS_PATH_MAPPING.INFO,
    others: FS_PATH_MAPPING.OTHERS,
    projects: FS_PATH_MAPPING.PROJECTS,
    social: FS_PATH_MAPPING.SOCIAL,
    desktop: FS_PATH_MAPPING.DESKTOP,
    utilities: FS_PATH_MAPPING.UTILITIES,
});
const FILES = [
    {
        properties: {
            name: 'Super Position (EP)',
            alt: 'My latest EP',
            category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_CATEGORY.LINK,
            data: { url: 'https://xfallen.bandcamp.com/album/ep-super-position' },
            icon: 'unity',
            iconContrast: 'unity'
        },
        fs: {
            paths: [fs.getPath(FS_PATH_MAPPING.PROJECTS)],
            root: fs.getPath(FS_PATH_MAPPING.PROJECTS)
        }
    },
    {
        properties: {
            name: '01. Intangible.Wav',
            alt: 'ProdByFallen - Intangible Wav',
            category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_CATEGORY.LINK,
            data: { url: 'https://xfallen.bandcamp.com/track/intangible-wav' },
            icon: 'unity',
            iconContrast: 'unity'
        },
        fs: {
            paths: [fs.getPath(FS_PATH_MAPPING.OTHERS)],
            root: fs.getPath(FS_PATH_MAPPING.OTHERS)
        }
    },
    {
        properties: {
            name: '02. Super Position (ft. Archaeologist)',
            alt: 'ProdByFallen - Super Position (ft. Archaeologist)',
            category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_CATEGORY.LINK,
            data: { url: 'https://xfallen.bandcamp.com/track/super-position-ft-archaeologist' },
            icon: 'unity',
            iconContrast: 'unity'
        },
        fs: {
            paths: [fs.getPath(FS_PATH_MAPPING.OTHERS)],
            root: fs.getPath(FS_PATH_MAPPING.OTHERS)
        }
    },
    {
        properties: {
            name: '03. Levels',
            alt: 'ProdByFallen - Levels',
            category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_CATEGORY.LINK,
            data: { url: 'https://xfallen.bandcamp.com/track/levels' },
            icon: 'unity',
            iconContrast: 'unity'
        },
        fs: {
            paths: [fs.getPath(FS_PATH_MAPPING.OTHERS)],
            root: fs.getPath(FS_PATH_MAPPING.OTHERS)
        }
    },
    {
        properties: {
            name: '04. Game Over',
            alt: 'ProdByFallen - Game Over',
            category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_CATEGORY.LINK,
            data: { url: 'https://xfallen.bandcamp.com/track/game-over-chipstep' },
            icon: 'unity',
            iconContrast: 'unity'
        },
        fs: {
            paths: [fs.getPath(FS_PATH_MAPPING.OTHERS)],
            root: fs.getPath(FS_PATH_MAPPING.OTHERS)
        }
    },
    {
        properties: {
            name: '05. Malloc()',
            alt: 'ProdByFallen - Malloc()',
            category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_CATEGORY.LINK,
            data: { url: 'https://xfallen.bandcamp.com/track/malloc' },
            icon: 'unity',
            iconContrast: 'unity'
        },
        fs: {
            paths: [fs.getPath(FS_PATH_MAPPING.OTHERS)],
            root: fs.getPath(FS_PATH_MAPPING.OTHERS)
        }
    },
    {
        properties: {
            name: 'TribalRose - Around (2021 Demo)',
            alt: '2021 version of my demo Around',
            category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_CATEGORY.LINK,
            data: { url: 'https://www.youtube.com/watch?v=LbHZgpSas_Y' },
            icon: 'youtube',
            iconContrast: 'youtube'
        },
        fs: {
            paths: [fs.getPath(FS_PATH_MAPPING.PROJECTS)],
            root: fs.getPath(FS_PATH_MAPPING.PROJECTS)
        }
    },
    {
        properties: {
            name: 'TribalRose - Everything EP',
            alt: 'My Guitar Demos',
            category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_CATEGORY.LINK,
            data: { url: 'https://TribalRose.bandcamp.com' },
            icon: 'unity',
            iconContrast: 'unity'
        },
        fs: {
            paths: [fs.getPath(FS_PATH_MAPPING.PROJECTS)],
            root: fs.getPath(FS_PATH_MAPPING.PROJECTS)
        }
    },
    {
        properties: {
            name: 'Chiptune Remixes',
            alt: 'My Youtube Channel',
            category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_CATEGORY.LINK,
            data: { url: 'https://Youtube.com/xFallenDemon99x/' },
            icon: 'youtube',
            iconContrast: 'youtube'
        },
        fs: {
            paths: [fs.getPath(FS_PATH_MAPPING.PROJECTS)],
            root: fs.getPath(FS_PATH_MAPPING.PROJECTS)
        }
    },
    {
        properties: {
            name: 'YouTube',
            alt: 'My Main Youtube Channel',
            category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_CATEGORY.LINK,
            data: { url: 'https://www.youtube.com/xFallenDemon99x' },
            icon: 'youtube',
            iconContrast: 'youtube'
        },
        fs: {
            paths: [
                fs.getPath(FS_PATH_MAPPING.SOCIAL),
                fs.getPath(FS_PATH_MAPPING.DESKTOP)
            ],
            root: fs.getPath(FS_PATH_MAPPING.SOCIAL)
        }
    },
    {
        properties: {
            name: 'Bandcamp',
            alt: 'ProdByFallen on Bandcamp',
            category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_CATEGORY.LINK,
            data: { url: 'https://xFallen.bandcamp.com' },
            icon: 'unity',
            iconContrast: 'unity'
        },
        fs: {
            paths: [
                fs.getPath(FS_PATH_MAPPING.SOCIAL),
                fs.getPath(FS_PATH_MAPPING.DESKTOP)
            ],
            root: fs.getPath(FS_PATH_MAPPING.SOCIAL)
        }
    },
    {
        properties: {
            name: 'Spotify',
            alt: 'ProdByFallen on Spotify',
            category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_CATEGORY.LINK,
            data: { url: 'https://open.spotify.com/artist/58I7icWChtlsIQI7mgmfYz' },
            icon: 'devTo',
            iconContrast: 'devTo'
        },
        fs: {
            paths: [fs.getPath(FS_PATH_MAPPING.SOCIAL)],
            root: fs.getPath(FS_PATH_MAPPING.SOCIAL)
        }
    },
    {
        properties: {
            name: 'Linktree',
            alt: 'Stream ProdByFallen',
            category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_CATEGORY.LINK,
            data: { url: 'https://linktr.ee/ProdByFallen' },
            icon: 'linkedin',
            iconContrast: 'linkedin'
        },
        fs: {
            paths: [
                fs.getPath(FS_PATH_MAPPING.SOCIAL),
                fs.getPath(FS_PATH_MAPPING.DESKTOP)
            ],
            root: fs.getPath(FS_PATH_MAPPING.SOCIAL)
        }
    },
    {
        properties: {
            name: 'Twitter',
            alt: 'My Twitter profile',
            category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_CATEGORY.LINK,
            data: { url: 'https://twitter.com/xFD99x' },
            icon: 'twitterIcon',
            iconContrast: 'twitterIcon'
        },
        fs: {
            paths: [
                fs.getPath(FS_PATH_MAPPING.SOCIAL),
                fs.getPath(FS_PATH_MAPPING.DESKTOP)
            ],
            root: fs.getPath(FS_PATH_MAPPING.SOCIAL)
        }
    },
    {
        properties: {
            name: 'Reddit',
            alt: 'My Subreddit',
            category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_CATEGORY.LINK,
            data: { url: 'https://www.reddit.com/r/xFallenDemon99x' },
            icon: 'redditIcon',
            iconContrast: 'redditIcon'
        },
        fs: {
            paths: [fs.getPath(FS_PATH_MAPPING.SOCIAL)],
            root: fs.getPath(FS_PATH_MAPPING.SOCIAL)
        }
    },
    {
        properties: {
            name: 'Facebook',
            alt: 'ProdByFallen on Facebook',
            category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_CATEGORY.LINK,
            data: { url: 'https://facebook.com/ProdByFallen' },
            icon: 'hackernoonIcon',
            iconContrast: 'hackernoonIcon'
        },
        fs: {
            paths: [fs.getPath(FS_PATH_MAPPING.SOCIAL)],
            root: fs.getPath(FS_PATH_MAPPING.SOCIAL)
        }
    },
    {
        properties: {
            name: 'Itch.io',
            alt: 'My itch.io landing page',
            category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_CATEGORY.LINK,
            data: { url: 'https://xFallenDemon99x.itch.io/' },
            icon: 'itch',
            iconContrast: 'itch'
        },
        fs: {
            paths: [
                fs.getPath(FS_PATH_MAPPING.SOCIAL),
                fs.getPath(FS_PATH_MAPPING.DESKTOP)
            ],
            root: fs.getPath(FS_PATH_MAPPING.SOCIAL)
        }
    },
    {
        properties: {
            name: FS_PATH_MAPPING.APPLICATION,
            alt: 'Applications folder',
            category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_CATEGORY.FOLDER,
            icon: 'folderIcon',
            iconContrast: 'folderIcon'
        },
        fs: {
            paths: [
                fs.getPath(FS_PATH_MAPPING.ROOT),
                fs.getPath(FS_PATH_MAPPING.DESKTOP)
            ],
            root: fs.getPath(FS_PATH_MAPPING.APPLICATION)
        }
    },
    {
        properties: {
            name: FS_PATH_MAPPING.PROJECTS,
            alt: 'Music folder',
            category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_CATEGORY.FOLDER,
            icon: 'folderIcon',
            iconContrast: 'folderIcon'
        },
        fs: {
            paths: [fs.getPath(FS_PATH_MAPPING.ROOT), fs.getPath(FS_PATH_MAPPING.DESKTOP)],
            root: fs.getPath(FS_PATH_MAPPING.PROJECTS)
        }
    },
    {
        properties: {
            name: FS_PATH_MAPPING.GAMES,
            alt: 'Super Position EP',
            category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_CATEGORY.FOLDER,
            icon: 'folderIcon',
            iconContrast: 'folderIcon'
        },
        fs: {
            paths: [fs.getPath(FS_PATH_MAPPING.ROOT), fs.getPath(FS_PATH_MAPPING.DESKTOP)],
            root: fs.getPath(FS_PATH_MAPPING.OTHERS)
        }
    },
    {
        properties: {
            name: FS_PATH_MAPPING.SOCIAL,
            alt: 'Socials folder',
            category: _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_CATEGORY.FOLDER,
            icon: 'folderIcon',
            iconContrast: 'folderIcon'
        },
        fs: {
            paths: [fs.getPath(FS_PATH_MAPPING.ROOT), fs.getPath(FS_PATH_MAPPING.DESKTOP)],
            root: fs.getPath(FS_PATH_MAPPING.SOCIAL)
        }
    }
];


/***/ }),

/***/ 81952:
/*!************************************************!*\
  !*** ./src/app/directives/button.directive.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonDirective": function() { return /* binding */ ButtonDirective; }
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ 3877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class ButtonDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    onMouseEnter() {
        if (this.itemAnimation.isActive()) {
            this.itemAnimation.kill();
        }
        this.itemAnimation = new gsap__WEBPACK_IMPORTED_MODULE_0__.TimelineMax({ paused: true, reversed: false });
        this.itemAnimation.to(this.viewContainerRef.element.nativeElement, .1, { scale: 1.1, ease: 'Expo.easeInOut' }, 0);
        this.itemAnimation.play();
    }
    onMouseLeave() {
        if (this.itemAnimation.isActive()) {
            this.itemAnimation.kill();
        }
        this.itemAnimation = new gsap__WEBPACK_IMPORTED_MODULE_0__.TimelineMax({ paused: true, reversed: false });
        this.itemAnimation.to(this.viewContainerRef.element.nativeElement, .1, { scale: 1, ease: 'Expo.easeInOut' }, 0);
        this.itemAnimation.play();
    }
    onMouseDown() {
        if (this.itemAnimation.isActive()) {
            this.itemAnimation.kill();
        }
        this.itemAnimation = new gsap__WEBPACK_IMPORTED_MODULE_0__.TimelineMax({ paused: true, reversed: false });
        this.itemAnimation.to(this.viewContainerRef.element.nativeElement, .1, { scale: .95, ease: 'power4' }, 0);
        this.itemAnimation.play();
    }
    onMouseUp() {
        if (this.itemAnimation.isActive()) {
            this.itemAnimation.kill();
        }
        this.itemAnimation = new gsap__WEBPACK_IMPORTED_MODULE_0__.TimelineMax({ paused: true, reversed: false });
        this.itemAnimation.to(this.viewContainerRef.element.nativeElement, .1, { scale: 1, ease: 'power4' }, 0);
        this.itemAnimation.play();
    }
    ngOnInit() {
        this.animateIn();
    }
    animateIn() {
        window.requestAnimationFrame(() => {
            this.itemAnimation = new gsap__WEBPACK_IMPORTED_MODULE_0__.TimelineMax({ paused: true, reversed: false });
            this.itemAnimation.to(this.viewContainerRef.element.nativeElement, 1, { opacity: 1, ease: 'Expo.easeInOut' }, 0);
            this.itemAnimation.to(this.viewContainerRef.element.nativeElement, .75, { y: 0, ease: 'Expo.easeInOut' }, 0);
            this.itemAnimation.play();
        });
    }
}
ButtonDirective.ɵfac = function ButtonDirective_Factory(t) { return new (t || ButtonDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef)); };
ButtonDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ButtonDirective, selectors: [["", "appButton", ""]], hostBindings: function ButtonDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function ButtonDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function ButtonDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); })("mousedown", function ButtonDirective_mousedown_HostBindingHandler() { return ctx.onMouseDown(); })("mouseup", function ButtonDirective_mouseup_HostBindingHandler() { return ctx.onMouseUp(); });
    } } });


/***/ }),

/***/ 67845:
/*!******************************************************!*\
  !*** ./src/app/directives/desktop-icon.directive.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesktopIconDirective": function() { return /* binding */ DesktopIconDirective; }
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ 3877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class DesktopIconDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    onMouseDown() {
        if (this.itemAnimation.isActive()) {
            this.itemAnimation.kill();
        }
        this.itemAnimation = new gsap__WEBPACK_IMPORTED_MODULE_0__.TimelineMax({ paused: true, reversed: false });
        this.itemAnimation.to(this.viewContainerRef.element.nativeElement, .1, { scaleX: .95, scaleY: .95, ease: 'Expo.easeInOut' }, 0);
        this.itemAnimation.play();
    }
    onMouseUp() {
        if (this.itemAnimation.isActive()) {
            this.itemAnimation.kill();
        }
        this.itemAnimation = new gsap__WEBPACK_IMPORTED_MODULE_0__.TimelineMax({ paused: true, reversed: false });
        this.itemAnimation.to(this.viewContainerRef.element.nativeElement, .1, { scaleX: 1, scaleY: 1, ease: 'Expo.easeInOut' }, 0);
        this.itemAnimation.play();
    }
    ngOnInit() {
        this.animateIn();
    }
    animateIn() {
        window.requestAnimationFrame(() => {
            this.itemAnimation = new gsap__WEBPACK_IMPORTED_MODULE_0__.TimelineMax({ paused: true, reversed: false });
            this.itemAnimation.to(this.viewContainerRef.element.nativeElement, 1, { opacity: 1, ease: 'Expo.easeInOut' }, 0);
            this.itemAnimation.to(this.viewContainerRef.element.nativeElement, .75, { y: 0, ease: 'Expo.easeInOut' }, 0);
            this.itemAnimation.play();
        });
    }
}
DesktopIconDirective.ɵfac = function DesktopIconDirective_Factory(t) { return new (t || DesktopIconDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef)); };
DesktopIconDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DesktopIconDirective, selectors: [["", "appDesktopItem", ""]], hostBindings: function DesktopIconDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function DesktopIconDirective_mousedown_HostBindingHandler() { return ctx.onMouseDown(); })("mouseup", function DesktopIconDirective_mouseup_HostBindingHandler() { return ctx.onMouseUp(); });
    } } });


/***/ }),

/***/ 43628:
/*!******************************************************!*\
  !*** ./src/app/directives/taskbar-item.directive.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskbarItemDirective": function() { return /* binding */ TaskbarItemDirective; }
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ 3877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class TaskbarItemDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
        this.animateIn();
    }
    animateIn() {
        window.requestAnimationFrame(() => {
            this.itemAnimation = new gsap__WEBPACK_IMPORTED_MODULE_0__.TimelineMax({ paused: true, reversed: false });
            this.itemAnimation.to(this.viewContainerRef.element.nativeElement, 1, { opacity: 1, ease: 'Expo.easeInOut' }, 0);
            this.itemAnimation.play();
        });
    }
}
TaskbarItemDirective.ɵfac = function TaskbarItemDirective_Factory(t) { return new (t || TaskbarItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef)); };
TaskbarItemDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TaskbarItemDirective, selectors: [["", "appTaskbarItem", ""]] });


/***/ }),

/***/ 94806:
/*!******************************************!*\
  !*** ./src/app/interfaces/interfaces.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetMap": function() { return /* binding */ AssetMap; },
/* harmony export */   "Asset": function() { return /* binding */ Asset; },
/* harmony export */   "Application": function() { return /* binding */ Application; },
/* harmony export */   "ConsoleMessage": function() { return /* binding */ ConsoleMessage; },
/* harmony export */   "APPLICATION_CATEGORY": function() { return /* binding */ APPLICATION_CATEGORY; },
/* harmony export */   "ApplicationProperties": function() { return /* binding */ ApplicationProperties; },
/* harmony export */   "AppSettings": function() { return /* binding */ AppSettings; },
/* harmony export */   "FILE_CATEGORY": function() { return /* binding */ FILE_CATEGORY; },
/* harmony export */   "FileProperties": function() { return /* binding */ FileProperties; },
/* harmony export */   "File": function() { return /* binding */ File; },
/* harmony export */   "FileSystem": function() { return /* binding */ FileSystem; }
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ 62230);

/** ASSETS MANAGEMENT */
class AssetMap {
}
class Asset {
}
/** ./ ASSETS MANAGEMENT */
/** APPLICATION MANAGEMENT */
class Application {
    constructor(properties) {
        this.properties = Object.assign({ fullScreen: false, draggable: true, focus: true, minified: false }, properties);
        this.id = uuid__WEBPACK_IMPORTED_MODULE_0__.default();
    }
}
class ConsoleMessage {
    constructor(description = 'EMPTY', message = '_EMPTY') {
        this.description = description;
        this.message = message;
    }
}
var APPLICATION_CATEGORY;
(function (APPLICATION_CATEGORY) {
    APPLICATION_CATEGORY["GAME"] = "GAME";
    APPLICATION_CATEGORY["UTILITY"] = "UTILITY";
    APPLICATION_CATEGORY["INFO"] = "INFO";
    APPLICATION_CATEGORY["OTHERS"] = "OTHERS";
})(APPLICATION_CATEGORY || (APPLICATION_CATEGORY = {}));
class ApplicationProperties {
}
/** ./ APPLICATION MANAGEMENT */
/** APP SETTINGS MANAGEMENT */
class AppSettings {
}
/** ./ APP SETTINGS MANAGEMENT */
/** FILE MANAGEMENT */
var FILE_CATEGORY;
(function (FILE_CATEGORY) {
    FILE_CATEGORY["IMAGE"] = "IMAGE";
    FILE_CATEGORY["TEXT"] = "TEXT";
    FILE_CATEGORY["AUDIO"] = "AUDIO";
    FILE_CATEGORY["LINK"] = "LINK";
    FILE_CATEGORY["APPLICATION"] = "APPLICATION";
    FILE_CATEGORY["FOLDER"] = "FOLDER";
})(FILE_CATEGORY || (FILE_CATEGORY = {}));
class FileProperties {
}
class File {
}
class FileSystem {
    constructor(root, paths) {
        this.paths = paths;
        this.root = root;
    }
    get root() {
        return this._root;
    }
    set root(value) {
        this._root = value;
    }
    get paths() {
        return this._paths;
    }
    set paths(value) {
        this._paths = value;
    }
    getPath(pathPartial) {
        const target = this._paths[pathPartial];
        return target ?
            (target === this.root ? this.root : `${this.root}/${target}`)
            : pathPartial;
    }
}
/** ./ FILE MANAGEMENT */


/***/ }),

/***/ 25436:
/*!************************************!*\
  !*** ./src/app/pipes/safe.pipe.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": function() { return /* binding */ SafePipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 71570);


class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SafePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });


/***/ }),

/***/ 76284:
/*!********************************************!*\
  !*** ./src/app/services/assets.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetsService": function() { return /* binding */ AssetsService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 42720);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var _constants_assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/assets */ 61262);
/* harmony import */ var _store_app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/app.actions */ 85294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 17562);








class AssetsService {
    constructor(http, store$) {
        this.http = http;
        this.store$ = store$;
        this.assetsToLoad = _constants_assets__WEBPACK_IMPORTED_MODULE_0__.assetsToLoad;
    }
    getAll() {
        const keys = Object.keys(this.assetsToLoad);
        const calls = [];
        keys.map((assetKey) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            calls.push(this.loadAsset(assetKey));
        }));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)(calls).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(results => {
            keys.map((key, index) => this.assetsToLoad[key] = Object.assign(Object.assign({}, this.assetsToLoad[key]), { loaded: true, resource: results[index] }));
            return this.assetsToLoad;
        }));
    }
    loadAsset(assetKey) {
        return this.http.get(`assets/${this.assetsToLoad[assetKey].path}`, { responseType: 'text' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(res => {
            this.store$.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.setLoadingMessage)({ message: `<i><pre>[200]</pre> LOADED </i>: ${assetKey}` }));
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(res);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(err => {
            this.store$.dispatch((0,_store_app_actions__WEBPACK_IMPORTED_MODULE_1__.setLoadingMessage)({ message: `<small>ERROR</small>: ${assetKey} - <small>${err.status} - ${err.statusText}</small>` }));
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
        }));
    }
}
AssetsService.ɵfac = function AssetsService_Factory(t) { return new (t || AssetsService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store)); };
AssetsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: AssetsService, factory: AssetsService.ɵfac });


/***/ }),

/***/ 8140:
/*!*******************************************!*\
  !*** ./src/app/services/theme.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": function() { return /* binding */ ThemeService; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 20088);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/app.reducer */ 5754);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);





class ThemeService {
    constructor(store$) {
        this.store$ = store$;
        this.appSettings$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.select)(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.selectAppSettings));
        this.subs = [];
        this.subs.push(this.appSettings$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(({ theme }) => {
            this.setTheme(theme);
        })).subscribe());
    }
    ngOnDestroy() {
        this.subs.map(s => s.unsubscribe());
    }
    setTheme(name) {
        const themeName = `${name}-theme`;
        const classList = document.body.classList;
        classList.forEach(className => { if (className === themeName) {
            return;
        }
        else {
            classList.remove(className);
        } });
        classList.add(themeName);
        document.body.parentElement.classList = classList;
        window.localStorage.setItem('nos_th', name);
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store)); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac });


/***/ }),

/***/ 67278:
/*!*********************************************!*\
  !*** ./src/app/services/utility.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilityService": function() { return /* binding */ UtilityService; }
/* harmony export */ });
/* harmony import */ var _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @interfaces/interfaces */ 94806);
/* harmony import */ var _fsstore_file_explorer_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fsstore/file-explorer.actions */ 45353);
/* harmony import */ var _appstore_app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @appstore/app.actions */ 85294);
/* harmony import */ var _constants_applications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @constants/applications */ 81962);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 17562);







class UtilityService {
    constructor(store$) {
        this.store$ = store$;
        this.isMobile = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
        window.addEventListener('resize', () => this.onWindowResize());
        this.onWindowResize();
    }
    onWindowResize() {
        this.isMobile.next(document.body.offsetWidth <= 768);
    }
    openFile(file) {
        switch (file.properties.category) {
            case _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_CATEGORY.FOLDER:
                this.store$.dispatch((0,_fsstore_file_explorer_actions__WEBPACK_IMPORTED_MODULE_1__.setCurrentPath)({ path: file.fs.root }));
                return this.store$.dispatch((0,_appstore_app_actions__WEBPACK_IMPORTED_MODULE_2__.createApp)({ app: _constants_applications__WEBPACK_IMPORTED_MODULE_3__.APPLICATIONS.explorer }));
            case _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_CATEGORY.LINK:
                return window.open(file.properties.data.url, '_blank');
            // this.store$.dispatch(setCurrentPath({path: file.fs.root}));
            // return this.store$.dispatch(createApp({app: APPLICATIONS.browser, data: {url: file.properties.data.url}}));
            default:
                return console.warn('No category found for file %o', file);
        }
    }
}
UtilityService.ɵfac = function UtilityService_Factory(t) { return new (t || UtilityService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store)); };
UtilityService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UtilityService, factory: UtilityService.ɵfac });


/***/ }),

/***/ 85294:
/*!**************************************!*\
  !*** ./src/app/store/app.actions.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadAssets": function() { return /* binding */ loadAssets; },
/* harmony export */   "loadAssetsSuccess": function() { return /* binding */ loadAssetsSuccess; },
/* harmony export */   "loadAssetsFail": function() { return /* binding */ loadAssetsFail; },
/* harmony export */   "setLoadingMessage": function() { return /* binding */ setLoadingMessage; },
/* harmony export */   "setConsoleMessage": function() { return /* binding */ setConsoleMessage; },
/* harmony export */   "createApp": function() { return /* binding */ createApp; },
/* harmony export */   "closeApp": function() { return /* binding */ closeApp; },
/* harmony export */   "setAppFullscreen": function() { return /* binding */ setAppFullscreen; },
/* harmony export */   "setAppFocus": function() { return /* binding */ setAppFocus; },
/* harmony export */   "setAppMinified": function() { return /* binding */ setAppMinified; },
/* harmony export */   "openFile": function() { return /* binding */ openFile; },
/* harmony export */   "toggleMenuActive": function() { return /* binding */ toggleMenuActive; },
/* harmony export */   "closeMenu": function() { return /* binding */ closeMenu; },
/* harmony export */   "setTheme": function() { return /* binding */ setTheme; },
/* harmony export */   "toggleTaskbarThemeSelector": function() { return /* binding */ toggleTaskbarThemeSelector; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 17562);

/** ASSETS MANAGEMENT */
const loadAssets = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Load Assets');
const loadAssetsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Load Assets Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadAssetsFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Load Assets Fail');
/** MESSAGE MANAGEMENT */
const setLoadingMessage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Set Loading Message', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setConsoleMessage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Set Console Message', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
/** WINDOW MANAGEMENT */
const createApp = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Create window', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const closeApp = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Close window', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setAppFullscreen = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Toggle window fullscreen', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setAppFocus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Toggle window focus', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setAppMinified = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Toggle window minified', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
/** FILE MANAGEMENT */
const openFile = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Open file', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
/** MENU MANAGEMENT */
const toggleMenuActive = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Toggle menu active');
const closeMenu = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Close menu');
/** APP SETTINGS MANAGEMENT */
const setTheme = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Set Theme', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const toggleTaskbarThemeSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] Toggle Taskbar Theme selector');


/***/ }),

/***/ 21593:
/*!**************************************!*\
  !*** ./src/app/store/app.effects.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppEffects": function() { return /* binding */ AppEffects; }
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ 20275);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 17163);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 39553);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.actions */ 85294);
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.reducer */ 5754);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @interfaces/interfaces */ 94806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_assets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/assets.service */ 76284);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/theme.service */ 8140);
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utility.service */ 67278);













class AppEffects {
    constructor(store$, actions$, assetsService, themeService, utility) {
        this.store$ = store$;
        this.actions$ = actions$;
        this.assetsService = assetsService;
        this.themeService = themeService;
        this.utility = utility;
        this.loadAssets$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.loadAssets), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.withLatestFrom)(this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_app_reducer__WEBPACK_IMPORTED_MODULE_1__.selectLoadedAssets))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(([action, loadedAssets]) => {
            this.store$.dispatch((0,_app_actions__WEBPACK_IMPORTED_MODULE_0__.setLoadingMessage)({ message: 'Loading website assets.' }));
            if (loadedAssets) {
                this.store$.dispatch((0,_app_actions__WEBPACK_IMPORTED_MODULE_0__.setLoadingMessage)({ message: '<b>Loading</b> done.' }));
                return [(0,_app_actions__WEBPACK_IMPORTED_MODULE_0__.loadAssetsSuccess)({ loadedAssets })];
            }
            else {
                return this.assetsService.getAll().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(assets => {
                    this.store$.dispatch((0,_app_actions__WEBPACK_IMPORTED_MODULE_0__.setLoadingMessage)({ message: '<b>Loading</b> done.' }));
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(assets);
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.delay)(2000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(assets => {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)((0,_app_actions__WEBPACK_IMPORTED_MODULE_0__.loadAssetsSuccess)({ loadedAssets: assets }));
                }));
            }
        })));
        this.createApp$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.createApp), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(({ app }) => {
            this.store$.dispatch((0,_app_actions__WEBPACK_IMPORTED_MODULE_0__.setConsoleMessage)({
                message: new _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_2__.ConsoleMessage('[OS]', `<b>New app created</b>: ${app.properties.title}`)
            }));
        })), { dispatch: false });
        this.closeApp$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.closeApp), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(({ app }) => {
            this.store$.dispatch((0,_app_actions__WEBPACK_IMPORTED_MODULE_0__.setConsoleMessage)({
                message: new _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_2__.ConsoleMessage('[OS]', `<b>app closed</b>: ${app.properties.title}`)
            }));
        })), { dispatch: false });
        this.setAppFullScreen$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.setAppFullscreen), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(({ app }) => {
            this.store$.dispatch((0,_app_actions__WEBPACK_IMPORTED_MODULE_0__.setConsoleMessage)({
                message: new _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_2__.ConsoleMessage('[OS]', `<b>Application</b> <i>${app.properties.title}</i> is now on fullscreen <small>[${app.properties.fullScreen}]</small>`)
            }));
        })), { dispatch: false });
        this.setAppFocus$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.setAppFocus), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(({ app }) => {
            this.store$.dispatch((0,_app_actions__WEBPACK_IMPORTED_MODULE_0__.setConsoleMessage)({
                message: new _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_2__.ConsoleMessage('[OS]', `<b>Application</b> <i>${app.properties.title}</i> is now on focus <small>[${app.properties.focus}]</small>`)
            }));
        })), { dispatch: false });
        this.setAppMinified$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.setAppMinified), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(({ app }) => {
            this.store$.dispatch((0,_app_actions__WEBPACK_IMPORTED_MODULE_0__.setConsoleMessage)({
                message: new _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_2__.ConsoleMessage('[OS]', `<b>Application</b> <i>${app.properties.title}</i> is now on minified <small>[${app.properties.minified}]</small>`)
            }));
        })), { dispatch: false });
        this.setTheme$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.setTheme), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(({ theme }) => {
            this.themeService.setTheme(theme);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)((0,_app_actions__WEBPACK_IMPORTED_MODULE_0__.toggleTaskbarThemeSelector)());
        })));
        this.openFile$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.openFile), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(({ file }) => {
            this.utility.openFile(file);
            return [
                (0,_app_actions__WEBPACK_IMPORTED_MODULE_0__.setConsoleMessage)({
                    message: new _interfaces_interfaces__WEBPACK_IMPORTED_MODULE_2__.ConsoleMessage('[OS]', `<b>Opening file:</b> <i>${file.properties.name}</i>`)
                })
            ];
        })));
    }
}
AppEffects.ɵfac = function AppEffects_Factory(t) { return new (t || AppEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_services_assets_service__WEBPACK_IMPORTED_MODULE_3__.AssetsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_4__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_services_utility_service__WEBPACK_IMPORTED_MODULE_5__.UtilityService)); };
AppEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({ token: AppEffects, factory: AppEffects.ɵfac });


/***/ }),

/***/ 5754:
/*!**************************************!*\
  !*** ./src/app/store/app.reducer.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "appReducer": function() { return /* binding */ appReducer; },
/* harmony export */   "selectAppState": function() { return /* binding */ selectAppState; },
/* harmony export */   "selectLoadedAssets": function() { return /* binding */ selectLoadedAssets; },
/* harmony export */   "selectLoading": function() { return /* binding */ selectLoading; },
/* harmony export */   "selectLoadingMessage": function() { return /* binding */ selectLoadingMessage; },
/* harmony export */   "selectConsoleMessages": function() { return /* binding */ selectConsoleMessages; },
/* harmony export */   "selectActiveApplications": function() { return /* binding */ selectActiveApplications; },
/* harmony export */   "selectMenuActive": function() { return /* binding */ selectMenuActive; },
/* harmony export */   "selectAppSettings": function() { return /* binding */ selectAppSettings; },
/* harmony export */   "selectTheme": function() { return /* binding */ selectTheme; },
/* harmony export */   "selectTaskbarThemeSelectorActive": function() { return /* binding */ selectTaskbarThemeSelectorActive; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.actions */ 85294);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);



const initialState = {
    loading: true,
    loadingMessage: ['Welcome visitor, loading initial assets...'],
    consoleMessages: [],
    loadedAssets: null,
    applications: [],
    menuActive: false,
    taskbarThemeSelectorActive: false,
    appSettings: { theme: window.localStorage.getItem('nos_th') || 'default' }
};
const _appReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.loadAssets, (state) => (Object.assign(Object.assign({}, state), { loading: true }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.loadAssetsSuccess, (state, { loadedAssets }) => (Object.assign(Object.assign({}, state), { loadedAssets, loading: false }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.setLoadingMessage, (state, { message }) => (Object.assign(Object.assign({}, state), { loadingMessage: [...state.loadingMessage, message] }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.setConsoleMessage, (state, { message }) => (Object.assign(Object.assign({}, state), { consoleMessages: [...state.consoleMessages, message] }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.toggleMenuActive, (state) => (Object.assign(Object.assign({}, state), { menuActive: !state.menuActive }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.closeMenu, (state) => (Object.assign(Object.assign({}, state), { menuActive: false }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.createApp, (state, { app, data }) => {
    const applications = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(state.applications);
    let newApp = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(app);
    applications.map(a => {
        a.properties.focus = newApp ? a.id === newApp.id : false;
        /** if there is at least one focused app there is no new app */
        if (a.properties.focus) {
            a.properties.minified = false;
            newApp = null;
        }
    });
    if (newApp) {
        applications.push(newApp);
        if (data) {
            newApp.properties.data = data;
        }
    }
    return Object.assign(Object.assign({}, state), { applications });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.closeApp, (state, { app }) => {
    let applications = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(state.applications);
    applications = applications.filter(w => w.id !== app.id);
    return Object.assign(Object.assign({}, state), { applications });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.setAppFullscreen, (state, { app, fullScreen }) => {
    const applications = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(state.applications);
    applications.map(w => w.id === app.id ? w.properties.fullScreen = fullScreen : w);
    return Object.assign(Object.assign({}, state), { applications });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.setAppFocus, (state, { app, focus }) => {
    const applications = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(state.applications);
    applications.map(w => w.id === app.id ? w.properties.focus = focus : w.properties.focus = false);
    return Object.assign(Object.assign({}, state), { applications, menuActive: false });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.setAppMinified, (state, { app, minified }) => {
    const applications = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(state.applications);
    applications.map(w => w.id === app.id ? w.properties.minified = minified : w);
    return Object.assign(Object.assign({}, state), { applications });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.setTheme, (state, { theme }) => (Object.assign(Object.assign({}, state), { appSettings: Object.assign(Object.assign({}, state.appSettings), { theme }) }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.toggleTaskbarThemeSelector, (state) => (Object.assign(Object.assign({}, state), { taskbarThemeSelectorActive: !state.taskbarThemeSelectorActive }))));
function appReducer(state, action) {
    return _appReducer(state, action);
}
const selectAppState = (state) => state.app;
const selectLoadedAssets = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAppState, (state) => state.loadedAssets);
const selectLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAppState, (state) => state.loading);
const selectLoadingMessage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAppState, (state) => state.loadingMessage);
const selectConsoleMessages = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAppState, (state) => state.consoleMessages);
const selectActiveApplications = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAppState, (state) => state.applications);
const selectMenuActive = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAppState, (state) => state.menuActive);
const selectAppSettings = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAppState, (state) => state.appSettings);
const selectTheme = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAppSettings, (state) => state.theme);
const selectTaskbarThemeSelectorActive = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAppState, (state) => state.taskbarThemeSelectorActive);


/***/ }),

/***/ 46353:
/*!*********************************************!*\
  !*** ./src/app/views/nica-o-s.component.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NicaOSComponent": function() { return /* binding */ NicaOSComponent; }
/* harmony export */ });
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/app.reducer */ 5754);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _components_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/loader.component */ 44108);
/* harmony import */ var _components_desktop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/desktop.component */ 72278);
/* harmony import */ var _components_taskbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/taskbar.component */ 49887);








function NicaOSComponent_app_loader_component_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loader-component");
} }
function NicaOSComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-desktop");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-taskbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
class NicaOSComponent {
    constructor(store$) {
        this.store$ = store$;
        this.loading$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_store_app_reducer__WEBPACK_IMPORTED_MODULE_0__.selectLoading));
    }
}
NicaOSComponent.ɵfac = function NicaOSComponent_Factory(t) { return new (t || NicaOSComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
NicaOSComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NicaOSComponent, selectors: [["app-homepage"]], decls: 4, vars: 6, consts: [[4, "ngIf"], ["id", "homepage", 1, "nicaos"]], template: function NicaOSComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NicaOSComponent_app_loader_component_0_Template, 1, 0, "app-loader-component", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NicaOSComponent_ng_container_2_Template, 4, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, ctx.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, ctx.loading$) === false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _components_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent, _components_desktop_component__WEBPACK_IMPORTED_MODULE_2__.DesktopComponent, _components_taskbar_component__WEBPACK_IMPORTED_MODULE_3__.TaskBarComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    version: '0.0.1-beta0'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map