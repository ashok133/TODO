System.register(['@angular/core', '@angular/router', 'rxjs/Subject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, Subject_1;
    var AlertService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            AlertService = (function () {
                function AlertService(router) {
                    var _this = this;
                    this.router = router;
                    this.subject = new Subject_1.Subject();
                    this.keepAfterNavigationChange = false;
                    // clear alert message on route change
                    router.events.subscribe(function (event) {
                        if (event instanceof router_1.NavigationStart) {
                            if (_this.keepAfterNavigationChange) {
                                // only keep for a single location change
                                _this.keepAfterNavigationChange = false;
                            }
                            else {
                                // clear alert
                                _this.subject.next();
                            }
                        }
                    });
                }
                AlertService.prototype.success = function (message, keepAfterNavigationChange) {
                    if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
                    this.keepAfterNavigationChange = keepAfterNavigationChange;
                    this.subject.next({ type: 'success', text: message });
                };
                AlertService.prototype.error = function (message, keepAfterNavigationChange) {
                    if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
                    this.keepAfterNavigationChange = keepAfterNavigationChange;
                    this.subject.next({ type: 'error', text: message });
                };
                AlertService.prototype.getMessage = function () {
                    return this.subject.asObservable();
                };
                AlertService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
                ], AlertService);
                return AlertService;
                var _a;
            }());
            exports_1("AlertService", AlertService);
        }
    }
});
//# sourceMappingURL=alert.service.js.map