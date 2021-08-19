(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hubinbin/bill/lagou/homework2/fed-e-task-04-06/src/main.ts */"zUnb");


/***/ }),

/***/ "22I9":
/*!************************************************!*\
  !*** ./src/app/store/reducers/todo.reducer.ts ***!
  \************************************************/
/*! exports provided: todoFeatureKey, adapter, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoFeatureKey", function() { return todoFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_todo_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/todo.actions */ "IbW+");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "4USb");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/entity */ "R0sL");




const todoFeatureKey = 'todo';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_3__["createEntityAdapter"])();
const initialState = adapter.getInitialState();
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_todo_actions__WEBPACK_IMPORTED_MODULE_1__["addTodo"], (state, action) => adapter.addOne({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(), title: action.title }, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_todo_actions__WEBPACK_IMPORTED_MODULE_1__["deleteTodo"], (state, action) => adapter.removeOne(action.id, state)));


/***/ }),

/***/ "38kq":
/*!******************************!*\
  !*** ./src/app/animation.ts ***!
  \******************************/
/*! exports provided: slideAnimation, todoAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideAnimation", function() { return slideAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoAnimation", function() { return todoAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

let slideAnimationEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    // 定义 void 状态的样式
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: "translateY(40px)"
    }),
    // 进场之后的样式
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(250)
]);
let slideAnimationLeave = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(600, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: "translateX(100%)"
    }))
]);
let slideAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("slide", [
    // 入场动画
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("void => *", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(slideAnimationEnter)),
    // 出场动画
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* => void", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(slideAnimationLeave))
]);
let todoAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("todoAnimations", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":enter", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])("h2", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(-30px)", opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(300)
        ])
    ])
]);


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "IbW+":
/*!***********************************************!*\
  !*** ./src/app/store/actions/todo.actions.ts ***!
  \***********************************************/
/*! exports provided: addTodo, deleteTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTodo", function() { return addTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTodo", function() { return deleteTodo; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// 添加任务
const addTodo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('addTodo', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// 删除任务
const deleteTodo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('deleteTodo', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation */ "38kq");
/* harmony import */ var _store_actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/actions/todo.actions */ "IbW+");
/* harmony import */ var _store_selector_todo_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/selector/todo.selectors */ "k246");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = ["AddTodoInput"];
function AppComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_li_10_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const todo_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r3.deleteTodo(todo_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u5220\u9664");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@slide", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", todo_r2.title, " ");
} }
class AppComponent {
    constructor(store) {
        this.store = store;
        // this.count = this.store.pipe(select(selectCount))
        this.todos = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_store_selector_todo_selectors__WEBPACK_IMPORTED_MODULE_5__["selectTodos"]));
    }
    ngAfterViewInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.AddTodoInput.nativeElement, "keyup")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event.key === "Enter"), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(event => event.target.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(title => title.trim()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(title => title !== '')).subscribe(title => {
            this.store.dispatch(Object(_store_actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__["addTodo"])({ title }));
            this.AddTodoInput.nativeElement.value = "";
        });
    }
    addTodo() {
        let title = this.AddTodoInput.nativeElement.value.trim();
        if (!title)
            return;
        this.store.dispatch(Object(_store_actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__["addTodo"])({ title }));
        this.AddTodoInput.nativeElement.value = "";
    }
    deleteTodo(id) {
        this.store.dispatch(Object(_store_actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__["deleteTodo"])({ id }));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.AddTodoInput = _t.first);
    } }, decls: 12, vars: 4, consts: [[1, "main"], [1, "list-title"], [1, "list-add"], ["type", "text", "placeholder", "add todo", 1, "form-control"], ["AddTodoInput", ""], [1, "btn", "btn-danger", "btn-add", 3, "click"], [1, "container", "mt-4"], [1, "list-group"], ["class", "list-group-item d-flex align-items-center justify-content-between", 4, "ngFor", "ngForOf"], [1, "list-group-item", "d-flex", "align-items-center", "justify-content-between"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Angular TodoList");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() { return ctx.addTodo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\u6DFB\u52A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, AppComponent_li_10_Template, 4, 2, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@todoAnimations", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 2, ctx.todos));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], encapsulation: 2, data: { animation: [_animation__WEBPACK_IMPORTED_MODULE_3__["slideAnimation"], _animation__WEBPACK_IMPORTED_MODULE_3__["todoAnimation"]] } });


/***/ }),

/***/ "YZbJ":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _reducers_counter_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/counter.reducer */ "cQy7");
/* harmony import */ var _reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/todo.reducer */ "22I9");



const reducers = {
    [_reducers_counter_reducer__WEBPACK_IMPORTED_MODULE_1__["counterFeatureKey"]]: _reducers_counter_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    [_reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_2__["todoFeatureKey"]]: _reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
};
function logger(reducer) {
    return function (state, action) {
        console.log(state);
        console.log(action);
        return reducer(state, action);
    };
}
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "YZbJ");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _store_effects_counter_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/effects/counter.effects */ "y2pY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_5__["reducers"], { metaReducers: _store__WEBPACK_IMPORTED_MODULE_5__["metaReducers"] }),
            !_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument() : [],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([_store_effects_counter_effects__WEBPACK_IMPORTED_MODULE_9__["CounterEffects"]]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsRootModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "cQy7":
/*!***************************************************!*\
  !*** ./src/app/store/reducers/counter.reducer.ts ***!
  \***************************************************/
/*! exports provided: counterFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counterFeatureKey", function() { return counterFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_counter_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/counter.actions */ "yVMj");


// 状态名称
const counterFeatureKey = 'counter';
const initialState = {
    count: 0
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_counter_actions__WEBPACK_IMPORTED_MODULE_1__["increment"], state => ({ count: state.count + 1 })), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_counter_actions__WEBPACK_IMPORTED_MODULE_1__["decrement"], state => ({ count: state.count - 1 })));


/***/ }),

/***/ "k246":
/*!**************************************************!*\
  !*** ./src/app/store/selector/todo.selectors.ts ***!
  \**************************************************/
/*! exports provided: selectTodo, selectTodos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTodo", function() { return selectTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTodos", function() { return selectTodos; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/todo.reducer */ "22I9");


const { selectIds, selectEntities, selectAll, selectTotal } = _reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_1__["adapter"].getSelectors();
const selectTodo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_1__["todoFeatureKey"]);
const selectTodos = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectTodo, selectAll);


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "y2pY":
/*!**************************************************!*\
  !*** ./src/app/store/effects/counter.effects.ts ***!
  \**************************************************/
/*! exports provided: CounterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterEffects", function() { return CounterEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_counter_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/counter.actions */ "yVMj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class CounterEffects {
    // 约定的规则 $ 表示是一个可观察的 observer 对象
    constructor(actions$) {
        this.actions$ = actions$;
        // 用于处理副作用
        this.async_increment_effect = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            // 监听管道的变换
            return this.actions$.pipe(
            // 需要处理的 action 类型
            Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_counter_actions__WEBPACK_IMPORTED_MODULE_3__["async_increment"]), 
            // 处理需要执行的副作用 返回 action 给到 createEffect
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(2000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => Object(_actions_counter_actions__WEBPACK_IMPORTED_MODULE_3__["increment"])()))));
        });
    }
}
CounterEffects.ɵfac = function CounterEffects_Factory(t) { return new (t || CounterEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"])); };
CounterEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CounterEffects, factory: CounterEffects.ɵfac });


/***/ }),

/***/ "yVMj":
/*!**************************************************!*\
  !*** ./src/app/store/actions/counter.actions.ts ***!
  \**************************************************/
/*! exports provided: increment, decrement, async_increment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return decrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "async_increment", function() { return async_increment; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const increment = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('incremen');
const decrement = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('decrement');
const async_increment = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('async_increment');


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map