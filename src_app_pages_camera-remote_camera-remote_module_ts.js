"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["src_app_pages_camera-remote_camera-remote_module_ts"],{

/***/ 28230:
/*!*****************************************************!*\
  !*** ./src/app/core/services/web-socket.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebSocketService": () => (/* binding */ WebSocketService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 80228);


// @ts-ignore
// import * as Rx from 'rxjs/Rx';

let WebSocketService = class WebSocketService {
    constructor() {
        this.connected$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.connectedFE$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    connect(url) {
        if (!this.subject) {
            this.subject = this.create(url);
            console.log('Successfully connected: ' + url);
            this.connected$.next(true);
        }
        return this.subject;
    }
    connectFE(url) {
        if (!this.subjectFE) {
            this.subjectFE = this.create(url);
            console.log('connectFE Successfully connected: ' + url);
            this.connectedFE$.next(true);
        }
        return this.subjectFE;
    }
    connected() {
        return this.connected$.asObservable();
    }
    connectedFE() {
        return this.connectedFE$.asObservable();
    }
    create(url) {
        // const ws = new WebSocket(url);
        //
        // const observable = Rx.Observable.create((obs: Rx.Observer<MessageEvent>) => {
        //     ws.onmessage = obs.next.bind(obs);
        //     ws.onerror = obs.error.bind(obs);
        //     ws.onclose = obs.complete.bind(obs);
        //     return ws.close.bind(ws);
        // });
        // const observer = {
        //     // tslint:disable-next-line:ban-types
        //     next: (data: Object) => {
        //         if (ws.readyState === WebSocket.OPEN) {
        //             ws.send(JSON.stringify(data));
        //         }
        //     },
        // };
        // return Rx.Subject.create(observer, observable);
        return null;
    }
};
WebSocketService.ctorParameters = () => [];
WebSocketService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], WebSocketService);



/***/ }),

/***/ 45094:
/*!*********************************************************************!*\
  !*** ./src/app/pages/camera-remote/camera-remote-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraRemoteRoutingModule": () => (/* binding */ CameraRemoteRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _screen_management_screen_management_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen-management/screen-management.component */ 42173);




const routes = [
    {
        path: '',
        component: _screen_management_screen_management_component__WEBPACK_IMPORTED_MODULE_0__.ScreenManagementComponent
    }
];
let CameraRemoteRoutingModule = class CameraRemoteRoutingModule {
};
CameraRemoteRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], CameraRemoteRoutingModule);



/***/ }),

/***/ 97331:
/*!*************************************************************!*\
  !*** ./src/app/pages/camera-remote/camera-remote.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraRemoteModule": () => (/* binding */ CameraRemoteModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _camera_remote_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera-remote-routing.module */ 45094);
/* harmony import */ var _screen_management_screen_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen-management/screen-management.component */ 42173);
/* harmony import */ var _drop_drap_drop_drap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop-drap/drop-drap.component */ 84131);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 28870);
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/ui/ui.module */ 19668);
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layouts/layouts.module */ 52372);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);











let CameraRemoteModule = class CameraRemoteModule {
};
CameraRemoteModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_screen_management_screen_management_component__WEBPACK_IMPORTED_MODULE_1__.ScreenManagementComponent, _drop_drap_drop_drap_component__WEBPACK_IMPORTED_MODULE_2__.DropDrapComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _camera_remote_routing_module__WEBPACK_IMPORTED_MODULE_0__.CameraRemoteRoutingModule,
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.DragDropModule,
            _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UIModule,
            _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_4__.LayoutsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltipModule
        ]
    })
], CameraRemoteModule);



/***/ }),

/***/ 84131:
/*!**********************************************************************!*\
  !*** ./src/app/pages/camera-remote/drop-drap/drop-drap.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropDrapComponent": () => (/* binding */ DropDrapComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _drop_drap_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drop-drap.component.html?ngResource */ 47188);
/* harmony import */ var _drop_drap_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drop-drap.component.scss?ngResource */ 68521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 28870);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ 73772);
/* harmony import */ var _shared_service_pages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/pages.service */ 23161);
/* harmony import */ var _shared_utils_convert_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/utils/convert.util */ 42138);








let DropDrapComponent = class DropDrapComponent {
    constructor(viewportRuler, pageService) {
        this.viewportRuler = viewportRuler;
        this.pageService = pageService;
        this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.listCamera = new Array();
        this.loading = [];
        this.isShakeHands = [];
        this.arrConnected = [];
        this.editListCam = [];
        this.mutedList = [];
        this.turnServer = 'aivisvn.ddns.net:3478';
        this.base64tokenRes = 'Wait connect';
        this.dropListEnterPredicate = (drag, drop) => {
            if (drop == this.placeholder) {
                return true;
            }
            if (drop != this.activeContainer) {
                return false;
            }
            const phElement = this.placeholder.element.nativeElement;
            const sourceElement = drag.dropContainer.element.nativeElement;
            const dropElement = drop.element.nativeElement;
            const dragIndex = __indexOf(dropElement.parentElement.children, (this.source ? phElement : sourceElement));
            const dropIndex = __indexOf(dropElement.parentElement.children, dropElement);
            if (!this.source) {
                this.sourceIndex = dragIndex;
                this.source = drag.dropContainer;
                phElement.style.width = sourceElement.clientWidth + 'px';
                phElement.style.height = sourceElement.clientHeight + 'px';
                sourceElement.parentElement.removeChild(sourceElement);
            }
            this.targetIndex = dropIndex;
            this.target = drop;
            phElement.style.display = '';
            dropElement.parentElement.insertBefore(phElement, (dropIndex > dragIndex
                ? dropElement.nextSibling : dropElement));
            this.placeholder.enter(drag, drag.element.nativeElement.offsetLeft, drag.element.nativeElement.offsetTop);
            return false;
        };
        this.target = null;
        this.source = null;
        this.isMobileMode = (0,_shared_utils_convert_util__WEBPACK_IMPORTED_MODULE_3__.checkMobileMode)();
    }
    ngAfterViewInit() {
        const phElement = this.placeholder.element.nativeElement;
        phElement.style.display = 'none';
        phElement.parentElement.removeChild(phElement);
    }
    add() {
        this.items.push(this.items.length + 1);
    }
    shuffle() {
        this.items.sort(() => {
            return .5 - Math.random();
        });
    }
    dragMoved(e) {
        const point = this.getPointerPositionOnPage(e.event);
        this.listGroup._items.forEach(dropList => {
            if (__isInsideDropListClientRect(dropList, point.x, point.y)) {
                this.activeContainer = dropList;
                return;
            }
        });
    }
    dropListDropped(e) {
        if (!this.target) {
            return;
        }
        const phElement = this.placeholder.element.nativeElement;
        const parent = phElement.parentElement;
        phElement.style.display = 'none';
        parent.removeChild(phElement);
        parent.appendChild(phElement);
        parent.insertBefore(this.source.element.nativeElement, parent.children[this.sourceIndex]);
        this.target = null;
        this.source = null;
        if (this.sourceIndex != this.targetIndex) {
            (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.moveItemInArray)(this.items, this.sourceIndex, this.targetIndex);
        }
    }
    /** Determines the point of the page that was touched by the user. */
    getPointerPositionOnPage(event) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        const point = __isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
        const scrollPosition = this.viewportRuler.getViewportScrollPosition();
        return {
            x: point.pageX - scrollPosition.left,
            y: point.pageY - scrollPosition.top
        };
    }
    ngOnInit() {
        this.getListCamera();
    }
    getListCamera() {
        this.pageService.fetchCameraListWithSetting().subscribe((data) => {
            const res = data.cams || [];
            if (res && res.length > 0) {
                this.listCamera = res;
                this.pageService.setData(this.listCamera);
                this.listCamera.forEach(x => {
                    this.isShakeHands.push(false);
                    this.mutedList.push(false);
                    this.loading.push(false);
                    this.editListCam.push({
                        name: x.setting ? x.setting.name : '',
                        isEdit: false
                    });
                });
            }
        });
    }
    shakeHands(cameraObj, index) {
        this.loading[index] = true;
        this.pageService.getTurnCredential().subscribe(data => {
            if (data) {
                this.turnServer = data.turnServer;
                const pcConfig = {
                    iceServers: [
                        {
                            urls: 'stun:' + data.turnServer
                        },
                        {
                            urls: 'turn:' + data.turnServer,
                            username: data.username,
                            credential: data.password,
                        }
                    ]
                };
                const pc = new RTCPeerConnection(pcConfig);
                const log = (msg) => {
                    // document.getElementById('log' + cameraObj.cameraId).innerHTML += msg + '<br>';
                };
                pc.ontrack = (event) => {
                    const el = document.createElement(event.track.kind);
                    // @ts-ignore
                    el.srcObject = event.streams[0];
                    // @ts-ignore
                    el.autoplay = true;
                    // @ts-ignore
                    el.controls = true;
                    // @ts-ignore
                    el.muted = true;
                    if (event.track.kind === 'audio') {
                        // @ts-ignore
                        el.controls = false;
                        // @ts-ignore
                        el.muted = true;
                        // el.play();
                        this.mutedList[index] = false;
                    }
                    // @ts-ignore
                    document.getElementById('cam' + cameraObj.cameraId).appendChild(el);
                    setTimeout(() => {
                        this.setAttributeVideo('cam' + cameraObj.cameraId, 'width', '100%');
                        if (!this.isMobileMode) {
                            // @ts-ignore
                            document.getElementById('cam' + cameraObj.cameraId).children[0].controls = false;
                            // @ts-ignore
                            document.getElementById('cam' + cameraObj.cameraId).children[0].style.pointerEvents = 'none';
                        }
                    }, 300);
                };
                pc.oniceconnectionstatechange = e => log(pc.iceConnectionState);
                pc.onicecandidate = event => {
                    if (event.candidate === null) {
                        // console.log('base64 json', JSON.stringify(pc.localDescription));
                        const base64token = btoa(JSON.stringify(pc.localDescription));
                        this.pageService.requestStreamSignalWithTurn(cameraObj.cameraId, base64token, this.turnServer).subscribe(res => {
                            if (res.token) {
                                this.base64tokenRes = res.token;
                                // console.log('base64tokenRes', this.base64tokenRes);
                                // start ontrack connect
                                pc.setRemoteDescription(new RTCSessionDescription(JSON.parse(atob(res.token))));
                                if (this.arrConnected.find((x) => x.id === index)) {
                                    this.arrConnected.splice(this.arrConnected.indexOf(this.arrConnected.find((x) => x.id === index)), 1);
                                }
                                this.arrConnected.push({ obj: pc, id: index });
                                this.isShakeHands[index] = true;
                                this.loading[index] = false;
                            }
                        }, error => {
                            this.loading[index] = false;
                        });
                    }
                };
                // Offer to receive 1 audio, and 1 video track
                pc.addTransceiver('video', { direction: 'sendrecv' });
                pc.addTransceiver('audio', { direction: 'sendrecv' });
                pc.createOffer().then(d => pc.setLocalDescription(d)).catch(log);
            }
        }, error => {
            this.loading[index] = false;
        });
    }
    setAttributeVideo(id, attributeName, value) {
        // @ts-ignore
        document.getElementById(id).children[0].setAttribute(attributeName, value);
    }
};
DropDrapComponent.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.ViewportRuler },
    { type: _shared_service_pages_service__WEBPACK_IMPORTED_MODULE_2__.PagesService }
];
DropDrapComponent.propDecorators = {
    listGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDropListGroup, { static: true },] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDropList, { static: true },] }]
};
DropDrapComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-drop-drap',
        template: _drop_drap_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_drop_drap_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DropDrapComponent);

function __indexOf(collection, node) {
    return Array.prototype.indexOf.call(collection, node);
}
/** Determines whether an event is a touch event. */
function __isTouchEvent(event) {
    return event.type.startsWith('touch');
}
function __isInsideDropListClientRect(dropList, x, y) {
    const { top, bottom, left, right } = dropList.element.nativeElement.getBoundingClientRect();
    return y >= top && y <= bottom && x >= left && x <= right;
}


/***/ }),

/***/ 42173:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/camera-remote/screen-management/screen-management.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenManagementComponent": () => (/* binding */ ScreenManagementComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _screen_management_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen-management.component.html?ngResource */ 96557);
/* harmony import */ var _screen_management_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen-management.component.scss?ngResource */ 58777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_service_pages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/pages.service */ 23161);
/* harmony import */ var _shared_utils_convert_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/utils/convert.util */ 42138);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_services_web_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/web-socket.service */ 28230);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/auth.service */ 90263);
/* harmony import */ var _camera_remote_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../camera-remote.service */ 23765);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/cookie.service */ 94425);













let ScreenManagementComponent = class ScreenManagementComponent {
    constructor(pageService, websocket, cameraRemoteService, modalService, auth, router, cookieService) {
        var _a, _b, _c, _d, _e, _f;
        this.pageService = pageService;
        this.websocket = websocket;
        this.cameraRemoteService = cameraRemoteService;
        this.modalService = modalService;
        this.auth = auth;
        this.router = router;
        this.cookieService = cookieService;
        this.videoLoadingImg = '/assets/images/camera/loading-gif.gif';
        this.videoNotFoundImg = '/assets/images/camera/no-signal.gif';
        this.listCamera = [
            [
                {
                    id: 0,
                    cameraId: null,
                    isShakeHands: false,
                    details: null,
                    obj: null
                },
                {
                    id: 1,
                    cameraId: null,
                    isShakeHands: false,
                    details: null,
                    obj: null
                },
                {
                    id: 2,
                    cameraId: null,
                    isShakeHands: false,
                    details: null,
                    obj: null
                },
                {
                    id: 3,
                    cameraId: null,
                    isShakeHands: false,
                    details: null,
                    obj: null
                }
            ],
            [
                {
                    id: 4,
                    cameraId: null,
                    isShakeHands: false,
                    details: null,
                    obj: null
                },
                {
                    id: 5,
                    cameraId: null,
                    isShakeHands: false,
                    details: null,
                    obj: null
                },
                {
                    id: 6,
                    cameraId: null,
                    isShakeHands: false,
                    details: null,
                    obj: null
                },
                {
                    id: 7,
                    cameraId: null,
                    isShakeHands: false,
                    details: null,
                    obj: null
                }
            ],
            [
                {
                    id: 8,
                    cameraId: null,
                    isShakeHands: false,
                    details: null,
                    obj: null
                },
                {
                    id: 9,
                    cameraId: null,
                    isShakeHands: false,
                    details: null,
                    obj: null
                },
                {
                    id: 10,
                    cameraId: null,
                    isShakeHands: false,
                    details: null,
                    obj: null
                },
                {
                    id: 11,
                    cameraId: null,
                    isShakeHands: false,
                    details: null,
                    obj: null
                }
            ],
            [
                {
                    id: 12,
                    cameraId: null,
                    isShakeHands: false,
                    details: null,
                    obj: null
                },
                {
                    id: 13,
                    cameraId: null,
                    isShakeHands: false,
                    details: null,
                    obj: null
                },
                {
                    id: 14,
                    cameraId: null,
                    isShakeHands: false,
                    details: null,
                    obj: null
                },
                {
                    id: 15,
                    cameraId: null,
                    isShakeHands: false,
                    details: null,
                    obj: null
                }
            ]
        ];
        this.loading = false;
        this.turnServer = 'aivisvn.ddns.net:3478';
        this.base64token = 'Wait connect';
        this.base64tokenRes = 'Wait connect';
        this.arrConnected = [];
        this.listFake = [];
        this.isFullScreen = false;
        this.isConnected = false;
        this.isConnectedFE = false;
        this.address = 'wss://managerdev.ddns.net/remote-monitoring/watcher/update-online-status-ws/5?authorization=';
        this.addressFE = 'wss://managerdev.ddns.net/remote-monitoring/watcher/frontend-rpc-server-ws/5?authorization=';
        this.message = 'yes';
        this.refreshCount = 0;
        this.isMobileMode = (0,_shared_utils_convert_util__WEBPACK_IMPORTED_MODULE_3__.checkMobileMode)();
        this.connected = websocket.connected().subscribe((status) => {
            this.isConnected = status;
            console.log('isConnected', status);
        });
        this.connectedFE = websocket.connectedFE().subscribe((status) => {
            this.isConnectedFE = status;
            console.log('isConnectedFE', status);
        });
        // Nomarl
        this.messages = ((_a = this.websocket.connect((this.address + this.auth.currentUser().token))) === null || _a === void 0 ? void 0 : _a.map((response) => {
            console.log(response);
            return response.data;
        }));
        this.messageLog = (_b = this.messages) === null || _b === void 0 ? void 0 : _b.scan((current, change) => {
            console.log('messageLog', [...current, `RESPONSE: ${change}`]);
            return [...current, `RESPONSE: ${change}`];
        }, []);
        // this.messages.next(`CONNECT: ${this.address}`);
        (_c = this.messages) === null || _c === void 0 ? void 0 : _c.subscribe((msg) => {
            // this.received.push(msg);
            console.log('Response from websocket: ' + msg);
        });
        // FE
        this.messagesFE = ((_d = websocket.connectFE((this.addressFE + this.auth.currentUser().token))) === null || _d === void 0 ? void 0 : _d.map((response) => {
            console.log('socketFE', response);
            return response.data;
        }));
        (_e = this.messagesFE) === null || _e === void 0 ? void 0 : _e.scan((current, change) => {
            console.log('socketFE', [...current, `RESPONSE: ${change}`]);
            console.log('socketFE change', change);
            return [...current, `RESPONSE: ${change}`];
        }, []);
        (_f = this.messagesFE) === null || _f === void 0 ? void 0 : _f.subscribe((msg) => {
            // this.received.push(msg);
            console.log('Response from websocket FE: ' + msg);
            const arrMsg = msg.split('|');
            switch (arrMsg[0]) {
                case 'ask_receive_order':
                    if (this.isFullScreen) {
                        document.exitFullscreen().then(r => console.log('r', r));
                    }
                    this.camInfo = JSON.parse(arrMsg[1]);
                    console.log('info order:', this.camInfo);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                        title: 'Thông báo',
                        text: 'Bạn có muốn nhận camera này không?',
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#1abc9c',
                        confirmButtonText: 'Húp liền',
                        cancelButtonText: 'Chê'
                    }).then((result) => {
                        if (result.value) {
                            this.send(`yes`);
                        }
                        else {
                            this.send(`no`);
                        }
                    });
                    break;
                case 'add_camera_to_monitor':
                    this.checkSlot(arrMsg[1], this.camInfo);
                    this.shakeHands({ cameraId: arrMsg[1] });
                    this.camInfo = null;
                    console.log(this.listCamera);
                    break;
                case 'stop_monitor_camera':
                    this.disconectCamera({ cameraId: arrMsg[1] });
                    break;
            }
        });
    }
    ngOnInit() {
        this.cameraRemoteService.initSupervisor().subscribe();
        this.cameraRemoteService.wantReceiveOrder('c', 1).subscribe();
        this.cameraRemoteService.wantReceiveOrder('d', 1).subscribe();
        // this.toggleRightSidebar();
        // this.checkSlot('1awq');
        // this.shakeHands({cameraId: '1awq'});
    }
    checkSlot(camId, detail) {
        let stop = false;
        const arr = [0, 1, 2, 3];
        arr.forEach(x => {
            if (stop) {
                return;
            }
            this.listCamera[x].forEach((y) => {
                if (stop) {
                    return;
                }
                if (!y.isShakeHands) {
                    y.cameraId = camId;
                    y.isShakeHands = true;
                    y.details = detail;
                    stop = true;
                    return;
                }
            });
        });
    }
    offCameraById(camId) {
        let stop = false;
        const arr = [0, 1, 2, 3];
        arr.forEach(x => {
            if (stop) {
                return;
            }
            this.listCamera[x].forEach(y => {
                if (stop) {
                    return;
                }
                if (y.cameraId === camId) {
                    y.cameraId = null;
                    y.isShakeHands = false;
                    y.details = null;
                    stop = true;
                    return;
                }
            });
        });
    }
    ngOnDestroy() {
        clearInterval(this.timerInterval);
        this.arrConnected.forEach((x) => x.obj.close());
    }
    shakeHands(cameraObj, isRefresh) {
        this.loading = true;
        this.pageService.getTurnCredential().subscribe((data) => {
            if (data) {
                // data.exception === 'Unauthorized'
                if (data.message === 'timeout' || data === 'Error: Response Timeout') {
                    this.disconectCamera(cameraObj);
                    return;
                }
                this.turnServer = data.turnServer;
                const pcConfig = {
                    iceServers: [
                        {
                            urls: 'stun:' + data.turnServer
                        },
                        {
                            urls: 'turn:' + data.turnServer,
                            username: data.username,
                            credential: data.password,
                        }
                    ]
                };
                const pc = new RTCPeerConnection(pcConfig);
                const log = (msg) => {
                    // document.getElementById('log' + cameraObj.cameraId).innerHTML += msg + '<br>';
                    const arr = [];
                    arr.push([cameraObj.cameraId, msg, this.base64token]);
                    console.table(arr);
                    if (msg === 'disconnected') {
                        // this.retryConnect(cameraObj, i, index);
                    }
                };
                pc.ontrack = (event) => {
                    const el = document.createElement(event.track.kind);
                    // @ts-ignore
                    el.srcObject = event.streams[0];
                    // @ts-ignore
                    el.autoplay = true;
                    // @ts-ignore
                    el.controls = true;
                    // @ts-ignore
                    el.muted = true;
                    if (event.track.kind === 'audio') {
                        // @ts-ignore
                        el.controls = false;
                        // @ts-ignore
                        el.muted = true;
                        // el.play();
                    }
                    // @ts-ignore
                    document.getElementById(cameraObj.cameraId).appendChild(el);
                    setTimeout(() => {
                        this.setAttributeVideo(cameraObj.cameraId, 'width', '100%');
                        if (!this.isMobileMode) {
                            // @ts-ignore
                            document.getElementById(cameraObj.cameraId).children[0].controls = false;
                            // @ts-ignore
                            document.getElementById(cameraObj.cameraId).children[0].style.pointerEvents = 'none';
                        }
                    }, 800);
                };
                pc.oniceconnectionstatechange = e => log(pc.iceConnectionState);
                pc.onicecandidate = event => {
                    if (event.candidate === null) {
                        // console.log('base64 json', JSON.stringify(pc.localDescription));
                        this.base64token = btoa(JSON.stringify(pc.localDescription));
                        this.pageService.requestStreamSignalWithTurnWatcher(cameraObj.cameraId, this.base64token, this.turnServer)
                            .subscribe((res) => {
                            if (res.token) {
                                if (isRefresh) {
                                    this.disconectCamera(cameraObj);
                                    this.refreshCount = 0;
                                }
                                this.base64tokenRes = res.token;
                                // console.log('base64tokenRes', this.base64tokenRes);
                                // start ontrack connect
                                pc.setRemoteDescription(new RTCSessionDescription(JSON.parse(atob(res.token))));
                                if (this.arrConnected.find((x) => x.id === cameraObj.cameraId)) {
                                    // @ts-ignore
                                    this.arrConnected.splice(this.arrConnected.indexOf(this.arrConnected.find(x => x.id === cameraObj.cameraId)), 1);
                                }
                                // this.arrConnected.push({obj: pc, id: i.toString() + index.toString()});
                                // @ts-ignore
                                this.arrConnected.push({ obj: pc, id: cameraObj.cameraId, connected: true });
                                // this.isShakeHands[i] = true;
                                this.loading = false;
                                clearInterval(this.timerInterval);
                            }
                        }, (error) => {
                            this.offCameraById(cameraObj.cameraId);
                            // @ts-ignore
                            this.arrConnected.push({ obj: pc, id: cameraObj.cameraId, connected: false });
                            this.loading = false;
                            // data.exception === 'Unauthorized'
                            // if (error === 'timeout' || error === 'Error: Response Timeout') {
                            //     // this.retryConnect(cameraObj, i, index);
                            //     this.disconectCamera(cameraObj, i, index);
                            //     return;
                            // }
                        });
                    }
                };
                // Offer to receive 1 audio, and 1 video track
                pc.addTransceiver('video', { direction: 'sendrecv' });
                pc.addTransceiver('audio', { direction: 'sendrecv' });
                pc.createOffer().then(d => pc.setLocalDescription(d)).catch(log);
            }
        }, (error) => {
            this.loading = false;
            // if (error === 'timeout' || error === 'Error: Response Timeout') {
            //     this.disconectCamera(cameraObj, i, index);
            //     return;
            // }
        });
    }
    retryConnect(cameraObj, i) {
        this.timerInterval = setInterval(() => {
            if (this.refreshCount === 3) {
                clearInterval(this.timerInterval);
            }
            this.refreshCamera(cameraObj, i);
            this.refreshCount++;
        }, 10000);
    }
    refreshCamera(cameraObj, i) {
        // this.disconectCamera(cameraObj, i, index);
        this.shakeHands(cameraObj, true);
    }
    disconectCamera(cameraObj) {
        const elem = document.getElementById(cameraObj.cameraId);
        if (elem) {
            // console.log(elem.childNodes);
            this.arrConnected.find((x) => x.id === cameraObj.cameraId).obj.close();
            this.offCameraById(cameraObj.cameraId);
            elem.removeChild(elem.childNodes[1]);
            elem.removeChild(elem.childNodes[1]);
        }
    }
    setAttributeVideo(id, attributeName, value) {
        // @ts-ignore
        document.getElementById(id).children[0].setAttribute(attributeName, value);
    }
    onClickShowFullScreen(ele, evt) {
        if (this.isFullScreen) {
            this.isFullScreen = false;
            // document.exitFullscreen().then(r => console.log('r', r));
        }
        else {
            evt.preventDefault();
            this.requestFullscreen(ele);
            setTimeout(() => {
                this.arrConnected.forEach((x) => this.setAttributeVideo(x.cameraId, 'width', '100%'));
            }, 500);
        }
    }
    requestFullscreen(ele) {
        this.isFullScreen = true;
        // @ts-ignore
        document.getElementById('cameraMonitor').classList.add('height-100');
        const docEl = ele;
        if (docEl.requestFullscreen) {
            docEl.requestFullscreen();
        }
        else if (docEl.mozRequestFullScreen) {
            /* Firefox */
            docEl.mozRequestFullScreen();
        }
        else if (docEl.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            docEl.webkitRequestFullscreen();
        }
        else if (docEl.msRequestFullscreen) {
            /* IE/Edge */
            docEl.msRequestFullscreen();
        }
    }
    send(rep) {
        console.log('this.messageLog', this.messageLog);
        // this.messageLog = [...this.messageLog, 'SENT: ' + this.message];
        this.messagesFE.next(rep);
    }
    // onMessageKeyup(event) {
    //     if (event.keyCode === 13) {
    //         this.send();
    //     }
    // }
    initSession() {
        this.cameraRemoteService.initSession().subscribe();
    }
    toggleRightSidebar() {
        document.body.classList.toggle('right-bar-enabled');
    }
    order() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            title: 'Submit your cameraId order',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Order',
            showLoaderOnConfirm: true,
            preConfirm: (camId) => {
                return this.cameraRemoteService.order(camId).subscribe();
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().isLoading()
        }).then((result) => {
            // if (result.isConfirmed) {
            //     Swal.fire({
            //         title: `${result.value.login}'s avatar`,
            //         imageUrl: result.value.avatar_url
            //     })
            // }
        });
    }
    viewInfo(camera) {
        const url = this.router.serializeUrl(this.router.createUrlTree([`/history-stream`]));
        // camera?.details
        this.cookieService.setCookie('HIS_STREAM', JSON.stringify({ cameraId: '1awq' }), (1 / 24 / 60));
        window.open(url, '_blank');
    }
};
ScreenManagementComponent.ctorParameters = () => [
    { type: _shared_service_pages_service__WEBPACK_IMPORTED_MODULE_2__.PagesService },
    { type: _core_services_web_socket_service__WEBPACK_IMPORTED_MODULE_5__.WebSocketService },
    { type: _camera_remote_service__WEBPACK_IMPORTED_MODULE_7__.CameraRemoteService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal },
    { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _core_services_cookie_service__WEBPACK_IMPORTED_MODULE_8__.CookieService }
];
ScreenManagementComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-screen-management',
        template: _screen_management_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_screen_management_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ScreenManagementComponent);



/***/ }),

/***/ 64592:
/*!****************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/bidi.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BidiModule": () => (/* binding */ BidiModule),
/* harmony export */   "DIR_DOCUMENT": () => (/* binding */ DIR_DOCUMENT),
/* harmony export */   "Dir": () => (/* binding */ Dir),
/* harmony export */   "Directionality": () => (/* binding */ Directionality),
/* harmony export */   "ɵa": () => (/* binding */ DIR_DOCUMENT_FACTORY)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * \@docs-private
 * @type {?}
 */

const DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-dir-doc', {
  providedIn: 'root',
  factory: DIR_DOCUMENT_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function DIR_DOCUMENT_FACTORY() {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
class Directionality {
  /**
   * @param {?=} _document
   */
  constructor(_document) {
    /**
     * The current 'ltr' or 'rtl' value.
     */
    this.value = 'ltr';
    /**
     * Stream that emits whenever the 'ltr' / 'rtl' state changes.
     */
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    if (_document) {
      // TODO: handle 'auto' value -
      // We still need to account for dir="auto".
      // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
      // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
      /** @type {?} */
      const bodyDir = _document.body ? _document.body.dir : null;
      /** @type {?} */
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      /** @type {?} */
      const value = bodyDir || htmlDir;
      this.value = value === 'ltr' || value === 'rtl' ? value : 'ltr';
    }
  }
  /**
   * @return {?}
   */
  ngOnDestroy() {
    this.change.complete();
  }
}
Directionality.ɵfac = function Directionality_Factory(t) {
  return new (t || Directionality)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DIR_DOCUMENT, 8));
};
Directionality.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Directionality,
  factory: Directionality.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */
Directionality.ctorParameters = () => [{
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
    args: [DIR_DOCUMENT]
  }]
}];
/** @nocollapse */
Directionality.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
  factory: function Directionality_Factory() {
    return new Directionality((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DIR_DOCUMENT, 8));
  },
  token: Directionality,
  providedIn: "root"
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Directionality, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [DIR_DOCUMENT]
      }]
    }];
  }, null);
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
class Dir {
  constructor() {
    /**
     * Normalized direction that accounts for invalid/unsupported values.
     */
    this._dir = 'ltr';
    /**
     * Whether the `value` has been set to its initial value.
     */
    this._isInitialized = false;
    /**
     * Event emitted when the direction changes.
     */
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /**
   * \@docs-private
   * @return {?}
   */
  get dir() {
    return this._dir;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  set dir(value) {
    /** @type {?} */
    const old = this._dir;
    /** @type {?} */
    const normalizedValue = value ? value.toLowerCase() : value;
    this._rawDir = value;
    this._dir = normalizedValue === 'ltr' || normalizedValue === 'rtl' ? normalizedValue : 'ltr';
    if (old !== this._dir && this._isInitialized) {
      this.change.emit(this._dir);
    }
  }
  /**
   * Current layout direction of the element.
   * @return {?}
   */
  get value() {
    return this.dir;
  }
  /**
   * Initialize once default value has been set.
   * @return {?}
   */
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  /**
   * @return {?}
   */
  ngOnDestroy() {
    this.change.complete();
  }
}
Dir.ɵfac = function Dir_Factory(t) {
  return new (t || Dir)();
};
Dir.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: Dir,
  selectors: [["", "dir", ""]],
  hostVars: 1,
  hostBindings: function Dir_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dir", ctx._rawDir);
    }
  },
  inputs: {
    dir: "dir"
  },
  outputs: {
    change: "dirChange"
  },
  exportAs: ["dir"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: Directionality,
    useExisting: Dir
  }])]
});
Dir.propDecorators = {
  change: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
    args: ['dirChange']
  }],
  dir: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dir, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[dir]',
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        '[attr.dir]': '_rawDir'
      },
      exportAs: 'dir'
    }]
  }], function () {
    return [];
  }, {
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['dirChange']
    }],
    dir: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BidiModule {}
BidiModule.ɵfac = function BidiModule_Factory(t) {
  return new (t || BidiModule)();
};
BidiModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: BidiModule
});
BidiModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BidiModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [Dir],
      declarations: [Dir]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BidiModule, {
    declarations: [Dir],
    exports: [Dir]
  });
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



/***/ }),

/***/ 73744:
/*!********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/coercion.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_isNumberValue": () => (/* binding */ _isNumberValue),
/* harmony export */   "coerceArray": () => (/* binding */ coerceArray),
/* harmony export */   "coerceBooleanProperty": () => (/* binding */ coerceBooleanProperty),
/* harmony export */   "coerceCssPixelValue": () => (/* binding */ coerceCssPixelValue),
/* harmony export */   "coerceElement": () => (/* binding */ coerceElement),
/* harmony export */   "coerceNumberProperty": () => (/* binding */ coerceNumberProperty)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * @param {?} value
 * @return {?}
 */
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== 'false';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
function coerceNumberProperty(value, fallbackValue = 0) {
  return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * \@docs-private
 * @param {?} value
 * @return {?}
 */
function _isNumberValue(value) {
  // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
  // and other non-number values as NaN, where Number just uses 0) but it considers the string
  // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
  return !isNaN(parseFloat( /** @type {?} */value)) && !isNaN(Number(value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Wraps the provided value in an array, unless the provided value is an array.
 * @template T
 * @param {?} value
 * @return {?}
 */
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Coerces a value to a CSS pixel value.
 * @param {?} value
 * @return {?}
 */
function coerceCssPixelValue(value) {
  if (value == null) {
    return '';
  }
  return typeof value === 'string' ? value : `${value}px`;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 * @template T
 * @param {?} elementOrRef
 * @return {?}
 */
function coerceElement(elementOrRef) {
  return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



/***/ }),

/***/ 73515:
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/collections.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayDataSource": () => (/* binding */ ArrayDataSource),
/* harmony export */   "DataSource": () => (/* binding */ DataSource),
/* harmony export */   "SelectionModel": () => (/* binding */ SelectionModel),
/* harmony export */   "UniqueSelectionDispatcher": () => (/* binding */ UniqueSelectionDispatcher),
/* harmony export */   "getMultipleValuesInSingleSelectionError": () => (/* binding */ getMultipleValuesInSingleSelectionError),
/* harmony export */   "isDataSource": () => (/* binding */ isDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @abstract
 * @template T
 */

class DataSource {}
/**
 * Checks whether an object is a data source.
 * @param {?} value
 * @return {?}
 */
function isDataSource(value) {
  // Check if the value is a DataSource by observing if it has a connect function. Cannot
  // be checked as an `instanceof DataSource` since people could create their own sources
  // that match the interface, but don't extend DataSource.
  return value && typeof value.connect === 'function';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * DataSource wrapper for a native array.
 * @template T
 */
class ArrayDataSource extends DataSource {
  /**
   * @param {?} _data
   */
  constructor(_data) {
    super();
    this._data = _data;
  }
  /**
   * @return {?}
   */
  connect() {
    return this._data instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable ? this._data : (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this._data);
  }
  /**
   * @return {?}
   */
  disconnect() {}
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class to be used to power selecting one or more options from a list.
 * @template T
 */
class SelectionModel {
  /**
   * @param {?=} _multiple
   * @param {?=} initiallySelectedValues
   * @param {?=} _emitChanges
   */
  constructor(_multiple = false, initiallySelectedValues, _emitChanges = true) {
    this._multiple = _multiple;
    this._emitChanges = _emitChanges;
    /**
     * Currently-selected values.
     */
    this._selection = new Set();
    /**
     * Keeps track of the deselected options that haven't been emitted by the change event.
     */
    this._deselectedToEmit = [];
    /**
     * Keeps track of the selected options that haven't been emitted by the change event.
     */
    this._selectedToEmit = [];
    /**
     * Event emitted when the value has changed.
     */
    this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Event emitted when the value has changed.
     * @deprecated Use `changed` instead.
     * \@breaking-change 8.0.0 To be changed to `changed`
     */
    this.onChange = this.changed;
    if (initiallySelectedValues && initiallySelectedValues.length) {
      if (_multiple) {
        initiallySelectedValues.forEach(
        /**
        * @param {?} value
        * @return {?}
        */
        value => this._markSelected(value));
      } else {
        this._markSelected(initiallySelectedValues[0]);
      }
      // Clear the array in order to avoid firing the change event for preselected values.
      this._selectedToEmit.length = 0;
    }
  }
  /**
   * Selected values.
   * @return {?}
   */
  get selected() {
    if (!this._selected) {
      this._selected = Array.from(this._selection.values());
    }
    return this._selected;
  }
  /**
   * Selects a value or an array of values.
   * @param {...?} values
   * @return {?}
   */
  select(...values) {
    this._verifyValueAssignment(values);
    values.forEach(
    /**
    * @param {?} value
    * @return {?}
    */
    value => this._markSelected(value));
    this._emitChangeEvent();
  }
  /**
   * Deselects a value or an array of values.
   * @param {...?} values
   * @return {?}
   */
  deselect(...values) {
    this._verifyValueAssignment(values);
    values.forEach(
    /**
    * @param {?} value
    * @return {?}
    */
    value => this._unmarkSelected(value));
    this._emitChangeEvent();
  }
  /**
   * Toggles a value between selected and deselected.
   * @param {?} value
   * @return {?}
   */
  toggle(value) {
    this.isSelected(value) ? this.deselect(value) : this.select(value);
  }
  /**
   * Clears all of the selected values.
   * @return {?}
   */
  clear() {
    this._unmarkAll();
    this._emitChangeEvent();
  }
  /**
   * Determines whether a value is selected.
   * @param {?} value
   * @return {?}
   */
  isSelected(value) {
    return this._selection.has(value);
  }
  /**
   * Determines whether the model does not have a value.
   * @return {?}
   */
  isEmpty() {
    return this._selection.size === 0;
  }
  /**
   * Determines whether the model has a value.
   * @return {?}
   */
  hasValue() {
    return !this.isEmpty();
  }
  /**
   * Sorts the selected values based on a predicate function.
   * @param {?=} predicate
   * @return {?}
   */
  sort(predicate) {
    if (this._multiple && this.selected) {
      /** @type {?} */this._selected.sort(predicate);
    }
  }
  /**
   * Gets whether multiple values can be selected.
   * @return {?}
   */
  isMultipleSelection() {
    return this._multiple;
  }
  /**
   * Emits a change event and clears the records of selected and deselected values.
   * @private
   * @return {?}
   */
  _emitChangeEvent() {
    // Clear the selected values so they can be re-cached.
    this._selected = null;
    if (this._selectedToEmit.length || this._deselectedToEmit.length) {
      this.changed.next({
        source: this,
        added: this._selectedToEmit,
        removed: this._deselectedToEmit
      });
      this._deselectedToEmit = [];
      this._selectedToEmit = [];
    }
  }
  /**
   * Selects a value.
   * @private
   * @param {?} value
   * @return {?}
   */
  _markSelected(value) {
    if (!this.isSelected(value)) {
      if (!this._multiple) {
        this._unmarkAll();
      }
      this._selection.add(value);
      if (this._emitChanges) {
        this._selectedToEmit.push(value);
      }
    }
  }
  /**
   * Deselects a value.
   * @private
   * @param {?} value
   * @return {?}
   */
  _unmarkSelected(value) {
    if (this.isSelected(value)) {
      this._selection.delete(value);
      if (this._emitChanges) {
        this._deselectedToEmit.push(value);
      }
    }
  }
  /**
   * Clears out the selected values.
   * @private
   * @return {?}
   */
  _unmarkAll() {
    if (!this.isEmpty()) {
      this._selection.forEach(
      /**
      * @param {?} value
      * @return {?}
      */
      value => this._unmarkSelected(value));
    }
  }
  /**
   * Verifies the value assignment and throws an error if the specified value array is
   * including multiple values while the selection model is not supporting multiple values.
   * @private
   * @param {?} values
   * @return {?}
   */
  _verifyValueAssignment(values) {
    if (values.length > 1 && !this._multiple) {
      throw getMultipleValuesInSingleSelectionError();
    }
  }
}
/**
 * Returns an error that reports that multiple values are passed into a selection model
 * with a single value.
 * \@docs-private
 * @return {?}
 */
function getMultipleValuesInSingleSelectionError() {
  return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class to coordinate unique selection based on name.
 * Intended to be consumed as an Angular service.
 * This service is needed because native radio change events are only fired on the item currently
 * being selected, and we still need to uncheck the previous selection.
 *
 * This service does not *store* any IDs and names because they may change at any time, so it is
 * less error-prone if they are simply passed through when the events occur.
 */
class UniqueSelectionDispatcher {
  constructor() {
    this._listeners = [];
  }
  /**
   * Notify other items that selection for the given name has been set.
   * @param {?} id ID of the item.
   * @param {?} name Name of the item.
   * @return {?}
   */
  notify(id, name) {
    for (let listener of this._listeners) {
      listener(id, name);
    }
  }
  /**
   * Listen for future changes to item selection.
   * @param {?} listener
   * @return {?} Function used to deregister listener
   */
  listen(listener) {
    this._listeners.push(listener);
    return (
      /**
      * @return {?}
      */
      () => {
        this._listeners = this._listeners.filter(
        /**
        * @param {?} registered
        * @return {?}
        */
        registered => {
          return listener !== registered;
        });
      }
    );
  }
  /**
   * @return {?}
   */
  ngOnDestroy() {
    this._listeners = [];
  }
}
UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) {
  return new (t || UniqueSelectionDispatcher)();
};
UniqueSelectionDispatcher.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: UniqueSelectionDispatcher,
  factory: UniqueSelectionDispatcher.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */
UniqueSelectionDispatcher.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
  factory: function UniqueSelectionDispatcher_Factory() {
    return new UniqueSelectionDispatcher();
  },
  token: UniqueSelectionDispatcher,
  providedIn: "root"
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](UniqueSelectionDispatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



/***/ }),

/***/ 28870:
/*!*********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/drag-drop.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CDK_DRAG_CONFIG": () => (/* binding */ CDK_DRAG_CONFIG),
/* harmony export */   "CDK_DRAG_CONFIG_FACTORY": () => (/* binding */ CDK_DRAG_CONFIG_FACTORY),
/* harmony export */   "CDK_DROP_LIST": () => (/* binding */ CDK_DROP_LIST),
/* harmony export */   "CDK_DROP_LIST_CONTAINER": () => (/* binding */ CDK_DROP_LIST_CONTAINER),
/* harmony export */   "CdkDrag": () => (/* binding */ CdkDrag),
/* harmony export */   "CdkDragHandle": () => (/* binding */ CdkDragHandle),
/* harmony export */   "CdkDragPlaceholder": () => (/* binding */ CdkDragPlaceholder),
/* harmony export */   "CdkDragPreview": () => (/* binding */ CdkDragPreview),
/* harmony export */   "CdkDropList": () => (/* binding */ CdkDropList),
/* harmony export */   "CdkDropListGroup": () => (/* binding */ CdkDropListGroup),
/* harmony export */   "DragDrop": () => (/* binding */ DragDrop),
/* harmony export */   "DragDropModule": () => (/* binding */ DragDropModule),
/* harmony export */   "DragDropRegistry": () => (/* binding */ DragDropRegistry),
/* harmony export */   "DragRef": () => (/* binding */ DragRef),
/* harmony export */   "DropListRef": () => (/* binding */ DropListRef),
/* harmony export */   "copyArrayItem": () => (/* binding */ copyArrayItem),
/* harmony export */   "moveItemInArray": () => (/* binding */ moveItemInArray),
/* harmony export */   "transferArrayItem": () => (/* binding */ transferArrayItem),
/* harmony export */   "ɵb": () => (/* binding */ CDK_DRAG_PARENT)
/* harmony export */ });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ 27285);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 73744);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 28653);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 58184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 44874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ 73772);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/bidi */ 64592);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * \@docs-private
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */



function extendStyles(dest, source) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      dest[key] = /** @type {?} */source[key];
    }
  }
  return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * \@docs-private
 * @param {?} element Element on which to toggle the drag interactions.
 * @param {?} enable Whether the drag interactions should be enabled.
 * @return {?}
 */
function toggleNativeDragInteractions(element, enable) {
  /** @type {?} */
  const userSelect = enable ? '' : 'none';
  extendStyles(element.style, {
    touchAction: enable ? '' : 'none',
    webkitUserDrag: enable ? '' : 'none',
    webkitTapHighlightColor: enable ? '' : 'transparent',
    userSelect: userSelect,
    msUserSelect: userSelect,
    webkitUserSelect: userSelect,
    MozUserSelect: userSelect
  });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Parses a CSS time value to milliseconds.
 * @param {?} value
 * @return {?}
 */
function parseCssTimeUnitsToMs(value) {
  // Some browsers will return it in seconds, whereas others will return milliseconds.
  /** @type {?} */
  const multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
  return parseFloat(value) * multiplier;
}
/**
 * Gets the transform transition duration, including the delay, of an element in milliseconds.
 * @param {?} element
 * @return {?}
 */
function getTransformTransitionDurationInMs(element) {
  /** @type {?} */
  const computedStyle = getComputedStyle(element);
  /** @type {?} */
  const transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
  /** @type {?} */
  const property = transitionedProperties.find(
  /**
  * @param {?} prop
  * @return {?}
  */
  prop => prop === 'transform' || prop === 'all');
  // If there's no transition for `all` or `transform`, we shouldn't do anything.
  if (!property) {
    return 0;
  }
  // Get the index of the property that we're interested in and match
  // it up to the same index in `transition-delay` and `transition-duration`.
  /** @type {?} */
  const propertyIndex = transitionedProperties.indexOf(property);
  /** @type {?} */
  const rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
  /** @type {?} */
  const rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
  return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/**
 * Parses out multiple values from a computed style into an array.
 * @param {?} computedStyle
 * @param {?} name
 * @return {?}
 */
function parseCssPropertyValue(computedStyle, name) {
  /** @type {?} */
  const value = computedStyle.getPropertyValue(name);
  return value.split(',').map(
  /**
  * @param {?} part
  * @return {?}
  */
  part => part.trim());
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Options that can be used to bind a passive event listener.
 * @type {?}
 */
const passiveEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: true
});
/**
 * Options that can be used to bind an active event listener.
 * @type {?}
 */
const activeEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: false
});
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 * @type {?}
 */
const MOUSE_EVENT_IGNORE_TIME = 800;
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 * \@docs-private
 * @template T
 */
class DragRef {
  /**
   * @param {?} element
   * @param {?} _config
   * @param {?} _document
   * @param {?} _ngZone
   * @param {?} _viewportRuler
   * @param {?} _dragDropRegistry
   */
  constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
    this._config = _config;
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
    /**
     * CSS `transform` applied to the element when it isn't being dragged. We need a
     * passive transform in order for the dragged element to retain its new position
     * after the user has stopped dragging and because we need to know the relative
     * position in case they start dragging again. This corresponds to `element.style.transform`.
     */
    this._passiveTransform = {
      x: 0,
      y: 0
    };
    /**
     * CSS `transform` that is applied to the element while it's being dragged.
     */
    this._activeTransform = {
      x: 0,
      y: 0
    };
    /**
     * Emits when the item is being moved.
     */
    this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Subscription to pointer movement events.
     */
    this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    /**
     * Subscription to the event that is dispatched when the user lifts their pointer.
     */
    this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    /**
     * Subscription to the viewport being scrolled.
     */
    this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    /**
     * Subscription to the viewport being resized.
     */
    this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    /**
     * Cached reference to the boundary element.
     */
    this._boundaryElement = null;
    /**
     * Whether the native dragging interactions have been enabled on the root element.
     */
    this._nativeInteractionsEnabled = true;
    /**
     * Elements that can be used to drag the draggable item.
     */
    this._handles = [];
    /**
     * Registered handles that are currently disabled.
     */
    this._disabledHandles = new Set();
    /**
     * Layout direction of the item.
     */
    this._direction = 'ltr';
    /**
     * Amount of milliseconds to wait after the user has put their
     * pointer down before starting to drag the element.
     */
    this.dragStartDelay = 0;
    this._disabled = false;
    /**
     * Emits as the drag sequence is being prepared.
     */
    this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits when the user starts dragging the item.
     */
    this.started = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits when the user has released a drag item, before any animations have started.
     */
    this.released = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits when the user stops dragging an item in the container.
     */
    this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits when the user has moved the item into a new container.
     */
    this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits when the user removes the item its container by dragging it into another container.
     */
    this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits when the user drops the item inside a container.
     */
    this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits as the user is dragging the item. Use with caution,
     * because this event will fire for every pixel that the user has dragged.
     */
    this.moved = this._moveEvents.asObservable();
    /**
     * Handler for the `mousedown`/`touchstart` events.
     */
    this._pointerDown =
    /**
    * @param {?} event
    * @return {?}
    */
    event => {
      this.beforeStarted.next();
      // Delegate the event based on whether it started from a handle or the element itself.
      if (this._handles.length) {
        /** @type {?} */
        const targetHandle = this._handles.find(
        /**
        * @param {?} handle
        * @return {?}
        */
        handle => {
          /** @type {?} */
          const target = event.target;
          return !!target && (target === handle || handle.contains( /** @type {?} */target));
        });
        if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
          this._initializeDragSequence(targetHandle, event);
        }
      } else if (!this.disabled) {
        this._initializeDragSequence(this._rootElement, event);
      }
    };
    /**
     * Handler that is invoked when the user moves their pointer after they've initiated a drag.
     */
    this._pointerMove =
    /**
    * @param {?} event
    * @return {?}
    */
    event => {
      if (!this._hasStartedDragging) {
        /** @type {?} */
        const pointerPosition = this._getPointerPositionOnPage(event);
        /** @type {?} */
        const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
        /** @type {?} */
        const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
        /** @type {?} */
        const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;
        // Only start dragging after the user has moved more than the minimum distance in either
        // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
        // in the `pointerMove` subscription, because we're not guaranteed to have one move event
        // per pixel of movement (e.g. if the user moves their pointer quickly).
        if (isOverThreshold) {
          /** @type {?} */
          const isDelayElapsed = Date.now() >= this._dragStartTime + (this.dragStartDelay || 0);
          if (!isDelayElapsed) {
            this._endDragSequence(event);
            return;
          }
          // Prevent other drag sequences from starting while something in the container is still
          // being dragged. This can happen while we're waiting for the drop animation to finish
          // and can cause errors, because some elements might still be moving around.
          if (!this._dropContainer || !this._dropContainer.isDragging()) {
            this._hasStartedDragging = true;
            this._ngZone.run(
            /**
            * @return {?}
            */
            () => this._startDragSequence(event));
          }
        }
        return;
      }
      // We only need the preview dimensions if we have a boundary element.
      if (this._boundaryElement) {
        // Cache the preview element rect if we haven't cached it already or if
        // we cached it too early before the element dimensions were computed.
        if (!this._previewRect || !this._previewRect.width && !this._previewRect.height) {
          this._previewRect = (this._preview || this._rootElement).getBoundingClientRect();
        }
      }
      /** @type {?} */
      const constrainedPointerPosition = this._getConstrainedPointerPosition(event);
      this._hasMoved = true;
      event.preventDefault();
      this._updatePointerDirectionDelta(constrainedPointerPosition);
      if (this._dropContainer) {
        this._updateActiveDropContainer(constrainedPointerPosition);
      } else {
        /** @type {?} */
        const activeTransform = this._activeTransform;
        activeTransform.x = constrainedPointerPosition.x - this._pickupPositionOnPage.x + this._passiveTransform.x;
        activeTransform.y = constrainedPointerPosition.y - this._pickupPositionOnPage.y + this._passiveTransform.y;
        this._applyRootElementTransform(activeTransform.x, activeTransform.y);
        // Apply transform as attribute if dragging and svg element to work for IE
        if (typeof SVGElement !== 'undefined' && this._rootElement instanceof SVGElement) {
          /** @type {?} */
          const appliedTransform = `translate(${activeTransform.x} ${activeTransform.y})`;
          this._rootElement.setAttribute('transform', appliedTransform);
        }
      }
      // Since this event gets fired for every pixel while dragging, we only
      // want to fire it if the consumer opted into it. Also we have to
      // re-enter the zone because we run all of the events on the outside.
      if (this._moveEvents.observers.length) {
        this._ngZone.run(
        /**
        * @return {?}
        */
        () => {
          this._moveEvents.next({
            source: this,
            pointerPosition: constrainedPointerPosition,
            event,
            distance: this._getDragDistance(constrainedPointerPosition),
            delta: this._pointerDirectionDelta
          });
        });
      }
    };
    /**
     * Handler that is invoked when the user lifts their pointer up, after initiating a drag.
     */
    this._pointerUp =
    /**
    * @param {?} event
    * @return {?}
    */
    event => {
      this._endDragSequence(event);
    };
    this.withRootElement(element);
    _dragDropRegistry.registerDragItem(this);
  }
  /**
   * Whether starting to drag this element is disabled.
   * @return {?}
   */
  get disabled() {
    return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
  }
  /**
   * @param {?} value
   * @return {?}
   */
  set disabled(value) {
    /** @type {?} */
    const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    if (newValue !== this._disabled) {
      this._disabled = newValue;
      this._toggleNativeDragInteractions();
    }
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   * @return {?}
   */
  getPlaceholderElement() {
    return this._placeholder;
  }
  /**
   * Returns the root draggable element.
   * @return {?}
   */
  getRootElement() {
    return this._rootElement;
  }
  /**
   * Registers the handles that can be used to drag the element.
   * @template THIS
   * @this {THIS}
   * @param {?} handles
   * @return {THIS}
   */
  withHandles(handles) {
    /** @type {?} */this._handles = handles.map(
    /**
    * @param {?} handle
    * @return {?}
    */
    handle => (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(handle));
    /** @type {?} */this._handles.forEach(
    /**
    * @param {?} handle
    * @return {?}
    */
    handle => toggleNativeDragInteractions(handle, false));
    /** @type {?} */this._toggleNativeDragInteractions();
    return (/** @type {?} */this
    );
  }
  /**
   * Registers the template that should be used for the drag preview.
   * @template THIS
   * @this {THIS}
   * @param {?} template Template that from which to stamp out the preview.
   * @return {THIS}
   */
  withPreviewTemplate(template) {
    /** @type {?} */this._previewTemplate = template;
    return (/** @type {?} */this
    );
  }
  /**
   * Registers the template that should be used for the drag placeholder.
   * @template THIS
   * @this {THIS}
   * @param {?} template Template that from which to stamp out the placeholder.
   * @return {THIS}
   */
  withPlaceholderTemplate(template) {
    /** @type {?} */this._placeholderTemplate = template;
    return (/** @type {?} */this
    );
  }
  /**
   * Sets an alternate drag root element. The root element is the element that will be moved as
   * the user is dragging. Passing an alternate root element is useful when trying to enable
   * dragging on an element that you might not have access to.
   * @template THIS
   * @this {THIS}
   * @param {?} rootElement
   * @return {THIS}
   */
  withRootElement(rootElement) {
    /** @type {?} */
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(rootElement);
    if (element !== /** @type {?} */this._rootElement) {
      if ( /** @type {?} */this._rootElement) {
        /** @type {?} */this._removeRootElementListeners( /** @type {?} */this._rootElement);
      }
      element.addEventListener('mousedown', /** @type {?} */this._pointerDown, activeEventListenerOptions);
      element.addEventListener('touchstart', /** @type {?} */this._pointerDown, passiveEventListenerOptions);
      /** @type {?} */this._initialTransform = undefined;
      /** @type {?} */this._rootElement = element;
    }
    return (/** @type {?} */this
    );
  }
  /**
   * Element to which the draggable's position will be constrained.
   * @template THIS
   * @this {THIS}
   * @param {?} boundaryElement
   * @return {THIS}
   */
  withBoundaryElement(boundaryElement) {
    /** @type {?} */this._boundaryElement = boundaryElement ? (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(boundaryElement) : null;
    /** @type {?} */this._resizeSubscription.unsubscribe();
    if (boundaryElement) {
      /** @type {?} */this._resizeSubscription = /** @type {?} */this._viewportRuler.change(10).subscribe(
      /**
      * @return {?}
      */
      () => /** @type {?} */this._containInsideBoundaryOnResize());
    }
    return (/** @type {?} */this
    );
  }
  /**
   * Removes the dragging functionality from the DOM element.
   * @return {?}
   */
  dispose() {
    this._removeRootElementListeners(this._rootElement);
    // Do this check before removing from the registry since it'll
    // stop being considered as dragged once it is removed.
    if (this.isDragging()) {
      // Since we move out the element to the end of the body while it's being
      // dragged, we have to make sure that it's removed if it gets destroyed.
      removeElement(this._rootElement);
    }
    this._destroyPreview();
    this._destroyPlaceholder();
    this._dragDropRegistry.removeDragItem(this);
    this._removeSubscriptions();
    this.beforeStarted.complete();
    this.started.complete();
    this.released.complete();
    this.ended.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this._moveEvents.complete();
    this._handles = [];
    this._disabledHandles.clear();
    this._dropContainer = undefined;
    this._boundaryElement = this._rootElement = this._placeholderTemplate = this._previewTemplate = this._nextSibling = /** @type {?} */null;
  }
  /**
   * Checks whether the element is currently being dragged.
   * @return {?}
   */
  isDragging() {
    return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
  }
  /**
   * Resets a standalone drag item to its initial position.
   * @return {?}
   */
  reset() {
    this._rootElement.style.transform = this._initialTransform || '';
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform = {
      x: 0,
      y: 0
    };
  }
  /**
   * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
   * @param {?} handle Handle element that should be disabled.
   * @return {?}
   */
  disableHandle(handle) {
    if (this._handles.indexOf(handle) > -1) {
      this._disabledHandles.add(handle);
    }
  }
  /**
   * Enables a handle, if it has been disabled.
   * @param {?} handle Handle element to be enabled.
   * @return {?}
   */
  enableHandle(handle) {
    this._disabledHandles.delete(handle);
  }
  /**
   * Sets the layout direction of the draggable item.
   * @template THIS
   * @this {THIS}
   * @param {?} direction
   * @return {THIS}
   */
  withDirection(direction) {
    /** @type {?} */this._direction = direction;
    return (/** @type {?} */this
    );
  }
  /**
   * Sets the container that the item is part of.
   * @param {?} container
   * @return {?}
   */
  _withDropContainer(container) {
    this._dropContainer = container;
  }
  /**
   * Gets the current position in pixels the draggable outside of a drop container.
   * @return {?}
   */
  getFreeDragPosition() {
    /** @type {?} */
    const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
    return {
      x: position.x,
      y: position.y
    };
  }
  /**
   * Sets the current position in pixels the draggable outside of a drop container.
   * @template THIS
   * @this {THIS}
   * @param {?} value New position to be set.
   * @return {THIS}
   */
  setFreeDragPosition(value) {
    /** @type {?} */this._activeTransform = {
      x: 0,
      y: 0
    };
    /** @type {?} */this._passiveTransform.x = value.x;
    /** @type {?} */this._passiveTransform.y = value.y;
    if (! /** @type {?} */this._dropContainer) {
      /** @type {?} */this._applyRootElementTransform(value.x, value.y);
    }
    return (/** @type {?} */this
    );
  }
  /**
   * Updates the item's sort order based on the last-known pointer position.
   * @return {?}
   */
  _sortFromLastPointerPosition() {
    /** @type {?} */
    const position = this._pointerPositionAtLastDirectionChange;
    if (position && this._dropContainer) {
      this._updateActiveDropContainer(position);
    }
  }
  /**
   * Unsubscribes from the global subscriptions.
   * @private
   * @return {?}
   */
  _removeSubscriptions() {
    this._pointerMoveSubscription.unsubscribe();
    this._pointerUpSubscription.unsubscribe();
    this._scrollSubscription.unsubscribe();
  }
  /**
   * Destroys the preview element and its ViewRef.
   * @private
   * @return {?}
   */
  _destroyPreview() {
    if (this._preview) {
      removeElement(this._preview);
    }
    if (this._previewRef) {
      this._previewRef.destroy();
    }
    this._preview = this._previewRef = /** @type {?} */null;
  }
  /**
   * Destroys the placeholder element and its ViewRef.
   * @private
   * @return {?}
   */
  _destroyPlaceholder() {
    if (this._placeholder) {
      removeElement(this._placeholder);
    }
    if (this._placeholderRef) {
      this._placeholderRef.destroy();
    }
    this._placeholder = this._placeholderRef = /** @type {?} */null;
  }
  /**
   * Clears subscriptions and stops the dragging sequence.
   * @private
   * @param {?} event Browser event object that ended the sequence.
   * @return {?}
   */
  _endDragSequence(event) {
    // Note that here we use `isDragging` from the service, rather than from `this`.
    // The difference is that the one from the service reflects whether a dragging sequence
    // has been initiated, whereas the one on `this` includes whether the user has passed
    // the minimum dragging threshold.
    if (!this._dragDropRegistry.isDragging(this)) {
      return;
    }
    this._removeSubscriptions();
    this._dragDropRegistry.stopDragging(this);
    this._toggleNativeDragInteractions();
    if (this._handles) {
      this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
    }
    if (!this._hasStartedDragging) {
      return;
    }
    this.released.next({
      source: this
    });
    if (this._dropContainer) {
      // Stop scrolling immediately, instead of waiting for the animation to finish.
      this._dropContainer._stopScrolling();
      this._animatePreviewToPlaceholder().then(
      /**
      * @return {?}
      */
      () => {
        this._cleanupDragArtifacts(event);
        this._cleanupCachedDimensions();
        this._dragDropRegistry.stopDragging(this);
      });
    } else {
      // Convert the active transform into a passive one. This means that next time
      // the user starts dragging the item, its position will be calculated relatively
      // to the new passive transform.
      this._passiveTransform.x = this._activeTransform.x;
      this._passiveTransform.y = this._activeTransform.y;
      this._ngZone.run(
      /**
      * @return {?}
      */
      () => {
        this.ended.next({
          source: this,
          distance: this._getDragDistance(this._getPointerPositionOnPage(event))
        });
      });
      this._cleanupCachedDimensions();
      this._dragDropRegistry.stopDragging(this);
    }
  }
  /**
   * Starts the dragging sequence.
   * @private
   * @param {?} event
   * @return {?}
   */
  _startDragSequence(event) {
    // Emit the event on the item before the one on the container.
    this.started.next({
      source: this
    });
    if (isTouchEvent(event)) {
      this._lastTouchEventTime = Date.now();
    }
    this._toggleNativeDragInteractions();
    if (this._dropContainer) {
      /** @type {?} */
      const element = this._rootElement;
      // Grab the `nextSibling` before the preview and placeholder
      // have been created so we don't get the preview by accident.
      this._nextSibling = element.nextSibling;
      /** @type {?} */
      const preview = this._preview = this._createPreviewElement();
      /** @type {?} */
      const placeholder = this._placeholder = this._createPlaceholderElement();
      // We move the element out at the end of the body and we make it hidden, because keeping it in
      // place will throw off the consumer's `:last-child` selectors. We can't remove the element
      // from the DOM completely, because iOS will stop firing all subsequent events in the chain.
      element.style.display = 'none';
      this._document.body.appendChild( /** @type {?} */element.parentNode.replaceChild(placeholder, element));
      getPreviewInsertionPoint(this._document).appendChild(preview);
      this._dropContainer.start();
    }
  }
  /**
   * Sets up the different variables and subscriptions
   * that will be necessary for the dragging sequence.
   * @private
   * @param {?} referenceElement Element that started the drag sequence.
   * @param {?} event Browser event object that started the sequence.
   * @return {?}
   */
  _initializeDragSequence(referenceElement, event) {
    // Always stop propagation for the event that initializes
    // the dragging sequence, in order to prevent it from potentially
    // starting another sequence for a draggable parent somewhere up the DOM tree.
    event.stopPropagation();
    /** @type {?} */
    const isDragging = this.isDragging();
    /** @type {?} */
    const isTouchSequence = isTouchEvent(event);
    /** @type {?} */
    const isAuxiliaryMouseButton = !isTouchSequence && /** @type {?} */event.button !== 0;
    /** @type {?} */
    const rootElement = this._rootElement;
    /** @type {?} */
    const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
    // If the event started from an element with the native HTML drag&drop, it'll interfere
    // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
    // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
    // it's flaky and it fails if the user drags it away quickly. Also note that we only want
    // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
    // events from firing on touch devices.
    if (event.target && /** @type {?} */event.target.draggable && event.type === 'mousedown') {
      event.preventDefault();
    }
    // Abort if the user is already dragging or is using a mouse button other than the primary one.
    if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
      return;
    }
    // If we've got handles, we need to disable the tap highlight on the entire root element,
    // otherwise iOS will still add it, even though all the drag interactions on the handle
    // are disabled.
    if (this._handles.length) {
      this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor;
      rootElement.style.webkitTapHighlightColor = 'transparent';
    }
    this._hasStartedDragging = this._hasMoved = false;
    this._initialContainer = /** @type {?} */this._dropContainer;
    // Avoid multiple subscriptions and memory leaks when multi touch
    // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)
    this._removeSubscriptions();
    this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
    this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
    this._scrollSubscription = this._dragDropRegistry.scroll.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(null)).subscribe(
    /**
    * @return {?}
    */
    () => {
      this._scrollPosition = this._viewportRuler.getViewportScrollPosition();
    });
    if (this._boundaryElement) {
      this._boundaryRect = this._boundaryElement.getBoundingClientRect();
    }
    // If we have a custom preview template, the element won't be visible anyway so we avoid the
    // extra `getBoundingClientRect` calls and just move the preview next to the cursor.
    this._pickupPositionInElement = this._previewTemplate && this._previewTemplate.template ? {
      x: 0,
      y: 0
    } : this._getPointerPositionInElement(referenceElement, event);
    /** @type {?} */
    const pointerPosition = this._pickupPositionOnPage = this._getPointerPositionOnPage(event);
    this._pointerDirectionDelta = {
      x: 0,
      y: 0
    };
    this._pointerPositionAtLastDirectionChange = {
      x: pointerPosition.x,
      y: pointerPosition.y
    };
    this._dragStartTime = Date.now();
    this._dragDropRegistry.startDragging(this, event);
  }
  /**
   * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
   * @private
   * @param {?} event
   * @return {?}
   */
  _cleanupDragArtifacts(event) {
    // Restore the element's visibility and insert it at its old position in the DOM.
    // It's important that we maintain the position, because moving the element around in the DOM
    // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
    // while moving the existing elements in all other cases.
    this._rootElement.style.display = '';
    if (this._nextSibling) {
      /** @type {?} */this._nextSibling.parentNode.insertBefore(this._rootElement, this._nextSibling);
    } else {
      (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this._initialContainer.element).appendChild(this._rootElement);
    }
    this._destroyPreview();
    this._destroyPlaceholder();
    this._boundaryRect = this._previewRect = undefined;
    // Re-enter the NgZone since we bound `document` events on the outside.
    this._ngZone.run(
    /**
    * @return {?}
    */
    () => {
      /** @type {?} */
      const container = /** @type {?} */this._dropContainer;
      /** @type {?} */
      const currentIndex = container.getItemIndex(this);
      /** @type {?} */
      const pointerPosition = this._getPointerPositionOnPage(event);
      /** @type {?} */
      const distance = this._getDragDistance(this._getPointerPositionOnPage(event));
      /** @type {?} */
      const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
      this.ended.next({
        source: this,
        distance
      });
      this.dropped.next({
        item: this,
        currentIndex,
        previousIndex: this._initialContainer.getItemIndex(this),
        container: container,
        previousContainer: this._initialContainer,
        isPointerOverContainer,
        distance
      });
      container.drop(this, currentIndex, this._initialContainer, isPointerOverContainer, distance);
      this._dropContainer = this._initialContainer;
    });
  }
  /**
   * Updates the item's position in its drop container, or moves it
   * into a new one, depending on its current drag position.
   * @private
   * @param {?} __0
   * @return {?}
   */
  _updateActiveDropContainer({
    x,
    y
  }) {
    // Drop container that draggable has been moved into.
    /** @type {?} */
    let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
    // If we couldn't find a new container to move the item into, and the item has left its
    // initial container, check whether the it's over the initial container. This handles the
    // case where two containers are connected one way and the user tries to undo dragging an
    // item into a new container.
    if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
      newContainer = this._initialContainer;
    }
    if (newContainer && newContainer !== this._dropContainer) {
      this._ngZone.run(
      /**
      * @return {?}
      */
      () => {
        // Notify the old container that the item has left.
        this.exited.next({
          item: this,
          container: /** @type {?} */this._dropContainer
        });
        /** @type {?} */this._dropContainer.exit(this);
        // Notify the new container that the item has entered.
        this._dropContainer = /** @type {?} */newContainer;
        this._dropContainer.enter(this, x, y);
        this.entered.next({
          item: this,
          container: /** @type {?} */newContainer,
          currentIndex: /** @type {?} */newContainer.getItemIndex(this)
        });
      });
    }
    /** @type {?} */this._dropContainer._startScrollingIfNecessary(x, y);
    /** @type {?} */this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);
    this._preview.style.transform = getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
  }
  /**
   * Creates the element that will be rendered next to the user's pointer
   * and will be used as a preview of the element that is being dragged.
   * @private
   * @return {?}
   */
  _createPreviewElement() {
    /** @type {?} */
    const previewConfig = this._previewTemplate;
    /** @type {?} */
    const previewTemplate = previewConfig ? previewConfig.template : null;
    /** @type {?} */
    let preview;
    if (previewTemplate) {
      /** @type {?} */
      const viewRef = /** @type {?} */previewConfig.viewContainer.createEmbeddedView(previewTemplate, /** @type {?} */previewConfig.context);
      preview = getRootNode(viewRef, this._document);
      this._previewRef = viewRef;
      preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
    } else {
      /** @type {?} */
      const element = this._rootElement;
      /** @type {?} */
      const elementRect = element.getBoundingClientRect();
      preview = deepCloneNode(element);
      preview.style.width = `${elementRect.width}px`;
      preview.style.height = `${elementRect.height}px`;
      preview.style.transform = getTransform(elementRect.left, elementRect.top);
    }
    extendStyles(preview.style, {
      // It's important that we disable the pointer events on the preview, because
      // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
      pointerEvents: 'none',
      // We have to reset the margin, because can throw off positioning relative to the viewport.
      margin: '0',
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '1000'
    });
    toggleNativeDragInteractions(preview, false);
    preview.classList.add('cdk-drag-preview');
    preview.setAttribute('dir', this._direction);
    return preview;
  }
  /**
   * Animates the preview element from its current position to the location of the drop placeholder.
   * @private
   * @return {?} Promise that resolves when the animation completes.
   */
  _animatePreviewToPlaceholder() {
    // If the user hasn't moved yet, the transitionend event won't fire.
    if (!this._hasMoved) {
      return Promise.resolve();
    }
    /** @type {?} */
    const placeholderRect = this._placeholder.getBoundingClientRect();
    // Apply the class that adds a transition to the preview.
    this._preview.classList.add('cdk-drag-animating');
    // Move the preview to the placeholder position.
    this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top);
    // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
    // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
    // apply its style, we take advantage of the available info to figure out whether we need to
    // bind the event in the first place.
    /** @type {?} */
    const duration = getTransformTransitionDurationInMs(this._preview);
    if (duration === 0) {
      return Promise.resolve();
    }
    return this._ngZone.runOutsideAngular(
    /**
    * @return {?}
    */
    () => {
      return new Promise(
      /**
      * @param {?} resolve
      * @return {?}
      */
      resolve => {
        /** @type {?} */
        const handler = /** @type {?} */ /**
                                         * @param {?} event
                                         * @return {?}
                                         */
        event => {
          if (!event || event.target === this._preview && event.propertyName === 'transform') {
            this._preview.removeEventListener('transitionend', handler);
            resolve();
            clearTimeout(timeout);
          }
        };
        // If a transition is short enough, the browser might not fire the `transitionend` event.
        // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
        // fire if the transition hasn't completed when it was supposed to.
        /** @type {?} */
        const timeout = setTimeout( /** @type {?} */handler, duration * 1.5);
        this._preview.addEventListener('transitionend', handler);
      });
    });
  }
  /**
   * Creates an element that will be shown instead of the current element while dragging.
   * @private
   * @return {?}
   */
  _createPlaceholderElement() {
    /** @type {?} */
    const placeholderConfig = this._placeholderTemplate;
    /** @type {?} */
    const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
    /** @type {?} */
    let placeholder;
    if (placeholderTemplate) {
      this._placeholderRef = /** @type {?} */placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, /** @type {?} */placeholderConfig.context);
      placeholder = getRootNode(this._placeholderRef, this._document);
    } else {
      placeholder = deepCloneNode(this._rootElement);
    }
    placeholder.classList.add('cdk-drag-placeholder');
    return placeholder;
  }
  /**
   * Figures out the coordinates at which an element was picked up.
   * @private
   * @param {?} referenceElement Element that initiated the dragging.
   * @param {?} event Event that initiated the dragging.
   * @return {?}
   */
  _getPointerPositionInElement(referenceElement, event) {
    /** @type {?} */
    const elementRect = this._rootElement.getBoundingClientRect();
    /** @type {?} */
    const handleElement = referenceElement === this._rootElement ? null : referenceElement;
    /** @type {?} */
    const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
    /** @type {?} */
    const point = isTouchEvent(event) ? event.targetTouches[0] : event;
    /** @type {?} */
    const x = point.pageX - referenceRect.left - this._scrollPosition.left;
    /** @type {?} */
    const y = point.pageY - referenceRect.top - this._scrollPosition.top;
    return {
      x: referenceRect.left - elementRect.left + x,
      y: referenceRect.top - elementRect.top + y
    };
  }
  /**
   * Determines the point of the page that was touched by the user.
   * @private
   * @param {?} event
   * @return {?}
   */
  _getPointerPositionOnPage(event) {
    // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
    /** @type {?} */
    const point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
    return {
      x: point.pageX - this._scrollPosition.left,
      y: point.pageY - this._scrollPosition.top
    };
  }
  /**
   * Gets the pointer position on the page, accounting for any position constraints.
   * @private
   * @param {?} event
   * @return {?}
   */
  _getConstrainedPointerPosition(event) {
    /** @type {?} */
    const point = this._getPointerPositionOnPage(event);
    /** @type {?} */
    const constrainedPoint = this.constrainPosition ? this.constrainPosition(point, this) : point;
    /** @type {?} */
    const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
    if (this.lockAxis === 'x' || dropContainerLock === 'x') {
      constrainedPoint.y = this._pickupPositionOnPage.y;
    } else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
      constrainedPoint.x = this._pickupPositionOnPage.x;
    }
    if (this._boundaryRect) {
      const {
        x: pickupX,
        y: pickupY
      } = this._pickupPositionInElement;
      /** @type {?} */
      const boundaryRect = this._boundaryRect;
      /** @type {?} */
      const previewRect = /** @type {?} */this._previewRect;
      /** @type {?} */
      const minY = boundaryRect.top + pickupY;
      /** @type {?} */
      const maxY = boundaryRect.bottom - (previewRect.height - pickupY);
      /** @type {?} */
      const minX = boundaryRect.left + pickupX;
      /** @type {?} */
      const maxX = boundaryRect.right - (previewRect.width - pickupX);
      constrainedPoint.x = clamp(constrainedPoint.x, minX, maxX);
      constrainedPoint.y = clamp(constrainedPoint.y, minY, maxY);
    }
    return constrainedPoint;
  }
  /**
   * Updates the current drag delta, based on the user's current pointer position on the page.
   * @private
   * @param {?} pointerPositionOnPage
   * @return {?}
   */
  _updatePointerDirectionDelta(pointerPositionOnPage) {
    const {
      x,
      y
    } = pointerPositionOnPage;
    /** @type {?} */
    const delta = this._pointerDirectionDelta;
    /** @type {?} */
    const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
    // Amount of pixels the user has dragged since the last time the direction changed.
    /** @type {?} */
    const changeX = Math.abs(x - positionSinceLastChange.x);
    /** @type {?} */
    const changeY = Math.abs(y - positionSinceLastChange.y);
    // Because we handle pointer events on a per-pixel basis, we don't want the delta
    // to change for every pixel, otherwise anything that depends on it can look erratic.
    // To make the delta more consistent, we track how much the user has moved since the last
    // delta change and we only update it after it has reached a certain threshold.
    if (changeX > this._config.pointerDirectionChangeThreshold) {
      delta.x = x > positionSinceLastChange.x ? 1 : -1;
      positionSinceLastChange.x = x;
    }
    if (changeY > this._config.pointerDirectionChangeThreshold) {
      delta.y = y > positionSinceLastChange.y ? 1 : -1;
      positionSinceLastChange.y = y;
    }
    return delta;
  }
  /**
   * Toggles the native drag interactions, based on how many handles are registered.
   * @private
   * @return {?}
   */
  _toggleNativeDragInteractions() {
    if (!this._rootElement || !this._handles) {
      return;
    }
    /** @type {?} */
    const shouldEnable = this._handles.length > 0 || !this.isDragging();
    if (shouldEnable !== this._nativeInteractionsEnabled) {
      this._nativeInteractionsEnabled = shouldEnable;
      toggleNativeDragInteractions(this._rootElement, shouldEnable);
    }
  }
  /**
   * Removes the manually-added event listeners from the root element.
   * @private
   * @param {?} element
   * @return {?}
   */
  _removeRootElementListeners(element) {
    element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
    element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
  }
  /**
   * Applies a `transform` to the root element, taking into account any existing transforms on it.
   * @private
   * @param {?} x New transform value along the X axis.
   * @param {?} y New transform value along the Y axis.
   * @return {?}
   */
  _applyRootElementTransform(x, y) {
    /** @type {?} */
    const transform = getTransform(x, y);
    // Cache the previous transform amount only after the first drag sequence, because
    // we don't want our own transforms to stack on top of each other.
    if (this._initialTransform == null) {
      this._initialTransform = this._rootElement.style.transform || '';
    }
    // Preserve the previous `transform` value, if there was one. Note that we apply our own
    // transform before the user's, because things like rotation can affect which direction
    // the element will be translated towards.
    this._rootElement.style.transform = this._initialTransform ? transform + ' ' + this._initialTransform : transform;
  }
  /**
   * Gets the distance that the user has dragged during the current drag sequence.
   * @private
   * @param {?} currentPosition Current position of the user's pointer.
   * @return {?}
   */
  _getDragDistance(currentPosition) {
    /** @type {?} */
    const pickupPosition = this._pickupPositionOnPage;
    if (pickupPosition) {
      return {
        x: currentPosition.x - pickupPosition.x,
        y: currentPosition.y - pickupPosition.y
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
  /**
   * Cleans up any cached element dimensions that we don't need after dragging has stopped.
   * @private
   * @return {?}
   */
  _cleanupCachedDimensions() {
    this._boundaryRect = this._previewRect = undefined;
  }
  /**
   * Checks whether the element is still inside its boundary after the viewport has been resized.
   * If not, the position is adjusted so that the element fits again.
   * @private
   * @return {?}
   */
  _containInsideBoundaryOnResize() {
    let {
      x,
      y
    } = this._passiveTransform;
    if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
      return;
    }
    /** @type {?} */
    const boundaryRect = this._boundaryElement.getBoundingClientRect();
    /** @type {?} */
    const elementRect = this._rootElement.getBoundingClientRect();
    /** @type {?} */
    const leftOverflow = boundaryRect.left - elementRect.left;
    /** @type {?} */
    const rightOverflow = elementRect.right - boundaryRect.right;
    /** @type {?} */
    const topOverflow = boundaryRect.top - elementRect.top;
    /** @type {?} */
    const bottomOverflow = elementRect.bottom - boundaryRect.bottom;
    // If the element has become wider than the boundary, we can't
    // do much to make it fit so we just anchor it to the left.
    if (boundaryRect.width > elementRect.width) {
      if (leftOverflow > 0) {
        x += leftOverflow;
      }
      if (rightOverflow > 0) {
        x -= rightOverflow;
      }
    } else {
      x = 0;
    }
    // If the element has become taller than the boundary, we can't
    // do much to make it fit so we just anchor it to the top.
    if (boundaryRect.height > elementRect.height) {
      if (topOverflow > 0) {
        y += topOverflow;
      }
      if (bottomOverflow > 0) {
        y -= bottomOverflow;
      }
    } else {
      y = 0;
    }
    if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
      this.setFreeDragPosition({
        y,
        x
      });
    }
  }
}
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param {?} x Desired position of the element along the X axis.
 * @param {?} y Desired position of the element along the Y axis.
 * @return {?}
 */
function getTransform(x, y) {
  // Round the transforms since some browsers will
  // blur the elements for sub-pixel transforms.
  return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
/**
 * Creates a deep clone of an element.
 * @param {?} node
 * @return {?}
 */
function deepCloneNode(node) {
  /** @type {?} */
  const clone = /** @type {?} */node.cloneNode(true);
  /** @type {?} */
  const descendantsWithId = clone.querySelectorAll('[id]');
  /** @type {?} */
  const descendantCanvases = node.querySelectorAll('canvas');
  // Remove the `id` to avoid having multiple elements with the same id on the page.
  clone.removeAttribute('id');
  for (let i = 0; i < descendantsWithId.length; i++) {
    descendantsWithId[i].removeAttribute('id');
  }
  // `cloneNode` won't transfer the content of `canvas` elements so we have to do it ourselves.
  // We match up the cloned canvas to their sources using their index in the DOM.
  if (descendantCanvases.length) {
    /** @type {?} */
    const cloneCanvases = clone.querySelectorAll('canvas');
    for (let i = 0; i < descendantCanvases.length; i++) {
      /** @type {?} */
      const correspondingCloneContext = cloneCanvases[i].getContext('2d');
      if (correspondingCloneContext) {
        correspondingCloneContext.drawImage(descendantCanvases[i], 0, 0);
      }
    }
  }
  return clone;
}
/**
 * Clamps a value between a minimum and a maximum.
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
/**
 * Helper to remove an element from the DOM and to do all the necessary null checks.
 * @param {?} element Element to be removed.
 * @return {?}
 */
function removeElement(element) {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
}
/**
 * Determines whether an event is a touch event.
 * @param {?} event
 * @return {?}
 */
function isTouchEvent(event) {
  // This function is called for every pixel that the user has dragged so we need it to be
  // as fast as possible. Since we only bind mouse events and touch events, we can assume
  // that if the event's name starts with `t`, it's a touch event.
  return event.type[0] === 't';
}
/**
 * Gets the element into which the drag preview should be inserted.
 * @param {?} documentRef
 * @return {?}
 */
function getPreviewInsertionPoint(documentRef) {
  // We can't use the body if the user is in fullscreen mode,
  // because the preview will render under the fullscreen element.
  // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
  return documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
}
/**
 * Gets the root HTML element of an embedded view.
 * If the root is not an HTML element it gets wrapped in one.
 * @param {?} viewRef
 * @param {?} _document
 * @return {?}
 */
function getRootNode(viewRef, _document) {
  /** @type {?} */
  const rootNode = viewRef.rootNodes[0];
  if (rootNode.nodeType !== _document.ELEMENT_NODE) {
    /** @type {?} */
    const wrapper = _document.createElement('div');
    wrapper.appendChild(rootNode);
    return wrapper;
  }
  return (/** @type {?} */rootNode
  );
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Moves an item one index in an array to another.
 * @template T
 * @param {?} array Array in which to move the item.
 * @param {?} fromIndex Starting index of the item.
 * @param {?} toIndex Index to which the item should be moved.
 * @return {?}
 */
function moveItemInArray(array, fromIndex, toIndex) {
  /** @type {?} */
  const from = clamp$1(fromIndex, array.length - 1);
  /** @type {?} */
  const to = clamp$1(toIndex, array.length - 1);
  if (from === to) {
    return;
  }
  /** @type {?} */
  const target = array[from];
  /** @type {?} */
  const delta = to < from ? -1 : 1;
  for (let i = from; i !== to; i += delta) {
    array[i] = array[i + delta];
  }
  array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @template T
 * @param {?} currentArray Array from which to transfer the item.
 * @param {?} targetArray Array into which to put the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 * @return {?}
 */
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
  /** @type {?} */
  const from = clamp$1(currentIndex, currentArray.length - 1);
  /** @type {?} */
  const to = clamp$1(targetIndex, targetArray.length);
  if (currentArray.length) {
    targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
  }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @template T
 * @param {?} currentArray Array from which to copy the item.
 * @param {?} targetArray Array into which is copy the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 *
 * @return {?}
 */
function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
  /** @type {?} */
  const to = clamp$1(targetIndex, targetArray.length);
  if (currentArray.length) {
    targetArray.splice(to, 0, currentArray[currentIndex]);
  }
}
/**
 * Clamps a number between zero and a maximum.
 * @param {?} value
 * @param {?} max
 * @return {?}
 */
function clamp$1(value, max) {
  return Math.max(0, Math.min(max, value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop refs.
 * @type {?}
 */
let _uniqueIdCounter = 0;
/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 * @type {?}
 */
const DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
 * viewport. The value comes from trying it out manually until it feels right.
 * @type {?}
 */
const SCROLL_PROXIMITY_THRESHOLD = 0.05;
/**
 * Number of pixels to scroll for each frame when auto-scrolling an element.
 * The value comes from trying it out manually until it feels right.
 * @type {?}
 */
const AUTO_SCROLL_STEP = 2;
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 * \@docs-private
 * @template T
 */
class DropListRef {
  /**
   * @param {?} element
   * @param {?} _dragDropRegistry
   * @param {?} _document
   * @param {?=} _ngZone
   * @param {?=} _viewportRuler
   */
  constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
    this._dragDropRegistry = _dragDropRegistry;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    /**
     * Unique ID for the drop list.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 8.0.0
     */
    this.id = `cdk-drop-list-ref-${_uniqueIdCounter++}`;
    /**
     * Whether starting a dragging sequence from this container is disabled.
     */
    this.disabled = false;
    /**
     * Whether sorting items within the list is disabled.
     */
    this.sortingDisabled = false;
    /**
     * Whether auto-scrolling the view when the user
     * moves their pointer close to the edges is disabled.
     */
    this.autoScrollDisabled = false;
    /**
     * Function that is used to determine whether an item
     * is allowed to be moved into a drop container.
     */
    this.enterPredicate =
    /**
    * @return {?}
    */
    () => true;
    /**
     * Emits right before dragging has started.
     */
    this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits when the user has moved a new drag item into this container.
     */
    this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits when the user removes an item from the container
     * by dragging it into another container.
     */
    this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits when the user drops an item inside the container.
     */
    this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits as the user is swapping items while actively dragging.
     */
    this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Whether an item in the list is being dragged.
     */
    this._isDragging = false;
    /**
     * Cache of the dimensions of all the items inside the container.
     */
    this._itemPositions = [];
    /**
     * Keeps track of the container's scroll position.
     */
    this._scrollPosition = {
      top: 0,
      left: 0
    };
    /**
     * Keeps track of the scroll position of the viewport.
     */
    this._viewportScrollPosition = {
      top: 0,
      left: 0
    };
    /**
     * Keeps track of the item that was last swapped with the dragged item, as
     * well as what direction the pointer was moving in when the swap occured.
     */
    this._previousSwap = {
      drag: /** @type {?} */null,
      delta: 0
    };
    /**
     * Drop lists that are connected to the current one.
     */
    this._siblings = [];
    /**
     * Direction in which the list is oriented.
     */
    this._orientation = 'vertical';
    /**
     * Connected siblings that currently have a dragged item.
     */
    this._activeSiblings = new Set();
    /**
     * Layout direction of the drop list.
     */
    this._direction = 'ltr';
    /**
     * Subscription to the window being scrolled.
     */
    this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    /**
     * Vertical direction in which the list is currently scrolling.
     */
    this._verticalScrollDirection = 0 /* NONE */;
    /**
     * Horizontal direction in which the list is currently scrolling.
     */
    this._horizontalScrollDirection = 0 /* NONE */;
    /**
     * Used to signal to the current auto-scroll sequence when to stop.
     */
    this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Handles the container being scrolled. Has to be an arrow function to preserve the context.
     */
    this._handleScroll =
    /**
    * @return {?}
    */
    () => {
      if (!this.isDragging()) {
        return;
      }
      /** @type {?} */
      const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element);
      this._updateAfterScroll(this._scrollPosition, element.scrollTop, element.scrollLeft);
    };
    /**
     * Starts the interval that'll auto-scroll the element.
     */
    this._startScrollInterval =
    /**
    * @return {?}
    */
    () => {
      this._stopScrolling();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.interval)(0, rxjs__WEBPACK_IMPORTED_MODULE_6__.animationFrameScheduler).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._stopScrollTimers)).subscribe(
      /**
      * @return {?}
      */
      () => {
        /** @type {?} */
        const node = this._scrollNode;
        if (this._verticalScrollDirection === 1 /* UP */) {
          incrementVerticalScroll(node, -AUTO_SCROLL_STEP);
        } else if (this._verticalScrollDirection === 2 /* DOWN */) {
          incrementVerticalScroll(node, AUTO_SCROLL_STEP);
        }
        if (this._horizontalScrollDirection === 1 /* LEFT */) {
          incrementHorizontalScroll(node, -AUTO_SCROLL_STEP);
        } else if (this._horizontalScrollDirection === 2 /* RIGHT */) {
          incrementHorizontalScroll(node, AUTO_SCROLL_STEP);
        }
      });
    };
    /** @type {?} */
    const nativeNode = this.element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(element);
    this._shadowRoot = getShadowRoot(nativeNode) || _document;
    _dragDropRegistry.registerDropContainer(this);
  }
  /**
   * Removes the drop list functionality from the DOM element.
   * @return {?}
   */
  dispose() {
    this._stopScrolling();
    this._stopScrollTimers.complete();
    this._removeListeners();
    this.beforeStarted.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this.sorted.complete();
    this._activeSiblings.clear();
    this._scrollNode = /** @type {?} */null;
    this._dragDropRegistry.removeDropContainer(this);
  }
  /**
   * Whether an item from this list is currently being dragged.
   * @return {?}
   */
  isDragging() {
    return this._isDragging;
  }
  /**
   * Starts dragging an item.
   * @return {?}
   */
  start() {
    /** @type {?} */
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element);
    this.beforeStarted.next();
    this._isDragging = true;
    this._cacheItems();
    this._siblings.forEach(
    /**
    * @param {?} sibling
    * @return {?}
    */
    sibling => sibling._startReceiving(this));
    this._removeListeners();
    // @breaking-change 9.0.0 Remove check for _ngZone once it's marked as a required param.
    if (this._ngZone) {
      this._ngZone.runOutsideAngular(
      /**
      * @return {?}
      */
      () => element.addEventListener('scroll', this._handleScroll));
    } else {
      element.addEventListener('scroll', this._handleScroll);
    }
    // @breaking-change 9.0.0 Remove check for _viewportRuler once it's marked as a required param.
    if (this._viewportRuler) {
      this._listenToScrollEvents();
    }
  }
  /**
   * Emits an event to indicate that the user moved an item into the container.
   * @param {?} item Item that was moved into the container.
   * @param {?} pointerX Position of the item along the X axis.
   * @param {?} pointerY Position of the item along the Y axis.
   * @return {?}
   */
  enter(item, pointerX, pointerY) {
    this.start();
    // If sorting is disabled, we want the item to return to its starting
    // position if the user is returning it to its initial container.
    /** @type {?} */
    let newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;
    if (newIndex === -1) {
      // We use the coordinates of where the item entered the drop
      // zone to figure out at which index it should be inserted.
      newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
    }
    /** @type {?} */
    const activeDraggables = this._activeDraggables;
    /** @type {?} */
    const currentIndex = activeDraggables.indexOf(item);
    /** @type {?} */
    const placeholder = item.getPlaceholderElement();
    /** @type {?} */
    let newPositionReference = activeDraggables[newIndex];
    // If the item at the new position is the same as the item that is being dragged,
    // it means that we're trying to restore the item to its initial position. In this
    // case we should use the next item from the list as the reference.
    if (newPositionReference === item) {
      newPositionReference = activeDraggables[newIndex + 1];
    }
    // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
    // into another container and back again), we have to ensure that it isn't duplicated.
    if (currentIndex > -1) {
      activeDraggables.splice(currentIndex, 1);
    }
    // Don't use items that are being dragged as a reference, because
    // their element has been moved down to the bottom of the body.
    if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
      /** @type {?} */
      const element = newPositionReference.getRootElement();
      /** @type {?} */element.parentElement.insertBefore(placeholder, element);
      activeDraggables.splice(newIndex, 0, item);
    } else {
      (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element).appendChild(placeholder);
      activeDraggables.push(item);
    }
    // The transform needs to be cleared so it doesn't throw off the measurements.
    placeholder.style.transform = '';
    // Note that the positions were already cached when we called `start` above,
    // but we need to refresh them since the amount of items has changed.
    this._cacheItemPositions();
    this.entered.next({
      item,
      container: this,
      currentIndex: this.getItemIndex(item)
    });
  }
  /**
   * Removes an item from the container after it was dragged into another container by the user.
   * @param {?} item Item that was dragged out.
   * @return {?}
   */
  exit(item) {
    this._reset();
    this.exited.next({
      item,
      container: this
    });
  }
  /**
   * Drops an item into this container.
   * \@breaking-change 9.0.0 `distance` parameter to become required.
   * @param {?} item Item being dropped into the container.
   * @param {?} currentIndex Index at which the item should be inserted.
   * @param {?} previousContainer Container from which the item got dragged in.
   * @param {?} isPointerOverContainer Whether the user's pointer was over the
   *    container when the item was dropped.
   * @param {?=} distance Distance the user has dragged since the start of the dragging sequence.
   * @return {?}
   */
  drop(item, currentIndex, previousContainer, isPointerOverContainer, distance = {
    x: 0,
    y: 0
  }) {
    this._reset();
    this.dropped.next({
      item,
      currentIndex,
      previousIndex: previousContainer.getItemIndex(item),
      container: this,
      previousContainer,
      isPointerOverContainer,
      distance
    });
  }
  /**
   * Sets the draggable items that are a part of this list.
   * @template THIS
   * @this {THIS}
   * @param {?} items Items that are a part of this list.
   * @return {THIS}
   */
  withItems(items) {
    /** @type {?} */this._draggables = items;
    items.forEach(
    /**
    * @param {?} item
    * @return {?}
    */
    item => item._withDropContainer( /** @type {?} */this));
    if ( /** @type {?} */this.isDragging()) {
      /** @type {?} */this._cacheItems();
    }
    return (/** @type {?} */this
    );
  }
  /**
   * Sets the layout direction of the drop list.
   * @template THIS
   * @this {THIS}
   * @param {?} direction
   * @return {THIS}
   */
  withDirection(direction) {
    /** @type {?} */this._direction = direction;
    return (/** @type {?} */this
    );
  }
  /**
   * Sets the containers that are connected to this one. When two or more containers are
   * connected, the user will be allowed to transfer items between them.
   * @template THIS
   * @this {THIS}
   * @param {?} connectedTo Other containers that the current containers should be connected to.
   * @return {THIS}
   */
  connectedTo(connectedTo) {
    /** @type {?} */this._siblings = connectedTo.slice();
    return (/** @type {?} */this
    );
  }
  /**
   * Sets the orientation of the container.
   * @template THIS
   * @this {THIS}
   * @param {?} orientation New orientation for the container.
   * @return {THIS}
   */
  withOrientation(orientation) {
    /** @type {?} */this._orientation = orientation;
    return (/** @type {?} */this
    );
  }
  /**
   * Figures out the index of an item in the container.
   * @param {?} item Item whose index should be determined.
   * @return {?}
   */
  getItemIndex(item) {
    if (!this._isDragging) {
      return this._draggables.indexOf(item);
    }
    // Items are sorted always by top/left in the cache, however they flow differently in RTL.
    // The rest of the logic still stands no matter what orientation we're in, however
    // we need to invert the array when determining the index.
    /** @type {?} */
    const items = this._orientation === 'horizontal' && this._direction === 'rtl' ? this._itemPositions.slice().reverse() : this._itemPositions;
    return findIndex(items,
    /**
    * @param {?} currentItem
    * @return {?}
    */
    currentItem => currentItem.drag === item);
  }
  /**
   * Whether the list is able to receive the item that
   * is currently being dragged inside a connected drop list.
   * @return {?}
   */
  isReceiving() {
    return this._activeSiblings.size > 0;
  }
  /**
   * Sorts an item inside the container based on its position.
   * @param {?} item Item to be sorted.
   * @param {?} pointerX Position of the item along the X axis.
   * @param {?} pointerY Position of the item along the Y axis.
   * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
   * @return {?}
   */
  _sortItem(item, pointerX, pointerY, pointerDelta) {
    // Don't sort the item if sorting is disabled or it's out of range.
    if (this.sortingDisabled || !this._isPointerNearDropContainer(pointerX, pointerY)) {
      return;
    }
    /** @type {?} */
    const siblings = this._itemPositions;
    /** @type {?} */
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
    if (newIndex === -1 && siblings.length > 0) {
      return;
    }
    /** @type {?} */
    const isHorizontal = this._orientation === 'horizontal';
    /** @type {?} */
    const currentIndex = findIndex(siblings,
    /**
    * @param {?} currentItem
    * @return {?}
    */
    currentItem => currentItem.drag === item);
    /** @type {?} */
    const siblingAtNewPosition = siblings[newIndex];
    /** @type {?} */
    const currentPosition = siblings[currentIndex].clientRect;
    /** @type {?} */
    const newPosition = siblingAtNewPosition.clientRect;
    /** @type {?} */
    const delta = currentIndex > newIndex ? 1 : -1;
    this._previousSwap.drag = siblingAtNewPosition.drag;
    this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
    // How many pixels the item's placeholder should be offset.
    /** @type {?} */
    const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
    // How many pixels all the other items should be offset.
    /** @type {?} */
    const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
    // Save the previous order of the items before moving the item to its new index.
    // We use this to check whether an item has been moved as a result of the sorting.
    /** @type {?} */
    const oldOrder = siblings.slice();
    // Shuffle the array in place.
    moveItemInArray(siblings, currentIndex, newIndex);
    this.sorted.next({
      previousIndex: currentIndex,
      currentIndex: newIndex,
      container: this,
      item
    });
    siblings.forEach(
    /**
    * @param {?} sibling
    * @param {?} index
    * @return {?}
    */
    (sibling, index) => {
      // Don't do anything if the position hasn't changed.
      if (oldOrder[index] === sibling) {
        return;
      }
      /** @type {?} */
      const isDraggedItem = sibling.drag === item;
      /** @type {?} */
      const offset = isDraggedItem ? itemOffset : siblingOffset;
      /** @type {?} */
      const elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement();
      // Update the offset to reflect the new position.
      sibling.offset += offset;
      // Since we're moving the items with a `transform`, we need to adjust their cached
      // client rects to reflect their new position, as well as swap their positions in the cache.
      // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
      // elements may be mid-animation which will give us a wrong result.
      if (isHorizontal) {
        // Round the transforms since some browsers will
        // blur the elements, for sub-pixel transforms.
        elementToOffset.style.transform = `translate3d(${Math.round(sibling.offset)}px, 0, 0)`;
        adjustClientRect(sibling.clientRect, 0, offset);
      } else {
        elementToOffset.style.transform = `translate3d(0, ${Math.round(sibling.offset)}px, 0)`;
        adjustClientRect(sibling.clientRect, offset, 0);
      }
    });
  }
  /**
   * Checks whether the user's pointer is close to the edges of either the
   * viewport or the drop list and starts the auto-scroll sequence.
   * @param {?} pointerX User's pointer position along the x axis.
   * @param {?} pointerY User's pointer position along the y axis.
   * @return {?}
   */
  _startScrollingIfNecessary(pointerX, pointerY) {
    if (this.autoScrollDisabled) {
      return;
    }
    /** @type {?} */
    let scrollNode;
    /** @type {?} */
    let verticalScrollDirection = 0 /* NONE */;
    /** @type {?} */
    let horizontalScrollDirection = 0 /* NONE */;
    // Check whether we should start scrolling the container.
    if (this._isPointerNearDropContainer(pointerX, pointerY)) {
      /** @type {?} */
      const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element);
      [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections(element, this._clientRect, pointerX, pointerY);
      if (verticalScrollDirection || horizontalScrollDirection) {
        scrollNode = element;
      }
    }
    // @breaking-change 9.0.0 Remove null check for _viewportRuler once it's a required parameter.
    // Otherwise check if we can start scrolling the viewport.
    if (this._viewportRuler && !verticalScrollDirection && !horizontalScrollDirection) {
      const {
        width,
        height
      } = this._viewportRuler.getViewportSize();
      /** @type {?} */
      const clientRect = {
        width,
        height,
        top: 0,
        right: width,
        bottom: height,
        left: 0
      };
      verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
      horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
      scrollNode = window;
    }
    if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
      this._verticalScrollDirection = verticalScrollDirection;
      this._horizontalScrollDirection = horizontalScrollDirection;
      this._scrollNode = scrollNode;
      if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
        // @breaking-change 9.0.0 Remove null check for `_ngZone` once it is made required.
        if (this._ngZone) {
          this._ngZone.runOutsideAngular(this._startScrollInterval);
        } else {
          this._startScrollInterval();
        }
      } else {
        this._stopScrolling();
      }
    }
  }
  /**
   * Stops any currently-running auto-scroll sequences.
   * @return {?}
   */
  _stopScrolling() {
    this._stopScrollTimers.next();
  }
  /**
   * Caches the position of the drop list.
   * @private
   * @return {?}
   */
  _cacheOwnPosition() {
    /** @type {?} */
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element);
    this._clientRect = getMutableClientRect(element);
    this._scrollPosition = {
      top: element.scrollTop,
      left: element.scrollLeft
    };
  }
  /**
   * Refreshes the position cache of the items and sibling containers.
   * @private
   * @return {?}
   */
  _cacheItemPositions() {
    /** @type {?} */
    const isHorizontal = this._orientation === 'horizontal';
    this._itemPositions = this._activeDraggables.map(
    /**
    * @param {?} drag
    * @return {?}
    */
    drag => {
      /** @type {?} */
      const elementToMeasure = this._dragDropRegistry.isDragging(drag) ?
      // If the element is being dragged, we have to measure the
      // placeholder, because the element is hidden.
      drag.getPlaceholderElement() : drag.getRootElement();
      return {
        drag,
        offset: 0,
        clientRect: getMutableClientRect(elementToMeasure)
      };
    }).sort(
    /**
    * @param {?} a
    * @param {?} b
    * @return {?}
    */
    (a, b) => {
      return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
    });
  }
  /**
   * Resets the container to its initial state.
   * @private
   * @return {?}
   */
  _reset() {
    this._isDragging = false;
    // TODO(crisbeto): may have to wait for the animations to finish.
    this._activeDraggables.forEach(
    /**
    * @param {?} item
    * @return {?}
    */
    item => item.getRootElement().style.transform = '');
    this._siblings.forEach(
    /**
    * @param {?} sibling
    * @return {?}
    */
    sibling => sibling._stopReceiving(this));
    this._activeDraggables = [];
    this._itemPositions = [];
    this._previousSwap.drag = null;
    this._previousSwap.delta = 0;
    this._stopScrolling();
    this._removeListeners();
  }
  /**
   * Gets the offset in pixels by which the items that aren't being dragged should be moved.
   * @private
   * @param {?} currentIndex Index of the item currently being dragged.
   * @param {?} siblings All of the items in the list.
   * @param {?} delta Direction in which the user is moving.
   * @return {?}
   */
  _getSiblingOffsetPx(currentIndex, siblings, delta) {
    /** @type {?} */
    const isHorizontal = this._orientation === 'horizontal';
    /** @type {?} */
    const currentPosition = siblings[currentIndex].clientRect;
    /** @type {?} */
    const immediateSibling = siblings[currentIndex + delta * -1];
    /** @type {?} */
    let siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;
    if (immediateSibling) {
      /** @type {?} */
      const start = isHorizontal ? 'left' : 'top';
      /** @type {?} */
      const end = isHorizontal ? 'right' : 'bottom';
      // Get the spacing between the start of the current item and the end of the one immediately
      // after it in the direction in which the user is dragging, or vice versa. We add it to the
      // offset in order to push the element to where it will be when it's inline and is influenced
      // by the `margin` of its siblings.
      if (delta === -1) {
        siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
      } else {
        siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
      }
    }
    return siblingOffset;
  }
  /**
   * Checks whether the pointer coordinates are close to the drop container.
   * @private
   * @param {?} pointerX Coordinates along the X axis.
   * @param {?} pointerY Coordinates along the Y axis.
   * @return {?}
   */
  _isPointerNearDropContainer(pointerX, pointerY) {
    const {
      top,
      right,
      bottom,
      left,
      width,
      height
    } = this._clientRect;
    /** @type {?} */
    const xThreshold = width * DROP_PROXIMITY_THRESHOLD;
    /** @type {?} */
    const yThreshold = height * DROP_PROXIMITY_THRESHOLD;
    return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
  }
  /**
   * Gets the offset in pixels by which the item that is being dragged should be moved.
   * @private
   * @param {?} currentPosition Current position of the item.
   * @param {?} newPosition Position of the item where the current item should be moved.
   * @param {?} delta Direction in which the user is moving.
   * @return {?}
   */
  _getItemOffsetPx(currentPosition, newPosition, delta) {
    /** @type {?} */
    const isHorizontal = this._orientation === 'horizontal';
    /** @type {?} */
    let itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top;
    // Account for differences in the item width/height.
    if (delta === -1) {
      itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
    }
    return itemOffset;
  }
  /**
   * Gets the index of an item in the drop container, based on the position of the user's pointer.
   * @private
   * @param {?} item Item that is being sorted.
   * @param {?} pointerX Position of the user's pointer along the X axis.
   * @param {?} pointerY Position of the user's pointer along the Y axis.
   * @param {?=} delta Direction in which the user is moving their pointer.
   * @return {?}
   */
  _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
    /** @type {?} */
    const isHorizontal = this._orientation === 'horizontal';
    return findIndex(this._itemPositions,
    /**
    * @param {?} __0
    * @param {?} _
    * @param {?} array
    * @return {?}
    */
    ({
      drag,
      clientRect
    }, _, array) => {
      if (drag === item) {
        // If there's only one item left in the container, it must be
        // the dragged item itself so we use it as a reference.
        return array.length < 2;
      }
      if (delta) {
        /** @type {?} */
        const direction = isHorizontal ? delta.x : delta.y;
        // If the user is still hovering over the same item as last time, and they didn't change
        // the direction in which they're dragging, we don't consider it a direction swap.
        if (drag === this._previousSwap.drag && direction === this._previousSwap.delta) {
          return false;
        }
      }
      return isHorizontal ?
      // Round these down since most browsers report client rects with
      // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
      pointerX >= Math.floor(clientRect.left) && pointerX <= Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY <= Math.floor(clientRect.bottom);
    });
  }
  /**
   * Caches the current items in the list and their positions.
   * @private
   * @return {?}
   */
  _cacheItems() {
    this._activeDraggables = this._draggables.slice();
    this._cacheItemPositions();
    this._cacheOwnPosition();
  }
  /**
   * Updates the internal state of the container after a scroll event has happened.
   * @private
   * @param {?} scrollPosition Object that is keeping track of the scroll position.
   * @param {?} newTop New top scroll position.
   * @param {?} newLeft New left scroll position.
   * @param {?=} extraClientRect Extra `ClientRect` object that should be updated, in addition to the
   *  ones of the drag items. Useful when the viewport has been scrolled and we also need to update
   *  the `ClientRect` of the list.
   * @return {?}
   */
  _updateAfterScroll(scrollPosition, newTop, newLeft, extraClientRect) {
    /** @type {?} */
    const topDifference = scrollPosition.top - newTop;
    /** @type {?} */
    const leftDifference = scrollPosition.left - newLeft;
    if (extraClientRect) {
      adjustClientRect(extraClientRect, topDifference, leftDifference);
    }
    // Since we know the amount that the user has scrolled we can shift all of the client rectangles
    // ourselves. This is cheaper than re-measuring everything and we can avoid inconsistent
    // behavior where we might be measuring the element before its position has changed.
    this._itemPositions.forEach(
    /**
    * @param {?} __0
    * @return {?}
    */
    ({
      clientRect
    }) => {
      adjustClientRect(clientRect, topDifference, leftDifference);
    });
    // We need two loops for this, because we want all of the cached
    // positions to be up-to-date before we re-sort the item.
    this._itemPositions.forEach(
    /**
    * @param {?} __0
    * @return {?}
    */
    ({
      drag
    }) => {
      if (this._dragDropRegistry.isDragging(drag)) {
        // We need to re-sort the item manually, because the pointer move
        // events won't be dispatched while the user is scrolling.
        drag._sortFromLastPointerPosition();
      }
    });
    scrollPosition.top = newTop;
    scrollPosition.left = newLeft;
  }
  /**
   * Removes the event listeners associated with this drop list.
   * @private
   * @return {?}
   */
  _removeListeners() {
    (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element).removeEventListener('scroll', this._handleScroll);
    this._viewportScrollSubscription.unsubscribe();
  }
  /**
   * Checks whether the user's pointer is positioned over the container.
   * @param {?} x Pointer position along the X axis.
   * @param {?} y Pointer position along the Y axis.
   * @return {?}
   */
  _isOverContainer(x, y) {
    return isInsideClientRect(this._clientRect, x, y);
  }
  /**
   * Figures out whether an item should be moved into a sibling
   * drop container, based on its current position.
   * @param {?} item Drag item that is being moved.
   * @param {?} x Position of the item along the X axis.
   * @param {?} y Position of the item along the Y axis.
   * @return {?}
   */
  _getSiblingContainerFromPosition(item, x, y) {
    return this._siblings.find(
    /**
    * @param {?} sibling
    * @return {?}
    */
    sibling => sibling._canReceive(item, x, y));
  }
  /**
   * Checks whether the drop list can receive the passed-in item.
   * @param {?} item Item that is being dragged into the list.
   * @param {?} x Position of the item along the X axis.
   * @param {?} y Position of the item along the Y axis.
   * @return {?}
   */
  _canReceive(item, x, y) {
    if (!this.enterPredicate(item, this) || !isInsideClientRect(this._clientRect, x, y)) {
      return false;
    }
    /** @type {?} */
    const elementFromPoint = /** @type {?} */this._shadowRoot.elementFromPoint(x, y);
    // If there's no element at the pointer position, then
    // the client rect is probably scrolled out of the view.
    if (!elementFromPoint) {
      return false;
    }
    /** @type {?} */
    const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element);
    // The `ClientRect`, that we're using to find the container over which the user is
    // hovering, doesn't give us any information on whether the element has been scrolled
    // out of the view or whether it's overlapping with other containers. This means that
    // we could end up transferring the item into a container that's invisible or is positioned
    // below another one. We use the result from `elementFromPoint` to get the top-most element
    // at the pointer position and to find whether it's one of the intersecting drop containers.
    return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
  }
  /**
   * Called by one of the connected drop lists when a dragging sequence has started.
   * @param {?} sibling Sibling in which dragging has started.
   * @return {?}
   */
  _startReceiving(sibling) {
    /** @type {?} */
    const activeSiblings = this._activeSiblings;
    if (!activeSiblings.has(sibling)) {
      activeSiblings.add(sibling);
      this._cacheOwnPosition();
      this._listenToScrollEvents();
    }
  }
  /**
   * Called by a connected drop list when dragging has stopped.
   * @param {?} sibling Sibling whose dragging has stopped.
   * @return {?}
   */
  _stopReceiving(sibling) {
    this._activeSiblings.delete(sibling);
    this._viewportScrollSubscription.unsubscribe();
  }
  /**
   * Starts listening to scroll events on the viewport.
   * Used for updating the internal state of the list.
   * @private
   * @return {?}
   */
  _listenToScrollEvents() {
    this._viewportScrollPosition = /** @type {?} */this._viewportRuler.getViewportScrollPosition();
    this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe(
    /**
    * @return {?}
    */
    () => {
      if (this.isDragging()) {
        /** @type {?} */
        const newPosition = /** @type {?} */this._viewportRuler.getViewportScrollPosition();
        this._updateAfterScroll(this._viewportScrollPosition, newPosition.top, newPosition.left, this._clientRect);
      } else if (this.isReceiving()) {
        this._cacheOwnPosition();
      }
    });
  }
}
/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param {?} clientRect `ClientRect` that should be updated.
 * @param {?} top Amount to add to the `top` position.
 * @param {?} left Amount to add to the `left` position.
 * @return {?}
 */
function adjustClientRect(clientRect, top, left) {
  clientRect.top += top;
  clientRect.bottom = clientRect.top + clientRect.height;
  clientRect.left += left;
  clientRect.right = clientRect.left + clientRect.width;
}
/**
 * Finds the index of an item that matches a predicate function. Used as an equivalent
 * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
 * @template T
 * @param {?} array Array in which to look for matches.
 * @param {?} predicate Function used to determine whether an item is a match.
 * @return {?}
 */
function findIndex(array, predicate) {
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}
/**
 * Checks whether some coordinates are within a `ClientRect`.
 * @param {?} clientRect ClientRect that is being checked.
 * @param {?} x Coordinates along the X axis.
 * @param {?} y Coordinates along the Y axis.
 * @return {?}
 */
function isInsideClientRect(clientRect, x, y) {
  const {
    top,
    bottom,
    left,
    right
  } = clientRect;
  return y >= top && y <= bottom && x >= left && x <= right;
}
/**
 * Gets a mutable version of an element's bounding `ClientRect`.
 * @param {?} element
 * @return {?}
 */
function getMutableClientRect(element) {
  /** @type {?} */
  const clientRect = element.getBoundingClientRect();
  // We need to clone the `clientRect` here, because all the values on it are readonly
  // and we need to be able to update them. Also we can't use a spread here, because
  // the values on a `ClientRect` aren't own properties. See:
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes
  return {
    top: clientRect.top,
    right: clientRect.right,
    bottom: clientRect.bottom,
    left: clientRect.left,
    width: clientRect.width,
    height: clientRect.height
  };
}
/**
 * Increments the vertical scroll position of a node.
 * @param {?} node Node whose scroll position should change.
 * @param {?} amount Amount of pixels that the `node` should be scrolled.
 * @return {?}
 */
function incrementVerticalScroll(node, amount) {
  if (node === window) {
    /** @type {?} */node.scrollBy(0, amount);
  } else {
    // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
    /** @type {?} */node.scrollTop += amount;
  }
}
/**
 * Increments the horizontal scroll position of a node.
 * @param {?} node Node whose scroll position should change.
 * @param {?} amount Amount of pixels that the `node` should be scrolled.
 * @return {?}
 */
function incrementHorizontalScroll(node, amount) {
  if (node === window) {
    /** @type {?} */node.scrollBy(amount, 0);
  } else {
    // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
    /** @type {?} */node.scrollLeft += amount;
  }
}
/**
 * Gets whether the vertical auto-scroll direction of a node.
 * @param {?} clientRect Dimensions of the node.
 * @param {?} pointerY Position of the user's pointer along the y axis.
 * @return {?}
 */
function getVerticalScrollDirection(clientRect, pointerY) {
  const {
    top,
    bottom,
    height
  } = clientRect;
  /** @type {?} */
  const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
    return 1 /* UP */;
  } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
    return 2 /* DOWN */;
  }

  return 0 /* NONE */;
}
/**
 * Gets whether the horizontal auto-scroll direction of a node.
 * @param {?} clientRect Dimensions of the node.
 * @param {?} pointerX Position of the user's pointer along the x axis.
 * @return {?}
 */
function getHorizontalScrollDirection(clientRect, pointerX) {
  const {
    left,
    right,
    width
  } = clientRect;
  /** @type {?} */
  const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
    return 1 /* LEFT */;
  } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
    return 2 /* RIGHT */;
  }

  return 0 /* NONE */;
}
/**
 * Gets the directions in which an element node should be scrolled,
 * assuming that the user's pointer is already within it scrollable region.
 * @param {?} element Element for which we should calculate the scroll direction.
 * @param {?} clientRect Bounding client rectangle of the element.
 * @param {?} pointerX Position of the user's pointer along the x axis.
 * @param {?} pointerY Position of the user's pointer along the y axis.
 * @return {?}
 */
function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
  /** @type {?} */
  const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
  /** @type {?} */
  const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
  /** @type {?} */
  let verticalScrollDirection = 0 /* NONE */;
  /** @type {?} */
  let horizontalScrollDirection = 0 /* NONE */;
  // Note that we here we do some extra checks for whether the element is actually scrollable in
  // a certain direction and we only assign the scroll direction if it is. We do this so that we
  // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
  // This allows us to handle cases where the scroll regions of two scrollable elements overlap.
  if (computedVertical) {
    /** @type {?} */
    const scrollTop = element.scrollTop;
    if (computedVertical === 1 /* UP */) {
      if (scrollTop > 0) {
        verticalScrollDirection = 1 /* UP */;
      }
    } else if (element.scrollHeight - scrollTop > element.clientHeight) {
      verticalScrollDirection = 2 /* DOWN */;
    }
  }

  if (computedHorizontal) {
    /** @type {?} */
    const scrollLeft = element.scrollLeft;
    if (computedHorizontal === 1 /* LEFT */) {
      if (scrollLeft > 0) {
        horizontalScrollDirection = 1 /* LEFT */;
      }
    } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
      horizontalScrollDirection = 2 /* RIGHT */;
    }
  }

  return [verticalScrollDirection, horizontalScrollDirection];
}
/**
 * Gets the shadow root of an element, if any.
 * @param {?} element
 * @return {?}
 */
function getShadowRoot(element) {
  if ((0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._supportsShadowDom)()) {
    /** @type {?} */
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    if (rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Event options that can be used to bind an active, capturing event.
 * @type {?}
 */
const activeCapturingEventOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: false,
  capture: true
});
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * \@docs-private
 * @template I, C
 */
// Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
// to avoid circular imports. If we were to reference them here, importing the registry into the
// classes that are registering themselves will introduce a circular import.
class DragDropRegistry {
  /**
   * @param {?} _ngZone
   * @param {?} _document
   */
  constructor(_ngZone, _document) {
    this._ngZone = _ngZone;
    /**
     * Registered drop container instances.
     */
    this._dropInstances = new Set();
    /**
     * Registered drag item instances.
     */
    this._dragInstances = new Set();
    /**
     * Drag item instances that are currently being dragged.
     */
    this._activeDragInstances = new Set();
    /**
     * Keeps track of the event listeners that we've bound to the `document`.
     */
    this._globalListeners = new Map();
    /**
     * Emits the `touchmove` or `mousemove` events that are dispatched
     * while the user is dragging a drag item instance.
     */
    this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits the `touchend` or `mouseup` events that are dispatched
     * while the user is dragging a drag item instance.
     */
    this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits when the viewport has been scrolled while the user is dragging an item.
     */
    this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Event listener that will prevent the default browser action while the user is dragging.
     * @param event Event whose default action should be prevented.
     */
    this._preventDefaultWhileDragging =
    /**
    * @param {?} event
    * @return {?}
    */
    event => {
      if (this._activeDragInstances.size) {
        event.preventDefault();
      }
    };
    this._document = _document;
  }
  /**
   * Adds a drop container to the registry.
   * @param {?} drop
   * @return {?}
   */
  registerDropContainer(drop) {
    if (!this._dropInstances.has(drop)) {
      if (this.getDropContainer(drop.id)) {
        throw Error(`Drop instance with id "${drop.id}" has already been registered.`);
      }
      this._dropInstances.add(drop);
    }
  }
  /**
   * Adds a drag item instance to the registry.
   * @param {?} drag
   * @return {?}
   */
  registerDragItem(drag) {
    this._dragInstances.add(drag);
    // The `touchmove` event gets bound once, ahead of time, because WebKit
    // won't preventDefault on a dynamically-added `touchmove` listener.
    // See https://bugs.webkit.org/show_bug.cgi?id=184250.
    if (this._dragInstances.size === 1) {
      this._ngZone.runOutsideAngular(
      /**
      * @return {?}
      */
      () => {
        // The event handler has to be explicitly active,
        // because newer browsers make it passive by default.
        this._document.addEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
      });
    }
  }
  /**
   * Removes a drop container from the registry.
   * @param {?} drop
   * @return {?}
   */
  removeDropContainer(drop) {
    this._dropInstances.delete(drop);
  }
  /**
   * Removes a drag item instance from the registry.
   * @param {?} drag
   * @return {?}
   */
  removeDragItem(drag) {
    this._dragInstances.delete(drag);
    this.stopDragging(drag);
    if (this._dragInstances.size === 0) {
      this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
    }
  }
  /**
   * Starts the dragging sequence for a drag instance.
   * @param {?} drag Drag instance which is being dragged.
   * @param {?} event Event that initiated the dragging.
   * @return {?}
   */
  startDragging(drag, event) {
    // Do not process the same drag twice to avoid memory leaks and redundant listeners
    if (this._activeDragInstances.has(drag)) {
      return;
    }
    this._activeDragInstances.add(drag);
    if (this._activeDragInstances.size === 1) {
      /** @type {?} */
      const isTouchEvent = event.type.startsWith('touch');
      /** @type {?} */
      const moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
      /** @type {?} */
      const upEvent = isTouchEvent ? 'touchend' : 'mouseup';
      // We explicitly bind __active__ listeners here, because newer browsers will default to
      // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
      // use `preventDefault` to prevent the page from scrolling while the user is dragging.
      this._globalListeners.set(moveEvent, {
        handler:
        /**
        * @param {?} e
        * @return {?}
        */
        e => this.pointerMove.next( /** @type {?} */e),
        options: activeCapturingEventOptions
      }).set(upEvent, {
        handler:
        /**
        * @param {?} e
        * @return {?}
        */
        e => this.pointerUp.next( /** @type {?} */e),
        options: true
      }).set('scroll', {
        handler:
        /**
        * @param {?} e
        * @return {?}
        */
        e => this.scroll.next(e),
        // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
        // the document. See https://github.com/angular/components/issues/17144.
        options: true
      })
      // Preventing the default action on `mousemove` isn't enough to disable text selection
      // on Safari so we need to prevent the selection event as well. Alternatively this can
      // be done by setting `user-select: none` on the `body`, however it has causes a style
      // recalculation which can be expensive on pages with a lot of elements.
      .set('selectstart', {
        handler: this._preventDefaultWhileDragging,
        options: activeCapturingEventOptions
      });
      this._ngZone.runOutsideAngular(
      /**
      * @return {?}
      */
      () => {
        this._globalListeners.forEach(
        /**
        * @param {?} config
        * @param {?} name
        * @return {?}
        */
        (config, name) => {
          this._document.addEventListener(name, config.handler, config.options);
        });
      });
    }
  }
  /**
   * Stops dragging a drag item instance.
   * @param {?} drag
   * @return {?}
   */
  stopDragging(drag) {
    this._activeDragInstances.delete(drag);
    if (this._activeDragInstances.size === 0) {
      this._clearGlobalListeners();
    }
  }
  /**
   * Gets whether a drag item instance is currently being dragged.
   * @param {?} drag
   * @return {?}
   */
  isDragging(drag) {
    return this._activeDragInstances.has(drag);
  }
  /**
   * Gets a drop container by its id.
   * @deprecated No longer being used. To be removed.
   * \@breaking-change 8.0.0
   * @param {?} id
   * @return {?}
   */
  getDropContainer(id) {
    return Array.from(this._dropInstances).find(
    /**
    * @param {?} instance
    * @return {?}
    */
    instance => instance.id === id);
  }
  /**
   * @return {?}
   */
  ngOnDestroy() {
    this._dragInstances.forEach(
    /**
    * @param {?} instance
    * @return {?}
    */
    instance => this.removeDragItem(instance));
    this._dropInstances.forEach(
    /**
    * @param {?} instance
    * @return {?}
    */
    instance => this.removeDropContainer(instance));
    this._clearGlobalListeners();
    this.pointerMove.complete();
    this.pointerUp.complete();
  }
  /**
   * Clears out the global event listeners from the `document`.
   * @private
   * @return {?}
   */
  _clearGlobalListeners() {
    this._globalListeners.forEach(
    /**
    * @param {?} config
    * @param {?} name
    * @return {?}
    */
    (config, name) => {
      this._document.removeEventListener(name, config.handler, config.options);
    });
    this._globalListeners.clear();
  }
}
DragDropRegistry.ɵfac = function DragDropRegistry_Factory(t) {
  return new (t || DragDropRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT));
};
DragDropRegistry.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: DragDropRegistry,
  factory: DragDropRegistry.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */
DragDropRegistry.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone
}, {
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject,
    args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT]
  }]
}];
/** @nocollapse */
DragDropRegistry.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"])({
  factory: function DragDropRegistry_Factory() {
    return new DragDropRegistry((0,_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT));
  },
  token: DragDropRegistry,
  providedIn: "root"
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](DragDropRegistry, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT]
      }]
    }];
  }, null);
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default configuration to be used when creating a `DragRef`.
 * @type {?}
 */
const DEFAULT_CONFIG = {
  dragStartThreshold: 5,
  pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
class DragDrop {
  /**
   * @param {?} _document
   * @param {?} _ngZone
   * @param {?} _viewportRuler
   * @param {?} _dragDropRegistry
   */
  constructor(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
  }
  /**
   * Turns an element into a draggable item.
   * @template T
   * @param {?} element Element to which to attach the dragging functionality.
   * @param {?=} config Object used to configure the dragging behavior.
   * @return {?}
   */
  createDrag(element, config = DEFAULT_CONFIG) {
    return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
  }
  /**
   * Turns an element into a drop list.
   * @template T
   * @param {?} element Element to which to attach the drop list functionality.
   * @return {?}
   */
  createDropList(element) {
    return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
  }
}
DragDrop.ɵfac = function DragDrop_Factory(t) {
  return new (t || DragDrop)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](DragDropRegistry));
};
DragDrop.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: DragDrop,
  factory: DragDrop.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */
DragDrop.ctorParameters = () => [{
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject,
    args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT]
  }]
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone
}, {
  type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.ViewportRuler
}, {
  type: DragDropRegistry
}];
/** @nocollapse */
DragDrop.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"])({
  factory: function DragDrop_Factory() {
    return new DragDrop((0,_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT), (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.ViewportRuler), (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"])(DragDropRegistry));
  },
  token: DragDrop,
  providedIn: "root"
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](DragDrop, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.ViewportRuler
    }, {
      type: DragDropRegistry
    }];
  }, null);
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @type {?}
 */
const CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.InjectionToken('CDK_DROP_LIST');
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @deprecated Use `CDK_DROP_LIST` instead.
 * \@breaking-change 8.0.0
 * @type {?}
 */
const CDK_DROP_LIST_CONTAINER = CDK_DROP_LIST;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * \@docs-private
 * @type {?}
 */
const CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.InjectionToken('CDK_DRAG_PARENT');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Handle that can be used to drag and CdkDrag instance.
 */
class CdkDragHandle {
  /**
   * @param {?} element
   * @param {?=} parentDrag
   */
  constructor(element, parentDrag) {
    this.element = element;
    /**
     * Emits when the state of the handle has changed.
     */
    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this._disabled = false;
    this._parentDrag = parentDrag;
    toggleNativeDragInteractions(element.nativeElement, false);
  }
  /**
   * Whether starting to drag through this handle is disabled.
   * @return {?}
   */
  get disabled() {
    return this._disabled;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    this._stateChanges.next(this);
  }
  /**
   * @return {?}
   */
  ngOnDestroy() {
    this._stateChanges.complete();
  }
}
CdkDragHandle.ɵfac = function CdkDragHandle_Factory(t) {
  return new (t || CdkDragHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 8));
};
CdkDragHandle.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: CdkDragHandle,
  selectors: [["", "cdkDragHandle", ""]],
  hostAttrs: [1, "cdk-drag-handle"],
  inputs: {
    disabled: ["cdkDragHandleDisabled", "disabled"]
  }
});
/** @nocollapse */
CdkDragHandle.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef
}, {
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject,
    args: [CDK_DRAG_PARENT]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Optional
  }]
}];
CdkDragHandle.propDecorators = {
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
    args: ['cdkDragHandleDisabled']
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](CdkDragHandle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Directive,
    args: [{
      selector: '[cdkDragHandle]',
      host: {
        'class': 'cdk-drag-handle'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject,
        args: [CDK_DRAG_PARENT]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Optional
      }]
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
      args: ['cdkDragHandleDisabled']
    }]
  });
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 * @template T
 */
class CdkDragPlaceholder {
  /**
   * @param {?} templateRef
   */
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
CdkDragPlaceholder.ɵfac = function CdkDragPlaceholder_Factory(t) {
  return new (t || CdkDragPlaceholder)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.TemplateRef));
};
CdkDragPlaceholder.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: CdkDragPlaceholder,
  selectors: [["ng-template", "cdkDragPlaceholder", ""]],
  inputs: {
    data: "data"
  }
});
/** @nocollapse */
CdkDragPlaceholder.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.TemplateRef
}];
CdkDragPlaceholder.propDecorators = {
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](CdkDragPlaceholder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Directive,
    args: [{
      selector: 'ng-template[cdkDragPlaceholder]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.TemplateRef
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }]
  });
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 * @template T
 */
class CdkDragPreview {
  /**
   * @param {?} templateRef
   */
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
CdkDragPreview.ɵfac = function CdkDragPreview_Factory(t) {
  return new (t || CdkDragPreview)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.TemplateRef));
};
CdkDragPreview.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: CdkDragPreview,
  selectors: [["ng-template", "cdkDragPreview", ""]],
  inputs: {
    data: "data"
  }
});
/** @nocollapse */
CdkDragPreview.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.TemplateRef
}];
CdkDragPreview.propDecorators = {
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](CdkDragPreview, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Directive,
    args: [{
      selector: 'ng-template[cdkDragPreview]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.TemplateRef
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }]
  });
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to configure the behavior of `CdkDrag`.
 * @type {?}
 */
const CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.InjectionToken('CDK_DRAG_CONFIG', {
  providedIn: 'root',
  factory: CDK_DRAG_CONFIG_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function CDK_DRAG_CONFIG_FACTORY() {
  return {
    dragStartThreshold: 5,
    pointerDirectionChangeThreshold: 5
  };
}
/**
 * Element that can be moved inside a CdkDropList container.
 * @template T
 */
class CdkDrag {
  /**
   * @param {?} element
   * @param {?} dropContainer
   * @param {?} _document
   * @param {?} _ngZone
   * @param {?} _viewContainerRef
   * @param {?} config
   * @param {?} _dir
   * @param {?} dragDrop
   * @param {?} _changeDetectorRef
   */
  constructor(element, dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef) {
    this.element = element;
    this.dropContainer = dropContainer;
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewContainerRef = _viewContainerRef;
    this._dir = _dir;
    this._changeDetectorRef = _changeDetectorRef;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Amount of milliseconds to wait after the user has put their
     * pointer down before starting to drag the element.
     */
    this.dragStartDelay = 0;
    this._disabled = false;
    /**
     * Emits when the user starts dragging the item.
     */
    this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    /**
     * Emits when the user has released a drag item, before any animations have started.
     */
    this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    /**
     * Emits when the user stops dragging an item in the container.
     */
    this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    /**
     * Emits when the user has moved the item into a new container.
     */
    this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    /**
     * Emits when the user removes the item its container by dragging it into another container.
     */
    this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    /**
     * Emits when the user drops the item inside a container.
     */
    this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    /**
     * Emits as the user is dragging the item. Use with caution,
     * because this event will fire for every pixel that the user has dragged.
     */
    this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Observable(
    /**
    * @param {?} observer
    * @return {?}
    */
    observer => {
      /** @type {?} */
      const subscription = this._dragRef.moved.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(
      /**
      * @param {?} movedEvent
      * @return {?}
      */
      movedEvent => ({
        source: this,
        pointerPosition: movedEvent.pointerPosition,
        event: movedEvent.event,
        delta: movedEvent.delta,
        distance: movedEvent.distance
      }))).subscribe(observer);
      return (
        /**
        * @return {?}
        */
        () => {
          subscription.unsubscribe();
        }
      );
    });
    this._dragRef = dragDrop.createDrag(element, config);
    this._dragRef.data = this;
    this._syncInputs(this._dragRef);
    this._handleEvents(this._dragRef);
  }
  /**
   * Selector that will be used to determine the element to which the draggable's position will
   * be constrained. Matching starts from the element's parent and goes up the DOM until a matching
   * element has been found
   * @deprecated Use `boundaryElement` instead.
   * \@breaking-change 9.0.0
   * @return {?}
   */
  get boundaryElementSelector() {
    return typeof this.boundaryElement === 'string' ? this.boundaryElement : /** @type {?} */undefined;
  }
  /**
   * @param {?} selector
   * @return {?}
   */
  set boundaryElementSelector(selector) {
    this.boundaryElement = selector;
  }
  /**
   * Whether starting to drag this element is disabled.
   * @return {?}
   */
  get disabled() {
    return this._disabled || this.dropContainer && this.dropContainer.disabled;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    this._dragRef.disabled = this._disabled;
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   * @return {?}
   */
  getPlaceholderElement() {
    return this._dragRef.getPlaceholderElement();
  }
  /**
   * Returns the root draggable element.
   * @return {?}
   */
  getRootElement() {
    return this._dragRef.getRootElement();
  }
  /**
   * Resets a standalone drag item to its initial position.
   * @return {?}
   */
  reset() {
    this._dragRef.reset();
  }
  /**
   * Gets the pixel coordinates of the draggable outside of a drop container.
   * @return {?}
   */
  getFreeDragPosition() {
    return this._dragRef.getFreeDragPosition();
  }
  /**
   * @return {?}
   */
  ngAfterViewInit() {
    // We need to wait for the zone to stabilize, in order for the reference
    // element to be in the proper place in the DOM. This is mostly relevant
    // for draggable elements inside portals since they get stamped out in
    // their original DOM position and then they get transferred to the portal.
    this._ngZone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(
    /**
    * @return {?}
    */
    () => {
      this._updateRootElement();
      // Listen for any newly-added handles.
      this._handles.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(this._handles),
      // Sync the new handles with the DragRef.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(
      /**
      * @param {?} handles
      * @return {?}
      */
      handles => {
        /** @type {?} */
        const childHandleElements = handles.filter(
        /**
        * @param {?} handle
        * @return {?}
        */
        handle => handle._parentDrag === this).map(
        /**
        * @param {?} handle
        * @return {?}
        */
        handle => handle.element);
        this._dragRef.withHandles(childHandleElements);
      }),
      // Listen if the state of any of the handles changes.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(
      /**
      * @param {?} handles
      * @return {?}
      */
      handles => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(...handles.map(
        /**
        * @param {?} item
        * @return {?}
        */
        item => item._stateChanges));
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(
      /**
      * @param {?} handleInstance
      * @return {?}
      */
      handleInstance => {
        // Enabled/disable the handle that changed in the DragRef.
        /** @type {?} */
        const dragRef = this._dragRef;
        /** @type {?} */
        const handle = handleInstance.element.nativeElement;
        handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
      });
      if (this.freeDragPosition) {
        this._dragRef.setFreeDragPosition(this.freeDragPosition);
      }
    });
  }
  /**
   * @param {?} changes
   * @return {?}
   */
  ngOnChanges(changes) {
    /** @type {?} */
    const rootSelectorChange = changes['rootElementSelector'];
    /** @type {?} */
    const positionChange = changes['freeDragPosition'];
    // We don't have to react to the first change since it's being
    // handled in `ngAfterViewInit` where it needs to be deferred.
    if (rootSelectorChange && !rootSelectorChange.firstChange) {
      this._updateRootElement();
    }
    // Skip the first change since it's being handled in `ngAfterViewInit`.
    if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
      this._dragRef.setFreeDragPosition(this.freeDragPosition);
    }
  }
  /**
   * @return {?}
   */
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
    this._dragRef.dispose();
  }
  /**
   * Syncs the root element with the `DragRef`.
   * @private
   * @return {?}
   */
  _updateRootElement() {
    /** @type {?} */
    const element = this.element.nativeElement;
    /** @type {?} */
    const rootElement = this.rootElementSelector ? getClosestMatchingAncestor(element, this.rootElementSelector) : element;
    if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
      throw Error(`cdkDrag must be attached to an element node. ` + `Currently attached to "${rootElement.nodeName}".`);
    }
    this._dragRef.withRootElement(rootElement || element);
  }
  /**
   * Gets the boundary element, based on the `boundaryElement` value.
   * @private
   * @return {?}
   */
  _getBoundaryElement() {
    /** @type {?} */
    const boundary = this.boundaryElement;
    if (!boundary) {
      return null;
    }
    if (typeof boundary === 'string') {
      return getClosestMatchingAncestor(this.element.nativeElement, boundary);
    }
    /** @type {?} */
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(boundary);
    if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.isDevMode)() && !element.contains(this.element.nativeElement)) {
      throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
    }
    return element;
  }
  /**
   * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
   * @private
   * @param {?} ref
   * @return {?}
   */
  _syncInputs(ref) {
    ref.beforeStarted.subscribe(
    /**
    * @return {?}
    */
    () => {
      if (!ref.isDragging()) {
        /** @type {?} */
        const dir = this._dir;
        /** @type {?} */
        const placeholder = this._placeholderTemplate ? {
          template: this._placeholderTemplate.templateRef,
          context: this._placeholderTemplate.data,
          viewContainer: this._viewContainerRef
        } : null;
        /** @type {?} */
        const preview = this._previewTemplate ? {
          template: this._previewTemplate.templateRef,
          context: this._previewTemplate.data,
          viewContainer: this._viewContainerRef
        } : null;
        ref.disabled = this.disabled;
        ref.lockAxis = this.lockAxis;
        ref.dragStartDelay = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(this.dragStartDelay);
        ref.constrainPosition = this.constrainPosition;
        ref.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview);
        if (dir) {
          ref.withDirection(dir.value);
        }
      }
    });
  }
  /**
   * Handles the events from the underlying `DragRef`.
   * @private
   * @param {?} ref
   * @return {?}
   */
  _handleEvents(ref) {
    ref.started.subscribe(
    /**
    * @return {?}
    */
    () => {
      this.started.emit({
        source: this
      });
      // Since all of these events run outside of change detection,
      // we need to ensure that everything is marked correctly.
      this._changeDetectorRef.markForCheck();
    });
    ref.released.subscribe(
    /**
    * @return {?}
    */
    () => {
      this.released.emit({
        source: this
      });
    });
    ref.ended.subscribe(
    /**
    * @param {?} event
    * @return {?}
    */
    event => {
      this.ended.emit({
        source: this,
        distance: event.distance
      });
      // Since all of these events run outside of change detection,
      // we need to ensure that everything is marked correctly.
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe(
    /**
    * @param {?} event
    * @return {?}
    */
    event => {
      this.entered.emit({
        container: event.container.data,
        item: this,
        currentIndex: event.currentIndex
      });
    });
    ref.exited.subscribe(
    /**
    * @param {?} event
    * @return {?}
    */
    event => {
      this.exited.emit({
        container: event.container.data,
        item: this
      });
    });
    ref.dropped.subscribe(
    /**
    * @param {?} event
    * @return {?}
    */
    event => {
      this.dropped.emit({
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex,
        previousContainer: event.previousContainer.data,
        container: event.container.data,
        isPointerOverContainer: event.isPointerOverContainer,
        item: this,
        distance: event.distance
      });
    });
  }
}
CdkDrag.ɵfac = function CdkDrag_Factory(t) {
  return new (t || CdkDrag)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](CDK_DROP_LIST, 12), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef));
};
CdkDrag.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: CdkDrag,
  selectors: [["", "cdkDrag", ""]],
  contentQueries: function CdkDrag_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, CdkDragPreview, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, CdkDragPlaceholder, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, CdkDragHandle, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._previewTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._placeholderTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._handles = _t);
    }
  },
  hostAttrs: [1, "cdk-drag"],
  hostVars: 4,
  hostBindings: function CdkDrag_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
    }
  },
  inputs: {
    dragStartDelay: ["cdkDragStartDelay", "dragStartDelay"],
    boundaryElement: ["cdkDragBoundary", "boundaryElement"],
    disabled: ["cdkDragDisabled", "disabled"],
    data: ["cdkDragData", "data"],
    lockAxis: ["cdkDragLockAxis", "lockAxis"],
    rootElementSelector: ["cdkDragRootElement", "rootElementSelector"],
    freeDragPosition: ["cdkDragFreeDragPosition", "freeDragPosition"],
    constrainPosition: ["cdkDragConstrainPosition", "constrainPosition"]
  },
  outputs: {
    started: "cdkDragStarted",
    released: "cdkDragReleased",
    ended: "cdkDragEnded",
    entered: "cdkDragEntered",
    exited: "cdkDragExited",
    dropped: "cdkDragDropped",
    moved: "cdkDragMoved"
  },
  exportAs: ["cdkDrag"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
    provide: CDK_DRAG_PARENT,
    useExisting: CdkDrag
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]]
});
/** @nocollapse */
CdkDrag.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef
}, {
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject,
    args: [CDK_DROP_LIST]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Optional
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.SkipSelf
  }]
}, {
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject,
    args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT]
  }]
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewContainerRef
}, {
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject,
    args: [CDK_DRAG_CONFIG]
  }]
}, {
  type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__.Directionality,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Optional
  }]
}, {
  type: DragDrop
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef
}];
CdkDrag.propDecorators = {
  _handles: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ContentChildren,
    args: [CdkDragHandle, {
      descendants: true
    }]
  }],
  _previewTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ContentChild,
    args: [CdkDragPreview, {
      static: false
    }]
  }],
  _placeholderTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ContentChild,
    args: [CdkDragPlaceholder, {
      static: false
    }]
  }],
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
    args: ['cdkDragData']
  }],
  lockAxis: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
    args: ['cdkDragLockAxis']
  }],
  rootElementSelector: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
    args: ['cdkDragRootElement']
  }],
  boundaryElement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
    args: ['cdkDragBoundary']
  }],
  dragStartDelay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
    args: ['cdkDragStartDelay']
  }],
  freeDragPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
    args: ['cdkDragFreeDragPosition']
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
    args: ['cdkDragDisabled']
  }],
  constrainPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
    args: ['cdkDragConstrainPosition']
  }],
  started: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
    args: ['cdkDragStarted']
  }],
  released: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
    args: ['cdkDragReleased']
  }],
  ended: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
    args: ['cdkDragEnded']
  }],
  entered: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
    args: ['cdkDragEntered']
  }],
  exited: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
    args: ['cdkDragExited']
  }],
  dropped: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
    args: ['cdkDragDropped']
  }],
  moved: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
    args: ['cdkDragMoved']
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](CdkDrag, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Directive,
    args: [{
      selector: '[cdkDrag]',
      exportAs: 'cdkDrag',
      host: {
        'class': 'cdk-drag',
        '[class.cdk-drag-disabled]': 'disabled',
        '[class.cdk-drag-dragging]': '_dragRef.isDragging()'
      },
      providers: [{
        provide: CDK_DRAG_PARENT,
        useExisting: CdkDrag
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject,
        args: [CDK_DROP_LIST]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.SkipSelf
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewContainerRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject,
        args: [CDK_DRAG_CONFIG]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Optional
      }]
    }, {
      type: DragDrop
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef
    }];
  }, {
    dragStartDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
      args: ['cdkDragStartDelay']
    }],
    started: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
      args: ['cdkDragStarted']
    }],
    released: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
      args: ['cdkDragReleased']
    }],
    ended: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
      args: ['cdkDragEnded']
    }],
    entered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
      args: ['cdkDragEntered']
    }],
    exited: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
      args: ['cdkDragExited']
    }],
    dropped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
      args: ['cdkDragDropped']
    }],
    moved: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
      args: ['cdkDragMoved']
    }],
    boundaryElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
      args: ['cdkDragBoundary']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
      args: ['cdkDragDisabled']
    }],
    _handles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ContentChildren,
      args: [CdkDragHandle, {
        descendants: true
      }]
    }],
    _previewTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ContentChild,
      args: [CdkDragPreview, {
        static: false
      }]
    }],
    _placeholderTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ContentChild,
      args: [CdkDragPlaceholder, {
        static: false
      }]
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
      args: ['cdkDragData']
    }],
    lockAxis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
      args: ['cdkDragLockAxis']
    }],
    rootElementSelector: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
      args: ['cdkDragRootElement']
    }],
    freeDragPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
      args: ['cdkDragFreeDragPosition']
    }],
    constrainPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
      args: ['cdkDragConstrainPosition']
    }]
  });
})();
/**
 * Gets the closest ancestor of an element that matches a selector.
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */
function getClosestMatchingAncestor(element, selector) {
  /** @type {?} */
  let currentElement = /** @type {?} */element.parentElement;
  while (currentElement) {
    // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
    if (currentElement.matches ? currentElement.matches(selector) : /** @type {?} */currentElement.msMatchesSelector(selector)) {
      return currentElement;
    }
    currentElement = currentElement.parentElement;
  }
  return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 * @template T
 */
class CdkDropListGroup {
  constructor() {
    /**
     * Drop lists registered inside the group.
     */
    this._items = new Set();
    this._disabled = false;
  }
  /**
   * Whether starting a dragging sequence from inside this group is disabled.
   * @return {?}
   */
  get disabled() {
    return this._disabled;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /**
   * @return {?}
   */
  ngOnDestroy() {
    this._items.clear();
  }
}
CdkDropListGroup.ɵfac = function CdkDropListGroup_Factory(t) {
  return new (t || CdkDropListGroup)();
};
CdkDropListGroup.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: CdkDropListGroup,
  selectors: [["", "cdkDropListGroup", ""]],
  inputs: {
    disabled: ["cdkDropListGroupDisabled", "disabled"]
  },
  exportAs: ["cdkDropListGroup"]
});
CdkDropListGroup.propDecorators = {
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
    args: ['cdkDropListGroupDisabled']
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](CdkDropListGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Directive,
    args: [{
      selector: '[cdkDropListGroup]',
      exportAs: 'cdkDropListGroup'
    }]
  }], function () {
    return [];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
      args: ['cdkDropListGroupDisabled']
    }]
  });
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop zones.
 * @type {?}
 */
let _uniqueIdCounter$1 = 0;
const ɵ0 = undefined;
// @breaking-change 8.0.0 `CdkDropList` implements `CdkDropListContainer` for backwards
// compatiblity. The implements clause, as well as all the methods that it enforces can
// be removed when `CdkDropListContainer` is deleted.
/**
 * Container that wraps a set of draggable items.
 * @template T
 */
class CdkDropList {
  /**
   * @param {?} element
   * @param {?} dragDrop
   * @param {?} _changeDetectorRef
   * @param {?=} _dir
   * @param {?=} _group
   */
  constructor(element, dragDrop, _changeDetectorRef, _dir, _group) {
    this.element = element;
    this._changeDetectorRef = _changeDetectorRef;
    this._dir = _dir;
    this._group = _group;
    /**
     * Emits when the list has been destroyed.
     */
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Other draggable containers that this container is connected to and into which the
     * container's items can be transferred. Can either be references to other drop containers,
     * or their unique IDs.
     */
    this.connectedTo = [];
    /**
     * Direction in which the list is oriented.
     */
    this.orientation = 'vertical';
    /**
     * Unique ID for the drop zone. Can be used as a reference
     * in the `connectedTo` of another `CdkDropList`.
     */
    this.id = `cdk-drop-list-${_uniqueIdCounter$1++}`;
    this._disabled = false;
    this._sortingDisabled = false;
    /**
     * Function that is used to determine whether an item
     * is allowed to be moved into a drop container.
     */
    this.enterPredicate =
    /**
    * @return {?}
    */
    () => true;
    /**
     * Whether to auto-scroll the view when the user moves their pointer close to the edges.
     */
    this.autoScrollDisabled = false;
    /**
     * Emits when the user drops an item inside the container.
     */
    this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    /**
     * Emits when the user has moved a new drag item into this container.
     */
    this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    /**
     * Emits when the user removes an item from the container
     * by dragging it into another container.
     */
    this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    /**
     * Emits as the user is swapping items while actively dragging.
     */
    this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this._dropListRef = dragDrop.createDropList(element);
    this._dropListRef.data = this;
    this._dropListRef.enterPredicate =
    /**
    * @param {?} drag
    * @param {?} drop
    * @return {?}
    */
    (drag, drop) => {
      return this.enterPredicate(drag.data, drop.data);
    };
    this._syncInputs(this._dropListRef);
    this._handleEvents(this._dropListRef);
    CdkDropList._dropLists.push(this);
    if (_group) {
      _group._items.add(this);
    }
  }
  /**
   * Whether starting a dragging sequence from this container is disabled.
   * @return {?}
   */
  get disabled() {
    return this._disabled || !!this._group && this._group.disabled;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /**
   * Whether sorting within this drop list is disabled.
   * @return {?}
   */
  get sortingDisabled() {
    return this._sortingDisabled;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  set sortingDisabled(value) {
    this._sortingDisabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /**
   * @return {?}
   */
  ngAfterContentInit() {
    this._draggables.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(this._draggables), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(
    /**
    * @param {?} items
    * @return {?}
    */
    items => {
      this._dropListRef.withItems(items.map(
      /**
      * @param {?} drag
      * @return {?}
      */
      drag => drag._dragRef));
    });
  }
  /**
   * @return {?}
   */
  ngOnDestroy() {
    /** @type {?} */
    const index = CdkDropList._dropLists.indexOf(this);
    if (index > -1) {
      CdkDropList._dropLists.splice(index, 1);
    }
    if (this._group) {
      this._group._items.delete(this);
    }
    this._dropListRef.dispose();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /**
   * Starts dragging an item.
   * @return {?}
   */
  start() {
    this._dropListRef.start();
  }
  /**
   * Drops an item into this container.
   * @param {?} item Item being dropped into the container.
   * @param {?} currentIndex Index at which the item should be inserted.
   * @param {?} previousContainer Container from which the item got dragged in.
   * @param {?} isPointerOverContainer Whether the user's pointer was over the
   *    container when the item was dropped.
   * @return {?}
   */
  drop(item, currentIndex, previousContainer, isPointerOverContainer) {
    this._dropListRef.drop(item._dragRef, currentIndex, /** @type {?} */previousContainer._dropListRef, isPointerOverContainer);
  }
  /**
   * Emits an event to indicate that the user moved an item into the container.
   * @param {?} item Item that was moved into the container.
   * @param {?} pointerX Position of the item along the X axis.
   * @param {?} pointerY Position of the item along the Y axis.
   * @return {?}
   */
  enter(item, pointerX, pointerY) {
    this._dropListRef.enter(item._dragRef, pointerX, pointerY);
  }
  /**
   * Removes an item from the container after it was dragged into another container by the user.
   * @param {?} item Item that was dragged out.
   * @return {?}
   */
  exit(item) {
    this._dropListRef.exit(item._dragRef);
  }
  /**
   * Figures out the index of an item in the container.
   * @param {?} item Item whose index should be determined.
   * @return {?}
   */
  getItemIndex(item) {
    return this._dropListRef.getItemIndex(item._dragRef);
  }
  /**
   * Sorts an item inside the container based on its position.
   * @param {?} item Item to be sorted.
   * @param {?} pointerX Position of the item along the X axis.
   * @param {?} pointerY Position of the item along the Y axis.
   * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
   * @return {?}
   */
  _sortItem(item, pointerX, pointerY, pointerDelta) {
    return this._dropListRef._sortItem(item._dragRef, pointerX, pointerY, pointerDelta);
  }
  /**
   * Figures out whether an item should be moved into a sibling
   * drop container, based on its current position.
   * @param {?} item Drag item that is being moved.
   * @param {?} x Position of the item along the X axis.
   * @param {?} y Position of the item along the Y axis.
   * @return {?}
   */
  _getSiblingContainerFromPosition(item, x, y) {
    /** @type {?} */
    const result = this._dropListRef._getSiblingContainerFromPosition(item._dragRef, x, y);
    return result ? result.data : null;
  }
  /**
   * Checks whether the user's pointer is positioned over the container.
   * @param {?} x Pointer position along the X axis.
   * @param {?} y Pointer position along the Y axis.
   * @return {?}
   */
  _isOverContainer(x, y) {
    return this._dropListRef._isOverContainer(x, y);
  }
  /**
   * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
   * @private
   * @param {?} ref
   * @return {?}
   */
  _syncInputs(ref) {
    if (this._dir) {
      this._dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(this._dir.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(
      /**
      * @param {?} value
      * @return {?}
      */
      value => ref.withDirection(value));
    }
    ref.beforeStarted.subscribe(
    /**
    * @return {?}
    */
    () => {
      /** @type {?} */
      const siblings = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceArray)(this.connectedTo).map(
      /**
      * @param {?} drop
      * @return {?}
      */
      drop => {
        return typeof drop === 'string' ? /** @type {?} */CdkDropList._dropLists.find(
        /**
        * @param {?} list
        * @return {?}
        */
        list => list.id === drop) : drop;
      });
      if (this._group) {
        this._group._items.forEach(
        /**
        * @param {?} drop
        * @return {?}
        */
        drop => {
          if (siblings.indexOf(drop) === -1) {
            siblings.push(drop);
          }
        });
      }
      ref.disabled = this.disabled;
      ref.lockAxis = this.lockAxis;
      ref.sortingDisabled = this.sortingDisabled;
      ref.autoScrollDisabled = this.autoScrollDisabled;
      ref.connectedTo(siblings.filter(
      /**
      * @param {?} drop
      * @return {?}
      */
      drop => drop && drop !== this).map(
      /**
      * @param {?} list
      * @return {?}
      */
      list => list._dropListRef)).withOrientation(this.orientation);
    });
  }
  /**
   * Handles events from the underlying DropListRef.
   * @private
   * @param {?} ref
   * @return {?}
   */
  _handleEvents(ref) {
    ref.beforeStarted.subscribe(
    /**
    * @return {?}
    */
    () => {
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe(
    /**
    * @param {?} event
    * @return {?}
    */
    event => {
      this.entered.emit({
        container: this,
        item: event.item.data,
        currentIndex: event.currentIndex
      });
    });
    ref.exited.subscribe(
    /**
    * @param {?} event
    * @return {?}
    */
    event => {
      this.exited.emit({
        container: this,
        item: event.item.data
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.sorted.subscribe(
    /**
    * @param {?} event
    * @return {?}
    */
    event => {
      this.sorted.emit({
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex,
        container: this,
        item: event.item.data
      });
    });
    ref.dropped.subscribe(
    /**
    * @param {?} event
    * @return {?}
    */
    event => {
      this.dropped.emit({
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex,
        previousContainer: event.previousContainer.data,
        container: event.container.data,
        item: event.item.data,
        isPointerOverContainer: event.isPointerOverContainer,
        distance: event.distance
      });
      // Mark for check since all of these events run outside of change
      // detection and we're not guaranteed for something else to have triggered it.
      this._changeDetectorRef.markForCheck();
    });
  }
}
CdkDropList.ɵfac = function CdkDropList_Factory(t) {
  return new (t || CdkDropList)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](CdkDropListGroup, 12));
};
CdkDropList.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: CdkDropList,
  selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
  contentQueries: function CdkDropList_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, CdkDrag, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._draggables = _t);
    }
  },
  hostAttrs: [1, "cdk-drop-list"],
  hostVars: 7,
  hostBindings: function CdkDropList_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
    }
  },
  inputs: {
    connectedTo: ["cdkDropListConnectedTo", "connectedTo"],
    orientation: ["cdkDropListOrientation", "orientation"],
    id: "id",
    enterPredicate: ["cdkDropListEnterPredicate", "enterPredicate"],
    autoScrollDisabled: ["cdkDropListAutoScrollDisabled", "autoScrollDisabled"],
    disabled: ["cdkDropListDisabled", "disabled"],
    sortingDisabled: ["cdkDropListSortingDisabled", "sortingDisabled"],
    data: ["cdkDropListData", "data"],
    lockAxis: ["cdkDropListLockAxis", "lockAxis"]
  },
  outputs: {
    dropped: "cdkDropListDropped",
    entered: "cdkDropListEntered",
    exited: "cdkDropListExited",
    sorted: "cdkDropListSorted"
  },
  exportAs: ["cdkDropList"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([
  // Prevent child drop lists from picking up the same group as their parent.
  {
    provide: CdkDropListGroup,
    useValue: ɵ0
  }, {
    provide: CDK_DROP_LIST_CONTAINER,
    useExisting: CdkDropList
  }])]
});
/**
 * Keeps track of the drop lists that are currently on the page.
 */
CdkDropList._dropLists = [];
/** @nocollapse */
CdkDropList.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef
}, {
  type: DragDrop
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef
}, {
  type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__.Directionality,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Optional
  }]
}, {
  type: CdkDropListGroup,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Optional
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.SkipSelf
  }]
}];
CdkDropList.propDecorators = {
  _draggables: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ContentChildren,
    args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.forwardRef)(
    /**
    * @return {?}
    */
    () => CdkDrag), {
      // Explicitly set to false since some of the logic below makes assumptions about it.
      // The `.withItems` call below should be updated if we ever need to switch this to `true`.
      descendants: false
    }]
  }],
  connectedTo: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
    args: ['cdkDropListConnectedTo']
  }],
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
    args: ['cdkDropListData']
  }],
  orientation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
    args: ['cdkDropListOrientation']
  }],
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  lockAxis: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
    args: ['cdkDropListLockAxis']
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
    args: ['cdkDropListDisabled']
  }],
  sortingDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
    args: ['cdkDropListSortingDisabled']
  }],
  enterPredicate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
    args: ['cdkDropListEnterPredicate']
  }],
  autoScrollDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
    args: ['cdkDropListAutoScrollDisabled']
  }],
  dropped: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
    args: ['cdkDropListDropped']
  }],
  entered: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
    args: ['cdkDropListEntered']
  }],
  exited: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
    args: ['cdkDropListExited']
  }],
  sorted: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
    args: ['cdkDropListSorted']
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](CdkDropList, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Directive,
    args: [{
      selector: '[cdkDropList], cdk-drop-list',
      exportAs: 'cdkDropList',
      providers: [
      // Prevent child drop lists from picking up the same group as their parent.
      {
        provide: CdkDropListGroup,
        useValue: ɵ0
      }, {
        provide: CDK_DROP_LIST_CONTAINER,
        useExisting: CdkDropList
      }],
      host: {
        'class': 'cdk-drop-list',
        '[id]': 'id',
        '[class.cdk-drop-list-disabled]': 'disabled',
        '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
        '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef
    }, {
      type: DragDrop
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Optional
      }]
    }, {
      type: CdkDropListGroup,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.SkipSelf
      }]
    }];
  }, {
    connectedTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
      args: ['cdkDropListConnectedTo']
    }],
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
      args: ['cdkDropListOrientation']
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }],
    enterPredicate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
      args: ['cdkDropListEnterPredicate']
    }],
    autoScrollDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
      args: ['cdkDropListAutoScrollDisabled']
    }],
    dropped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
      args: ['cdkDropListDropped']
    }],
    entered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
      args: ['cdkDropListEntered']
    }],
    exited: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
      args: ['cdkDropListExited']
    }],
    sorted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
      args: ['cdkDropListSorted']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
      args: ['cdkDropListDisabled']
    }],
    sortingDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
      args: ['cdkDropListSortingDisabled']
    }],
    _draggables: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ContentChildren,
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.forwardRef)(
      /**
      * @return {?}
      */
      () => CdkDrag), {
        // Explicitly set to false since some of the logic below makes assumptions about it.
        // The `.withItems` call below should be updated if we ever need to switch this to `true`.
        descendants: false
      }]
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
      args: ['cdkDropListData']
    }],
    lockAxis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
      args: ['cdkDropListLockAxis']
    }]
  });
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DragDropModule {}
DragDropModule.ɵfac = function DragDropModule_Factory(t) {
  return new (t || DragDropModule)();
};
DragDropModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: DragDropModule
});
DragDropModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [DragDrop]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](DragDropModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule,
    args: [{
      declarations: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
      exports: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
      providers: [DragDrop]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](DragDropModule, {
    declarations: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
    exports: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder]
  });
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



/***/ }),

/***/ 27285:
/*!********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/platform.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Platform": () => (/* binding */ Platform),
/* harmony export */   "PlatformModule": () => (/* binding */ PlatformModule),
/* harmony export */   "RtlScrollAxisType": () => (/* binding */ RtlScrollAxisType),
/* harmony export */   "_supportsShadowDom": () => (/* binding */ _supportsShadowDom),
/* harmony export */   "getRtlScrollAxisType": () => (/* binding */ getRtlScrollAxisType),
/* harmony export */   "getSupportedInputTypes": () => (/* binding */ getSupportedInputTypes),
/* harmony export */   "normalizePassiveListenerOptions": () => (/* binding */ normalizePassiveListenerOptions),
/* harmony export */   "supportsPassiveEventListeners": () => (/* binding */ supportsPassiveEventListeners),
/* harmony export */   "supportsScrollBehavior": () => (/* binding */ supportsScrollBehavior)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 36362);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
/** @type {?} */

let hasV8BreakIterator;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
  hasV8BreakIterator = typeof Intl !== 'undefined' && /** @type {?} */Intl.v8BreakIterator;
} catch (_a) {
  hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
class Platform {
  /**
   * \@breaking-change 8.0.0 remove optional decorator
   * @param {?=} _platformId
   */
  constructor(_platformId) {
    this._platformId = _platformId;
    /**
     * Whether the Angular application is being rendered in the browser.
     * We want to use the Angular platform check because if the Document is shimmed
     * without the navigator, the following checks will fail. This is preferred because
     * sometimes the Document may be shimmed without the user's knowledge or intention
     */
    this.isBrowser = this._platformId ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId) : typeof document === 'object' && !!document;
    /**
     * Whether the current browser is Microsoft Edge.
     */
    this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    /**
     * Whether the current rendering engine is Microsoft Trident.
     */
    this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    /**
     * Whether the current rendering engine is Blink.
     */
    // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
    this.BLINK = this.isBrowser && !!( /** @type {?} */window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT;
    /**
     * Whether the current rendering engine is WebKit.
     */
    // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
    // ensure that Webkit runs standalone and is not used as another engine's base.
    this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    /**
     * Whether the current platform is Apple iOS.
     */
    this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
    /**
     * Whether the current browser is Firefox.
     */
    // It's difficult to detect the plain Gecko engine, because most of the browsers identify
    // them self as Gecko-like browsers and modify the userAgent's according to that.
    // Since we only cover one explicit Firefox case, we can simply check for Firefox
    // instead of having an unstable check for Gecko.
    this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    /**
     * Whether the current platform is Android.
     */
    // Trident on mobile adds the android platform to the userAgent to trick detections.
    this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    /**
     * Whether the current browser is Safari.
     */
    // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
    // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
    // Safari browser should also use Webkit as its layout engine.
    this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  }
}
Platform.ɵfac = function Platform_Factory(t) {
  return new (t || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID, 8));
};
Platform.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: Platform,
  factory: Platform.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */
Platform.ctorParameters = () => [{
  type: Object,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
    args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
  }]
}];
/** @nocollapse */
Platform.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
  factory: function Platform_Factory() {
    return new Platform((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID, 8));
  },
  token: Platform,
  providedIn: "root"
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Platform, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }];
  }, null);
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PlatformModule {}
PlatformModule.ɵfac = function PlatformModule_Factory(t) {
  return new (t || PlatformModule)();
};
PlatformModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PlatformModule
});
PlatformModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlatformModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{}]
  }], null, null);
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Cached result Set of input types support by the current browser.
 * @type {?}
 */
let supportedInputTypes;
/**
 * Types of `<input>` that *might* be supported.
 * @type {?}
 */
const candidateInputTypes = [
// `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
// first changing it to something else:
// The specified value "" does not conform to the required format.
// The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
'color', 'button', 'checkbox', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];
/**
 * @return {?} The input types supported by this browser.
 */
function getSupportedInputTypes() {
  // Result is cached.
  if (supportedInputTypes) {
    return supportedInputTypes;
  }
  // We can't check if an input type is not supported until we're on the browser, so say that
  // everything is supported when not on the browser. We don't use `Platform` here since it's
  // just a helper function and can't inject it.
  if (typeof document !== 'object' || !document) {
    supportedInputTypes = new Set(candidateInputTypes);
    return supportedInputTypes;
  }
  /** @type {?} */
  let featureTestInput = document.createElement('input');
  supportedInputTypes = new Set(candidateInputTypes.filter(
  /**
  * @param {?} value
  * @return {?}
  */
  value => {
    featureTestInput.setAttribute('type', value);
    return featureTestInput.type === value;
  }));
  return supportedInputTypes;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Cached result of whether the user's browser supports passive event listeners.
 * @type {?}
 */
let supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 * @return {?}
 */
function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== 'undefined') {
    try {
      window.addEventListener('test', /** @type {?} */null, Object.defineProperty({}, 'passive', {
        get:
        /**
        * @return {?}
        */
        () => supportsPassiveEvents = true
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }
  return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param {?} options Object to be normalized.
 * @return {?}
 */
function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @enum {number} */
const RtlScrollAxisType = {
  /**
   * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
   * all the way right.
   */
  NORMAL: 0,
  /**
   * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
   * all the way right.
   */
  NEGATED: 1,
  /**
   * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
   * all the way right.
   */
  INVERTED: 2
};
RtlScrollAxisType[RtlScrollAxisType.NORMAL] = 'NORMAL';
RtlScrollAxisType[RtlScrollAxisType.NEGATED] = 'NEGATED';
RtlScrollAxisType[RtlScrollAxisType.INVERTED] = 'INVERTED';
/**
 * Cached result of the way the browser handles the horizontal scroll axis in RTL mode.
 * @type {?}
 */
let rtlScrollAxisType;
/**
 * Check whether the browser supports scroll behaviors.
 * @return {?}
 */
function supportsScrollBehavior() {
  return !!(typeof document == 'object' && 'scrollBehavior' in /** @type {?} */document.documentElement.style);
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 * @return {?}
 */
function getRtlScrollAxisType() {
  // We can't check unless we're on the browser. Just assume 'normal' if we're not.
  if (typeof document !== 'object' || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (!rtlScrollAxisType) {
    // Create a 1px wide scrolling container and a 2px wide content element.
    /** @type {?} */
    const scrollContainer = document.createElement('div');
    /** @type {?} */
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = 'rtl';
    containerStyle.height = '1px';
    containerStyle.width = '1px';
    containerStyle.overflow = 'auto';
    containerStyle.visibility = 'hidden';
    containerStyle.pointerEvents = 'none';
    containerStyle.position = 'absolute';
    /** @type {?} */
    const content = document.createElement('div');
    /** @type {?} */
    const contentStyle = content.style;
    contentStyle.width = '2px';
    contentStyle.height = '1px';
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
    // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
    // dealing with one of the other two types of browsers.
    if (scrollContainer.scrollLeft === 0) {
      // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
      // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
      // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
      // return 0 when we read it again.
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    /** @type {?} */scrollContainer.parentNode.removeChild(scrollContainer);
  }
  return rtlScrollAxisType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */
let shadowDomIsSupported;
/**
 * Checks whether the user's browser support Shadow DOM.
 * @return {?}
 */
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    /** @type {?} */
    const head = typeof document !== 'undefined' ? document.head : null;
    shadowDomIsSupported = !!(head && ( /** @type {?} */head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



/***/ }),

/***/ 73772:
/*!*********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/scrolling.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CdkFixedSizeVirtualScroll": () => (/* binding */ CdkFixedSizeVirtualScroll),
/* harmony export */   "CdkScrollable": () => (/* binding */ CdkScrollable),
/* harmony export */   "CdkVirtualForOf": () => (/* binding */ CdkVirtualForOf),
/* harmony export */   "CdkVirtualScrollViewport": () => (/* binding */ CdkVirtualScrollViewport),
/* harmony export */   "DEFAULT_RESIZE_TIME": () => (/* binding */ DEFAULT_RESIZE_TIME),
/* harmony export */   "DEFAULT_SCROLL_TIME": () => (/* binding */ DEFAULT_SCROLL_TIME),
/* harmony export */   "FixedSizeVirtualScrollStrategy": () => (/* binding */ FixedSizeVirtualScrollStrategy),
/* harmony export */   "SCROLL_DISPATCHER_PROVIDER": () => (/* binding */ SCROLL_DISPATCHER_PROVIDER),
/* harmony export */   "SCROLL_DISPATCHER_PROVIDER_FACTORY": () => (/* binding */ SCROLL_DISPATCHER_PROVIDER_FACTORY),
/* harmony export */   "ScrollDispatchModule": () => (/* binding */ ScrollDispatchModule),
/* harmony export */   "ScrollDispatcher": () => (/* binding */ ScrollDispatcher),
/* harmony export */   "ScrollingModule": () => (/* binding */ ScrollingModule),
/* harmony export */   "VIEWPORT_RULER_PROVIDER": () => (/* binding */ VIEWPORT_RULER_PROVIDER),
/* harmony export */   "VIEWPORT_RULER_PROVIDER_FACTORY": () => (/* binding */ VIEWPORT_RULER_PROVIDER_FACTORY),
/* harmony export */   "VIRTUAL_SCROLL_STRATEGY": () => (/* binding */ VIRTUAL_SCROLL_STRATEGY),
/* harmony export */   "ViewportRuler": () => (/* binding */ ViewportRuler),
/* harmony export */   "_fixedSizeVirtualScrollStrategyFactory": () => (/* binding */ _fixedSizeVirtualScrollStrategyFactory)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 73744);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 58184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 69672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 30998);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 44874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 70679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 89196);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/platform */ 27285);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/bidi */ 64592);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/collections */ 73515);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The injection token used to specify the virtual scrolling strategy.
 * @type {?}
 */



const _c0 = ["contentWrapper"];
const _c1 = ["*"];
const VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('VIRTUAL_SCROLL_STRATEGY');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Virtual scrolling strategy for lists with items of known fixed size.
 */
class FixedSizeVirtualScrollStrategy {
  /**
   * @param {?} itemSize The size of the items in the virtually scrolling list.
   * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  constructor(itemSize, minBufferPx, maxBufferPx) {
    this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     */
    this.scrolledIndexChange = this._scrolledIndexChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)());
    /**
     * The attached viewport.
     */
    this._viewport = null;
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  /**
   * Attaches this scroll strategy to a viewport.
   * @param {?} viewport The viewport to attach this strategy to.
   * @return {?}
   */
  attach(viewport) {
    this._viewport = viewport;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /**
   * Detaches this scroll strategy from the currently attached viewport.
   * @return {?}
   */
  detach() {
    this._scrolledIndexChange.complete();
    this._viewport = null;
  }
  /**
   * Update the item size and buffer size.
   * @param {?} itemSize The size of the items in the virtually scrolling list.
   * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   * @return {?}
   */
  updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
    if (maxBufferPx < minBufferPx) {
      throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
    }
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /**
   * \@docs-private Implemented as part of VirtualScrollStrategy.
   * @return {?}
   */
  onContentScrolled() {
    this._updateRenderedRange();
  }
  /**
   * \@docs-private Implemented as part of VirtualScrollStrategy.
   * @return {?}
   */
  onDataLengthChanged() {
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /**
   * \@docs-private Implemented as part of VirtualScrollStrategy.
   * @return {?}
   */
  onContentRendered() {}
  /**
   * \@docs-private Implemented as part of VirtualScrollStrategy.
   * @return {?}
   */
  onRenderedOffsetChanged() {}
  /**
   * Scroll to the offset for the given index.
   * @param {?} index The index of the element to scroll to.
   * @param {?} behavior The ScrollBehavior to use when scrolling.
   * @return {?}
   */
  scrollToIndex(index, behavior) {
    if (this._viewport) {
      this._viewport.scrollToOffset(index * this._itemSize, behavior);
    }
  }
  /**
   * Update the viewport's total content size.
   * @private
   * @return {?}
   */
  _updateTotalContentSize() {
    if (!this._viewport) {
      return;
    }
    this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
  }
  /**
   * Update the viewport's rendered range.
   * @private
   * @return {?}
   */
  _updateRenderedRange() {
    if (!this._viewport) {
      return;
    }
    /** @type {?} */
    const scrollOffset = this._viewport.measureScrollOffset();
    /** @type {?} */
    const firstVisibleIndex = scrollOffset / this._itemSize;
    /** @type {?} */
    const renderedRange = this._viewport.getRenderedRange();
    /** @type {?} */
    const newRange = {
      start: renderedRange.start,
      end: renderedRange.end
    };
    /** @type {?} */
    const viewportSize = this._viewport.getViewportSize();
    /** @type {?} */
    const dataLength = this._viewport.getDataLength();
    /** @type {?} */
    const startBuffer = scrollOffset - newRange.start * this._itemSize;
    if (startBuffer < this._minBufferPx && newRange.start != 0) {
      /** @type {?} */
      const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
      newRange.start = Math.max(0, newRange.start - expandStart);
      newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
    } else {
      /** @type {?} */
      const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
      if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
        /** @type {?} */
        const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
        if (expandEnd > 0) {
          newRange.end = Math.min(dataLength, newRange.end + expandEnd);
          newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
        }
      }
    }
    this._viewport.setRenderedRange(newRange);
    this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
    this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
  }
}
/**
 * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
 * `FixedSizeVirtualScrollStrategy` from the given directive.
 * @param {?} fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
 *     `FixedSizeVirtualScrollStrategy` from.
 * @return {?}
 */
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
/**
 * A virtual scroll strategy that supports fixed-size items.
 */
class CdkFixedSizeVirtualScroll {
  constructor() {
    this._itemSize = 20;
    this._minBufferPx = 100;
    this._maxBufferPx = 200;
    /**
     * The scroll strategy used by this directive.
     */
    this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  /**
   * The size of the items in the list (in pixels).
   * @return {?}
   */
  get itemSize() {
    return this._itemSize;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  set itemSize(value) {
    this._itemSize = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
  }
  /**
   * The minimum amount of buffer rendered beyond the viewport (in pixels).
   * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
   * @return {?}
   */
  get minBufferPx() {
    return this._minBufferPx;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  set minBufferPx(value) {
    this._minBufferPx = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
  }
  /**
   * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
   * @return {?}
   */
  get maxBufferPx() {
    return this._maxBufferPx;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  set maxBufferPx(value) {
    this._maxBufferPx = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
  }
  /**
   * @return {?}
   */
  ngOnChanges() {
    this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
}
CdkFixedSizeVirtualScroll.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) {
  return new (t || CdkFixedSizeVirtualScroll)();
};
CdkFixedSizeVirtualScroll.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkFixedSizeVirtualScroll,
  selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
  inputs: {
    itemSize: "itemSize",
    minBufferPx: "minBufferPx",
    maxBufferPx: "maxBufferPx"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: VIRTUAL_SCROLL_STRATEGY,
    useFactory: _fixedSizeVirtualScrollStrategyFactory,
    deps: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
    /**
    * @return {?}
    */
    () => CdkFixedSizeVirtualScroll)]
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
CdkFixedSizeVirtualScroll.propDecorators = {
  itemSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  minBufferPx: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  maxBufferPx: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkFixedSizeVirtualScroll, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'cdk-virtual-scroll-viewport[itemSize]',
      providers: [{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
        /**
        * @return {?}
        */
        () => CdkFixedSizeVirtualScroll)]
      }]
    }]
  }], function () {
    return [];
  }, {
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minBufferPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxBufferPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Time in ms to throttle the scrolling events by default.
 * @type {?}
 */
const DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
class ScrollDispatcher {
  /**
   * @param {?} _ngZone
   * @param {?} _platform
   */
  constructor(_ngZone, _platform) {
    this._ngZone = _ngZone;
    this._platform = _platform;
    /**
     * Subject for notifying that a registered scrollable reference element has been scrolled.
     */
    this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Keeps track of the global `scroll` and `resize` subscriptions.
     */
    this._globalSubscription = null;
    /**
     * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
     */
    this._scrolledCount = 0;
    /**
     * Map of all the scrollable references that are registered with the service and their
     * scroll event subscriptions.
     */
    this.scrollContainers = new Map();
  }
  /**
   * Registers a scrollable instance with the service and listens for its scrolled events. When the
   * scrollable is scrolled, the service emits the event to its scrolled observable.
   * @param {?} scrollable Scrollable instance to be registered.
   * @return {?}
   */
  register(scrollable) {
    if (!this.scrollContainers.has(scrollable)) {
      this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(
      /**
      * @return {?}
      */
      () => this._scrolled.next(scrollable)));
    }
  }
  /**
   * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
   * @param {?} scrollable Scrollable instance to be deregistered.
   * @return {?}
   */
  deregister(scrollable) {
    /** @type {?} */
    const scrollableReference = this.scrollContainers.get(scrollable);
    if (scrollableReference) {
      scrollableReference.unsubscribe();
      this.scrollContainers.delete(scrollable);
    }
  }
  /**
   * Returns an observable that emits an event whenever any of the registered Scrollable
   * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
   * to override the default "throttle" time.
   *
   * **Note:** in order to avoid hitting change detection for every scroll event,
   * all of the events emitted from this stream will be run outside the Angular zone.
   * If you need to update any data bindings as a result of a scroll event, you have
   * to run the callback using `NgZone.run`.
   * @param {?=} auditTimeInMs
   * @return {?}
   */
  scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
    if (!this._platform.isBrowser) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
    }
    return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(
    /**
    * @param {?} observer
    * @return {?}
    */
    observer => {
      if (!this._globalSubscription) {
        this._addGlobalListener();
      }
      // In the case of a 0ms delay, use an observable without auditTime
      // since it does add a perceptible delay in processing overhead.
      /** @type {?} */
      const subscription = auditTimeInMs > 0 ? this._scrolled.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
      this._scrolledCount++;
      return (
        /**
        * @return {?}
        */
        () => {
          subscription.unsubscribe();
          this._scrolledCount--;
          if (!this._scrolledCount) {
            this._removeGlobalListener();
          }
        }
      );
    });
  }
  /**
   * @return {?}
   */
  ngOnDestroy() {
    this._removeGlobalListener();
    this.scrollContainers.forEach(
    /**
    * @param {?} _
    * @param {?} container
    * @return {?}
    */
    (_, container) => this.deregister(container));
    this._scrolled.complete();
  }
  /**
   * Returns an observable that emits whenever any of the
   * scrollable ancestors of an element are scrolled.
   * @param {?} elementRef Element whose ancestors to listen for.
   * @param {?=} auditTimeInMs Time to throttle the scroll events.
   * @return {?}
   */
  ancestorScrolled(elementRef, auditTimeInMs) {
    /** @type {?} */
    const ancestors = this.getAncestorScrollContainers(elementRef);
    return this.scrolled(auditTimeInMs).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(
    /**
    * @param {?} target
    * @return {?}
    */
    target => {
      return !target || ancestors.indexOf(target) > -1;
    }));
  }
  /**
   * Returns all registered Scrollables that contain the provided element.
   * @param {?} elementRef
   * @return {?}
   */
  getAncestorScrollContainers(elementRef) {
    /** @type {?} */
    const scrollingContainers = [];
    this.scrollContainers.forEach(
    /**
    * @param {?} _subscription
    * @param {?} scrollable
    * @return {?}
    */
    (_subscription, scrollable) => {
      if (this._scrollableContainsElement(scrollable, elementRef)) {
        scrollingContainers.push(scrollable);
      }
    });
    return scrollingContainers;
  }
  /**
   * Returns true if the element is contained within the provided Scrollable.
   * @private
   * @param {?} scrollable
   * @param {?} elementRef
   * @return {?}
   */
  _scrollableContainsElement(scrollable, elementRef) {
    /** @type {?} */
    let element = elementRef.nativeElement;
    /** @type {?} */
    let scrollableElement = scrollable.getElementRef().nativeElement;
    // Traverse through the element parents until we reach null, checking if any of the elements
    // are the scrollable's element.
    do {
      if (element == scrollableElement) {
        return true;
      }
    } while (element = /** @type {?} */element.parentElement);
    return false;
  }
  /**
   * Sets up the global scroll listeners.
   * @private
   * @return {?}
   */
  _addGlobalListener() {
    this._globalSubscription = this._ngZone.runOutsideAngular(
    /**
    * @return {?}
    */
    () => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(window.document, 'scroll').subscribe(
      /**
      * @return {?}
      */
      () => this._scrolled.next());
    });
  }
  /**
   * Cleans up the global scroll listener.
   * @private
   * @return {?}
   */
  _removeGlobalListener() {
    if (this._globalSubscription) {
      this._globalSubscription.unsubscribe();
      this._globalSubscription = null;
    }
  }
}
ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) {
  return new (t || ScrollDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform));
};
ScrollDispatcher.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ScrollDispatcher,
  factory: ScrollDispatcher.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */
ScrollDispatcher.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
}, {
  type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform
}];
/** @nocollapse */
ScrollDispatcher.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
  factory: function ScrollDispatcher_Factory() {
    return new ScrollDispatcher((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform));
  },
  token: ScrollDispatcher,
  providedIn: "root"
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollDispatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform
    }];
  }, null);
})();
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentDispatcher
 * @param {?} ngZone
 * @param {?} platform
 * @return {?}
 */
function SCROLL_DISPATCHER_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
  return parentDispatcher || new ScrollDispatcher(ngZone, platform);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
const SCROLL_DISPATCHER_PROVIDER = {
  // If there is already a ScrollDispatcher available, use that. Otherwise, provide a new one.
  provide: ScrollDispatcher,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), ScrollDispatcher], _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform],
  useFactory: SCROLL_DISPATCHER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
class CdkScrollable {
  /**
   * @param {?} elementRef
   * @param {?} scrollDispatcher
   * @param {?} ngZone
   * @param {?=} dir
   */
  constructor(elementRef, scrollDispatcher, ngZone, dir) {
    this.elementRef = elementRef;
    this.scrollDispatcher = scrollDispatcher;
    this.ngZone = ngZone;
    this.dir = dir;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(
    /**
    * @param {?} observer
    * @return {?}
    */
    observer => this.ngZone.runOutsideAngular(
    /**
    * @return {?}
    */
    () => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(this.elementRef.nativeElement, 'scroll').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._destroyed)).subscribe(observer)));
  }
  /**
   * @return {?}
   */
  ngOnInit() {
    this.scrollDispatcher.register(this);
  }
  /**
   * @return {?}
   */
  ngOnDestroy() {
    this.scrollDispatcher.deregister(this);
    this._destroyed.next();
    this._destroyed.complete();
  }
  /**
   * Returns observable that emits when a scroll event is fired on the host element.
   * @return {?}
   */
  elementScrolled() {
    return this._elementScrolled;
  }
  /**
   * Gets the ElementRef for the viewport.
   * @return {?}
   */
  getElementRef() {
    return this.elementRef;
  }
  /**
   * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
   * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param {?} options specified the offsets to scroll to.
   * @return {?}
   */
  scrollTo(options) {
    /** @type {?} */
    const el = this.elementRef.nativeElement;
    /** @type {?} */
    const isRtl = this.dir && this.dir.value == 'rtl';
    // Rewrite start & end offsets as right or left offsets.
    options.left = options.left == null ? isRtl ? options.end : options.start : options.left;
    options.right = options.right == null ? isRtl ? options.start : options.end : options.right;
    // Rewrite the bottom offset as a top offset.
    if (options.bottom != null) {
      /** @type {?} */options.top = el.scrollHeight - el.clientHeight - options.bottom;
    }
    // Rewrite the right offset as a left offset.
    if (isRtl && (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() != _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.RtlScrollAxisType.NORMAL) {
      if (options.left != null) {
        /** @type {?} */options.right = el.scrollWidth - el.clientWidth - options.left;
      }
      if ((0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.RtlScrollAxisType.INVERTED) {
        options.left = options.right;
      } else if ((0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.RtlScrollAxisType.NEGATED) {
        options.left = options.right ? -options.right : options.right;
      }
    } else {
      if (options.right != null) {
        /** @type {?} */options.left = el.scrollWidth - el.clientWidth - options.right;
      }
    }
    this._applyScrollToOptions(options);
  }
  /**
   * @private
   * @param {?} options
   * @return {?}
   */
  _applyScrollToOptions(options) {
    /** @type {?} */
    const el = this.elementRef.nativeElement;
    if ((0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.supportsScrollBehavior)()) {
      el.scrollTo(options);
    } else {
      if (options.top != null) {
        el.scrollTop = options.top;
      }
      if (options.left != null) {
        el.scrollLeft = options.left;
      }
    }
  }
  /**
   * Measures the scroll offset relative to the specified edge of the viewport. This method can be
   * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
   * about what scrollLeft means in RTL. The values returned by this method are normalized such that
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param {?} from The edge to measure from.
   * @return {?}
   */
  measureScrollOffset(from) {
    /** @type {?} */
    const LEFT = 'left';
    /** @type {?} */
    const RIGHT = 'right';
    /** @type {?} */
    const el = this.elementRef.nativeElement;
    if (from == 'top') {
      return el.scrollTop;
    }
    if (from == 'bottom') {
      return el.scrollHeight - el.clientHeight - el.scrollTop;
    }
    // Rewrite start & end as left or right offsets.
    /** @type {?} */
    const isRtl = this.dir && this.dir.value == 'rtl';
    if (from == 'start') {
      from = isRtl ? RIGHT : LEFT;
    } else if (from == 'end') {
      from = isRtl ? LEFT : RIGHT;
    }
    if (isRtl && (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.RtlScrollAxisType.INVERTED) {
      // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
      // 0 when scrolled all the way right.
      if (from == LEFT) {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      } else {
        return el.scrollLeft;
      }
    } else if (isRtl && (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.RtlScrollAxisType.NEGATED) {
      // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
      // 0 when scrolled all the way right.
      if (from == LEFT) {
        return el.scrollLeft + el.scrollWidth - el.clientWidth;
      } else {
        return -el.scrollLeft;
      }
    } else {
      // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
      // (scrollWidth - clientWidth) when scrolled all the way right.
      if (from == LEFT) {
        return el.scrollLeft;
      } else {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      }
    }
  }
}
CdkScrollable.ɵfac = function CdkScrollable_Factory(t) {
  return new (t || CdkScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality, 8));
};
CdkScrollable.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkScrollable,
  selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
});
/** @nocollapse */
CdkScrollable.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}, {
  type: ScrollDispatcher
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
}, {
  type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
  }]
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkScrollable, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdk-scrollable], [cdkScrollable]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: ScrollDispatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, null);
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Checks if the given ranges are equal.
 * @param {?} r1
 * @param {?} r2
 * @return {?}
 */
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
/**
 * Scheduler to be used for scroll events. Needs to fall back to
 * something that doesn't rely on requestAnimationFrame on environments
 * that don't support it (e.g. server-side rendering).
 * @type {?}
 */
const SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_12__.animationFrameScheduler : rxjs__WEBPACK_IMPORTED_MODULE_13__.asapScheduler;
/**
 * A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`.
 */
class CdkVirtualScrollViewport extends CdkScrollable {
  /**
   * @param {?} elementRef
   * @param {?} _changeDetectorRef
   * @param {?} ngZone
   * @param {?} _scrollStrategy
   * @param {?} dir
   * @param {?} scrollDispatcher
   */
  constructor(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher) {
    super(elementRef, scrollDispatcher, ngZone, dir);
    this.elementRef = elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._scrollStrategy = _scrollStrategy;
    /**
     * Emits when the viewport is detached from a CdkVirtualForOf.
     */
    this._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits when the rendered range changes.
     */
    this._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this._orientation = 'vertical';
    // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
    // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
    // depending on how the strategy calculates the scrolled index, it may come at a cost to
    // performance.
    /**
     * Emits when the index of the first element visible in the viewport changes.
     */
    this.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(
    /**
    * @param {?} observer
    * @return {?}
    */
    observer => this._scrollStrategy.scrolledIndexChange.subscribe(
    /**
    * @param {?} index
    * @return {?}
    */
    index => Promise.resolve().then(
    /**
    * @return {?}
    */
    () => this.ngZone.run(
    /**
    * @return {?}
    */
    () => observer.next(index)))));
    /**
     * A stream that emits whenever the rendered range changes.
     */
    this.renderedRangeStream = this._renderedRangeSubject.asObservable();
    /**
     * The total size of all content (in pixels), including content that is not currently rendered.
     */
    this._totalContentSize = 0;
    /**
     * A string representing the `style.width` property value to be used for the spacer element.
     */
    this._totalContentWidth = '';
    /**
     * A string representing the `style.height` property value to be used for the spacer element.
     */
    this._totalContentHeight = '';
    /**
     * The currently rendered range of indices.
     */
    this._renderedRange = {
      start: 0,
      end: 0
    };
    /**
     * The length of the data bound to this viewport (in number of items).
     */
    this._dataLength = 0;
    /**
     * The size of the viewport (in pixels).
     */
    this._viewportSize = 0;
    /**
     * The last rendered content offset that was set.
     */
    this._renderedContentOffset = 0;
    /**
     * Whether the last rendered content offset was to the end of the content (and therefore needs to
     * be rewritten as an offset to the start of the content).
     */
    this._renderedContentOffsetNeedsRewrite = false;
    /**
     * Whether there is a pending change detection cycle.
     */
    this._isChangeDetectionPending = false;
    /**
     * A list of functions to run after the next change detection cycle.
     */
    this._runAfterChangeDetection = [];
    if (!_scrollStrategy) {
      throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
    }
  }
  /**
   * The direction the viewport scrolls.
   * @return {?}
   */
  get orientation() {
    return this._orientation;
  }
  /**
   * @param {?} orientation
   * @return {?}
   */
  set orientation(orientation) {
    if (this._orientation !== orientation) {
      this._orientation = orientation;
      this._calculateSpacerSize();
    }
  }
  /**
   * @return {?}
   */
  ngOnInit() {
    super.ngOnInit();
    // It's still too early to measure the viewport at this point. Deferring with a promise allows
    // the Viewport to be rendered with the correct size before we measure. We run this outside the
    // zone to avoid causing more change detection cycles. We handle the change detection loop
    // ourselves instead.
    this.ngZone.runOutsideAngular(
    /**
    * @return {?}
    */
    () => Promise.resolve().then(
    /**
    * @return {?}
    */
    () => {
      this._measureViewportSize();
      this._scrollStrategy.attach(this);
      this.elementScrolled().pipe(
      // Start off with a fake scroll event so we properly detect our initial position.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.startWith)( /** @type {?} */null),
      // Collect multiple events into one until the next animation frame. This way if
      // there are multiple scroll events in the same frame we only need to recheck
      // our layout once.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(0, SCROLL_SCHEDULER)).subscribe(
      /**
      * @return {?}
      */
      () => this._scrollStrategy.onContentScrolled());
      this._markChangeDetectionNeeded();
    }));
  }
  /**
   * @return {?}
   */
  ngOnDestroy() {
    this.detach();
    this._scrollStrategy.detach();
    // Complete all subjects
    this._renderedRangeSubject.complete();
    this._detachedSubject.complete();
    super.ngOnDestroy();
  }
  /**
   * Attaches a `CdkVirtualForOf` to this viewport.
   * @param {?} forOf
   * @return {?}
   */
  attach(forOf) {
    if (this._forOf) {
      throw Error('CdkVirtualScrollViewport is already attached.');
    }
    // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
    // changes. Run outside the zone to avoid triggering change detection, since we're managing the
    // change detection loop ourselves.
    this.ngZone.runOutsideAngular(
    /**
    * @return {?}
    */
    () => {
      this._forOf = forOf;
      this._forOf.dataStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._detachedSubject)).subscribe(
      /**
      * @param {?} data
      * @return {?}
      */
      data => {
        /** @type {?} */
        const newLength = data.length;
        if (newLength !== this._dataLength) {
          this._dataLength = newLength;
          this._scrollStrategy.onDataLengthChanged();
        }
        this._doChangeDetection();
      });
    });
  }
  /**
   * Detaches the current `CdkVirtualForOf`.
   * @return {?}
   */
  detach() {
    this._forOf = null;
    this._detachedSubject.next();
  }
  /**
   * Gets the length of the data bound to this viewport (in number of items).
   * @return {?}
   */
  getDataLength() {
    return this._dataLength;
  }
  /**
   * Gets the size of the viewport (in pixels).
   * @return {?}
   */
  getViewportSize() {
    return this._viewportSize;
  }
  // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
  // cycle happens. I'm being careful to only call it after the render cycle is complete and before
  // setting it to something else, but its error prone and should probably be split into
  // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
  /**
   * Get the current rendered range of items.
   * @return {?}
   */
  getRenderedRange() {
    return this._renderedRange;
  }
  /**
   * Sets the total size of all content (in pixels), including content that is not currently
   * rendered.
   * @param {?} size
   * @return {?}
   */
  setTotalContentSize(size) {
    if (this._totalContentSize !== size) {
      this._totalContentSize = size;
      this._calculateSpacerSize();
      this._markChangeDetectionNeeded();
    }
  }
  /**
   * Sets the currently rendered range of indices.
   * @param {?} range
   * @return {?}
   */
  setRenderedRange(range) {
    if (!rangesEqual(this._renderedRange, range)) {
      this._renderedRangeSubject.next(this._renderedRange = range);
      this._markChangeDetectionNeeded(
      /**
      * @return {?}
      */
      () => this._scrollStrategy.onContentRendered());
    }
  }
  /**
   * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
   * @return {?}
   */
  getOffsetToRenderedContentStart() {
    return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
  }
  /**
   * Sets the offset from the start of the viewport to either the start or end of the rendered data
   * (in pixels).
   * @param {?} offset
   * @param {?=} to
   * @return {?}
   */
  setRenderedContentOffset(offset, to = 'to-start') {
    // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
    // in the negative direction.
    /** @type {?} */
    const isRtl = this.dir && this.dir.value == 'rtl';
    /** @type {?} */
    const isHorizontal = this.orientation == 'horizontal';
    /** @type {?} */
    const axis = isHorizontal ? 'X' : 'Y';
    /** @type {?} */
    const axisDirection = isHorizontal && isRtl ? -1 : 1;
    /** @type {?} */
    let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
    this._renderedContentOffset = offset;
    if (to === 'to-end') {
      transform += ` translate${axis}(-100%)`;
      // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
      // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
      // expand upward).
      this._renderedContentOffsetNeedsRewrite = true;
    }
    if (this._renderedContentTransform != transform) {
      // We know this value is safe because we parse `offset` with `Number()` before passing it
      // into the string.
      this._renderedContentTransform = transform;
      this._markChangeDetectionNeeded(
      /**
      * @return {?}
      */
      () => {
        if (this._renderedContentOffsetNeedsRewrite) {
          this._renderedContentOffset -= this.measureRenderedContentSize();
          this._renderedContentOffsetNeedsRewrite = false;
          this.setRenderedContentOffset(this._renderedContentOffset);
        } else {
          this._scrollStrategy.onRenderedOffsetChanged();
        }
      });
    }
  }
  /**
   * Scrolls to the given offset from the start of the viewport. Please note that this is not always
   * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
   * direction, this would be the equivalent of setting a fictional `scrollRight` property.
   * @param {?} offset The offset to scroll to.
   * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   * @return {?}
   */
  scrollToOffset(offset, behavior = 'auto') {
    /** @type {?} */
    const options = {
      behavior
    };
    if (this.orientation === 'horizontal') {
      options.start = offset;
    } else {
      options.top = offset;
    }
    this.scrollTo(options);
  }
  /**
   * Scrolls to the offset for the given index.
   * @param {?} index The index of the element to scroll to.
   * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   * @return {?}
   */
  scrollToIndex(index, behavior = 'auto') {
    this._scrollStrategy.scrollToIndex(index, behavior);
  }
  /**
   * Gets the current scroll offset from the start of the viewport (in pixels).
   * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
   *     in horizontal mode.
   * @return {?}
   */
  measureScrollOffset(from) {
    return super.measureScrollOffset(from ? from : this.orientation === 'horizontal' ? 'start' : 'top');
  }
  /**
   * Measure the combined size of all of the rendered items.
   * @return {?}
   */
  measureRenderedContentSize() {
    /** @type {?} */
    const contentEl = this._contentWrapper.nativeElement;
    return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
  }
  /**
   * Measure the total combined size of the given range. Throws if the range includes items that are
   * not rendered.
   * @param {?} range
   * @return {?}
   */
  measureRangeSize(range) {
    if (!this._forOf) {
      return 0;
    }
    return this._forOf.measureRangeSize(range, this.orientation);
  }
  /**
   * Update the viewport dimensions and re-render.
   * @return {?}
   */
  checkViewportSize() {
    // TODO: Cleanup later when add logic for handling content resize
    this._measureViewportSize();
    this._scrollStrategy.onDataLengthChanged();
  }
  /**
   * Measure the viewport size.
   * @private
   * @return {?}
   */
  _measureViewportSize() {
    /** @type {?} */
    const viewportEl = this.elementRef.nativeElement;
    this._viewportSize = this.orientation === 'horizontal' ? viewportEl.clientWidth : viewportEl.clientHeight;
  }
  /**
   * Queue up change detection to run.
   * @private
   * @param {?=} runAfter
   * @return {?}
   */
  _markChangeDetectionNeeded(runAfter) {
    if (runAfter) {
      this._runAfterChangeDetection.push(runAfter);
    }
    // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
    // properties sequentially we only have to run `_doChangeDetection` once at the end.
    if (!this._isChangeDetectionPending) {
      this._isChangeDetectionPending = true;
      this.ngZone.runOutsideAngular(
      /**
      * @return {?}
      */
      () => Promise.resolve().then(
      /**
      * @return {?}
      */
      () => {
        this._doChangeDetection();
      }));
    }
  }
  /**
   * Run change detection.
   * @private
   * @return {?}
   */
  _doChangeDetection() {
    this._isChangeDetectionPending = false;
    // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
    // from the root, since the repeated items are content projected in. Calling `detectChanges`
    // instead does not properly check the projected content.
    this.ngZone.run(
    /**
    * @return {?}
    */
    () => this._changeDetectorRef.markForCheck());
    // Apply the content transform. The transform can't be set via an Angular binding because
    // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
    // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
    // the `Number` function first to coerce it to a numeric value.
    this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
    /** @type {?} */
    const runAfterChangeDetection = this._runAfterChangeDetection;
    this._runAfterChangeDetection = [];
    for (const fn of runAfterChangeDetection) {
      fn();
    }
  }
  /**
   * Calculates the `style.width` and `style.height` for the spacer element.
   * @private
   * @return {?}
   */
  _calculateSpacerSize() {
    this._totalContentHeight = this.orientation === 'horizontal' ? '' : `${this._totalContentSize}px`;
    this._totalContentWidth = this.orientation === 'horizontal' ? `${this._totalContentSize}px` : '';
  }
}
CdkVirtualScrollViewport.ɵfac = function CdkVirtualScrollViewport_Factory(t) {
  return new (t || CdkVirtualScrollViewport)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](VIRTUAL_SCROLL_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollDispatcher));
};
CdkVirtualScrollViewport.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CdkVirtualScrollViewport,
  selectors: [["cdk-virtual-scroll-viewport"]],
  viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
    }
  },
  hostAttrs: [1, "cdk-virtual-scroll-viewport"],
  hostVars: 4,
  hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
    }
  },
  inputs: {
    orientation: "orientation"
  },
  outputs: {
    scrolledIndexChange: "scrolledIndexChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: CdkScrollable,
    useExisting: CdkVirtualScrollViewport
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 4,
  vars: 4,
  consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]],
  template: function CdkVirtualScrollViewport_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
    }
  },
  styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:0}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:0}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}"],
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */
CdkVirtualScrollViewport.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
}, {
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
    args: [VIRTUAL_SCROLL_STRATEGY]
  }]
}, {
  type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
  }]
}, {
  type: ScrollDispatcher
}];
CdkVirtualScrollViewport.propDecorators = {
  orientation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  scrolledIndexChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  _contentWrapper: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
    args: ['contentWrapper', {
      static: true
    }]
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkVirtualScrollViewport, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'cdk-virtual-scroll-viewport',
      template: "<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\"><ng-content></ng-content></div><div class=\"cdk-virtual-scroll-spacer\" [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>",
      host: {
        'class': 'cdk-virtual-scroll-viewport',
        '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
        '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: CdkScrollable,
        useExisting: CdkVirtualScrollViewport
      }],
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:0}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:0}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [VIRTUAL_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: ScrollDispatcher
    }];
  }, {
    scrolledIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _contentWrapper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['contentWrapper', {
        static: true
      }]
    }]
  });
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Helper to extract size from a DOM Node.
 * @param {?} orientation
 * @param {?} node
 * @return {?}
 */
function getSize(orientation, node) {
  /** @type {?} */
  const el = /** @type {?} */node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  /** @type {?} */
  const rect = el.getBoundingClientRect();
  return orientation == 'horizontal' ? rect.width : rect.height;
}
/**
 * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
 * container.
 * @template T
 */
class CdkVirtualForOf {
  /**
   * @param {?} _viewContainerRef
   * @param {?} _template
   * @param {?} _differs
   * @param {?} _viewport
   * @param {?} ngZone
   */
  constructor(_viewContainerRef, _template, _differs, _viewport, ngZone) {
    this._viewContainerRef = _viewContainerRef;
    this._template = _template;
    this._differs = _differs;
    this._viewport = _viewport;
    /**
     * Emits when the rendered view of the data changes.
     */
    this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Subject that emits when a new DataSource instance is given.
     */
    this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * The size of the cache used to store templates that are not being used for re-use later.
     * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
     */
    this.cdkVirtualForTemplateCacheSize = 20;
    /**
     * Emits whenever the data in the current DataSource changes.
     */
    this.dataStream = this._dataSourceChanges.pipe(
    // Start off with null `DataSource`.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.startWith)( /** @type {?} */null),
    // Bundle up the previous and current data sources so we can work with both.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.pairwise)(),
    // Use `_changeDataSource` to disconnect from the previous data source and connect to the
    // new one, passing back a stream of data changes which we run through `switchMap` to give
    // us a data stream that emits the latest data from whatever the current `DataSource` is.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.switchMap)(
    /**
    * @param {?} __0
    * @return {?}
    */
    ([prev, cur]) => this._changeDataSource(prev, cur)),
    // Replay the last emitted data when someone subscribes.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.shareReplay)(1));
    /**
     * The differ used to calculate changes to the data.
     */
    this._differ = null;
    /**
     * The template cache used to hold on ot template instancess that have been stamped out, but don't
     * currently need to be rendered. These instances will be reused in the future rather than
     * stamping out brand new ones.
     */
    this._templateCache = [];
    /**
     * Whether the rendered data should be updated during the next ngDoCheck cycle.
     */
    this._needsUpdate = false;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.dataStream.subscribe(
    /**
    * @param {?} data
    * @return {?}
    */
    data => {
      this._data = data;
      this._onRenderedDataChange();
    });
    this._viewport.renderedRangeStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._destroyed)).subscribe(
    /**
    * @param {?} range
    * @return {?}
    */
    range => {
      this._renderedRange = range;
      ngZone.run(
      /**
      * @return {?}
      */
      () => this.viewChange.next(this._renderedRange));
      this._onRenderedDataChange();
    });
    this._viewport.attach(this);
  }
  /**
   * The DataSource to display.
   * @return {?}
   */
  get cdkVirtualForOf() {
    return this._cdkVirtualForOf;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  set cdkVirtualForOf(value) {
    this._cdkVirtualForOf = value;
    /** @type {?} */
    const ds = (0,_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_18__.isDataSource)(value) ? value :
    // Slice the value if its an NgIterable to ensure we're working with an array.
    new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_18__.ArrayDataSource(value instanceof rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable ? value : Array.prototype.slice.call(value || []));
    this._dataSourceChanges.next(ds);
  }
  /**
   * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
   * the item and produces a value to be used as the item's identity when tracking changes.
   * @return {?}
   */
  get cdkVirtualForTrackBy() {
    return this._cdkVirtualForTrackBy;
  }
  /**
   * @param {?} fn
   * @return {?}
   */
  set cdkVirtualForTrackBy(fn) {
    this._needsUpdate = true;
    this._cdkVirtualForTrackBy = fn ?
    /**
    * @param {?} index
    * @param {?} item
    * @return {?}
    */
    (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : undefined;
  }
  /**
   * The template used to stamp out new elements.
   * @param {?} value
   * @return {?}
   */
  set cdkVirtualForTemplate(value) {
    if (value) {
      this._needsUpdate = true;
      this._template = value;
    }
  }
  /**
   * Measures the combined size (width for horizontal orientation, height for vertical) of all items
   * in the specified range. Throws an error if the range includes items that are not currently
   * rendered.
   * @param {?} range
   * @param {?} orientation
   * @return {?}
   */
  measureRangeSize(range, orientation) {
    if (range.start >= range.end) {
      return 0;
    }
    if (range.start < this._renderedRange.start || range.end > this._renderedRange.end) {
      throw Error(`Error: attempted to measure an item that isn't rendered.`);
    }
    // The index into the list of rendered views for the first item in the range.
    /** @type {?} */
    const renderedStartIndex = range.start - this._renderedRange.start;
    // The length of the range we're measuring.
    /** @type {?} */
    const rangeLen = range.end - range.start;
    // Loop over all root nodes for all items in the range and sum up their size.
    /** @type {?} */
    let totalSize = 0;
    /** @type {?} */
    let i = rangeLen;
    while (i--) {
      /** @type {?} */
      const view = /** @type {?} */this._viewContainerRef.get(i + renderedStartIndex);
      /** @type {?} */
      let j = view ? view.rootNodes.length : 0;
      while (j--) {
        totalSize += getSize(orientation, /** @type {?} */view.rootNodes[j]);
      }
    }
    return totalSize;
  }
  /**
   * @return {?}
   */
  ngDoCheck() {
    if (this._differ && this._needsUpdate) {
      // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
      // this list being rendered (can use simpler algorithm) vs needs update due to data actually
      // changing (need to do this diff).
      /** @type {?} */
      const changes = this._differ.diff(this._renderedItems);
      if (!changes) {
        this._updateContext();
      } else {
        this._applyChanges(changes);
      }
      this._needsUpdate = false;
    }
  }
  /**
   * @return {?}
   */
  ngOnDestroy() {
    this._viewport.detach();
    this._dataSourceChanges.next();
    this._dataSourceChanges.complete();
    this.viewChange.complete();
    this._destroyed.next();
    this._destroyed.complete();
    for (let view of this._templateCache) {
      view.destroy();
    }
  }
  /**
   * React to scroll state changes in the viewport.
   * @private
   * @return {?}
   */
  _onRenderedDataChange() {
    if (!this._renderedRange) {
      return;
    }
    this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
    if (!this._differ) {
      this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
    }
    this._needsUpdate = true;
  }
  /**
   * Swap out one `DataSource` for another.
   * @private
   * @param {?} oldDs
   * @param {?} newDs
   * @return {?}
   */
  _changeDataSource(oldDs, newDs) {
    if (oldDs) {
      oldDs.disconnect(this);
    }
    this._needsUpdate = true;
    return newDs ? newDs.connect(this) : (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
  }
  /**
   * Update the `CdkVirtualForOfContext` for all views.
   * @private
   * @return {?}
   */
  _updateContext() {
    /** @type {?} */
    const count = this._data.length;
    /** @type {?} */
    let i = this._viewContainerRef.length;
    while (i--) {
      /** @type {?} */
      let view = /** @type {?} */this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
      view.detectChanges();
    }
  }
  /**
   * Apply changes to the DOM.
   * @private
   * @param {?} changes
   * @return {?}
   */
  _applyChanges(changes) {
    // Rearrange the views to put them in the right location.
    changes.forEachOperation(
    /**
    * @param {?} record
    * @param {?} adjustedPreviousIndex
    * @param {?} currentIndex
    * @return {?}
    */
    (record, adjustedPreviousIndex, currentIndex) => {
      if (record.previousIndex == null) {
        // Item added.
        // Item added.
        /** @type {?} */
        const view = this._insertViewForNewItem( /** @type {?} */currentIndex);
        view.context.$implicit = record.item;
      } else if (currentIndex == null) {
        // Item removed.
        this._cacheView(this._detachView( /** @type {?} */adjustedPreviousIndex));
      } else {
        // Item moved.
        // Item moved.
        /** @type {?} */
        const view = /** @type {?} */this._viewContainerRef.get( /** @type {?} */adjustedPreviousIndex);
        this._viewContainerRef.move(view, currentIndex);
        view.context.$implicit = record.item;
      }
    });
    // Update $implicit for any items that had an identity change.
    changes.forEachIdentityChange(
    /**
    * @param {?} record
    * @return {?}
    */
    record => {
      /** @type {?} */
      const view = /** @type {?} */this._viewContainerRef.get( /** @type {?} */record.currentIndex);
      view.context.$implicit = record.item;
    });
    // Update the context variables on all items.
    /** @type {?} */
    const count = this._data.length;
    /** @type {?} */
    let i = this._viewContainerRef.length;
    while (i--) {
      /** @type {?} */
      const view = /** @type {?} */this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
    }
  }
  /**
   * Cache the given detached view.
   * @private
   * @param {?} view
   * @return {?}
   */
  _cacheView(view) {
    if (this._templateCache.length < this.cdkVirtualForTemplateCacheSize) {
      this._templateCache.push(view);
    } else {
      /** @type {?} */
      const index = this._viewContainerRef.indexOf(view);
      // It's very unlikely that the index will ever be -1, but just in case,
      // destroy the view on its own, otherwise destroy it through the
      // container to ensure that all the references are removed.
      if (index === -1) {
        view.destroy();
      } else {
        this._viewContainerRef.remove(index);
      }
    }
  }
  /**
   * Inserts a view for a new item, either from the cache or by creating a new one.
   * @private
   * @param {?} index
   * @return {?}
   */
  _insertViewForNewItem(index) {
    return this._insertViewFromCache(index) || this._createEmbeddedViewAt(index);
  }
  /**
   * Update the computed properties on the `CdkVirtualForOfContext`.
   * @private
   * @param {?} context
   * @return {?}
   */
  _updateComputedContextProperties(context) {
    context.first = context.index === 0;
    context.last = context.index === context.count - 1;
    context.even = context.index % 2 === 0;
    context.odd = !context.even;
  }
  /**
   * Creates a new embedded view and moves it to the given index
   * @private
   * @param {?} index
   * @return {?}
   */
  _createEmbeddedViewAt(index) {
    // Note that it's important that we insert the item directly at the proper index,
    // rather than inserting it and the moving it in place, because if there's a directive
    // on the same node that injects the `ViewContainerRef`, Angular will insert another
    // comment node which can throw off the move when it's being repeated for all items.
    return this._viewContainerRef.createEmbeddedView(this._template, {
      $implicit: /** @type {?} */null,
      cdkVirtualForOf: this._cdkVirtualForOf,
      index: -1,
      count: -1,
      first: false,
      last: false,
      odd: false,
      even: false
    }, index);
  }
  /**
   * Inserts a recycled view from the cache at the given index.
   * @private
   * @param {?} index
   * @return {?}
   */
  _insertViewFromCache(index) {
    /** @type {?} */
    const cachedView = this._templateCache.pop();
    if (cachedView) {
      this._viewContainerRef.insert(cachedView, index);
    }
    return cachedView || null;
  }
  /**
   * Detaches the embedded view at the given index.
   * @private
   * @param {?} index
   * @return {?}
   */
  _detachView(index) {
    return (/** @type {?} */this._viewContainerRef.detach(index)
    );
  }
}
CdkVirtualForOf.ɵfac = function CdkVirtualForOf_Factory(t) {
  return new (t || CdkVirtualForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkVirtualScrollViewport, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
CdkVirtualForOf.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkVirtualForOf,
  selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
  inputs: {
    cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize",
    cdkVirtualForOf: "cdkVirtualForOf",
    cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
    cdkVirtualForTemplate: "cdkVirtualForTemplate"
  }
});
/** @nocollapse */
CdkVirtualForOf.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers
}, {
  type: CdkVirtualScrollViewport,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
  }]
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
}];
CdkVirtualForOf.propDecorators = {
  cdkVirtualForOf: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  cdkVirtualForTrackBy: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  cdkVirtualForTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  cdkVirtualForTemplateCacheSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkVirtualForOf, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkVirtualFor][cdkVirtualForOf]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers
    }, {
      type: CdkVirtualScrollViewport,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    cdkVirtualForTemplateCacheSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cdkVirtualForOf: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cdkVirtualForTrackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cdkVirtualForTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScrollingModule {}
ScrollingModule.ɵfac = function ScrollingModule_Factory(t) {
  return new (t || ScrollingModule)();
};
ScrollingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ScrollingModule
});
ScrollingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.BidiModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.PlatformModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.BidiModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollingModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.BidiModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.PlatformModule],
      exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.BidiModule, CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport],
      declarations: [CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScrollingModule, {
    declarations: function () {
      return [CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport];
    },
    imports: function () {
      return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.BidiModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.PlatformModule];
    },
    exports: function () {
      return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.BidiModule, CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport];
    }
  });
})();
/**
 * @deprecated ScrollDispatchModule has been renamed to ScrollingModule.
 * \@breaking-change 8.0.0 delete this alias
 */
class ScrollDispatchModule {}
ScrollDispatchModule.ɵfac = function ScrollDispatchModule_Factory(t) {
  return new (t || ScrollDispatchModule)();
};
ScrollDispatchModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ScrollDispatchModule
});
ScrollDispatchModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [ScrollingModule, ScrollingModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollDispatchModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [ScrollingModule],
      exports: [ScrollingModule]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScrollDispatchModule, {
    imports: [ScrollingModule],
    exports: [ScrollingModule]
  });
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Time in ms to throttle the resize events by default.
 * @type {?}
 */
const DEFAULT_RESIZE_TIME = 20;
/**
 * Simple utility for getting the bounds of the browser viewport.
 * \@docs-private
 */
class ViewportRuler {
  /**
   * @param {?} _platform
   * @param {?} ngZone
   */
  constructor(_platform, ngZone) {
    this._platform = _platform;
    ngZone.runOutsideAngular(
    /**
    * @return {?}
    */
    () => {
      this._change = _platform.isBrowser ? (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(window, 'resize'), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(window, 'orientationchange')) : (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
      // Note that we need to do the subscription inside `runOutsideAngular`
      // since subscribing is what causes the event listener to be added.
      this._invalidateCache = this.change().subscribe(
      /**
      * @return {?}
      */
      () => this._updateViewportSize());
    });
  }
  /**
   * @return {?}
   */
  ngOnDestroy() {
    this._invalidateCache.unsubscribe();
  }
  /**
   * Returns the viewport's width and height.
   * @return {?}
   */
  getViewportSize() {
    if (!this._viewportSize) {
      this._updateViewportSize();
    }
    /** @type {?} */
    const output = {
      width: this._viewportSize.width,
      height: this._viewportSize.height
    };
    // If we're not on a browser, don't cache the size since it'll be mocked out anyway.
    if (!this._platform.isBrowser) {
      this._viewportSize = /** @type {?} */null;
    }
    return output;
  }
  /**
   * Gets a ClientRect for the viewport's bounds.
   * @return {?}
   */
  getViewportRect() {
    // Use the document element's bounding rect rather than the window scroll properties
    // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
    // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
    // conceptual viewports. Under most circumstances these viewports are equivalent, but they
    // can disagree when the page is pinch-zoomed (on devices that support touch).
    // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
    // We use the documentElement instead of the body because, by default (without a css reset)
    // browsers typically give the document body an 8px margin, which is not included in
    // getBoundingClientRect().
    /** @type {?} */
    const scrollPosition = this.getViewportScrollPosition();
    const {
      width,
      height
    } = this.getViewportSize();
    return {
      top: scrollPosition.top,
      left: scrollPosition.left,
      bottom: scrollPosition.top + height,
      right: scrollPosition.left + width,
      height,
      width
    };
  }
  /**
   * Gets the (top, left) scroll position of the viewport.
   * @return {?}
   */
  getViewportScrollPosition() {
    // While we can get a reference to the fake document
    // during SSR, it doesn't have getBoundingClientRect.
    if (!this._platform.isBrowser) {
      return {
        top: 0,
        left: 0
      };
    }
    // The top-left-corner of the viewport is determined by the scroll position of the document
    // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
    // whether `document.body` or `document.documentElement` is the scrolled element, so reading
    // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
    // `document.documentElement` works consistently, where the `top` and `left` values will
    // equal negative the scroll position.
    /** @type {?} */
    const documentElement = /** @type {?} */document.documentElement;
    /** @type {?} */
    const documentRect = documentElement.getBoundingClientRect();
    /** @type {?} */
    const top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
    /** @type {?} */
    const left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
    return {
      top,
      left
    };
  }
  /**
   * Returns a stream that emits whenever the size of the viewport changes.
   * @param {?=} throttleTime Time in milliseconds to throttle the stream.
   * @return {?}
   */
  change(throttleTime = DEFAULT_RESIZE_TIME) {
    return throttleTime > 0 ? this._change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(throttleTime)) : this._change;
  }
  /**
   * Updates the cached viewport size.
   * @private
   * @return {?}
   */
  _updateViewportSize() {
    this._viewportSize = this._platform.isBrowser ? {
      width: window.innerWidth,
      height: window.innerHeight
    } : {
      width: 0,
      height: 0
    };
  }
}
ViewportRuler.ɵfac = function ViewportRuler_Factory(t) {
  return new (t || ViewportRuler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
ViewportRuler.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ViewportRuler,
  factory: ViewportRuler.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */
ViewportRuler.ctorParameters = () => [{
  type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
}];
/** @nocollapse */
ViewportRuler.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
  factory: function ViewportRuler_Factory() {
    return new ViewportRuler((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
  },
  token: ViewportRuler,
  providedIn: "root"
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewportRuler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentRuler
 * @param {?} platform
 * @param {?} ngZone
 * @return {?}
 */
function VIEWPORT_RULER_PROVIDER_FACTORY(parentRuler, platform, ngZone) {
  return parentRuler || new ViewportRuler(platform, ngZone);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
const VIEWPORT_RULER_PROVIDER = {
  // If there is already a ViewportRuler available, use that. Otherwise, provide a new one.
  provide: ViewportRuler,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), ViewportRuler], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform, _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone],
  useFactory: VIEWPORT_RULER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



/***/ }),

/***/ 68521:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/camera-remote/drop-drap/drop-drap.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = ".example-list {\n  list-style-type: none;\n  padding: 0;\n}\n.example-list li {\n  display: table-cell;\n  padding: 4px;\n}\n.example-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n.example-container .card {\n  margin: 0;\n}\n.example-box {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  font-size: 30pt;\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  opacity: 0.6;\n}\n.cdk-drop-list {\n  display: flex;\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder {\n  opacity: 0.3;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\nbutton {\n  margin-right: 4px;\n}\n.video-container {\n  margin: 0 auto;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.video-container video {\n  width: 100%;\n  height: 100%;\n}\n.play-button-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: auto;\n  pointer-events: none;\n}\n.play-button-wrapper .circlePlayBtn {\n  cursor: pointer;\n  pointer-events: auto;\n}\n.play-button-wrapper .circlePlayBtn svg {\n  width: 100px;\n  height: 100px;\n  fill: #fff;\n  stroke: #fff;\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3AtZHJhcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtBQUNGO0FBQ0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFBRjtBQUdFO0VBQ0UsU0FBQTtBQURKO0FBS0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1REFBQTtFQUNBLCtHQUFBO0FBRkY7QUFJRTtFQUNFLHFIQUFBO0VBQ0EsWUFBQTtBQUZKO0FBTUE7RUFDRSxhQUFBO0FBSEY7QUFRQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBQUxGO0FBUUE7RUFDRSxZQUFBO0FBTEY7QUFRQTtFQUNFLHNEQUFBO0FBTEY7QUFRQTtFQUNFLGlCQUFBO0FBTEY7QUFRQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBTEY7QUFPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBTEo7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQU5GO0FBUUU7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUFOSjtBQVFJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQU5OIiwiZmlsZSI6ImRyb3AtZHJhcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWxpc3Qge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG5cbiAgbGkge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgcGFkZGluZzogNHB4O1xuICB9XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLy9taW4td2lkdGg6IDYwMHB4O1xuICAvL21heC13aWR0aDogMTAwJTtcbiAgLmNhcmQge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4uZXhhbXBsZS1ib3gge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBjdXJzb3I6IG1vdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG5cbiAgJjphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICBvcGFjaXR5OiAuNjtcbiAgfVxufVxuXG4uY2RrLWRyb3AtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8vcGFkZGluZy1yaWdodDogMTBweDtcbiAgLy9wYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogLjM7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuLy8gdmlkZW9cbi52aWRlby1jb250YWluZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICB2aWRlbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5cbi5wbGF5LWJ1dHRvbi13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAuY2lyY2xlUGxheUJ0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuXG4gICAgc3ZnIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICBmaWxsOiAjZmZmO1xuICAgICAgc3Ryb2tlOiAjZmZmO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShibGFjaywgMC4yKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 58777:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/camera-remote/screen-management/screen-management.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = ".toggle-sticky {\n  position: fixed;\n  right: 0;\n  top: 25%;\n  transform: translateX(-50%);\n  width: 1px;\n  z-index: 1000;\n}\n\n.toggle-sticky-btn {\n  text-decoration: none;\n  display: block;\n  min-width: 130px;\n  margin: 0;\n  line-height: 26px;\n  transform: rotate(90deg);\n  transform-origin: 0 0;\n  background: #f2651c;\n  color: #fff;\n  text-align: center;\n  border-radius: 0 0 5px 5px;\n  border-color: rgba(0, 0, 0, 0);\n}\n\n.elem-float {\n  position: absolute;\n  z-index: 1;\n  right: 0;\n  padding: 10px;\n}\n\n.elem-float i:hover {\n  cursor: pointer;\n  color: #37cde6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmVlbi1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBRUEsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFFQSx3QkFBQTtFQUVBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0FBQUY7O0FBR0M7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBQUFIOztBQUNHO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFDTCIsImZpbGUiOiJzY3JlZW4tbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRvZ2dsZS1zdGlja3kge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDI1JTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogMXB4O1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4udG9nZ2xlLXN0aWNreS1idG4ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4td2lkdGg6IDEzMHB4O1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIGJhY2tncm91bmQ6ICNmMjY1MWM7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbiAuZWxlbS1mbG9hdCB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICB6LWluZGV4OiAxO1xuICAgcmlnaHQ6IDA7XG4gICBwYWRkaW5nOiAxMHB4O1xuICAgaTpob3ZlciB7XG4gICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgY29sb3I6ICMzN2NkZTY7XG4gICB9XG4gfVxuIl19 */";

/***/ }),

/***/ 47188:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/camera-remote/drop-drap/drop-drap.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"w-100\">\n    <h1>Drag&Drop with a flex-wrap</h1>\n\n    <button (click)=\"add()\">Add</button>\n    <button (click)=\"shuffle()\">Shuffle</button><br/>\n    <ul class=\"example-list\">\n        <li *ngFor=\"let item of items\">{{ item }}</li>\n    </ul>\n\n    <div cdkDropListGroup class=\"example-container\">\n        <div (cdkDropListDropped)=\"dropListDropped($event)\" [cdkDropListEnterPredicate]=\"dropListEnterPredicate\"\n             cdkDropList></div>\n        <div (cdkDropListDropped)=\"dropListDropped($event)\" *ngFor=\"let item of listCamera; let i = index;\"\n             [cdkDropListEnterPredicate]=\"dropListEnterPredicate\" cdkDropList >\n            <div (cdkDragMoved)=\"dragMoved($event);\" cdkDrag class=\"card\">\n                <app-ui-preloader [display]=\"loading[i]\"></app-ui-preloader>\n                <div [id]=\"'cam' + item.cameraId\" class=\"card-img-top\">\n                    <div *ngIf=\"!isShakeHands[i]\" class=\"video-container\" id=\"video-container\">\n                        <video controls preload=\"metadata\" width=\"100%\"></video>\n\n                        <div class=\"play-button-wrapper\">\n                            <div (click)=\"shakeHands(item, i)\"  class=\"play-gif circlePlayBtn\" title=\"Play video\">\n                                <!-- SVG Play Button -->\n                                <svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\">\n                                    <path d=\"M40 0a40 40 0 1040 40A40 40 0 0040 0zM26 61.56V18.44L64 40z\"/>\n                                </svg>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n";

/***/ }),

/***/ 96557:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/camera-remote/screen-management/screen-management.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"toggle-sticky\">\n        <button (click)=\"toggleRightSidebar()\"\n                class=\"btn btn-sm btn-primary right-bar-toggle toggle-sticky-btn\">\n            <i class=\"fe-settings mr-1\"></i> {{'config' | translate}}\n        </button>\n    </div>\n\n    <app-ui-preloader [display]=\"loading\"></app-ui-preloader>\n\n    <div class=\"row mt-2\">\n        <div class=\"col-12\">\n\n            <button (click)=\"order()\" class=\"btn btn-primary\">\n                Order\n            </button>\n\n            <!--                        <button class=\"btn btn-primary\" (click)=\"send()\">-->\n            <!--                            Sent message-->\n            <!--                        </button>-->\n\n            <button (click)=\"initSession()\" class=\"btn btn-primary\">\n                Start\n            </button>\n\n            <button (click)=\"onClickShowFullScreen(eleScreen, $event)\" class=\"float-right btn btn-primary\">Toàn màn\n                hình\n            </button>\n        </div>\n    </div>\n\n    <div #eleScreen class=\"row mt-3\">\n        <div class=\"col-12 p-0 m-0\" id=\"cameraMonitor\">\n            <div *ngFor=\"let row of [0, 1, 2, 3]\" class=\"card-group\">\n                <div *ngFor=\"let item of listCamera[row]; let i = index;\" class=\"card p-0 m-0\">\n                    <div [id]=\"item.cameraId\" class=\"card-img-top\">\n                        <div *ngIf=\"!item.isShakeHands\" class=\"video-container\">\n<!--                            <video *ngIf=\"!(row === 3 && i === 3)\" controls height=\"100%\" preload=\"metadata\" width=\"100%\" autoplay>-->\n<!--                                <source src=\"https://github.com/stefanedberg/angular-animate-video/blob/main/src/assets/small.mp4?raw=true\" type=\"video/mp4\" />-->\n<!--                            </video>-->\n                            <video *ngIf=\"!(row === 3 && i === 3)\" controls height=\"100%\" preload=\"metadata\" width=\"100%\"></video>\n                            <!--                            <img [src]=\"videoNotFoundImg\" class=\"img-fluid\">-->\n                            <app-webcam *ngIf=\"row === 3 && i === 3\"></app-webcam>\n                        </div>\n                    </div>\n                    <!--                    *ngIf=\"item.isShakeHands\"-->\n                    <div class=\"elem-float\">\n                        <i (click)=\"viewInfo(item)\" class=\"fas fa-info-circle\" [ngbTooltip]=\"item?.details | json\" placement=\"right\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-rightsidebar [mode]=\"'REMOTE'\"></app-rightsidebar>\n\n<ng-template #INFO role=\"document\" let-modal=\"close\">\n    <div class=\"modal-header bg-primary\">\n        <h4 class=\"modal-title\">Modal Heading</h4>\n        <button type=\"button\" class=\"close\" aria-hidden=\"true\" (click)=\"modal('Cross click')\">×</button>\n    </div>\n    <div class=\"modal-body\">\n        <h5>Text in a modal</h5>\n        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>\n        <hr>\n        <h5>Overflowing text to show scroll behavior</h5>\n        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,\n            egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel\n            augue laoreet rutrum faucibus dolor auctor.</p>\n    </div>\n<!--    <div class=\"modal-footer\">-->\n<!--        <button type=\"button\" class=\"btn btn-light waves-effect\" (click)=\"modal('Cross click')\"-->\n<!--                (click)=\"modal('Cross click')\">Close</button>-->\n<!--        <button type=\"button\" class=\"btn btn-primary waves-effect waves-light\">Save changes</button>-->\n<!--    </div>-->\n</ng-template>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_camera-remote_camera-remote_module_ts.js.map